# Map-native package sharing

The shop guide window has Export and Export all buttons. Export all snapshots the current custom collection, writes four records per shop tick to a fresh ShareAll/Pack_N/Import packet and commits its Manifest.txt only at the end. Built-in defaults are excluded unless copied to a custom guide. Earlier packets remain intact. The current selection and editbox focus are preserved; no whole-modal refresh runs for progress. The guide/package format contains no map release number, so later releases can retain compatibility as long as the schema and object IDs remain supported.

Selected guide exports accumulate in Warcraft III/ChoiceBattle/Guides/Share/Import. Send that entire Import folder. The recipient puts it under their own ChoiceBattle/Guides/Import and starts the map normally. No helper is needed for these packages. See [Russian player instructions](Sharing.ru.md).

Manifest.txt contains SGPK1;count. Entry_N.txt contains SGPE;canonicalHero;name. Each named hero/name.txt contains SGI;hero;name;space-separated-items;start;early;mid;contentOrigin;exportSlot. The manifest is committed last after verified writes; re-export updates the same named guide/slot. The map imports eight entries per shop tick, validates known heroes/names/items/phases/fingerprints, reuses personal-guide persistence and skips duplicates. Custom guide contents remain local and are never read by bot/gameplay decisions.

Packages from multiple senders should be imported one at a time. Personal Index*.txt files must not be exchanged. The map cannot enumerate arbitrary directory names.

# Choice Battle guide launcher

Build with .NET Framework 4.x csc:

    csc /target:winexe /optimize+ /reference:System.Windows.Forms.dll /out:ChoiceGuideLauncher.exe ChoiceGuideLauncher.cs

Distribute ChoiceGuideLauncher.exe beside the map in one ZIP. No module or launcher-setting changes are required.

On double-click, the launcher recursively reads .txt files under Warcraft III/ChoiceBattle/Guides, extracts SG2 guide data without executing the source files, ignores unrelated files and duplicates, and writes an immutable import snapshot plus Manifest.pld under AutoImport. It then starts UjAPILauncher.exe with -launch Warcraft -loadfile pointing to the map. The map imports the snapshot once at startup, in batches, after loading the player's existing guide index. Source files are never modified or deleted. Import entries are validated again by the map. Existing names are preserved by numbering conflicting imports. Persisted origin fingerprints prevent repeated copies on later starts.

Optional arguments:

    --warcraft-dir "C:\Program Files (x86)\Warcraft III"
    --map "C:\Maps\Choice_Battle_3_8_4.w3x"
    --ujapi "C:\UjAPI\UjAPILauncher.exe"
    --prepare-only

--prepare-only generates a snapshot without starting Warcraft. Run it again to discover files added since the previous scan. The map itself cannot enumerate arbitrary filenames. Starting Warcraft through its usual shortcut does not refresh the helper's snapshot.

Tests run the real compiled launcher against isolated fixtures and exercise the actual map JASS import functions with mocked Warcraft natives. An in-engine multiplayer test is still required.
