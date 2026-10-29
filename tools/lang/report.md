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
- 2591: call SetBaseItemStringFieldById(lgId,LANG_IF(lgF),lgS)
- 2593: call SetUnitBaseStringFieldById(lgId,LANG_UF(lgF),lgS)
- 2596: call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL,lgS)
- 2598: call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL_EXTENDED,lgS)
- 2662: call SetItemStringField(lgIt,LANG_IF(lgF),lgNew)
- 2665: call SetItemStringField(lgIt,LANG_IF(lgF),lgNew+SubString(lgCur,StringLength(lgOld),StringLength(lgCur)))
- 2684: if GetUnitStringField(lgU,UNIT_SF_NAME)==LoadStr(LANG_HT,-40,GetUnitTypeId(lgU)) then
- 2685: call SetUnitStringField(lgU,UNIT_SF_NAME,LoadStr(LANG_HT,-41,GetUnitTypeId(lgU)))
- 6531: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 6536: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 6542: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 6547: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 6554: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 6559: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 6568: call SetBuffBaseStringFieldById(BuffId,ABILITY_SLF_TARGET,vfx)
- 6619: call SetBuffBaseStringFieldById( BuffId, ABILITY_SLF_TARGET, baseModel )
- 14589: call SaveInteger(HH,SH_TavSwapIc,StringHash(GetAbilityBaseStringFieldById(a,ABILITY_SF_ICON_NORMAL)),b)
- 14590: call SaveInteger(HH,SH_TavSwapIc,StringHash(GetAbilityBaseStringFieldById(b,ABILITY_SF_ICON_NORMAL)),a)
- 31341: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1HO',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31400: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1HO',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31413: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AlFS',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31472: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AlFS',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31485: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('OM13',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31531: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('OM13',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31544: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A17D',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31603: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A17D',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31616: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A177',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31675: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A177',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31689: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0TN',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31749: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0TN',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31762: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A172',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31834: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A172',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31847: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A16U',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 31919: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A16U',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 31932: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0QK',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32086: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0QK',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) and but!=GetFrameByName
- 32100: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKG1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32158: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKG1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32171: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32302: elseif (GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKF1',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKBS',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBa
- 32305: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKBS',ABILITY_SF_ICON_NORMAL) then
- 32333: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKSS',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKS2',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBas
- 32361: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKUI',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKMI',ABILITY_SF_ICON_NORMAL) then
- 32400: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKQ1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32482: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKQ1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32495: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32553: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32566: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW5',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32612: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKW5',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32625: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKE1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32707: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKE1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32720: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKT1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32766: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GKT1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32779: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 32825: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 32839: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('MrW1',ABILITY_SF_ICON_NORMAL) and i==Ge
- 32858: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MrT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('MrW2',ABILITY_SF_ICON_NORMAL) and i==Ge
- 32876: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BbT1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32890: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BbT2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32906: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32920: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32934: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlG1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32948: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('FlG2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32962: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RmQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32976: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RmQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 32991: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SnE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33005: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SnEc',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33246: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0JA',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33260: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ToEf',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33322: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ToFE',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33411: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('RsW1',ABILITY_SF_ICON_NORMAL) and i==GetFra
- 33453: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsT1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",1),0)==GetAbilityBaseStringFieldById('RsW2',ABILITY_SF_ICON_NORMAL) and i==Ge
- 33495: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 33541: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('RsF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 33554: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33609: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33666: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE2',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33680: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SiE3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33682: if GetFrameTexture(GetFrameByName("TavernAbility",5),0)==GetAbilityBaseStringFieldById('SiF2',ABILITY_SF_ICON_NORMAL) then
- 33710: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('VGF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 33817: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('VGF1',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 33827: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1ER',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==false and i==GetFrameContext(but) then
- 33940: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1ER',ABILITY_SF_ICON_NORMAL) and IsFrameVisible(GetFrameByName("TavernBarAdditionalAbilityList",0))==true and i==GetFrameContext(but) then
- 33951: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('TMW0',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33965: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('TMW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33979: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0P6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 33993: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1P6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34008: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A085',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34022: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A07Y',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34036: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08A',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34050: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A084',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34064: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A083',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34080: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FN',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34094: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FO',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34108: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FP',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34122: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FR',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34136: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0SI',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34150: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FT',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34164: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0FV',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34179: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08J',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34193: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08D',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34207: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08E',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34221: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08H',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34235: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A08G',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34251: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('DSW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34265: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('DSW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34281: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34295: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34311: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('Ad02',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34325: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('Ad12',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34341: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1AJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34355: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1AL',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34370: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE03',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34384: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE08',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34400: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE06',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34414: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('WE07',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34430: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34444: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34460: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34474: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGW4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34489: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaA6',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34503: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaA7',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34518: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaAF',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34532: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KaAG',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34548: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34562: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34577: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaR1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34591: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaR2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34606: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34620: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34635: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaT1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34649: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SaT2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34663: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1D7',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34677: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JAE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34691: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HSW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34705: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HSW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34720: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34734: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34749: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34763: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34778: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASW3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34793: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BO',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34807: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BQ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34822: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BR',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34838: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BT',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34852: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A23W',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34867: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BV',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34883: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BW',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34897: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A1BY',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34912: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34926: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34941: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34955: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiQ4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34970: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34984: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 34999: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35013: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('ASE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35029: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35043: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('AST2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35059: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35073: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35087: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('HST3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35101: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35115: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35129: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KHG3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35143: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A2DJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35157: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A3DJ',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35171: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35185: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35199: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35213: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35227: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcQ5',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35242: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KkR1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35256: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('KkR2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35271: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JNF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35285: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('JNF4',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35300: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSQ1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35314: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSQ2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35329: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35343: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35358: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35372: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GSF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35387: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GST1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35401: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('GST3',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35416: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0YX',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35430: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0Z0',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35445: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuE1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35459: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuE2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35473: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuF1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35487: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuF2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35501: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuD1',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35515: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('SuD2',ABILITY_SF_ICON_NORMAL) and i==GetFrameContext(but) then
- 35534: if GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcT1',ABILITY_SF_ICON_NORMAL) or GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcF5',ABILITY_SF_ICON_NORMAL) then
- 35626: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcF2',ABILITY_SF_ICON_NORMAL) then
- 35718: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('IcT2',ABILITY_SF_ICON_NORMAL) then
- 35811: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiR1',ABILITY_SF_ICON_NORMAL) and (GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MiQ1',ABILITY_SF_ICON_NORMAL) or GetFr
- 35825: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MiR1',ABILITY_SF_ICON_NORMAL) and (GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MiQ3',ABILITY_SF_ICON_NORMAL) or GetFr
- 35840: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MadF',ABILITY_SF_ICON_NORMAL) then
- 35889: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('MaFG',ABILITY_SF_ICON_NORMAL) then
- 35939: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGG1',ABILITY_SF_ICON_NORMAL) then
- 35988: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('BGG2',ABILITY_SF_ICON_NORMAL) and GetFrameSpriteModel(TavernHeroPortrait)==GetUnitBaseStringFieldById(RH_Force[133],UNIT_SF_PORTRAIT) then
- 36038: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0N1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MUQ1',ABILITY_SF_ICON_NORMAL) then
- 36087: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0N1',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('MUQ2',ABILITY_SF_ICON_NORMAL) then
- 36137: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0A3',ABILITY_SF_ICON_NORMAL) then
- 36174: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0AP',ABILITY_SF_ICON_NORMAL) then
- 36211: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0AZ',ABILITY_SF_ICON_NORMAL) then
- 36248: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0B2',ABILITY_SF_ICON_NORMAL) then
- 36285: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0A2',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0B6',ABILITY_SF_ICON_NORMAL) then
- 36323: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0CZ',ABILITY_SF_ICON_ACTIVATED) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0D8',ABILITY_SF_ICON_NORMAL) then
- 36375: elseif GetFrameTexture(but,0)==GetAbilityBaseStringFieldById('A0CZ',ABILITY_SF_ICON_NORMAL) and GetFrameTexture(GetFrameByName("TavernAbility",0),0)==GetAbilityBaseStringFieldById('A0DF',ABILITY_SF_ICON_NORMAL) then
- 37990: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT01",false)==true and x!=200 then //and x!=208
- 38098: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT02",false)==true and x!=200 then //and x!=208
- 38206: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT03",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 38313: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT04",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 38420: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT05",false)==true and x!=200 then //and x!=208
- 38528: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT06",false)==true and x!=200 then //and x!=208
- 38636: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT07",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 38743: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT08",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 38851: if RH_Force[x]!=0 and StringContains(GetUnitBaseStringFieldById(RH_Force[x],UNIT_SF_ABILITY_LIST),"AT12",false)==true and x!=200 then //and x!=208   //Nami and x!=200
- 43951: call SetItemStringField(itn,ITEM_SF_NAME,its)
- 52578: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 52579: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 52580: call SetAbilityBaseStringFieldById('A1C9',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideQ.blp")
- 52581: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 52582: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 52583: call SetAbilityBaseStringFieldById('A1CA',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideW.blp")
- 52584: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 52585: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 52586: call SetAbilityBaseStringFieldById('A1CB',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideE.blp")
- 52587: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 52588: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 52589: call SetAbilityBaseStringFieldById('A1CC',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideR.blp")
- 52590: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 52591: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_ACTIVATED,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 52592: call SetAbilityBaseStringFieldById('A1CG',ABILITY_SF_ICON_RESEARCH,"ReplaceableTextures\\CommandButtons\\BTNNeroBrideT.blp")
- 52593: call SetAbilityBaseStringFieldById('A1CK',ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\PassiveButtons\\PASNeroBrideF.blp")
- 54651: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL,GetAbilityBaseStringFieldById('BRR2',ABILITY_SF_ICON_NORMAL))
- 54652: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetAbilityBaseStringFieldById('BRR2',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 59790: if GetAbilityBaseStringFieldById(GetAbilityTypeId(cbA),ABILITY_SF_ICON_NORMAL)!="" and GetAbilityBaseStringFieldById(GetAbilityTypeId(cbA),ABILITY_SF_ICON_NORMAL)!=null then
- 73562: if id!='A0NL' and id!='A0TN' and id!='A0P2' and id!='A0EH' and id!='A0CZ' and id!='A2CZ' and id!='A015' and id!='A315' and id!='A0SK' and id!='A1SK' and id!='A0YZ' and id!='A13V' and id!='A23V' and GetAbilityStringField(
- 100183: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNInstant_transmission.blp")
- 100710: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNWarpKamehameha.blp")
- 102305: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNCancel1.blp")
- 102480: call SetAbilityStringField(GetUnitAbility(u,'GKR1'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNInstant_transmission.blp")
- 102528: call SetAbilityStringLevelField(GetUnitAbility(u,'GKR1'),ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetUnitAbilityLevel(u,'GKR1')-1,GetAbilityBaseStringFieldById('GKR2',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 103254: call SetUnitStringField(n,UNIT_SF_NAME,"Final Kamehameha")
- 106119: if GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) then
- 106126: if time==4 and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)==GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL) and GetUnitAbilityLevel(u,'A0TK')==0 then
- 106200: call SetAbilityBaseStringFieldById('A0TI',ABILITY_SLF_TARGET,"war3mapImported\\NormalBrolyHeadWithoutCrown.mdx")
- 106201: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL,GetAbilityBaseStringFieldById('BRSS',ABILITY_SF_ICON_NORMAL))
- 106202: call SetAbilityBaseStringFieldById('BRRS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetAbilityBaseStringFieldById('BRSS',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 106290: if GetSpellAbilityId()=='BRRS' and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)=="ReplaceableTextures\\Commandbuttons\\BTNBrolyRSSJ.blp" then
- 106293: elseif GetSpellAbilityId()=='BRRS' and GetAbilityBaseStringFieldById('BRRS',ABILITY_SF_ICON_NORMAL)=="ReplaceableTextures\\Commandbuttons\\BTNBrolySSJ.blp" then
- 128808: call SetAbilityStringField(GetUnitAbility(u,'A0RI'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNCancel1.blp")
- 129027: call SetAbilityStringField(GetUnitAbility(u,'A0RI'),ABILITY_SF_ICON_NORMAL,"ReplaceableTextures\\CommandButtons\\BTNVegitoG.blp")
- 129075: call SetAbilityStringLevelField(GetUnitAbility(u,'A0RI'),ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED,GetUnitAbilityLevel(u,'A0RI')-1,GetAbilityBaseStringFieldById('A1RI',ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED))
- 134905: call SaveStr(HH,uid,SH_TouIcon,GetUnitStringField(u,UNIT_SF_ICON_NORMAL))
- 218128: call SaveStr(HH,idp,'ShNP'+j,GetUnitName(c))
- 219400: call SaveStr(HH,idp,'ShNP'+j,GetUnitName(u))