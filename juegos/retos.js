/* =========================================================
   RETOS — desafíos variados (además de las preguntas de alternativas)
   order: ordenar palabras · tf: verdadero/falso relámpago · speak: hablar
   mime: mímica · draw: dibujar · spell: deletrear · twister: trabalenguas
   duel: duelo entre dos equipos · mystery: caja misteriosa · mcq: pregunta
   ========================================================= */
window.RETOS = {
types:{
  mcq:{i:'❓',n:'Pregunta',pts:200,c:'#3d9bff'},
  order:{i:'🧩',n:'Ordena la oración',pts:200,c:'#ff7a45'},
  tf:{i:'✅❌',n:'Verdadero o falso relámpago',pts:0,c:'#22c47a'},
  speak:{i:'🎤',n:'¡A hablar!',pts:300,c:'#ff5fa2'},
  mime:{i:'🎭',n:'Mímica',pts:200,c:'#a66bff'},
  draw:{i:'🎨',n:'Dibuja y adivina',pts:200,c:'#ffb020'},
  spell:{i:'🔤',n:'Deletrea',pts:150,c:'#13c4a3'},
  twister:{i:'😜',n:'Trabalenguas',pts:200,c:'#ff4d8d'},
  duel:{i:'⚔️',n:'Duelo',pts:300,c:'#7b61ff'},
  mystery:{i:'🎁',n:'Caja misteriosa',pts:0,c:'#2a1f5c'}
},
speak:{
  _:["Say 3 correct sentences about this topic in 30 seconds.","Make 2 questions with this grammar and ask another team.","Say 3 sentences about your classmates using this grammar."],
  general:["Say 3 facts about Chile in English.","Describe your favourite place in Valparaíso in 3 sentences.","Name 5 animals in English in 15 seconds.","Say 5 countries and their nationalities.","Tell us your favourite food and why in 3 sentences."],
  tobe:["Introduce a classmate: name, age, where he/she is from.","Say 3 sentences about yourself with am / is / are.","Describe the weather and how you are today."],
  waswere:["Where were you last weekend? Say 3 sentences.","Describe your last birthday: where were you? Who was there?","Say 3 sentences about Valparaíso 100 years ago with 'there was / there were'.","How was your day yesterday? Say 3 sentences with was / were."],
  ps:["Describe your morning routine in 4 sentences.","Describe the routine of a family member (he / she + -s).","Say 3 things you never, sometimes and always do."],
  pc:["Look around: say 4 things that people are doing right now.","Describe what your family is probably doing now.","Choose a classmate and describe what he/she is wearing and doing."],
  psvpc:["Say what you usually do on Saturdays and what you are doing this week.","Compare your normal routine with today."],
  past:["What did you do last weekend? Say 4 sentences.","Tell a short story that starts with 'Yesterday I…'.","Say 3 things you didn't do yesterday."],
  pcont:["What were you doing yesterday at 8 p.m.? And your family?","Tell a story with 'I was … when …'."],
  comp:["Compare two classmates (taller, faster, funnier…). Be nice!","Compare Valparaíso and Santiago in 3 sentences.","Say the biggest, the best and the most interesting thing you know."],
  fut:["Say 3 plans for next weekend with 'going to'.","Make 3 predictions about the year 2050 with 'will'.","Tell us what you are going to do after school."],
  pp:["Say 3 things you have never done.","Ask another team 3 'Have you ever…?' questions.","Say 2 things you have already done today and 1 you haven't done yet."],
  can:["Say 3 things you can do and 2 you can't.","Ask the teacher 3 polite requests with 'Could you…?'."],
  modals:["Say 3 rules of our school with must / mustn't.","Give 3 pieces of advice to a new student with should.","Say 2 things you don't have to do on weekends."],
  cond:["Complete: 'If I won a million pesos, I would…' (3 ideas).","Complete: 'If it rains tomorrow, …' (3 ideas)."],
  there:["Describe our classroom with there is / there are (4 sentences).","Describe your bedroom with there is / there are."],
  have:["Say 3 things you have and 2 you don't have.","Describe a family member: what does he/she have?"],
  prepplace:["Say where 4 objects in the classroom are (in, on, under, next to…).","Describe where your house is (next to, opposite, between…)."],
  preptime:["Say 4 sentences with at / on / in about your week.","When is your birthday? When do you have English? Answer with at/on/in."],
  adj:["Describe a famous person with 4 adjectives (no names!). Others guess.","Describe your best friend with 3 adjectives."],
  likes:["Say 2 things you love doing, 1 you don't mind and 1 you hate.","Ask another team 3 questions: 'Do you like …ing?'."],
  imper:["Give the teacher 3 instructions (polite and funny!).","Give directions from the classroom to the bathroom."],
  whq:["Ask the teacher 4 different WH- questions.","Ask a classmate 3 questions: Where…? When…? Why…?"],
  connect:["Tell a short story with first, then, after that and finally.","Say 3 sentences with because, so and but."],
  count:["Say what is in your fridge with some / any (4 sentences).","Ask another team 2 questions with How much…? and How many…?"],
  articles:["Say 5 objects in the room with a or an.","Say 3 jobs with a / an (a teacher, an engineer…)."],
  plurals:["Say the plural of 5 things you can see.","Count 5 objects in the room (two chairs, three windows…)."],
  demonst:["Point and say 4 sentences with this / that / these / those.","Ask 'What's this?' about 3 objects."],
  pron:["Talk about your family using my, his, her, their (3 sentences)."],
  posspron:["Take 3 objects from classmates and say 'This is mine / his / hers'."],
  adv:["Describe how you do 3 things (quickly, slowly, well…).","Say 4 sentences with always, usually, sometimes, never."],
  tooenough:["Say 3 things that are too expensive, too difficult or too far.","Say 2 things you are old enough to do."]
},
mime:["cooking","swimming","brushing your teeth","playing the guitar","riding a horse","fishing","surfing","taking a selfie","sleeping in class","climbing a mountain","driving a bus","dancing cueca",
  "eating spaghetti","walking a dog","rowing a boat","playing video games","washing the dishes","reading a book","flying a kite","playing football","singing in the shower","painting a wall","doing yoga","texting a friend"],
draw:["ship","lighthouse","whale","anchor","pizza","guitar","bicycle","octopus","rainbow","castle","rocket","dinosaur","umbrella","penguin","volcano","robot","sandwich","helicopter","snowman","spider","sun glasses","funicular","sea lion","birthday cake"],
twister:["She sells seashells by the seashore.","Red lorry, yellow lorry.","Peter Piper picked a peck of pickled peppers.","How much wood would a woodchuck chuck?","Six slippery snails slid slowly seaward.","I scream, you scream, we all scream for ice cream!",
  "Toy boat, toy boat, toy boat.","A big black bear sat on a big black rug.","Which witch is which?","Fresh fried fish, fish fresh fried.","Three free throws.","Can you can a can as a canner can can a can?","Eleven elephants elegantly equipped."],
spell:["beautiful","Wednesday","February","yesterday","delicious","necessary","restaurant","umbrella","lighthouse","engineer","Valparaíso","weather","because","friend","believe","neighbour","teacher","morning","people","island"],
mystery:[["🎉","¡Premio! +300 puntos","add",300],["😱","¡Ups! −100 puntos","add",-100],["🎊","¡Fiesta! Todos los equipos ganan +100","all",100],["🦹","¡Robo! Quita 200 puntos al equipo que va primero","steal",200],
  ["⭐","¡Doble! Tu próximo acierto vale el doble","double",0],["💨","Nada por aquí… pasa el turno","none",0],["🔄","¡Cambio! Intercambia tu puntaje con el equipo que va último","swap",0],["🍀","¡Suerte! +150 puntos","add",150]]
};

