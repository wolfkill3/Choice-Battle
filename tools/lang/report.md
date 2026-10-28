# LANG report

EN object texts: table/en

## Object texts
{
 "ability": {
  "entries": 12871,
  "idsOnlyInEN": 0,
  "enWithCyrillic": 0
 },
 "item": {
  "entries": 1183,
  "idsOnlyInEN": 0,
  "enWithCyrillic": 0
 },
 "unit": {
  "entries": 322,
  "idsOnlyInEN": 0,
  "enWithCyrillic": 0
 },
 "buff": {
  "entries": 264,
  "idsOnlyInEN": 0,
  "enWithCyrillic": 0
 },
 "framedef": {
  "entries": 15
 }
}
calls: 14655, chunks: 59

## Code strings
{"pairs":0,"converted":0,"literals":0,"timerTitles":0,"quests":0}
skipped: 0

## Code reading object texts (check for desync / caching)
- 2585: call SetBaseItemStringFieldById(lgId,LANG_IF(lgF),lgS)
- 2587: call SetUnitBaseStringFieldById(lgId,LANG_UF(lgF),lgS)
- 2590: call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL,lgS)
- 2592: call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL_EXTENDED,lgS)
- 2656: call SetItemStringField(lgIt,LANG_IF(lgF),lgNew)
- 2659: call SetItemStringField(lgIt,LANG_IF(lgF),lgNew+SubString(lgCur,StringLength(lgOld),StringLength(lgCur)))
- 2678: if GetUnitStringField(lgU,UNIT_SF_NAME)==LoadStr(LANG_HT,-40,GetUnitTypeId(lgU)) then
- 2679: call SetUnitStringField(lgU,UNIT_SF_NAME,LoadStr(LANG_HT,-41,GetUnitTypeId(lgU)))
- 6525: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 6530: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 6536: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 6541: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 6548: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 6553: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 6562: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 6613: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 14493: call SaveInteger(HH,SH_TavSwapIc,StringHash(GetAbilityBaseStringFieldById(a,ABILITY_SF_ICON_NORMAL)),b)
- 14494: call SaveInteger(HH,SH_TavSwapIc,StringHash(GetAbilityBaseStringFieldById(b,ABILITY_SF_ICON_NORMAL)),a)
- 31222: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1HO',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31281: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1HO',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31294: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AlFS',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31353: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AlFS',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31366: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('OM13',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31412: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('OM13',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31425: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A17D',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31484: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A17D',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31497: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A177',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31556: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A177',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31570: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0TN',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31630: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0TN',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31643: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A172',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31715: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A172',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31728: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A16U',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31800: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A16U',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31813: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0QK',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31967: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0QK',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) and but!=GetFrameByName
- 31981: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKG1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32039: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKG1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32052: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32183: elseif (GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKF1',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKBS',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBa
- 32186: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKBS',ABILITY_SF_ICON_NORMAL) then
- 32214: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKSS',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKS2',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBas
- 32242: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKUI',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKMI',ABILITY_SF_ICON_NORMAL) then
- 32281: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKQ1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32363: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKQ1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32376: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32434: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32447: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW5',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32493: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW5',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32506: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKE1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32588: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKE1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32601: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKT1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32647: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKT1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32660: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32706: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32720: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('MrW1',ABILITY_SF_ICON_NORMAL) and i==Ge
- 32739: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('MrW2',ABILITY_SF_ICON_NORMAL) and i==Ge
- 32757: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BbT1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32771: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BbT2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32787: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32801: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32815: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlG1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32829: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlG2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32843: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RmQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32857: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RmQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32872: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SnE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32886: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SnEc',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33127: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0JA',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33141: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ToEf',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33203: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ToFE',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33292: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('RsW1',ABILITY_SF_ICON_NORMAL) and i==GetFra
- 33334: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('RsW2',ABILITY_SF_ICON_NORMAL) and i==Ge
- 33376: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 33422: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 33435: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33490: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33547: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE2',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33561: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33563: if GetFrameTexture(GetFrameByName("TavernAbility",5),0)==GetAbilityBaseStringFieldById('SiF2',ABILITY_SF_ICON_NORMAL) then
- 33591: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('VGF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 33698: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('VGF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 33708: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1ER',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 33821: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1ER',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 33832: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('TMW0',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33846: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('TMW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33860: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0P6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33874: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1P6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33889: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A085',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33903: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A07Y',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33917: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08A',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33931: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A084',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33945: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A083',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33961: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FN',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33975: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FO',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33989: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FP',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34003: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FR',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34017: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0SI',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34031: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FT',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34045: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FV',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34060: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08J',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34074: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08D',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34088: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08E',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34102: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08H',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34116: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08G',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34132: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('DSW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34146: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('DSW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34162: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34176: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34192: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('Ad02',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34206: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('Ad12',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34222: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1AJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34236: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1AL',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34251: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE03',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34265: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE08',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34281: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE06',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34295: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE07',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34311: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34325: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34341: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34355: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34370: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaA6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34384: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaA7',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34399: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaAF',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34413: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaAG',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34429: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34443: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34458: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaR1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34472: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaR2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34487: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34501: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34516: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaT1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34530: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaT2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34544: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1D7',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34558: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JAE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34572: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HSW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34586: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HSW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34601: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34615: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34630: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34644: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34659: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34674: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BO',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34688: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BQ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34703: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BR',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34719: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BT',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34733: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A23W',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34748: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BV',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34764: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BW',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34778: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BY',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34793: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34807: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34822: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34836: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34851: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34865: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34880: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34894: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34910: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34924: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AST2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34940: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34954: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34968: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34982: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34996: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35010: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35024: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A2DJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35038: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A3DJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35052: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35066: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35080: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35094: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35108: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ5',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35123: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KkR1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35137: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KkR2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35152: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JNF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35166: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JNF4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35181: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35195: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35210: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35224: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35239: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35253: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35268: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35282: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GST3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35297: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0YX',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35311: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0Z0',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35326: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35340: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35354: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35368: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35382: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuD1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35396: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuD2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35415: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcT1',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcF5',ABILITY_SF_ICON_NORMAL) then
- 35507: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcF2',ABILITY_SF_ICON_NORMAL) then
- 35599: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcT2',ABILITY_SF_ICON_NORMAL) then
- 35692: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiR1',ABILITY_SF_ICON_NORMAL) and (GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MiQ1',ABILITY_SF_ICON_NORMAL) or GetFr
- 35706: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiR1',ABILITY_SF_ICON_NORMAL) and (GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MiQ3',ABILITY_SF_ICON_NORMAL) or GetFr
- 35721: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MadF',ABILITY_SF_ICON_NORMAL) then
- 35770: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MaFG',ABILITY_SF_ICON_NORMAL) then
- 35820: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGG1',ABILITY_SF_ICON_NORMAL) then
- 35869: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGG2',ABILITY_SF_ICON_NORMAL) and GetFrameSpriteModel(TavernHeroPortrait)==GetUnitBaseStringFieldById(RH_Force[133],UNIT_SF_PORTRAIT) then
- 35919: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0N1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MUQ1',ABILITY_SF_ICON_NORMAL) then
- 35968: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0N1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MUQ2',ABILITY_SF_ICON_NORMAL) then
- 36018: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0A3',ABILITY_SF_ICON_NORMAL) then
- 36055: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0AP',ABILITY_SF_ICON_NORMAL) then
- 36092: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0AZ',ABILITY_SF_ICON_NORMAL) then
- 36129: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0B2',ABILITY_SF_ICON_NORMAL) then
- 36166: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0B6',ABILITY_SF_ICON_NORMAL) then
- 36204: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0CZ',ABILITY_SF_ICON_ACTIVATED) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0D8',ABILITY_SF_ICON_NORMAL) then
- 36256: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0CZ',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0DF',ABILITY_SF_ICON_NORMAL) then
- 37871: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT01",false)==true and x!=200 then //and x!=208
- 37979: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT02",false)==true and x!=200 then //and x!=208
- 38087: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT03",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 38194: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT04",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 38301: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT05",false)==true and x!=200 then //and x!=208
- 38409: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT06",false)==true and x!=200 then //and x!=208
- 38517: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT07",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 38624: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT08",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 38732: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT12",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 43812: call SetItemStringField(itn,ITEM_SF_NAME,its)
- 52439: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 52440: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 52441: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 52442: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 52443: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 52444: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 52445: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 52446: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 52447: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 52448: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 52449: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 52450: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 52451: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 52452: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 52453: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 52454: call SetAbilityBaseStringFieldById('A1CK',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\PassiveButtons\\PASNeroBrideF.blp")
- 54512: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL,GetAbilityBaseStringFieldById('BRR2',ABILITY_SF_ICON_NORMAL))
- 54513: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetAbilityBaseStringFieldById('BRR2',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 59639: if GetAbilityBaseStringFieldById(GetAbilityTypeId(cbA),ABILITY_SF_ICON_NORMAL)!="" and GetAbilityBaseStringFieldById(GetAbilityTypeId(cbA),ABILITY_SF_ICON_NORMAL)!=null then
- 73395: if id!='A0NL' and id!='A0TN' and id!='A0P2' and id!='A0EH' and id!='A0CZ' and id!='A2CZ' and id!='A015' and id!='A315' and id!='A0SK' and id!='A1SK' and id!='A0YZ' and id!='A13V' and id!='A23V' and GetAbilityStringField(
- 100014: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNInstant_transmission.blp")
- 100541: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNWarpKamehameha.blp")
- 102136: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNCancel1.blp")
- 102311: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNInstant_transmission.blp")
- 102359: call SetAbilityStringLevelField(GetUnitAbility(u,'GKR1'),ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetUnitAbilityLevel(u,'GKR1')-1,GetAbilityBaseStringFieldById('GKR2',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 103085: call SetUnitStringField(n,UNIT_SF_NAME,"Final Kamehameha")
- 105950: if GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) then
- 105957: if time==4 and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) and GetUnitAbilityLevel(u,'A0TK')==0 then
- 106031: call SetAbilityBaseStringFieldById('A0TI',ABILITY_SLF_TARGET,"war3mapImported\\NormalBrolyHeadWithoutCrown.mdx")
- 106032: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL,GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL))
- 106033: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetAbilityBaseStringFieldById('BRSS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 106121: if GetSpellAbilityId()=='BRRS' and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)=="ReplaceableTextures\\Commandbuttons\\BTNBrolyRSSJ.blp" then
- 106124: elseif GetSpellAbilityId()=='BRRS' and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)=="ReplaceableTextures\\Commandbuttons\\BTNBrolySSJ.blp" then
- 128639: call SetAbilityStringField(GetUnitAbility(u,'A0RI'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNCancel1.blp")
- 128858: call SetAbilityStringField(GetUnitAbility(u,'A0RI'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNVegitoG.blp")
- 128906: call SetAbilityStringLevelField(GetUnitAbility(u,'A0RI'),ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetUnitAbilityLevel(u,'A0RI')-1,GetAbilityBaseStringFieldById('A1RI',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 134734: call SaveStr(HH,uid,SH_TouIcon,GetUnitStringField(u,UNIT_SF_ICON_NORMAL))
- 217871: call SaveStr(HH,idp,'ShNP'+j,GetUnitName(c))
- 219143: call SaveStr(HH,idp,'ShNP'+j,GetUnitName(u))