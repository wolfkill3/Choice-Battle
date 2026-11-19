# Аудит снарядов по ростеру Choice Battle 3.8.5

Базовая ревизия `7af0d578` с исключением W Фризы. Проверены 145 слотов с назначенным героем, включая слоты 200 и 208. Проход охватил 232 типа юнитов из ростера и связанных записей `SG_DB`, 1149 уникальных ID из `heroAbilList`, `abilList` и записей `BOT_DB`. Известные выдаваемые в игре варианты, например E Гоку, E Селла и Cero Хирако, добавлены отдельно. Число типов включает формы и привязанных юнитов.

Выявлено **144 ID способностей у 85 слотов** с ветками полёта или движущегося фронта без подтверждённого перехвата. [Подключённые обработчики](ProjectileInterception.ru.md) сведены отдельно.

Под перехватом понимается отмена до нанесения следующего урона с очисткой эффектов либо смена направления или цели и источника урона. Учитывались отдельные снаряды и волны, у которых точка попадания продвигается после запуска. Контактные рывки, уже поставленные зоны и чисто декоративные эффекты в перечень пропусков не входят.

Код сверялся по условиям регистрации триггеров, веткам заклинаний, вызовам таймеров, движению и моменту применения урона или контроля. Варианты, найденные только косвенно по имени, подсказке, смежному таймеру или неоднозначной ветке, помечены как «Уточнить». Эта колонка служит списком на ручной разбор. Игра по каждому герою не запускалась.

## Что важно для подключения