/* ---------- motor de retos ---------- */
var CH={cur:null,dbl:{},
  word:function(){var w=[];catsActive().forEach(function(c){c.q.forEach(function(q){var x=q[2][q[3]];if(/^[A-Za-z]{5,12}$/.test(x))w.push(x);});});return w.length>8&&Math.random()<.6?w[Math.floor(Math.random()*w.length)]:RETOS.spell[Math.floor(Math.random()*RETOS.spell.length)];},
  sentences:function(){var out=[];catsActive().forEach(function(c){c.q.forEach(function(q){var t=q[1],a=q[2][q[3]];
      if(t.indexOf('___')>=0&&!/→|↔|=|answers|goes with|\+|—|:/.test(t)){var s=t.replace(/\s*\([^)]*\)/g,'').replace(/^[^A-Za-z_]+/,'').replace('___',a).replace(/\s+/g,' ').trim();
        var wr=q[2].filter(function(o,i){return i!==q[3];});var n=s.split(' ').length;if(n>=3&&n<=12&&/^[A-Z]/.test(s))out.push({s:s,wrong:t.replace(/\s*\([^)]*\)/g,'').replace(/^[^A-Za-z_]+/,'').replace('___',wr[0]).replace(/\s+/g,' ').trim(),lv:q[0]});}
      else if(/^Correct it|^Choose the correct|^Which (is|sentence)/.test(t)&&/[.?!]$/.test(a)&&a.split(' ').length>=3&&a.split(' ').length<=12)out.push({s:a,wrong:q[2][(q[3]+1)%q[2].length],lv:q[0]});});});
    return out;},
  pickType:function(allowed){var a=allowed||['mcq','order','tf','speak','mime','draw','spell','twister','duel','mystery'],w={mcq:3,order:3,tf:2,speak:2,mime:2,draw:1,spell:2,twister:1,duel:2,mystery:1.5};
    if(S.teams.length<2)a=a.filter(function(x){return x!=='duel';});var tot=a.reduce(function(s,x){return s+(w[x]||1);},0),r=Math.random()*tot;
    for(var i=0;i<a.length;i++){r-=w[a[i]]||1;if(r<=0)return a[i];}return a[0];},
  make:function(type){var T=RETOS.types[type],ch={type:type,t:T,time:30};
    if(type==='mcq'||type==='duel'){ch.q=anyQ();ch.pts=type==='duel'?300:ch.q.lv*50+100;ch.time=type==='duel'?20:30;
      if(type==='duel'){var others=S.teams.map(function(_,i){return i;}).filter(function(i){return i!==S.turn;});ch.rival=others[Math.floor(Math.random()*others.length)];}}
    else if(type==='order'){var L=this.sentences();if(!L.length)return this.make('mcq');var x=L[Math.floor(Math.random()*L.length)];ch.s=x.s;var w=x.s.split(' '),sh=shuffle(w),k=0;while(sh.join(' ')===w.join(' ')&&k++<9)sh=shuffle(w);ch.words=sh;ch.pts=150+x.lv*30;ch.time=45;}
    else if(type==='tf'){var L2=shuffle(this.sentences());if(L2.length<5)return this.make('mcq');ch.items=L2.slice(0,5).map(function(x){var ok=Math.random()<.5;return {s:ok?x.s:x.wrong,ok:ok};});ch.i=0;ch.hits=0;ch.time=25;ch.pts=60;}
    else if(type==='speak'){var bk=S.bank==='__mix'?(BK().ids[Math.floor(Math.random()*BK().ids.length)]):S.bank,P=(RETOS.speak[bk]||[]).concat(RETOS.speak._);ch.p=P[Math.floor(Math.random()*P.length)];ch.topic=BANKS[bk]?BANKS[bk].name:'';ch.pts=300;ch.time=40;}
    else if(type==='mime'||type==='draw'){var M=RETOS[type];ch.w=M[Math.floor(Math.random()*M.length)];ch.pts=200;ch.time=60;}
    else if(type==='spell'){ch.w=this.word();ch.pts=150;ch.time=30;}
    else if(type==='twister'){ch.w=RETOS.twister[Math.floor(Math.random()*RETOS.twister.length)];ch.pts=200;ch.time=20;}
    else if(type==='mystery'){ch.m=RETOS.mystery[Math.floor(Math.random()*RETOS.mystery.length)];ch.time=0;}
    if(this.dbl[S.turn]&&ch.pts){ch.pts*=2;ch.doubled=true;}
    return ch;},
  /* HTML del contenido del reto; fin(ok) se llama al resolver los retos autocorregibles */
  body:function(ch){var T=ch.t,team=S.teams[S.turn],L='ABCD',h='';
    var hint={order:'Haz clic en las palabras en el orden correcto.',tf:'¿La oración es correcta? Respondan rápido: 5 oraciones.',speak:'Un integrante del equipo habla en inglés. El profesor decide si lo logró.',
      mime:'Un integrante actúa SIN hablar. Su equipo adivina en inglés: “Are you …ing?”',draw:'Un integrante dibuja en la pizarra SIN letras. Su equipo adivina en inglés.',spell:'Escuchen la palabra y deletréenla en inglés, letra por letra.',
      twister:'Digan el trabalenguas 3 veces seguidas, rápido y sin equivocarse.',duel:'¡Duelo! Responde primero quien pulse su tecla (o levante la mano).',mcq:'Elijan la alternativa correcta.'}[ch.type]||'';
    if(hint)h+='<p style="text-align:center;color:#7a6ba8;font-weight:700;margin:4px 0 10px">'+hint+'</p>';
    if(ch.type==='mcq'||ch.type==='duel'){var q=ch.q;
      if(ch.type==='duel')h+='<div style="text-align:center;font-family:Fredoka;font-size:28px;font-weight:600;margin-bottom:6px">'+team.emoji+' '+esc(team.name)+' ⚔️ '+S.teams[ch.rival].emoji+' '+esc(S.teams[ch.rival].name)+'</div>';
      h+='<div class="qtext">'+esc(q.text)+'</div><div class="opts" id="iopts">'+q.opts.map(function(x,i){return '<button class="op" data-i="'+i+'" '+(ch.type==='mcq'?'onclick="CH.mcq('+i+')"':'onclick="this.classList.toggle(\'pick\')"')+'><span class="l">'+L[i]+'</span>'+esc(x)+'</button>';}).join('')+'</div>';}
    else if(ch.type==='order'){h+='<div class="chipsw" id="ow" style="justify-content:center">'+ch.words.map(function(w,i){return '<button class="w" data-k="'+i+'" onclick="CH.ow(this)">'+esc(w)+'</button>';}).join('')+'</div><div class="built" id="ob"></div>';}
    else if(ch.type==='tf'){h+='<div id="tfbox"></div>';}
    else if(ch.type==='speak'){h+='<div class="qtext">🎤 '+esc(ch.p)+'</div>'+(ch.topic?'<p style="text-align:center;font-weight:800;color:#a66bff">Tema: '+esc(ch.topic)+'</p>':'');}
    else if(ch.type==='mime'||ch.type==='draw'){h+='<div class="secret" id="secret"><button class="btn" onclick="CH.peek()">👀 Ver la palabra (solo el '+(ch.type==='mime'?'actor':'dibujante')+')</button></div>';}
    else if(ch.type==='spell'){h+='<div style="text-align:center"><button class="btn big" onclick="say(CH.cur.w)">🔊 Escuchar la palabra</button><div class="secret" id="secret" style="margin-top:12px"><button class="btn sec" onclick="CH.show()">👁 Mostrar la palabra</button></div></div>';}
    else if(ch.type==='twister'){h+='<div class="qtext">😜 '+esc(ch.w)+'</div><div style="text-align:center"><button class="spk" onclick="say(CH.cur.w)">🔊 Escuchar</button></div>';}
    else if(ch.type==='mystery'){h+='<div class="mbox2"><div class="mbx">🎁</div></div>';}
    return h;},
  head:function(ch,label){var T=ch.t;return '<div class="mtop"><span class="mcat" style="color:'+T.c+'">'+T.i+' '+(label||'')+T.n+'</span>'+(ch.pts?'<span class="mval">'+(ch.doubled?'⭐ ':'')+ch.pts+' pts</span>':'')+(ch.time?'<span class="timer" id="qtimer"></span>':'')+'</div>';},
  /* reto en ventana (tablero/ruleta) */
  inModal:function(ch,label,awardHtml,onAuto){this.cur=ch;this.onAuto=onAuto;stopTimer();QC.q={text:(ch.t.i+' '+ch.t.n+': '+(ch.s||ch.p||ch.w||(ch.q&&ch.q.text)||'')),cat:{name:ch.t.n,icon:ch.t.i},ans:ch.s||ch.w||(ch.q?ch.q.opts[ch.q.a]:'')};
    QC.o={mode:ch.type==='duel'?'teacher':'retos'};QC.done=false;QC.t0=null;QC.tStop=null;QC.limit=0;QC.buzz=null;QC.out=[];
    $('mbox').innerHTML=this.head(ch,label)+this.body(ch)+'<div class="buzz" id="qbuzz"></div><div class="answer" id="qans"></div><div class="award" id="qaward">'+awardHtml+'</div>';$('mo').classList.add('open');
    this.after();},
  after:function(){var ch=this.cur;if(ch.time)startTimer(ch.time,function(){if(ch.done)return;if(ch.type==='tf')CH.tfEnd();else if(ch.type==='mcq')CH.mcq(-1);
      else if(ch.type==='order'){ch.done=true;$('qans').innerHTML='⏰ ✅ '+esc(ch.s);$('qans').classList.add('show');sBad();CH.fin(false);}});
    if(ch.type==='tf')this.tfShow();if(ch.type==='mystery')setTimeout(function(){CH.mystery();},900);},
  peek:function(){var b=$('secret');b.innerHTML='<div class="qtext" style="margin:6px 0">'+esc(this.cur.w)+'</div><p style="text-align:center">Se ocultará en 3 segundos…</p>';
    setTimeout(function(){if($('secret'))$('secret').innerHTML='<p style="text-align:center;font-weight:800">🤫 ¡A '+(CH.cur.type==='mime'?'actuar':'dibujar')+'! <button class="spk" onclick="CH.show()">👁 Mostrar a todos</button></p>';},3000);},
  show:function(){$('secret').innerHTML='<div class="qtext" style="margin:6px 0">'+esc(this.cur.w)+'</div>';},
  mcq:function(k){var ch=this.cur;if(ch.done)return;ch.done=true;stopTimer();markInline(k,ch.q.a);var ok=k===ch.q.a;ok?sOk():sBad();this.fin(ok);},
  ow:function(b){var ob=$('ob');var c=document.createElement('button');c.className='w';c.textContent=b.textContent;
    c.onclick=function(){if(CH.cur.done)return;b.classList.remove('used');c.remove();};ob.appendChild(c);b.classList.add('used');
    if(!document.querySelector('#ow .w:not(.used)')){var got=[].map.call(ob.querySelectorAll('.w'),function(x){return x.textContent;}).join(' ');var ok=got===this.cur.s;this.cur.done=true;stopTimer();
      ob.style.background=ok?'#d9f7e8':'#ffe0e6';if(!ok)$('qans').innerHTML='✅ '+esc(this.cur.s);$('qans').classList.add('show');ok?sOk():sBad();this.fin(ok);}},
  tfShow:function(){var ch=this.cur,it=ch.items[ch.i];if(!it)return this.tfEnd();
    $('tfbox').innerHTML='<p style="text-align:center;font-weight:800;color:#7a6ba8">'+(ch.i+1)+' / '+ch.items.length+' · ✅ '+ch.hits+'</p><div class="qtext">'+esc(it.s)+'</div><div class="opts"><button class="op" style="background:#22c47a" onclick="CH.tf(true)">✅ Correct</button><button class="op" style="background:#ff4d6d" onclick="CH.tf(false)">❌ Wrong</button></div>';},
  tf:function(v){var ch=this.cur;if(ch.done||ch.lock)return;ch.lock=true;var it=ch.items[ch.i],ok=v===it.ok;if(ok){ch.hits++;tone(880,.08);}else tone(200,.15);
    var ops=document.querySelectorAll('#tfbox .op');ops[v?0:1].style.outline='5px solid '+(ok?'#0f8a52':'#2a1f5c');
    setTimeout(function(){ch.lock=false;ch.i++;if(ch.i>=ch.items.length)CH.tfEnd();else CH.tfShow();},ok?350:800);},
  tfEnd:function(){var ch=this.cur;if(ch.done)return;ch.done=true;stopTimer();ch.pts=ch.hits*60*(ch.doubled?2:1);$('tfbox').innerHTML='<div class="qtext">✅ '+ch.hits+' de '+ch.items.length+' correctas</div>';ch.hits>=3?sOk():sBad();this.fin(ch.hits>=3,ch.pts);},
  fin:function(ok,pts){if(this.onAuto)this.onAuto(ok,pts!=null?pts:this.cur.pts);},
  mystery:function(){var m=this.cur.m,t=S.turn,team=S.teams[t];var box=document.querySelector('.mbx');if(box){box.textContent=m[0];box.classList.add('open');}
    $('qans').innerHTML=m[1];$('qans').classList.add('show');
    if(m[2]==='add'){team.score+=m[3];floatPts(t,(m[3]>0?'+':'−')+Math.abs(m[3]),m[3]<0);m[3]>0?sOk():sBad();}
    else if(m[2]==='all'){S.teams.forEach(function(x,i){x.score+=m[3];floatPts(i,'+'+m[3]);});sOk();}
    else if(m[2]==='steal'){var lead=S.teams.map(function(x,i){return i;}).filter(function(i){return i!==t;}).sort(function(a,b){return S.teams[b].score-S.teams[a].score;})[0];if(lead!=null){S.teams[lead].score-=m[3];team.score+=m[3];floatPts(lead,'−'+m[3],true);floatPts(t,'+'+m[3]);}sOk();}
    else if(m[2]==='double'){this.dbl[t]=true;sOk();}
    else if(m[2]==='swap'){var last=S.teams.map(function(x,i){return i;}).filter(function(i){return i!==t;}).sort(function(a,b){return S.teams[a].score-S.teams[b].score;})[0];if(last!=null){var tmp=team.score;team.score=S.teams[last].score;S.teams[last].score=tmp;}tone(600,.2);tone(400,.2,.15);}
    else sBad();
    renderScore();logR(t,true,0,{text:'🎁 '+m[1],cat:{name:'Caja misteriosa'},ans:''});if(this.onAuto)this.onAuto(null,0,true);}
};

