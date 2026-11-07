/* =========================================================
   1° MEDIO — Presentaciones por clase
   Formato de diapositivas: ver clases.html (renderSlide)
   ========================================================= */
window.CLASES = window.CLASES || {};
CLASES["1m"] = {
label: "1° Medio", color: "#1a7a8a",
units: [

/* ───────────── UNIDAD 1 ───────────── */
{ n:1, icon:"👋", title:"Getting to Know Each Other", desc:"Saludos, verbo To Be, números, fechas e información personal",
lessons:[

{ title:"Greetings & Introductions", tema:"Saludos formales e informales · presentarse · deletrear", min:90,
  obj:"Saludar, presentarse y deletrear el nombre en inglés en situaciones formales e informales.",
  can:["Saludar y despedirme según la hora y la persona.","Decir mi nombre y preguntar el de otros.","Deletrear mi nombre con el abecedario en inglés."],
  slides:[
  {t:"warm", title:"How do we say hello?", intro:"Toca cada situación: ¿qué saludo usarías?", items:[
    ["8:00 a.m. — you meet your teacher","Good morning!"],["3:00 p.m. — you see the principal","Good afternoon!"],
    ["Recess — you see your best friend","Hi! / Hey! What's up?"],["You leave school","Goodbye! / See you tomorrow!"]]},
  {t:"tbl", title:"Formal vs Informal greetings", head:["","Formal 👔","Informal 😎"], rows:[
    ["Hello","Good morning / afternoon / evening","Hi! · Hey!"],
    ["How are you?","How are you today?","How's it going? · What's up?"],
    ["Answer","I'm fine, thank you. And you?","Good! · Not bad. · Great!"],
    ["Goodbye","Goodbye. Have a nice day.","Bye! · See you! · See ya!"]],
    note:"⚠️ <b>Good night</b> es solo para despedirse (antes de dormir). Para saludar de noche usa <b>Good evening</b>."},
  {t:"exp", title:"Introducing yourself", html:"<div class='cols'><div><div class='rule'><b>Ask</b><br>What's your name?<br>How do you spell it?<br>Nice to meet you.</div></div><div><div class='ex'><b>Answer</b><br>My name is Tomás. / I'm Tomás.<br>T-O-M-A-S.<br>Nice to meet you, too!</div></div></div><div class='tip'>🔤 Letras difíciles para hispanohablantes: <b>A</b> /ei/ · <b>E</b> /i:/ · <b>I</b> /ai/ · <b>G</b> /dʒi:/ · <b>J</b> /dʒei/ · <b>H</b> /eitʃ/ · <b>W</b> /dʌbəl ju:/ · <b>Y</b> /wai/</div>"},
  {t:"mcq", title:"What do you say?", items:[
    ["It's 10:00 a.m. You meet the captain.",["Good night","Good morning","Bye!"],1],
    ["Your friend says: <i>Hi! What's up?</i>",["Not much!","Good evening, sir.","Nice to meet you, too."],0],
    ["Someone says: <i>Nice to meet you.</i>",["Thank you, goodbye.","Nice to meet you, too.","I'm fine."],1],
    ["It's 11:00 p.m. You go to bed.",["Good evening","Good afternoon","Good night"],2],
    ["How do you spell 'JAVIER'?",["/dʒei/ /ei/ /vi:/ /ai/ /i:/ /a:r/","/xota/ /a/ /ve/ /i/ /e/ /ere/","/gi:/ /ei/ /vi:/ /i:/ /ai/ /a:r/"],0]]},
  {t:"order", title:"Build the dialogue", items:["What is your name?","My name is Catalina.","How do you spell it?","Nice to meet you, too."]},
  {t:"game", title:"Spelling Bee ⚓", rules:["Dos equipos (Team A / Team B). Activa el marcador en 🧰 Herramientas.","El profesor saca una palabra; un estudiante de cada equipo la deletrea en inglés.","Respuesta correcta = 1 punto. ¡Sin escribir!"],
    cards:["SHIP","PORT","SEA","CAPTAIN","ANCHOR","WAVE","HELLO","FRIEND","VALPARAÍSO","SCHOOL","BOAT","SAILOR","FISH","MORNING","ISLAND"]},
  {t:"speak", title:"Mingle: Meet 5 classmates", task:"Levántate y preséntate a 5 compañeros. Anota su nombre deletreado.", min:5,
    frame:["Hi! / Good morning! I'm ___.","What's your name?","How do you spell it?","Nice to meet you!","See you!"]},
  {t:"exit", items:["Escribe un saludo formal y uno informal.","Escribe cómo te presentas en inglés (2 oraciones).","Deletrea tu apellido con la pronunciación en inglés (ej: P /pi:/ …)."]}
  ]},

{ title:"Subject Pronouns & Verb To Be (+)", tema:"I, you, he, she, it, we, they · am / is / are · contracciones", min:90,
  obj:"Usar los pronombres personales y el verbo To Be en forma afirmativa para describir personas y lugares.",
  can:["Reemplazar nombres por pronombres.","Elegir am / is / are correctamente.","Usar contracciones: I'm, she's, they're."],
  slides:[
  {t:"warm", title:"Who is it?", intro:"Mira a la persona o cosa y di el pronombre:", items:[
    ["Profesor Mau","he"],["Valentina","she"],["The ship","it"],["Matías and I","we"],["The students","they"],["You and Pedro","you"]]},
  {t:"tbl", title:"Verb To Be — Affirmative", head:["Pronoun","To Be","Contraction","Example"], rows:[
    ["I","am","I'm","I'm a student."],["You","are","you're","You're from Chile."],["He","is","he's","He's a captain."],
    ["She","is","she's","She's 15 years old."],["It","is","it's","It's a big ship."],["We","are","we're","We're in 1° Medio."],["They","are","they're","They're sailors."]],
    note:"En español podemos omitir el sujeto (<i>Soy estudiante</i>). En inglés <b>siempre</b> va el sujeto: <b>I am</b> a student ✅ / <s>Am a student</s> ❌"},
  {t:"exp", title:"Ser y estar = To Be", html:"<p>En inglés <b>ser</b> y <b>estar</b> son el mismo verbo.</p><div class='cols'><div class='ex'><b>Ser</b><br>She <span class='hl'>is</span> Chilean.<br>It <span class='hl'>is</span> a port.</div><div class='ex'><b>Estar</b><br>We <span class='hl'>are</span> tired.<br>The ship <span class='hl'>is</span> in Valparaíso.</div></div><div class='tip'>💡 Edad también usa To Be: <b>I am 15</b> (yo <i>tengo</i> 15) — ¡nunca <s>I have 15</s>!</div>"},
  {t:"gap", title:"am, is or are?", items:[
    ["I ___ a student at IMV.","am|'m"],["The port ___ very big.","is|'s"],["My friends ___ in the classroom.","are|'re"],
    ["She ___ 16 years old.","is|'s"],["We ___ from Valparaíso.","are|'re"],["It ___ cold today.","is|'s"]]},
  {t:"mcq", title:"Choose the pronoun", items:[
    ["<u>Camila</u> is my classmate. → ___ is my classmate.",["He","She","It"],1],
    ["<u>The anchor</u> is heavy. → ___ is heavy.",["It","They","He"],0],
    ["<u>Diego and I</u> are friends. → ___ are friends.",["They","You","We"],2],
    ["<u>The boats</u> are blue. → ___ are blue.",["It","They","We"],1],
    ["<u>Mr. Soto</u> is a teacher. → ___ is a teacher.",["He","She","It"],0]]},
  {t:"game", title:"Sentence Race 🏁", rules:["El profesor saca una tarjeta.","Cada equipo escribe una oración afirmativa con To Be usando ese sujeto.","Primera oración correcta en la pizarra = 1 punto."],
    cards:["I","My mother","The sea","Chile","We","My best friend","The students","You","The captain","It","They","Valparaíso"]},
  {t:"speak", title:"Introduce a classmate", task:"Presenta a tu compañero/a al curso con 3 oraciones con To Be.", min:5,
    frame:["This is ___.","He/She is ___ years old.","He/She is from ___.","He/She is in 1° Medio ___."]},
  {t:"exit", items:["Escribe 3 oraciones sobre ti con <b>I'm</b>.","Escribe 1 oración con <b>he/she is</b> sobre un familiar.","¿Cuál es la diferencia entre <i>tengo 15 años</i> en español e inglés?"]}
  ]},

{ title:"Verb To Be — Negative & Questions", tema:"isn't / aren't · Am I…? Is she…? · respuestas cortas", min:90,
  obj:"Formular oraciones negativas, preguntas y respuestas cortas con el verbo To Be.",
  can:["Negar información con isn't / aren't / 'm not.","Hacer preguntas invirtiendo sujeto y verbo.","Responder con respuestas cortas: Yes, I am / No, he isn't."],
  slides:[
  {t:"warm", title:"Yes or No?", intro:"Responde de pie (Yes) o sentado (No):", items:["Are you 15 years old?","Is Valparaíso in Chile?","Is the teacher from England?","Are we in the classroom?","Is it Monday today?"]},
  {t:"tbl", title:"Negative form", head:["Long form","Short form","Example"], rows:[
    ["I am not","I'm not","I'm not tired."],["He / She / It is not","isn't","The ship isn't old."],["You / We / They are not","aren't","They aren't sailors."]],
    note:"⚠️ No existe <s>amn't</s>. Siempre: <b>I'm not</b>."},
  {t:"tbl", title:"Questions & Short Answers", intro:"Para preguntar, el verbo va <b>antes</b> del sujeto:", head:["Question","✅ Yes","❌ No"], rows:[
    ["Am I late?","Yes, you are.","No, you aren't."],["Is she your sister?","Yes, she is.","No, she isn't."],
    ["Is it a boat?","Yes, it is.","No, it isn't."],["Are they students?","Yes, they are.","No, they aren't."]],
    note:"En la respuesta corta afirmativa <b>no se contrae</b>: Yes, I am ✅ / <s>Yes, I'm</s> ❌"},
  {t:"order", title:"Make the questions", items:["Is your father a fisherman?","Are you from Valparaíso?","Is the port near the school?","Are they in the same class?"]},
  {t:"gap", title:"Complete the short answers", items:[
    ["Are you a student? — Yes, I ___.","am"],["Is your mom a teacher? — No, she ___.","isn't|is not"],
    ["Are the boats red? — Yes, they ___.","are"],["Is it hot today? — No, it ___.","isn't|is not"],
    ["Am I in the team? — Yes, you ___.","are"]]},
  {t:"mcq", title:"Correct or incorrect?", items:[
    ["Choose the correct one:",["She not is Chilean.","She isn't Chilean.","She aren't Chilean."],1],
    ["Choose the correct question:",["You are tired?","Are you tired?","Tired you are?"],1],
    ["Choose the correct answer: Is he 15?",["Yes, he's.","Yes, he is.","Yes, is he."],1],
    ["Choose the correct one:",["I amn't ready.","I'm not ready.","I not ready."],1]]},
  {t:"game", title:"Guess Who? 🕵️", rules:["Un estudiante saca una tarjeta en secreto (el profesor se la muestra).","El curso hace preguntas Yes/No con To Be: <i>Is he a singer? Is she Chilean?</i>","Máximo 10 preguntas. ¡Quien adivine gana un punto para su equipo!"],
    cards:["Alexis Sánchez","Shakira","Messi","Taylor Swift","Gabriela Mistral","Pablo Neruda","Spider-Man","Bad Bunny","Arturo Prat","Mon Laferte"]},
  {t:"exit", items:["Escribe 2 oraciones negativas sobre ti.","Escribe 2 preguntas con To Be para tu compañero.","Responde: <i>Are you from Santiago?</i> (respuesta corta)."]}
  ]},

{ title:"Numbers, Age, Days & Dates", tema:"Números 1–100 · ordinales · días, meses, estaciones · fechas", min:90,
  obj:"Usar números, ordinales, días y meses para expresar edad, fechas y cumpleaños.",
  can:["Decir números hasta el 100 y mi edad.","Nombrar días, meses y estaciones.","Decir una fecha: <i>on March 3rd</i>."],
  slides:[
  {t:"warm", title:"Count fast!", intro:"Contamos en cadena por el curso. ¡Quien se equivoca se sienta!", items:["1 → 20","Count by 10s: 10, 20 … 100","Count by 5s: 5, 10 … 50","Backwards: 20 → 1"]},
  {t:"exp", title:"Tricky numbers", html:"<div class='cols'><div class='rule'><b>-teen</b> (acento al final)<br>13 thir<b>TEEN</b> · 14 four<b>TEEN</b><br>15 fif<b>TEEN</b> · 18 eigh<b>TEEN</b></div><div class='rule'><b>-ty</b> (acento al inicio)<br>30 <b>THIR</b>ty · 40 <b>FOR</b>ty<br>50 <b>FIF</b>ty · 80 <b>EIGH</b>ty</div></div><div class='ex'>21 twenty-one · 35 thirty-five · 99 ninety-nine · 100 one hundred</div><div class='tip'>⚠️ <b>forty</b> se escribe sin <i>u</i> (no <s>fourty</s>).</div>"},
  {t:"tbl", title:"Days, Months & Seasons", head:["Days","Months","Seasons in Chile 🇨🇱"], rows:[
    ["Monday · Tuesday","January · February · March","☀️ Summer: Dec – Feb"],["Wednesday · Thursday","April · May · June","🍂 Autumn: Mar – May"],
    ["Friday · Saturday","July · August · September","❄️ Winter: Jun – Aug"],["Sunday","October · November · December","🌸 Spring: Sep – Nov"]],
    note:"En inglés días y meses van con <b>MAYÚSCULA</b>: <i>Monday, March</i>."},
  {t:"tbl", title:"Ordinal numbers & dates", head:["Number","Ordinal","Date"], rows:[
    ["1","first (1st)","on May 1st"],["2","second (2nd)","on June 2nd"],["3","third (3rd)","on September 3rd"],["4","fourth (4th)","on July 4th"],["21","twenty-first (21st)","on May 21st"]],
    note:"Cumpleaños: <b>My birthday is on</b> + mes + ordinal → <i>My birthday is on October 12th.</i>"},
  {t:"match", title:"Match the numbers", pairs:[["13","thirteen"],["30","thirty"],["15","fifteen"],["50","fifty"],["18","eighteen"],["80","eighty"]]},
  {t:"mcq", title:"Dates in Chile", items:[
    ["Chile's Independence Day:",["September 18th","May 21st","December 25th"],0],
    ["Día de las Glorias Navales (Arturo Prat):",["October 12th","May 21st","January 1st"],1],
    ["July is in…",["summer","winter","spring"],1],
    ["The day after Tuesday is…",["Thursday","Monday","Wednesday"],2],
    ["'Twenty-third' is…",["23rd","32nd","20th"],0]]},
  {t:"game", title:"Birthday Line 🎂", rules:["Sin hablar español, ordénense en fila según su cumpleaños (enero → diciembre).","Solo pueden preguntar: <i>When is your birthday?</i>","Luego cada uno dice: <i>My birthday is on ___</i>. ¡Comprobamos el orden!"],
    cards:["When is your birthday?","How old are you?","What day is it today?","What's the date today?","What's your favourite month?","What season is it now?"]},
  {t:"exit", items:["Escribe tu edad y tu cumpleaños en inglés (con palabras).","Escribe en letras: 14, 40, 67, 99.","¿Qué estación es diciembre en Chile? ¿Y en EE.UU.?"]}
  ]},

{ title:"WH- Questions & Personal Information", tema:"What, Where, Who, When, How old · países y nacionalidades", min:90,
  obj:"Pedir y dar información personal usando preguntas WH- con To Be, incluyendo nacionalidad.",
  can:["Usar What, Where, Who, When, How old.","Decir países y nacionalidades.","Completar una ficha de datos personales."],
  slides:[
  {t:"warm", title:"Where are they from?", intro:"Di el país y la nacionalidad:", items:[["🇨🇱 Alexis Sánchez","Chile – Chilean"],["🇦🇷 Messi","Argentina – Argentinian"],["🇺🇸 Taylor Swift","the USA – American"],["🇬🇧 Harry Styles","the UK – British"],["🇯🇵 Goku","Japan – Japanese"],["🇧🇷 Neymar","Brazil – Brazilian"]]},
  {t:"tbl", title:"WH- Questions", head:["Word","Meaning","Example question","Answer"], rows:[
    ["What","qué / cuál","What's your name?","I'm Sofía."],["Where","dónde","Where are you from?","I'm from Chile."],
    ["Who","quién","Who is your teacher?","Mr. Soto."],["When","cuándo","When is your birthday?","On May 5th."],
    ["How old","qué edad","How old are you?","I'm 15."],["What … number","número","What's your phone number?","9-8765-4321"]],
    note:"Estructura: <b>WH-word + be + subject?</b> → Where <b>are you</b> from?"},
  {t:"exp", title:"Personal information", html:"<div class='cols'><div class='rule'>📧 <b>Email</b>: mati.rojas<b>@</b>imv<b>.</b>cl<br>→ “mati <b>dot</b> rojas <b>at</b> imv <b>dot</b> c-l”</div><div class='rule'>📱 <b>Phone</b>: 9 8765 4321<br>→ “nine, eight-seven-six-five…”<br>0 = <b>“oh”</b> o <b>“zero”</b></div></div><div class='ex'>A: What's your surname? — B: It's Rojas.<br>A: What's your address? — B: It's 25 Prat Street, Valparaíso.</div>"},
  {t:"mcq", title:"Choose the right question word", items:[
    ["___ is your best friend? — Carla.",["Where","Who","When"],1],["___ are you from? — Viña del Mar.",["Where","What","How old"],0],
    ["___ is your favourite color? — Blue.",["Who","When","What"],2],["___ is your sister? — She's 12.",["How old","Where","Who"],0],
    ["___ is the test? — On Friday.",["What","When","Who"],1]]},
  {t:"gap", title:"Complete the nationalities", items:[
    ["Neruda is from Chile. He is ___.","Chilean"],["Shakira is from Colombia. She is ___.","Colombian"],
    ["Pelé was from Brazil. He was ___.","Brazilian"],["Ed Sheeran is from England. He is ___.","English|British"],
    ["Ramen is from Japan. It is ___.","Japanese"]]},
  {t:"speak", title:"Student ID card 🪪", task:"Entrevista a un compañero y completa su ficha. Luego cambien roles.", min:6,
    frame:["What's your full name?","How old are you?","Where are you from?","When is your birthday?","What's your email / phone number?"]},
  {t:"game", title:"Hot Seat 🔥", rules:["Un estudiante se sienta frente al curso (usa el 🎲 selector).","El curso le hace preguntas WH- de la tarjeta.","Debe responder con oración completa. ¡Cada respuesta correcta = 1 punto!"],
    cards:["What's your favourite food?","Where are you from?","Who is your hero?","When is your birthday?","How old is your best friend?","What's your favourite app?","Who is your favourite singer?","Where is your house?"]},
  {t:"exit", items:["Escribe 3 preguntas WH- con su respuesta.","¿Cuál es la nacionalidad de alguien de Perú, Japón y EE.UU.?","Escribe tu correo deletreado como se dice en inglés."]}
  ]}
]},

/* ───────────── UNIDAD 2 ───────────── */
{ n:2, icon:"👨‍👩‍👧", title:"My Family and Me", desc:"Posesivos, familia, have/has, demostrativos y descripciones",
lessons:[

{ title:"Possessive Adjectives & 's", tema:"my, your, his, her, its, our, their · Carlos's book", min:90,
  obj:"Expresar posesión usando adjetivos posesivos y el apóstrofe 's.",
  can:["Usar my, your, his, her, its, our, their.","Indicar posesión con 's (Ana's bag).","Distinguir 's posesivo de 's = is."],
  slides:[
  {t:"warm", title:"Whose is it?", intro:"El profesor toma objetos de estudiantes. ¿De quién es?", items:["Whose pencil case is this?","Whose phone is this?","Whose notebook is this?"], note:"Respuesta modelo: <i>It's Ana's.</i> / <i>It's my pencil case.</i>"},
  {t:"tbl", title:"Subject pronouns → Possessive adjectives", head:["Pronoun","Possessive","Example"], rows:[
    ["I","my","This is my backpack."],["you","your","Is this your phone?"],["he","his","His name is Diego."],["she","her","Her mother is a nurse."],
    ["it","its","The ship and its captain."],["we","our","Our school is IMV."],["they","their","Their house is in Cerro Alegre."]],
    note:"⚠️ En español <i>su</i> sirve para todo. En inglés depende del dueño: <b>his</b> (de él), <b>her</b> (de ella), <b>their</b> (de ellos)."},
  {t:"exp", title:"Apostrophe 's", html:"<div class='rule'><b>Owner + 's + thing</b><br>Carlos<b>'s</b> book = el libro de Carlos<br>my sister<b>'s</b> name = el nombre de mi hermana</div><div class='rule'><b>Plural owners (-s) → s'</b><br>my parents<b>'</b> car · the students<b>'</b> classroom</div><div class='tip'>🔍 <b>'s</b> puede ser <b>posesión</b> o <b>is</b>:<br><i>Ana's tall</i> = Ana <b>is</b> tall · <i>Ana's bag</i> = la mochila de Ana</div>"},
  {t:"mcq", title:"Choose the possessive", items:[
    ["Diego loves ___ dog.",["her","his","their"],1],["Camila and Sofía are with ___ mother.",["their","her","our"],0],
    ["We love ___ school.",["their","your","our"],2],["The ship is old. ___ engine is new.",["It's","Its","His"],1],
    ["Is this ___ pen, Mrs. Pérez?",["you","your","yours"],1]]},
  {t:"gap", title:"Write with 's", items:[
    ["the bike of Martín → ___ bike","Martín's"],["the car of my father → my ___ car","father's"],
    ["the room of my brothers → my ___ room","brothers'"],["the cat of Valentina → ___ cat","Valentina's"]]},
  {t:"tf", title:"'s = is or possession?", items:[
    ["In <i>Pedro's tall</i>, 's = is.",true],["In <i>Pedro's house</i>, 's = is.",false],["In <i>She's my friend</i>, 's = is.",true],["In <i>My mom's car is red</i>, 's = is.",false]]},
  {t:"game", title:"Lost & Found 🎒", rules:["Cada estudiante deja un objeto en una caja.","El profesor saca uno: el equipo debe adivinar <i>It's ___'s pencil!</i>","Si aciertan, el dueño confirma: <i>Yes, it's my pencil!</i> = 1 punto."],
    cards:["pencil","eraser","notebook","sharpener","ruler","pen","key","cap"]},
  {t:"exit", items:["Escribe 3 oraciones con his / her / their.","Traduce: <i>la mochila de mi hermano</i>.","¿Es posesión o is? <i>Tomás's happy</i>."]}
  ]},

{ title:"My Family", tema:"Familia nuclear y extendida · árbol genealógico", min:90,
  obj:"Nombrar y describir a los miembros de la familia usando To Be y posesivos.",
  can:["Nombrar familiares (nuclear y extendida).","Explicar relaciones: <i>Ana is my mother's sister</i>.","Presentar mi familia oralmente."],
  slides:[
  {t:"warm", title:"Family riddles", intro:"¿Quién es?", items:[["My mother's mother is my…","grandmother"],["My father's brother is my…","uncle"],["My aunt's son is my…","cousin"],["My sister's daughter is my…","niece"],["My brother's son is my…","nephew"]]},
  {t:"tbl", title:"Family vocabulary", head:["Male 👨","Female 👩","Both"], rows:[
    ["father / dad","mother / mom","parents"],["brother","sister","siblings"],["grandfather","grandmother","grandparents"],
    ["son","daughter","children"],["uncle","aunt","cousin"],["nephew","niece","relatives"],["husband","wife","—"]],
    note:"⚠️ <b>parents</b> = padres (papá y mamá). <b>Relatives</b> = parientes."},
  {t:"read", title:"Camila's family", text:"Hi! I'm Camila and I'm 15. My <b>father</b> is Rodrigo. He's a port worker in Valparaíso. My <b>mother</b> is Paula; she's a nurse. I have one <b>brother</b>, Benja. He's 10. My <b>grandparents</b> live with us. My <b>grandmother</b> Rosa is a great cook! My <b>aunt</b> Carla is my mom's sister. Her children are my <b>cousins</b>, Tomás and Isi.",
    items:[["How old is Camila?","She's 15."],["What is her father's job?","He's a port worker."],["Who is Paula?","Camila's mother (a nurse)."],["Who are Tomás and Isi?","Camila's cousins."]]},
  {t:"match", title:"Match the relationship", pairs:[["Rodrigo","Camila's father"],["Benja","Camila's brother"],["Rosa","Camila's grandmother"],["Carla","Paula's sister"],["Tomás","Carla's son"]]},
  {t:"gap", title:"Complete the family", items:[
    ["My father's sister is my ___.","aunt"],["My uncle's daughter is my ___.","cousin"],["My parents' parents are my ___.","grandparents"],
    ["My mother's husband is my ___.","father|dad"],["I am my grandmother's ___.","grandson|granddaughter","depende de ti"]]},
  {t:"speak", title:"Family tree presentation", task:"Dibuja tu árbol (real o inventado) y preséntalo a tu grupo en 1 minuto.", min:8,
    frame:["This is my family.","My mother's name is ___. She is ___ years old.","I have ___ brothers/sisters.","My favourite relative is ___ because ___."]},
  {t:"exit", items:["Escribe 5 palabras de familia (masculino y femenino).","¿Quién es <i>my father's mother</i>?","Escribe 2 oraciones sobre tu familia."], home:"Trae una foto o dibujo de tu familia para la próxima clase."}
  ]},

{ title:"Have / Has — Have got", tema:"Posesión · afirmativo, negativo, preguntas", min:90,
  obj:"Expresar posesión y relaciones con have/has y have got en sus tres formas.",
  can:["Usar have con I/you/we/they y has con he/she/it.","Negar con don't have / doesn't have.","Preguntar: Do you have…? / Does she have…?"],
  slides:[
  {t:"warm", title:"Stand up if…", intro:"Ponte de pie si es verdad para ti:", items:["I have a dog.","I have two brothers.","I have a bike.","I have a Spotify account.","I have green eyes."]},
  {t:"tbl", title:"Have / Has", head:["","Affirmative","Negative","Question"], rows:[
    ["I / You / We / They","have","don't have","Do you have…?"],["He / She / It","<span class='hl'>has</span>","doesn't have","Does she have…?"]],
    note:"Después de <b>doesn't / does</b>, vuelve <b>have</b>: She doesn't <b>have</b> ✅ / <s>She doesn't has</s> ❌"},
  {t:"exp", title:"Have got (British English)", html:"<div class='cols'><div class='rule'><b>+</b> I<b>'ve got</b> a cat.<br>She<b>'s got</b> a phone.</div><div class='rule'><b>−</b> I <b>haven't got</b> a car.<br>He <b>hasn't got</b> a bike.</div></div><div class='rule'><b>?</b> <b>Have</b> you <b>got</b> a pen? — Yes, I have. / No, I haven't.<br><b>Has</b> he <b>got</b> brothers? — Yes, he has.</div><div class='tip'>Significa lo mismo que have/has. Es muy común en el Reino Unido.</div>"},
  {t:"mcq", title:"have or has?", items:[
    ["My brother ___ a new phone.",["have","has","haves"],1],["We ___ English on Monday.",["has","have","having"],1],
    ["She doesn't ___ a pet.",["has","have","had"],1],["___ your father have a car?",["Do","Does","Is"],1],
    ["The ship ___ two engines.",["has","have","is"],0]]},
  {t:"gap", title:"Complete", items:[
    ["I ___ a big family.","have|'ve got"],["Matías ___ (not) a bike.","doesn't have|does not have|hasn't got"],
    ["___ you have a pen?","Do"],["They ___ a house near the sea.","have|'ve got"],["Does she have a sister? — No, she ___.","doesn't|does not"]]},
  {t:"game", title:"Find someone who… 🔎", rules:["Circula por la sala con tu cuaderno.","Pregunta <i>Do you have…?</i> Si responde <i>Yes, I do</i>, escribe su nombre.","El primero en completar 6 nombres grita <b>BINGO!</b>"],
    cards:["…has a cat","…has three siblings","…has a skateboard","…has a TikTok account","…has a grandmother in the south","…has blue sneakers","…has a guitar","…has a fish"]},
  {t:"exit", items:["Escribe 2 cosas que tienes y 1 que no tienes.","Escribe una oración con <b>has</b> sobre un familiar.","Corrige: <i>She don't has a bike.</i>"]}
  ]},

{ title:"This / That / These / Those & Everyday Objects", tema:"Demostrativos · objetos del aula y la casa", min:90,
  obj:"Identificar objetos cotidianos usando demostrativos según distancia y número.",
  can:["Usar this/these (cerca) y that/those (lejos).","Nombrar objetos del aula y la mochila.","Preguntar <i>What's this? / What are those?</i>"],
  slides:[
  {t:"warm", title:"What's in your backpack?", intro:"En 1 minuto, escribe todo lo que hay en tu mochila en inglés. ¿Quién tiene más?", items:[["Ideas","pencil case, notebook, ruler, eraser, charger, keys, wallet, water bottle"]]},
  {t:"tbl", title:"Demonstratives", head:["","Near 👇 (aquí)","Far 👉 (allá)"], rows:[
    ["Singular","<b>this</b> book","<b>that</b> ship"],["Plural","<b>these</b> books","<b>those</b> ships"]],
    note:"Preguntas: <b>What's this?</b> — It's a compass. · <b>What are those?</b> — They're anchors."},
  {t:"exp", title:"Everyday objects", html:"<div class='cols'><div class='rule'>🏫 <b>Classroom</b><br>board · desk · chair · marker · projector · window · door · map</div><div class='rule'>🎒 <b>Backpack</b><br>notebook · pencil case · ruler · eraser · sharpener · charger · keys · wallet</div></div><div class='ex'><b>This</b> is my charger. <b>Those</b> are your keys. <b>Is that</b> your wallet?</div>"},
  {t:"mcq", title:"Choose the demonstrative", items:[
    ["👇 ___ is my pen.",["This","These","Those"],0],["👉 ___ boats are beautiful.",["This","That","Those"],2],
    ["👇 ___ shoes are new.",["These","That","This"],0],["👉 Is ___ your house over there?",["these","that","those"],1],
    ["What are ___? (lejos)",["this","that","those"],2]]},
  {t:"gap", title:"Singular → Plural", items:[
    ["This is a chair. → These are ___.","chairs"],["That is a box. → ___ are boxes.","Those"],
    ["This is a knife. → These are ___.","knives"],["That is a watch. → Those are ___.","watches"]]},
  {t:"game", title:"Mystery Bag 👜", rules:["El profesor pone objetos en una bolsa.","Un estudiante toca un objeto sin mirar y dice: <i>I think this is a ___.</i>","Si acierta, su equipo gana 1 punto."],
    cards:["ruler","eraser","key","marker","coin","charger","sharpener","spoon","sock","glasses"]},
  {t:"speak", title:"Classroom tour", task:"En parejas: uno señala objetos cerca y lejos; el otro responde con this/that/these/those.", min:4,
    frame:["What's this? — It's a ___.","What are those? — They're ___.","Is that your ___? — Yes, it is. / No, it isn't."]},
  {t:"exit", items:["Escribe una oración con cada demostrativo.","Nombra 5 objetos de la sala.","¿Plural de <i>box, knife, watch</i>?"]}
  ]},

{ title:"Physical Descriptions", tema:"Colores y adjetivos · To Be + have got para describir personas", min:90,
  obj:"Describir el aspecto físico de personas usando To Be, have/has got y adjetivos en el orden correcto.",
  can:["Usar adjetivos de altura, contextura, pelo y ojos.","Recordar: adjetivo <b>antes</b> del sustantivo.","Describir a una persona famosa o compañero."],
  slides:[
  {t:"warm", title:"Colors quick quiz", intro:"¿De qué color es…?", items:[["The sea","blue"],["The Chilean flag","red, white and blue"],["A banana","yellow"],["Grass","green"],["Valparaíso houses","many colors: pink, orange, purple…"]]},
  {t:"tbl", title:"Describing people", head:["Use…","Category","Words"], rows:[
    ["He <b>is</b>…","Height","tall · short · medium height"],["She <b>is</b>…","Build","slim · thin · strong · well-built"],
    ["He <b>has (got)</b>…","Hair","long · short · curly · straight · wavy · blond · dark · red"],
    ["She <b>has (got)</b>…","Eyes","brown · blue · green · big"],["He <b>has</b>…","Other","a beard · a moustache · glasses · freckles"]]},
  {t:"exp", title:"Adjective order", html:"<div class='rule'>En inglés el adjetivo va <b>ANTES</b> del sustantivo y <b>no tiene plural</b>.</div><div class='ex'>pelo largo → <b>long hair</b> ✅ <s>hair long</s> ❌<br>ojos verdes → <b>green eyes</b> ✅ <s>greens eyes</s> ❌</div><div class='rule'>Orden: <b>size/length → shape → color</b> + noun<br>She has <b>long curly black</b> hair.</div>"},
  {t:"order", title:"Order the description", items:["She has long curly hair.","He is tall and slim.","My father has short black hair.","Valentina has big brown eyes."]},
  {t:"mcq", title:"Correct or incorrect?", items:[
    ["Choose the correct one:",["He has hair short.","He has short hair.","He is short hair."],1],
    ["Choose the correct one:",["She is tall.","She has tall.","She tall."],0],
    ["Choose the correct one:",["They have blues eyes.","They have blue eyes.","They are blue eyes."],1],
    ["Choose the correct order:",["black long straight hair","long straight black hair","straight black long hair"],1]]},
  {t:"game", title:"Who is it? 🕵️", rules:["El profesor saca una tarjeta y la muestra solo a un estudiante.","Ese estudiante describe a la persona <b>sin decir su nombre</b>.","El equipo que adivine primero gana 1 punto."],
    cards:["Profesor Mau","Messi","Taylor Swift","Harry Potter","Spider-Man","Shrek","a classmate (elige tú)","Mr. Bean","Wednesday Addams","Goku"]},
  {t:"speak", title:"Describe your hero", task:"Describe a un familiar o persona que admires (3–5 oraciones) a tu compañero.", min:5,
    frame:["My hero is ___.","He/She is (tall / short / slim…).","He/She has (long / short / curly…) ___ hair and ___ eyes.","He/She is (kind / funny / strong)."]},
  {t:"exit", items:["Descríbete físicamente en 3 oraciones.","Corrige: <i>She has eyes greens.</i>","Escribe 5 colores en inglés."]}
  ]}
]},

/* ───────────── UNIDAD 3 ───────────── */
{ n:3, icon:"🕐", title:"My Routine & Daily Life", desc:"Present Simple, frecuencia, la hora y preposiciones de tiempo",
lessons:[

{ title:"Present Simple — Daily Routines", tema:"I / you / we / they · verbos de rutina", min:90,
  obj:"Describir rutinas diarias usando el Present Simple con I, you, we y they.",
  can:["Nombrar 15 acciones de la rutina diaria.","Formar oraciones afirmativas en Present Simple.","Ordenar mi rutina con first, then, after that."],
  slides:[
  {t:"warm", title:"Mime the action 🎭", intro:"El profesor hace la mímica; ¿qué acción es?", items:[["😴→😳","wake up"],["🚿","take a shower"],["🪥","brush my teeth"],["👕","get dressed"],["🥣","have breakfast"],["🚌","take the bus / go to school"]]},
  {t:"exp", title:"Present Simple: uses", html:"<div class='rule'>Usamos Present Simple para <b>rutinas, hábitos y hechos</b>.</div><div class='ex'>I <b>get up</b> at 6:30.<br>We <b>have</b> English on Tuesdays.<br>They <b>live</b> in Valparaíso.<br>Ships <b>arrive</b> at the port every day.</div><div class='tip'>Con <b>I, you, we, they</b> el verbo queda en su forma base: <i>I play, they study</i>.</div>"},
  {t:"tbl", title:"Daily routine verbs", head:["Morning ☀️","Afternoon 🌤️","Evening 🌙"], rows:[
    ["wake up / get up","have lunch","have dinner"],["take a shower","go home","do homework"],["get dressed","study","watch TV / series"],
    ["have breakfast","do sports","use my phone"],["go to school","help at home","go to bed"]]},
  {t:"order", title:"Order the sentences", items:["I wake up at seven o'clock.","We have lunch at school.","They go to bed at eleven.","I take the bus to Valparaíso."]},
  {t:"mcq", title:"Sequence words", intro:"Para ordenar la rutina usamos <b>First → Then → After that → Finally</b>.", items:[
    ["___, I wake up. Then I take a shower.",["Finally","First","After"],1],["I have breakfast. ___ I brush my teeth.",["Then","First","Before"],0],
    ["___, I go to bed at 11 p.m.",["First","Then","Finally"],2],["Which is NOT a routine verb?",["get dressed","have dinner","beautiful"],2]]},
  {t:"speak", title:"My morning in 30 seconds", task:"Cuenta tu mañana a tu compañero en orden. Él/ella toma nota y la repite al curso.", min:5,
    frame:["First, I wake up at ___.","Then, I ___.","After that, I ___.","Finally, I go to school by ___."]},
  {t:"game", title:"Chain routine 🔗", rules:["Estudiante 1 dice una acción: <i>I wake up.</i>","Estudiante 2 repite y agrega: <i>I wake up and I take a shower.</i>","¡Quien olvida una acción queda fuera!"],
    cards:["Start: I wake up…","Start: I go home…","Start: I get to school…","Start: On Saturdays I…"]},
  {t:"exit", items:["Escribe 5 oraciones sobre tu rutina con First, Then, After that, Finally.","¿A qué hora te levantas? (en inglés)."]}
  ]},

{ title:"Present Simple — Third Person", tema:"He / She / It + -s / -es / -ies · has, does, goes", min:90,
  obj:"Describir la rutina de otras personas aplicando las reglas de la tercera persona singular.",
  can:["Agregar -s, -es o -ies correctamente.","Recordar los irregulares: has, does, goes.","Contar la rutina de un familiar o trabajador marítimo."],
  slides:[
  {t:"warm", title:"Spot the difference", intro:"¿Qué cambia?", items:[["I work at the port. → He ___ at the port.","works"],["I watch TV. → She ___ TV.","watches"],["I study. → My sister ___.","studies"],["I have lunch. → He ___ lunch.","has"]]},
  {t:"tbl", title:"Spelling rules — he / she / it", head:["Rule","Verb","3rd person"], rows:[
    ["Most verbs + <b>s</b>","work · play · eat","works · plays · eats"],["-s, -sh, -ch, -x, -o + <b>es</b>","watch · wash · go · do · fix","watches · washes · goes · does · fixes"],
    ["consonant + y → <b>ies</b>","study · fly · carry","studies · flies · carries"],["vowel + y → <b>s</b>","play · buy","plays · buys"],["Irregular","have","<span class='hl'>has</span>"]]},
  {t:"read", title:"A day in the life of a ship captain", text:"Captain Rosa Muñoz <b>works</b> on a cargo ship. She <b>gets up</b> at 5:30 a.m. and <b>checks</b> the weather. Then she <b>has</b> breakfast with the crew. She <b>studies</b> the maps and <b>talks</b> to the port by radio. In the afternoon she <b>watches</b> the engines with the engineer. She <b>goes</b> to bed at 10 p.m.",
    items:[["What time does she get up?","At 5:30 a.m."],["What does she check?","The weather."],["Who does she talk to by radio?","The port."],["When does she go to bed?","At 10 p.m."]]},
  {t:"gap", title:"Write the verb (he/she/it)", items:[
    ["My brother ___ football on Saturdays.","plays","play"],["She ___ English at IMV.","studies","study"],["The ship ___ at 8 a.m.","leaves","leave"],
    ["My mom ___ the dishes.","washes","wash"],["He ___ his homework at night.","does","do"],["Benja ___ a dog.","has","have"]]},
  {t:"mcq", title:"Correct or incorrect?", items:[
    ["Choose the correct one:",["She watchs TV.","She watches TV.","She watch TV."],1],["Choose the correct one:",["He gos to school.","He goes to school.","He go to school."],1],
    ["Choose the correct one:",["My dad haves a car.","My dad has a car.","My dad have a car."],1],["Choose the correct one:",["It flys.","It flies.","It fly."],1]]},
  {t:"speak", title:"Interview & report", task:"Pregunta a tu compañero sobre su rutina y luego cuéntala al curso en 3ª persona.", min:6,
    frame:["What time do you get up?","How do you go to school?","What do you do in the afternoon?","→ <b>He/She</b> get<b>s</b> up at ___. He/She go<b>es</b> to school by ___."]},
  {t:"exit", items:["Escribe la 3ª persona de: watch, study, play, go, have.","Escribe 3 oraciones sobre la rutina de un familiar."]}
  ]},

{ title:"Present Simple — Negatives & Questions", tema:"don't / doesn't · Do / Does…? · respuestas cortas", min:90,
  obj:"Formular oraciones negativas, preguntas y respuestas cortas en Present Simple.",
  can:["Usar don't / doesn't + verbo base.","Preguntar con Do / Does.","Responder: Yes, I do / No, she doesn't."],
  slides:[
  {t:"warm", title:"True for you?", intro:"Di <i>That's true</i> o <i>That's false</i> y corrige:", items:["I play the guitar.","I live near the sea.","I eat sushi.","I speak French."], note:"Modelo: <i>That's false. I don't speak French.</i>"},
  {t:"tbl", title:"Negative & Question forms", head:["Subject","Negative","Question","Short answers"], rows:[
    ["I / you / we / they","don't + verb","<b>Do</b> you play…?","Yes, I do. / No, I don't."],
    ["he / she / it","doesn't + verb","<b>Does</b> she play…?","Yes, she does. / No, she doesn't."]],
    note:"La -s se va al auxiliar: She <b>plays</b> → She <b>doesn't play</b> → <b>Does</b> she <b>play</b>? ✅ <s>Does she plays?</s> ❌"},
  {t:"exp", title:"WH- questions in Present Simple", html:"<div class='rule'><b>WH- + do/does + subject + verb?</b></div><div class='ex'>What time <b>do</b> you <b>get</b> up?<br>Where <b>does</b> your father <b>work</b>?<br>How <b>do</b> they <b>go</b> to school?<br>What <b>does</b> she <b>do</b> on weekends?</div>"},
  {t:"gap", title:"Make it negative", items:[
    ["I like fish. → I ___ fish.","don't like|do not like"],["She works on Sundays. → She ___ on Sundays.","doesn't work|does not work"],
    ["They live in Santiago. → They ___ in Santiago.","don't live|do not live"],["He has a car. → He ___ a car.","doesn't have|does not have"]]},
  {t:"order", title:"Make the questions", items:["Do you like reggaeton?","Does your mother work at the port?","What time does the class start?","Where do they live?"]},
  {t:"mcq", title:"Short answers", items:[
    ["Do you speak English? (✅)",["Yes, I do.","Yes, I speak.","Yes, I am."],0],["Does Pedro play football? (❌)",["No, he don't.","No, he doesn't.","No, he isn't."],1],
    ["Do your parents work? (✅)",["Yes, they does.","Yes, they are.","Yes, they do."],2],["Does the ship arrive today? (❌)",["No, it doesn't.","No, it isn't.","No, it don't."],0]]},
  {t:"game", title:"Find someone who… 🔍", rules:["Pregunta con <i>Do you…?</i> a distintos compañeros.","Escribe el nombre de quien diga <i>Yes, I do</i>.","Después reporta: <i>Carla plays the piano. Pedro doesn't eat meat.</i>"],
    cards:["…plays an instrument","…speaks another language","…walks to school","…cooks at home","…watches anime","…gets up before 6","…doesn't like chocolate","…has breakfast every day"]},
  {t:"exit", items:["Escribe 2 oraciones negativas sobre ti y 1 sobre un familiar.","Escribe 2 preguntas con Do/Does.","Corrige: <i>Does she likes pizza?</i>"]}
  ]},

{ title:"Adverbs of Frequency, Chores & Free Time", tema:"always → never · posición · tareas del hogar y tiempo libre", min:90,
  obj:"Expresar con qué frecuencia se realizan tareas del hogar y actividades de tiempo libre.",
  can:["Ordenar los adverbios de always a never.","Ubicarlos antes del verbo y después de To Be.","Preguntar: How often do you…?"],
  slides:[
  {t:"warm", title:"How often…?", intro:"Levanta los dedos: 5 = siempre, 0 = nunca", items:["…do you make your bed?","…do you play video games?","…do you wash the dishes?","…do you go to the beach?"]},
  {t:"tbl", title:"Adverbs of frequency", head:["%","Adverb","Example"], rows:[
    ["100%","always","I always have breakfast."],["90%","usually","She usually walks to school."],["70%","often","We often play football."],
    ["50%","sometimes","I sometimes cook."],["10%","rarely / hardly ever","He rarely cleans his room."],["0%","never","They never wash the car."]]},
  {t:"exp", title:"Position", html:"<div class='cols'><div class='rule'><b>Before</b> the main verb<br>I <b>always</b> make my bed.<br>She <b>never</b> does the dishes.</div><div class='rule'><b>After</b> To Be<br>I'm <b>always</b> tired on Mondays.<br>He is <b>never</b> late.</div></div><div class='ex'><b>Chores:</b> make the bed · do the dishes · take out the trash · sweep the floor · do the laundry · feed the pet<br><b>Free time:</b> play video games · hang out with friends · go to the beach · listen to music · skate</div><div class='tip'>Expresiones al final: once a week · twice a month · every day · on weekends</div>"},
  {t:"order", title:"Put the adverb in place", items:["I never take out the trash.","She is always happy.","We usually go to the beach on Sundays.","My brother sometimes cooks dinner."]},
  {t:"mcq", title:"Choose the correct sentence", items:[
    ["",["I go always to the gym.","I always go to the gym.","Always I go to the gym."],1],["",["He never is late.","He is never late.","Never he is late."],1],
    ["",["They often play video games.","They play often video games.","Often they play video games."],0],["Which means 0%?",["rarely","sometimes","never"],2]]},
  {t:"game", title:"Survey: Chores in our class 📊", rules:["En grupos de 4, pregunten <i>How often do you…?</i> por cada tarjeta.","Registren las respuestas en una tabla.","Reporten: <i>Two students always make their bed. Nobody does the laundry!</i>"],
    cards:["make your bed","do the dishes","take out the trash","clean your room","cook","feed your pet","do the laundry","help your parents"]},
  {t:"speak", title:"My perfect weekend", task:"Cuenta qué haces normalmente el fin de semana usando 4 adverbios distintos.", min:4,
    frame:["On Saturdays I usually ___.","I sometimes ___ with my friends.","I never ___.","I always ___ on Sundays."]},
  {t:"exit", items:["Escribe 4 oraciones sobre tareas del hogar con 4 adverbios distintos.","¿Dónde va el adverbio con To Be? Da un ejemplo."]}
  ]},

{ title:"Telling the Time & Prepositions of Time", tema:"La hora · at / in / on · asignaturas y horario", min:90,
  obj:"Decir la hora y usar at, in y on para hablar del horario escolar y actividades.",
  can:["Decir la hora en dos formas (7:15 = seven fifteen / quarter past seven).","Usar at (horas), on (días/fechas), in (meses/años/partes del día).","Describir mi horario de clases."],
  slides:[
  {t:"warm", title:"What time is it?", intro:"Di la hora:", items:[["🕖 7:00","It's seven o'clock."],["🕢 7:30","It's half past seven / seven thirty."],["🕒 3:15","It's quarter past three / three fifteen."],["🕦 11:45","It's quarter to twelve / eleven forty-five."],["🕗 8:20","It's twenty past eight / eight twenty."]]},
  {t:"exp", title:"Telling the time", html:"<div class='cols'><div class='rule'><b>PAST</b> (minutos 1–30)<br>8:10 → ten <b>past</b> eight<br>8:15 → quarter <b>past</b> eight<br>8:30 → half <b>past</b> eight</div><div class='rule'><b>TO</b> (minutos 31–59)<br>8:40 → twenty <b>to</b> nine<br>8:45 → quarter <b>to</b> nine<br>8:55 → five <b>to</b> nine</div></div><div class='tip'>Forma digital (más fácil): 8:40 → <i>eight forty</i>. a.m. = mañana · p.m. = tarde/noche.</div>"},
  {t:"tbl", title:"Prepositions of time", head:["AT","ON","IN"], rows:[
    ["at 8 o'clock","on Monday","in March"],["at noon / midnight","on May 21st","in 2026"],["at night","on the weekend (US)","in the morning / afternoon / evening"],["at the weekend (UK)","on my birthday","in summer"]],
    note:"Truco 🔺: <b>IN</b> = períodos largos · <b>ON</b> = días · <b>AT</b> = momentos exactos."},
  {t:"gap", title:"at, in or on?", items:[
    ["I have English ___ Tuesday.","on"],["The class starts ___ 8:15.","at"],["My birthday is ___ October.","in"],
    ["We study ___ the afternoon.","in"],["I sleep ___ night.","at"],["Christmas is ___ December 25th.","on"]]},
  {t:"match", title:"School subjects", pairs:[["Matemática","Maths"],["Historia","History"],["Lenguaje","Language / Spanish"],["Educación Física","P.E."],["Ciencias","Science"],["Tecnología","Technology"]]},
  {t:"speak", title:"My timetable", task:"Pregunta a tu compañero por su horario y su asignatura favorita.", min:5,
    frame:["What time does school start?","When do you have English? — On ___ at ___.","What's your favourite subject?","What time do you have lunch?"]},
  {t:"game", title:"Clock Race ⏰", rules:["El profesor saca una hora.","Un estudiante de cada equipo corre a la pizarra y la escribe en palabras.","¡El más rápido y correcto gana!"],
    cards:["6:30","7:15","9:45","12:00","1:20","3:50","4:05","10:40","11:55","5:25"]},
  {t:"exit", items:["Escribe en palabras: 7:45, 2:30, 9:10.","Completa con at/in/on: ___ Friday, ___ 2027, ___ 6 p.m.","¿Cuál es tu asignatura favorita y cuándo la tienes?"]}
  ]}
]},

/* ───────────── UNIDAD 4 ───────────── */
{ n:4, icon:"🗺️", title:"My Town and Directions", desc:"Lugares, there is/are, cantidades, preposiciones, direcciones y compras",
lessons:[

{ title:"Places in Town & There is / There are", tema:"Lugares de la ciudad · hay (singular y plural)", min:90,
  obj:"Describir un barrio o ciudad nombrando lugares con There is / There are.",
  can:["Nombrar 15 lugares de la ciudad.","Usar There is (singular) y There are (plural).","Describir mi barrio o Valparaíso."],
  slides:[
  {t:"warm", title:"Where do you go to…?", intro:"¿A qué lugar vas para…?", items:[["…buy medicine?","the pharmacy / drugstore"],["…take a ship?","the port"],["…see a film?","the cinema"],["…borrow books?","the library"],["…get money?","the bank / ATM"],["…catch a bus?","the bus stop / bus station"]]},
  {t:"exp", title:"Places in town", html:"<div class='cols'><div class='rule'>🏙️ hospital · bank · supermarket · post office · police station · fire station · church · square</div><div class='rule'>⚓ port · harbour · lighthouse · beach · funicular (ascensor) · market · museum · restaurant</div></div><div class='tip'>En Valparaíso: <b>There's a famous funicular</b> on Cerro Concepción!</div>"},
  {t:"tbl", title:"There is / There are", head:["","Singular","Plural"], rows:[
    ["✅","There <b>is</b> (There's) a port.","There <b>are</b> two museums."],["❌","There <b>isn't</b> a cinema.","There <b>aren't</b> any parks."],["❓","<b>Is there</b> a bank? — Yes, there is.","<b>Are there</b> any shops? — No, there aren't."]],
    note:"⚠️ No digas <s>There have</s> ni <s>Have</s> para decir <i>hay</i>."},
  {t:"mcq", title:"is or are?", items:[
    ["There ___ a lighthouse near the port.",["is","are","have"],0],["There ___ many colorful houses in Valparaíso.",["is","are","has"],1],
    ["___ there a hospital in your town?",["Are","Is","Have"],1],["There ___ any cinemas in my neighborhood.",["isn't","aren't","don't"],1],
    ["How do you say <i>Hay un supermercado</i>?",["Have a supermarket.","There is a supermarket.","There are a supermarket."],1]]},
  {t:"read", title:"Valparaíso", text:"Valparaíso is a port city in Chile. <b>There are</b> 42 hills and <b>there are</b> many colorful houses. <b>There is</b> a big port with ships from all over the world. <b>There are</b> old funiculars, museums and a lot of restaurants. <b>There isn't</b> a metro, but <b>there is</b> a train called Merval.",
    items:[["How many hills are there?","42 hills."],["Is there a port?","Yes, there is (a big port)."],["Is there a metro?","No, there isn't."],["What train is there?","Merval."]]},
  {t:"speak", title:"My neighborhood", task:"Describe tu barrio a tu compañero: 3 cosas que hay y 2 que no hay.", min:5,
    frame:["In my neighborhood there is a ___.","There are some ___.","There isn't a ___.","There aren't any ___."]},
  {t:"game", title:"Memory Town 🧠", rules:["El profesor muestra un mapa/imagen 30 segundos y lo oculta.","Los equipos escriben todas las oraciones que recuerden: <i>There is a bank…</i>","1 punto por cada oración correcta."],
    cards:["Imagen 1: city center","Imagen 2: the port","Imagen 3: a small town","Imagen 4: a beach"], note:"💡 Puedes proyectar una foto de Valparaíso desde internet para esta actividad."},
  {t:"exit", items:["Escribe 3 oraciones sobre Valparaíso con There is / There are.","Escribe una pregunta con <i>Is there…?</i> y su respuesta corta."]}
  ]},

{ title:"Some / Any · Countable & Uncountable", tema:"some / any · How many / How much", min:90,
  obj:"Distinguir sustantivos contables e incontables y preguntar por cantidades con some, any, how many y how much.",
  can:["Clasificar sustantivos contables e incontables.","Usar some (+) y any (− y ?).","Preguntar How many…? / How much…?"],
  slides:[
  {t:"warm", title:"Can you count it?", intro:"¿Se puede contar? (1, 2, 3…)", items:[["apples","✅ countable"],["water","❌ uncountable"],["fish (animals)","✅ countable"],["money","❌ uncountable"],["coins","✅ countable"],["rice","❌ uncountable"]]},
  {t:"tbl", title:"Countable vs Uncountable", head:["","Countable 🍎","Uncountable 💧"], rows:[
    ["Examples","a ship, two ships, apples, eggs","water, money, bread, rice, sugar, information"],["Plural?","✅ yes","❌ no (<s>breads, informations</s>)"],
    ["Question","How <b>many</b> ships are there?","How <b>much</b> water is there?"],["A lot","many / a lot of","much / a lot of"]]},
  {t:"exp", title:"Some / Any", html:"<div class='cols'><div class='rule'><b>SOME</b> → affirmative ✅<br>There are <b>some</b> boats.<br>There is <b>some</b> milk.</div><div class='rule'><b>ANY</b> → negative ❌ and questions ❓<br>There aren't <b>any</b> boats.<br>Is there <b>any</b> milk?</div></div><div class='tip'>Excepción: para ofrecer usamos <b>some</b> en preguntas: <i>Would you like some tea?</i></div>"},
  {t:"mcq", title:"some or any?", items:[
    ["There are ___ students in the gym.",["some","any","much"],0],["There isn't ___ bread.",["some","any","many"],1],
    ["Are there ___ restaurants near here?",["some","any","much"],1],["We have ___ water in the bottle.",["any","many","some"],2]]},
  {t:"gap", title:"How many or How much?", items:[
    ["How ___ sugar do you want?","much"],["How ___ brothers do you have?","many"],["How ___ money do you have?","much"],
    ["How ___ ships are in the port?","many"],["How ___ time do we have?","much"]]},
  {t:"game", title:"Shopping list 🛒", rules:["En parejas, uno es cliente y otro dueño de un almacén.","El cliente saca una tarjeta y pregunta: <i>Is there any…? / Are there any…?</i>","El vendedor responde: <i>Yes, there is some… / No, there aren't any…</i>"],
    cards:["milk","eggs","bread","apples","cheese","bananas","rice","tomatoes","juice","cookies"]},
  {t:"speak", title:"What's in your fridge?", task:"Cuenta a tu compañero qué hay y qué no hay en tu refrigerador hoy.", min:4,
    frame:["There is some ___.","There are some ___.","There isn't any ___.","How much / How many ___ are there?"]},
  {t:"exit", items:["Clasifica: water, coin, bread, egg, money, boat.","Escribe 1 oración con some y 1 con any.","Escribe 1 pregunta con How much y 1 con How many."]}
  ]},

{ title:"Prepositions of Place & Articles", tema:"in, on, under, next to, between, opposite… · a / an / the", min:90,
  obj:"Ubicar objetos y lugares usando preposiciones de lugar y los artículos a, an, the.",
  can:["Usar 8 preposiciones de lugar.","Elegir a / an según el sonido.","Usar the para algo ya conocido o único."],
  slides:[
  {t:"warm", title:"Where's the ball?", intro:"El profesor pone un objeto en distintos lugares. ¿Dónde está?", items:[["⚽ en la mesa","on the table"],["⚽ debajo de la silla","under the chair"],["⚽ en la mochila","in the backpack"],["⚽ al lado de la puerta","next to the door"]]},
  {t:"tbl", title:"Prepositions of place", head:["Preposition","Meaning","Example"], rows:[
    ["in","dentro de","The keys are in my bag."],["on","sobre","The book is on the desk."],["under","debajo de","The cat is under the bed."],
    ["next to","al lado de","The bank is next to the church."],["between","entre","The café is between the bank and the school."],
    ["opposite","frente a","The port is opposite the square."],["behind","detrás de","The park is behind the museum."],["in front of","delante de","The bus stop is in front of the school."]]},
  {t:"exp", title:"Articles: a / an / the", html:"<div class='cols'><div class='rule'><b>A</b> + sonido consonante<br>a ship · a university /ju:/ · a big port</div><div class='rule'><b>AN</b> + sonido vocal<br>an anchor · an hour /aʊər/ · an old boat</div></div><div class='rule'><b>THE</b> = algo específico o único<br>I see <b>a</b> ship. <b>The</b> ship is red. · <b>the</b> sea · <b>the</b> sun · <b>the</b> captain of our ship</div><div class='tip'>No usamos <i>the</i> para hablar en general: <i>I like music</i> (no <s>the music</s>).</div>"},
  {t:"mcq", title:"a, an or the?", items:[
    ["I have ___ orange.",["a","an","the"],1],["She is ___ engineer.",["a","an","the"],1],["Look at ___ moon!",["a","an","the"],2],
    ["It's ___ uniform.",["a","an","the"],0],["We wait ___ hour.",["a","an","the"],1]]},
  {t:"gap", title:"Look at the map and complete", intro:"🏦 Bank | ☕ Café | 🏫 School  — 🌳 Park is behind the café — ⚓ Port is opposite the school", items:[
    ["The café is ___ the bank and the school.","between"],["The bank is ___ the café.","next to"],["The park is ___ the café.","behind"],["The port is ___ the school.","opposite"]]},
  {t:"game", title:"Hide & Seek 🙈", rules:["Un estudiante sale de la sala; el curso esconde un objeto.","Al volver, pregunta: <i>Is it under the desk? Is it next to the window?</i>","Encontrarlo en menos de 8 preguntas = 1 punto."],
    cards:["Object: eraser","Object: key","Object: marker","Object: coin","Object: phone (apagado)"]},
  {t:"speak", title:"Draw my room", task:"Describe tu habitación; tu compañero la dibuja sin mirar. Luego comparen.", min:6,
    frame:["There is a bed next to the window.","My desk is opposite the door.","There's a lamp on the desk.","My shoes are under the bed."]},
  {t:"exit", items:["Escribe 3 oraciones sobre tu sala con preposiciones distintas.","a o an: ___ apple, ___ captain, ___ hour, ___ university."]}
  ]},

{ title:"Directions, Imperatives & Can", tema:"turn left, go straight · Can you tell me…? · preposiciones de movimiento", min:90,
  obj:"Pedir y dar indicaciones usando imperativos, can y preposiciones de movimiento.",
  can:["Usar imperativos: turn, go, take, cross.","Pedir ayuda con Can you…? / Excuse me, where is…?","Usar along, across, past, up, down, into."],
  slides:[
  {t:"warm", title:"Simon says 🧭", intro:"Sigue la instrucción solo si empieza con <i>Simon says</i>:", items:["Simon says: turn left!","Simon says: go straight!","Turn right!","Simon says: stop!","Simon says: go back!"]},
  {t:"tbl", title:"Giving directions", head:["Imperative","Meaning"], rows:[
    ["Go straight (on/ahead)","Sigue derecho"],["Turn left / right","Dobla a la izquierda / derecha"],["Take the first/second street on the left","Toma la primera/segunda calle a la izquierda"],
    ["Cross the street","Cruza la calle"],["It's on your left / right","Está a tu izquierda / derecha"],["It's on the corner","Está en la esquina"]],
    note:"Negativo del imperativo: <b>Don't</b> + verb → <i>Don't turn left!</i>"},
  {t:"exp", title:"Asking politely & movement", html:"<div class='rule'>🙋 <b>Excuse me, where is</b> the port?<br><b>Can you tell me</b> how to get to the museum?<br><b>Is there</b> a bank near here?</div><div class='ex'><b>Movement:</b> go <b>along</b> Prat Avenue · walk <b>across</b> the square · go <b>past</b> the church · go <b>up</b> the hill · go <b>down</b> the stairs · go <b>into</b> the building</div><div class='tip'><b>Can</b> = poder / saber: <i>Can you help me? — Yes, I can.</i></div>"},
  {t:"match", title:"Match the symbols", pairs:[["⬆️","go straight"],["⬅️","turn left"],["➡️","turn right"],["🚶‍♂️↔️🛣️","cross the street"],["⛰️⬆️","go up the hill"],["↩️","go back"]]},
  {t:"order", title:"Order the directions", items:["Excuse me, where is the museum?","Go straight and turn left.","Take the second street on the right.","The bank is next to the pharmacy."]},
  {t:"speak", title:"Tourist in Valparaíso 🗺️", task:"Un estudiante es turista; el otro, de Valparaíso. Usen un mapa (real o dibujado) para dar indicaciones.", min:7,
    steps:["Turista: elige un destino (Muelle Prat, Ascensor Concepción, Plaza Sotomayor, IMV…).","Local: da las indicaciones paso a paso.","Cambien roles con un nuevo destino."],
    frame:["Excuse me, can you tell me how to get to ___?","Sure! Go along ___ and turn ___.","Is it far? — No, it's about 5 minutes on foot.","Thank you very much! — You're welcome."]},
  {t:"game", title:"Blind Robot 🤖", rules:["Un estudiante con los ojos vendados es el robot.","Su equipo lo guía en inglés hacia un objeto de la sala: <i>Go straight, stop, turn right…</i>","¡Si llega sin chocar, 1 punto! Solo se permite inglés."],
    cards:["Go to the door","Go to the board","Go to the window","Go to the teacher's desk","Find the trash can"]},
  {t:"exit", items:["Escribe cómo llegar desde la sala hasta el baño o el patio (3 pasos).","Escribe una pregunta educada para pedir indicaciones."]}
  ]},

{ title:"Shops & Shopping", tema:"Tipos de tiendas · can para posibilidad · diálogo de compra", min:90,
  obj:"Nombrar tiendas y desenvolverse en un diálogo de compra simple usando can, precios y fórmulas de cortesía.",
  can:["Nombrar tiendas y lo que se compra en ellas.","Usar <i>You can buy… at the…</i>","Preguntar precios: How much is it? / How much are they?"],
  slides:[
  {t:"warm", title:"Where can you buy…?", items:[["bread","at the bakery"],["medicine","at the pharmacy"],["fish","at the fish market (caleta)"],["a book","at the bookshop"],["sneakers","at the shoe shop"],["meat","at the butcher's"]]},
  {t:"exp", title:"Shops", html:"<div class='cols'><div class='rule'>🥖 bakery · 💊 pharmacy · 🥩 butcher's · 🐟 fish market · 🍎 greengrocer's</div><div class='rule'>📚 bookshop · 👟 shoe shop · 👕 clothes shop · 🛒 supermarket · 🏪 corner shop (almacén)</div></div><div class='ex'>You <b>can</b> buy fresh fish <b>at</b> Caleta Portales.<br>You <b>can't</b> buy medicine at the bakery!</div>"},
  {t:"tbl", title:"At the shop: useful phrases", head:["Shop assistant 🧑‍💼","Customer 🧍"], rows:[
    ["Can I help you?","Yes, please. I'm looking for…"],["What size / color?","Medium, please. / Black."],["Here you are.","How much is it? / How much are they?"],["It's 5,000 pesos.","Here you are. Thank you!"],["Anything else?","No, thanks. That's all."]],
    note:"Precios en inglés: $5.990 → <i>five thousand nine hundred and ninety pesos</i>."},
  {t:"mcq", title:"Choose the best answer", items:[
    ["Can I help you?",["Yes, please. I'm looking for a cap.","Yes, I can.","No, you can't."],0],["How much ___ these shoes?",["is","are","be"],1],
    ["You can buy aspirin at the…",["bakery","pharmacy","bookshop"],1],["Anything else?",["Here you are.","No, thanks. That's all.","It's ten dollars."],1]]},
  {t:"order", title:"Order the dialogue", items:["Can I help you?","I'm looking for a black jacket.","How much is it?","It's twenty thousand pesos."]},
  {t:"speak", title:"Role-play: At the market", task:"En parejas, representen una compra. Usen billetes de papel o precios inventados.", min:8,
    frame:["Good morning! Can I help you?","Yes, please. Can I have ___?","How much is it / are they?","Here you are. — Thank you! Have a nice day!"]},
  {t:"game", title:"The Price is Right 💲", rules:["El profesor saca un producto.","Cada equipo dice un precio en inglés en voz alta.","¡El más cercano al precio real gana!"],
    cards:["a completo","a bus ticket","a can of Coke","a pair of sneakers","a school backpack","a cinema ticket","a kilo of bread","a phone case"]},
  {t:"exit", items:["Nombra 4 tiendas y algo que compras en cada una.","Escribe la pregunta para saber el precio de <i>a cap</i> y de <i>jeans</i>.","Escribe en inglés: $3.500."]}
  ]}
]}
]};
