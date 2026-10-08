# LANG prototype report

EN ref: origin/English-TranslationFull

## Object texts
{
 "ability": {
  "entries": 12683,
  "idsOnlyInEN": 0,
  "enWithCyrillic": 0
 },
 "item": {
  "entries": 1163,
  "idsOnlyInEN": 0,
  "enWithCyrillic": 0
 },
 "unit": {
  "entries": 318,
  "idsOnlyInEN": 0,
  "enWithCyrillic": 0
 },
 "buff": {
  "entries": 261,
  "idsOnlyInEN": 0,
  "enWithCyrillic": 0
 },
 "framedef": {
  "entries": 13
 }
}
calls: 14438, chunks: 58

## Code strings
{"pairs":26,"converted":21,"literals":0,"timerTitles":0,"quests":0}
skipped: 34
- [no EN pair] 109: constant integer SH_LamboDBoard = StringHash("LamboDBoard")
- [no EN pair] 110: constant integer SH_BuuDBoard = StringHash("BuuDBoard")
- [no EN pair] 111: constant integer SH_BuuNearAgi = StringHash("BuuNearAgi") // Буу: характеристики от смертей врагов рядом (до конца раунда)
- [no EN pair] 112: constant integer SH_BuuNearStr = StringHash("BuuNearStr")
- [no EN pair] 113: constant integer SH_BuuNearInt = StringHash("BuuNearInt")
- [no EN pair] 114: constant integer SH_CellDBoard = StringHash("CellDBoard")
- [no EN pair] 115: constant integer SH_RemDBoard = StringHash("RemDBoard")
- [no EN pair] 116: constant integer SH_CellKills = StringHash("CellKills") // Селл: убийства и ассисты, за которые получены характеристики
- [no EN pair] 117: constant integer SH_CellAssists = StringHash("CellAssists")
- [no EN pair] 36284: call SetFrameText(GetFrameByName("CustomLeaderboardText",0),"|c00FFFF40Q charge|r: +"+I2S(R2I(LoadReal(HH,uid,SH_LamboQReal)))+". |c00FF8080Q damage|r: "+I2S(R2I(75+(GetUnitAbilityLevel(u,'LamQ')+1)*G
- [no EN pair] 36285: call ShowFrame(GetFrameByName("CustomLeaderboard",0), true)
- [no EN pair] 36286: call SetFrameSize( GetFrameByName("CustomLeaderboard",0), .1775, GetFrameHeight( GetFrameByName("CustomLeaderboardText",0))+0.016)
- [no EN pair] 36287: call SetFrameTextAlignment( GetFrameByName("CustomLeaderboardText",0), TEXT_JUSTIFY_LEFT, TEXT_JUSTIFY_LEFT )
- [no EN pair] 36291: call SetFrameText(GetFrameByName("CustomLeaderboardText",0)," ")
- [no EN pair] 36292: call ShowFrame(GetFrameByName("CustomLeaderboard",0),false)
- [no EN pair] 36312: call SetFrameText(GetFrameByName("CustomLeaderboardText",0),"|c00FF80C0Absorbed|r |c00FF0000STR|r: +"+I2S(GutsStr[ip])+"|n|c00FF80C0Nearby deaths|r (round): |c00FF0000STR|r +"+I2S(LoadInteger(HH,uid,S
- [no EN pair] 36313: call ShowFrame(GetFrameByName("CustomLeaderboard",0), true)
- [no EN pair] 36314: call SetFrameSize( GetFrameByName("CustomLeaderboard",0), .1775, GetFrameHeight( GetFrameByName("CustomLeaderboardText",0))+0.016)
- [no EN pair] 36315: call SetFrameTextAlignment( GetFrameByName("CustomLeaderboardText",0), TEXT_JUSTIFY_LEFT, TEXT_JUSTIFY_LEFT )
- [no EN pair] 36319: call SetFrameText(GetFrameByName("CustomLeaderboardText",0)," ")
- [no EN pair] 36320: call ShowFrame(GetFrameByName("CustomLeaderboard",0),false)
- [no EN pair] 36340: call SetFrameText(GetFrameByName("CustomLeaderboardText",0),"|c0080FF00Earned|r: |c00FF0000STR|r +"+I2S(LoadInteger(HH,uid,SH_CellKills))+"  |c003CFF3CAGI|r +"+I2S(LoadInteger(HH,uid,SH_CellKills))+" 
- [no EN pair] 36341: call ShowFrame(GetFrameByName("CustomLeaderboard",0), true)
- [no EN pair] 36342: call SetFrameSize( GetFrameByName("CustomLeaderboard",0), .1775, GetFrameHeight( GetFrameByName("CustomLeaderboardText",0))+0.016)
- [no EN pair] 36343: call SetFrameTextAlignment( GetFrameByName("CustomLeaderboardText",0), TEXT_JUSTIFY_LEFT, TEXT_JUSTIFY_LEFT )
- [no EN pair] 36347: call SetFrameText(GetFrameByName("CustomLeaderboardText",0)," ")
- [no EN pair] 36348: call ShowFrame(GetFrameByName("CustomLeaderboard",0),false)
- [no EN pair] 36368: call SetFrameText(GetFrameByName("CustomLeaderboardText",0),"|c00FF4040Max HP|r: |c00FF8080permanent|r +"+I2S(LoadInteger(HH,uid,SH_RemKillLife))+".  |c00FFB0B0temporary|r +"+I2S(LoadInteger(HH,uid,SH
- [no EN pair] 36369: call ShowFrame(GetFrameByName("CustomLeaderboard",0), true)
- [no EN pair] 36370: call SetFrameSize( GetFrameByName("CustomLeaderboard",0), .1775, GetFrameHeight( GetFrameByName("CustomLeaderboardText",0))+0.016)
- [no EN pair] 36371: call SetFrameTextAlignment( GetFrameByName("CustomLeaderboardText",0), TEXT_JUSTIFY_LEFT, TEXT_JUSTIFY_LEFT )
- [no EN pair] 36375: call SetFrameText(GetFrameByName("CustomLeaderboardText",0)," ")
- [no EN pair] 36376: call ShowFrame(GetFrameByName("CustomLeaderboard",0),false)
- [no EN pair] 244170: local string abc="абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"

## Code reading object texts (check for desync / caching)
- 2209: call SetBaseItemStringFieldById(lgId,LANG_IF(lgF),lgS)
- 2211: call SetUnitBaseStringFieldById(lgId,LANG_UF(lgF),lgS)
- 2214: call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL,lgS)
- 2216: call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL_EXTENDED,lgS)
- 2270: call SetItemStringField(lgIt,LANG_IF(lgF),lgNew)
- 2273: call SetItemStringField(lgIt,LANG_IF(lgF),lgNew+SubString(lgCur,StringLength(lgOld),StringLength(lgCur)))
- 2292: if GetUnitStringField(lgU,UNIT_SF_NAME)==LoadStr(LANG_HT,-40,GetUnitTypeId(lgU)) then
- 2293: call SetUnitStringField(lgU,UNIT_SF_NAME,LoadStr(LANG_HT,-41,GetUnitTypeId(lgU)))
- 5660: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5665: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 5671: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5676: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 5683: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5688: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 5697: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5748: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 28075: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1HO',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28134: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1HO',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28147: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AlFS',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28206: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AlFS',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28219: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('OM13',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28265: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('OM13',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28278: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A17D',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28337: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A17D',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28350: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A177',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28409: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A177',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28423: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0TN',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28483: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0TN',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28496: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A172',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28568: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A172',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28581: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A16U',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28653: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A16U',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28666: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0QK',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28820: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0QK',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) and but!=GetFrameByName
- 28834: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKG1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28892: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKG1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28905: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29036: elseif (GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKF1',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKBS',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBa
- 29039: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKBS',ABILITY_SF_ICON_NORMAL) then
- 29067: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKSS',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKS2',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBas
- 29095: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKUI',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKMI',ABILITY_SF_ICON_NORMAL) then
- 29134: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKQ1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29216: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKQ1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29229: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29287: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29300: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW5',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29346: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW5',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29359: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKE1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29441: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKE1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29454: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKT1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29500: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKT1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29513: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29559: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29573: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('MrW1',ABILITY_SF_ICON_NORMAL) and i==Ge
- 29592: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('MrW2',ABILITY_SF_ICON_NORMAL) and i==Ge
- 29610: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BbT1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29624: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BbT2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29640: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29654: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29668: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlG1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29682: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlG2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29696: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RmQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29710: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RmQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29726: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('RsW1',ABILITY_SF_ICON_NORMAL) and i==GetFra
- 29768: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('RsW2',ABILITY_SF_ICON_NORMAL) and i==Ge
- 29810: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29856: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29869: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29924: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29981: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE2',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29995: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29997: if GetFrameTexture(GetFrameByName("TavernAbility",5),0)==GetAbilityBaseStringFieldById('SiF2',ABILITY_SF_ICON_NORMAL) then
- 30025: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('VGF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 30132: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('VGF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 30142: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1ER',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 30255: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1ER',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 30266: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('TMW0',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30280: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('TMW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30294: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0P6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30308: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1P6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30323: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A085',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30337: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A07Y',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30351: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08A',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30365: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A084',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30379: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A083',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30395: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FN',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30409: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FO',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30423: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FP',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30437: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FR',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30451: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0SI',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30465: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FT',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30479: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FV',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30494: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08J',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30508: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08D',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30522: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08E',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30536: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08H',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30550: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08G',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30566: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('DSW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30580: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('DSW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30596: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30610: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30626: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('Ad02',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30640: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('Ad12',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30656: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1AJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30670: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1AL',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30685: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE03',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30699: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE08',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30715: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE06',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30729: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE07',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30745: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30759: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30775: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30789: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30804: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaA6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30818: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaA7',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30833: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaAF',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30847: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaAG',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30863: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30877: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30892: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaR1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30906: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaR2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30921: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30935: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30950: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaT1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30964: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaT2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30978: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1D7',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30992: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JAE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31006: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HSW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31020: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HSW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31035: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31049: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31064: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31078: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31093: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31108: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BO',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31122: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BQ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31137: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BR',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31153: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BT',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31167: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A23W',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31182: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BV',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31198: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BW',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31212: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BY',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31227: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31241: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31256: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31270: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31285: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31299: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31314: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31328: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31344: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31358: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AST2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31374: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31388: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31402: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31416: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31430: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31444: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31458: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A2DJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31472: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A3DJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31486: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31500: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31514: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31528: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31542: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ5',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31557: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KkR1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31571: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KkR2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31586: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JNF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31600: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JNF4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31615: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31629: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31644: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31658: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31673: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31687: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31702: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31716: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GST3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31731: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0YX',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31745: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0Z0',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31760: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31774: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31788: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31802: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31816: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuD1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31830: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuD2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31847: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcT1',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcF5',ABILITY_SF_ICON_NORMAL) then
- 31939: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcF2',ABILITY_SF_ICON_NORMAL) then
- 32031: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcT2',ABILITY_SF_ICON_NORMAL) then
- 32124: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiR1',ABILITY_SF_ICON_NORMAL) and (GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MiQ1',ABILITY_SF_ICON_NORMAL) or GetFr
- 32138: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiR1',ABILITY_SF_ICON_NORMAL) and (GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MiQ3',ABILITY_SF_ICON_NORMAL) or GetFr
- 32153: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MadF',ABILITY_SF_ICON_NORMAL) then
- 32202: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MaFG',ABILITY_SF_ICON_NORMAL) then
- 32252: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGG1',ABILITY_SF_ICON_NORMAL) then
- 32301: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGG2',ABILITY_SF_ICON_NORMAL) and GetFrameSpriteModel(TavernHeroPortrait)==GetUnitBaseStringFieldById(RH_Force[133],UNIT_SF_PORTRAIT) then
- 32351: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0N1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MUQ1',ABILITY_SF_ICON_NORMAL) then
- 32400: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0N1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MUQ2',ABILITY_SF_ICON_NORMAL) then
- 32450: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0A3',ABILITY_SF_ICON_NORMAL) then
- 32487: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0AP',ABILITY_SF_ICON_NORMAL) then
- 32524: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0AZ',ABILITY_SF_ICON_NORMAL) then
- 32561: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0B2',ABILITY_SF_ICON_NORMAL) then
- 32598: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0B6',ABILITY_SF_ICON_NORMAL) then
- 32636: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0CZ',ABILITY_SF_ICON_ACTIVATED) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0D8',ABILITY_SF_ICON_NORMAL) then
- 32688: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0CZ',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0DF',ABILITY_SF_ICON_NORMAL) then
- 34105: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT01",false)==true and x!=200 then //and x!=208
- 34213: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT02",false)==true and x!=200 then //and x!=208
- 34321: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT03",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 34428: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT04",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 34535: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT05",false)==true and x!=200 then //and x!=208
- 34643: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT06",false)==true and x!=200 then //and x!=208
- 34751: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT07",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 34858: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT08",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 34965: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT12",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 39319: call SetItemStringField(it,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(it),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39373: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39382: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39393: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39423: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39466: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(GetItemPlayer(it))]+GetPlayerName(GetItemPlayer(it))+"|r)")
- 47806: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 47807: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 47808: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 47809: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 47810: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 47811: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 47812: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 47813: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 47814: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 47815: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 47816: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 47817: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 47818: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 47819: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 47820: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 47821: call SetAbilityBaseStringFieldById('A1CK',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\PassiveButtons\\PASNeroBrideF.blp")
- 49932: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL,GetAbilityBaseStringFieldById('BRR2',ABILITY_SF_ICON_NORMAL))
- 49933: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetAbilityBaseStringFieldById('BRR2',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 64988: if id!='A0NL' and id!='A0TN' and id!='A0P2' and id!='A0EH' and id!='A0CZ' and id!='A2CZ' and id!='A015' and id!='A315' and id!='A0SK' and id!='A1SK' and id!='A0YZ' and id!='A13V' and id!='A23V' and GetAbilityStringField(
- 91325: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNInstant_transmission.blp")
- 91852: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNWarpKamehameha.blp")
- 93446: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNCancel1.blp")
- 93621: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNInstant_transmission.blp")
- 93669: call SetAbilityStringLevelField(GetUnitAbility(u,'GKR1'),ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetUnitAbilityLevel(u,'GKR1')-1,GetAbilityBaseStringFieldById('GKR2',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 94385: call SetUnitStringField(n,UNIT_SF_NAME,"Final Kamehameha")
- 97183: if GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) then
- 97190: if time==4 and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) and GetUnitAbilityLevel(u,'A0TK')==0 then
- 97264: call SetAbilityBaseStringFieldById('A0TI',ABILITY_SLF_TARGET,"war3mapImported\\NormalBrolyHeadWithoutCrown.mdx")
- 97265: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL,GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL))
- 97266: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetAbilityBaseStringFieldById('BRSS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 97353: if GetSpellAbilityId()=='BRRS' and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)=="ReplaceableTextures\\Commandbuttons\\BTNBrolyRSSJ.blp" then
- 97356: elseif GetSpellAbilityId()=='BRRS' and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)=="ReplaceableTextures\\Commandbuttons\\BTNBrolySSJ.blp" then
- 119794: call SetAbilityStringField(GetUnitAbility(u,'A0RI'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNCancel1.blp")
- 120013: call SetAbilityStringField(GetUnitAbility(u,'A0RI'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNVegitoG.blp")
- 120061: call SetAbilityStringLevelField(GetUnitAbility(u,'A0RI'),ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetUnitAbilityLevel(u,'A0RI')-1,GetAbilityBaseStringFieldById('A1RI',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 198216: call SaveStr(HH,idp,'ShNP'+j,GetUnitName(c))
- 199486: call SaveStr(HH,idp,'ShNP'+j,GetUnitName(u))