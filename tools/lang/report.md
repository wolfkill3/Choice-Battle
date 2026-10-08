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
skipped: 0

## Code reading object texts (check for desync / caching)
- 2200: call SetBaseItemStringFieldById(lgId,LANG_IF(lgF),lgS)
- 2202: call SetUnitBaseStringFieldById(lgId,LANG_UF(lgF),lgS)
- 2205: call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL,lgS)
- 2207: call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL_EXTENDED,lgS)
- 2261: call SetItemStringField(lgIt,LANG_IF(lgF),lgNew)
- 2264: call SetItemStringField(lgIt,LANG_IF(lgF),lgNew+SubString(lgCur,StringLength(lgOld),StringLength(lgCur)))
- 2283: if GetUnitStringField(lgU,UNIT_SF_NAME)==LoadStr(LANG_HT,-40,GetUnitTypeId(lgU)) then
- 2284: call SetUnitStringField(lgU,UNIT_SF_NAME,LoadStr(LANG_HT,-41,GetUnitTypeId(lgU)))
- 5651: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5656: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 5662: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5667: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 5674: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5679: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 5688: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5739: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 28066: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1HO',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28125: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1HO',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28138: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AlFS',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28197: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AlFS',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28210: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('OM13',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28256: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('OM13',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28269: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A17D',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28328: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A17D',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28341: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A177',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28400: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A177',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28414: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0TN',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28474: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0TN',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28487: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A172',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28559: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A172',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28572: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A16U',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28644: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A16U',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28657: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0QK',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28811: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0QK',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) and but!=GetFrameByName
- 28825: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKG1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28883: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKG1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28896: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29027: elseif (GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKF1',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKBS',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBa
- 29030: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKBS',ABILITY_SF_ICON_NORMAL) then
- 29058: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKSS',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKS2',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBas
- 29086: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKUI',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKMI',ABILITY_SF_ICON_NORMAL) then
- 29125: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKQ1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29207: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKQ1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29220: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29278: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29291: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW5',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29337: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW5',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29350: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKE1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29432: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKE1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29445: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKT1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29491: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKT1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29504: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29550: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29564: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('MrW1',ABILITY_SF_ICON_NORMAL) and i==Ge
- 29583: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('MrW2',ABILITY_SF_ICON_NORMAL) and i==Ge
- 29601: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BbT1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29615: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BbT2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29631: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29645: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29659: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlG1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29673: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlG2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29687: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RmQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29701: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RmQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29717: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('RsW1',ABILITY_SF_ICON_NORMAL) and i==GetFra
- 29759: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('RsW2',ABILITY_SF_ICON_NORMAL) and i==Ge
- 29801: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29847: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29860: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29915: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29972: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE2',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29986: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29988: if GetFrameTexture(GetFrameByName("TavernAbility",5),0)==GetAbilityBaseStringFieldById('SiF2',ABILITY_SF_ICON_NORMAL) then
- 30016: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('VGF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 30123: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('VGF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 30133: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1ER',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 30246: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1ER',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 30257: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('TMW0',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30271: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('TMW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30285: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0P6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30299: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1P6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30314: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A085',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30328: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A07Y',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30342: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08A',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30356: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A084',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30370: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A083',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30386: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FN',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30400: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FO',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30414: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FP',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30428: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FR',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30442: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0SI',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30456: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FT',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30470: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FV',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30485: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08J',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30499: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08D',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30513: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08E',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30527: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08H',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30541: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08G',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30557: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('DSW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30571: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('DSW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30587: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30601: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30617: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('Ad02',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30631: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('Ad12',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30647: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1AJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30661: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1AL',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30676: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE03',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30690: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE08',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30706: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE06',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30720: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE07',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30736: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30750: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30766: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30780: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30795: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaA6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30809: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaA7',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30824: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaAF',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30838: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaAG',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30854: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30868: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30883: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaR1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30897: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaR2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30912: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30926: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30941: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaT1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30955: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaT2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30969: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1D7',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30983: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JAE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30997: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HSW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31011: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HSW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31026: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31040: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31055: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31069: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31084: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31099: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BO',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31113: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BQ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31128: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BR',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31144: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BT',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31158: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A23W',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31173: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BV',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31189: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BW',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31203: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BY',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31218: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31232: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31247: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31261: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31276: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31290: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31305: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31319: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31335: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31349: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AST2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31365: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31379: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31393: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31407: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31421: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31435: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31449: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A2DJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31463: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A3DJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31477: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31491: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31505: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31519: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31533: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ5',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31548: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KkR1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31562: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KkR2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31577: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JNF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31591: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JNF4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31606: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31620: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31635: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31649: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31664: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31678: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31693: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31707: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GST3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31722: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0YX',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31736: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0Z0',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31751: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31765: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31779: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31793: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31807: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuD1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31821: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuD2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31838: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcT1',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcF5',ABILITY_SF_ICON_NORMAL) then
- 31930: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcF2',ABILITY_SF_ICON_NORMAL) then
- 32022: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcT2',ABILITY_SF_ICON_NORMAL) then
- 32115: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiR1',ABILITY_SF_ICON_NORMAL) and (GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MiQ1',ABILITY_SF_ICON_NORMAL) or GetFr
- 32129: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiR1',ABILITY_SF_ICON_NORMAL) and (GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MiQ3',ABILITY_SF_ICON_NORMAL) or GetFr
- 32144: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MadF',ABILITY_SF_ICON_NORMAL) then
- 32193: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MaFG',ABILITY_SF_ICON_NORMAL) then
- 32243: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGG1',ABILITY_SF_ICON_NORMAL) then
- 32292: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGG2',ABILITY_SF_ICON_NORMAL) and GetFrameSpriteModel(TavernHeroPortrait)==GetUnitBaseStringFieldById(RH_Force[133],UNIT_SF_PORTRAIT) then
- 32342: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0N1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MUQ1',ABILITY_SF_ICON_NORMAL) then
- 32391: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0N1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MUQ2',ABILITY_SF_ICON_NORMAL) then
- 32441: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0A3',ABILITY_SF_ICON_NORMAL) then
- 32478: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0AP',ABILITY_SF_ICON_NORMAL) then
- 32515: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0AZ',ABILITY_SF_ICON_NORMAL) then
- 32552: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0B2',ABILITY_SF_ICON_NORMAL) then
- 32589: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0B6',ABILITY_SF_ICON_NORMAL) then
- 32627: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0CZ',ABILITY_SF_ICON_ACTIVATED) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0D8',ABILITY_SF_ICON_NORMAL) then
- 32679: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0CZ',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0DF',ABILITY_SF_ICON_NORMAL) then
- 34096: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT01",false)==true and x!=200 then //and x!=208
- 34204: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT02",false)==true and x!=200 then //and x!=208
- 34312: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT03",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 34419: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT04",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 34526: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT05",false)==true and x!=200 then //and x!=208
- 34634: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT06",false)==true and x!=200 then //and x!=208
- 34742: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT07",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 34849: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT08",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 34956: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT12",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 39154: call SetItemStringField(it,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(it),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39208: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39217: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39228: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39258: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39301: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(GetItemPlayer(it))]+GetPlayerName(GetItemPlayer(it))+"|r)")
- 47627: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 47628: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 47629: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 47630: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 47631: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 47632: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 47633: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 47634: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 47635: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 47636: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 47637: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 47638: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 47639: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 47640: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 47641: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 47642: call SetAbilityBaseStringFieldById('A1CK',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\PassiveButtons\\PASNeroBrideF.blp")
- 49715: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL,GetAbilityBaseStringFieldById('BRR2',ABILITY_SF_ICON_NORMAL))
- 49716: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetAbilityBaseStringFieldById('BRR2',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 64769: if id!='A0NL' and id!='A0TN' and id!='A0P2' and id!='A0EH' and id!='A0CZ' and id!='A2CZ' and id!='A015' and id!='A315' and id!='A0SK' and id!='A1SK' and id!='A0YZ' and id!='A13V' and id!='A23V' and GetAbilityStringField(
- 91106: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNInstant_transmission.blp")
- 91633: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNWarpKamehameha.blp")
- 93227: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNCancel1.blp")
- 93402: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNInstant_transmission.blp")
- 93450: call SetAbilityStringLevelField(GetUnitAbility(u,'GKR1'),ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetUnitAbilityLevel(u,'GKR1')-1,GetAbilityBaseStringFieldById('GKR2',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 94166: call SetUnitStringField(n,UNIT_SF_NAME,"Final Kamehameha")
- 96964: if GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) then
- 96971: if time==4 and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) and GetUnitAbilityLevel(u,'A0TK')==0 then
- 97045: call SetAbilityBaseStringFieldById('A0TI',ABILITY_SLF_TARGET,"war3mapImported\\NormalBrolyHeadWithoutCrown.mdx")
- 97046: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL,GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL))
- 97047: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetAbilityBaseStringFieldById('BRSS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 97134: if GetSpellAbilityId()=='BRRS' and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)=="ReplaceableTextures\\Commandbuttons\\BTNBrolyRSSJ.blp" then
- 97137: elseif GetSpellAbilityId()=='BRRS' and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)=="ReplaceableTextures\\Commandbuttons\\BTNBrolySSJ.blp" then
- 119575: call SetAbilityStringField(GetUnitAbility(u,'A0RI'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNCancel1.blp")
- 119794: call SetAbilityStringField(GetUnitAbility(u,'A0RI'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNVegitoG.blp")
- 119842: call SetAbilityStringLevelField(GetUnitAbility(u,'A0RI'),ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetUnitAbilityLevel(u,'A0RI')-1,GetAbilityBaseStringFieldById('A1RI',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 197997: call SaveStr(HH,idp,'ShNP'+j,GetUnitName(c))
- 199267: call SaveStr(HH,idp,'ShNP'+j,GetUnitName(u))