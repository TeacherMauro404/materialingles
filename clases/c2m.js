/* =========================================================
   2° MEDIO — Presentaciones por clase
   ========================================================= */
window.CLASES = window.CLASES || {};
CLASES["2m"] = {
label: "2° Medio", color: "#2d7a4f",
units: [

/* ───────────── UNIDAD 1 ───────────── */
{ n:1, icon:"🎸", title:"Hobbies and Free Time", desc:"Emociones, hobbies, can, gustos con gerundio, Present Continuous y deportes",
lessons:[

{ title:"Feelings & Moods", tema:"Emociones · I feel… because… · -ed vs -ing", min:90,
  obj:"Expresar emociones y estados de ánimo, justificando con because y distinguiendo adjetivos -ed / -ing.",
  can:["Nombrar 15 emociones.","Decir cómo me siento y por qué.","Diferenciar bored / boring, excited / exciting."],
  slides:[
  {t:"warm", title:"Emoji check-in", intro:"¿Cómo te sientes hoy? Elige un emoji y dilo en inglés:", items:[["😀","happy / cheerful"],["😴","tired / sleepy"],["😰","nervous / worried"],["😡","angry / annoyed"],["🤩","excited"],["😐","bored"]]},
  {t:"tbl", title:"Feelings vocabulary", head:["Positive 😊","Negative 😟","Neutral / Other 😐"], rows:[
    ["happy · glad","sad · upset","calm · relaxed"],["excited","angry · furious","surprised"],["proud","worried · nervous","confused"],["grateful","scared · afraid","bored"],["in love","lonely · jealous","sleepy · tired"]]},
  {t:"exp", title:"-ED vs -ING adjectives", html:"<div class='cols'><div class='rule'><b>-ED</b> = cómo <b>me siento</b><br>I'm <b>bored</b>.<br>She's <b>interested</b> in music.<br>We're <b>tired</b>.</div><div class='rule'><b>-ING</b> = cómo <b>es</b> algo/alguien<br>This class is <b>boring</b>.<br>The film is <b>interesting</b>.<br>The trip is <b>tiring</b>.</div></div><div class='tip'>⚠️ <i>I'm boring</i> = soy aburrido (¡como persona!). <i>I'm bored</i> = estoy aburrido.</div><div class='ex'>I feel <b>nervous because</b> I have a test today.</div>"},
  {t:"mcq", title:"-ed or -ing?", items:[
    ["The football match was very ___.",["excited","exciting"],1],["I'm ___ in marine biology.",["interested","interesting"],0],
    ["Monday mornings are ___.",["tired","tiring"],1],["She felt ___ when she saw the spider.",["frightened","frightening"],0],
    ["I'm ___. Let's do something!",["bored","boring"],0]]},
  {t:"match", title:"Situation → Feeling", pairs:[["You get a 7.0 in English","proud"],["You lose your phone","upset / worried"],["Your dog is sick","sad"],["Tomorrow is your birthday","excited"],["You walk alone at night","scared"],["You don't understand the task","confused"]]},
  {t:"speak", title:"How do you feel when…?", task:"Pregunta a 3 compañeros y responde con <i>because</i>.", min:6,
    frame:["How do you feel when you have a test?","I feel ___ because ___.","What makes you happy?","___ makes me happy."]},
  {t:"game", title:"Charades of Feelings 🎭", rules:["Un estudiante saca una tarjeta y actúa la emoción sin hablar.","Su equipo tiene 30 segundos para adivinar en inglés.","Bonus: decir una situación que cause esa emoción."],
    cards:["proud","jealous","confused","scared","bored","excited","embarrassed","relaxed","furious","surprised","lonely","grateful"]},
  {t:"exit", items:["Escribe 3 oraciones: I feel ___ when ___.","Corrige: <i>The movie was bored.</i>","¿Cuál es la diferencia entre <i>tired</i> y <i>tiring</i>?"]}
  ]},

{ title:"Hobbies, CAN & Likes + Gerunds", tema:"can / can't para habilidades · like, love, hate + -ing", min:90,
  obj:"Hablar de habilidades y gustos sobre hobbies usando can y verbos de preferencia + gerundio.",
  can:["Expresar habilidades: I can swim / I can't dance.","Usar love / like / don't mind / don't like / hate + -ing.","Escribir el gerundio correctamente."],
  slides:[
  {t:"warm", title:"Can you…?", intro:"Responde con <i>Yes, I can</i> o <i>No, I can't</i>:", items:["Can you swim?","Can you play the guitar?","Can you cook?","Can you skate?","Can you speak three languages?"]},
  {t:"tbl", title:"CAN — ability", head:["","Form","Example"], rows:[
    ["✅","subject + can + verb","I <b>can</b> sail a small boat."],["❌","subject + can't (cannot) + verb","She <b>can't</b> swim."],["❓","Can + subject + verb?","<b>Can</b> you draw? — Yes, I can."]],
    note:"Después de <b>can</b> no va <i>to</i> ni <i>-s</i>: He can <b>play</b> ✅ <s>He can plays / can to play</s> ❌"},
  {t:"tbl", title:"Likes & dislikes + gerund (-ing)", head:["","Verb","Example"], rows:[
    ["😍","love","I love <b>playing</b> football."],["🙂","like / enjoy","She enjoys <b>reading</b> manga."],["😐","don't mind","I don't mind <b>washing</b> the dishes."],["🙁","don't like","He doesn't like <b>dancing</b>."],["😫","hate / can't stand","They hate <b>getting up</b> early."]],
    note:"Spelling: play → play<b>ing</b> · dance → danc<b>ing</b> (sin e) · swim → swim<b>ming</b> (doble consonante) · lie → l<b>ying</b>"},
  {t:"gap", title:"Write the gerund", items:[
    ["I love ___ (swim) in the sea.","swimming"],["She enjoys ___ (draw) anime characters.","drawing"],
    ["We hate ___ (get) up early.","getting"],["Do you like ___ (play) video games?","playing"],["He doesn't mind ___ (cook).","cooking"]]},
  {t:"mcq", title:"Correct or incorrect?", items:[
    ["",["She can sings very well.","She can sing very well.","She cans sing very well."],1],
    ["",["I like play football.","I like playing football.","I like to playing football."],1],
    ["",["Can you to ride a bike?","Can you ride a bike?","Do you can ride a bike?"],1],
    ["",["He enjoys to read.","He enjoys reading.","He enjoy reading."],1]]},
  {t:"game", title:"Hobby Bingo 🎯", rules:["Dibuja una cuadrícula de 3×3 con 9 hobbies.","El profesor saca tarjetas; si tienes el hobby, márcalo.","Al gritar BINGO, di 3 oraciones: <i>I love… / I can… / I don't like…</i>"],
    cards:["skating","drawing","fishing","surfing","gaming","cooking","dancing","reading","playing guitar","swimming","taking photos","singing","hiking","sailing"]},
  {t:"speak", title:"Find your hobby twin 👯", task:"Busca a alguien con tus mismos gustos. Tienes 5 minutos.", min:5,
    frame:["What do you like doing in your free time?","I love ___. What about you?","Can you ___? — Yes, I can! / No, I can't.","Me too! / Really? I hate ___!"]},
  {t:"exit", items:["Escribe 2 cosas que puedes y 1 que no puedes hacer.","Escribe 3 oraciones con love, don't mind, hate + -ing.","Escribe el gerundio de: run, write, sit."]}
  ]},

{ title:"Present Continuous", tema:"am / is / are + -ing · acciones en progreso", min:90,
  obj:"Describir acciones que ocurren ahora o en este período usando el Present Continuous.",
  can:["Formar Present Continuous en sus 3 formas.","Usar now, right now, at the moment, today.","Describir lo que pasa en una imagen."],
  slides:[
  {t:"warm", title:"What are they doing?", intro:"Mira a tu alrededor (o a la imagen): ¿qué está pasando ahora?", items:[["The teacher…","is talking / is standing"],["I…","am sitting / am listening"],["Outside, people…","are walking / are working"],["The sea…","is moving / is shining"]]},
  {t:"tbl", title:"Present Continuous", head:["","Form","Example"], rows:[
    ["✅","am / is / are + verb-ing","I'<b>m studying</b>. They'<b>re playing</b>."],["❌","am not / isn't / aren't + -ing","She <b>isn't sleeping</b>."],["❓","Am / Is / Are + subject + -ing?","<b>Are</b> you <b>listening</b>? — Yes, I am."]],
    note:"Palabras clave: <b>now · right now · at the moment · today · this week · Look! · Listen!</b>"},
  {t:"exp", title:"Stative verbs ⚠️", html:"<div class='rule'>Algunos verbos <b>NO</b> se usan en continuo porque expresan estados, no acciones:</div><div class='ex'>like · love · hate · want · need · know · understand · believe · remember · belong</div><div class='cols'><div class='tip'>❌ <s>I'm knowing the answer.</s></div><div class='tip'>✅ I <b>know</b> the answer.</div></div>"},
  {t:"gap", title:"Complete with Present Continuous", items:[
    ["Look! The ship ___ (arrive).","is arriving|'s arriving"],["We ___ (not / watch) TV now.","aren't watching|are not watching"],
    ["___ (you / listen) to me?","Are you listening"],["My friends ___ (play) volleyball on the beach.","are playing|'re playing"],
    ["I ___ (study) for a test this week.","am studying|'m studying"]]},
  {t:"mcq", title:"Choose the correct option", items:[
    ["Shh! The baby ___.",["sleeps","is sleeping","sleeping"],1],["I ___ the answer.",["know","am knowing","knowing"],0],
    ["What ___ you doing?",["do","are","is"],1],["They ___ to music right now.",["listen","are listening","listens"],1]]},
  {t:"game", title:"Mime it! 🎬", rules:["Un estudiante saca una tarjeta y la actúa.","Los equipos adivinan con Present Continuous: <i>Is he fishing?</i>","Respuesta correcta y gramaticalmente completa = 1 punto."],
    cards:["fishing","surfing","taking a selfie","cooking empanadas","driving a bus","rowing a boat","playing the drums","texting","climbing a hill","painting a wall","dancing cueca","sleeping in class"]},
  {t:"speak", title:"Video call", task:"Simula una videollamada: describe lo que está pasando a tu alrededor ahora.", min:4,
    frame:["Hi! What are you doing?","I'm ___ right now.","My brother is ___ and my mom is ___.","Are you ___? — No, I'm not. I'm ___."]},
  {t:"exit", items:["Escribe 3 oraciones sobre lo que pasa en la sala ahora.","Escribe 1 pregunta en Present Continuous.","¿Por qué está mal <i>I'm wanting pizza</i>?"]}
  ]},

{ title:"Present Simple vs Present Continuous", tema:"Rutina vs acción en progreso · palabras clave", min:90,
  obj:"Contrastar el Present Simple y el Present Continuous según su uso y marcadores de tiempo.",
  can:["Elegir el tiempo correcto según el contexto.","Reconocer expresiones de cada tiempo.","Hablar de mi rutina y de lo que hago hoy."],
  slides:[
  {t:"warm", title:"Usually vs Today", intro:"¿Qué hace normalmente el profesor vs. qué está haciendo hoy?", items:["Normally the teacher wears… / Today he is wearing…","Usually we sit in rows. / Today we are sitting…","On Fridays I… / Right now I am…"]},
  {t:"tbl", title:"Compare", head:["","Present Simple","Present Continuous"], rows:[
    ["Use","rutinas, hábitos, hechos","acciones ahora / temporales"],["Form","I work · She works","I'm working · She's working"],
    ["Key words","always, usually, every day, on Mondays, never","now, right now, at the moment, today, this week"],
    ["Example","He usually <b>works</b> at the port.","Today he <b>is working</b> on a ship."]]},
  {t:"mcq", title:"Simple or Continuous?", items:[
    ["My dad ___ to work every day.",["goes","is going"],0],["Look! It ___.",["rains","is raining"],1],
    ["Water ___ at 100 °C.",["boils","is boiling"],0],["I ___ a great series this week.",["watch","am watching"],1],
    ["She ___ English on Tuesdays.",["has","is having"],0],["Be quiet! I ___.",["study","am studying"],1]]},
  {t:"gap", title:"Complete the text", intro:"Escribe la forma correcta del verbo.", items:[
    ["Matías usually ___ (wake up) at 6:30.","wakes up"],["But today he ___ (sleep) late.","is sleeping|'s sleeping"],
    ["He normally ___ (take) the bus to school.","takes"],["At the moment, his mom ___ (call) him.","is calling|'s calling"],["He never ___ (miss) class.","misses"]]},
  {t:"read", title:"A postcard from Chiloé", text:"Hi Sofi! I'<b>m writing</b> from Castro. We'<b>re staying</b> in a palafito by the sea. Every morning, my uncle <b>goes</b> fishing and my aunt <b>cooks</b> curanto. Right now it'<b>s raining</b> and I'<b>m drinking</b> hot chocolate. I usually <b>hate</b> rain, but here I <b>love</b> it! Kisses, Vale",
    items:[["Where is Vale staying?","In a palafito in Castro."],["What does her uncle do every morning?","He goes fishing."],["What is the weather like now?","It's raining."],["Find 2 verbs in Present Simple.","goes, cooks, hate, love"]]},
  {t:"speak", title:"Normally… but today…", task:"Cuenta a tu compañero 3 diferencias entre tu rutina y lo que haces/está pasando hoy.", min:5,
    frame:["I usually ___, but today I'm ___.","On weekdays I ___, but this week I'm ___."]},
  {t:"exit", items:["Escribe 2 oraciones en Present Simple y 2 en Present Continuous sobre ti.","Elige: <i>I (eat / am eating) lunch now.</i>"]}
  ]},

{ title:"Sports & Music", tema:"play / go / do + deportes · instrumentos y géneros musicales", min:90,
  obj:"Hablar de deportes y música usando las colocaciones play, go y do, y expresar preferencias.",
  can:["Usar play / go / do con el deporte correcto.","Nombrar instrumentos y géneros musicales.","Expresar mi opinión sobre música y deportes."],
  slides:[
  {t:"warm", title:"Name 10!", intro:"En 1 minuto, escribe 5 deportes y 5 estilos musicales en inglés.", items:[["Sports","football, basketball, swimming, surfing, rowing, boxing…"],["Music","reggaeton, rock, pop, trap, cumbia, jazz, K-pop, classical…"]]},
  {t:"tbl", title:"PLAY · GO · DO", head:["PLAY ⚽","GO 🏄","DO 🥋"], rows:[
    ["ball games / competitivos","verbos en -ing","actividades individuales / artes marciales"],
    ["play football","go swimming","do karate"],["play volleyball","go surfing","do yoga"],["play tennis","go sailing","do gymnastics"],["play chess","go fishing","do exercise"]]},
  {t:"exp", title:"Music", html:"<div class='cols'><div class='rule'>🎸 <b>Instruments</b> (play <b>the</b> …)<br>play <b>the</b> guitar · the drums · the piano · the violin · the trumpet · the bass</div><div class='rule'>🎧 <b>Genres</b><br>pop · rock · hip-hop · reggaeton · electronic · cumbia · folk · metal · jazz</div></div><div class='ex'>I play <b>the</b> drums in a band. · I'm really into K-pop. · My favourite singer is…</div>"},
  {t:"mcq", title:"play, go or do?", items:[
    ["My brother ___ judo.",["plays","goes","does"],2],["Let's ___ fishing on Saturday!",["play","go","do"],1],
    ["She ___ the piano.",["plays","goes","does"],0],["We ___ rowing at the club.",["play","go","do"],1],["They ___ basketball after school.",["play","go","do"],0]]},
  {t:"match", title:"Instrument → Musician", pairs:[["guitar","guitarist"],["drums","drummer"],["piano","pianist"],["violin","violinist"],["voice","singer"],["DJ decks","DJ"]]},
  {t:"game", title:"Name that tune 🎵", rules:["El profesor reproduce 10 segundos de una canción (o la tararea).","Los equipos dicen el género y el instrumento principal en inglés.","Bonus: opinión en inglés (<i>I love it! / It's not my style.</i>)"],
    cards:["Rock song","Reggaeton song","Classical piece","Cumbia","Jazz","Pop hit","Electronic","Chilean folk (cueca)"]},
  {t:"speak", title:"Music & sports survey", task:"Entrevista a 3 compañeros y comparte el resultado más interesante.", min:6,
    frame:["What sports do you play / do / go?","What kind of music are you into?","Can you play an instrument?","Who's your favourite artist? Why?"]},
  {t:"exit", items:["Escribe 1 deporte con play, 1 con go y 1 con do.","Escribe tu género musical favorito y por qué.","Completa: I play ___ guitar."]}
  ]}
]},

/* ───────────── UNIDAD 2 ───────────── */
{ n:2, icon:"💭", title:"Likes, Opinions & Future Plans", desc:"Opiniones, preferencias, will, going to, primer condicional",
lessons:[

{ title:"Opinions & Preferences", tema:"I think / In my opinion · agree / disagree · prefer, would rather", min:90,
  obj:"Expresar opiniones y preferencias, y estar de acuerdo o en desacuerdo de forma respetuosa.",
  can:["Dar opiniones: I think…, In my opinion…","Acordar o discrepar con cortesía.","Expresar preferencias: I prefer X to Y / I'd rather…"],
  slides:[
  {t:"warm", title:"This or that?", intro:"Elige y di por qué:", items:["Beach or mountains?","Cats or dogs?","Netflix or YouTube?","Summer or winter?","Completo or empanada?"], note:"Modelo: <i>I prefer the beach because I love swimming.</i>"},
  {t:"tbl", title:"Giving opinions", head:["Opinion","Agree ✅","Disagree ❌"], rows:[
    ["I think (that)…","I agree with you.","I don't agree."],["In my opinion,…","That's true!","I see your point, but…"],["I believe…","Exactly!","I'm not sure about that."],["Personally,…","Me too. / Me neither.","Actually, I think…"]],
    note:"Discrepar con respeto: <b>I see your point, but…</b> es mejor que <i>You're wrong!</i>"},
  {t:"exp", title:"Preferences", html:"<div class='rule'><b>prefer + noun/-ing + to + noun/-ing</b><br>I <b>prefer</b> football <b>to</b> basketball.<br>She <b>prefers</b> reading <b>to</b> watching TV.</div><div class='rule'><b>would rather ('d rather) + verb + than + verb</b><br>I<b>'d rather</b> stay home <b>than</b> go out.<br>Would you rather surf or skate?</div>"},
  {t:"mcq", title:"Choose the correct option", items:[
    ["I prefer tea ___ coffee.",["than","to","that"],1],["I'd rather ___ by bus.",["go","to go","going"],0],
    ["A: I love reggaeton. B: ___ — I prefer rock.",["Exactly!","I see your point, but…","Me too."],1],
    ["A: I don't like Mondays. B: ___",["Me neither.","Me too.","So do I."],0]]},
  {t:"game", title:"Would you rather…? 🤔", rules:["El profesor saca una tarjeta.","Los estudiantes se mueven a un lado de la sala (opción A o B).","Elegidos al azar (🎲) justifican: <i>I'd rather… because…</i>"],
    cards:["…live in Valparaíso or Santiago?","…be a captain or a pilot?","…have no phone or no friends for a week?","…speak 5 languages or play 5 instruments?","…travel to the past or the future?","…eat sushi or a completo every day?","…work on a ship or in an office?"]},
  {t:"speak", title:"Mini debate 🎙️", task:"En grupos de 4: 2 a favor, 2 en contra. Cada uno da 1 opinión y responde 1 vez.", min:8,
    steps:["Topic A: Phones should be banned at school.","Topic B: Homework is necessary.","Topic C: Uniforms are a good idea."],
    frame:["In my opinion,…","I agree / I don't agree because…","I see your point, but…"]},
  {t:"exit", items:["Escribe tu opinión sobre el uso del celular en clases (2 oraciones).","Completa: I prefer ___ to ___.","Escribe una forma educada de discrepar."]}
  ]},

{ title:"Future Simple — Will", tema:"Predicciones, promesas y decisiones espontáneas", min:90,
  obj:"Hacer predicciones, promesas y decisiones espontáneas usando will / won't.",
  can:["Formar will / won't / Will…?","Hacer predicciones sobre el futuro.","Hacer promesas y ofrecimientos."],
  slides:[
  {t:"warm", title:"The world in 2050 🔮", intro:"¿Verdadero o falso para ti? Levanta la mano si crees que pasará:", items:["Robots will teach English.","People will live on Mars.","Ships will sail without captains.","There won't be any paper books."]},
  {t:"tbl", title:"WILL", head:["","Form","Example"], rows:[
    ["✅","subject + will ('ll) + verb","I<b>'ll</b> help you."],["❌","subject + won't (will not) + verb","It <b>won't</b> rain tomorrow."],["❓","Will + subject + verb?","<b>Will</b> you come? — Yes, I will. / No, I won't."]]},
  {t:"exp", title:"When do we use WILL?", html:"<div class='cols'><div class='rule'>🔮 <b>Predictions</b><br>I think Chile <b>will</b> win.<br>Cars <b>will</b> fly in 2080.</div><div class='rule'>🤝 <b>Promises</b><br>I <b>will</b> call you.<br>I <b>won't</b> tell anyone!</div></div><div class='cols'><div class='rule'>⚡ <b>Spontaneous decisions</b><br>The phone is ringing. — I<b>'ll</b> answer it!</div><div class='rule'>🙋 <b>Offers</b><br>That bag looks heavy. I<b>'ll</b> carry it.</div></div><div class='tip'>Expresiones: I think… · Probably… · I'm sure… · tomorrow · next year · in 2040</div>"},
  {t:"mcq", title:"What's the use?", items:[
    ["<i>I'll open the window.</i> (hace calor)",["prediction","spontaneous decision","promise"],1],["<i>I think it will be sunny tomorrow.</i>",["prediction","offer","promise"],0],
    ["<i>I'll never forget you!</i>",["offer","promise","prediction"],1],["<i>I'll help you with your bag.</i>",["offer","prediction","plan"],0]]},
  {t:"gap", title:"Complete with will / won't", items:[
    ["Don't worry, I ___ (not) be late.","won't|will not"],["___ you help me with this? — Yes, I will.","Will"],
    ["I think robots ___ do many jobs.","will"],["She ___ (not) pass if she doesn't study.","won't|will not"]]},
  {t:"game", title:"Fortune Teller 🔮", rules:["Un estudiante (🎲 selector) es el adivino.","Saca una tarjeta y hace una predicción sobre un compañero: <i>You will…</i>","El compañero responde: <i>I hope so! / I don't think so!</i>"],
    cards:["job","house","family","travel","money","pets","famous","sport","car","country"]},
  {t:"speak", title:"Promises for this semester", task:"Escribe 3 promesas (y 1 cosa que no harás) y compártelas con tu grupo.", min:4,
    frame:["I will ___.","I won't ___.","I promise I'll ___."]},
  {t:"exit", items:["Escribe 2 predicciones sobre tu vida en 10 años.","Escribe 1 promesa a tu familia.","Responde corto: <i>Will you study tonight?</i>"]}
  ]},

{ title:"Going To — Plans & Intentions", tema:"am / is / are going to + verb · planes y evidencia", min:90,
  obj:"Hablar de planes, intenciones y predicciones con evidencia usando going to.",
  can:["Formar going to en sus 3 formas.","Hablar de mis planes para el fin de semana y el futuro.","Predecir a partir de evidencia: Look at the clouds! It's going to rain."],
  slides:[
  {t:"warm", title:"Weekend plans", intro:"¿Qué vas a hacer este fin de semana?", items:["Are you going to see your friends?","Are you going to play a sport?","Are you going to study?","Are you going to go to the beach?"]},
  {t:"tbl", title:"GOING TO", head:["","Form","Example"], rows:[
    ["✅","am/is/are + going to + verb","I'm <b>going to</b> study marine engineering."],["❌","am not/isn't/aren't + going to","She isn't <b>going to</b> come."],["❓","Am/Is/Are + subject + going to…?","Are you <b>going to</b> travel? — Yes, I am."]]},
  {t:"exp", title:"Uses", html:"<div class='rule'>📅 <b>Plans & intentions</b> (ya decididos antes)<br>Next year I'm <b>going to</b> do my internship at the port.</div><div class='rule'>👀 <b>Predictions with evidence</b><br>Look at those clouds! It's <b>going to</b> rain.<br>Careful! You're <b>going to</b> fall!</div><div class='tip'>Expresiones: tonight · tomorrow · this weekend · next week/month/year · after school · when I finish 4° Medio</div>"},
  {t:"order", title:"Order the sentences", items:["I am going to visit my grandmother.","Are you going to play football tomorrow?","She isn't going to study tonight.","We are going to travel to the south."]},
  {t:"gap", title:"Complete with going to", items:[
    ["Look! The ship ___ (crash)!","is going to crash|'s going to crash"],["I ___ (watch) a film tonight.","am going to watch|'m going to watch"],
    ["They ___ (not / come) to the party.","aren't going to come|are not going to come"],["What ___ (you / do) after school?","are you going to do"]]},
  {t:"speak", title:"My plans after school 🎓", task:"Cuenta tus planes al terminar la enseñanza media (estudios, trabajo, especialidad).", min:6,
    frame:["When I finish school, I'm going to ___.","I'm not going to ___.","I'm going to study / work as a ___ because ___.","Where are you going to live?"]},
  {t:"game", title:"Weekend Diary Guess 📒", rules:["Cada estudiante escribe 3 planes reales en un papel.","El profesor lee un papel (sin nombre).","El curso adivina de quién es: <i>Is Diego going to…?</i>"],
    cards:["Lee un papel nuevo","Lee un papel nuevo","Lee un papel nuevo","Lee un papel nuevo","Lee un papel nuevo"]},
  {t:"exit", items:["Escribe 3 planes para la próxima semana.","Escribe una predicción con evidencia (mira por la ventana).","Pregunta a tu compañero sus planes con going to."]}
  ]},

{ title:"Will vs Going To · Future Time Expressions", tema:"Contraste de futuros · future continuous (introducción)", min:90,
  obj:"Elegir entre will y going to según la intención, y usar expresiones de tiempo futuro.",
  can:["Contrastar decisiones espontáneas vs planes.","Usar expresiones: in two years, by 2030, the day after tomorrow.","Reconocer el future continuous: This time tomorrow I'll be sailing."],
  slides:[
  {t:"warm", title:"Quick reaction", intro:"¿Qué dirías?", items:[["The phone is ringing…","I'll answer it!"],["You bought a ticket to Concepción…","I'm going to travel to Concepción."],["Black clouds in the sky…","It's going to rain."],["Your friend is hungry…","I'll make you a sandwich!"]]},
  {t:"tbl", title:"WILL vs GOING TO", head:["WILL","GOING TO"], rows:[
    ["Decisión en el momento ⚡<br>I'll have the fish, please.","Plan decidido antes 📅<br>I'm going to cook fish tonight."],
    ["Predicción por opinión 💭<br>I think it'll be a great year.","Predicción con evidencia 👀<br>The sky is dark. It's going to rain."],
    ["Promesas / ofertas 🤝<br>I'll help you.","Intenciones 🎯<br>I'm going to be a captain."]]},
  {t:"exp", title:"Future time expressions & Future Continuous", html:"<div class='rule'>⏳ tomorrow · the day after tomorrow · next week · in two years · soon · later · by 2030 · one day</div><div class='ex'><b>Future Continuous</b> = acción en progreso en un momento futuro<br><b>will be + -ing</b><br>This time tomorrow I<b>'ll be sailing</b> to Juan Fernández.<br>At 8 p.m. we<b>'ll be watching</b> the match.</div>"},
  {t:"mcq", title:"will or going to?", items:[
    ["A: We have no milk! B: Oh, I ___ buy some.",["'ll","'m going to"],0],["I bought flour. I ___ make empanadas.",["'ll","'m going to"],1],
    ["Watch out! You ___ drop the glass!",["will","are going to"],1],["I think you ___ love this song.",["'ll","are going to"],0],
    ["This time tomorrow I ___ on the plane.",["'ll be sitting","'m going to sit"],0]]},
  {t:"gap", title:"Complete the dialogue", items:[
    ["A: What are your plans for summer? B: I ___ work at the port.","am going to|'m going to"],["A: It's hot in here! B: I ___ open the window.","will|'ll"],
    ["A: At 10 p.m. tomorrow, I ___ (sleep).","'ll be sleeping|will be sleeping"],["A: I promise I ___ forget your birthday.","won't|will not"]]},
  {t:"speak", title:"Find a time to meet 📆", task:"Cada uno inventa una agenda de la próxima semana. Busquen un momento libre para juntarse.", min:7,
    frame:["Are you free on Monday afternoon?","No, I'm going to ___. What about Tuesday?","On Tuesday at 5 I'll be ___.","OK! I'll see you on ___!"]},
  {t:"exit", items:["Escribe 1 oración con will (decisión) y 1 con going to (plan).","¿Qué estarás haciendo mañana a esta hora? (will be + -ing)"]}
  ]},

{ title:"First Conditional", tema:"If + present, will + verb · consecuencias reales", min:90,
  obj:"Expresar condiciones y resultados posibles en el futuro con el primer condicional.",
  can:["Formar el primer condicional.","Usar la coma correctamente.","Usar unless = if not."],
  slides:[
  {t:"warm", title:"What will happen if…?", intro:"Completa en voz alta:", items:[["If it rains tomorrow…","…I'll stay at home."],["If I study hard…","…I'll pass the test."],["If I miss the bus…","…I'll be late."]]},
  {t:"tbl", title:"First Conditional", head:["IF clause (condición)","Main clause (resultado)"], rows:[
    ["If + present simple","will / won't + verb"],["If it <b>rains</b>,","we <b>won't go</b> to the beach."],["If you <b>study</b>,","you <b>will pass</b>."],
    ["Main clause first (sin coma):","We <b>won't go</b> to the beach <b>if</b> it <b>rains</b>."]],
    note:"⚠️ Nunca <b>will</b> después de <b>if</b>: <s>If it will rain</s> ❌ → If it <b>rains</b> ✅"},
  {t:"exp", title:"UNLESS = if not", html:"<div class='ex'><b>Unless</b> you hurry, you'll miss the bus.<br>= <b>If</b> you <b>don't</b> hurry, you'll miss the bus.</div><div class='rule'>Seguridad marítima ⚓: If the alarm <b>sounds</b>, the crew <b>will go</b> to the lifeboats.</div>"},
  {t:"gap", title:"Complete", items:[
    ["If you heat water, it ___ (boil). (zero conditional — hecho)","boils"],
    ["If I ___ (have) time, I'll help you.","have"],["If she studies, she ___ (pass).","will pass|'ll pass"],
    ["We'll be late if we ___ (not / hurry).","don't hurry|do not hurry"],["___ you practice, you won't improve.","Unless"]]},
  {t:"mcq", title:"Correct or incorrect?", items:[
    ["",["If it will rain, I'll stay home.","If it rains, I'll stay home.","If it rains, I stay home will."],1],
    ["",["I'll call you if I'll arrive.","I'll call you if I arrive.","I call you if I will arrive."],1],
    ["",["Unless you don't study, you'll fail.","Unless you study, you'll fail.","Unless you study, you fail will."],1]]},
  {t:"game", title:"Conditional Chain ⛓️", rules:["El profesor dice el inicio: <i>If I win the lottery…</i>","El estudiante 1 completa: <i>…I'll buy a boat.</i>","El estudiante 2 continúa: <i>If I buy a boat, I'll…</i> ¡Hasta que alguien se equivoque!"],
    cards:["If I win the lottery…","If it rains tomorrow…","If I get a good grade…","If I miss the bus…","If I go to the beach…","If my phone breaks…","If I meet a famous person…"]},
  {t:"speak", title:"Consequences", task:"Piensen 3 consecuencias de tirar plástico al mar. Usen first conditional.", min:5,
    frame:["If we throw plastic in the sea, fish will ___.","If fish ___, people will ___.","Unless we ___, the ocean will ___."]},
  {t:"exit", items:["Completa: If I finish my homework, ___.","Escribe 1 oración con unless.","Corrige: <i>If you will come, I'll be happy.</i>"]}
  ]}
]},

/* ───────────── UNIDAD 3 ───────────── */
{ n:3, icon:"📖", title:"Descriptions and Narratives", desc:"Pasado simple y continuo, conectores, comparativos, superlativos y medio ambiente",
lessons:[

{ title:"Was / Were & There was / There were", tema:"Pasado del verbo To Be · describir el pasado", min:90,
  obj:"Describir personas, lugares y situaciones del pasado usando was / were y there was / there were.",
  can:["Usar was / were en las 3 formas.","Describir cómo era un lugar antes.","Usar expresiones: yesterday, last week, ago, in 2010."],
  slides:[
  {t:"warm", title:"Where were you?", intro:"Responde:", items:[["Where were you yesterday at 8 p.m.?","I was at home."],["Were you happy last weekend?","Yes, I was. / No, I wasn't."],["Who was your first teacher?","My first teacher was…"]]},
  {t:"tbl", title:"WAS / WERE", head:["Subject","✅","❌","❓"], rows:[
    ["I / he / she / it","was","wasn't","Was he…?"],["you / we / they","were","weren't","Were they…?"]],
    note:"Time expressions: yesterday · last night/week/year · two days <b>ago</b> · in 2015 · when I was a child"},
  {t:"exp", title:"There was / There were", html:"<div class='cols'><div class='rule'><b>Singular / uncountable</b><br>There <b>was</b> a small port.<br>There <b>wasn't</b> any electricity.</div><div class='rule'><b>Plural</b><br>There <b>were</b> many sailing ships.<br><b>Were there</b> any cars? — No, there weren't.</div></div><div class='ex'>Valparaíso in 1900: There <b>were</b> trams. There <b>wasn't</b> a Panama Canal, so many ships <b>were</b> in the port!</div>"},
  {t:"gap", title:"was or were?", items:[
    ["I ___ tired yesterday.","was"],["My friends ___ at the beach.","were"],["___ you at school on Monday?","Were"],
    ["There ___ a lot of people at the concert.","were"],["There ___ any milk in the fridge.","wasn't|was not"]]},
  {t:"read", title:"Valparaíso, 100 years ago", text:"In the early 1900s, Valparaíso <b>was</b> the most important port in the South Pacific. <b>There were</b> ships from England, Germany and Italy. <b>There was</b> a big earthquake in 1906. <b>There weren't</b> any planes, so travelling <b>was</b> slow. The funiculars <b>were</b> new and modern.",
    items:[["Why was Valparaíso important?","It was the most important port in the South Pacific."],["Where were the ships from?","England, Germany and Italy."],["What happened in 1906?","There was a big earthquake."],["Were there planes?","No, there weren't."]]},
  {t:"speak", title:"When I was a child…", task:"Describe tu infancia a tu compañero: cómo eras, tu casa, tu escuela.", min:5,
    frame:["When I was 6, I was ___.","My favourite toy was ___.","There was a ___ near my house.","My best friend was ___."]},
  {t:"exit", items:["Escribe 3 oraciones sobre ti el año pasado (was/were).","Describe un lugar del pasado con there was / there were."]}
  ]},

{ title:"Past Simple — Regular & Irregular", tema:"-ed · verbos irregulares · did / didn't", min:90,
  obj:"Narrar acciones terminadas en el pasado con verbos regulares e irregulares.",
  can:["Escribir y pronunciar -ed (/t/, /d/, /ɪd/).","Usar 20 verbos irregulares frecuentes.","Formar negativos y preguntas con did."],
  slides:[
  {t:"warm", title:"What did you do yesterday?", intro:"Di 3 cosas que hiciste ayer. ¿Quién recuerda más?", items:[["Ejemplo","I watched TV, I ate pizza and I went to bed late."]]},
  {t:"tbl", title:"Regular verbs: -ed", head:["Rule","Example","Pronunciation"], rows:[
    ["+ ed","work → worked","/t/ worked, washed, watched"],["-e → + d","live → lived","/d/ played, lived, cleaned"],["consonant + y → ied","study → studied","/ɪd/ wanted, visited, needed"],["CVC → double","stop → stopped","/ɪd/ solo después de t / d"]]},
  {t:"match", title:"Irregular verbs", pairs:[["go","went"],["have","had"],["see","saw"],["eat","ate"],["buy","bought"],["take","took"],["make","made"],["get","got"]]},
  {t:"tbl", title:"Negative & Questions", head:["","Form","Example"], rows:[
    ["✅","verb + ed / irregular","She <b>visited</b> Chiloé. We <b>went</b> to the port."],["❌","didn't + base verb","She <b>didn't visit</b> Chiloé."],["❓","Did + subject + base verb?","<b>Did</b> you <b>go</b>? — Yes, I did."]],
    note:"Después de <b>did / didn't</b> el verbo vuelve a la forma base: <s>Did you went?</s> ❌ → Did you <b>go</b>? ✅"},
  {t:"gap", title:"Complete with Past Simple", items:[
    ["Last summer we ___ (go) to La Serena.","went"],["I ___ (study) for the test yesterday.","studied"],["She ___ (buy) a new phone.","bought"],
    ["They ___ (not / see) the whales.","didn't see|did not see"],["___ (you / eat) breakfast?","Did you eat"]]},
  {t:"game", title:"Irregular Verb Battle ⚔️", rules:["El profesor saca un verbo en presente.","El primer equipo en decir el pasado <b>y</b> una oración gana 1 punto.","Doble punto si lo dicen en menos de 5 segundos."],
    cards:["go","come","drink","write","swim","sleep","speak","drive","leave","think","bring","find","break","fly","catch","teach"]},
  {t:"speak", title:"Two truths and a lie 🤥", task:"Di 3 cosas que hiciste el fin de semana (una falsa). Tu grupo pregunta con <i>Did you…?</i> y adivina la mentira.", min:6,
    frame:["Last weekend I ___.","Did you really ___?","Yes, I did! / No, I didn't!"]},
  {t:"exit", items:["Escribe el pasado de: go, eat, play, study, see.","Escribe 3 oraciones sobre tu último cumpleaños.","Corrige: <i>Did she went to school?</i>"]}
  ]},

{ title:"Past Continuous & Narrative Connectors", tema:"was/were + -ing · when / while · first, then, suddenly, finally", min:90,
  obj:"Narrar historias combinando Past Simple y Past Continuous y usando conectores narrativos.",
  can:["Formar el Past Continuous.","Combinar when y while en una historia.","Ordenar un relato con conectores."],
  slides:[
  {t:"warm", title:"What were you doing…?", intro:"¿Qué estabas haciendo…?", items:[["…yesterday at 7 p.m.?","I was having dinner."],["…last Saturday at noon?","I was sleeping!"],["…this morning at 7:30?","I was taking the bus."]]},
  {t:"tbl", title:"Past Continuous", head:["","Form","Example"], rows:[
    ["✅","was / were + -ing","I <b>was walking</b> on the beach."],["❌","wasn't / weren't + -ing","They <b>weren't listening</b>."],["❓","Was / Were + subject + -ing?","<b>Were</b> you <b>sleeping</b>? — Yes, I was."]]},
  {t:"exp", title:"WHEN vs WHILE", html:"<div class='rule'>Acción larga (Past Continuous) <b>interrumpida</b> por acción corta (Past Simple)</div><div class='ex'>I <b>was walking</b> on the pier <b>when</b> I <b>saw</b> a sea lion.<br><b>While</b> we <b>were sailing</b>, the storm <b>started</b>.</div><div class='rule'><b>While</b> + 2 acciones largas simultáneas<br>While I <b>was cooking</b>, my brother <b>was playing</b> games.</div><div class='tip'>📚 Conectores: First · Then · After that · Suddenly · Meanwhile · In the end / Finally</div>"},
  {t:"mcq", title:"Simple or Continuous?", items:[
    ["I ___ TV when the lights went out.",["watched","was watching"],1],["While she was running, she ___.",["fell","was falling"],0],
    ["What ___ at 10 p.m. last night?",["did you do","were you doing"],1],["They were sleeping ___ the earthquake started.",["while","when"],1],
    ["___ I was studying, my phone rang.",["While","When"],0]]},
  {t:"order", title:"Order the story", intro:"Ordena las palabras de cada oración del cuento:", items:["Last summer I was fishing with my uncle.","Suddenly a big wave hit the boat.","Then we called the coast guard.","In the end everybody was safe."]},
  {t:"game", title:"Story Cubes 🎲", rules:["Cada equipo saca 3 tarjetas.","Tienen 4 minutos para crear una historia con: <b>while, when, suddenly, finally</b>.","La cuentan al curso; se vota la mejor."],
    cards:["a storm","a dolphin","a lost phone","a mysterious ship","a lighthouse","a strange noise","a treasure","a sea lion","a broken engine","a famous singer","an island","a message in a bottle"]},
  {t:"speak", title:"An unforgettable day", task:"Cuenta a tu compañero un día inolvidable (real o inventado) en 1 minuto.", min:6,
    frame:["It was a (sunny / rainy) day in ___.","I was ___ when suddenly ___.","After that, ___.","In the end, ___. It was amazing / terrible!"]},
  {t:"exit", items:["Escribe 1 oración con when y 1 con while.","Escribe 4 conectores narrativos.","¿Qué estabas haciendo ayer a las 9 p.m.?"]}
  ]},

{ title:"Comparatives & Superlatives", tema:"Adjetivos descriptivos · -er / more · the -est / the most", min:90,
  obj:"Comparar personas, lugares y objetos usando adjetivos comparativos y superlativos.",
  can:["Formar comparativos (-er than / more … than).","Formar superlativos (the -est / the most).","Usar irregulares: good, bad, far."],
  slides:[
  {t:"warm", title:"Chile records 🇨🇱", intro:"¿Lo sabías? Responde:", items:[["What's the longest river in Chile?","The Loa (440 km)"],["What's the highest mountain in Chile?","Ojos del Salado (6,893 m)"],["What's the driest desert in the world?","The Atacama Desert"],["Which is bigger: Santiago or Valparaíso?","Santiago is bigger."]]},
  {t:"tbl", title:"Comparatives & Superlatives", head:["Adjective","Rule","Comparative","Superlative"], rows:[
    ["short (1 sílaba)","+ er / + est","tall<b>er</b> than","the tall<b>est</b>"],["big (CVC)","doble consonante","bi<b>gg</b>er","the bi<b>gg</b>est"],
    ["-y","y → ier / iest","happ<b>ier</b>","the happ<b>iest</b>"],["long (2+ sílabas)","more / most","<b>more</b> beautiful","the <b>most</b> beautiful"],
    ["good · bad · far","irregular","better · worse · farther","the best · the worst · the farthest"]]},
  {t:"exp", title:"Other comparisons", html:"<div class='rule'><b>as + adj + as</b> = igual<br>Viña is <b>as</b> beautiful <b>as</b> Valparaíso.<br>My phone is<b>n't as</b> fast <b>as</b> yours.</div><div class='tip'>⚠️ <s>more bigger</s> ❌ · <s>more good</s> ❌ · <s>the most tall</s> ❌</div>"},
  {t:"gap", title:"Complete", items:[
    ["A ship is ___ (big) than a boat.","bigger"],["Math is ___ (difficult) than English.","more difficult"],["This is the ___ (good) day of my life!","best"],
    ["The Pacific is the ___ (large) ocean.","largest"],["Today is ___ (hot) than yesterday.","hotter"],["He is the ___ (funny) student in class.","funniest"]]},
  {t:"mcq", title:"Correct or incorrect?", items:[
    ["",["She is more tall than me.","She is taller than me.","She is tallest than me."],1],["",["It's the worse movie.","It's the worst movie.","It's the most bad movie."],1],
    ["",["My dog is as big as yours.","My dog is as bigger as yours.","My dog is so big that yours."],0],["",["This is the most interesting book.","This is the interestingest book.","This is the more interesting book."],0]]},
  {t:"game", title:"Top Trumps ⚓", rules:["Cada equipo saca una tarjeta (animal/lugar).","Comparen con el equipo contrario con 3 oraciones (bigger, faster, more dangerous…).","El profesor decide qué equipo comparó mejor."],
    cards:["blue whale","shark","penguin","sea lion","dolphin","octopus","Santiago","Valparaíso","Antofagasta","Puerto Montt","Easter Island","Torres del Paine"]},
  {t:"speak", title:"Class survey: the best…", task:"Pregunta y llega a acuerdos con tu grupo.", min:5,
    frame:["What's the best series right now?","Who is the funniest YouTuber?","What's the most boring subject?","I think ___ is better than ___ because ___."]},
  {t:"exit", items:["Compara 2 ciudades de Chile (2 oraciones).","Escribe el superlativo de: good, big, beautiful, happy.","Corrige: <i>He is more fast than me.</i>"]}
  ]},

{ title:"Weather, Environment & Nature", tema:"Clima y estaciones · medio ambiente · narración descriptiva", min:90,
  obj:"Describir el clima y problemas ambientales, y redactar un breve relato usando el pasado y adjetivos descriptivos.",
  can:["Describir el clima: It's sunny / foggy / windy.","Nombrar problemas y soluciones ambientales.","Escribir un párrafo descriptivo-narrativo."],
  slides:[
  {t:"warm", title:"What's the weather like?", intro:"¿Cómo está el clima hoy? ¿Y en…?", items:[["Valparaíso today","It's ___ (cloudy / sunny / windy / foggy)."],["Atacama Desert","It's hot and dry."],["Punta Arenas","It's cold and windy."],["Valparaíso in winter","It's rainy and foggy."]]},
  {t:"tbl", title:"Weather words", head:["Noun","Adjective","Example"], rows:[
    ["sun ☀️","sunny","It's sunny today."],["rain 🌧️","rainy","It was rainy yesterday."],["wind 🌬️","windy","It's very windy on the pier."],
    ["fog 🌫️","foggy","There's a lot of fog — it's foggy."],["cloud ☁️","cloudy","It's cloudy in the morning."],["storm ⛈️","stormy","The sea was stormy."]],
    note:"Temperatura: It's <b>hot / warm / cool / cold / freezing</b>. It's 18 degrees."},
  {t:"exp", title:"Environment", html:"<div class='cols'><div class='rule'>⚠️ <b>Problems</b><br>pollution · plastic waste · global warming · forest fires · oil spills · overfishing · drought</div><div class='rule'>🌱 <b>Solutions</b><br>recycle · reuse · reduce plastic · save water · plant trees · use public transport · clean beaches</div></div><div class='ex'>Every year, millions of tons of plastic <b>end up</b> in the ocean. If we <b>reduce</b> plastic, the sea <b>will be</b> cleaner.</div>"},
  {t:"match", title:"Problem → Solution", pairs:[["plastic on beaches","organize a beach clean-up"],["forest fires","don't make campfires in summer"],["drought","save water at home"],["air pollution","use bikes and public transport"],["overfishing","respect the fishing ban (veda)"]]},
  {t:"tf", title:"Read & decide", text:"Last Saturday, our class went to Playa Las Torpederas for a clean-up. It was a cold and foggy morning. We collected more than 500 plastic bottles and a lot of cigarette butts. Suddenly, we saw a sea lion that was trapped in a fishing net. We called the Navy and they rescued it. It was the best day of the year!",
    items:[["The weather was hot and sunny.",false],["They collected over 500 bottles.",true],["The sea lion was trapped in plastic bags.",false],["The Navy rescued the animal.",true]]},
  {t:"speak", title:"Eco-campaign 🌍", task:"En grupos, creen un eslogan y 3 acciones para cuidar el mar de Valparaíso. Preséntenlo.", min:8,
    frame:["Our campaign is called ___.","The problem is ___.","If we ___, we will ___.","Join us! Let's ___!"]},
  {t:"exit", items:["Describe el clima de hoy en 2 oraciones.","Nombra 2 problemas ambientales y 2 soluciones.","Escribe 3 oraciones de un día al aire libre (pasado + adjetivos)."], home:"Escribe un párrafo (60–80 palabras): <i>An unforgettable day in nature</i>."}
  ]}
]},

/* ───────────── UNIDAD 4 ───────────── */
{ n:4, icon:"💬", title:"Everyday Conversations", desc:"Preguntas, peticiones, sugerencias, compras, restaurante, salud y Present Perfect",
lessons:[

{ title:"Questions & Short Answers (Review)", tema:"Yes/No y WH- questions en presente, pasado y futuro · question tags (intro)", min:90,
  obj:"Formular preguntas correctas en distintos tiempos verbales y responder con respuestas cortas.",
  can:["Elegir el auxiliar correcto: be, do/does, did, will, can.","Hacer preguntas WH- en distintos tiempos.","Responder con respuestas cortas."],
  slides:[
  {t:"warm", title:"Find the auxiliary", intro:"¿Qué auxiliar falta?", items:[["___ you like sushi?","Do"],["___ she at home?","Is"],["___ they go to the party last night?","Did"],["___ you help me tomorrow?","Will"],["___ he swim?","Can"]]},
  {t:"tbl", title:"Question formula", head:["Tense","QW + Aux + Subject + Verb?","Short answer"], rows:[
    ["To Be","Where <b>are</b> you from?","Are you OK? — Yes, I am."],["Present Simple","What <b>do</b> you <b>do</b>?","Does he work? — No, he doesn't."],
    ["Present Continuous","What <b>are</b> you <b>doing</b>?","Is it raining? — Yes, it is."],["Past Simple","Where <b>did</b> you <b>go</b>?","Did you see it? — No, I didn't."],
    ["Future","When <b>will</b> you <b>arrive</b>?","Will you come? — Yes, I will."],["Can","How <b>can</b> I <b>help</b>?","Can you swim? — Yes, I can."]]},
  {t:"exp", title:"Subject questions & tags", html:"<div class='rule'><b>Who / What</b> como sujeto → <b>sin auxiliar</b><br><b>Who called</b> you? (alguien te llamó)<br><b>Who did</b> you <b>call</b>? (tú llamaste a alguien)</div><div class='ex'><b>Question tags</b> (¿cierto?)<br>You're from Viña, <b>aren't you</b>?<br>She doesn't like rock, <b>does she</b>?<br>They went to the port, <b>didn't they</b>?</div>"},
  {t:"order", title:"Make the questions", items:["Where did you go last weekend?","What time does the ship leave?","Are you going to come to the party?","How long have you lived here?"]},
  {t:"mcq", title:"Choose the correct question", items:[
    ["",["Where you live?","Where do you live?","Where does you live?"],1],["",["What did you do yesterday?","What you did yesterday?","What did you did yesterday?"],0],
    ["",["Who wrote this book?","Who did write this book?","Who writes did this book?"],0],["She's Chilean, ___?",["is she","isn't she","doesn't she"],1]]},
  {t:"game", title:"20 Questions ❓", rules:["Un estudiante piensa en un objeto, persona o lugar.","El curso tiene 20 preguntas Yes/No para adivinar (en distintos tiempos).","Solo puede responder con respuestas cortas: <i>Yes, it is / No, it doesn't…</i>"],
    cards:["Pensar en: un animal","Pensar en: un famoso","Pensar en: un lugar de Chile","Pensar en: un objeto de la sala","Pensar en: una comida"]},
  {t:"speak", title:"Celebrity interview 🎤", task:"Uno es periodista, el otro una celebridad. Hagan 6 preguntas en 3 tiempos distintos.", min:7,
    frame:["Where were you born?","What are you working on now?","What will you do next year?","Can you ___?"]},
  {t:"exit", items:["Escribe 1 pregunta en presente, 1 en pasado y 1 en futuro.","¿Cuál es la diferencia entre <i>Who called you?</i> y <i>Who did you call?</i>"]}
  ]},

{ title:"Polite Requests & Suggestions", tema:"Can / Could / Would you mind…? · Let's / Why don't we / How about…?", min:90,
  obj:"Hacer peticiones corteses y sugerencias, aceptando o rechazando apropiadamente.",
  can:["Pedir algo con can / could / would you mind + -ing.","Sugerir con Let's, Why don't we, How about + -ing.","Aceptar y rechazar con cortesía."],
  slides:[
  {t:"warm", title:"Polite or rude?", intro:"¿Es educado (😊) o descortés (😠)?", items:[["Give me your pen!","😠"],["Could you lend me your pen, please?","😊"],["Close the door.","😠 (imperativo directo)"],["Would you mind closing the door?","😊😊"]]},
  {t:"tbl", title:"Requests (peticiones)", head:["Level","Request","Answer"], rows:[
    ["informal","<b>Can</b> you help me?","Sure! / Of course."],["polite","<b>Could</b> you open the window, please?","No problem."],
    ["very polite","<b>Would you mind</b> open<b>ing</b> the window?","Not at all. (= no me molesta ✅)"],["permission","<b>Can / Could / May I</b> go to the bathroom?","Yes, you can. / Sorry, not now."]],
    note:"⚠️ <i>Would you mind…?</i> → si aceptas, responde <b>No / Not at all</b> (no me molesta)."},
  {t:"tbl", title:"Suggestions (sugerencias)", head:["Structure","Example","Reply"], rows:[
    ["Let's + verb","<b>Let's</b> go to the beach!","Good idea! / I'd rather not."],["Why don't we + verb?","<b>Why don't we</b> study together?","Sounds great!"],
    ["How / What about + -ing?","<b>How about</b> watch<b>ing</b> a movie?","I'm not sure…"],["You should + verb","You <b>should</b> see a doctor.","You're right."]]},
  {t:"mcq", title:"Choose the best option", items:[
    ["___ you pass me the salt, please?",["Could","Should","Let's"],0],["How about ___ to the cinema?",["go","going","to go"],1],
    ["Would you mind ___ the music down?",["turn","turning","to turn"],1],["Why don't we ___ a pizza?",["order","ordering","to order"],0],
    ["A: Would you mind waiting? B: ___",["Yes, I mind. Sure!","Not at all.","No, I would."],1]]},
  {t:"speak", title:"Plan the class trip 🚌", task:"En grupos, sugieran y negocien un paseo de curso. Deben ponerse de acuerdo en destino, día y comida.", min:8,
    frame:["Let's go to ___!","Why don't we ___?","How about ___-ing?","That's a good idea, but ___. / Sounds great!"]},
  {t:"game", title:"Request Role-cards 🎭", rules:["Dos estudiantes sacan una tarjeta de situación.","Improvisan un diálogo de 30 segundos usando peticiones y sugerencias.","El curso da 1 punto si usaron estructuras corteses."],
    cards:["Pide prestado un cargador","Pide permiso para salir antes","Sugiere qué ver en Netflix","Pide al profesor repetir","Pide a un vecino bajar la música","Sugiere dónde almorzar","Pide indicaciones a un turista","Pide ayuda con una tarea"]},
  {t:"exit", items:["Escribe una petición con could y otra con would you mind.","Escribe 2 sugerencias para el fin de semana.","¿Cómo aceptas un <i>Would you mind…?</i>"]}
  ]},

{ title:"Shopping, Money & Clothes", tema:"Ropa · tallas · precios · too / enough · diálogo en tienda", min:90,
  obj:"Desenvolverse en situaciones de compra de ropa, preguntando por tallas, precios y probándose prendas.",
  can:["Nombrar 15 prendas de ropa.","Usar frases de tienda: Can I try it on?","Usar too / (not) enough: It's too big."],
  slides:[
  {t:"warm", title:"What are they wearing?", intro:"Describe la ropa de 3 compañeros:", items:[["Modelo","Sofía is wearing a black hoodie, blue jeans and white sneakers."]]},
  {t:"exp", title:"Clothes", html:"<div class='cols'><div class='rule'>👕 t-shirt · shirt · hoodie · sweater · jacket · coat · dress · skirt</div><div class='rule'>👖 jeans · trousers · shorts · tracksuit · sneakers · boots · cap · scarf</div></div><div class='tip'>Algunas palabras siempre plural: <b>jeans, trousers, shorts, glasses</b> → <i>These jeans <b>are</b>… / a pair of jeans</i></div>"},
  {t:"tbl", title:"At the clothes shop", head:["Customer 🧍","Shop assistant 🧑‍💼"], rows:[
    ["I'm looking for a jacket.","What size are you? (S / M / L)"],["Can I try it on?","Sure, the fitting room is over there."],["It's too small. Have you got a bigger one?","Here's a large."],
    ["How much is it?","It's 25,990 pesos. It's on sale!"],["Can I pay by card?","Yes, of course. / Cash or card?"]]},
  {t:"exp", title:"too / enough", html:"<div class='rule'><b>too + adjective</b> = demasiado (problema)<br>These shoes are <b>too</b> expensive.</div><div class='rule'><b>adjective + enough</b> = suficiente<br>The jacket is<b>n't</b> warm <b>enough</b> for Punta Arenas.<br>Do you have <b>enough</b> money? (enough + noun)</div>"},
  {t:"gap", title:"Complete", items:[
    ["Can I try ___ on?","it|them"],["These jeans are ___ big. I need a smaller size.","too"],["Is it cheap ___? I only have $10,000.","enough"],
    ["How much ___ these sneakers?","are"],["Can I pay ___ card?","by"]]},
  {t:"speak", title:"Role-play: Mall Marina", task:"Representen una compra completa: saludo, talla, probador, precio, pago.", min:8,
    frame:["Excuse me, I'm looking for ___.","Can I try it on?","It's too ___. Have you got a ___ one?","I'll take it! / I'll think about it."]},
  {t:"game", title:"Fashion Show 👗", rules:["Un voluntario camina como modelo.","El 'comentarista' de cada equipo describe su ropa en 20 segundos.","Puntos por cada prenda + color + adjetivo correcto."],
    cards:["Modelo voluntario 1","Modelo voluntario 2","Modelo voluntario 3","Describe al profesor","Describe a un famoso"]},
  {t:"exit", items:["Escribe lo que llevas puesto hoy.","Escribe 1 oración con too y 1 con enough.","¿Cómo preguntas si te puedes probar algo?"]}
  ]},

{ title:"At the Restaurant & At the Doctor", tema:"Pedir comida · síntomas · should / shouldn't", min:90,
  obj:"Pedir comida en un restaurante y describir síntomas de salud recibiendo consejos con should.",
  can:["Pedir comida con I'd like… / Could I have…?","Describir síntomas: I have a headache.","Dar consejos con should / shouldn't."],
  slides:[
  {t:"warm", title:"Chilean menu in English 🇨🇱", intro:"¿Cómo explicarías estas comidas a un turista?", items:[["Empanada de pino","a pastry filled with meat, onion, egg and olive"],["Completo","a hot dog with tomato, avocado and mayo"],["Pastel de choclo","a corn pie with meat"],["Chorrillana","fries with meat, onion and egg"]]},
  {t:"tbl", title:"At the restaurant", head:["Waiter 🧑‍🍳","Customer 🍽️"], rows:[
    ["Are you ready to order?","Yes. I'd like the fish, please."],["What would you like to drink?","Could I have a juice, please?"],["Would you like a dessert?","No, thanks. Just the bill, please."],["Anything else?","Can we have some bread?"]],
    note:"<b>I'd like</b> (I would like) es más cortés que <i>I want</i>."},
  {t:"tbl", title:"At the doctor", head:["Symptom","Advice (should / shouldn't)"], rows:[
    ["I have a headache. 🤕","You should take a painkiller and rest."],["I have a sore throat.","You should drink warm tea. You shouldn't drink cold water."],
    ["I have a stomachache.","You shouldn't eat fast food."],["I have a fever / a cold / the flu.","You should stay in bed."],["I feel seasick. 🌊","You should look at the horizon."]]},
  {t:"mcq", title:"Choose the best answer", items:[
    ["Waiter: What would you like?",["I'd like the soup, please.","I like soup.","I would to like soup."],0],["I have a toothache. You should…",["eat candy","go to the dentist","play football"],1],
    ["You ___ use your phone before sleeping.",["should","shouldn't"],1],["Could I have ___ bill, please?",["a","the","an"],1]]},
  {t:"match", title:"Symptom → Advice", pairs:[["a headache","take a painkiller"],["a cough","drink honey and lemon"],["a broken arm","go to the hospital"],["sunburn","use sunscreen next time"],["tired eyes","stop looking at screens"]]},
  {t:"speak", title:"Role-play x2", task:"Escena 1: restaurante en el Cerro Alegre. Escena 2: consulta médica. Cambien roles.", min:10,
    frame:["Are you ready to order? — I'd like ___.","What's the matter? — I have a ___.","How long have you felt like this? — Since ___.","You should ___. You shouldn't ___."]},
  {t:"exit", items:["Pide comida y bebida de forma cortés (2 oraciones).","Escribe 2 síntomas y un consejo para cada uno."]}
  ]},

{ title:"Present Perfect — Experiences", tema:"have / has + participio · ever / never · vs Past Simple", min:90,
  obj:"Hablar de experiencias de vida con el Present Perfect y contrastarlo con el Past Simple.",
  can:["Formar el Present Perfect con have/has + participio.","Preguntar: Have you ever…?","Elegir entre Present Perfect (¿cuándo? no importa) y Past Simple (momento específico)."],
  slides:[
  {t:"warm", title:"Have you ever…?", intro:"Levántate si lo has hecho alguna vez:", items:["…been to Easter Island?","…seen a whale?","…eaten sushi?","…travelled by ship?","…broken a bone?"]},
  {t:"tbl", title:"Present Perfect", head:["","Form","Example"], rows:[
    ["✅","have / has + past participle","I <b>have visited</b> Chiloé. She<b>'s seen</b> a whale."],["❌","haven't / hasn't + participle","We <b>haven't been</b> to Peru."],
    ["❓","Have / Has + subject + participle?","<b>Have</b> you ever <b>sailed</b>? — Yes, I have."]],
    note:"Participios irregulares: be → <b>been</b> · see → <b>seen</b> · eat → <b>eaten</b> · go → <b>gone/been</b> · do → <b>done</b> · write → <b>written</b>"},
  {t:"exp", title:"Present Perfect vs Past Simple", html:"<div class='cols'><div class='rule'><b>Present Perfect</b><br>Experiencia, sin tiempo específico<br>I <b>have been</b> to Argentina.<br>Key words: ever, never, already, yet, just</div><div class='rule'><b>Past Simple</b><br>Tiempo específico terminado<br>I <b>went</b> to Argentina <b>in 2023</b>.<br>Key words: yesterday, last…, ago, in 2020</div></div><div class='ex'>A: <b>Have</b> you ever <b>been</b> to Easter Island?<br>B: Yes, I <b>have</b>! I <b>went</b> there last summer. It <b>was</b> amazing!</div>"},
  {t:"gap", title:"Write the past participle", items:[
    ["I have never ___ (eat) octopus.","eaten"],["Has she ever ___ (be) to Brazil?","been"],["We have ___ (see) that movie three times.","seen"],
    ["They have ___ (finish) the project.","finished"],["He has ___ (write) a song.","written"]]},
  {t:"mcq", title:"Present Perfect or Past Simple?", items:[
    ["I ___ to Santiago last week.",["have gone","went"],1],["___ you ever ridden a horse?",["Have","Did"],0],
    ["She ___ her phone yesterday.",["has lost","lost"],1],["I ___ never ___ snow.",["have / seen","did / see"],0],["We ___ the test two days ago.",["have taken","took"],1]]},
  {t:"game", title:"Never Have I Ever ✋", rules:["Todos levantan 5 dedos.","El profesor (o un estudiante) lee: <i>Never have I ever…</i>","Si TÚ sí lo has hecho, bajas un dedo y dices: <i>I have! I ___ when ___</i> (Past Simple)."],
    cards:["…been on a ship","…eaten a completo italiano","…met a famous person","…lost my phone","…swum in the Pacific","…climbed a hill in Valparaíso","…seen a sea lion","…played a sport in a team","…cooked for my family","…travelled alone"]},
  {t:"speak", title:"Experience interview", task:"Pregunta <i>Have you ever…?</i>. Si responde Yes, pide detalles con Past Simple.", min:7,
    frame:["Have you ever ___?","Yes, I have. / No, I haven't.","When did you ___? Where? Who with?","How was it?"]},
  {t:"exit", items:["Escribe 2 experiencias que has tenido y 1 que nunca has tenido.","Escribe una pregunta Have you ever…? y su respuesta con detalle en Past Simple.","¿Por qué está mal <i>I have gone to Viña yesterday</i>?"]}
  ]}
]}
]};
