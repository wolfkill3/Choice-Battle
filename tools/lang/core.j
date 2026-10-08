//LANG_CORE_BEGIN — одна карта на двух языках (прототип). Тексты объектов в table/*.ini — русские,
// английские лежат в LANG_Data* (генерирует tools/lang/gen.js). Язык свой у каждого игрока: по GetLocale(),
// сменить — -en / -ru. Язык меняет только то, что видно на экране: от L() и текстов объектов
// не должна зависеть игровая логика (сравнения, ключи хэш-таблиц, создание хэндлов) — иначе десинк.
// Глобальные LANG_EN, LANG_HT, LANG_N, LANG_I — в блоке globals.
function Lng takes string lgRu,string lgEn returns string
if LANG_EN then
return lgEn
endif
return lgRu
endfunction
// запись lgN: 0 вид (0 способность, 1 предмет, 2 юнит, 3 бафф, 4 FrameDef), 1 id, 2 поле, 3 уровень,
// 4 русский текст (запоминается при первом переключении на EN), 5 английский, 6 ключ FrameDef
function LANG_Reg takes integer lgKind,integer lgId,integer lgF,integer lgLv,string lgEn returns nothing
call SaveInteger(LANG_HT,LANG_N,0,lgKind)
call SaveInteger(LANG_HT,LANG_N,1,lgId)
call SaveInteger(LANG_HT,LANG_N,2,lgF)
call SaveInteger(LANG_HT,LANG_N,3,lgLv)
call SaveStr(LANG_HT,LANG_N,5,lgEn)
set LANG_N=LANG_N+1
endfunction
function LANG_A takes integer lgId,integer lgF,integer lgLv,string lgEn returns nothing
call LANG_Reg(0,lgId,lgF,lgLv,lgEn)
endfunction
function LANG_It takes integer lgId,integer lgF,string lgEn returns nothing
if lgF==0 then
call SaveInteger(LANG_HT,-11,lgId,LANG_N+1) // запись имени предмета по типу — для LANG_ItemNames
endif
call LANG_Reg(1,lgId,lgF,0,lgEn)
endfunction
function LANG_U takes integer lgId,integer lgF,string lgEn returns nothing
call LANG_Reg(2,lgId,lgF,0,lgEn)
endfunction
function LANG_B takes integer lgId,integer lgF,string lgEn returns nothing
call LANG_Reg(3,lgId,lgF,0,lgEn)
endfunction
function LANG_F takes string lgKey,string lgEn returns nothing
call SaveStr(LANG_HT,LANG_N,6,lgKey)
call LANG_Reg(4,0,0,0,lgEn)
endfunction
function LANG_AF takes integer lgF returns abilitystringlevelfield
if lgF==0 then
return ABILITY_SLF_TOOLTIP_NORMAL
elseif lgF==1 then
return ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED
elseif lgF==2 then
return ABILITY_SLF_TOOLTIP_LEARN
elseif lgF==3 then
return ABILITY_SLF_TOOLTIP_LEARN_EXTENDED
elseif lgF==4 then
return ABILITY_SLF_TOOLTIP_TURN_OFF
endif
return ABILITY_SLF_TOOLTIP_TURN_OFF_EXTENDED
endfunction
function LANG_IF takes integer lgF returns itemstringfield
if lgF==0 then
return ITEM_SF_NAME
elseif lgF==1 then
return ITEM_SF_TOOLTIP_NORMAL
elseif lgF==2 then
return ITEM_SF_TOOLTIP_EXTENDED
endif
return ITEM_SF_DESCRIPTION
endfunction
function LANG_UF takes integer lgF returns unitstringfield
if lgF==0 then
return UNIT_SF_NAME
elseif lgF==1 then
return UNIT_SF_PROPER_NAMES
elseif lgF==2 then
return UNIT_SF_TOOLTIP_NORMAL
elseif lgF==3 then
return UNIT_SF_TOOLTIP_EXTENDED
elseif lgF==4 then
return UNIT_SF_TOOLTIP_AWAKEN
endif
return UNIT_SF_TOOLTIP_REVIVE
endfunction
function LANG_Get takes integer lgN returns string
local integer lgKind=LoadInteger(LANG_HT,lgN,0)
local integer lgId=LoadInteger(LANG_HT,lgN,1)
local integer lgF=LoadInteger(LANG_HT,lgN,2)
if lgKind==0 then
return GetAbilityBaseStringLevelFieldById(lgId,LANG_AF(lgF),LoadInteger(LANG_HT,lgN,3))
elseif lgKind==1 then
return GetBaseItemStringFieldById(lgId,LANG_IF(lgF))
elseif lgKind==2 then
return GetUnitBaseStringFieldById(lgId,LANG_UF(lgF))
elseif lgKind==3 then
if lgF==0 then
return GetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL)
endif
return GetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL_EXTENDED)
endif
return GetFDFDataString(LoadStr(LANG_HT,lgN,6))
endfunction
function LANG_Set takes integer lgN,string lgS returns nothing
local integer lgKind=LoadInteger(LANG_HT,lgN,0)
local integer lgId=LoadInteger(LANG_HT,lgN,1)
local integer lgF=LoadInteger(LANG_HT,lgN,2)
if lgKind==0 then
call SetAbilityBaseStringLevelFieldById(lgId,LANG_AF(lgF),LoadInteger(LANG_HT,lgN,3),lgS)
elseif lgKind==1 then
call SetBaseItemStringFieldById(lgId,LANG_IF(lgF),lgS)
elseif lgKind==2 then
call SetUnitBaseStringFieldById(lgId,LANG_UF(lgF),lgS)
elseif lgKind==3 then
if lgF==0 then
call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL,lgS)
else
call SetBuffBaseStringFieldById(lgId,BUFF_SF_TOOLTIP_NORMAL_EXTENDED,lgS)
endif
else
call SetFDFDataString(LoadStr(LANG_HT,lgN,6),lgS)
endif
endfunction
// Уже созданные предметы и юниты держат свои копии текстов — для них запоминаем «было → стало»
// по типу: предметы -20-поле / -30-поле, имя юнита -40 / -41
function LANG_Track takes integer lgN,string lgTo returns nothing
local integer lgKind=LoadInteger(LANG_HT,lgN,0)
local integer lgId=LoadInteger(LANG_HT,lgN,1)
local integer lgF=LoadInteger(LANG_HT,lgN,2)
if lgKind==1 then
call SaveStr(LANG_HT,-20-lgF,lgId,LANG_Get(lgN))
call SaveStr(LANG_HT,-30-lgF,lgId,lgTo)
elseif lgKind==2 and lgF==0 then
call SaveStr(LANG_HT,-40,lgId,LANG_Get(lgN))
call SaveStr(LANG_HT,-41,lgId,lgTo)
endif
endfunction
// 400 записей за поток — далеко от лимита операций
function LANG_Step takes nothing returns nothing
local integer lgE=LANG_I+400
if lgE>LANG_N then
set lgE=LANG_N
endif
loop
exitwhen LANG_I>=lgE
if LANG_EN then
if not HaveSavedString(LANG_HT,LANG_I,4) then
call SaveStr(LANG_HT,LANG_I,4,LANG_Get(LANG_I))
endif
call LANG_Track(LANG_I,LoadStr(LANG_HT,LANG_I,5))
call LANG_Set(LANG_I,LoadStr(LANG_HT,LANG_I,5))
elseif HaveSavedString(LANG_HT,LANG_I,4) then
call LANG_Track(LANG_I,LoadStr(LANG_HT,LANG_I,4))
call LANG_Set(LANG_I,LoadStr(LANG_HT,LANG_I,4))
endif
set LANG_I=LANG_I+1
endloop
endfunction
function LANG_ItemFix takes item lgIt returns nothing
local integer lgId=GetItemTypeId(lgIt)
local integer lgF=0
local string lgOld
local string lgNew
local string lgCur
loop
exitwhen lgF>3
if HaveSavedString(LANG_HT,-20-lgF,lgId) then
set lgOld=LoadStr(LANG_HT,-20-lgF,lgId)
set lgNew=LoadStr(LANG_HT,-30-lgF,lgId)
set lgCur=GetItemStringField(lgIt,LANG_IF(lgF))
if lgCur==lgOld then
call SetItemStringField(lgIt,LANG_IF(lgF),lgNew)
elseif lgF==0 and StringLength(lgOld)>0 and SubString(lgCur,0,StringLength(lgOld))==lgOld then
// имя с припиской владельца после подбора: «Имя (ник)»
call SetItemStringField(lgIt,LANG_IF(lgF),lgNew+SubString(lgCur,StringLength(lgOld),StringLength(lgCur)))
endif
endif
set lgF=lgF+1
endloop
endfunction
function LANG_ItemEnum takes nothing returns nothing
call LANG_ItemFix(GetEnumItem())
endfunction
// 40 юнитов за поток: имя юнита, предметы в инвентаре
function LANG_UnitStep takes nothing returns nothing
local integer lgC=0
local unit lgU
local integer lgS
loop
set lgU=FirstOfGroup(LANG_G)
exitwhen lgU==null or lgC>=40
call GroupRemoveUnit(LANG_G,lgU)
if HaveSavedString(LANG_HT,-40,GetUnitTypeId(lgU)) then
if GetUnitStringField(lgU,UNIT_SF_NAME)==LoadStr(LANG_HT,-40,GetUnitTypeId(lgU)) then
call SetUnitStringField(lgU,UNIT_SF_NAME,LoadStr(LANG_HT,-41,GetUnitTypeId(lgU)))
endif
endif
set lgS=0
loop
exitwhen lgS>=UnitInventorySize(lgU)
if UnitItemInSlot(lgU,lgS)!=null then
call LANG_ItemFix(UnitItemInSlot(lgU,lgS))
endif
set lgS=lgS+1
endloop
set lgC=lgC+1
endloop
set lgU=null
endfunction
function LANG_Refresh takes nothing returns nothing
local rect lgR=GetWorldBounds()
local integer lgWas
call EnumItemsInRect(lgR,null,function LANG_ItemEnum)
call GroupClear(LANG_G)
call GroupEnumUnitsInRect(LANG_G,lgR,null)
loop
set lgWas=CountUnitsInGroup(LANG_G)
exitwhen lgWas==0
call ExecuteFunc("LANG_UnitStep")
exitwhen CountUnitsInGroup(LANG_G)==lgWas
endloop
call GroupClear(LANG_G)
call RemoveRect(lgR)
set lgR=null
endfunction
// Выполняется у всех игроков (без ExecuteFunc внутри GetLocalPlayer); тексты меняются по своему LANG_EN
function LANG_Apply takes nothing returns nothing
local integer lgWas
local integer lgF=-20
loop
exitwhen lgF<-41
call FlushChildHashtable(LANG_HT,lgF)
set lgF=lgF-1
endloop
set LANG_I=0
loop
exitwhen LANG_I>=LANG_N
set lgWas=LANG_I
call ExecuteFunc("LANG_Step")
exitwhen LANG_I==lgWas
endloop
call ExecuteFunc("LANG_Refresh")
endfunction
// Заголовки таймеров и описания квестов задаются один раз — запоминаем обе версии и при смене языка
// выставляем заново. Списки: -53 таймер-диалоги (тексты -51 / -52 по хэндлу), -56 квесты (-54 / -55)
function LANG_TdTitle takes timerdialog lgTd,string lgRu,string lgEn returns nothing
local integer lgH=GetHandleId(lgTd)
if not HaveSavedString(LANG_HT,-51,lgH) then
call SaveTimerDialogHandle(LANG_HT,-53,LoadInteger(LANG_HT,-53,-1),lgTd)
call SaveInteger(LANG_HT,-53,-1,LoadInteger(LANG_HT,-53,-1)+1)
endif
call SaveStr(LANG_HT,-51,lgH,lgRu)
call SaveStr(LANG_HT,-52,lgH,lgEn)
call TimerDialogSetTitle(lgTd,Lng(lgRu,lgEn))
endfunction
function LANG_QuestBJ takes integer lgType,string lgTitle,string lgRu,string lgEn,string lgIcon returns nothing
local quest lgQ=CreateQuestBJ(lgType,lgTitle,Lng(lgRu,lgEn),lgIcon)
local integer lgH=GetHandleId(lgQ)
call SaveQuestHandle(LANG_HT,-56,LoadInteger(LANG_HT,-56,-1),lgQ)
call SaveInteger(LANG_HT,-56,-1,LoadInteger(LANG_HT,-56,-1)+1)
call SaveStr(LANG_HT,-54,lgH,lgRu)
call SaveStr(LANG_HT,-55,lgH,lgEn)
set lgQ=null
endfunction
function LANG_Retitle takes nothing returns nothing
local integer lgK=0
local integer lgH
loop
exitwhen lgK>=LoadInteger(LANG_HT,-53,-1)
set lgH=GetHandleId(LoadTimerDialogHandle(LANG_HT,-53,lgK))
call TimerDialogSetTitle(LoadTimerDialogHandle(LANG_HT,-53,lgK),Lng(LoadStr(LANG_HT,-51,lgH),LoadStr(LANG_HT,-52,lgH)))
set lgK=lgK+1
endloop
set lgK=0
loop
exitwhen lgK>=LoadInteger(LANG_HT,-56,-1)
set lgH=GetHandleId(LoadQuestHandle(LANG_HT,-56,lgK))
call QuestSetDescription(LoadQuestHandle(LANG_HT,-56,lgK),Lng(LoadStr(LANG_HT,-54,lgH),LoadStr(LANG_HT,-55,lgH)))
set lgK=lgK+1
endloop
endfunction
// Оба имени предмета (русское | английское) — для поиска в магазине на любом языке
function LANG_ItemNames takes integer lgId returns string
local integer lgN=LoadInteger(LANG_HT,-11,lgId)-1
if lgN<0 then
return GetObjectName(lgId)
endif
if HaveSavedString(LANG_HT,lgN,4) then
return LoadStr(LANG_HT,lgN,4)+" | "+LoadStr(LANG_HT,lgN,5)
endif
return GetObjectName(lgId)+" | "+LoadStr(LANG_HT,lgN,5)
endfunction
function LANG_Chat takes nothing returns nothing
if GetTriggerPlayer()==GetLocalPlayer() then
set LANG_EN=GetEventPlayerChatString()=="-en"
endif
call LANG_Apply()
call LANG_Retitle()
call ExecuteFunc("Sh_LangRefresh") // надписи магазина, заданные при загрузке
if GetTriggerPlayer()==GetLocalPlayer() then
call DisplayTimedTextToPlayer(GetLocalPlayer(),0,0,5,Lng("Язык: русский. Часть уже показанных надписей обновится при следующем выводе.","Language: English. Some texts already on screen update the next time they are shown."))
endif
endfunction
function LANG_Init takes nothing returns nothing
local trigger lgT=CreateTrigger()
local integer lgI=0
set LANG_EN=SubString(GetLocale(),0,2)!="ru"
call ExecuteFunc("LANG_DataAll")
call LANG_Apply()
loop
exitwhen lgI>=bj_MAX_PLAYERS
call TriggerRegisterPlayerChatEvent(lgT,Player(lgI),"-en",true)
call TriggerRegisterPlayerChatEvent(lgT,Player(lgI),"-ru",true)
set lgI=lgI+1
endloop
call TriggerAddAction(lgT,function LANG_Chat)
set lgT=null
endfunction
//LANG_CORE_END
