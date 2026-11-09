using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Windows.Forms;
using Microsoft.Win32;

internal static class ChoiceGuideLauncher {
    static readonly UTF8Encoding Utf8 = new UTF8Encoding(false, true);
    static readonly Regex Payload = new Regex(@"call\s+SetPlayerName\s*\(\s*Player\s*\(\s*14\s*\)\s*,\s*""([^""\\\r\n]*)""\s*\)", RegexOptions.CultureInvariant);
    static string Option(string[] args, string key) {
        for (int i=0; i+1<args.Length; i++) if(args[i]==key) return args[i+1];
        return null;
    }
    static string SafeName(string name) {
        return new string(name.Where(c => c>=32 && "\"\\;|<>:/?*".IndexOf(c)<0).ToArray()).TrimEnd('.', ' ');
    }
    static string Hash(string value) {
        using(var hash=SHA256.Create()) return String.Concat(hash.ComputeHash(Utf8.GetBytes(value)).Select(b=>b.ToString("x2")));
    }
    static string Parse(string text) {
        string raw=text.Trim();
        if (!raw.StartsWith("SG2;",StringComparison.Ordinal)) {
            MatchCollection matches=Payload.Matches(text);
            if(matches.Count!=1) return null;
            raw=matches[0].Groups[1].Value;
        }
        string[] fields=raw.Split(';');
        int oldId;
        if(fields.Length<5 || fields.Length>9 || fields[0]!="SG2" || !Int32.TryParse(fields[1],out oldId) || oldId<1 || !Regex.IsMatch(fields[2],@"^[A-Za-z0-9]{4}$")) return null;
        string name=SafeName(fields[3]);
        if(name.Length==0 || Utf8.GetByteCount(name)>240 || name!=fields[3]) return null;
        string items=Regex.Replace(fields[4],@"\s+","");
        if(items.Length>64 || items.Length%4!=0 || !Regex.IsMatch(items,@"^[A-Za-z0-9]*$")) return null;
        int count=items.Length/4, remaining=count;
        int[] stages=new int[3]; int[] defaults={4,3,4};
        for(int i=0;i<3;i++) {
            int value=defaults[i];
            if(fields.Length>5+i && (!Int32.TryParse(fields[5+i],out value) || value<0 || value>16)) return null;
            if(fields.Length<=5+i) value=Math.Min(value,remaining);
            if(value>remaining) return null;
            stages[i]=value;remaining-=value;
        }
        string spaced=String.Join(" ",Enumerable.Range(0,count).Select(i=>items.Substring(i*4,4)));
        return "SGI;"+fields[2]+";"+name+";"+spaced+";"+String.Join(";",stages.Select(v=>v.ToString(CultureInfo.InvariantCulture)));
    }
    static IEnumerable<string> Files(string root) {
        var pending=new Stack<string>();pending.Push(root);
        while(pending.Count>0) {
            string directory=pending.Pop();
            string[] files;string[] children;
            try {files=Directory.GetFiles(directory,"*.txt");children=Directory.GetDirectories(directory);} catch(UnauthorizedAccessException) {continue;} catch(IOException) {continue;}
            foreach(string file in files.OrderBy(x=>x,StringComparer.OrdinalIgnoreCase)) yield return file;
            foreach(string child in children.OrderByDescending(x=>x,StringComparer.OrdinalIgnoreCase)) {
                if(String.Equals(Path.GetFileName(child),"AutoImport",StringComparison.OrdinalIgnoreCase)) continue;
                if((File.GetAttributes(child)&FileAttributes.ReparsePoint)==0) pending.Push(child);
            }
        }
    }
    static void WriteData(string path,string payload) {
        Directory.CreateDirectory(Path.GetDirectoryName(path));
        string script="function PreloadFiles takes nothing returns nothing\r\ncall SetPlayerName(Player(14),\""+payload+"\")\r\nendfunction\r\n";
        string temporary=path+".tmp";
        File.WriteAllText(temporary,script,Utf8);
        if(File.Exists(path)) File.Replace(temporary,path,null); else File.Move(temporary,path);
    }
    static string GameDirectory(string[] args) {
        string direct=Option(args,"--warcraft-dir");
        if(direct!=null) return Path.GetFullPath(direct);
        string own=AppDomain.CurrentDomain.BaseDirectory;
        var guesses=new List<string>{own,Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86),"Warcraft III")};
        using(var key=Registry.CurrentUser.OpenSubKey(@"Software\Blizzard Entertainment\Warcraft III")) if(key!=null) {
            object path=key.GetValue("InstallPath");if(path!=null) guesses.Insert(0,path.ToString());
        }
        return guesses.FirstOrDefault(p=>Directory.Exists(p) && (File.Exists(Path.Combine(p,"war3.exe")) || File.Exists(Path.Combine(p,"Warcraft III.exe"))));
    }
    [STAThread] static int Main(string[] args) {
        bool prepareOnly=args.Contains("--prepare-only");
        try {
            string game=GameDirectory(args);
            if(game==null || !Directory.Exists(game)) throw new InvalidOperationException("Warcraft III folder was not found. Use --warcraft-dir followed by its path.");
            string root=Path.Combine(game,@"ChoiceBattle\Guides");Directory.CreateDirectory(root);
            var guides=new List<string>();var unique=new HashSet<string>(StringComparer.Ordinal);int invalid=0,duplicates=0;
            foreach(string file in Files(root)) {
                if(new FileInfo(file).Length>65536) {invalid++;continue;}
                string data;
                try {data=Parse(File.ReadAllText(file,Utf8));} catch(IOException) {invalid++;continue;} catch(DecoderFallbackException) {invalid++;continue;}
                if(data==null) {invalid++;continue;}
                if(unique.Add(data)) guides.Add(data+";"+Hash(data));else duplicates++;
            }
            guides.Sort(StringComparer.Ordinal);
            string generation=Hash(String.Join("\n",guides));
            string output=Path.Combine(root,"AutoImport");
            for(int i=0;i<guides.Count;i++) WriteData(Path.Combine(output,generation,(i+1)+".pld"),guides[i]);
            WriteData(Path.Combine(output,"Manifest.pld"),"SGIM;"+generation+";"+guides.Count);
            File.WriteAllText(Path.Combine(output,"Report.txt"),"Suitable guides: "+guides.Count+"\r\nDuplicate files: "+duplicates+"\r\nOther or invalid files: "+invalid+"\r\nOriginal files were only read.\r\n",Utf8);
            if(prepareOnly) return 0;
            string map=Option(args,"--map");
            if(map==null) map=Directory.GetFiles(AppDomain.CurrentDomain.BaseDirectory,"Choice_Battle_*.w3x").OrderByDescending(File.GetLastWriteTimeUtc).FirstOrDefault();
            if(map==null || !File.Exists(map)) throw new InvalidOperationException("Place the Choice Battle map next to this launcher, or pass --map followed by the map path.");
            string launcher=Option(args,"--ujapi");
            if(launcher==null) launcher=Path.Combine(game,"UjAPILauncher.exe");
            if(!File.Exists(launcher)) throw new InvalidOperationException("UjAPILauncher.exe was not found. Use --ujapi followed by its path.");
            Process.Start(new ProcessStartInfo(launcher,"-launch \"Warcraft\" -loadfile \""+Path.GetFullPath(map)+"\""){WorkingDirectory=Path.GetDirectoryName(launcher),UseShellExecute=true,WindowStyle=ProcessWindowStyle.Hidden});
            return 0;
        } catch(Exception error) {
            if(!prepareOnly) MessageBox.Show(error.Message,"Choice Battle guide import",MessageBoxButtons.OK,MessageBoxIcon.Error);
            return 1;
        }
    }
}