/* ---------- juego: Retos locos ---------- */
var RT={
  init:function(){CH.dbl={};this.intro();},
  intro:function(){var t=S.teams[S.turn];
    $('stage').innerHTML='<div class="introcard"><div class="deck" onclick="RT.draw()"><span>🎲</span></div><h2>Turno de '+t.emoji+' '+esc(t.name)+'</h2>'+(CH.dbl[S.turn]?'<p style="color:var(--yellow);font-weight:900">⭐ ¡Su próximo reto vale el doble!</p>':'')+
      '<p style="opacity:.85">Saquen una carta: puede ser una pregunta, ordenar una oración, hablar, mímica, dibujar, deletrear, un trabalenguas, un duelo… ¡o una caja misteriosa!</p>'+
      '<div class="row" style="justify-content:center;margin-top:12px"><button class="btn big" onclick="RT.draw()">🎴 ¡Sacar reto!</button></div>'+
      '<div class="rtypes">'+Object.keys(RETOS.types).map(function(k){var T=RETOS.types[k];return '<span style="background:'+T.c+'">'+T.i+' '+T.n+'</span>';}).join('')+'</div></div>';renderScore();},
  draw:function(){var self=this;$('stage').innerHTML='<div class="introcard"><div class="deck flipping"><span>🎴</span></div><h2>…</h2></div>';tone(500,.08);tone(700,.08,.1);tone(900,.12,.2);
    setTimeout(function(){self.show(CH.make(CH.pickType()));},700);},
  show:function(ch){CH.cur=ch;var T=ch.t,team=S.teams[S.turn],self=this;if(ch.doubled)CH.dbl[S.turn]=false;
    var judge=(ch.type==='speak'||ch.type==='mime'||ch.type==='draw'||ch.type==='spell'||ch.type==='twister');
    var act=judge?'<button style="background:#22c47a" onclick="RT.res(true)">✅ ¡Lo lograron! (+'+ch.pts+')</button><button style="background:#ff4d6d" onclick="RT.res(false)">❌ No lo lograron</button>':
      ch.type==='duel'?'<button style="background:'+COLORS[S.turn]+'" onclick="RT.duel('+S.turn+')">'+team.emoji+' '+esc(team.name)+' ✅</button><button style="background:'+COLORS[ch.rival]+'" onclick="RT.duel('+ch.rival+')">'+S.teams[ch.rival].emoji+' '+esc(S.teams[ch.rival].name)+' ✅</button><button style="background:#555" onclick="RT.duel(null)">😶 Nadie</button><button class="spk" onclick="CH.duelReveal()">💡 Mostrar respuesta</button>':'';
    $('stage').innerHTML='<div class="qcard flipin" style="border-top:10px solid '+T.c+'">'+CH.head(ch,team.emoji+' '+team.name+' · ')+CH.body(ch)+'<div class="buzz" id="qbuzz"></div><div class="answer" id="qans"></div><div class="award" id="qaward">'+act+'</div></div>';
    CH.onAuto=function(ok,pts,myst){if(myst){$('qaward').innerHTML='<button style="background:var(--yellow);color:#2a1f5c" onclick="RT.next()">▶ Siguiente equipo</button>';return;}
      var p=0;if(ok){p=award(S.turn,pts);}else miss(S.turn);logR(S.turn,!!ok,p,{text:T.n+': '+(ch.s||(ch.q&&ch.q.text)||''),cat:{name:T.i+' '+T.n},ans:ch.s||(ch.q?ch.q.opts[ch.q.a]:'')});
      $('qaward').innerHTML='<div style="width:100%;text-align:center;font-weight:900;font-size:20px">'+(ok?'🎉 +'+p+' pts':'😅 ¡Casi!')+'</div><button style="background:var(--yellow);color:#2a1f5c" onclick="RT.next()">▶ Siguiente equipo</button>';};
    QC.o={mode:ch.type==='duel'?'teacher':'retos'};QC.done=false;QC.buzz=null;QC.out=[];CH.after();},
  res:function(ok){stopTimer();var ch=CH.cur;if(ch.type==='mime'||ch.type==='draw'||ch.type==='spell'){if($('secret'))CH.show();}ok?sOk():sBad();CH.onAuto(ok,ch.pts);},
  duel:function(i){stopTimer();var ch=CH.cur;CH.duelReveal();var p=0;if(i!=null){p=award(i,ch.pts);sOk();}else sBad();if(i!==S.turn)miss(S.turn);
    logR(i,i!=null,p,{text:'⚔️ '+ch.q.text,cat:{name:'⚔️ Duelo'},ans:ch.q.opts[ch.q.a]});
    $('qaward').innerHTML='<div style="width:100%;text-align:center;font-weight:900;font-size:20px">'+(i!=null?'🏆 '+S.teams[i].name+' gana el duelo (+'+p+')':'Nadie gana el duelo')+'</div><button style="background:var(--yellow);color:#2a1f5c" onclick="RT.next()">▶ Siguiente equipo</button>';},
  next:function(){stopTimer();if(window.countTurn&&countTurn())return;S.turn=(S.turn+1)%S.teams.length;this.intro();}
};
CH.duelReveal=function(){var ch=CH.cur;if(!ch||!ch.q)return;markInline(-1,ch.q.a);$('qans').innerHTML='✅ '+esc(ch.q.opts[ch.q.a]);$('qans').classList.add('show');};