- У Гоку регистрируются одиночный Ki Blast `GKE5` и каждая пуля `GKE6`. Остальные варианты E — вспышка, толчок вокруг и уход в остаточные изображения. Q Kamehameha, G Breaker Energy Wave и оба варианта выпуска Spirit Bomb рассчитывают отдельные движущиеся фронты без регистрации.
- У Вегито Q действительно летит до цели, прежде чем нанести урон. W нужно регистрировать по одному шару, а T требует привязать эффект луча и состояние заклинателя.
- W Хита отбирает цели по ходу движения льда, а урон применяется отдельной группой в конце. [W Хита](../../map/war3map.j#L295372).
- У Фризы диски R уже регистрируются отдельно. Для W Бролли и E Блэка при подключении нужно развести состояние цели и полёт снаряда.
- В JASS есть функции перенаправления для управляемых картой и штатных снарядов. Из игровых обработчиков этой ревизии вызовов перенаправления не найдено. Вызовы `WaveCancel` есть в отдельных обработчиках прерывания. Навык, который будет активно отражать подходящие снаряды, требует собственного вызова API.

## Исключения

- W Фризы `A0SS` снова использует исходный обработчик броска с захватом. Сфера исключена из перехвата.
- E Фризы `A0SW` остаётся телекинезом с отложенным уроном по удерживаемой цели.
- F→Q Хита `HtF2` остаётся мгновенной проверкой линии после замаха, без перехвата. Вспышка при замахе и луч со звуком выстрела сохраняются при промахе. При попадании дополнительно срабатывают вспышка, ветер и звук удара. [F→Q Хита](../../map/war3map.j#L296243).
- В подключение берём только варианты, которые выдаются герою в текущей игре. Старую Q Юджи `A0T0` исключили из списка работ до подтверждения доступности.
- E Селла `A10A` выдаёт три варианта Destructo Disk. У всех трёх перехват уже подключён.

## Выбранные ветки для проверки

Список по отметкам заказчика. 47 героев и 66 ID. Для кнопок с несколькими фазами указана граница проверки. Статус подключения указан отдельно в сводке ростера.

| Герой | Кнопки | ID | Обработчики | Что проверять |
|---|---|---|---|---|
| Bovino Lambo | R | `LamR` | [`LamboRAct`](../../map/war3map.j#L286377) | Только R. Разобрать попадание отдельно от движения Ламбо. |
| Roronoa Zoro | R | `A0LQ` | [`KokujoOTatsumakiCast2`](../../map/war3map.j#L118775) | Проверить движущийся фронт торнадо. |
| Sasagawa Ryohei | Q | `A02P` | [`MaximumCombinationCast2`](../../map/war3map.j#L100357) | Проверить продвигающуюся область удара. |
| Shakugan no Shana | Q | `A08R` | [`ShanaEndCast2`](../../map/war3map.j#L86855) | Выделить фазу волны из каста. |
| Gekko Moria | Q | `MrQ1` | [`MoriaQCast3`](../../map/war3map.j#L224527) | Проверить летучих мышей и их попадания. |
| Enel | Q, W | `A01S`, `A01U` | [`Trig_Electro_Wawe_Actions2`](../../map/war3map.j#L120323), [`Trig_M60_Actions2`](../../map/war3map.j#L120490) | Проверить оба разряда. |
| Terumi Mei | Q, W, E, G | `MeiQ`, `MeiW`, `MeiE`, `MeiG` | [`MeiQ_Act2`](../../map/war3map.j#L279576), [`MeiW_Act2`](../../map/war3map.j#L279701), [`MeiE_Act2`](../../map/war3map.j#L280066), [`MeiG_Act2`](../../map/war3map.j#L279409) | Для каждой кнопки отделить летящий фронт от остаточной зоны и перемещения героя. |
| Gokudera | T | `A08C` | [`Trig_Uri_Actions2`](../../map/war3map.j#L84407) | Проверить полёт Uri и последующий взрыв. |
| Urahara | G | `A0BF` | [`ShibariBenihimeCast2`](../../map/war3map.j#L91040) | Проверить фронт разряда и стадии попадания. |
| Mayuri | Q | `A0CR` | [`HookCast2`](../../map/war3map.j#L93199) | Проверить вылет крюка отдельно от фазы подтягивания. |
| Ichimaru Gin | Q, R | `A0IZ`, `A0J5` | [`ShinsoCast2`](../../map/war3map.j#L109706), [`ReginCast2`](../../map/war3map.j#L109439) | Проверить удлинение клинка и варианты R. Пассивная A13P вне списка. |
| Tousen | R | `A0J9` | [`Hado54HaienCast`](../../map/war3map.j#L110011) | Проверить фазу до попадания Хадо. |
| Aizen | Q, W | `ASQ1`, `ASW1` | [`AizenChoice_Act`](../../map/war3map.j#L248546), [`AizenWAct`](../../map/war3map.j#L246889) | Проверить ветки Q и W, включая варианты, которые запускает клон. |
| Super Buu | G | `BuuG` | [`Buu_G_Act2`](../../map/war3map.j#L280337) | Проверить фазу до захвата цели. |
| Gaara | G | `ASGG` | [`GaaraQGAct`](../../map/war3map.j#L250764), [`GaaraRGAct`](../../map/war3map.j#L250955) | Проверить обе ветки G. |
| Aokiji | E | `AokE` | [`AokijiEAct`](../../map/war3map.j#L251831) | Проверить фронт Ice Time Capsule. |
| Gogeta | W2 | `A1P6` | [`StardustBreakerAct2`](../../map/war3map.j#L126494) | Только Stardust Breaker, в данных называется Soul Punisher. |
| Nelliel | Q, G | `A0PA`, `A1PA` | [`DobleCeroCast2`](../../map/war3map.j#L127263), [`CeroSincreticoCast2`](../../map/war3map.j#L127354) | Проверить оба луча. |
| Yuzuriha Inori | Q | `A0UJ` | [`CrystalStrykeInoriCast2`](../../map/war3map.j#L152567) | Проверить движущийся фронт кристаллов. |
| Sogiita Gunha | Q | `A0WA` | [`ARoarCast2`](../../map/war3map.j#L155007) | Проверить продвижение волны удара. |
| Gray Fullbuster | T | `A0XR` | [`OneSidedChaoticDanceCast3`](../../map/war3map.j#L155954) | Проверить, какие части ледяной серии имеют самостоятельную фазу полёта. |
| Kurapika | R, T | `KkR1`, `A0Z0` | [`KurapikaR1Act`](../../map/war3map.j#L250262), [`ChainJailCast2`](../../map/war3map.j#L156350) | Проверить вылет цепей отдельно от последующего ограничения цели. |
| Sinon | E, T | `A17M`, `A2ZD` | [`ShiendoCast`](../../map/war3map.j#L260490), [`SinonT_Periodic`](../../map/war3map.j#L261002) | Проверить выстрелы в E и T. |
| Natsu Dragneel | T | `A10W` | [`BakurenjinCast3`](../../map/war3map.j#L160332), [`GurenHououKenCast3`](../../map/war3map.j#L160127) | Только летящая волна, рывок и контакт исключить. |
| Sasuke Uchiha | W | `A12I` | [`ChidoriShinsoCast2`](../../map/war3map.j#L163771), [`BlackChidoriCast2`](../../map/war3map.j#L162989) | Только волна Chidori Shinso, рывок Black Chidori исключить. |
| Xanxus | E, R | `XanE`, `A11A` | [`XanxusEAct`](../../map/war3map.j#L251965), [`XanxusLionCast2`](../../map/war3map.j#L160506) | Проверить отдельные фазы выстрелов. |
| Gilgamesh | Q | `A130` | [`QGilCast2`](../../map/war3map.j#L194612) | Проверить продвижение фронта. |
| Gajeel Redfox | W, R | `A14X`, `A152` | [`GajeelFistCast2`](../../map/war3map.j#L167680), [`GajeelGodSwordCast2`](../../map/war3map.j#L167473) | Проверить вылет и продвижение зоны удара. |
| Whitebeard | Q | `A18S` | [`CastGekishin2`](../../map/war3map.j#L171471) | Проверить продвижение волны. |
| Frenda | F | `FSF1` | [`Frenda_F_Act2`](../../map/war3map.j#L270303) | Проверить полёт гранаты до взрыва. |
| Doflamingo | Q, E | `A1AI`, `A1AS` | [`GoshikitoCast2`](../../map/war3map.j#L174726), [`KnutCast2`](../../map/war3map.j#L174346), [`KnutCast4`](../../map/war3map.j#L174247) | Активные Goshikito и Overheat. Пассивная A1AQ вне списка. |
| Tamamo no Mae | W | `A1B1` | [`FrostArrowsLearnCast2`](../../map/war3map.j#L175173) | Проверить летящие льдины и постановку кристаллов отдельно. |
| Alter Jeanne | Q | `A1D3` | [`Jeanne_Alter_Q_Act`](../../map/war3map.j#L251597) | Проверить фронт Burning Wave. |
| Orihime | Q, R | `A1H9`, `A1HC` | [`QOrihimeCast3`](../../map/war3map.j#L198912), [`ROrihimeCast3`](../../map/war3map.j#L198274) | Проверить выход Тсубаки и волну R. |
| Edmond Dantes | Q | `Ad6Q` | [`QDantesCast2`](../../map/war3map.j#L203411) | Проверить продвижение пламени. |
| Orochimaru | Q | `ore7` | [`OrochimaruQCast2`](../../map/war3map.j#L291476) | Проверить фронт Дайтоппа. |
| Lucy | Q | `A1EK` | [`LucyCowCast4`](../../map/war3map.j#L192555) | Проверить летящую часть атаки Тельца. |
| Waver Velvet | Q | `Ao51` | [`QWaverCast2`](../../map/war3map.j#L206446), [`QWaverCast4`](../../map/war3map.j#L206350) | Проверить отдельно ветки зеркал. |
| Rengoku Kyojuro | R | `RenR` | [`RengokuR_Enko_Periodic`](../../map/war3map.j#L218846) | Проверить самостоятельную фазу Enko отдельно от движения Рэнгоку. |
| Minato Namikaze | T | `MiT1` | [`MinatoT_Combination_Periodic`](../../map/war3map.j#L229476) | Проверить кунай до контакта отдельно от серии Расенгана. |
| Rob Lucci | Q, R | `LCQ1`, `LCR1` | [`RobLucciQ1Move`](../../map/war3map.j#L231563), [`RobLucciRShiganMove`](../../map/war3map.j#L232104), [`RobLucciRBaseMove`](../../map/war3map.j#L231914) | Кнопки текущего Луччи, включая ветки формы. |
| Tobirama Senju | E | `TME0` | [`TobiramaECast3`](../../map/war3map.j#L265865) | Проверить движение водяного дракона и связь с захватом цели. |
| Goku Black | T, W2, W4 | `BGT1`, `BGW2`, `BGW4` | [`BlackGokuT1Act`](../../map/war3map.j#L239635), [`BlackGokuW2Act`](../../map/war3map.j#L241944), [`BlackGokuW4Act`](../../map/war3map.j#L240134) | Два W трактую как обе кнопки Release Ki Beam. Базовая W и промежуточная W3 вне этой выборки. |
| Garp | R | `GrR1` | [`Garp_R_Act2`](../../map/war3map.j#L281242) | Только распространяющаяся волна Galaxy Divide. |
| Muten Roshi | D | `RsD1`, `RsD2`, `RsD3` | [`Roshi_D_Act2`](../../map/war3map.j#L290034) | Все три варианта Reverse Kamehameha. |
| Baraggan | E, D | `BbE1`, `BbD1` | [`Brg_E_Act2`](../../map/war3map.j#L70652), [`Brg_D_Act2`](../../map/war3map.j#L71248) | Проверить фронт конуса и фазу метки до её наложения. |
| Escanor | T | `EsD1` | [`Esc_DProjectileTick`](../../map/war3map.j#L23804) | Проверить летящий фронт Divine Sword Escanor. |

## Все слоты

В колонке «Подключено» указаны ID, известные по коду системы перехвата. В «Найден пропуск» указаны ветки из таблицы ниже. Пустая ячейка означает, что по результатам статической проверки соответствующая ветка не выявлена.

| Слот | Герой | Формы и связанные типы | Подключено | Найден пропуск | Уточнить |
|---:|---|---|---|---|---|
| 1 | Byakuran | `H00I`, `H00O` |  | Q `A01F`, E `A0XI` | T `A01L` |
| 2 | Kimimaro Kaguya | `H00E`, `H00F` |  | Q `AKQ1` | W `AKW1`, E `AKE1`, R `AKR1`, T `AKT1` |
| 3 | Bovino Lambo | `H00A` |  |  | E `LamE`, R `LamR` |
| 4 | Monkey D. Luffy | `H00J` | R `A0RX` | W `A0ZJ` | T `A0ZK` |
| 5 | Yamamoto Takeshi | `H016` | T `A08O` |  |  |
| 6 | Uryu Ishida | `H018` |  | Q `A08W`, W `A08Y`, E `A08Z` |  |
| 7 | Rokudo Mukuro | `H01A`, `H00G` |  |  | T `A02J` |
| 8 | Roronoa Zoro | `H00M` |  | Q `A02Y` | R `A0LQ`, W `A02Z` |
| 9 | Sasagawa Ryohei | `H00H` |  |  | Q `A02P` |
| 10 | Sawada Tsunayoshi | `H00C` |  |  | Q `A00T`, T `A0ZO`, R `A00Y` |
| 11 | Itachi Uchiha | `H006`, `H007`, `H039` |  | Q `A1D0`, W `A12H` | R `A03B` |
| 12 | Shakugan no Shana | `H017`, `H06W`, `n00Q` | W `A08S` |  | Q `A08R` |
| 13 | Gekko Moria | `H00P` |  | R `MrR1` | E `MrE1`, Q `MrQ1` |
| 14 | Portgas D. Ace | `H00D`, `H03A` |  | Q `A014`, E `A09D`, R `A016`, T `A017` | F `A015` |
| 15 | Enel | `H00K` |  |  | W `A01U`, Q `A01S` |
| 16 | Hibari Kyoya | `H00X` |  |  | E `A06D` |
| 17 | Terumi Mei | `H032` |  |  | Q `MeiQ`, W `MeiW`, E `MeiE`, T `MeiT`, G `MeiG` |
| 18 | Gintoki | `H00Z` |  | R `A0UZ` |  |
| 20 | Hichigo | `H012`, `H06D` | E `A0MC` | Q `A07O`, G `A1M2`, `A2M2` | R `A0M2` |
| 21 | Gokudera | `H014` |  | R `A089` | T `A08C` |
| 24 | Viper | `H00N` |  |  | R `A09X`, F `A166` |
| 25 | Urahara | `H01C` | R `A0BC` | Q `A0BE`, W `A0ZM` | G `A0BF` |
| 26 | Maka Albarn | `H01D`, `H01E` |  |  | R `A0BS`, Q `A0BJ` |
| 27 | Black Star | `H01F`, `H01G`, `e069` |  |  | R `A0C3`, W `A0BW`, T `A0XK` |
| 28 | Death the Kid | `H01H`, `H01I`, `H06N` | R `A0CA`, R `A160` | Q `A0C6`, W `A0C7`, T `A0CB` |  |
| 29 | Jiraiya | `H01J` |  | Q `A0CG`, R `A0CL` | W `A0CE`, G `A0CO` |
| 30 | Mayuri | `H01L` | R `A0CX` |  | T `A0CV`, Q `A0CR` |
| 31 | Dante | `H01M`, `H01N`, `H01R`, `H21M`, `H21N`, `e07T` | Q `A0DF`, W `A0DI` | E `A0DJ`, R `A0DL` |  |
| 32 | Ouma Shu | `H027` |  | R `A0FX` | W `A0FQ` |
| 33 | Accelerator | `H02B`, `e09K` |  | F `A0GB` | R `A0QU`, Q `A0G8`, W `A0G7` |
| 34 | Haku | `H02D` | Q `A0GG` | E `HaG1` | R `A0GL` |
| 35 | Gamma | `H01B` | W `A0GU` | Q `A0GS`, F `A0GX` |  |
| 36 | Kirito | `H02F`, `H05Y`, `e0AD` |  | G `KrG1` | R `A0H7`, W `A0H4`, Q `A0H3` |
| 37 | Jellal | `H02G`, `H12G` |  | Q `A0HY`, R `A0HZ` | T `A0I2`, E `A0O7` |
| 38 | Son Goku | `H02H` | E `GKE5`, E `GKE6` | Q `GKQ1`, G `GKG6`, G `GKG4`, `GKG5` | T `GKT1`, R `GKR1`, W `GKW1`, W `GKW5`, G `GKG7` |
| 39 | Vegeta | `H02I` | E `A2HY`, W `A0IO`, Q `A0IM` | T `A0RJ` | R `A0IQ` |
| 40 | Ichimaru Gin | `H02J` |  |  | R `A0J5`, E `A0J2`, Q `A0IZ`, W `GinW` |
| 41 | Tousen | `H02K`, `H0TF`, `H036` |  | W `A0J8` | R `A0J9` |
| 42 | Broly | `H02L` | Q `A0JD` | W `A0JF`, T `A0JK` | R `A1A4`, E `A3DJ` |
| 43 | Aizen | `H02M`, `H12M`, `HASC`, `HAST` |  |  | Q `ASQ1`, W `ASW1` |
| 44 | Super Buu | `H02O` | R `A0K4`, T `A0SN` | Q `A0JZ`, W `A0K2` | G `BuuG` |
| 45 | Trafalgar Law | `H02P`, `H04N` |  |  | Q `LawQ` |
| 46 | Gaara | `H02R` |  | Q `A0KD`, F `A17F` | G `ASGG` |
| 47 | Kizaru | `H02S`, `H02T` | Q `A0KL` | T `A0KR` | W `A0KO` |
| 48 | Aokiji | `H02U`, `H05X` |  | Q `A0KT`, G `A0KW` | T `A0KY`, E `AokE`, W `A0KU` |
| 49 | Stiyl Magnus | `H02V` |  | Q `A0L0`, R `A0L6`, G `A13J` |  |
| 50 | Killer Bee | `H02X`, `H03I` | Q `A0L8`, W `A0QR` |  |  |
| 51 | Genkishi | `H02Y`, `H02Z` |  | W `A0LU` | E `A0LV` |
| 52 | Madara | `H033`, `HMUS` |  |  |  |
| 53 | Gotenks | `H034`, `e0LZ` | R `A0NX`, T `A0NR`, W `A0N6`, F `A0NV` | Q `A0N5`, E `A0N8` |  |
| 54 | Kuuko | `H03B` | E `A0OS` |  | W `A0OR` |
| 55 | Akainu | `H00Y` |  | Q `A06V`, W `A06W` | R `A06Y`, E `A06X`, F `A156` |
| 56 | Gogeta | `H03K`, `e0NG`, `e31F`, `e32F` |  | E `A0P7`, W `A1P6` | T `A0P9`, R `A2FF`, W `A0P6`, Q `A0P5` |
| 57 | Nelliel | `H03L`, `H03M` |  | T `A0PF` | Q `A0PA`, G `A1PA` |
| 58 | Vergil | `H03N`, `e0O1` |  | E `A0PM`, R `A0PN`, W `VerW` |  |
| 59 | Katsura | `H03P` | W `A0PQ` | R `A0PS` |  |
| 60 | Yomu | `H03R`, `H064` |  | Q `A0PU`, T `A0PZ` | W `A0PV`, E `A0PW`, R `A0PY` |
| 61 | Pain | `H03S` | Q `A0QC` |  | Q `A0Q1`, R `A0QP` |
| 63 | Sanji | `H031`, `H131`, `e0MH` |  | E `A0R4` | R `A0R5`, T `A0R6` |
| 64 | Trunks | `H042`, `e0PQ` |  | Q `A0R8`, E `A0RA` | R `A0R9`, W `A0RB`, T `A0RC` |
| 65 | Vegito | `H043` |  | Q `A0RE`, W `A0RD`, T `A0IV` | R `A0RH`, G `A0RI` |
| 66 | Misaka Mikoto | `H044`, `H06R`, `H244` |  |  | E `A0RN` |
| 67 | Ulquiorra Schiffer | `H045`, `H04J` |  | Q `A0RR`, T `A0RU` | E `A0RV` |
| 68 | Laxus Dreyar | `H047` | W `A0S0` | Q `A0RY`, R `A0SG` | E `LaxD`, T `A0ZG` |
| 69 | Lord Frieza | `H048`, `H248` | Q `A0SP`, R `A0SX`, T `A0SY` |  |  |
| 70 | Sakai Yuji | `HYuj`, `H049` |  | W `YujW` | R `A191` |
| 71 | Gon Freecss | `H04A`, `H04B` |  | Q `A0U4` | W `A0U6`, R `A0U1` |
| 72 | Yuzuriha Inori | `H04C`, `H04D` |  |  | Q `A0UJ` |
| 73 | Killua Zoldyck | `H04E` |  |  | Q `A0UR`, W `A15L` |
| 74 | Naruto Uzumaki | `H04F`, `H14F`, `H04G` |  | R `A0VE`, T `A0VG` |  |
| 75 | Sogiita Gunha | `H04H`, `H14H` |  | T `A0WI` | Q `A0WA`, W `A0WD`, R `A0WH` |
| 76 | Gray Fullbuster | `H04L`, `H06V` |  | W `A0XM`, R `A0XO` | T `A0XR` |
| 77 | Kurapika | `H04O`, `e0UV` |  |  | R `KkR1`, T `A0Z0` |
| 78 | Sinon | `H04T` | W `SNW1`, R `A270` |  | T `A2ZD`, E `A17M` |
| 79 | Perfect Cell | `H052` | Q `A104`, R `A106`, W `A109`, G `CelG`, E `A10B`, E `A20B`, E `A30B` |  | F `CelF` |
| 80 | Louise | `H053`, `H06Q` |  | R `A10M` | Q `A10D` |
| 81 | Natsu Dragneel | `H054` | E `A10U` | Q `A10R`, W `A10S` | T `A10W` |
| 82 | Sasuke Uchiha | `H057` |  | Q `A006`, E `A12L`, T `A12T` | W `A12I` |
| 83 | Xanxus | `H055` |  | Q `A110`, W `A112`, G `A113` | E `XanE`, R `A11A` |
| 84 | Gilgamesh | `H059`, `H06S`, `H070`, `e0WT` |  |  | R `A12W`, T `A12X`, Q `A130`, W `A131` |
| 85 | Emiya Shirou | `H05A`, `H05B` | Q `A132` |  | W `A135` |
| 86 | Haruno Sakura | `H05D`, `H06X` |  |  | Q `A13X`, W `A13Z`, R `A148`, G `SHG1` |
| 87 | Gajeel Redfox | `H05N` |  | Q `A14V`, T `A154` | W `A14X`, E `A150`, R `A152` |
| 88 | Admiral Fujitora | `H05Q` |  | T `A15X` | Q `A15W` |
| 89 | Kamijo Touma | `H05R` |  | T `A0W8` | R `A16L` |
| 91 | Whitebeard | `H060` |  |  | Q `A18S`, W `A18T`, E `A18V`, T `A18Y` |
| 92 | Ryougi Shiki | `H061` |  | Q `A194` | W `A196`, R `A198` |
| 93 | Frenda | `H063` | W `A19Q` | T `A19N` | F `FSF1`, G `FSG1` |
| 94 | Doflamingo | `H066` |  |  | Q `A1AI`, E `A1AS` |
| 95 | Tamamo no Mae | `H067` |  |  | W `A1B1`, Q `A1B0`, R `A1B5`, T `A1B6` |
| 96 | Nanaya Shiki | `H069` |  |  | W `A1BS` |
| 97 | Nero | `H06B`, `H26B`, `H16B` |  |  | Q `A1C9`, E `A1CB` |
| 98 | Alter Jeanne | `H06F` |  | E `A1D7` | Q `A1D3`, R `A1D9` |
| 99 | Shielder | `H051` |  | W `A1DK` |  |
| 100 | Atalanta | `H06G` |  | R `A1DY` | W `A1DW`, T `A1DZ` |
| 101 | Heroine X | `H06M` |  |  | Q `A1E5`, W `A1E6`, R `A1E8`, T `HerT` |
| 102 | Li Shuwen | `H06C`, `H16C` |  |  | E `A1CV`, W `A1CU` |
| 103 | Scathach | `H06Y`, `H06Z`, `H16Z` |  |  | W `A1FC`, Q `A1FD`, R `A1FF`, T `A1FG` |
| 104 | Archetype of Earth | `H072` |  | Q `A1FM` |  |
| 105 | King Hassan | `H075` |  |  |  |
| 106 | Ruler Jeanne | `H076` |  |  |  |
| 107 | Enkidu | `H077` |  |  | Q `A1HW`, W `A1HX`, R `A1HZ`, T `A1I0` |
| 108 | Deidara | `H112`, `Ho13` |  |  | F `Ad01` |
| 109 | Orihime | `H074` |  |  | Q `A1H9`, R `A1HC` |
| 110 | Saber Artoria | `H05C`, `H05E`, `H15C`, `H06P` |  | Q `A14E`, T `A14H` | E `A14D`, R `A14G` |
| 111 | Edmond Dantes | `Ho0Z` |  |  | Q `Ad6Q`, W `Ad8M`, R `Ad9R`, T `Ad8T`, E `CS01` |
| 112 | Kotomine Kirei | `H078`, `Ho0P` |  | Q `Ao63`, E `Ao66` | W `A1IA`, F `Ao61` |
| 113 | Tohsaka Rin | `H073` |  | E `A1G1` |  |
| 114 | Orochimaru | `ORH1`, `or00` |  |  | Q `ore7`, W `ore8`, T `OM11` |
| 115 | Lucy | `H06T`, `H06U` |  | E `A1EM`, F `A1EX` | Q `A1EK` |
| 116 | Wendy | `WEND` |  |  |  |
| 117 | Belfegor | `Hbel` |  |  | W `BelW`, E `BelE` |
| 118 | Kiyohime | `Ho11` |  | Q `Ao7A` | R `Ao7B`, T `Ao7C` |
| 119 | Hyuga Neji | `H116` |  | Q `A24E` | W `A34E`, E `A3G2`, R `A1LL`, T `A2LL` |
| 120 | Waver Velvet | `Ho0O`, `Ho1O` |  | W `Ao52` | Q `Ao51`, R `Ao55`, T `Ao6W` |
| 121 | Albedo | `HAlb` |  |  | Q `AlbQ` |
| 122 | Rengoku Kyojuro | `HRen` |  |  | W `RenW`, E `RenE`, R `RenR`, T `RenT` |
| 123 | Minato Namikaze | `HMin` |  | Q `MiQ1` | T `MiT1` |
| 124 | Madoka Kaname | `HMad`, `HMaG` |  | Q `MaQ1` | T `MaT1` |
| 125 | Rob Lucci | `H10L`, `H009`, `H00L`, `HHT2` |  |  | R `LCR1`, Q `A09G` |
| 126 | Kurosaki Ichigo | `HIc1`, `HIc2`, `HIc3` |  | R `IcR1`, Q `IcQ3`, R `IcR3` | W `IcW1`, E `IcE1`, W `IcW2`, E `IcE2`, R `IcR2`, T `IcT5` |
| 127 | Satou Kazuma | `Ho14` |  | E `Ao6V` |  |
| 128 | Yoruichi Shihoin | `H35Z`, `H35X` |  |  | E `YoE0`, W `YoW0`, Q `YoQ0`, T `YoT0`, D `YoD0` |
| 129 | Hashirama Senju | `HHSN`, `HHSG` |  |  | R `HSR1` |
| 130 | Tobirama Senju | `H34Z`, `H34X` |  | Q `TMQ0`, W `TMW0`, R `TMR0` | E `TME0`, T `TMT0` |
| 131 | Danzo Shimura | `HDSN` |  |  | R `DSR1`, G `DSG1` |
| 132 | Karna | `HKar` |  | W `KaA6`, R `KaAA` | E `KaA8`, T `KaAF`, G `KaA1` |
| 133 | Goku Black | `HBGN` |  | E `BGE2`, Q `BGQ2`, R `BGR2` | E `BGE1`, T `BGT1`, W `BGW2`, W `BGW4` |
| 134 | Sabrac | `HSab`, `e0Z5`, `HSaC` |  |  |  |
| 135 | Jiren | `HJi1` |  | E `JNE1`, T `JNT1` | W `JNW1`, R `JNR1`, F `JNF4`, G `JNG1`, D `JND1` |
| 136 | Gojo | `HGoj` |  |  | W `GSW1`, F `GSF2` |
| 137 | Garp | `HGrp` |  | E `GrE1` | Q `GrQ1`, W `GrW1`, R `GrR1`, T `GrT1`, G `GrG2` |
| 138 | Signum | `HSig` |  |  | W `SiW1` |
| 139 | Muten Roshi | `Rosh` |  |  | W `RsW1`, E `RsE1`, D `RsD1`, D `RsD2`, D `RsD3` |
| 140 | Baraggan | `HBrg` |  | Q `BbQ1` | E `BbE1`, D `BbD1` |
| 141 | Remilia | `HRem` |  | Q `RmQ1` |  |
| 142 | Flandre | `HFla` |  | W `FlW1`, R `FlR1` |  |
| 143 | Escanor | `HEsc` |  | E `EsE1` | T `EsD1` |
| 144 | Suigintou | `HSui` |  | W `SuW1`, E `SuE1`, T `SuT1`, T `SuG1` |  |
| 145 | Hirako | `HShn` | R `SnR1` | D `SnEc` |  |
| 146 | Dead Master | `HDMa` |  |  | D `DMD1` |
| 147 | Hit | `HHit` |  | W `HtW1` |  |
| 148 | Homura Akemi | `HHom`, `HHDv` | Q `HmQ1`, W `HmW1`, E `HmE1`, R `HmR1` |  |  |
| 200 | Nami | `H058` |  | Z `A11N` | G `A11W`, F `A11V` |
| 208 | Sabrac the Cutting Blade | `H05Z` |  |  | Q `A17U`, R `A183` |

## Ветки без перехвата

| Герой | Кнопка | Способность | Обработчик | Что нужно учитывать |
|---|---|---|---|---|
| Byakuran | Q | White Dragon (`A01F`) | [`WhiteDragonCast2`](../../map/war3map.j#L82006) | Летящий дракон проверяет попадание по пути. |
| Byakuran | E | Transparent Giant Hand (`A0XI`) | [`SlashTransparentGiantHand2`](../../map/war3map.j#L81686) | Удар отдельной движущейся волной. |
| Kimimaro Kaguya | Q | Teshi Sendan (`AKQ1`) | [`KimimaroQ_Bullet_Act`](../../map/war3map.j#L282466) | У костяных снарядов свои таймеры. |
| Monkey D. Luffy | W | Red Hawk \ Thor Elephant Gun (`A0ZJ`) | [`RedHawkCast3`](../../map/war3map.j#L82553), [`ThorElephantCast3`](../../map/war3map.j#L82495) | Различать рывок Луффи и волну после удара. |
| Uryu Ishida | Q | Licht Regen (`A08W`) | [`ISH_QArrowTick`](../../map/war3map.j#L87404) | Вести отдельный перехват по каждой стреле. |
| Uryu Ishida | W | Seele Schneider (`A08Y`) | [`Trig_Strong_Shot_Actions2`](../../map/war3map.j#L87574) | Летит к выбранной цели, урон в конце. |
| Uryu Ishida | E | Lone Sparrow (`A08Z`) | [`Trig_Lone_Sparrow_Actions2`](../../map/war3map.j#L87626) | Стрела проверяет попадания по пути. |
| Roronoa Zoro | Q | Hyakuhachi Pound Ho (`A02Y`) | [`HachPoundHoCast2`](../../map/war3map.j#L118329) | Фронт строится последовательными проверками области. |
| Itachi Uchiha | Q | Katon Goukakyuu No Jutsu (`A1D0`) | [`Trig_KatonIta_Actions2`](../../map/war3map.j#L161815) | Снаряд и вторая визуальная модель летят вместе. |
| Itachi Uchiha | W | Genjutsu: Sharingan (`A12H`) | [`GenjutsuSharinganFly2`](../../map/war3map.j#L162001) | Летит к выбранной цели, урон в конце. |
| Gekko Moria | R | Tsuno-Tokage (`MrR1`) | [`MissleMoveMoriaR_NonPause2`](../../map/war3map.j#L225172), [`MoriaRCast2`](../../map/war3map.j#L225236) | Связать жетон полёта с отдельным таймером урона. |
| Portgas D. Ace | Q | Hiken (`A014`) | [`HikenCast2`](../../map/war3map.j#L119777) | Огненная волна проверяет попадания по пути. |
| Portgas D. Ace | E | Shinka: Shiranui (`A09D`) | [`ShinkaShiranuiCast2`](../../map/war3map.j#L119867) | Пара летящих эффектов и удар по выбранной цели. |
| Portgas D. Ace | R | Hotarubi Hidaruma (`A016`) | [`AceMissleFly2`](../../map/war3map.j#L119964) | Отдельные падения с уроном в области. |
| Portgas D. Ace | T | Dai Enkai: Entei (`A017`) | [`DaiEnakaiEnteiCast2`](../../map/war3map.j#L119488) | Модель шара и взрыв завязаны на один каст. |
| Gintoki | R | Kamehameha (`A0UZ`) | [`GintokiKamehamehaCast3`](../../map/war3map.j#L83854) | Своя движущаяся волна Камехамеха. |
| Hichigo | Q | Getsuga Tenshou (`A07O`) | [`Trig_Getsuga_Actions2`](../../map/war3map.j#L121274) | Движущийся фронт с независимыми проверками урона. |
| Hichigo | G | Vasterlord Cero (`A1M2`) / Excalibur Morgan (`A2M2`) | [`CastHichigoCero2`](../../map/war3map.j#L120827) | Общий обработчик Cero и Excalibur Morgan. |
| Gokudera | R | Hurricane Arrow (`A089`) | [`Trig_Hurricane_Arrow_Actions2`](../../map/war3map.j#L84488) | Стрела проверяет попадания в полёте. |
| Urahara | Q | Kamisori, Benihime (`A0BE`) | [`DarkRayCast2`](../../map/war3map.j#L90685) | Волна движется, визуальная модель привязана к её фронту. |
| Urahara | W | Hado #88: Hiryu Gekizoku Shinten Raiho (`A0ZM`) | [`ShintenRaihoCast3`](../../map/war3map.j#L90515) | Луч, след и удержание целей требуют общей очистки. |
| Death the Kid | Q | Death Cannon (`A0C6`) | [`DeathCannonCast2`](../../map/war3map.j#L92624) | Применимо также к Фрэнсис Дрейк. Снаряд с уроном и отталкиванием. |
| Death the Kid | W | Sanzu River Shot (`A0C7`) | [`SanzuReverShootFly2`](../../map/war3map.j#L92512) | Применимо также к Фрэнсис Дрейк. Баллистический снаряд с уроном в точке падения. |
| Death the Kid | T | Sanzu Fall Shot (`A0CB`) | [`SanzuFallShotMissleFly2`](../../map/war3map.j#L92349) | Применимо также к Фрэнсис Дрейк. Каждый выпущенный снаряд имеет свой таймер. |
| Jiraiya | Q | Katon Gamayu Endan (`A0CG`) | [`KatonGECast2`](../../map/war3map.j#L253521) | Удар распространяется от каста по линии. |
| Jiraiya | R | Senpo: Goemon (`A0CL`) | [`SenpoGoemonCast2`](../../map/war3map.j#L253335) | Фронт и дополнительные модели летят вместе. |
| Dante | E | Charge Shot (`A0DJ`) | [`ChargeShotCast2`](../../map/war3map.j#L94317) | Волна выстрела и её визуальные слои. |
| Dante | R | Rain Shot (`A0DL`) | [`RainShotCast2`](../../map/war3map.j#L93692) | Отложенные попадания дождя выстрелов. |
| Ouma Shu | R | Red Bomb (`A0FX`) | [`MissleMoveRedBomb2`](../../map/war3map.j#L95675) | Бомба летит в точку, затем взрывается. |
| Accelerator | F | Plasma Orb (`A0GB`) | [`MissleMovePlasmaOrb2`](../../map/war3map.j#L96794) | Сфера летит в точку, затем взрывается. |
| Haku | E | Ice Senbon Rain (`HaG1`) | [`Haku_ERainTick`](../../map/war3map.j#L97255) | Иглы и метки общей зоны, нужно решить гранулярность перехвата. |
| Gamma | Q | Shot Plasma (`A0GS`) | [`CastThunderStrike2`](../../map/war3map.j#L98365) | Отдельно движущаяся плазма и урон при завершении. |
| Gamma | F | Volpi Strike (`A0GX`) | [`MissleMoveVolpiesStrike2`](../../map/war3map.j#L98548) | Наводится на героя, урон при контакте. |
| Kirito | G | Dual Blades / Single Shot (`KrG1`) | [`KrShotMove`](../../map/war3map.j#L225757) | Вариант Single Shot проверяет столкновение по пути. |
| Jellal | Q | Heavenly Arrows (`A0HY`) | [`MissleMoveHeavenlyArrows2`](../../map/war3map.j#L101977) | Стрелы с отдельными целями. |
| Jellal | R | Grand Chariot (`A0HZ`) | [`ChariotMissleFly2`](../../map/war3map.j#L102461) | Падение снарядов с уроном в области. |
| Son Goku | Q | Kamehameha (`GKQ1`) | [`CastKamehameha22`](../../map/war3map.j#L105463), [`CastSuperKamehameha2`](../../map/war3map.j#L105080) | Обычный и усиленный лучи используют отдельные обработчики. |
| Son Goku | G | Breaker Energy Wave (`GKG6`) | [`BreakerEnergyWaveCast3`](../../map/war3map.j#L104577) | Остаток длины и контроль цели хранятся в таймере волны. |
| Son Goku | G | Spirit Bomb (`GKG4`) / Super Spirit Bomb (`GKG5`) | [`MissleMoveSpiritBomb2`](../../map/war3map.j#L104123), [`MissleMoveSuperSpiritBomb2`](../../map/war3map.j#L103983) | Два варианта выпуска Spirit Bomb с кнопок самой бомбы. Остановку и освобождение Гоку надо связать с её полётом. |
| Vegeta | T | Final Flash (`A0RJ`) | [`FinalFlashCast4`](../../map/war3map.j#L134657) | Движущийся луч и дополнительные эффекты. |
| Tousen | W | Suzumushi Nishiki: Benihiko (`A0J8`) | [`Slash_Benihiko2`](../../map/war3map.j#L110039) | Летящие волны проверяют попадание по пути. |
| Broly | W | Eraser Cannon (`A0JF`) | [`GiganticBlastCast2`](../../map/war3map.j#L111974) | Снаряд может захватить первую цель, её надо освобождать при перехвате. |
| Broly | T | Omega Blaster (`A0JK`) | [`OmegaBlastFly2`](../../map/war3map.j#L111657), [`OmegaBlastFly4`](../../map/war3map.j#L111566) | Отдельно проверить оба варианта полёта и взрыв. |
| Super Buu | Q | Chocolate Beam (`A0JZ`) | [`CastChocolateBeam2`](../../map/war3map.j#L113483) | Летящий луч с превращением цели. |
| Super Buu | W | Shocking Ball (`A0K2`) | [`MissleMoveShockingBall2`](../../map/war3map.j#L113637) | Сфера летит в точку, затем взрывается. |
| Gaara | Q | Sabaku Kyu (`A0KD`) | [`MissleMoveSabakuKyu2`](../../map/war3map.j#L114901) | Наводящийся фронт с контролем цели по прибытии. |
| Gaara | F | Saiko Zettai Kogeki: Shukaku no Hoko (`A17F`) | [`ShukakuLanceCast2`](../../map/war3map.j#L114310) | Летящий снаряд формы. |
| Kizaru | T | Yasakani no Magatama (`A0KR`) | [`YasakaniNoMagatamaMissleFly2`](../../map/war3map.j#L115423) | Снаряды залпа движутся независимо. |
| Aokiji | Q | Ice Block: Pheasant Beak (`A0KT`) | [`CastPhesentoBeak2`](../../map/war3map.j#L116120) | Ледяная птица проверяет попадания по пути. |
| Aokiji | G | Ice Block: Partisan (`A0KW`) | [`MissleMovePartisan2`](../../map/war3map.j#L115888) | Самонаводящийся снаряд, урон при контакте. |
| Stiyl Magnus | Q | Fire Ball (`A0L0`) | [`FireBallCast2`](../../map/war3map.j#L116472) | Летящий шар и взрыв. |
| Stiyl Magnus | R | Witch Hunt (`A0L6`) | [`WitchHuntCast2`](../../map/war3map.j#L116276) | Два визуальных слоя одного снаряда. |
| Stiyl Magnus | G | Innocentius Strike (`A13J`) | [`MissleMoveKeshaStrike2`](../../map/war3map.j#L116197) | Отдельно запущенный самонаводящийся снаряд. |
| Genkishi | W | Spettrale Nudiblanc (`A0LU`) | [`MissleMoveSpectraNodibranca2`](../../map/war3map.j#L119262) | Движущийся носитель. |
| Gotenks | Q | Revenge Cannon (`A0N5`) | [`CastKamehameha32`](../../map/war3map.j#L124195) | Движущийся луч Revenge Cannon. |
| Gotenks | E | Super Ghost Kamikaze Attack (`A0N8`) | [`MissleMoveSuperGhostKamikazeAttack2`](../../map/war3map.j#L123952) | Самонаводящиеся призраки с уроном при сближении. |
| Akainu | Q | Inugami Guren (`A06V`) | [`Trig_Dai_Funka_Actions2`](../../map/war3map.j#L83594) | Летит по линии, проверяет столкновение. |
| Akainu | W | Dai Funka (`A06W`) | [`Trig_Inugami_Guren_Actions2`](../../map/war3map.j#L83672) | Летит к выбранной цели. |
| Gogeta | E | Big Bang Kamehameha (`A0P7`) | [`GogetaECast3`](../../map/war3map.j#L197180) | Движущийся луч. |
| Gogeta | W | Soul Punisher (`A1P6`) | [`StardustBreakerAct2`](../../map/war3map.j#L126494) | Отдельный снаряд Soul Punisher. |
| Nelliel | T | Lanzador Verde (`A0PF`) | [`LanzadorVerdeCast2`](../../map/war3map.j#L127086) | Летящее копьё после броска. |
| Vergil | E | Aeral Cleave (`A0PM`) | [`UpperSlashMissleFly2`](../../map/war3map.j#L127900) | Волна после приёма. |
| Vergil | R | Cutting Saw (`A0PN`) | [`CuttingSawSlash2`](../../map/war3map.j#L127728) | Летящие клинки. |
| Vergil | W | Spirit Swords (`VerW`) | [`VergilWAttack_Periodic`](../../map/war3map.j#L221475) | Летящие мечи, выпускаемые стойкой и атаками. |
| Katsura | R | Elizabeth Cannon (`A0PS`) | [`EleCannonCast2`](../../map/war3map.j#L129075) | Летящий снаряд Элизабет. |
| Yomu | Q | Benizakura Slash (`A0PU`) | [`BenizakuraSlashCast2`](../../map/war3map.j#L130323) | Летящий слеш. |
| Yomu | T | Illusion Benizakura Strike (`A0PZ`) | [`MissleMoveKoykaSuigetsu2`](../../map/war3map.j#L112693) | Движущаяся копия. Отдельно учесть продолжение серии. |
| Sanji | E | Flamebage Shot (`A0R4`) | [`FlamebageShotMissleFly2`](../../map/war3map.j#L124947) | Летящие волны после удара. |
| Trunks | Q | Burning Attack (`A0R8`) | [`BurningAttackCast2`](../../map/war3map.j#L134039) | Летящая сфера и взрыв. |
| Trunks | E | Masenko (`A0RA`) | [`DubleBusterCast2`](../../map/war3map.j#L133525) | Два визуальных слоя летящего выстрела. |
| Vegito | Q | Big Bang Beam (`A0RE`) | [`BigBangBeamCast2`](../../map/war3map.j#L135140) | Наводится на выбранного врага. Это отдельный снаряд без рывка Вегито. |
| Vegito | W | Banshee Blast (`A0RD`) | [`BansheeBlastMissleMovePoint2`](../../map/war3map.j#L135207) | У шаров залпа отдельные траектории. |
| Vegito | T | Final Kamehameha (`A0IV`) | [`FinalKamehamehaCast2`](../../map/war3map.j#L108166) | У луча свой фронт и эффекты зарядки. |
| Ulquiorra Schiffer | Q | Cero\Cero Oscuras (`A0RR`) | [`CeroBCast2`](../../map/war3map.j#L136979), [`CeroOscurasCast2`](../../map/war3map.j#L136896) | Два варианта бегущего фронта. |
| Ulquiorra Schiffer | T | Lanza del Relampago (`A0RU`) | [`LanzoDelRampagoCast2`](../../map/war3map.j#L136521) | Летящее копьё и взрыв. |
| Laxus Dreyar | Q | Raging Bolt (`A0RY`) | [`RagingBoltCast2`](../../map/war3map.j#L149199) | Летящий фронт. |
| Laxus Dreyar | R | Dragon Roar (`A0SG`) | [`DragonRoarCast3`](../../map/war3map.j#L148283) | Движущаяся волна. |
| Sakai Yuji | W | Silver/Black Fire Ball (`YujW`) | [`YujiW_Periodic`](../../map/war3map.j#L226280) | Снаряд, у которого нужна отдельная очистка визуала. |
| Gon Freecss | Q | Jajanken: Paper (`A0U4`) | [`PaperCast3`](../../map/war3map.j#L151836) | Летящий удар Jajanken Paper. |
| Naruto Uzumaki | R | Futon: Rasen Shuriken (`A0VE`) | [`RasenShurikenCast3`](../../map/war3map.j#L154183) | Ветка броска сюрикена; отдельно от ветки с контактом. |
| Naruto Uzumaki | T | Senpo: Cho Odama Rasen Tarengan (`A0VG`) | [`SenpoChoOdamaRasenTarenganMissleFly2`](../../map/war3map.j#L153597) | Каждый летящий снаряд имеет собственный обработчик. |
| Sogiita Gunha | T | Super Amazing Punch (`A0WI`) | [`CastPressureCreation2`](../../map/war3map.j#L154551) | Движущийся фронт удара. |
| Gray Fullbuster | W | Ice-Make: Ice Cannon (`A0XM`) | [`IceCannonCast3`](../../map/war3map.j#L155445) | Снаряд Ice Cannon. |
| Gray Fullbuster | R | Ice-Make: Super Freeze Arrow (`A0XO`) | [`SuperFreezeArrowCast3`](../../map/war3map.j#L155666) | Ледяная стрела и связанный визуальный слой. |
| Louise | R | Lightning Orb (`A10M`) | [`LightningOrbCast2`](../../map/war3map.j#L158289) | Движущаяся сфера. |
| Natsu Dragneel | Q | Fire Dragon's Roar (`A10R`) | [`NatsuDragonRoarCast3`](../../map/war3map.j#L159965), [`NatsuDragonRoarLightningCast3`](../../map/war3map.j#L159810) | Обычная и молниевая волны. |
| Natsu Dragneel | W | Fire Dragon's Brilliant Flame (`A10S`) | [`BrilliantFlameCast2`](../../map/war3map.j#L159571), [`BrilliantFlameLightningCast2`](../../map/war3map.j#L159642) | Обычная и молниевая ветки. Отделить части с движением героя. |
| Sasuke Uchiha | Q | Katon Goukakyuu No Jutsu\ Katon Gouryuuka No Jutsu (`A006`) | [`Trig_Katon_Actions2`](../../map/war3map.j#L163456), [`KatonGoruukaFly2`](../../map/war3map.j#L163306) | Два варианта огненных снарядов. |
| Sasuke Uchiha | E | Kirin \ Enton: Yasaka no Magatama (`A12L`) | [`YasakaMagatamaSasukeCast3`](../../map/war3map.j#L162806) | Подключать снаряды Yasaka отдельно от Kirin. |
| Sasuke Uchiha | T | Enton: Susanoo Kagutsuchi \ Indra no Ya (`A12T`) | [`KagutsuchiCast2`](../../map/war3map.j#L163172), [`KagutsuchiCast3`](../../map/war3map.j#L163098) | Нужна проверка обеих форм при подключении. |
| Xanxus | Q | Scoppio d'Ira (`A110`) | [`XShotCast2`](../../map/war3map.j#L160969) | Самостоятельно летящий выстрел. |
| Xanxus | W | Bocciolo di Fiamma (`A112`) | [`MissleMoveBoccolloDiFiamma2`](../../map/war3map.j#L160821) | Летящий снаряд. |
| Xanxus | G | Martello Di Fiamma (`A113`) | [`MartelloDiFiammaMissleFly2`](../../map/war3map.j#L160665) | Баллистический снаряд с отдельным попаданием. |
| Gajeel Redfox | Q | Iron Dragon's Roar (`A14V`) | [`GajeelDragonRoarCast3`](../../map/war3map.j#L167786) | Движущаяся волна. |
| Gajeel Redfox | T | Iron Shadow Dragon's Roar (`A154`) | [`GajeelIronShadowDragonRoarCast3`](../../map/war3map.j#L167272) | Теневая волна в своей ветке. |
| Admiral Fujitora | T | Meteorite (`A15X`) | [`GravitaMeteoriteCast2`](../../map/war3map.j#L167928) | Падающий метеорит. |
| Kamijo Touma | T | Dragon's Breath (`A0W8`) | [`DragonBreathCast3`](../../map/war3map.j#L168458) | Фронт дыхания и визуальный след. |
| Ryougi Shiki | Q | Hidden Dagger (`A194`) | [`KnifeCast2`](../../map/war3map.j#L172268) | Летящий кинжал; последующий рывок отдельно. |
| Frenda | T | Meltdowner (`A19N`) | [`LaserMaginoCast3`](../../map/war3map.j#L173779) | Движущийся лазер. |
| Alter Jeanne | E | Execution (`A1D7`) | [`EJeanneCast2`](../../map/war3map.j#L185804) | Летящий снаряд. |
| Shielder | W | Possession Inheritance (`A1DK`) | [`ShieldaWCast4`](../../map/war3map.j#L186628) | Перехватывать волну отдельно от движения Шилдера. |
| Atalanta | R | Seven Arrows: Grand Chariot (`A1DY`) | [`RAtalantaMissles2`](../../map/war3map.j#L189203) | Стрелы летят независимо. |
| Archetype of Earth | Q | Holy Marbles (`A1FM`) | [`ArcueidQMissles2`](../../map/war3map.j#L196230) | Каждый шар в полёте самостоятельно проверяет урон. |
| Saber Artoria | Q | Air Slash (`A14E`) | [`SaberSlashCast2`](../../map/war3map.j#L166926) | Летящая волна и дополнительные модели. |
| Saber Artoria | T | Excalibur (`A14H`) | [`ExcaliburCast3`](../../map/war3map.j#L166514) | Свой фронт луча и след. |
| Kotomine Kirei | Q | Black Keys (`Ao63`) | [`KireiQMissles2`](../../map/war3map.j#L207675) | Выдаваемый вариант Black Keys, ключи отдельно. |
| Kotomine Kirei | E | Command Seal Reinforced Keys (`Ao66`) | [`MissleMoveKireiE2`](../../map/war3map.j#L207854) | Самонаводящиеся усиленные ключи. |
| Tohsaka Rin | E | Gandr (`A1G1`) | [`ERinMissles2`](../../map/war3map.j#L199955) | Летящие выстрелы Gandr. |
| Lucy | E | Aquarius (`A1EM`) | [`LucyAquariusCast3`](../../map/war3map.j#L192372) | Движущаяся волна. |
| Lucy | F | Urano Metoria (`A1EX`) | [`MissleMoveUranoMetria2`](../../map/war3map.j#L191427) | Отдельно падающие снаряды. |
| Kiyohime | Q | Fire Breath (`Ao7A`) | [`QKiyoMissles2`](../../map/war3map.j#L211493) | Самостоятельный фронт Fire Breath. |
| Hyuga Neji | Q | Hakke Kūshō (`A24E`) | [`NejiQCast2`](../../map/war3map.j#L166824) | Фронт ударной волны. |
| Waver Velvet | W | Kongming's fan (`Ao52`) | [`WWaverCast2`](../../map/war3map.j#L206629) | Движущийся фронт с уроном. |
| Minato Namikaze | Q | Kunai (`MiQ1`) | [`MinatoQ1_Periodic`](../../map/war3map.j#L228420), [`MinatoQWQ_Periodic`](../../map/war3map.j#L227968) | Летящий кунай и комбинированная ветка, в которой нужно остановить связанные действия. |
| Madoka Kaname | Q | Magic Arrow (`MaQ1`) | [`MadokaQ1_Periodic`](../../map/war3map.j#L230106), [`MadokaQ2_SinglePeriodic`](../../map/war3map.j#L230280), [`MadokaQ3_Periodic`](../../map/war3map.j#L230553) | Варианты стрел используют разные таймеры. |
| Kurosaki Ichigo | R | Getsuga Tenshou (`IcR1`) | [`IchigoShikaiR_Periodic2`](../../map/war3map.j#L254366) | Летящий Getsuga Tenshou. |
| Kurosaki Ichigo | Q | Quick Getsuga Tenshou (`IcQ3`) | [`IchigoBankaiQ1_Periodic`](../../map/war3map.j#L255265) | Летящий Quick Getsuga в банкае. |
| Kurosaki Ichigo | R | Vasterlord Cero (`IcR3`) | [`IchigoVasterR_Periodic`](../../map/war3map.j#L256215) | Луч Cero Васто Лорде. |
| Satou Kazuma | E | Snipe (`Ao6V`) | [`EKazumaMissles2`](../../map/war3map.j#L209404) | Отдельный выстрел Snipe. |
| Tobirama Senju | Q | Suiton: Suidanha (`TMQ0`) | [`TobiramaQMissles2`](../../map/war3map.j#L265434) | Летящий фронт проверяет уроном по пути. |
| Tobirama Senju | W | Kunai (`TMW0`) | [`TobiramaWCast2`](../../map/war3map.j#L265715) | Кунай в полёте, последующее действие проверять отдельно. |
| Tobirama Senju | R | Suiton: Suishoha (`TMR0`) | [`TobiramaRCast3`](../../map/war3map.j#L266070) | Движущийся фронт воды. |
| Karna | W | Brahma (`KaA6`) | [`KarnaWAttack_Periodic`](../../map/war3map.j#L258228) | Снаряды автоатак в стойке W обслуживаются своим таймером. |
| Karna | R | Brahmastra Kundala (`KaAA`) | [`KarnaR_Periodic`](../../map/war3map.j#L259036) | Отдельный снаряд и попадание в точке. |
| Goku Black | E | God Slicer Dance (`BGE2`) | [`BlackGokuE2Act`](../../map/war3map.j#L240570), [`BlackGokuEBalls1`](../../map/war3map.j#L241365) | Пули после удара и залп Замасу. Выход из контроля нужен отдельно от снаряда. |
| Goku Black | Q | Holy Light Grenade (`BGQ2`) | [`BlackGokuFGQAct`](../../map/war3map.j#L240917), [`BlackGokuQGAct`](../../map/war3map.j#L240803) | Летящие варианты Holy Light Grenade. |
| Goku Black | R | Kamehameha Throw (`BGR2`) | [`BlackGokuRAct`](../../map/war3map.j#L241083) | Выпущенный вариант луча с конечным взрывом. |
| Jiren | E | Power Impact \ Counter Impact (`JNE1`) | [`JirenE1_Cast2`](../../map/war3map.j#L223064) | Летящий Power Impact. Контрветку проверять отдельно. |
| Jiren | T | Overheat Magnetron (`JNT1`) | [`JirenT_Fly2`](../../map/war3map.j#L222506), [`JirenT_Fly4`](../../map/war3map.j#L222410) | В обеих ветках движется отдельный снаряд. |
| Garp | E | Cannon Ball (`GrE1`) | [`Garp_E_Act2`](../../map/war3map.j#L280919) | Ядро движется к цели, взрыв в точке. |
| Baraggan | Q | Respira: Wave (`BbQ1`) | [`Brg_Q_Act2`](../../map/war3map.j#L70331) | Фронт Respira движется вместе со своими эффектами. |
| Remilia | Q | Scarlet Shoot (`RmQ1`) | [`Rem_Q_Shot`](../../map/war3map.j#L16138) | Каждый снаряд Scarlet Shoot проверяет столкновение в полёте. |
| Flandre | W | Starbow Break (`FlW1`) | [`Fla_W_Spear`](../../map/war3map.j#L18011) | Копьё внутри W. Отдельно проверить вариант по точке. |
| Flandre | R | Kagome, Kagome (`FlR1`) | [`Fla_R_Spear`](../../map/war3map.j#L18378) | Летящие копья из вариантов R. |
| Escanor | E | Cruel Sun (`EsE1`) | [`Esc_EProjectileTick`](../../map/war3map.j#L22720) | Сфера Cruel Sun имеет отдельный таймер. |
| Suigintou | W | Black Feather Volley (`SuW1`) | [`Sui_W_Fly`](../../map/war3map.j#L19768) | Перья из основного залпа и из зеркала. |
| Suigintou | E | Feather Scatter (`SuE1`) | [`Sui_E_Fly`](../../map/war3map.j#L19884) | Летящие перья. |
| Suigintou | T | Feather Recall (`SuT1`) | [`Sui_T_Fly`](../../map/war3map.j#L20864) | Возвращающиеся перья с уроном по пути и выдачей щита. |
| Suigintou | T | Final Wings (`SuG1`) | [`Sui_G_Chain`](../../map/war3map.j#L21017), [`Sui_G_Rain`](../../map/war3map.j#L21080) | Цепи и перья с отдельными попаданиями. В коде остался ID кнопки G. |
| Hirako | D | Cero (`SnEc`) | [`ShinjiRCast2`](../../map/war3map.j#L138759) | Луч под маской и связанный зелёный вариант Тоусена. |
| Hit | W | Icy Glare (`HtW1`) | [`HitWMove`](../../map/war3map.j#L295286), [`HitWImpact`](../../map/war3map.j#L295186) | Фронт льда отбирает цели в полёте, а потом срабатывает массовое попадание. |
| Nami | Z | Tornado Tempo (`A11N`) | [`Trig_Tempo_Tornado_Actions2`](../../map/war3map.j#L161720) | Летящий фронт торнадо. |

Для старых подключённых кнопок Мукуро `A0B0` и Синон `A0Z2` обработчики найдены, доступность у актуальных героев следует проверять в игре.
