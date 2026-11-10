/* =========================================================
   3° MEDIO (A2+) — Presentaciones por clase
   ========================================================= */
window.CLASES = window.CLASES || {};
CLASES["3m"] = {
label: "3° Medio", color: "#5a3a8a",
units: [

/* ───────────── UNIDAD 1 ───────────── */
{ n:1, icon:"💼", title:"The World of Work", desc:"Empleos y responsabilidades, obligación, Present Perfect, CV e entrevista de trabajo",
lessons:[

{ title:"Jobs & Responsibilities", tema:"Ocupaciones del mundo marítimo y portuario · Present Simple vs Continuous (repaso)", min:90,
  obj:"Describir empleos y sus responsabilidades usando Present Simple para rutinas y Present Continuous para tareas actuales.",
  can:["Nombrar 12 ocupaciones del mundo marítimo y portuario.","Explicar qué hace una persona en su trabajo.","Contrastar lo que hace siempre con lo que está haciendo ahora."],
  slides:[
  {t:"warm", title:"Guess the job!", intro:"El profesor lee una pista. ¿Qué trabajo es?", items:[["I drive a crane and move containers.","crane operator"],["I command the ship and make the final decisions.","captain"],["I repair the engines in the engine room.","marine engineer"],["I check documents of ships and cargo.","customs officer"],["I cook for the crew on the ship.","ship's cook"]]},
  {t:"tbl", title:"Talking about jobs", head:["Question","Answer"], rows:[
    ["What do you do? / What's your job?","I'm a deck officer. I work for a shipping company."],["Where do you work?","I work at the port of San Antonio / on a fishing boat."],
    ["What are your responsibilities?","I'm responsible for safety. I check the equipment and I train the crew."],["What are you working on at the moment?","At the moment I'm repairing a pump."]],
    note:"⚠️ <b>What do you do?</b> = ¿a qué te dedicas? (no ¿qué estás haciendo?). <b>I'm responsible for + -ing / noun</b>: I'm responsible for loading the cargo."},
  {t:"mcq", title:"Simple or Continuous?", items:[
    ["The pilot usually ___ ships into the port.",["guides","is guiding"],0],["Look! The crane operator ___ a container right now.",["lifts","is lifting"],1],
    ["Engineers ___ the engines every week.",["check","are checking"],0],["This month I ___ my internship at the port.",["do","am doing"],1],["A customs officer ___ documents.",["inspects","is inspecting"],0]]},
  {t:"match", title:"Job → Responsibility", pairs:[["deck officer","navigates and keeps watch on the bridge"],["marine engineer","maintains the engines and machines"],["port operator","organises loading and unloading"],["logistics assistant","controls stock and shipments"],["fisherman","catches and sells fish"],["electrician","installs and repairs electrical systems"]]},
  {t:"game", title:"20-second job talk ⏱️", rules:["Un estudiante saca una tarjeta (trabajo).","Habla 20 segundos sin decir el nombre del trabajo: lugar, tareas, herramientas.","Su equipo adivina. Respuesta correcta = 1 punto."],
    cards:["captain","cook","nurse","electrician","mechanic","customs officer","tour guide","teacher","firefighter","crane operator","logistics assistant","diver"]},
  {t:"speak", title:"Job interview: role cards", task:"En parejas: A es periodista; B tiene un trabajo marítimo (elige una tarjeta). Luego cambien.", min:6,
    frame:["What do you do?","Where do you work?","What are your main responsibilities?","What are you working on these days?","Do you like your job? Why?"]},
  {t:"exit", items:["Escribe 3 trabajos marítimos y una responsabilidad de cada uno.","Escribe una oración con <i>usually</i> y otra con <i>at the moment</i> sobre un trabajo.","¿Qué significa <i>What do you do?</i>"]}
  ]},

{ title:"Obligation & Safety at Work", tema:"must / mustn't · have to / don't have to · señalética de seguridad", min:90,
  obj:"Expresar obligación, prohibición y ausencia de obligación en contextos de seguridad laboral.",
  can:["Usar must y have to para obligaciones.","Diferenciar mustn't (prohibido) de don't have to (no es necesario).","Explicar normas de seguridad de un taller o barco."],
  slides:[
  {t:"warm", title:"What does the sign mean?", intro:"Mira el símbolo y di la norma:", items:[["⛑️","You must wear a helmet."],["🚭","You mustn't smoke."],["🥽","You must wear safety glasses."],["🦺","You must wear a life jacket / high-visibility vest."],["📵","You mustn't use your phone here."]]},
  {t:"tbl", title:"Obligation, prohibition & no obligation", head:["Meaning","Form","Example"], rows:[
    ["✅ Obligación (regla)","must + verb","You <b>must</b> wear a helmet on the dock."],["✅ Obligación (externa / rutina)","have to / has to + verb","Sailors <b>have to</b> keep watch at night."],
    ["⛔ Prohibición","mustn't + verb","You <b>mustn't</b> run near the cranes."],["🆗 No es necesario","don't / doesn't have to + verb","You <b>don't have to</b> wear a uniform on Friday."],
    ["⏪ Pasado","had to + verb","We <b>had to</b> evacuate the ship."]],
    note:"⚠️ <b>mustn't ≠ don't have to</b>. <i>You mustn't swim here</i> = está prohibido. <i>You don't have to swim</i> = no es obligatorio (puedes si quieres)."},
  {t:"mcq", title:"Choose the correct option", items:[
    ["Passengers ___ smoke on the ferry. It's forbidden.",["mustn't","don't have to"],0],["You ___ bring your lunch; there's a cafeteria.",["mustn't","don't have to"],1],
    ["She ___ work on Sundays because the port never closes.",["has to","have to"],0],["Yesterday we ___ stay late to finish the inspection.",["must","had to"],1],
    ["All workers ___ wear safety boots.",["must","mustn't"],0]]},
  {t:"gap", title:"Complete the safety rules", items:[
    ["You ___ wear gloves when you use chemicals. (obligación)","must|have to"],["You ___ touch the electric panel without permission. (prohibido)","mustn't|must not"],
    ["Visitors ___ wear a uniform, but they need a vest. (no es necesario)","don't have to|do not have to"],["The engineer ___ check the engine every day. (rutina)","has to"],
    ["Last year we ___ do a fire drill every month. (pasado)","had to"]]},
  {t:"game", title:"Safety Officer 🦺", rules:["El profesor saca un lugar.","Cada equipo tiene 1 minuto para escribir 4 reglas: 2 con must/have to, 1 con mustn't, 1 con don't have to.","Reglas correctas y lógicas = 1 punto cada una."],
    cards:["the engine room","the school workshop","the port dock","a fishing boat","the school lab","the kitchen of a ship","a beach in summer","the school bus"]},
  {t:"speak", title:"Rules at my school / at home", task:"Compara las reglas de tu casa y del liceo con tu compañero.", min:5,
    frame:["At school we have to ___.","We mustn't ___.","At home I don't have to ___, but I have to ___.","When I was a child I had to ___."]},
  {t:"exit", items:["Escribe 2 reglas de seguridad con <i>must</i> y <i>mustn't</i>.","Explica la diferencia entre <i>mustn't</i> y <i>don't have to</i> con un ejemplo.","Escribe 1 oración con <i>had to</i>."]}
  ]},

{ title:"Present Perfect: Experience at Work", tema:"for / since · already / yet / just · How long…?", min:90,
  obj:"Hablar de experiencia laboral y logros recientes usando Present Perfect con for, since, already, yet y just.",
  can:["Usar for (período) y since (punto de inicio).","Usar already, yet y just correctamente.","Preguntar y responder How long have you…?"],
  slides:[
  {t:"warm", title:"How long…?", intro:"Responde con for o since:", items:[["How long have you studied at IMV?","For 3 years / Since 2024."],["How long have you known your best friend?","For … years / Since I was …"],["How long have you had your phone?","For … months / Since …"]]},
  {t:"tbl", title:"FOR vs SINCE", head:["FOR = duración ⏳","SINCE = punto de inicio 📍"], rows:[
    ["for three years","since 2023"],["for two months","since March"],["for a long time","since I was a child"],["for ten minutes","since Monday / since 8 o'clock"]],
    note:"Pregunta: <b>How long have you</b> worked here? — I've worked here <b>for</b> 5 years / <b>since</b> 2021."},
  {t:"tbl", title:"ALREADY · YET · JUST", head:["Word","Meaning","Position & example"], rows:[
    ["already","ya (antes de lo esperado)","✅ I've <b>already</b> finished the report."],["yet","ya (pregunta) / todavía (negativo)","❓ Have you finished <b>yet</b>? ❌ I haven't finished <b>yet</b>."],["just","recién / acabo de","✅ The ship has <b>just</b> arrived."]],
    note:"<b>already</b> y <b>just</b> van entre have y el participio. <b>yet</b> va al final de la oración."},
  {t:"gap", title:"for or since?", items:[
    ["My uncle has worked at the port ___ 2015.","since"],["She has been a captain ___ ten years.","for"],["I haven't seen him ___ Monday.","since"],["We've studied English ___ a long time.","for"],["They've lived in Valparaíso ___ they were children.","since"]]},
  {t:"order", title:"Order the sentences", items:["Have you sent your CV yet?","The ship has just left the port.","I have already finished my internship.","She hasn't called the company yet."]},
  {t:"game", title:"Find someone who has… 🔍", rules:["Circula preguntando <i>Have you ever…? / How long have you…?</i>","Cuando alguien responda Yes, pide un detalle con <i>When…? / How long…?</i>","Anota nombres. El primero con 6 nombres gana."],
    cards:["…has worked in a summer job","…has lived in the same house since they were born","…has already chosen a career","…has just eaten something","…hasn't done the homework yet","…has known a friend for more than 10 years","…has been on a ship","…has used a professional tool"]},
  {t:"speak", title:"My experience so far", task:"Cuéntale a tu compañero tu experiencia: estudios, talleres, trabajos de verano, habilidades.", min:6,
    frame:["I've studied at ___ since ___.","I've worked as ___ for ___.","I've already learned to ___.","I haven't ___ yet, but I want to."]},
  {t:"exit", items:["Escribe 2 oraciones con for y 2 con since.","Escribe 1 oración con already, 1 con yet y 1 con just.","Responde: How long have you studied English?"]}
  ]},

{ title:"Writing a CV & a Cover Letter", tema:"Secciones del CV · email formal · verbos de acción", min:90,
  obj:"Redactar un CV breve y una carta de presentación formal en inglés para postular a una práctica profesional.",
  can:["Reconocer las secciones de un CV.","Usar verbos de acción para describir logros.","Escribir un email formal de postulación."],
  slides:[
  {t:"warm", title:"What's in a CV?", intro:"¿Qué información pondrías en un CV? Clasifícala:", items:[["Your phone and email","Personal details"],["IMV, 2023–2026","Education"],["Summer job at a restaurant","Work experience"],["English (A2+), Excel, first aid","Skills"],["Football, volunteering","Interests"]]},
  {t:"exp", title:"CV structure & action verbs", html:"<div class='cols'><div class='rule'><b>CV sections</b><br>1. Personal details<br>2. Profile (2 lines about you)<br>3. Education<br>4. Work experience / Internships<br>5. Skills (languages, IT, technical)<br>6. Interests / References</div><div class='ex'><b>Action verbs</b> (past simple)<br><b>organised</b> · <b>managed</b> · <b>repaired</b> · <b>assisted</b> · <b>trained</b> · <b>developed</b> · <b>helped</b> · <b>completed</b><br><i>Assisted the logistics team in organising cargo.</i></div></div><div class='tip'>En un CV no usamos “I”: escribimos <b>Repaired engines</b> en vez de <i>I repaired engines</i>.</div>"},
  {t:"tbl", title:"Formal email: useful phrases", head:["Part","Phrase"], rows:[
    ["Greeting","Dear Mr. / Ms. Rojas, · Dear Sir or Madam,"],["Reason","I am writing to apply for the internship as …"],["About you","I am a 3rd-year student at Instituto Marítimo de Valparaíso, specialising in …"],
    ["Experience & skills","I have experience in … · I am good at … · I can …"],["Closing","I look forward to hearing from you. · Yours sincerely, (+ full name)"]],
    note:"Formal = sin contracciones (<b>I am</b>, no <i>I'm</i>), sin emojis y con un saludo y cierre adecuados."},
  {t:"mcq", title:"Formal or informal?", items:[
    ["Choose the best greeting for a company:",["Hi guys!","Dear Sir or Madam,","Hey Mr. Rojas"],1],["Choose the best opening line:",["I'm writing coz I want the job.","I am writing to apply for the position of assistant.","Give me the job pls."],1],
    ["Choose the best closing:",["See ya!","Yours sincerely,","Bye bye"],1],["Which is better for a CV?",["I was helping in the warehouse a lot.","Assisted in warehouse stock control.","I helped. It was cool."],1]]},
  {t:"order", title:"Put the formal sentences in order", items:["I am writing to apply for the internship.","I have experience in electrical maintenance.","I look forward to hearing from you.","I am a student at Instituto Marítimo de Valparaíso."]},
  {t:"speak", title:"Peer review 👥", task:"Intercambia tu borrador de CV con un compañero y dale retroalimentación en inglés.", min:6,
    frame:["Your profile is clear / is too short.","You could add ___ to your skills.","I think you should use the verb ___.","Great job! I like ___."]},
  {t:"exit", items:["Nombra las 5 secciones principales de un CV.","Escribe 3 verbos de acción en pasado.","Escribe la primera y la última oración de un email formal de postulación."], home:"Termina tu CV en inglés (1 página) para la próxima clase."}
  ]},

{ title:"The Job Interview", tema:"Preguntas típicas · adjetivos de personalidad · hablar de fortalezas", min:90,
  obj:"Responder preguntas de una entrevista de trabajo describiendo personalidad, habilidades y experiencia con ejemplos.",
  can:["Usar adjetivos de personalidad profesionales.","Responder Tell me about yourself.","Hablar de fortalezas y debilidades con ejemplos."],
  slides:[
  {t:"warm", title:"Which adjective describes you?", intro:"Elige 2 adjetivos que te describan y explica por qué:", items:[["responsible","I always finish my tasks on time."],["hard-working","I work a lot and I don't give up."],["punctual","I'm never late."],["a team player","I like working with other people."],["organised","I plan my work carefully."]]},
  {t:"tbl", title:"Typical interview questions", head:["Question","Useful answer"], rows:[
    ["Tell me about yourself.","I'm a 3rd-year student specialising in … I'm responsible and I enjoy …"],["Why do you want this job?","Because I want to gain experience in … and I'm interested in …"],
    ["What are your strengths?","I'm very organised. For example, I …"],["What is your weakness?","Sometimes I'm a bit shy, but I'm working on it by …"],["Where do you see yourself in five years?","I'd like to be working as … and studying …"]]},
  {t:"exp", title:"Give examples: the STAR technique ⭐", html:"<div class='rule'><b>S</b>ituation → <b>T</b>ask → <b>A</b>ction → <b>R</b>esult</div><div class='ex'><b>Strength: I'm a team player.</b><br><b>S:</b> In the school workshop we had to repair an outboard engine. <b>T:</b> I was responsible for the electrical part. <b>A:</b> I worked with two classmates and we shared the tasks. <b>R:</b> We finished it on time and got a 7.0.</div><div class='tip'>Un buen candidato no solo dice “I'm responsible”: lo demuestra con un ejemplo concreto.</div>"},
  {t:"mcq", title:"Good or bad answer?", items:[
    ["Why do you want this job?",["Because I need money.","Because I want to learn about port logistics and grow professionally.","I don't know."],1],
    ["What is your weakness?",["I don't have weaknesses.","Sometimes I'm too nervous, so I practise before presentations.","I'm lazy."],1],
    ["Do you have any questions for us?",["No.","What are the main tasks in the first month?","How much is the salary? That's all."],1]]},
  {t:"match", title:"Adjective → Definition", pairs:[["reliable","people can trust you"],["flexible","you adapt to changes"],["punctual","you arrive on time"],["proactive","you act without being told"],["patient","you stay calm and wait"],["creative","you have new ideas"]]},
  {t:"speak", title:"Mock interview 🎤", task:"En tríos: entrevistador, candidato y observador (con la lista de cotejo). Rotan roles.", min:12,
    steps:["El entrevistador hace 5 preguntas de la tabla.","El candidato responde con al menos 1 ejemplo (STAR).","El observador evalúa: contacto visual, oraciones completas, ejemplos, cortesía."],
    frame:["Good morning. Please, take a seat.","Thank you for your time.","Could you give me an example?","Thank you. We'll contact you soon."]},
  {t:"exit", items:["Escribe tu respuesta a <i>Tell me about yourself</i> (3 oraciones).","Escribe 1 fortaleza con un ejemplo concreto.","Escribe una pregunta que harías tú al entrevistador."]}
  ]}
]},

/* ───────────── UNIDAD 2 ───────────── */
{ n:2, icon:"💚", title:"Health & Well-being", desc:"Hábitos saludables, cuantificadores, consejos, used to, gerundios/infinitivos y segundo condicional",
lessons:[

{ title:"Healthy Habits & Quantifiers", tema:"much / many / a lot of / a few / a little · too much / not enough", min:90,
  obj:"Describir hábitos de alimentación y estilo de vida usando cuantificadores con sustantivos contables e incontables.",
  can:["Usar much / many / a lot of correctamente.","Usar a few / a little.","Evaluar hábitos con too much / too many / not enough."],
  slides:[
  {t:"warm", title:"How healthy are you?", intro:"Responde con un número o una palabra:", items:["How many hours do you sleep?","How much water do you drink a day?","How many times a week do you exercise?","How much time do you spend on your phone?"]},
  {t:"tbl", title:"Quantifiers", head:["","Countable (eggs, hours)","Uncountable (sugar, time)"], rows:[
    ["Questions","How <b>many</b> hours…?","How <b>much</b> sugar…?"],["A lot","<b>a lot of / many</b> vegetables","<b>a lot of</b> water (<i>much</i> en negativas/preguntas)"],
    ["A small quantity","<b>a few</b> apples","<b>a little</b> salt"],["Excess ❌","<b>too many</b> snacks","<b>too much</b> sugar"],["Insufficient ❌","<b>not enough</b> hours of sleep","<b>not enough</b> exercise"]]},
  {t:"mcq", title:"Choose the right quantifier", items:[
    ["I don't drink ___ water.",["many","much"],1],["There are ___ calories in fast food.",["a lot of","much"],0],
    ["You spend ___ time on social media. It's bad for you.",["too much","too many"],0],["I eat ___ fruit every day: one banana and one apple.",["a little","a few pieces of"],1],
    ["Teenagers don't get ___ sleep.",["enough","too"],0]]},
  {t:"gap", title:"Complete the advice", items:[
    ["How ___ hours do you sleep?","many"],["You eat too ___ sugar.","much"],["Add a ___ salt to the soup. (poca)","little"],["I have a ___ friends who play rugby. (unos pocos)","few"],["You don't exercise ___.","enough"]]},
  {t:"read", title:"A healthy life at sea", text:"Life on a ship is not always healthy. Sailors often work long shifts and they don't get enough sleep. There is not much space for exercise, and sometimes the cook prepares too many fried meals. Today, many companies have small gyms on board and offer a lot of fresh vegetables. Experts say sailors should drink a lot of water and take a few short breaks during the day.",
    items:[["Why don't sailors get enough sleep?","Because they work long shifts."],["What problem is there with the food?","Too many fried meals."],["What do companies offer today?","Small gyms and a lot of fresh vegetables."],["What do experts recommend?","Drink a lot of water and take a few short breaks."]]},
  {t:"game", title:"Healthy or not? 🥦🍟", rules:["El profesor saca un hábito.","Los equipos dicen si es saludable y dan un consejo con un cuantificador.","Ej: <i>Too much coffee — You should drink less coffee and more water.</i>"],
    cards:["8 hours of sleep","5 energy drinks a week","a lot of vegetables","10 hours of video games","a little chocolate","no breakfast","walking 30 minutes","too much salt","a few nuts","drinking 2 litres of water"]},
  {t:"speak", title:"Healthy habits survey 📊", task:"Entrevista a 3 compañeros y comparte tus conclusiones con el curso.", min:7,
    frame:["How much ___ do you…?","How many ___ do you…?","Most students don't get enough ___.","A few students eat too much ___."]},
  {t:"exit", items:["Escribe 2 hábitos tuyos con <i>too much / too many</i> y 1 con <i>not enough</i>.","Completa: How ___ time…? / How ___ glasses…?","¿Diferencia entre a few y a little?"]}
  ]},

{ title:"Stress, Problems & Advice", tema:"should / ought to / had better · Why don't you…? · If I were you…", min:90,
  obj:"Describir problemas de bienestar y dar consejos usando distintas estructuras de recomendación.",
  can:["Describir problemas comunes de los adolescentes.","Dar consejos con should, ought to, had better.","Usar Why don't you…? y If I were you, I'd…"],
  slides:[
  {t:"warm", title:"What stresses you?", intro:"Puntúa de 1 (nada) a 5 (mucho):", items:["Tests and grades","Social media","Family problems","Not enough sleep","Thinking about the future"], note:"💚 Recuerda: hablar de estos temas es normal. Si necesitas ayuda, conversa con un adulto de confianza o el equipo de convivencia."},
  {t:"tbl", title:"Giving advice", head:["Structure","Example","Strength"], rows:[
    ["should / shouldn't + verb","You <b>should</b> talk to someone.","normal"],["ought to + verb","You <b>ought to</b> sleep more.","= should (más formal)"],
    ["had better ('d better) + verb","You<b>'d better</b> study tonight — the test is tomorrow!","fuerte (advertencia)"],["Why don't you + verb?","<b>Why don't you</b> take a break?","amable"],["If I were you, I'd + verb","<b>If I were you, I'd</b> turn off my phone.","personal"]],
    note:"Después de todas estas estructuras va el <b>verbo base</b>: <s>You should to sleep</s> ❌ → You should sleep ✅"},
  {t:"mcq", title:"Choose the best advice", items:[
    ["I can't sleep at night.",["You'd better drink coffee at 10 p.m.","You shouldn't use your phone in bed.","You ought sleep more."],1],
    ["I'm very stressed about the test.",["Why don't you make a study plan?","If I were you, I'll panic.","You should to study."],0],
    ["I had an argument with my best friend.",["You'd better ignore her forever.","If I were you, I'd talk to her calmly.","You ought to shouting."],1],["Which is grammatically correct?",["You ought to rest.","You ought rest.","You ought resting."],0]]},
  {t:"gap", title:"Complete with the correct form", items:[
    ["If I ___ you, I'd ask the teacher for help.","were"],["You ___ better leave now or you'll miss the bus.","had|'d"],["Why ___ you go for a walk?","don't"],["You ought ___ drink more water.","to"],["You ___ spend so much time online. (consejo negativo)","shouldn't|should not"]]},
  {t:"game", title:"Agony aunt 💌", rules:["El profesor saca un problema.","Cada equipo tiene 1 minuto para escribir 2 consejos con estructuras distintas.","El curso vota el mejor consejo: 2 puntos."],
    cards:["I spend 8 hours a day on TikTok.","My parents don't understand me.","I'm always tired at school.","I don't know what to study after school.","My friend copies my homework.","I'm nervous about my internship interview.","I want to get fit but I'm lazy.","I always forget my homework."]},
  {t:"speak", title:"Problem & advice role-play", task:"A cuenta un problema (real o inventado); B escucha, hace preguntas y da 3 consejos. Luego cambian.", min:7,
    frame:["What's wrong? / What's the matter?","How long have you felt like this?","You should ___. / Why don't you ___?","If I were you, I'd ___.","Thanks, that's good advice!"]},
  {t:"exit", items:["Escribe un problema común de los adolescentes.","Escribe 3 consejos para ese problema con 3 estructuras distintas.","Corrige: <i>You should to sleep more.</i>"]}
  ]},

{ title:"Used to: Then and Now", tema:"Hábitos y estados pasados · used to / didn't use to / Did you use to…?", min:90,
  obj:"Comparar hábitos y estados del pasado con el presente usando used to.",
  can:["Formar used to en sus tres formas.","Comparar mi vida de niño/a con la actual.","Comparar la vida de antes y ahora en Valparaíso."],
  slides:[
  {t:"warm", title:"When you were a child…", intro:"Responde Yes / No y comparte:", items:["Did you use to watch cartoons every day?","Did you use to be afraid of the dark?","Did you use to play in the street?","Did you use to eat vegetables?"]},
  {t:"tbl", title:"USED TO", head:["","Form","Example"], rows:[
    ["✅","used to + verb","I <b>used to</b> play football every day."],["❌","didn't use to + verb","I <b>didn't use to</b> like vegetables."],["❓","Did + subject + use to + verb?","<b>Did</b> you <b>use to</b> live in Viña?"]],
    note:"<b>used to</b> = algo que hacíamos o éramos antes y ya no. ⚠️ En negativo y pregunta se escribe <b>use to</b> (sin d). Hoy: <i>Now I don't play football.</i>"},
  {t:"read", title:"Valparaíso: then and now", text:"One hundred years ago, Valparaíso used to be the most important port on the Pacific coast. Ships from Europe used to stop here before the Panama Canal opened. People used to travel by tram, and many families used to live near the port. Today, the city is a UNESCO World Heritage Site. Tourists visit the hills, and container ships still arrive every day.",
    items:[["What did Valparaíso use to be?","The most important port on the Pacific coast."],["Why did ships use to stop here?","Because the Panama Canal didn't exist yet."],["How did people use to travel?","By tram."],["What is the city today?","A UNESCO World Heritage Site."]]},
  {t:"gap", title:"Complete with used to", items:[
    ["When I was 6, I ___ (have) long hair.","used to have"],["My grandpa ___ (work) as a fisherman.","used to work"],["I ___ (not / like) English, but now I love it.","didn't use to like|did not use to like"],["___ (you / play) with toys when you were little?","Did you use to play"]]},
  {t:"mcq", title:"Correct or incorrect?", items:[
    ["",["I didn't used to like fish.","I didn't use to like fish.","I not used to like fish."],1],["",["Did you use to live here?","Did you used to live here?","Used you to live here?"],0],["",["She use to be shy.","She used to be shy.","She used be shy."],1]]},
  {t:"game", title:"Childhood guessing game 👶", rules:["Cada estudiante escribe 2 oraciones verdaderas con used to sobre su infancia en un papel.","El profesor lee un papel sin decir el nombre.","El curso adivina: <i>Did Benja use to…?</i>"],
    cards:["Lee un papel","Lee un papel","Lee un papel","Lee un papel","Lee un papel","Lee un papel"]},
  {t:"speak", title:"Then and now", task:"Cuenta a tu compañero 3 cosas que solías hacer y cómo es ahora.", min:6,
    frame:["When I was a kid, I used to ___.","I didn't use to ___, but now I ___.","Did you use to ___?","My life is very different now because ___."]},
  {t:"exit", items:["Escribe 2 cosas que solías hacer y 1 que no solías hacer.","Escribe una pregunta con <i>Did you use to…?</i>","¿Por qué se escribe <i>use</i> sin d en <i>didn't use to</i>?"]}
  ]},

{ title:"Gerunds & Infinitives", tema:"enjoy / avoid + -ing · want / decide + to · preposición + -ing", min:90,
  obj:"Usar correctamente gerundios e infinitivos después de verbos y preposiciones frecuentes.",
  can:["Reconocer verbos + -ing (enjoy, avoid, finish).","Reconocer verbos + to (want, decide, plan).","Usar -ing después de preposiciones (good at swimming)."],
  slides:[
  {t:"warm", title:"Complete about you", intro:"Completa en voz alta:", items:["I enjoy …","I want …","I avoid …","I'm good at …","I'm planning …"]},
  {t:"tbl", title:"Verb + -ing or verb + to?", head:["+ -ing (gerund)","+ to + verb (infinitive)"], rows:[
    ["enjoy · like · love · hate","want · would like · need"],["avoid · finish · stop · keep","decide · plan · hope · expect"],["don't mind · can't stand · practise","learn · agree · promise · refuse"],
    ["<i>I enjoy <b>sailing</b>.</i>","<i>I want <b>to be</b> an engineer.</i>"]],
    note:"Después de una <b>preposición</b> siempre -ing: good <b>at</b> swim<b>ming</b>, interested <b>in</b> work<b>ing</b>, tired <b>of</b> wait<b>ing</b>, <b>before</b> leav<b>ing</b>."},
  {t:"mcq", title:"-ing or to?", items:[
    ["I want ___ a marine engineer.",["being","to be"],1],["She enjoys ___ in the sea.",["swimming","to swim"],0],["We decided ___ the bus.",["taking","to take"],1],
    ["You should avoid ___ junk food.",["eating","to eat"],0],["I'm interested in ___ in logistics.",["working","to work"],0],["They hope ___ the competition.",["winning","to win"],1]]},
  {t:"gap", title:"Complete with the correct form", items:[
    ["I finished ___ (write) my CV.","writing"],["He promised ___ (help) me.","to help"],["I'm tired of ___ (wait).","waiting"],["Would you like ___ (come) to the beach?","to come"],["Keep ___ (practise) and you'll improve!","practising|practicing"]]},
  {t:"game", title:"Sentence Tennis 🎾", rules:["El profesor “saca” un verbo.","Un estudiante del equipo A “devuelve” una oración correcta; luego el equipo B con otra.","Quien se equivoca en -ing / to pierde el punto."],
    cards:["enjoy","want","avoid","decide","finish","plan","don't mind","hope","practise","learn","can't stand","would like"]},
  {t:"speak", title:"My goals & preferences", task:"Habla con tu compañero sobre tus metas y gustos usando 6 verbos de la tabla.", min:6,
    frame:["I'd like to ___ in the future.","I enjoy ___ in my free time.","I want to avoid ___.","I'm good at ___ but I'm not good at ___."]},
  {t:"exit", items:["Escribe 2 oraciones con verbo + -ing y 2 con verbo + to.","Corrige: <i>I'm good at to fix engines.</i>","Completa: I decided ___ (study) at IMV because I enjoy ___ (work) with my hands."]}
  ]},

{ title:"Second Conditional: Imaginary Situations", tema:"If + past simple, would + verb · If I were…", min:90,
  obj:"Hablar de situaciones imaginarias o poco probables y sus consecuencias con el segundo condicional.",
  can:["Formar el segundo condicional.","Diferenciar primer y segundo condicional.","Usar If I were you… para aconsejar."],
  slides:[
  {t:"warm", title:"What would you do…?", intro:"Responde rápido:", items:["…if you won 100 million pesos?","…if you could live in any country?","…if you were the principal of IMV?","…if you didn't have a phone for a month?"]},
  {t:"tbl", title:"Second conditional", head:["IF clause","Main clause"], rows:[
    ["If + past simple","would ('d) + verb base"],["If I <b>had</b> a boat,","I <b>would sail</b> around Chile."],["If she <b>were</b> the captain,","she <b>wouldn't</b> leave port in a storm."],["<b>Would</b> you <b>travel</b>","if you <b>had</b> money?"]],
    note:"El pasado aquí NO es pasado real: indica algo <b>imaginario</b>. Con be se usa <b>were</b> para todos: If I were rich…"},
  {t:"exp", title:"First vs Second conditional", html:"<div class='cols'><div class='rule'><b>1st — real / posible</b><br>If I <b>study</b>, I <b>will pass</b>.<br>(es probable)</div><div class='rule'><b>2nd — imaginario / poco probable</b><br>If I <b>won</b> the lottery, I <b>would buy</b> a ship.<br>(muy improbable)</div></div><div class='ex'>If it <b>rains</b> tomorrow, we'<b>ll</b> stay home. (posible)<br>If I <b>lived</b> in Antarctica, I'<b>d</b> see penguins every day. (imaginario)</div>"},
  {t:"gap", title:"Complete", items:[
    ["If I ___ (have) more time, I would learn to surf.","had"],["If she were rich, she ___ (buy) a house by the sea.","would buy|'d buy"],["What would you do if you ___ (see) a shark?","saw"],["If I ___ (be) you, I'd apply for the internship.","were"],["We ___ (not / be) tired if we slept more.","wouldn't be|would not be"]]},
  {t:"mcq", title:"1st or 2nd conditional?", items:[
    ["If I ___ a million dollars, I'd travel the world. (imaginario)",["have","had"],1],["If it ___ tomorrow, we'll cancel the trip. (posible)",["rains","rained"],0],
    ["If I were taller, I ___ play basketball.",["will","would"],1],["If you study, you ___ pass.",["will","would"],0]]},
  {t:"game", title:"Chain of dreams ⛓️", rules:["El profesor dice: <i>If I won the lottery, I would buy a boat.</i>","El siguiente continúa: <i>If I bought a boat, I would…</i>","Quien se equivoca o se queda en silencio 5 s sale. ¡El último gana!"],
    cards:["If I won the lottery…","If I were invisible…","If I could fly…","If I lived on Easter Island…","If I were the President…","If I had a superpower…","If I didn't have to go to school…"]},
  {t:"speak", title:"Would you rather? (dilemmas)", task:"Discute 3 dilemas con tu grupo usando el segundo condicional.", min:7,
    steps:["If you found a wallet with $500.000, what would you do?","If a friend asked you to copy in a test, what would you say?","If you could change one thing in Chile, what would it be?"],
    frame:["If I found ___, I would ___.","I wouldn't ___ because ___.","What would you do?"]},
  {t:"exit", items:["Completa: If I had a lot of money, ___.","Escribe 1 consejo con <i>If I were you, I'd…</i>","¿Cuál es la diferencia entre <i>If I study</i> y <i>If I studied</i>?"]}
  ]}
]},

/* ───────────── UNIDAD 3 ───────────── */
{ n:3, icon:"📱", title:"Technology & Media", desc:"Voz pasiva, cláusulas relativas, phrasal verbs, predicciones con may/might y noticias falsas",
lessons:[

{ title:"The Passive Voice (present & past)", tema:"is/are + participle · was/were + participle · by…", min:90,
  obj:"Describir cómo se fabrican, inventan o transportan objetos usando la voz pasiva en presente y pasado.",
  can:["Formar la voz pasiva en presente y pasado.","Decidir cuándo usar voz activa o pasiva.","Describir un proceso (cómo se exporta el cobre, cómo se hace un celular)."],
  slides:[
  {t:"warm", title:"Where is it made?", intro:"Adivina el origen:", items:[["iPhones","They're designed in the USA and made in China."],["Copper","It's mined in Chile."],["Pisco","It's produced in Chile and Peru."],["The telephone","It was invented by Alexander Graham Bell."]]},
  {t:"tbl", title:"Passive voice", head:["Tense","Form","Example"], rows:[
    ["Present","am / is / are + participle","Containers <b>are loaded</b> onto the ship."],["Past","was / were + participle","The port <b>was built</b> in the 19th century."],
    ["Negative","isn't / wasn't + participle","The cargo <b>wasn't damaged</b>."],["Question","Is / Was + subject + participle?","<b>Was</b> the ship <b>repaired</b>?"],["Agent","… by + person","The radio <b>was invented by</b> Marconi."]],
    note:"Usamos la pasiva cuando lo importante es la <b>acción o el objeto</b>, no quién la hace."},
  {t:"exp", title:"Active → Passive", html:"<div class='ex'><b>Active:</b> Workers <b>load</b> the containers.<br><b>Passive:</b> The containers <b>are loaded</b> (by workers).</div><div class='ex'><b>Active:</b> Engineers <b>built</b> the ship in 2010.<br><b>Passive:</b> The ship <b>was built</b> in 2010.</div><div class='rule'>1) El objeto pasa a ser sujeto · 2) be en el tiempo correcto · 3) participio · 4) by + agente (solo si importa)</div>"},
  {t:"gap", title:"Complete with the passive", items:[
    ["Chilean copper ___ (export) to China.","is exported"],["The first phone call ___ (make) in 1876.","was made"],["These cars ___ (produce) in Japan.","are produced"],["The ship ___ (not / damage) in the storm.","wasn't damaged|was not damaged"],["Harry Potter ___ (write) by J. K. Rowling.","was written"]]},
  {t:"order", title:"Describe the process: from mine to ship", items:["Copper is extracted from the mine.","Then it is transported by train to the port.","The copper is loaded onto ships.","Finally it is sold to other countries."]},
  {t:"game", title:"Quiz show: Who? When? Where? 🏆", rules:["Cada equipo responde con una oración pasiva completa.","Ej: <i>The light bulb was invented by Edison.</i>","Respuesta correcta + gramática correcta = 2 puntos."],
    cards:["The light bulb (Edison)","Pisco (Chile/Peru)","The Mona Lisa (Leonardo da Vinci)","Coffee (Brazil, Colombia…)","Facebook (Mark Zuckerberg, 2004)","The Panama Canal (opened 1914)","Wine (Chile, France…)","The Titanic (built in Belfast)"]},
  {t:"speak", title:"How is it made? 🏭", task:"En grupos, describan cómo se fabrica o transporta un producto (pan, cobre, salmón, una polera).", min:7,
    frame:["First, ___ is collected / grown / extracted.","Then, it is ___.","After that, it is ___ by ___.","Finally, it is sold / exported to ___."]},
  {t:"exit", items:["Escribe 2 oraciones pasivas en presente y 1 en pasado.","Cambia a pasiva: <i>Workers repair the ships.</i>","¿Cuándo usamos <i>by</i> en la pasiva?"]}
  ]},

{ title:"Relative Clauses", tema:"who · which · that · where · whose", min:90,
  obj:"Definir personas, objetos y lugares usando cláusulas relativas.",
  can:["Usar who para personas y which para cosas.","Usar where para lugares y whose para posesión.","Escribir definiciones claras de objetos técnicos."],
  slides:[
  {t:"warm", title:"Define it!", intro:"¿Qué es…? Usa: It's a person who… / It's a thing which…", items:[["a captain","a person who commands a ship"],["a compass","a thing which shows the direction"],["a port","a place where ships arrive"],["a smartphone","a device which you use to call and go online"]]},
  {t:"tbl", title:"Relative pronouns", head:["Pronoun","Use","Example"], rows:[
    ["who","personas","A pilot is a person <b>who</b> guides ships into port."],["which","cosas / animales","A radar is a device <b>which</b> detects objects."],
    ["that","personas o cosas (informal)","This is the phone <b>that</b> I bought."],["where","lugares","A shipyard is a place <b>where</b> ships are built."],["whose","posesión","She's the student <b>whose</b> father is a captain."]]},
  {t:"mcq", title:"Choose the pronoun", items:[
    ["An engineer is a person ___ designs or repairs machines.",["who","which","where"],0],["A lighthouse is a tower ___ helps ships at night.",["who","which","whose"],1],
    ["That's the café ___ we met.",["which","where","who"],1],["I have a friend ___ brother works on a cruise ship.",["who","whose","which"],1],["The app ___ I use is free.",["that","where","who"],0]]},
  {t:"gap", title:"Join the sentences", items:[
    ["I have a cousin. He works in Antarctica. → I have a cousin ___ works in Antarctica.","who|that"],["This is the knife. I use it in the workshop. → This is the knife ___ I use in the workshop.","which|that"],
    ["That's the beach. We swam there. → That's the beach ___ we swam.","where"],["She's the teacher. Her son is in my class. → She's the teacher ___ son is in my class.","whose"]]},
  {t:"game", title:"Taboo: Define it! 🚫", rules:["Un estudiante saca una tarjeta y la define con who / which / where SIN decir la palabra.","Su equipo tiene 30 s para adivinar.","Cada acierto = 1 punto."],
    cards:["anchor","firefighter","library","drone","dentist","fridge","airport","life jacket","tour guide","laptop","stadium","GPS"]},
  {t:"speak", title:"My favourite things", task:"Describe a tu compañero una persona, un objeto y un lugar importantes para ti con cláusulas relativas.", min:5,
    frame:["___ is a person who ___.","My ___ is something which ___.","___ is the place where ___."]},
  {t:"exit", items:["Escribe definiciones con who, which y where.","Une: <i>This is the boy. His dad is a pilot.</i>","¿Cuándo podemos usar <i>that</i>?"]}
  ]},

{ title:"Technology Phrasal Verbs", tema:"turn on/off · log in/out · plug in · set up · back up · look up…", min:90,
  obj:"Usar phrasal verbs frecuentes de tecnología para dar instrucciones y resolver problemas técnicos.",
  can:["Comprender 12 phrasal verbs de tecnología.","Dar instrucciones técnicas paso a paso.","Resolver un problema técnico en un diálogo de soporte."],
  slides:[
  {t:"warm", title:"What do you do when…?", intro:"¿Qué haces cuando…?", items:[["…your phone has no battery?","I plug it in / charge it."],["…you finish using the computer?","I log out and turn it off."],["…you don't know a word?","I look it up in a dictionary/online."],["…the computer freezes?","I restart it / turn it off and on again."]]},
  {t:"tbl", title:"Phrasal verbs", head:["Phrasal verb","Meaning","Example"], rows:[
    ["turn on / turn off","encender / apagar","<b>Turn off</b> the projector, please."],["log in / log out","iniciar / cerrar sesión","<b>Log in</b> with your school email."],
    ["plug in / unplug","enchufar / desenchufar","<b>Plug in</b> the charger."],["set up","configurar / instalar","I <b>set up</b> the new printer."],["back up","respaldar","<b>Back up</b> your files every week."],
    ["look up","buscar (información)","<b>Look</b> it <b>up</b> on the internet."],["shut down","apagar (sistema)","The system <b>shut down</b> suddenly."],["scroll down / up","desplazar","<b>Scroll down</b> to see more."]],
    note:"Con un pronombre, va en el medio: turn <b>it</b> off ✅ <s>turn off it</s> ❌"},
  {t:"match", title:"Problem → Solution", pairs:[["The screen is too dark.","Turn up the brightness."],["I can't hear the video.","Turn up the volume."],["My battery is low.","Plug in the charger."],["I don't know my password.","Click 'Forgot password' to set up a new one."],["I may lose my files.","Back them up in the cloud."],["I've finished on the school PC.","Log out and shut it down."]]},
  {t:"gap", title:"Complete with the right particle", items:[
    ["Please turn ___ your phones during the test.","off"],["Log ___ with your username and password.","in"],["Can you look ___ this word for me?","up"],["I need to set ___ my new laptop.","up"],["Don't forget to back ___ your project!","up"]]},
  {t:"game", title:"IT helpdesk race 🖥️", rules:["El profesor saca un problema técnico.","El primer equipo en dar una solución con un phrasal verb correcto gana 1 punto.","Bonus: si usan pronombre en la posición correcta (turn it off)."],
    cards:["The music is too loud.","The PC is very slow.","I can't see the file.","The projector isn't working.","My phone is full of photos.","I need to print a document.","Someone is using my account.","The Wi-Fi is not working."]},
  {t:"speak", title:"Tech support call ☎️", task:"A es técnico de soporte; B tiene un problema (tarjeta). Resuelvan el problema paso a paso.", min:7,
    frame:["Hello, IT support. How can I help you?","My ___ isn't working.","Have you tried turning it off and on again?","First, ___. Then, ___.","Great, it works now. Thanks!"]},
  {t:"exit", items:["Escribe 4 phrasal verbs de tecnología con su significado.","Escribe instrucciones (3 pasos) para conectarse al Wi-Fi del liceo.","Corrige: <i>Turn off it, please.</i>"]}
  ]},

{ title:"Technology & the Future: may / might / will", tema:"Grados de certeza · predicciones sobre tecnología y trabajo", min:90,
  obj:"Expresar distintos grados de certeza sobre el futuro de la tecnología y el trabajo usando will, may, might y probably.",
  can:["Expresar certeza con will / won't.","Expresar posibilidad con may / might.","Discutir el impacto de la tecnología en los empleos marítimos."],
  slides:[
  {t:"warm", title:"Certain, possible or impossible?", intro:"Levanta 3 dedos (seguro), 2 (posible) o 1 (imposible):", items:["Robots will drive trucks.","People might live on the Moon in 2050.","Phones will disappear.","AI may replace teachers."]},
  {t:"tbl", title:"Degrees of certainty", head:["Certainty","Structure","Example"], rows:[
    ["100% ✅","will definitely","Ships <b>will definitely</b> use more technology."],["80%","will probably / is likely to","Ports <b>will probably</b> be automated."],
    ["50%","may / might + verb","Some jobs <b>might</b> disappear."],["20%","probably won't","Robots <b>probably won't</b> replace all sailors."],["0% ❌","definitely won't","Ships <b>definitely won't</b> disappear."]],
    note:"<b>may / might</b> + verbo base, igual para todos los sujetos. Negativo: <b>might not</b>. ⚠️ <i>probably</i> va después de will pero antes de won't."},
  {t:"read", title:"Autonomous ships", text:"In Norway, the first electric autonomous container ship has already made trips without a crew on board. Experts say that in the future more ships will probably be controlled from offices on land. This might reduce accidents, because most accidents are caused by human error. However, autonomous ships may also create new problems, like cyberattacks. Sailors probably won't disappear, but they will need new digital skills.",
    items:[["Where was the first autonomous container ship made?","In Norway."],["Why might autonomous ships reduce accidents?","Because most accidents are caused by human error."],["What new problem may they create?","Cyberattacks."],["What will sailors need?","New digital skills."]]},
  {t:"mcq", title:"Choose the best option", items:[
    ["I'm not sure, but it ___ rain later.",["will","might"],1],["The sun ___ rise tomorrow.",["will definitely","might"],0],["Ships ___ completely disappear.",["definitely won't","might"],0],["Which is correct?",["She mights come.","She might come.","She might to come."],1]]},
  {t:"game", title:"Future Bets 🎲", rules:["El profesor saca una predicción.","Cada equipo “apuesta” 1–3 puntos y da su opinión con un grado de certeza y una razón.","El curso vota la mejor argumentación: ese equipo gana lo apostado."],
    cards:["AI will do our homework.","There will be no cash in 2035.","Valparaíso will have a metro.","Most cars will be electric.","Robots will work at the port.","People will work only 4 days a week.","Paper books will disappear.","English will be spoken by everyone in Chile."]},
  {t:"speak", title:"Debate: Technology and jobs", task:"En grupos: ¿la tecnología creará o destruirá empleos en el puerto? Cada uno da una predicción con razón.", min:8,
    frame:["I think robots will probably ___.","Some jobs might ___, but ___.","In my opinion, ___ definitely won't ___.","I agree / I'm not so sure because ___."]},
  {t:"exit", items:["Escribe 3 predicciones sobre tu futuro con will, might y probably won't.","¿Qué es más seguro: <i>may</i> o <i>will probably</i>?","Corrige: <i>It mights rain.</i>"]}
  ]},

{ title:"Media Literacy & Fake News", tema:"Identificar noticias falsas · opinión vs hecho · verbos de reporte", min:90,
  obj:"Evaluar la confiabilidad de noticias en inglés, distinguiendo hechos de opiniones.",
  can:["Distinguir fact y opinion.","Aplicar una lista de verificación para detectar fake news.","Usar expresiones: According to…, It is said that…"],
  slides:[
  {t:"warm", title:"Real or fake? 🤔", intro:"¿Crees que estos titulares son reales o falsos?", items:[["Scientists find a new species of octopus in Chile.","Plausible — you must check the source."],["Drinking 10 litres of water cures all diseases!","Fake — exaggerated and dangerous."],["Valparaíso's port moves millions of tons of cargo every year.","Real — verifiable fact."]]},
  {t:"exp", title:"Fact vs Opinion", html:"<div class='cols'><div class='rule'><b>FACT</b> = se puede comprobar<br>The ship is 300 metres long.<br>Chile has more than 4,000 km of coast.</div><div class='rule'><b>OPINION</b> = lo que alguien piensa<br>It's the most beautiful ship in the world.<br>I think the news is boring.</div></div><div class='ex'><b>Signal words of opinion:</b> I think · I believe · in my opinion · best / worst · amazing · terrible · should</div><div class='ex'><b>Reporting a source:</b> <b>According to</b> the BBC, … · <b>Experts say that</b> … · <b>It is reported that</b> …</div>"},
  {t:"tbl", title:"How to spot fake news 🕵️", head:["Question","Why?"], rows:[
    ["Who wrote it? Is the source known?","Unknown sources may be unreliable."],["When was it published?","Old news can be shared as new."],["Do other media report it?","Real news appears in many sources."],
    ["Does the headline use CAPITALS or !!!?","Fake news uses emotions to make you click."],["Is it a fact or an opinion?","Opinions are not evidence."]]},
  {t:"tf", title:"Fact or opinion? (True = fact)", items:[
    ["Valparaíso is in the Valparaíso Region.",true],["Reggaeton is the best music ever.",false],["The Pacific Ocean is the largest ocean.",true],["Phones are terrible for teenagers.",false]]},
  {t:"mcq", title:"Which source is the most reliable?", items:[
    ["News about an earthquake:",["A WhatsApp audio from an unknown person","SHOA / ONEMI official website","A meme on Instagram"],1],["Health information:",["A doctor's website from a hospital","A TikTok from a random user","A chain message"],0],["What should you do before sharing news?",["Share it quickly","Check the source and the date","Add more emojis"],1]]},
  {t:"game", title:"Fake news detectives 🔍", rules:["El profesor lee un titular.","Los equipos deciden: Real / Fake / Need to check, y justifican con una pregunta de la tabla.","Justificación correcta = 1 punto."],
    cards:["SHARKS SEEN IN THE STREETS OF VALPARAÍSO!!!","New study: teenagers sleep less than 8 hours","Eating chocolate makes you smarter, says unknown website","Chile wins world sailing championship (official federation site)","Free iPhones for everyone — click here!","Port of San Antonio breaks cargo record (local newspaper)"]},
  {t:"speak", title:"Media habits interview", task:"Pregunta a tu compañero cómo se informa y cómo verifica las noticias.", min:5,
    frame:["Where do you get your news from?","Have you ever shared fake news?","How do you check if something is true?","According to ___, …"]},
  {t:"exit", items:["Escribe 1 hecho y 1 opinión sobre tu ciudad.","Escribe 3 preguntas para verificar una noticia.","Reporta una noticia usando <i>According to…</i>"]}
  ]}
]},

/* ───────────── UNIDAD 4 ───────────── */
{ n:4, icon:"🧳", title:"Travel & Culture", desc:"Past perfect, reported speech, viajes por puerto y aeropuerto, turismo y diversidad cultural",
lessons:[

{ title:"Travel Stories: Past Perfect", tema:"had + participle · antes de otra acción pasada · by the time / when", min:90,
  obj:"Narrar experiencias de viaje ordenando eventos con Past Perfect y Past Simple.",
  can:["Formar el Past Perfect.","Ordenar dos acciones en el pasado.","Contar una anécdota de viaje con conectores."],
  slides:[
  {t:"warm", title:"What had happened?", intro:"¿Qué había pasado antes?", items:[["When I arrived at the station, the train…","…had already left."],["I was hungry because I…","…hadn't eaten breakfast."],["She was nervous because she…","…had never flown before."]]},
  {t:"tbl", title:"Past Perfect", head:["","Form","Example"], rows:[
    ["✅","had + participle","The ship <b>had left</b> when we arrived."],["❌","hadn't + participle","I <b>hadn't seen</b> the sea before."],["❓","Had + subject + participle?","<b>Had</b> you <b>been</b> there before?"]],
    note:"Acción 1 (más antigua) = <b>Past Perfect</b> · Acción 2 = <b>Past Simple</b>. Palabras clave: <b>already, before, by the time, when, never… before</b>."},
  {t:"exp", title:"Timeline ⏳", html:"<div class='rule'>⬅️ <b>1. had left</b> ——— <b>2. arrived</b> ——— NOW ➡️</div><div class='ex'>When we <b>arrived</b> at the port, the ferry <b>had</b> already <b>left</b>. (primero salió el ferry, luego llegamos)</div><div class='ex'>When we arrived at the port, the ferry <b>left</b>. (llegamos y en ese momento salió)</div><div class='tip'>El Past Perfect muestra claramente qué ocurrió <b>primero</b>.</div>"},
  {t:"gap", title:"Complete with Past Perfect or Past Simple", items:[
    ["By the time we got to the cinema, the film ___ (start).","had started|'d started"],["She ___ (never / travel) by plane before that trip.","had never travelled|had never traveled|'d never travelled"],["When I arrived, my friends ___ (already / eat).","had already eaten|'d already eaten"],["I ___ (lose) my passport, so I couldn't board.","had lost|'d lost"]]},
  {t:"read", title:"A trip to Robinson Crusoe Island", text:"Last summer, my family and I travelled to Robinson Crusoe Island. We had booked the tickets months before, but on the day of the flight the weather was terrible. When we arrived at the airport, they had cancelled all the flights! We had never seen my dad so angry. Two days later, we finally flew to the island. It was worth it: I had never seen such clear water and so many sea lions.",
    items:[["When had they booked the tickets?","Months before."],["What had happened when they arrived at the airport?","They had cancelled all the flights."],["When did they fly?","Two days later."],["What had the writer never seen before?","Such clear water and so many sea lions."]]},
  {t:"game", title:"Travel disaster story ✈️💥", rules:["Cada equipo saca 2 tarjetas.","En 3 minutos crean una anécdota usando 2 verbos en Past Perfect.","La cuentan al curso; votación = puntos."],
    cards:["lost passport","missed the bus","forgot the tickets","stormy sea","delayed flight","wrong hotel","stolen bag","no battery","closed museum","rained all week"]},
  {t:"speak", title:"My best / worst trip", task:"Cuenta un viaje memorable (real o inventado) usando Past Simple y Past Perfect.", min:7,
    frame:["Last ___, I went to ___.","Before the trip, I had ___.","When we arrived, ___ had already ___.","I had never ___ before."]},
  {t:"exit", items:["Escribe 2 oraciones con Past Perfect y Past Simple juntos.","Explica la diferencia: <i>When I arrived, he left / had left.</i>","Escribe una pregunta con <i>Had you ever…?</i>"]}
  ]},

{ title:"Reported Speech", tema:"said that… · told me that… · cambios de tiempo y pronombres", min:90,
  obj:"Transmitir lo que otras personas dijeron usando el estilo indirecto en afirmaciones.",
  can:["Usar say y tell correctamente.","Cambiar tiempos verbales en estilo indirecto.","Ajustar pronombres y expresiones de tiempo."],
  slides:[
  {t:"warm", title:"Chinese whispers 🗣️", intro:"El profesor dice una frase al primer estudiante; pasa de oído en oído. El último dice: <i>She said that…</i>", items:["The ship is arriving at 5 o'clock.","I love empanadas with cheese.","We have a test next Monday."]},
  {t:"tbl", title:"Tense changes", head:["Direct speech","Reported speech"], rows:[
    ["“I <b>am</b> tired.”","He said (that) he <b>was</b> tired."],["“I <b>work</b> at the port.”","She said she <b>worked</b> at the port."],["“I'<b>m studying</b>.”","He said he <b>was studying</b>."],
    ["“I <b>visited</b> Chiloé.”","She said she <b>had visited</b> Chiloé."],["“I <b>will</b> call you.”","He said he <b>would</b> call me."],["“I <b>can</b> swim.”","She said she <b>could</b> swim."]]},
  {t:"exp", title:"SAY vs TELL · other changes", html:"<div class='cols'><div class='rule'><b>say</b> (something)<br>He <b>said</b> that he was busy.</div><div class='rule'><b>tell</b> + person<br>He <b>told me</b> that he was busy.</div></div><div class='ex'><b>Pronouns:</b> I → he/she · my → his/her<br><b>Time:</b> today → that day · tomorrow → the next day · yesterday → the day before · now → then · here → there</div><div class='tip'>⚠️ <s>He said me</s> ❌ → He <b>told</b> me ✅</div>"},
  {t:"gap", title:"Report the sentences", items:[
    ["“I am hungry.” → Pedro said that he ___ hungry.","was"],["“We live in Viña.” → They said they ___ in Viña.","lived"],["“I will help you.” → She said she ___ help me.","would"],["“I can't come.” → He told me he ___ come.","couldn't|could not"],["“I bought a new phone.” → She said she ___ a new phone.","had bought"]]},
  {t:"mcq", title:"say or tell?", items:[
    ["She ___ me that she was leaving.",["said","told"],1],["He ___ that the test was easy.",["said","told"],0],["They ___ us the ship was late.",["said","told"],1],["Which is correct?",["He said me the truth.","He told me the truth.","He told the truth me."],1]]},
  {t:"game", title:"Celebrity interview report 🎤", rules:["El profesor lee una cita de una “celebridad”.","El primer equipo en reportarla correctamente gana 1 punto.","Bonus si cambian también pronombres y tiempo."],
    cards:["“I am very happy to be in Chile.”","“I will record a new song tomorrow.”","“I love Chilean food.”","“I can't sing today.”","“We are playing in Santiago now.”","“I visited Valparaíso yesterday.”"]},
  {t:"speak", title:"Interview & report", task:"Entrevista a tu compañero (5 preguntas). Luego reporta 3 respuestas al curso.", min:7,
    frame:["Camila said that she ___.","She told me that she ___.","He said he would ___ the next day.","They said they had ___."]},
  {t:"exit", items:["Reporta: “I am studying English.”","Reporta: “I will travel tomorrow.”","Corrige: <i>She said me that she was tired.</i>"]}
  ]},

{ title:"At the Airport & the Port", tema:"Check-in, seguridad, embarque · avisos y anuncios", min:90,
  obj:"Desenvolverse en situaciones de viaje en aeropuertos y terminales de pasajeros, comprendiendo anuncios y respondiendo preguntas.",
  can:["Comprender vocabulario de viaje (boarding pass, gate, luggage…).","Responder preguntas en check-in y control de seguridad.","Comprender anuncios de embarque y retrasos."],
  slides:[
  {t:"warm", title:"Put the steps in order ✈️", intro:"¿Qué viene primero en un viaje?", items:[["A","Check in and drop your luggage."],["B","Go through security."],["C","Wait at the gate."],["D","Board the plane / ship."],["E","Collect your luggage at baggage claim."]]},
  {t:"tbl", title:"Check-in & security: useful language", head:["Staff","Passenger"], rows:[
    ["Can I see your passport / ID, please?","Here you are."],["Do you have any luggage to check in?","Yes, one suitcase. / Just hand luggage."],["Window or aisle seat?","Window, please."],
    ["Did you pack your bag yourself?","Yes, I did."],["Please put your liquids and laptop in the tray.","OK. Do I have to take off my shoes?"],["Your gate is B12. Boarding starts at 9:40.","Thank you!"]]},
  {t:"mcq", title:"Understand the announcement", intro:"🔊 “Flight LA 1234 to Punta Arenas is delayed. The new departure time is 11:15. Please proceed to gate 7.”", items:[
    ["Where is the flight going?",["Puerto Montt","Punta Arenas","Lima"],1],["What's the problem?",["It's cancelled","It's delayed","It's boarding"],1],["New departure time:",["11:50","10:15","11:15"],2],["Gate:",["7","11","17"],0]]},
  {t:"match", title:"Travel words", pairs:[["boarding pass","tarjeta de embarque"],["luggage","equipaje"],["gate","puerta de embarque"],["delayed","retrasado"],["customs","aduana"],["departures / arrivals","salidas / llegadas"]]},
  {t:"order", title:"Complete the dialogue", items:["Can I see your passport, please?","Do you have any luggage to check in?","Would you like a window or an aisle seat?","Your flight boards at gate 12."]},
  {t:"speak", title:"Role-play: from check-in to boarding", task:"En parejas, representen check-in, seguridad y embarque. Cambien roles.", min:8,
    frame:["Good morning. Where are you flying to?","Can I see your passport, please?","How many bags are you checking in?","Is there anything in your bag that could be dangerous?","Have a nice flight!"]},
  {t:"game", title:"Announcement Bingo 📢", rules:["Dibuja una grilla 3×3 con palabras: gate, delayed, boarding, passport, luggage, departure, cancelled, seat, customs.","El profesor lee anuncios (o los genera con 🔊).","Marca las palabras que escuches. ¡BINGO!"],
    cards:["Flight 501 to Madrid is now boarding at gate 4.","Passengers must keep their luggage with them at all times.","The ferry to Puerto Natales is cancelled due to bad weather.","Please have your passport and boarding pass ready.","Flight 88 is delayed. New departure time: 3 p.m.","All passengers must go through customs."]},
  {t:"exit", items:["Escribe 3 preguntas que te hacen en el check-in.","¿Qué significa <i>delayed</i> y <i>gate</i>?","Ordena: security – check-in – boarding – gate."]}
  ]},

{ title:"Tourism in Chile: Describing Places", tema:"Adjetivos extremos · recomendaciones · cláusulas relativas (repaso)", min:90,
  obj:"Describir y recomendar destinos turísticos de Chile a visitantes extranjeros usando adjetivos variados y estructuras de recomendación.",
  can:["Usar adjetivos extremos (amazing, huge, freezing).","Recomendar lugares: You should visit… / It's worth visiting…","Crear una guía turística breve."],
  slides:[
  {t:"warm", title:"Where in Chile? 🇨🇱", intro:"Adivina el lugar:", items:[["It's the driest desert in the world.","San Pedro de Atacama / Atacama Desert"],["You can see the moai there.","Easter Island (Rapa Nui)"],["It has three famous granite towers.","Torres del Paine"],["It's a port with colourful hills and funiculars.","Valparaíso"]]},
  {t:"tbl", title:"Normal vs extreme adjectives", head:["Normal","Extreme","Use with…"], rows:[
    ["good","amazing / fantastic","absolutely amazing"],["big","huge / enormous","absolutely huge"],["cold","freezing","absolutely freezing"],["tired","exhausted","really exhausted"],["beautiful","stunning / breathtaking","absolutely stunning"]],
    note:"Con adjetivos extremos usamos <b>absolutely / really</b>, no <s>very</s>: <i>very amazing</i> ❌ → <b>absolutely amazing</b> ✅"},
  {t:"exp", title:"Recommending a place", html:"<div class='ex'><b>You should</b> visit Cerro Alegre.<br><b>It's worth</b> visiting the Maritime Museum.<br><b>Don't miss</b> the sunset at Playa Ancha.<br><b>Make sure you</b> try a chorrillana.<br><b>The best time to go</b> is in spring.</div><div class='rule'>⚠️ <b>It's worth + -ing</b>: It's worth visit<b>ing</b> (no <s>worth to visit</s>).</div>"},
  {t:"mcq", title:"Choose the best option", items:[
    ["The view from the hill is ___ stunning.",["very","absolutely"],1],["It's worth ___ the museum.",["visiting","to visit"],0],["In Torres del Paine the wind is ___.",["freezing","freeze"],0],["San Pedro is a place ___ you can see the stars clearly.",["which","where"],1]]},
  {t:"read", title:"Visit Valparaíso!", text:"Valparaíso is an absolutely stunning port city on the Pacific coast. It's famous for its colourful houses, street art and old funiculars which take you up the hills. You should walk around Cerro Concepción and Cerro Alegre, where you'll find cafés and amazing views. It's worth visiting La Sebastiana, the house where Pablo Neruda lived. Make sure you try a chorrillana, and don't miss the New Year's Eve fireworks!",
    items:[["What is Valparaíso famous for?","Colourful houses, street art and old funiculars."],["Which hills should you visit?","Cerro Concepción and Cerro Alegre."],["What is La Sebastiana?","The house where Pablo Neruda lived."],["What event shouldn't you miss?","The New Year's Eve fireworks."]]},
  {t:"game", title:"Tourist pitch 🏝️", rules:["Cada equipo saca un destino.","Preparan una “venta” de 30 segundos con 2 adjetivos extremos y 2 recomendaciones.","El curso vota a qué destino viajaría."],
    cards:["Valparaíso","Easter Island","Torres del Paine","San Pedro de Atacama","Chiloé","Pucón","La Serena","Juan Fernández Islands","Santiago","Punta Arenas"]},
  {t:"speak", title:"Tourist information desk", task:"A es turista extranjero; B trabaja en la oficina de turismo. B recomienda lugares, comida y actividades.", min:7,
    frame:["Hi! What can I do in ___?","You should definitely visit ___.","It's worth ___-ing.","Don't miss ___. It's absolutely ___!"]},
  {t:"exit", items:["Escribe 3 adjetivos extremos con su adjetivo normal.","Recomienda un lugar de Chile en 2 oraciones.","Corrige: <i>It's very amazing and worth to visit.</i>"], home:"Diseña un folleto turístico (afiche) en inglés de un lugar de tu región."}
  ]},

{ title:"Cultural Diversity & Customs", tema:"Costumbres de otros países · comparación cultural · respeto", min:90,
  obj:"Comparar costumbres de distintos países con Chile, expresando similitudes, diferencias y opiniones respetuosas.",
  can:["Describir costumbres con It's common / It's polite / It's rude to…","Comparar culturas con while, whereas, both, neither.","Expresar opiniones respetuosas sobre otras culturas."],
  slides:[
  {t:"warm", title:"Polite or rude? 🌍", intro:"¿Es educado o maleducado… en Chile? ¿Y en otros países?", items:[["Kissing on the cheek when you meet someone","Common in Chile; not common in Japan or the UK."],["Arriving 20 minutes late to a party","Normal in Chile; rude in Germany."],["Leaving a tip in a restaurant","Expected in the USA and Chile (10%)."],["Eating with your hands","Polite in India for some food."]]},
  {t:"tbl", title:"Talking about customs", head:["Structure","Example"], rows:[
    ["It's common / usual to + verb","In Japan <b>it's common to</b> bow when you meet someone."],["It's polite / rude to + verb","<b>It's rude to</b> blow your nose at the table in China."],
    ["You're (not) supposed to + verb","<b>You're supposed to</b> take off your shoes."],["People tend to + verb","Chileans <b>tend to</b> eat dinner late."]]},
  {t:"exp", title:"Comparing cultures", html:"<div class='ex'><b>while / whereas</b> (contraste)<br>In Chile people kiss on the cheek, <b>whereas</b> in Japan they bow.</div><div class='ex'><b>both / neither</b> (similitud)<br><b>Both</b> Chile and Peru love ceviche. · <b>Neither</b> Chile <b>nor</b> Argentina has a king.</div><div class='tip'>💬 Opinión respetuosa: <i>It's different from my culture, but it's interesting.</i> · Evita: <i>That's weird / stupid.</i></div>"},
  {t:"tf", title:"Read & decide", text:"In Japan, people bow to say hello and they take off their shoes before entering a house. In the USA, people usually shake hands, and it's normal to leave a 15–20% tip in restaurants. In Chile, friends kiss on the cheek, and people tend to arrive a little late to parties. In Germany, punctuality is very important.",
    items:[["In Japan, people kiss on the cheek.",false],["Tipping 15–20% is normal in the USA.",true],["Chileans tend to arrive early to parties.",false],["Punctuality is important in Germany.",true]]},
  {t:"gap", title:"Complete", items:[
    ["In Japan ___ common to bow.","it's|it is"],["In Chile people kiss, ___ in the UK they shake hands.","whereas|while"],["___ Chile and Argentina love asado.","Both"],["You're supposed ___ take off your shoes.","to"]]},
  {t:"speak", title:"Culture guide for exchange students", task:"En grupos, preparen 5 consejos culturales para un estudiante extranjero que llega a Valparaíso.", min:8,
    frame:["In Chile, it's common to ___.","You're supposed to ___.","It's rude to ___.","Chileans tend to ___, whereas in your country ___."]},
  {t:"exit", items:["Escribe 2 costumbres chilenas con <i>It's common to…</i>","Compara Chile con otro país usando <i>whereas</i>.","Escribe una opinión respetuosa sobre una costumbre diferente."]}
  ]}
]}
]};
