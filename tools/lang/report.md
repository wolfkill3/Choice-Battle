# LANG report

EN object texts: table/en

## Object texts
{
 "ability": {
  "entries": 12673,
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
calls: 14428, chunks: 58

## Code strings
{"pairs":0,"converted":0,"literals":0,"timerTitles":0,"quests":0}
skipped: 0

## Code reading object texts (check for desync / caching)
- 2236: call SetBaseItemStringFieldById(lgId,LANG_IF(lgF),lgS)
- 2238: call SetUnitBaseStringFieldById(lgId,LANG_UF(lgF),lgS)
- 2241: call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL,lgS)
- 2243: call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL_EXTENDED,lgS)
- 2302: call SetItemStringField(lgIt,LANG_IF(lgF),lgNew)
- 2305: call SetItemStringField(lgIt,LANG_IF(lgF),lgNew+SubString(lgCur,StringLength(lgOld),StringLength(lgCur)))
- 2324: if GetUnitStringField(lgU,UNIT_SF_NAME)==LoadStr(LANG_HT,-40,GetUnitTypeId(lgU)) then
- 2325: call SetUnitStringField(lgU,UNIT_SF_NAME,LoadStr(LANG_HT,-41,GetUnitTypeId(lgU)))
- 5718: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5723: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 5729: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5734: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 5741: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5746: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 5755: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 5806: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 28153: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1HO',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28212: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1HO',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28225: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AlFS',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28284: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AlFS',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28297: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('OM13',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28343: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('OM13',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28356: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A17D',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28415: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A17D',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28428: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A177',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28487: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A177',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28501: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0TN',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28561: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0TN',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28574: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A172',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28646: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A172',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28659: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A16U',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28731: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A16U',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28744: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0QK',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28898: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0QK',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) and but!=GetFrameByName
- 28912: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKG1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 28970: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKG1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 28983: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29114: elseif (GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKF1',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKBS',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBa
- 29117: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKBS',ABILITY_SF_ICON_NORMAL) then
- 29145: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKSS',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKS2',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBas
- 29173: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKUI',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKMI',ABILITY_SF_ICON_NORMAL) then
- 29212: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKQ1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29294: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKQ1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29307: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29365: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29378: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW5',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29424: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW5',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29437: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKE1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29519: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKE1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29532: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKT1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29578: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKT1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29591: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29637: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29651: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('MrW1',ABILITY_SF_ICON_NORMAL) and i==Ge
- 29670: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('MrW2',ABILITY_SF_ICON_NORMAL) and i==Ge
- 29688: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BbT1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29702: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BbT2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29718: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29732: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29746: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlG1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29760: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlG2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29774: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RmQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29788: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RmQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 29804: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('RsW1',ABILITY_SF_ICON_NORMAL) and i==GetFra
- 29846: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('RsW2',ABILITY_SF_ICON_NORMAL) and i==Ge
- 29888: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 29934: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 29947: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30002: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30059: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE2',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30073: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30075: if GetFrameTexture(GetFrameByName("TavernAbility",5),0)==GetAbilityBaseStringFieldById('SiF2',ABILITY_SF_ICON_NORMAL) then
- 30103: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('VGF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 30210: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('VGF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 30220: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1ER',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 30333: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1ER',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 30344: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('TMW0',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30358: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('TMW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30372: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0P6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30386: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1P6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30401: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A085',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30415: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A07Y',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30429: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08A',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30443: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A084',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30457: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A083',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30473: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FN',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30487: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FO',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30501: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FP',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30515: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FR',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30529: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0SI',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30543: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FT',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30557: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FV',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30572: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08J',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30586: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08D',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30600: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08E',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30614: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08H',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30628: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08G',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30644: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('DSW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30658: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('DSW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30674: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30688: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30704: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('Ad02',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30718: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('Ad12',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30734: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1AJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30748: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1AL',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30763: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE03',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30777: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE08',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30793: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE06',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30807: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE07',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30823: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30837: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30853: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30867: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30882: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaA6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30896: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaA7',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30911: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaAF',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30925: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaAG',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30941: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30955: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30970: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaR1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30984: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaR2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 30999: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31013: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31028: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaT1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31042: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaT2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31056: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1D7',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31070: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JAE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31084: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HSW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31098: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HSW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31113: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31127: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31142: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31156: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31171: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31186: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BO',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31200: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BQ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31215: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BR',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31231: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BT',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31245: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A23W',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31260: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BV',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31276: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BW',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31290: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BY',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31305: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31319: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31334: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31348: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31363: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31377: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31392: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31406: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31422: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31436: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AST2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31452: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31466: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31480: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31494: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31508: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31522: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31536: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A2DJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31550: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A3DJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31564: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31578: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31592: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31606: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31620: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ5',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31635: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KkR1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31649: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KkR2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31664: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JNF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31678: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JNF4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31693: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31707: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31722: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31736: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31751: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31765: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31780: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31794: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GST3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31809: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0YX',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31823: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0Z0',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31838: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31852: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31866: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31880: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31894: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuD1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31908: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuD2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 31925: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcT1',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcF5',ABILITY_SF_ICON_NORMAL) then
- 32017: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcF2',ABILITY_SF_ICON_NORMAL) then
- 32109: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcT2',ABILITY_SF_ICON_NORMAL) then
- 32202: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiR1',ABILITY_SF_ICON_NORMAL) and (GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MiQ1',ABILITY_SF_ICON_NORMAL) or GetFr
- 32216: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiR1',ABILITY_SF_ICON_NORMAL) and (GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MiQ3',ABILITY_SF_ICON_NORMAL) or GetFr
- 32231: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MadF',ABILITY_SF_ICON_NORMAL) then
- 32280: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MaFG',ABILITY_SF_ICON_NORMAL) then
- 32330: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGG1',ABILITY_SF_ICON_NORMAL) then
- 32379: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGG2',ABILITY_SF_ICON_NORMAL) and GetFrameSpriteModel(TavernHeroPortrait)==GetUnitBaseStringFieldById(RH_Force[133],UNIT_SF_PORTRAIT) then
- 32429: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0N1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MUQ1',ABILITY_SF_ICON_NORMAL) then
- 32478: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0N1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MUQ2',ABILITY_SF_ICON_NORMAL) then
- 32528: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0A3',ABILITY_SF_ICON_NORMAL) then
- 32565: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0AP',ABILITY_SF_ICON_NORMAL) then
- 32602: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0AZ',ABILITY_SF_ICON_NORMAL) then
- 32639: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0B2',ABILITY_SF_ICON_NORMAL) then
- 32676: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0B6',ABILITY_SF_ICON_NORMAL) then
- 32714: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0CZ',ABILITY_SF_ICON_ACTIVATED) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0D8',ABILITY_SF_ICON_NORMAL) then
- 32766: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0CZ',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0DF',ABILITY_SF_ICON_NORMAL) then
- 34183: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT01",false)==true and x!=200 then //and x!=208
- 34291: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT02",false)==true and x!=200 then //and x!=208
- 34399: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT03",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 34506: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT04",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 34613: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT05",false)==true and x!=200 then //and x!=208
- 34721: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT06",false)==true and x!=200 then //and x!=208
- 34829: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT07",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 34936: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT08",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 35043: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT12",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 39816: call SetItemStringField(it,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(it),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39870: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39879: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39890: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39920: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(p)]+GetPlayerName(p)+"|r)")
- 39963: call SetItemStringField(f,ITEM_SF_NAME,GetBaseItemStringFieldById(GetItemTypeId(f),ITEM_SF_NAME)+" ("+Color[GetPlayerId(GetItemPlayer(it))]+GetPlayerName(GetItemPlayer(it))+"|r)")
- 48303: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 48304: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 48305: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 48306: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 48307: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 48308: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 48309: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 48310: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 48311: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 48312: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 48313: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 48314: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 48315: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 48316: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 48317: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 48318: call SetAbilityBaseStringFieldById('A1CK',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\PassiveButtons\\PASNeroBrideF.blp")
- 50429: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL,GetAbilityBaseStringFieldById('BRR2',ABILITY_SF_ICON_NORMAL))
- 50430: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetAbilityBaseStringFieldById('BRR2',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 65674: if id!='A0NL' and id!='A0TN' and id!='A0P2' and id!='A0EH' and id!='A0CZ' and id!='A2CZ' and id!='A015' and id!='A315' and id!='A0SK' and id!='A1SK' and id!='A0YZ' and id!='A13V' and id!='A23V' and GetAbilityStringField(
- 91996: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNInstant_transmission.blp")
- 92523: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNWarpKamehameha.blp")
- 94117: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNCancel1.blp")
- 94292: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNInstant_transmission.blp")
- 94340: call SetAbilityStringLevelField(GetUnitAbility(u,'GKR1'),ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetUnitAbilityLevel(u,'GKR1')-1,GetAbilityBaseStringFieldById('GKR2',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 95056: call SetUnitStringField(n,UNIT_SF_NAME,"Final Kamehameha")
- 97854: if GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) then
- 97861: if time==4 and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) and GetUnitAbilityLevel(u,'A0TK')==0 then
- 97935: call SetAbilityBaseStringFieldById('A0TI',ABILITY_SLF_TARGET,"war3mapImported\\NormalBrolyHeadWithoutCrown.mdx")
- 97936: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL,GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL))
- 97937: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetAbilityBaseStringFieldById('BRSS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 98024: if GetSpellAbilityId()=='BRRS' and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)=="ReplaceableTextures\\Commandbuttons\\BTNBrolyRSSJ.blp" then
- 98027: elseif GetSpellAbilityId()=='BRRS' and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)=="ReplaceableTextures\\Commandbuttons\\BTNBrolySSJ.blp" then
- 120465: call SetAbilityStringField(GetUnitAbility(u,'A0RI'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNCancel1.blp")
- 120684: call SetAbilityStringField(GetUnitAbility(u,'A0RI'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNVegitoG.blp")
- 120732: call SetAbilityStringLevelField(GetUnitAbility(u,'A0RI'),ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetUnitAbilityLevel(u,'A0RI')-1,GetAbilityBaseStringFieldById('A1RI',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 198887: call SaveStr(HH,idp,'ShNP'+j,GetUnitName(c))
- 200157: call SaveStr(HH,idp,'ShNP'+j,GetUnitName(u))