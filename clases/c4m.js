/* =========================================================
   4° MEDIO (B1) — Presentaciones por clase
   ========================================================= */
window.CLASES = window.CLASES || {};
CLASES["4m"] = {
label: "4° Medio", color: "#b5651d",
units: [

/* ───────────── UNIDAD 1 ───────────── */
{ n:1, icon:"🌊", title:"Global Issues & Our Ocean", desc:"Present Perfect Continuous, causa y efecto, tercer condicional, wishes y lenguaje persuasivo",
lessons:[

{ title:"The Ocean in Danger: Present Perfect Continuous", tema:"have / has been + -ing · for / since · How long have you been…?", min:90,
  obj:"Describir problemas ambientales que comenzaron en el pasado y continúan hoy usando el Present Perfect Continuous.",
  can:["Formar el Present Perfect Continuous.","Diferenciarlo del Present Perfect Simple.","Describir cambios en el océano con datos."],
  slides:[
  {t:"warm", title:"What has been happening to the ocean?", intro:"¿Qué sabes? Comenta con tu compañero:", items:[["Temperature","Ocean temperatures have been rising."],["Plastic","Plastic has been accumulating in the sea."],["Fish","Fish populations have been decreasing."],["Ice","Glaciers have been melting."]]},
  {t:"tbl", title:"Present Perfect Continuous", head:["","Form","Example"], rows:[
    ["✅","have / has been + -ing","Sea levels <b>have been rising</b> for decades."],["❌","haven't / hasn't been + -ing","We <b>haven't been recycling</b> enough."],
    ["❓","Have / Has + subject + been + -ing?","<b>How long have</b> you <b>been studying</b> English?"]],
    note:"Se usa para acciones que <b>empezaron en el pasado y continúan</b> (o acaban de terminar con resultados visibles): <i>I'm tired because I've been working all day.</i>"},
  {t:"exp", title:"Simple vs Continuous", html:"<div class='cols'><div class='rule'><b>Present Perfect Simple</b><br>resultado / cantidad<br>Volunteers <b>have collected</b> 500 kg of plastic.</div><div class='rule'><b>Present Perfect Continuous</b><br>proceso / duración<br>Volunteers <b>have been collecting</b> plastic since 8 a.m.</div></div><div class='tip'>⚠️ Verbos de estado (know, like, believe) no van en continuo: I've <b>known</b> her for years ✅ <s>I've been knowing</s> ❌</div>"},
  {t:"gap", title:"Complete with Present Perfect Continuous", items:[
    ["Scientists ___ (study) the Humboldt Current for years.","have been studying|'ve been studying"],["The temperature of the sea ___ (rise) since 1950.","has been rising|'s been rising"],
    ["We ___ (clean) the beach all morning.","have been cleaning|'ve been cleaning"],["She ___ (not / sleep) well lately.","hasn't been sleeping|has not been sleeping"]]},
  {t:"mcq", title:"Simple or Continuous?", items:[
    ["I ___ this book three times.",["have read","have been reading"],0],["Your hands are dirty! What ___?",["have you done","have you been doing"],1],
    ["They ___ each other since primary school.",["have known","have been knowing"],0],["It ___ all day. The streets are wet.",["has rained","has been raining"],1]]},
  {t:"read", title:"Plastic in the Pacific", text:"For more than 20 years, scientists have been studying the Great Pacific Garbage Patch, an area of plastic waste between Hawaii and California. Ocean currents have been carrying plastic there for decades. Researchers from Chile have also been finding microplastics on the beaches of Easter Island. Some countries have banned plastic bags, and Chile was the first in Latin America to do it, in 2018.",
    items:[["What have scientists been studying?","The Great Pacific Garbage Patch."],["What have currents been doing?","Carrying plastic there for decades."],["What have Chilean researchers found?","Microplastics on Easter Island beaches."],["When did Chile ban plastic bags?","In 2018."]]},
  {t:"speak", title:"How long have you been…?", task:"Entrevista a tu compañero con 5 preguntas y cuenta 2 respuestas al curso.", min:6,
    frame:["How long have you been studying at IMV?","What have you been doing lately?","Have you been sleeping well?","He / She has been ___ since ___."]},
  {t:"exit", items:["Escribe 2 oraciones sobre el océano con Present Perfect Continuous.","Explica la diferencia: <i>I've read / I've been reading</i>.","Responde: How long have you been learning English?"]}
  ]},

{ title:"Climate Change: Causes & Effects", tema:"because (of) · due to · as a result · therefore · so · lead to", min:90,
  obj:"Explicar causas y efectos del cambio climático usando conectores de causa y consecuencia.",
  can:["Usar because / because of / due to para causas.","Usar so / therefore / as a result para efectos.","Construir cadenas causa–efecto sobre Chile."],
  slides:[
  {t:"warm", title:"Cause or effect?", intro:"¿Es causa o efecto del cambio climático?", items:[["Burning fossil fuels","Cause"],["Droughts in central Chile","Effect"],["Deforestation","Cause"],["Melting glaciers in Patagonia","Effect"],["More forest fires","Effect"]]},
  {t:"tbl", title:"Cause and effect linkers", head:["Type","Linker","Example"], rows:[
    ["Cause + clause","because / since / as","Glaciers are melting <b>because</b> temperatures are rising."],["Cause + noun","because of / due to","There are more fires <b>due to</b> the drought."],
    ["Effect (new sentence)","Therefore, / As a result,","It didn't rain. <b>As a result,</b> rivers dried up."],["Effect (same sentence)","so","It's very dry, <b>so</b> fires spread quickly."],["Verb","lead to / cause / result in","Deforestation <b>leads to</b> soil erosion."]],
    note:"⚠️ <b>because</b> + sujeto + verbo · <b>because of / due to</b> + sustantivo: <i>because of the heat</i> ✅ <s>because the heat</s> ❌"},
  {t:"mcq", title:"Choose the right linker", items:[
    ["The flight was cancelled ___ the storm.",["because","because of"],1],["It hasn't rained for months. ___, there is a water shortage.",["Therefore","Because"],0],
    ["Sea levels are rising ___ ice is melting.",["due to","because"],1],["Pollution can ___ health problems.",["lead to","as a result"],0],["It was too windy, ___ the ferry didn't leave.",["so","due to"],0]]},
  {t:"gap", title:"Complete", items:[
    ["The beach was closed ___ of the oil spill.","because"],["Many animals are dying ___ to plastic pollution.","due"],["We used less water. As a ___, our bill went down.","result"],["Burning coal ___ to air pollution.","leads|contributes"]]},
  {t:"order", title:"Build the cause–effect chain", items:["Temperatures are rising because of greenhouse gases.","As a result, glaciers in Patagonia are melting.","Therefore, sea levels are rising.","This leads to floods in coastal cities."]},
  {t:"game", title:"Domino of consequences 🁡", rules:["El profesor dice una causa.","Cada equipo agrega un efecto con un conector distinto (so, therefore, as a result, leads to).","La cadena más larga y lógica gana."],
    cards:["People use too many cars.","Factories throw waste into rivers.","Forests are cut down.","It doesn't rain for a year.","People buy too much plastic.","Ships spill oil."]},
  {t:"speak", title:"Problem → solution talk", task:"En grupos, elijan un problema ambiental de Chile y expliquen 2 causas, 2 efectos y 1 solución.", min:8,
    frame:["The main cause is ___ because ___.","Due to ___, ___.","As a result, ___.","This leads to ___. One solution could be ___."]},
  {t:"exit", items:["Escribe 1 oración con because y 1 con because of.","Escribe 1 oración con therefore o as a result.","Corrige: <i>Fires are common due to it is very dry.</i>"]}
  ]},

{ title:"Third Conditional: Past Regrets & Consequences", tema:"If + had + participle, would have + participle", min:90,
  obj:"Hablar de situaciones pasadas hipotéticas y sus consecuencias usando el tercer condicional.",
  can:["Formar el tercer condicional.","Analizar eventos históricos o ambientales: If they had…","Comparar los tres condicionales."],
  slides:[
  {t:"warm", title:"What would have happened?", intro:"Imagina:", items:[["If the Titanic had seen the iceberg earlier…","…it wouldn't have sunk."],["If I had studied more for the last test…","…I would have got a better grade."],["If you had been born in 1900…","…you wouldn't have had a phone."]]},
  {t:"tbl", title:"Third conditional", head:["IF clause","Main clause"], rows:[
    ["If + had + participle","would have + participle"],["If the captain <b>had checked</b> the weather,","the ship <b>wouldn't have left</b> port."],["If I <b>had known</b>,","I <b>would have helped</b> you."],["<b>Would</b> you <b>have gone</b>","if they <b>had invited</b> you?"]],
    note:"Hablamos de algo que <b>no pasó</b> en el pasado. No se puede cambiar: es imaginación o arrepentimiento. Contracciones: I'd known · would've /ˈwʊdəv/."},
  {t:"exp", title:"The three conditionals", html:"<table class='t'><tr><th>Type</th><th>Use</th><th>Example</th></tr><tr><td><b>1st</b></td><td>futuro posible</td><td>If it <b>rains</b>, we'<b>ll</b> stay home.</td></tr><tr><td><b>2nd</b></td><td>presente imaginario</td><td>If I <b>had</b> a boat, I'<b>d</b> sail.</td></tr><tr><td><b>3rd</b></td><td>pasado imaginario</td><td>If I <b>had had</b> a boat, I'<b>d have sailed</b>.</td></tr></table>"},
  {t:"gap", title:"Complete with the third conditional", items:[
    ["If we ___ (leave) earlier, we wouldn't have missed the bus.","had left|'d left"],["If she had studied, she ___ (pass) the exam.","would have passed|'d have passed|would've passed"],
    ["They ___ (not / get) lost if they had used the GPS.","wouldn't have got|wouldn't have gotten|would not have got"],["If I ___ (know) about the party, I would have gone.","had known|'d known"]]},
  {t:"read", title:"The Exxon Valdez disaster (1989)", text:"In 1989, the oil tanker Exxon Valdez hit a reef in Alaska and spilled millions of litres of oil. Thousands of birds and sea animals died. Investigators said the crew was tired and the radar wasn't working properly. If the crew had rested enough, they would have noticed the danger. If the radar had worked, the ship wouldn't have hit the reef. After the accident, new safety laws were introduced.",
    items:[["What happened in 1989?","The tanker hit a reef and spilled oil."],["What two problems did investigators find?","A tired crew and a broken radar."],["What would have happened if the crew had rested?","They would have noticed the danger."],["What happened after the accident?","New safety laws were introduced."]]},
  {t:"game", title:"Regret chain ⛓️", rules:["El profesor dice un evento: <i>I woke up late.</i>","Estudiante 1: <i>If I hadn't woken up late, I wouldn't have missed the bus.</i>","Estudiante 2 continúa desde la consecuencia. ¡Quien rompe la cadena sale!"],
    cards:["I woke up late.","I forgot my phone.","It rained on my birthday.","I didn't study for the test.","I lost my wallet.","I met my best friend at school.","The bus broke down."]},
  {t:"speak", title:"Life decisions", task:"Cuenta a tu compañero 2 decisiones importantes de tu vida y qué habría pasado si hubieras elegido distinto.", min:6,
    frame:["If I hadn't chosen IMV, I would have ___.","If I had ___, I wouldn't have ___.","What would you have done?"]},
  {t:"exit", items:["Escribe un tercer condicional sobre un error tuyo del pasado.","Escribe una oración de cada tipo de condicional (1°, 2°, 3°).","Corrige: <i>If I would have known, I would have come.</i>"]}
  ]},

{ title:"Wishes & Regrets", tema:"I wish / If only + past simple (presente) · + past perfect (pasado) · wish … would", min:90,
  obj:"Expresar deseos sobre el presente y arrepentimientos sobre el pasado con I wish e If only.",
  can:["Usar I wish + past simple para deseos presentes.","Usar I wish + past perfect para arrepentimientos.","Usar I wish people would… para quejas."],
  slides:[
  {t:"warm", title:"Make a wish ✨", intro:"Completa en voz alta:", items:["I wish I had…","I wish I could…","I wish I lived…","I wish I hadn't…"]},
  {t:"tbl", title:"I wish / If only", head:["Time","Form","Example"], rows:[
    ["Presente (deseo)","wish + past simple / could","I <b>wish</b> I <b>had</b> more free time. · I wish I <b>could</b> swim."],["Pasado (arrepentimiento)","wish + past perfect","I <b>wish</b> I <b>had studied</b> more."],
    ["Queja (molestia)","wish + someone + would","I <b>wish</b> people <b>would</b> stop throwing trash on the beach."],["Más fuerte","If only + …","<b>If only</b> I <b>hadn't</b> lost my phone!"]],
    note:"Con be: <b>I wish I were</b> (formal) / I wish I was (informal)."},
  {t:"mcq", title:"Choose the correct form", items:[
    ["I wish I ___ taller. (presente)",["am","were","had been"],1],["I wish I ___ that message yesterday. (pasado)",["didn't send","hadn't sent","wouldn't send"],1],
    ["I wish my neighbours ___ so much noise.",["wouldn't make","didn't made","haven't made"],0],["If only I ___ speak French!",["can","could","would"],1]]},
  {t:"gap", title:"Write a wish", items:[
    ["I don't have a car. → I wish I ___ a car.","had"],["I can't play the guitar. → I wish I ___ play the guitar.","could"],["I didn't go to the concert. → I wish I ___ to the concert.","had gone|'d gone"],["People pollute the sea. → I wish people ___ stop polluting the sea.","would"]]},
  {t:"read", title:"Letters to the ocean", text:"“Dear Ocean, I wish people respected you more. I wish we hadn't thrown so much plastic into your waters in the past. If only every country would protect its coast! I wish I could dive and see your coral reefs one day. I promise I'll do my part. — Fernanda, 17, Valparaíso”",
    items:[["What does Fernanda wish about people?","That they respected the ocean more."],["What does she regret about the past?","That we threw so much plastic into the sea."],["What would she like to do one day?","Dive and see coral reefs."],["Which wish is a complaint?","If only every country would protect its coast."]]},
  {t:"speak", title:"Wishes for Chile & the world", task:"En grupos, escriban 3 deseos para Chile y 2 arrepentimientos de la humanidad. Compartan.", min:7,
    frame:["I wish Chile had ___.","I wish people would ___.","I wish we hadn't ___.","If only ___!"]},
  {t:"exit", items:["Escribe 1 deseo presente, 1 arrepentimiento y 1 queja con wish.","Corrige: <i>I wish I can fly.</i>","¿Qué tiempo verbal usamos para arrepentirnos del pasado?"]}
  ]},

{ title:"Taking Action: Persuasive Campaigns", tema:"Lenguaje persuasivo · imperativos · preguntas retóricas · petición formal", min:90,
  obj:"Diseñar una campaña ambiental persuasiva usando recursos lingüísticos de persuasión.",
  can:["Reconocer técnicas persuasivas (datos, emoción, preguntas retóricas).","Usar imperativos, modales y Let's para persuadir.","Crear un afiche o petición para una campaña."],
  slides:[
  {t:"warm", title:"Which slogan is better? 📢", intro:"Vota y explica por qué:", items:[["A: 'Please recycle.' / B: 'Every bottle counts. Recycle today!'","B — specific, emotional and urgent."],["A: 'Don't use plastic.' / B: 'Would you eat plastic? Fish do.'","B — rhetorical question."]]},
  {t:"tbl", title:"Persuasive techniques", head:["Technique","Example"], rows:[
    ["Facts & numbers","Every year, 8 million tons of plastic enter the ocean."],["Rhetorical question","Do you want your children to swim in plastic?"],["Imperatives","Join us! Say no to plastic!"],
    ["Inclusive 'we' / Let's","Together we can make a difference. Let's act now!"],["Emotional language","Innocent sea turtles are dying every day."],["Modals of obligation","We must protect our coast. We can't wait any longer."]]},
  {t:"mcq", title:"Identify the technique", items:[
    ["“Imagine a beach with no trash.”",["fact","emotional appeal","command"],1],["“Chile has 4,270 km of coastline.”",["fact","rhetorical question","emotion"],0],["“Isn't our ocean worth saving?”",["fact","rhetorical question","imperative"],1],["“Join the beach clean-up this Saturday!”",["imperative","fact","question"],0]]},
  {t:"read", title:"A petition", text:"To the Municipality of Valparaíso: We, the students of Instituto Marítimo de Valparaíso, are asking for more recycling points on our beaches. Every summer, thousands of tourists visit Playa Ancha and leave tons of trash. As a result, birds and fish are dying. We must act now. We propose installing 20 recycling bins and organising monthly clean-ups. Together we can keep our coast clean. Please sign this petition!",
    items:[["Who is the petition for?","The Municipality of Valparaíso."],["What problem do they describe?","Tourists leave tons of trash on the beaches."],["What two actions do they propose?","20 recycling bins and monthly clean-ups."],["Find an imperative.","Please sign this petition!"]]},
  {t:"game", title:"Slogan battle ⚡", rules:["Cada equipo saca un tema.","Tienen 2 minutos para crear un eslogan con 2 técnicas persuasivas.","El curso vota: el más persuasivo gana 2 puntos."],
    cards:["saving water","stopping forest fires","reducing plastic","protecting sea lions","using public transport","recycling at school","eating less meat","turning off lights"]},
  {t:"speak", title:"Campaign pitch 🎤", task:"En grupos, presenten una campaña ambiental de 1 minuto para el liceo (problema, datos, acción, eslogan).", min:12,
    steps:["Elijan un problema real del liceo o del barrio.","Incluyan un dato, una pregunta retórica y un imperativo.","Presenten; el curso evalúa con la rúbrica: claridad, persuasión, pronunciación."],
    frame:["Did you know that ___?","We must ___.","Join us and ___!","Together we can ___."]},
  {t:"exit", items:["Escribe un eslogan con una pregunta retórica.","Escribe 3 técnicas persuasivas con un ejemplo cada una.","¿Qué campaña harías para tu liceo?"], home:"Diseña el afiche de tu campaña en inglés (con eslogan, dato y llamado a la acción)."}
  ]}
]},

/* ───────────── UNIDAD 2 ───────────── */
{ n:2, icon:"⚓", title:"Maritime Technical English", desc:"Partes del barco, instrucciones técnicas, seguridad y emergencias, procesos portuarios e informes de incidentes",
lessons:[

{ title:"Parts of a Ship & Describing Equipment", tema:"bow, stern, port, starboard… · made of · used for · dimensions", min:90,
  obj:"Identificar las partes de un barco y describir equipos indicando material, función y dimensiones.",
  can:["Nombrar 12 partes de un barco.","Describir un objeto: It's made of… It's used for…","Expresar dimensiones: It's 200 metres long."],
  slides:[
  {t:"warm", title:"Ship vocabulary you already know", intro:"¿Cuántas partes de un barco conoces en inglés?", items:[["Front of the ship","bow"],["Back of the ship","stern"],["Left side (facing the bow)","port"],["Right side","starboard"],["Where the captain navigates","bridge"]]},
  {t:"tbl", title:"Parts of a ship 🚢", head:["Part","Meaning","Part","Meaning"], rows:[
    ["bow","proa","stern","popa"],["port side","babor (izquierda)","starboard","estribor (derecha)"],["deck","cubierta","hull","casco"],["bridge","puente de mando","engine room","sala de máquinas"],["anchor","ancla","propeller","hélice"],["mast","mástil","lifeboat","bote salvavidas"]],
    note:"🧠 Truco: <b>port</b> y <b>left</b> tienen 4 letras. La luz de babor es <b>roja</b> y la de estribor <b>verde</b>."},
  {t:"exp", title:"Describing equipment", html:"<div class='cols'><div class='rule'><b>Material</b><br>It's <b>made of</b> steel / aluminium / rubber / plastic.</div><div class='rule'><b>Function</b><br>It's <b>used for</b> + -ing / It's <b>used to</b> + verb<br>A winch is used for lifting heavy loads.</div></div><div class='ex'><b>Dimensions</b><br>The ship is 300 metres <b>long</b>, 48 metres <b>wide</b> and its hull is 25 metres <b>high</b>.<br>It <b>weighs</b> 90,000 tonnes. It <b>has a capacity of</b> 8,000 containers.</div>"},
  {t:"match", title:"Equipment → Function", pairs:[["anchor","keeps the ship in one place"],["propeller","moves the ship forward"],["radar","detects other ships and obstacles"],["winch","lifts or pulls heavy loads"],["lifeboat","saves people in an emergency"],["compass","shows the direction"]]},
  {t:"gap", title:"Complete the description", items:[
    ["The hull is made ___ steel.","of"],["A lifejacket is used ___ keeping people afloat.","for"],["The container ship is 366 metres ___.","long"],["The anchor ___ 12 tonnes.","weighs"]]},
  {t:"game", title:"What is it? 🔧", rules:["Un estudiante describe un objeto técnico (material, función, tamaño) sin decir su nombre.","Su equipo adivina en 30 segundos.","Bonus si usan made of y used for."],
    cards:["anchor","life jacket","compass","fire extinguisher","rope","binoculars","radio","helmet","screwdriver","multimeter","crane","buoy"]},
  {t:"speak", title:"Ship tour guide", task:"Usando una imagen de un barco, guía a un “visitante” por sus partes y equipos.", min:6,
    frame:["This is the bow, the front of the ship.","On the port side you can see ___.","This is the ___. It's made of ___ and it's used for ___.","The ship is ___ metres long."]},
  {t:"exit", items:["Nombra 6 partes de un barco.","Describe un equipo con made of y used for.","¿Qué lado es port y cuál starboard?"]}
  ]},

{ title:"Technical Instructions & Procedures", tema:"Imperativos · secuenciadores · before / after + -ing · make sure", min:90,
  obj:"Dar y seguir instrucciones técnicas paso a paso usando imperativos y secuenciadores.",
  can:["Usar imperativos en instrucciones claras.","Ordenar pasos con First, Next, Once…, Finally.","Usar before / after + -ing y Make sure…"],
  slides:[
  {t:"warm", title:"How do you…?", intro:"Explica en 3 pasos cómo…", items:["…tie a basic knot.","…change a light bulb.","…put on a life jacket.","…start a motorbike."]},
  {t:"tbl", title:"Language for procedures", head:["Function","Language"], rows:[
    ["Sequence","First, … · Next, … · Then, … · After that, … · Finally, …"],["Time clauses","<b>Once</b> the engine is off, … · <b>When</b> you finish, …"],["Before / After + -ing","<b>Before starting</b>, check the oil. · <b>After using</b> the tool, clean it."],
    ["Emphasis","<b>Make sure</b> (that) the area is clear. · <b>Don't forget</b> to wear gloves."],["Warning","<b>Never</b> touch the cables with wet hands. · <b>Be careful</b> with …"]]},
  {t:"order", title:"Put the steps in order: putting on a life jacket", items:["First, put your arms through the life jacket.","Then, fasten the straps across your chest.","Make sure the jacket fits tightly.","Finally, check the whistle and the light."]},
  {t:"gap", title:"Complete the procedure", items:[
    ["___ starting the engine, check the oil level.","Before"],["After ___ (use) the drill, unplug it.","using"],["Make ___ the area is clear before lifting the load.","sure"],["___ touch the cables with wet hands!","Never|Don't"]]},
  {t:"mcq", title:"Choose the clearest instruction", items:[
    ["",["Maybe you could check the oil?","Check the oil level.","The oil is checked maybe."],1],["",["Before to start, wear gloves.","Before starting, wear gloves.","Before start, wear gloves."],1],["",["Make sure the power is off.","Make sure that power off.","Sure the power is off."],0]]},
  {t:"game", title:"Robot instructions 🤖", rules:["Un estudiante es “robot” y solo hace exactamente lo que se le dice.","Su equipo le da instrucciones paso a paso para una tarea (ej: dibujar un ancla en la pizarra).","Si la tarea queda bien, 2 puntos."],
    cards:["Draw an anchor on the board.","Put on a jacket.","Make a paper boat.","Write your name on the board with your left hand.","Open the door and close it quietly."]},
  {t:"speak", title:"Workshop procedure", task:"Explica a tu compañero un procedimiento de tu especialidad (6 pasos). Él/ella lo repite para comprobar.", min:8,
    frame:["First, ___.","Before ___-ing, make sure ___.","Once ___, ___.","Finally, ___. Never ___."]},
  {t:"exit", items:["Escribe 4 pasos de un procedimiento técnico con secuenciadores.","Escribe una advertencia con Never y otra con Make sure.","Corrige: <i>After use the tool, clean it.</i>"]}
  ]},

{ title:"Safety & Emergencies at Sea", tema:"SMCP · Mayday / Pan-Pan · alfabeto fonético NATO · drills", min:90,
  obj:"Comunicar situaciones de emergencia en el mar usando frases estándar (SMCP) y el alfabeto fonético.",
  can:["Deletrear con el alfabeto fonético (Alfa, Bravo…).","Distinguir Mayday, Pan-Pan y Sécurité.","Dar un mensaje de socorro básico."],
  slides:[
  {t:"warm", title:"Emergencies at sea", intro:"¿Qué emergencias pueden ocurrir en un barco?", items:[["🔥","fire on board"],["🌊","flooding / water ingress"],["🧍‍♂️💦","man overboard"],["⚙️","engine failure"],["🏥","medical emergency"]]},
  {t:"tbl", title:"Distress, urgency & safety calls", head:["Call","Meaning","Example"], rows:[
    ["<b>MAYDAY</b> (x3)","Peligro grave e inminente (vida en riesgo)","Mayday, Mayday, Mayday. This is fishing vessel Rosa. We are sinking."],
    ["<b>PAN-PAN</b> (x3)","Urgencia, sin peligro inmediato","Pan-Pan … We have engine failure. We need a tow."],["<b>SÉCURITÉ</b> (x3)","Aviso de seguridad (meteorología, navegación)","Sécurité … Storm warning in the area."]],
    note:"SMCP = Standard Marine Communication Phrases (OMI): frases simples y fijas para evitar malentendidos."},
  {t:"exp", title:"NATO phonetic alphabet 🔤", html:"<div class='rule' style='font-size:.85em;line-height:1.7'>A Alfa · B Bravo · C Charlie · D Delta · E Echo · F Foxtrot · G Golf · H Hotel · I India · J Juliett · K Kilo · L Lima · M Mike · N November · O Oscar · P Papa · Q Quebec · R Romeo · S Sierra · T Tango · U Uniform · V Victor · W Whiskey · X X-ray · Y Yankee · Z Zulu</div><div class='ex'>Ship name <b>IMV</b> → <b>India – Mike – Victor</b></div><div class='tip'>En radio, los números se dicen dígito por dígito: 25 → “two five”. 9 = “niner”.</div>"},
  {t:"order", title:"Order the Mayday message", items:["Mayday, Mayday, Mayday.","This is fishing vessel Esperanza.","Our position is two miles west of Valparaíso.","We have a fire in the engine room and need immediate assistance."]},
  {t:"mcq", title:"Which call?", items:[
    ["A crew member has fallen overboard in a storm.",["Mayday","Sécurité"],0],["Your engine has stopped, but the sea is calm.",["Mayday","Pan-Pan"],1],["You want to warn other ships about a floating container.",["Sécurité","Mayday"],0],["Spell 'BOW':",["Bravo Oscar Whiskey","Bob Oscar William","Bravo Orange Whiskey"],0]]},
  {t:"game", title:"Spell it! 📻", rules:["El profesor saca una palabra o nombre.","El estudiante elegido la deletrea con el alfabeto NATO sin errores.","Correcto en menos de 10 segundos = 1 punto."],
    cards:["IMV","PORT","CHILE","ANCHOR","your name","SHIP","VALPO","RADAR","SOS","CREW"]},
  {t:"speak", title:"Emergency radio simulation 📡", task:"En parejas: A es el barco en emergencia (tarjeta); B es la Guardia Costera y pide datos. Cambien roles.", min:10,
    steps:["Barco: llamada (Mayday / Pan-Pan), nombre (deletreado), posición, problema, ayuda requerida.","Guardia Costera: confirma, pide personas a bordo y da instrucciones."],
    frame:["Mayday, Mayday, Mayday. This is ___.","Our position is ___.","We have ___. We need ___.","How many persons on board?","Received. Assistance is coming. Put on your life jackets."]},
  {t:"exit", items:["¿Cuál es la diferencia entre Mayday y Pan-Pan?","Deletrea tu apellido con el alfabeto NATO.","Escribe un mensaje de Mayday de 4 líneas."]}
  ]},

{ title:"Port Processes: Passive with Modals", tema:"must be checked · can be loaded · should be stored · has been inspected", min:90,
  obj:"Describir normas y procesos del puerto usando la voz pasiva con modales y otros tiempos.",
  can:["Formar la pasiva con modales (must be + participle).","Usar la pasiva en Present Perfect (has been + participle).","Explicar normas de manipulación de carga."],
  slides:[
  {t:"warm", title:"Container journey 📦", intro:"Ordena el viaje de un contenedor:", items:[["1","The container is filled at the factory."],["2","It is transported to the port by truck."],["3","It is inspected by customs."],["4","It is loaded onto the ship by a crane."],["5","It is unloaded at the destination port."]]},
  {t:"tbl", title:"Passive with modals & perfect", head:["Structure","Example"], rows:[
    ["must be + participle","Dangerous goods <b>must be labelled</b>."],["can / can't be + participle","Containers <b>can be stacked</b> up to nine high."],["should be + participle","Chemicals <b>should be stored</b> in a ventilated area."],
    ["have / has been + participle","The cargo <b>has been inspected</b>."],["will be + participle","The ship <b>will be unloaded</b> tomorrow."]]},
  {t:"gap", title:"Complete with the passive", items:[
    ["All containers must ___ (check) before loading.","be checked"],["The documents have ___ (send) to customs.","been sent"],["Fragile goods should ___ (handle) with care.","be handled"],["The ship will ___ (repair) next week.","be repaired"]]},
  {t:"mcq", title:"Choose the correct form", items:[
    ["Hazardous cargo ___ separately.",["must store","must be stored","must stored"],1],["The containers ___ already.",["have been loaded","have loaded","has been load"],0],["Food ___ near chemicals.",["can't be kept","can't keep","can't be keep"],0]]},
  {t:"read", title:"Dangerous goods at the port", text:"Some products, like fuel, gas and chemicals, are classified as dangerous goods. They must be labelled with special signs and they must be declared before arriving at the port. They should be stored in a separate area, far from food products. All dangerous containers have to be inspected by trained staff, and any leak must be reported immediately. If these rules are not followed, serious accidents can be caused.",
    items:[["Give two examples of dangerous goods.","Fuel, gas, chemicals."],["Where should they be stored?","In a separate area, far from food."],["Who must inspect them?","Trained staff."],["What must be reported immediately?","Any leak."]]},
  {t:"game", title:"Port rules race 🏁", rules:["El profesor saca un objeto o carga.","Cada equipo escribe 2 normas con pasiva modal (must be / should be / can't be).","Normas lógicas y correctas = 1 punto cada una."],
    cards:["fresh fruit","chemicals","cars","live animals","frozen fish","explosives","electronics","copper"]},
  {t:"speak", title:"Port induction", task:"Eres supervisor/a: explica a un trabajador nuevo 5 normas del puerto o del taller usando la pasiva.", min:6,
    frame:["Helmets must be worn at all times.","Tools should be returned after use.","Containers can't be opened without permission.","Any accident must be reported to ___."]},
  {t:"exit", items:["Escribe 3 normas con must be / should be / can't be.","Escribe 1 oración con has been + participle.","Corrige: <i>The cargo must checked.</i>"]}
  ]},

{ title:"Writing an Incident Report", tema:"Past Simple / Continuous / Passive · estructura del informe · lenguaje objetivo", min:90,
  obj:"Redactar un informe de incidente claro y objetivo usando tiempos pasados y voz pasiva.",
  can:["Reconocer la estructura de un informe (who, what, when, where, why, action).","Usar Past Continuous para el contexto y Past Simple para los hechos.","Escribir de forma objetiva y precisa."],
  slides:[
  {t:"warm", title:"What is an incident? ⚠️", intro:"¿Qué incidentes pueden ocurrir en un taller o puerto?", items:[["A worker slipped on oil.","injury"],["A container fell from a crane.","damage"],["A small fire started in the kitchen.","fire"],["A machine stopped working.","equipment failure"]]},
  {t:"tbl", title:"Incident report structure", head:["Section","Content","Language"], rows:[
    ["Date / time / place","When and where","On 12 May at 14:30, in the engine room…"],["Description","What was happening + what happened","A mechanic <b>was repairing</b> a pump when a pipe <b>broke</b>."],
    ["Injuries / damage","Consequences","One worker <b>was injured</b>. The pump <b>was damaged</b>."],["Action taken","What was done","First aid <b>was given</b>. The area <b>was closed</b>."],["Recommendations","How to prevent it","Pipes <b>should be checked</b> every month."]]},
  {t:"exp", title:"Objective language", html:"<div class='cols'><div class='rule'><b>❌ Subjetivo</b><br>It was a terrible accident!!! Pedro is very careless.</div><div class='rule'><b>✅ Objetivo</b><br>An accident occurred at 10:15. The worker was not wearing gloves.</div></div><div class='ex'>Usa hechos, horas y datos. Evita opiniones, exageraciones y emoción. La pasiva ayuda a ser objetivo: <i>The alarm <b>was activated</b>.</i></div>"},
  {t:"mcq", title:"Objective or subjective?", items:[
    ["",["The crane operator was so stupid.","The load was not secured correctly."],1],["",["At 08:40, smoke was detected in the kitchen.","Suddenly there was a horrible, scary fire!!!"],0],["Which tense for background?",["Past Simple","Past Continuous"],1]]},
  {t:"gap", title:"Complete the report", items:[
    ["At 14:30, the technician ___ (check) the generator when it exploded.","was checking"],["The fire ___ (put out) by the crew in five minutes.","was put out"],["Nobody ___ (injure).","was injured"],["The generator should ___ (inspect) every week.","be inspected"]]},
  {t:"read", title:"Model incident report", text:"<b>INCIDENT REPORT</b> — Date: 3 June · Time: 10:15 · Place: Dock 4, Port of Valparaíso. <b>Description:</b> A crane operator was moving a container when a cable broke. The container fell onto the dock. <b>Injuries / damage:</b> Nobody was injured. The container and part of the dock were damaged. <b>Action taken:</b> The area was closed and the supervisor was informed. <b>Recommendation:</b> Cables should be inspected weekly.",
    items:[["Where did the incident happen?","Dock 4, Port of Valparaíso."],["What was the operator doing?","Moving a container."],["Was anyone injured?","No."],["What is the recommendation?","Cables should be inspected weekly."]]},
  {t:"speak", title:"Witness interview 🕵️", task:"A fue testigo de un incidente (tarjeta del profesor); B es el supervisor y hace preguntas para el informe.", min:7,
    frame:["What time did it happen?","Where were you?","What was the worker doing?","Was anybody injured?","What did you do next?"]},
  {t:"exit", items:["Nombra las 5 secciones de un informe de incidente.","Reescribe en forma objetiva: <i>It was a horrible accident!</i>","Escribe una recomendación con should be + participio."]}
  ]}
]},

/* ───────────── UNIDAD 3 ───────────── */
{ n:3, icon:"🗞️", title:"Communication & Media", desc:"Reported questions y órdenes, preguntas indirectas, publicidad, ensayo de opinión y debate",
lessons:[

{ title:"Reported Questions & Commands", tema:"asked if / whether · asked where… · told / asked me to…", min:90,
  obj:"Reportar preguntas, órdenes y peticiones de otras personas usando estilo indirecto.",
  can:["Reportar preguntas Yes/No con if / whether.","Reportar preguntas WH- sin auxiliar.","Reportar órdenes con told / asked + person + to."],
  slides:[
  {t:"warm", title:"What did the interviewer ask?", intro:"Recuerda tu última entrevista o conversación con un adulto. ¿Qué te preguntaron?", items:[["“Where do you study?”","She asked me where I studied."],["“Are you available on Saturdays?”","He asked if I was available on Saturdays."],["“Send me your CV.”","She told me to send her my CV."]]},
  {t:"tbl", title:"Reported questions", head:["Direct question","Reported question"], rows:[
    ["“<b>Are you</b> tired?”","He asked me <b>if / whether I was</b> tired."],["“<b>Do you</b> speak English?”","She asked <b>if I spoke</b> English."],["“Where <b>do you</b> live?”","He asked me <b>where I lived</b>."],["“What time <b>will</b> the ship arrive?”","She asked <b>what time the ship would</b> arrive."]],
    note:"En la pregunta reportada el orden es <b>afirmativo</b> (sujeto + verbo), sin do / does / did y sin signo de interrogación."},
  {t:"tbl", title:"Reported commands & requests", head:["Direct","Reported"], rows:[
    ["“Wear your helmet.”","The supervisor <b>told us to wear</b> our helmets."],["“Don't touch the cables.”","He <b>told me not to touch</b> the cables."],["“Could you help me, please?”","She <b>asked me to help</b> her."]]},
  {t:"gap", title:"Report the questions and commands", items:[
    ["“Do you like your job?” → She asked me ___ I liked my job.","if|whether"],["“Where is the port?” → He asked me where the port ___.","was"],["“Close the door.” → The teacher told me ___ close the door.","to"],["“Don't be late.” → My boss told me ___ to be late.","not"]]},
  {t:"mcq", title:"Correct or incorrect?", items:[
    ["",["She asked me where did I live.","She asked me where I lived."],1],["",["He asked if I was ready.","He asked was I ready?"],0],["",["They told us don't run.","They told us not to run."],1]]},
  {t:"game", title:"Job interview report 💼", rules:["El profesor lee una pregunta u orden de un entrevistador.","El primer equipo en reportarla correctamente gana 1 punto.","Bonus si cambian también pronombres y tiempos."],
    cards:["“Why do you want this job?”","“Can you work on weekends?”","“Have you ever worked in a team?”","“Bring your ID tomorrow.”","“Don't forget your certificate.”","“What are your strengths?”","“Will you be available in March?”"]},
  {t:"speak", title:"Survey & report", task:"Haz 4 preguntas a dos compañeros y luego reporta al curso lo que preguntaste y respondieron.", min:7,
    frame:["I asked Camila if she ___.","I asked Pedro where / what / why ___.","She said that ___.","The teacher told us to ___."]},
  {t:"exit", items:["Reporta: “Are you coming to the party?”","Reporta: “What time does the bus leave?”","Reporta: “Don't use your phone.”"]}
  ]},

{ title:"Indirect Questions: Being Polite", tema:"Could you tell me…? · Do you know…? · I was wondering if…", min:90,
  obj:"Formular preguntas indirectas corteses en contextos formales, como atención de público, trámites y entrevistas.",
  can:["Transformar preguntas directas en indirectas.","Usar el orden afirmativo después de la frase introductoria.","Usar if / whether en preguntas Yes/No indirectas."],
  slides:[
  {t:"warm", title:"Polite or direct?", intro:"¿Cuál suena más educada?", items:[["Where is the bathroom? / Could you tell me where the bathroom is?","The second (indirect) is more polite."],["What time does it open? / Do you know what time it opens?","The second."]]},
  {t:"tbl", title:"Indirect questions", head:["Direct","Indirect"], rows:[
    ["Where <b>is</b> the office?","Could you tell me where the office <b>is</b>?"],["What time <b>does</b> the ship <b>leave</b>?","Do you know what time the ship <b>leaves</b>?"],["How much <b>is</b> it?","Can you tell me how much it <b>is</b>?"],
    ["<b>Is</b> there a bank near here?","Do you know <b>if</b> there <b>is</b> a bank near here?"],["<b>Did</b> he call?","I was wondering <b>if</b> he <b>called</b>."]],
    note:"Frases introductorias: <b>Could you tell me…? · Do you know…? · I'd like to know… · I was wondering if…</b>"},
  {t:"order", title:"Make indirect questions", items:["Could you tell me where the station is?","Do you know what time the museum opens?","I was wondering if you could help me.","Can you tell me how much this costs?"]},
  {t:"mcq", title:"Choose the correct indirect question", items:[
    ["",["Could you tell me where is the bank?","Could you tell me where the bank is?"],1],["",["Do you know what time the bus leaves?","Do you know what time does the bus leave?"],0],["",["I was wondering if you can help me.","I was wondering could you help me."],0]]},
  {t:"gap", title:"Complete", items:[
    ["Do you know ___ the shop is open on Sundays?","if|whether"],["Could you tell me where the customs office ___?","is"],["I'd like to know how much the course ___.","costs"],["Do you know when the ferry ___?","leaves|arrives"]]},
  {t:"speak", title:"At the information desk ℹ️", task:"A trabaja en una oficina de informaciones (puerto, municipalidad o universidad). B hace 5 preguntas indirectas. Cambien roles.", min:8,
    frame:["Excuse me, could you tell me ___?","Do you know if ___?","I was wondering if ___.","Of course. / I'm afraid I don't know."]},
  {t:"game", title:"Make it polite! 🎩", rules:["El profesor lee una pregunta directa (a veces brusca).","El primer equipo en convertirla en pregunta indirecta correcta gana 1 punto."],
    cards:["Where's the toilet?","How much is it?","When does the class start?","Is the director here?","Why is the ship late?","Did you get my email?","What's your name?","Can I park here?"]},
  {t:"exit", items:["Convierte en indirecta: <i>Where is the port?</i>","Convierte en indirecta: <i>Does the bus stop here?</i>","¿Por qué no usamos do/does en una pregunta indirecta?"]}
  ]},

{ title:"Advertising & Persuasive Language", tema:"Adjetivos persuasivos · comparativos y superlativos · imperativos · slogans", min:90,
  obj:"Analizar y crear anuncios publicitarios identificando técnicas y lenguaje persuasivo.",
  can:["Identificar técnicas publicitarias.","Usar adjetivos persuasivos, comparativos y superlativos.","Crear un anuncio para un producto o servicio."],
  slides:[
  {t:"warm", title:"Famous slogans 📺", intro:"¿Qué marca es? ¿Por qué funciona?", items:[["Just do it.","Nike — short imperative, motivational"],["I'm lovin' it.","McDonald's — emotion, informal"],["Think different.","Apple — imperative, makes you feel special"]]},
  {t:"tbl", title:"Advertising techniques", head:["Technique","Example"], rows:[
    ["Superlatives","The <b>best</b> pizza in Valparaíso!"],["Comparatives","<b>Faster</b> and <b>cheaper</b> than ever."],["Imperatives","<b>Try</b> it today! <b>Don't miss</b> it!"],
    ["Persuasive adjectives","amazing · unique · delicious · eco-friendly · affordable · reliable"],["Rhetorical questions","<b>Tired of</b> slow internet?"],["Limited offer","Only this week! · 50% off!"]]},
  {t:"mcq", title:"Identify the technique", items:[
    ["“Feeling tired? Drink Energix!”",["rhetorical question","superlative"],0],["“The most reliable boats in Chile.”",["superlative","imperative"],0],["“Buy now and get a free cap!”",["comparative","imperative"],1],["“Cleaner, greener, better.”",["comparatives","limited offer"],0]]},
  {t:"read", title:"Analyse the ad", text:"🌊 <b>SeaKayak Valpo</b> — Tired of the city noise? Discover Valparaíso from the sea! Our kayaks are safer, lighter and more comfortable than ever. Enjoy the most amazing views of the hills and meet our friendly sea lions. Professional guides · Life jackets included · Eco-friendly tours. Book today and get 20% off — only this month!",
    items:[["Find a rhetorical question.","Tired of the city noise?"],["Find 3 comparatives.","safer, lighter, more comfortable"],["Find a superlative.","the most amazing views"],["What's the limited offer?","20% off, only this month."]]},
  {t:"game", title:"Sell it! 💰", rules:["Cada equipo saca un objeto “aburrido”.","En 3 minutos crean un anuncio de 20 segundos con 3 técnicas.","El curso vota a qué producto compraría."],
    cards:["a pencil","a bucket","a school chair","a rock","an old phone charger","a sock","a paper clip","a spoon"]},
  {t:"speak", title:"Advert pitch 🎥", task:"En grupos, creen y presenten un anuncio de 30 s para un servicio relacionado con su especialidad.", min:10,
    frame:["Are you tired of ___?","Our ___ is the best / the most ___ in Chile.","It's faster / cheaper / more ___ than ___.","Call us today! Only this week ___."]},
  {t:"exit", items:["Escribe un slogan con un imperativo.","Nombra 3 técnicas publicitarias con un ejemplo.","¿Por qué los anuncios usan preguntas retóricas?"]}
  ]},

{ title:"The Opinion Essay", tema:"Estructura · conectores (firstly, moreover, however, in conclusion) · argumentos", min:90,
  obj:"Planificar y redactar un ensayo de opinión estructurado con argumentos, ejemplos y conectores.",
  can:["Reconocer la estructura de un ensayo de opinión.","Usar conectores de adición, contraste y conclusión.","Planificar un ensayo con argumentos y ejemplos."],
  slides:[
  {t:"warm", title:"Agree or disagree?", intro:"Levántate si estás de acuerdo:", items:["Social media does more harm than good.","School should start at 9 a.m.","All students should learn to swim.","Tourism is good for Valparaíso."]},
  {t:"tbl", title:"Essay structure", head:["Paragraph","Content","Language"], rows:[
    ["1. Introduction","Topic + your opinion","Nowadays, … · In my opinion, … · I strongly believe that …"],["2. Argument 1","Reason + example","Firstly, … · For example, …"],
    ["3. Argument 2","Reason + example","Moreover, … · In addition, … · For instance, …"],["4. Opposing view","Other opinion + your answer","However, some people think … · On the other hand, …"],["5. Conclusion","Summary + final opinion","In conclusion, … · To sum up, … · For these reasons, …"]]},
  {t:"exp", title:"Linkers 🔗", html:"<div class='cols'><div class='rule'><b>Addition</b><br>Moreover · In addition · Furthermore · Also</div><div class='rule'><b>Contrast</b><br>However · On the other hand · Although · Despite + noun</div></div><div class='cols'><div class='rule'><b>Examples</b><br>For example · For instance · such as</div><div class='rule'><b>Conclusion</b><br>In conclusion · To sum up · All in all</div></div><div class='tip'>⚠️ <b>However</b> va al inicio de oración con coma: <i>However, …</i>. <b>Although</b> une dos ideas: <i>Although it's expensive, it's useful.</i></div>"},
  {t:"mcq", title:"Choose the linker", items:[
    ["Tourism creates jobs. ___, it brings money to the city.",["However","Moreover"],1],["Tourism creates jobs. ___, it can cause pollution.",["However","In addition"],0],["___ it was raining, we went to the beach.",["Although","Despite"],0],["___, I believe tourism is positive for Valparaíso.",["For example","In conclusion"],1]]},
  {t:"read", title:"Model essay (extract)", text:"<b>Should students wear uniforms?</b> Nowadays, many schools in Chile require uniforms. In my opinion, uniforms are a good idea. Firstly, they reduce differences between students. For example, nobody feels bad for not having expensive clothes. Moreover, they save time in the morning. However, some people think uniforms limit students' personality. Although this is partly true, students can express themselves in other ways. In conclusion, I believe the advantages are more important.",
    items:[["What is the writer's opinion?","Uniforms are a good idea."],["What is the first argument?","They reduce differences between students."],["What is the opposing view?","Uniforms limit students' personality."],["Find 4 linkers.","Firstly, For example, Moreover, However, Although, In conclusion"]]},
  {t:"speak", title:"Plan in pairs 🗂️", task:"Elijan un tema y planifiquen el ensayo: opinión, 2 argumentos con ejemplos, un contraargumento y conclusión.", min:10,
    steps:["Topic A: Should phones be banned in schools?","Topic B: Is technology making us less social?","Topic C: Should all ports be automated?"],
    frame:["In my opinion, ___.","Firstly, ___. For example, ___.","Moreover, ___.","However, some people think ___. Although ___, ___.","In conclusion, ___."]},
  {t:"exit", items:["Nombra las 5 partes de un ensayo de opinión.","Escribe 2 conectores de adición, 2 de contraste y 1 de conclusión.","Escribe tu oración de opinión para el tema elegido."], home:"Escribe el ensayo completo (180–220 palabras)."}
  ]},

{ title:"Debate Skills", tema:"Dar y defender opiniones · interrumpir con cortesía · suavizar (hedging) · rebatir", min:90,
  obj:"Participar en un debate formal defendiendo una postura con argumentos y respondiendo con respeto a la contraparte.",
  can:["Usar expresiones para opinar, acordar y discrepar en registro formal.","Interrumpir y pedir la palabra con cortesía.","Rebatir argumentos con evidencia."],
  slides:[
  {t:"warm", title:"Quick opinions 🎙️", intro:"30 segundos para opinar con una razón:", items:["Cats are better than dogs.","Summer is the best season.","Video games are a waste of time.","Valparaíso is better than Viña del Mar."]},
  {t:"tbl", title:"Debate language", head:["Function","Expressions"], rows:[
    ["Giving opinion","I firmly believe that… · From my point of view, … · It seems to me that…"],["Agreeing","That's a good point. · I completely agree. · Exactly!"],
    ["Disagreeing politely","I see what you mean, but… · I'm not sure I agree. · With respect, I think…"],["Interrupting","Sorry to interrupt, but… · Can I add something? · May I say something?"],
    ["Hedging (suavizar)","It might be true that… · In some cases, … · Generally speaking, …"],["Rebutting","That may be true, but the evidence shows… · On the contrary, …"]]},
  {t:"mcq", title:"Polite or rude?", items:[
    ["",["You're totally wrong!","I see what you mean, but I disagree."],1],["",["Sorry to interrupt, but can I add something?","Shut up, it's my turn!"],0],["Which is a hedge?",["It's always bad.","In some cases, it can be harmful."],1]]},
  {t:"exp", title:"Debate format 🏛️", html:"<div class='rule'><b>Teams:</b> A (for) · B (against) · moderator · timekeeper · judges</div><ol><li>Opening statements (1 min each team)</li><li>Arguments (2 speakers × 1 min each team)</li><li>Rebuttal (1 min each team)</li><li>Closing statements (30 s each team)</li><li>Judges' decision: arguments, evidence, language, respect</li></ol><div class='tip'>Gana el equipo que argumenta mejor, no el que habla más fuerte.</div>"},
  {t:"game", title:"Rapid rebuttal ⚡", rules:["El profesor lee un argumento.","El primer equipo en rebatirlo con una expresión formal y una razón gana 1 punto."],
    cards:["Homework is useless.","Robots will take all our jobs.","Tourism ruins cities.","Teenagers don't read anymore.","English is not important in Chile.","Fast food should be banned."]},
  {t:"speak", title:"Formal debate", task:"Debate por equipos: “Ports should be fully automated.” Sigan el formato y usen el lenguaje de la tabla.", min:20,
    steps:["Equipo A: a favor · Equipo B: en contra.","5 minutos de preparación de argumentos.","Debate con moderador y cronómetro.","Los jueces deciden con la rúbrica."],
    frame:["I firmly believe that ___.","That may be true, but ___.","Sorry to interrupt, but ___.","In conclusion, our team believes ___."]},
  {t:"exit", items:["Escribe 2 expresiones para discrepar con cortesía.","Escribe 1 forma de interrumpir educadamente.","¿Qué aprendiste del debate de hoy?"]}
  ]}
]},

/* ───────────── UNIDAD 4 ───────────── */
{ n:4, icon:"🎓", title:"My Future: Life After School", desc:"Futuro continuo y perfecto, postulación laboral, finanzas personales, emprendimiento y presentaciones",
lessons:[

{ title:"Future Continuous & Future Perfect", tema:"will be + -ing · will have + participle · by + time", min:90,
  obj:"Hablar de planes de vida y metas futuras usando el futuro continuo y el futuro perfecto.",
  can:["Usar will be + -ing para acciones en progreso en el futuro.","Usar will have + participle para acciones completadas antes de un momento futuro.","Describir mi vida en 5 y 10 años."],
  slides:[
  {t:"warm", title:"Your future timeline 🗓️", intro:"¿Qué estarás haciendo…?", items:["…this time next year?","…in 2030?","…when you are 30?","…on your next birthday?"]},
  {t:"tbl", title:"Future continuous vs Future perfect", head:["Tense","Form","Use & example"], rows:[
    ["Future continuous","will be + -ing","Acción en progreso en un momento futuro: This time next year I'<b>ll be doing</b> my internship."],
    ["Future perfect","will have + participle","Acción terminada <b>antes de</b> un momento futuro: By 2030 I'<b>ll have finished</b> university."],["Negative","won't be -ing / won't have + part.","By June I <b>won't have saved</b> enough money."]],
    note:"<b>by</b> + tiempo = a más tardar / antes de: <i>by 2030, by the end of the year, by the time I'm 25</i>."},
  {t:"mcq", title:"Choose the correct form", items:[
    ["At 10 a.m. tomorrow I ___ an exam.",["will be taking","will have taken"],0],["By 2028 she ___ her degree.",["will be finishing","will have finished"],1],["Don't call at 8; we ___ dinner.",["will be having","will have had"],0],["By the time you arrive, the ship ___.",["will be leaving","will have left"],1]]},
  {t:"gap", title:"Complete", items:[
    ["This time next week, I ___ (sail) to Juan Fernández.","will be sailing|'ll be sailing"],["By December, we ___ (finish) the project.","will have finished|'ll have finished"],["In 2035 I ___ (work) as an engineer.","will be working|'ll be working"],["By the age of 30, I ___ (buy) a house.","will have bought|'ll have bought"]]},
  {t:"speak", title:"Life plan interview", task:"Entrevista a tu compañero sobre su plan de vida (5 y 10 años) y presenta un resumen.", min:7,
    frame:["What will you be doing in five years?","What will you have achieved by the time you're 30?","In 2030, she'll be ___.","By 2035, he'll have ___."]},
  {t:"game", title:"Time capsule 💊", rules:["Cada equipo saca una fecha futura.","Escriben 2 oraciones: una con future continuous y una con future perfect para la vida del curso.","Las mejores se leen en voz alta y se guardan en la “cápsula”."],
    cards:["next December","in 2030","in 2035","on your 25th birthday","in 10 years","at the end of 4° Medio","in 2040","next summer"]},
  {t:"exit", items:["Escribe qué estarás haciendo el próximo año a esta hora.","Escribe 2 metas con By 2030, I will have…","Diferencia entre <i>will be doing</i> y <i>will have done</i>."]}
  ]},

{ title:"Applying for a Job (B1)", tema:"Present Perfect Continuous en experiencia · email formal · perfil profesional", min:90,
  obj:"Redactar una postulación laboral formal (email y perfil profesional) destacando experiencia y competencias.",
  can:["Describir experiencia con I have been working / studying…","Escribir un perfil profesional breve.","Redactar un email formal de postulación con estructura y registro adecuados."],
  slides:[
  {t:"warm", title:"Read the job ad 📌", intro:"¿Qué requisitos pide el aviso?", items:[["“Port Operations Assistant — Valparaíso”","the position"],["“Technical degree or final-year student”","education"],["“Basic English (B1), Excel, teamwork”","skills"],["“Send CV and cover letter by 30 November”","how and when to apply"]]},
  {t:"tbl", title:"Describing experience", head:["Purpose","Language"], rows:[
    ["Continuing experience","I <b>have been studying</b> Port Operations since 2023."],["Completed achievements","I <b>have completed</b> a 400-hour internship."],["Skills","I am proficient in Excel. · I have a good command of English (B1)."],
    ["Soft skills","I work well under pressure. · I am a reliable team player."],["Motivation","I am particularly interested in this position because…"]]},
  {t:"exp", title:"Professional profile (LinkedIn-style)", html:"<div class='ex'><b>Example:</b><br>Final-year student of Port Operations at Instituto Marítimo de Valparaíso. I have been working part-time in logistics for one year and I have completed a professional internship at a shipping company. Skilled in Excel, inventory control and safety procedures. Reliable, punctual and eager to learn. English: B1.</div><div class='tip'>3–5 líneas · sin “I” en algunas frases · palabras clave del rubro · nivel de inglés.</div>"},
  {t:"gap", title:"Complete the cover email", items:[
    ["I am writing to apply ___ the position of Port Operations Assistant.","for"],["I have ___ studying logistics since 2023.","been"],["I am particularly interested ___ this position.","in"],["I look forward ___ hearing from you.","to"]]},
  {t:"mcq", title:"Choose the most professional option", items:[
    ["",["I'm super good at Excel lol.","I am proficient in Excel."],1],["",["I have been working in a warehouse since March.","I work in a warehouse since March."],0],["",["Please find attached my CV.","Here is my CV, check it out."],0]]},
  {t:"speak", title:"Elevator pitch 🛗", task:"Preséntate profesionalmente en 30–45 segundos (estudios, experiencia, habilidades, objetivo). Practica 3 veces con distintos compañeros.", min:8,
    frame:["Hi, I'm ___. I'm a final-year student of ___ at IMV.","I have been ___ since ___.","I'm good at ___ and I'm ___.","I'm looking for ___."]},
  {t:"exit", items:["Escribe tu perfil profesional en 3 líneas.","Escribe 1 oración con Present Perfect Continuous sobre tu experiencia.","Escribe la frase de cierre de un email formal."], home:"Envía (o escribe) tu email de postulación completo a un aviso real o ficticio."}
  ]},

{ title:"Personal Finance: My First Salary", tema:"Vocabulario financiero · presupuesto · consejos con should / could · condicionales", min:90,
  obj:"Planificar un presupuesto personal y discutir decisiones financieras usando vocabulario de dinero y condicionales.",
  can:["Comprender vocabulario de finanzas (salary, budget, save, debt…).","Elaborar un presupuesto mensual simple.","Dar consejos financieros con should / could / If I were you."],
  slides:[
  {t:"warm", title:"What would you do with your first salary? 💵", intro:"Imagina que ganas $600.000 al mes:", items:["How much would you save?","What would you spend it on first?","Would you help your family?","Would you buy something on credit?"]},
  {t:"tbl", title:"Money vocabulary", head:["Word","Meaning","Example"], rows:[
    ["salary / wage","sueldo","My first salary was $550,000."],["budget","presupuesto","Make a monthly budget."],["save / savings","ahorrar / ahorros","I save 10% every month."],
    ["spend on","gastar en","I spend a lot on transport."],["afford","poder pagar","I can't afford a car yet."],["debt / loan","deuda / préstamo","Avoid debts with high interest."],["income / expenses","ingresos / gastos","My expenses are higher than my income."]]},
  {t:"read", title:"Diego's first budget", text:"Diego has just started his first job at a shipping company. He earns $620,000 a month. He gives $150,000 to his mum for rent and food. He spends about $60,000 on transport and $40,000 on his phone and internet. He wants to buy a motorbike, so he saves $150,000 every month. If he keeps saving, he'll be able to afford it in a year. However, he sometimes spends too much on fast food and clothes.",
    items:[["How much does Diego earn?","$620,000 a month."],["How much does he save?","$150,000 a month."],["Why does he save?","To buy a motorbike."],["What's his problem?","He spends too much on fast food and clothes."]]},
  {t:"mcq", title:"Choose the best option", items:[
    ["I can't ___ a new phone right now.",["afford","save","spend"],0],["You should make a ___ to control your expenses.",["debt","budget","loan"],1],["How much do you spend ___ transport?",["in","on","for"],1],["If I were you, I ___ a credit card with high interest.",["wouldn't get","won't get"],0]]},
  {t:"gap", title:"Complete", items:[
    ["I ___ 20% of my salary every month. (ahorrar)","save"],["My ___ are higher than my income. (gastos)","expenses"],["She took out a ___ to buy a car. (préstamo)","loan"],["If I saved more, I ___ travel in summer.","could|would"]]},
  {t:"speak", title:"Make a budget 📊", task:"En parejas, con un sueldo de $600.000, armen un presupuesto mensual y justifíquenlo ante otra pareja.", min:10,
    frame:["We'll spend ___ on rent / food / transport.","We'll save ___ because ___.","We can't afford ___ yet.","If we spent less on ___, we could ___."]},
  {t:"exit", items:["Escribe 5 palabras de finanzas con su significado.","Da 2 consejos financieros a un joven con su primer sueldo.","Completa: If I earned a million pesos, I ___."]}
  ]},

{ title:"Entrepreneurship: Pitching an Idea", tema:"Problema · solución · público objetivo · ventajas · presentación de negocio", min:90,
  obj:"Presentar una idea de emprendimiento de forma clara y persuasiva describiendo problema, solución y ventajas.",
  can:["Describir un problema y una solución de negocio.","Usar lenguaje para presentar ventajas (unlike, cheaper than, it allows you to…).","Presentar un pitch de 1 minuto."],
  slides:[
  {t:"warm", title:"Chilean entrepreneurs 🇨🇱", intro:"¿Conoces algún emprendimiento chileno exitoso? ¿Qué problema resolvió?", items:[["NotCo","Plant-based food that tastes like animal products."],["Cornershop","Online grocery delivery."],["A local business in Valparaíso","Your example!"]]},
  {t:"tbl", title:"Pitch structure", head:["Step","Language"], rows:[
    ["1. Hook","Have you ever…? · Imagine…"],["2. Problem","Many people / companies struggle with …"],["3. Solution","Our product / service is … It allows you to … · It helps you …"],
    ["4. Target customers","It's designed for … · Our customers are …"],["5. Advantages","Unlike other products, … · It's cheaper / faster / more eco-friendly than …"],["6. Call to action","Join us! · We're looking for investors / partners."]]},
  {t:"read", title:"Model pitch: Boat-Fix App", text:"Have you ever had a problem with your boat's engine in the middle of the sea? Many small fishermen in Chile lose days of work because they can't find a mechanic quickly. Our solution is Boat-Fix, an app that connects fishermen with certified marine mechanics near their port. It allows you to book a repair in minutes and compare prices. Unlike other apps, it works offline and it's designed for small coastal communities. We're looking for partners to start in Valparaíso!",
    items:[["What problem does Boat-Fix solve?","Fishermen can't find a mechanic quickly."],["What does the app allow you to do?","Book a repair in minutes and compare prices."],["What makes it different?","It works offline and is designed for small coastal communities."],["What's the call to action?","They're looking for partners."]]},
  {t:"mcq", title:"Choose the best phrase", items:[
    ["To present a problem:",["Many fishermen struggle with…","Join us now!"],0],["To compare with competitors:",["Unlike other apps, ours…","Have you ever…?"],0],["To end the pitch:",["Our customers are…","We're looking for investors. Thank you!"],1]]},
  {t:"game", title:"Shark Tank 🦈", rules:["Cada equipo saca una tarjeta de problema.","En 5 minutos inventan un producto/servicio que lo resuelva.","Presentan en 1 minuto; los “inversionistas” (curso) reparten 1.000 “IMV coins”."],
    cards:["Students forget their homework.","Tourists get lost in Valparaíso's hills.","Too much plastic on the beach.","Fishermen can't sell fish online.","Old people feel lonely.","Long queues in the school cafeteria.","Bikes are stolen in the city.","Nobody knows where to recycle."]},
  {t:"speak", title:"Your pitch 🎤", task:"En grupos, preparen y presenten un pitch de 1 minuto para una idea relacionada con su especialidad.", min:15,
    frame:["Have you ever ___?","Many people struggle with ___.","Our solution is ___. It allows you to ___.","Unlike ___, our product ___.","Join us! Thank you."]},
  {t:"exit", items:["Escribe el problema y la solución de tu idea en 2 oraciones.","Escribe una ventaja con <i>Unlike…</i>","¿Qué pitch del curso te convenció más y por qué?"]}
  ]},

{ title:"Giving a Presentation", tema:"Signposting · estructura · lenguaje corporal · preguntas del público", min:90,
  obj:"Realizar una presentación oral estructurada en inglés usando lenguaje de señalización y respondiendo preguntas.",
  can:["Usar expresiones para iniciar, avanzar y cerrar una presentación.","Referirse a apoyos visuales (As you can see…).","Responder preguntas del público con cortesía."],
  slides:[
  {t:"warm", title:"What makes a good presentation? 🎯", intro:"Elige las 3 más importantes:", items:["Eye contact","Reading from the slides","Clear structure","Speaking very fast","Good examples","Short, visual slides"], note:"Respuesta sugerida: eye contact, clear structure, good examples, short visual slides."},
  {t:"tbl", title:"Signposting language", head:["Stage","Language"], rows:[
    ["Opening","Good morning, everyone. Today I'm going to talk about … · My presentation is divided into three parts."],["Moving on","Let's move on to … · Now I'd like to talk about … · Next, …"],
    ["Visuals","As you can see in this chart, … · This picture shows …"],["Examples","For example, … · Let me give you an example."],["Closing","To sum up, … · In conclusion, … · Thank you for your attention."],["Questions","Does anyone have any questions? · That's a good question. · I'm not sure, but I'll find out."]]},
  {t:"order", title:"Order the presentation", items:["Good morning everyone, today I'm going to talk about my internship.","First, I'll describe the company.","Let's move on to my main tasks.","To sum up, it was a great experience."]},
  {t:"mcq", title:"Choose the right phrase", items:[
    ["To introduce a chart:",["As you can see in this chart,…","Thank you for listening."],0],["To change topic:",["Let's move on to…","Does anyone have questions?"],0],["When you don't know the answer:",["I don't know. Next.","That's a good question. I'm not sure, but I'll find out."],1]]},
  {t:"exp", title:"Body language & voice 🗣️", html:"<div class='cols'><div class='rule'>✅ Mira al público · sonríe · párate derecho · usa las manos · haz pausas</div><div class='rule'>❌ Leer la diapositiva · dar la espalda · hablar muy rápido · moverse de forma nerviosa</div></div><div class='ex'><b>Rule of 6:</b> máximo 6 líneas por diapositiva y 6 palabras por línea. ¡Las diapositivas apoyan, tú presentas!</div>"},
  {t:"speak", title:"Final presentations 🎓", task:"Presenta (3–4 min) un tema: tu práctica, tu emprendimiento, tu campaña o tu plan de vida. El curso hace al menos 1 pregunta.", min:25,
    steps:["Introducción con saludo y estructura.","2–3 partes con signposting y un apoyo visual.","Cierre y ronda de preguntas.","Coevaluación con la rúbrica: estructura, lenguaje, pronunciación, contacto visual."],
    frame:["Today I'm going to talk about ___.","Let's move on to ___.","As you can see, ___.","To sum up, ___. Any questions?"]},
  {t:"exit", items:["Escribe 2 frases para abrir, 2 para avanzar y 2 para cerrar una presentación.","¿Qué hiciste bien en tu presentación? ¿Qué mejorarías?","Escribe una pregunta que hiciste a un compañero."]}
  ]}
]}
]};
