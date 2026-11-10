/* =========================================================
   PRONUNCIACIÓN — ampliación por clase
   groups: [sonido, regla, [palabras]] · sent: oraciones de práctica · tip: reemplaza el consejo
   ========================================================= */
window.PRONX = {
"1m":[
 [ {groups:[["/eɪ/","como 'ei'",["A","H","J","K"]],["/iː/","como 'i' larga",["B","C","D","E","G","P","T","V"]],["/e/","como 'e'",["F","L","M","N","S","X","Z"]],["/aɪ/ · /əʊ/ · /uː/ · /ɑː/","I Y · O · Q U W · R",["I","Y","O","Q","U","W","R"]]],
    sent:["Hi! I'm Kevin. K-E-V-I-N.","My name is Jessica. J-E-S-S-I-C-A.","How do you spell IMV? I-M-V."]},
   {sent:["I'm a student and you're my classmate.","He's from Viña and she's from Valparaíso.","We're in 1° Medio and they're in 2° Medio."]},
   {sent:["Are you tired? ↗ — No, I'm not. ↘","Is it your bag? ↗ — Yes, it is. ↘","Are they from Chile? ↗ — Yes, they are. ↘"]},
   {groups:[["-TEEN","acento al FINAL: thir-TEEN",["thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]],["-TY","acento al INICIO: THIR-ty",["thirty","forty","fifty","sixty","seventy","eighty","ninety"]]],
    sent:["I'm fifteen, not fifty!","The bus number is thirteen, not thirty.","My birthday is on May fourteenth."]},
   {groups:[["País","Country",["Chile","Japan","Brazil","Peru","Mexico","Canada"]],["Nacionalidad","Nationality",["Chilean","Japanese","Brazilian","Peruvian","Mexican","Canadian"]]],
    sent:["I'm from Chile. I'm Chilean.","She's from Japan. She's Japanese.","They're from Brazil. They're Brazilian."]}
 ],
 [ {groups:[["/s/","después de p, t, k, f",["Mike's","Pat's","Jack's","Jeff's"]],["/z/","después de vocal o sonido sonoro",["Ana's","Pedro's","Tom's","Ben's"]],["/ɪz/","después de s, sh, ch, x → una sílaba más",["Luis's","Josh's","Max's","Mitch's"]]],
    sent:["This is Ana's phone and that's Mike's cap.","Luis's bike is next to Josh's bag."]},
   {sent:["My mother and my father are together.","My brother has another cousin.","This is my uncle's house."]},
   {sent:["He has a happy horse.","Her house has a big hall.","Harry has hair on his head!"]},
   {groups:[["/ɪ/ corta","boca relajada, sonido breve",["this","it","ship","sit","fill","live"]],["/iː/ larga","sonríe y alarga: 'iii'",["these","eat","sheep","seat","feel","leave"]]],
    sent:["This is a ship, these are sheep!","Sit in this seat, please.","Is it his? Yes, it is."]},
   {sent:["He's tall, slim and blond.","She has straight black hair.","My dad has a big beard and short hair."]}
 ],
 [ {sent:["I wake up at six.","I get up and get dressed.","I go to bed at eleven."]},
   {groups:[["/s/","después de p, t, k, f",["works","eats","sleeps","walks","laughs"]],["/z/","después de vocal o sonido sonoro",["plays","goes","reads","swims","lives"]],["/ɪz/","después de s, sh, ch, x, z → una sílaba más",["watches","washes","fixes","teaches","uses"]]],
    sent:["She works at the port and plays volleyball.","He watches TV and washes the dishes.","My mom teaches and my dad fixes cars."]},
   {sent:["What do you do? ↘","Where does she live? ↘","Do you like it? ↗ — Yes, I do."]},
   {sent:["I always make my bed.","She usually walks to school.","We sometimes go to the beach, but we never swim."]},
   {sent:["It's quarter past eight.","The class starts at half past nine.","We finish at twenty to five."]}
 ],
 [ {sent:["There's a bank and there are two parks.","Is there a cinema? — No, there isn't.","Are there any shops? — Yes, there are."]},
   {sent:["Can I have a cup of tea, please?","There's some bread and a bottle of milk.","Are there any eggs? — Yes, there are some."]},
   {groups:[["the /ðə/","+ sonido consonante",["the ship","the sea","the bank","the port"]],["the /ði/","+ sonido vocal",["the apple","the ocean","the end","the island"]],["a / an","según el SONIDO",["an hour","a uniform","an engineer","a university"]]],
    sent:["The ship is in the ocean.","I have an apple and a uniform.","Wait an hour at the port."]},
   {sent:["Excuse me, where's the port, please?","Go straight and turn left at the corner.","Thank you very much! — You're welcome!"]},
   {sent:["It's three thousand five hundred pesos.","How much are they? They're twenty thousand.","A completo is two thousand pesos."]}
 ]
],
"2m":[
 [ {groups:[["/d/","después de vocal o sonido sonoro",["bored","worried","annoyed","scared","surprised"]],["/t/","después de p, k, s, sh, ch, f (sordos)",["relaxed","shocked","stressed","impressed"]],["/ɪd/","solo después de t o d → una sílaba más",["excited","interested","disappointed","exhausted","frustrated"]]],
    sent:["I'm excited, but a bit worried.","She was really interested and relaxed.","We were bored and disappointed."]},
   {groups:[["can /kən/","débil, corta",["I can swim.","She can draw.","We can sail."]],["can't /kɑːnt/","fuerte, larga",["I can't swim.","She can't draw.","We can't sail."]]],
    sent:["I can swim, but I can't dance.","Can you play the guitar? — Yes, I can.","She can sing, but she can't draw."]},
   {sent:["I'm waiting for the bus.","They're running and climbing.","It's raining and the sun isn't shining."]},
   {sent:["She usually walks, but today she's running.","We normally study, but this week we're travelling."]},
   {sent:["I play the guitar and the piano.","She does gymnastics and plays volleyball.","We go swimming on Saturdays."]}
 ],
 [ {sent:["I see your point, but I don't agree.","Exactly! I think so too.","In my opinion, uniforms are useful."]},
   {sent:["I'll call you tomorrow.","It won't rain — I promise!","I want to go, but I won't go today."]},
   {sent:["What are you going to do?","I'm going to study engineering.","Look! It's going to rain."]},
   {sent:["The phone! I'll get it!","We're going to travel next week.","This time tomorrow I'll be sailing."]},
   {sent:["If we recycle, the sea will be cleaner.","Unless you hurry, you'll miss the bus.","If it's sunny, we'll go to the beach."]}
 ],
 [ {sent:["I was at home, but they were at the beach.","Was it fun? — Yes, it was!","We weren't late."]},
   {focus:"Pronunciación de -ed: /t/ · /d/ · /ɪd/",
    groups:[["/t/","Después de sonidos SORDOS (la garganta no vibra): p, k, s, sh, ch, f, x",["worked","stopped","watched","washed","laughed","fixed","walked","helped","kissed","danced"]],
            ["/d/","Después de vocales y sonidos SONOROS (la garganta vibra): b, g, l, m, n, r, v, z",["played","lived","cleaned","called","stayed","travelled","opened","arrived","studied","loved"]],
            ["/ɪd/","SOLO después de T o D → se agrega una sílaba",["wanted","visited","started","needed","decided","waited","painted","ended","landed","rested"]]],
    sent:["I walked to the port and watched the ships.","We played, cleaned and travelled.","They visited Chiloé and wanted to stay."],
    tip:"🖐️ Truco: pon la mano en tu garganta y di el último sonido del verbo base. ¿Vibra? → /d/ (play-<b>d</b>). ¿No vibra? → /t/ (work-<b>t</b>). ¿Termina en t o d? → /ɪd/ (want-<b>id</b>). ⚠️ No digas “work-ED”: worked tiene UNA sílaba."},
   {sent:["I was sailing when the storm started.","While we were fishing, the wind was blowing."]},
   {sent:["Valparaíso is smaller than Santiago.","It's the most beautiful city in Chile.","My phone is as old as yours."]},
   {sent:["It's sunny and warm in the afternoon.","There's a terrible drought in the north.","It was cloudy and foggy this morning."]}
 ],
 [ {sent:["Where did you study? ↘","Did you like it? ↗","When can you start? ↘"]},
   {sent:["Could you open the window, please?","Would you mind waiting a minute?","How about going to the beach?"]},
   {sent:["I'd like a shirt and a skirt.","These clothes are too small.","Can I try these shoes on?"]},
   {sent:["You should rest and drink water.","I could take some medicine.","My stomach hurts and I have a cough."]},
   {sent:["I've been to Chiloé.","She's never seen snow.","Have you ever eaten sushi? — No, I haven't."]}
 ]
]};
