/* =========================================================
   GENERADOR DE PREGUNTAS — amplía los bancos de gramática
   Crea preguntas a partir de listas de palabras (sujetos, verbos,
   sustantivos, adjetivos…) y las agrega a las categorías existentes.
   Formato: [nivel 1–5, enunciado, [opciones], índice correcto]
   ========================================================= */
(function(){
var ALL=(window.GRAMMAR||[]).concat(window.GRAMMAR2||[]).filter(Boolean);
function topic(id){if(id==='waswere')return {cats:window.BANCO_WW||[]};return ALL.filter(function(t){return t.id===id;})[0];}
function add(id,catName,list){var t=topic(id);if(!t)return;var c=t.cats.filter(function(x){return x.name===catName;})[0];if(!c)return;
  var seen={};c.q.forEach(function(q){seen[q[1]]=1;});list.forEach(function(q){if(!seen[q[1]]){c.q.push(q);seen[q[1]]=1;}});}
function uniq(a){var o=[];a.forEach(function(x){if(x&&o.indexOf(x)<0)o.push(x);});return o;}
function Q(lv,text,correct,wrong){var w=uniq(wrong).filter(function(x){return x!==correct;}).slice(0,3);return [lv,text,[correct].concat(w),0];}
function lv(i,n){return Math.min(5,1+Math.floor(i*5/n));}
function low(s){return s==='I'||/^(Camila|Pedro|Ana|Diego|Mr\.|Mrs\.)/.test(s)?s:s.charAt(0).toLowerCase()+s.slice(1);}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1);}

/* ---------- sujetos ---------- */
/* [sujeto, am/is/are, was/were, nivel, persona(p)/cosa(t), do/does, have/has] */
var SUBJ=[["I","am","was",1,"p","do","have"],["You","are","were",1,"p","do","have"],["He","is","was",1,"p","does","has"],["She","is","was",1,"p","does","has"],
  ["It","is","was",1,"t","does","has"],["We","are","were",1,"p","do","have"],["They","are","were",1,"p","do","have"],["My mother","is","was",2,"p","does","has"],
  ["My best friend","is","was",2,"p","does","has"],["Our teacher","is","was",2,"p","does","has"],["The dog","is","was",2,"p","does","has"],["Pedro","is","was",2,"p","does","has"],
  ["My parents","are","were",3,"p","do","have"],["The students","are","were",3,"p","do","have"],["My cousins","are","were",3,"p","do","have"],["Camila and Diego","are","were",4,"p","do","have"],
  ["My brother and I","are","were",4,"p","do","have"],["The children","are","were",4,"p","do","have"],["Everybody","is","was",5,"p","does","has"],["The people","are","were",5,"p","do","have"],
  ["The weather","is","was",3,"w","does","has"],["The shops","are","were",3,"s","do","have"],["The news","is","was",5,"n","does","has"]];
var PEOPLE=SUBJ.filter(function(s){return s[4]==='p'&&s[0]!=='It';});
var HUMANS=PEOPLE.filter(function(s){return s[0]!=='The dog';});
var CTX_NOW={p:["from Chile","happy today","in the classroom","at home now","very friendly","tired today","in Valparaíso","at school"],w:["cold today","very nice today"],s:["closed now","open on Sundays"],n:["very good","on TV now"],t:["in my bag","very old"]};
var CTX_PAST={p:["at home yesterday","very tired last night","at the beach last summer","late for school this morning","happy at the party","in Santiago last weekend","sick on Monday","at the concert on Saturday","in the classroom at 8 o'clock","excited about the trip"],
  w:["very cold yesterday","terrible last weekend"],s:["closed last Sunday","open late last night"],n:["surprising yesterday","very sad last week"],t:["in my bag yesterday","very expensive last year"]};
function ctx(s,k,arr){var L=arr[s[4]];return L[k%L.length];}

/* ---------- TO BE ---------- */
var A=[],N=[],QQ=[];
SUBJ.forEach(function(s,i){
  A.push(Q(s[3],s[0]+" ___ "+ctx(s,i,CTX_NOW)+".",s[1],["am","is","are"]));
  A.push(Q(s[3],s[0]+" ___ "+ctx(s,i+3,CTX_NOW)+".",s[1],["am","is","are"]));
  N.push(Q(s[3],s[0]+" ___ "+ctx(s,i+1,CTX_NOW)+". (negative)",s[1]==='am'?"am not":s[1]==='is'?"isn't":"aren't",["am not","isn't","aren't"]));
  QQ.push(Q(s[3],"___ "+low(s[0])+" "+ctx(s,i+2,CTX_NOW)+"?",cap(s[1]),["Am","Is","Are"]));});
add("tobe","Affirmative",A);add("tobe","Negative",N);add("tobe","Questions",QQ);

/* ---------- WAS / WERE ---------- */
A=[];N=[];QQ=[];
SUBJ.forEach(function(s,i){
  A.push(Q(s[3],s[0]+" ___ "+ctx(s,i,CTX_PAST)+".",s[2],["was","were"]));
  A.push(Q(s[3],s[0]+" ___ "+ctx(s,i+5,CTX_PAST)+".",s[2],["was","were"]));
  N.push(Q(s[3],s[0]+" ___ "+ctx(s,i+2,CTX_PAST)+". (negative)",s[2]==='was'?"wasn't":"weren't",["wasn't","weren't"]));
  QQ.push(Q(s[3],"___ "+low(s[0])+" "+ctx(s,i+7,CTX_PAST)+"?",cap(s[2]),["Was","Were"]));});
add("waswere","Was or Were?",A);add("waswere","Negatives",N);add("waswere","Questions",QQ);
/* respuestas cortas: [sujeto pregunta, verbo, pronombre respuesta, verbo respuesta, contexto] */
var SA=[["you","Were","I","was","tired yesterday"],["your mother","Was","she","was","at work yesterday"],["your parents","Were","they","were","at home last night"],["the dog","Was","it","was","hungry this morning"],
  ["Pedro","Was","he","was","at the party"],["the students","Were","they","were","in the classroom"],["Mr. Soto","Was","he","was","angry yesterday"],["the shops","Were","they","were","open on Sunday"],
  ["the test","Was","it","was","difficult"],["you and Ana","Were","we","were","late this morning"],["Ana","Was","she","was","sick last week"],["the weather","Was","it","was","nice in Chiloé"],
  ["your grandparents","Were","they","were","at the beach"],["the film","Was","it","was","boring"],["you","Were","I","was","at the stadium on Sunday"]];
var SY=[],SN=[];
SA.forEach(function(x,i){var L=lv(i,SA.length),neg=x[3]==='was'?"wasn't":"weren't";
  SY.push(Q(L,x[1]+" "+x[0]+" "+x[4]+"? — Yes, "+x[2]+" ___.",x[3],["was","were"]));
  SN.push(Q(L,x[1]+" "+x[0]+" "+x[4]+"? — No, "+x[2]+" ___.",neg,["wasn't","weren't"]));});
add("waswere","Short Answers",SY.concat(SN));
/* there was / were + there is / are */
var TH=[["a dog","in the park",1],["a big ship","at the port",1],["some milk","in the fridge",3],["a party","at my house",1],["an accident","on the highway",2],["a lot of traffic","in the city",4],
  ["some bread","on the table",3],["a strange noise","in the house",2],["a famous singer","at the concert",2],["a lot of noise","in the classroom",4],["an old lighthouse","on the hill",2],["some water","on the floor",3],
  ["two cats","in the garden",1],["many people","at the beach",1],["some students","in the library",2],["three ships","at the port",1],["a lot of cars","in the street",3],["some eggs","in the fridge",2],
  ["five boats","in the bay",1],["a lot of tourists","in Valparaíso",3],["two birds","on the roof",1],["many trees","in the park",2],["some books","on the desk",2],["thirty students","in my class",2]];
var TP=[],TN=[];
TH.forEach(function(x){var sing=!/^(two|three|five|many|some (students|eggs|books)|a lot of (cars|tourists)|thirty)/.test(x[0]);
  TP.push(Q(x[2],"There ___ "+x[0]+" "+x[1]+" yesterday.",sing?"was":"were",["was","were"]));
  TN.push(Q(x[2],"There ___ "+x[0]+" "+x[1]+".",sing?"is":"are",["is","are"]));});
add("waswere","There was / were",TP);add("there","Is or Are?",TN);
/* yesterday & last… */
var YL=[["I","at the dentist","yesterday afternoon"],["We","in Concón","last weekend"],["My sister","at university","last year"],["They","on holiday","last month"],["The museum","closed","last Monday"],
  ["You","very quiet","in class yesterday"],["The trains","full","this morning"],["My grandfather","a fisherman","when he was young"],["The beach","very crowded","last summer"],["Our classes","online","in 2020"]];
add("waswere","Yesterday & Last…",YL.map(function(x,i){var pl=/^(We|They|You|The trains|Our classes)$/.test(x[0]);return Q(lv(i,YL.length),x[0]+" ___ "+x[1]+" "+x[2]+".",pl?"were":"was",["was","were"]);}));

/* ---------- PAST CONTINUOUS / GOING TO / HAVE ---------- */
var ACT=["sleeping at 11 p.m.","watching TV when I called","playing football at 5 o'clock","studying all afternoon","cooking dinner at 8","walking on the beach at sunset","listening to music in the bus"];
add("pcont","Was / Were + -ing",HUMANS.map(function(s,i){return Q(s[3],s[0]+" ___ "+ACT[i%ACT.length]+".",s[2],["was","were"]);}));
var GO=["visit the museum on Sunday","play football tomorrow","study tonight","travel to the south next summer","watch a film this evening","cook dinner later"];
add("fut","Going to",HUMANS.map(function(s,i){return Q(s[3],s[0]+" ___ going to "+GO[i%GO.length]+".",s[1],["am","is","are"]);}));
var OBJ=["a new phone","two brothers","a big house","a lot of homework","long hair","a bike","English on Mondays"];
add("have","Have or Has?",HUMANS.map(function(s,i){return Q(s[3],s[0]+" ___ "+OBJ[i%OBJ.length]+".",s[6],["have","has"]);}));
add("have","Questions",HUMANS.map(function(s,i){return Q(s[3],"___ "+low(s[0])+" have "+OBJ[(i+2)%OBJ.length]+"?",cap(s[5]),["Do","Does"]);}).filter(function(q){return q[1].indexOf("___ I ")!==0;}));

/* ---------- PRESENT SIMPLE ---------- */
var V3=[["play","plays"],["watch","watches"],["study","studies"],["go","goes"],["have","has"],["do","does"],["fix","fixes"],["wash","washes"],["fly","flies"],["cry","cries"],["work","works"],["live","lives"],["teach","teaches"],
  ["miss","misses"],["carry","carries"],["buy","buys"],["say","says"],["catch","catches"],["try","tries"],["enjoy","enjoys"],["kiss","kisses"],["push","pushes"],["mix","mixes"],["relax","relaxes"],["worry","worries"]];
function s3w(b){return [b+'s',b+'es',b.replace(/y$/,'ies'),b];}
add("ps","Spelling -s",V3.map(function(v,i){return Q(lv(i,V3.length),"he / she / it + "+v[0]+" = ___",v[1],s3w(v[0]));}));
var VS=[["go","goes","to school by bus"],["play","plays","football on Saturdays"],["watch","watches","TV at night"],["study","studies","English at IMV"],["live","lives","in Valparaíso"],["have","has","breakfast at 7"],["work","works","at the port"],["do","does","homework after school"],["get up","gets up","at 6:30"],["eat","eats","fish on Fridays"]];
var PA=[],PN=[],PQ=[];
HUMANS.forEach(function(s,i){var v=VS[i%VS.length],v2=VS[(i+4)%VS.length],third=s[5]==='does';
  PA.push(Q(s[3],s[0]+" ___ "+v[2]+".",third?v[1]:v[0],[v[0],v[1]]));
  PN.push(Q(s[3],s[0]+" ___ "+v2[0]+" "+v2[2]+". (negative)",third?"doesn't":"don't",["don't","doesn't"]));
  if(s[0]!=='I')PQ.push(Q(s[3],"___ "+low(s[0])+" "+v[0]+" "+v[2]+"?",cap(s[5]),["Do","Does"]));});
add("ps","Affirmative",PA);add("ps","Negatives",PN);add("ps","Questions",PQ);

/* ---------- -ING ---------- */
var VI=[["make","making"],["take","taking"],["sit","sitting"],["get","getting"],["stop","stopping"],["come","coming"],["dance","dancing"],["study","studying"],["play","playing"],["cut","cutting"],
  ["begin","beginning"],["shop","shopping"],["write","writing"],["die","dying"],["tie","tying"],["see","seeing"],["swim","swimming"],["drive","driving"],["put","putting"],["ride","riding"],["fix","fixing"],["read","reading"],["plan","planning"],["have","having"],["lie","lying"]];
function ingw(b){return [b+'ing',b.replace(/e$/,'')+'ing',b+b.slice(-1)+'ing',b.replace(/ie$/,'y')+'ing'];}
var ING=VI.map(function(v,i){return Q(lv(i,VI.length),v[0]+" + ing = ___",v[1],ingw(v[0]));});
add("pc","Spelling -ing",ING);add("likes","Spelling -ing",ING.map(function(q){return [q[0],q[1].replace(" + ing = ___"," → ___"),q[2],q[3]];}));
var NOWA=["reading a book now","playing football right now","sleeping at the moment","listening to music now","waiting for the bus now","cooking right now"];
add("pc","Am / Is / Are",SUBJ.filter(function(s){return s[4]==='p';}).map(function(s,i){return Q(s[3],s[0]+" ___ "+NOWA[i%NOWA.length]+".",s[1],["am","is","are"]);}));

/* ---------- PAST SIMPLE ---------- */
var IRR=[["go","went"],["come","came"],["have","had"],["do","did"],["make","made"],["take","took"],["get","got"],["see","saw"],["eat","ate"],["drink","drank"],["buy","bought"],["bring","brought"],
  ["think","thought"],["teach","taught"],["catch","caught"],["find","found"],["give","gave"],["know","knew"],["leave","left"],["lose","lost"],["meet","met"],["pay","paid"],["ride","rode"],["run","ran"],
  ["say","said"],["sell","sold"],["send","sent"],["sing","sang"],["sit","sat"],["sleep","slept"],["speak","spoke"],["spend","spent"],["stand","stood"],["swim","swam"],["tell","told"],["wake","woke"],
  ["wear","wore"],["win","won"],["write","wrote"],["break","broke"],["build","built"],["choose","chose"],["drive","drove"],["fall","fell"],["feel","felt"],["fly","flew"],["forget","forgot"],["grow","grew"],
  ["hear","heard"],["keep","kept"],["begin","began"],["become","became"],["draw","drew"],["throw","threw"],["steal","stole"],["understand","understood"],["fight","fought"],["hold","held"],["ring","rang"],["hide","hid"]];
add("past","Irregular Verbs",IRR.map(function(v,i){var other=IRR[(i+7)%IRR.length][1];return Q(lv(i,IRR.length),v[0]+" → ___ (past)",v[1],[v[0]+'ed',v[0].replace(/e$/,'')+'ed',other]);}));
var REG=[["work","worked"],["play","played"],["watch","watched"],["clean","cleaned"],["help","helped"],["open","opened"],["live","lived"],["dance","danced"],["arrive","arrived"],["love","loved"],["decide","decided"],
  ["study","studied"],["try","tried"],["cry","cried"],["carry","carried"],["stay","stayed"],["enjoy","enjoyed"],["stop","stopped"],["plan","planned"],["drop","dropped"],["shop","shopped"],["visit","visited"],["want","wanted"],["prefer","preferred"],["worry","worried"]];
function edw(b){return [b+'ed',b+'d',b.replace(/e$/,'')+'ed',b+b.slice(-1)+'ed',b.replace(/y$/,'ied'),b.replace(/y$/,'yed')];}
add("past","Regular Verbs",REG.map(function(v,i){return Q(lv(i,REG.length),v[0]+" → ___",v[1],edw(v[0]));}));

/* ---------- PRESENT PERFECT ---------- */
var PP=[["see","saw","seen"],["eat","ate","eaten"],["go","went","gone"],["write","wrote","written"],["be","was","been"],["do","did","done"],["take","took","taken"],["give","gave","given"],["speak","spoke","spoken"],
  ["break","broke","broken"],["drive","drove","driven"],["fly","flew","flown"],["know","knew","known"],["swim","swam","swum"],["sing","sang","sung"],["drink","drank","drunk"],["begin","began","begun"],
  ["wear","wore","worn"],["choose","chose","chosen"],["forget","forgot","forgotten"],["buy","bought","bought"],["make","made","made"],["find","found","found"],["lose","lost","lost"],["meet","met","met"],
  ["hear","heard","heard"],["ride","rode","ridden"],["steal","stole","stolen"],["fall","fell","fallen"],["grow","grew","grown"]];
add("pp","Participles",PP.map(function(v,i){return Q(lv(i,PP.length),v[0]+" → have ___",v[2],[v[1],v[0]+'ed',v[0]]);}));

/* ---------- COMPARATIVES ---------- */
var CMP=[["small","smaller","smallest"],["cold","colder","coldest"],["fast","faster","fastest"],["young","younger","youngest"],["old","older","oldest"],["cheap","cheaper","cheapest"],["hot","hotter","hottest"],
  ["thin","thinner","thinnest"],["wet","wetter","wettest"],["easy","easier","easiest"],["heavy","heavier","heaviest"],["funny","funnier","funniest"],["busy","busier","busiest"],["pretty","prettier","prettiest"],
  ["large","larger","largest"],["nice","nicer","nicest"],["safe","safer","safest"],["interesting","more interesting","most interesting"],["expensive","more expensive","most expensive"],
  ["dangerous","more dangerous","most dangerous"],["important","more important","most important"],["difficult","more difficult","most difficult"],["comfortable","more comfortable","most comfortable"],
  ["famous","more famous","most famous"],["popular","more popular","most popular"],["good","better","best"],["bad","worse","worst"],["far","farther","farthest"]];
function cw(b){return [b+'er','more '+b,b+b.slice(-1)+'er',b.replace(/y$/,'ier'),b.replace(/e$/,'')+'er'];}
function sw(b){return [b+'est','most '+b,b+b.slice(-1)+'est',b.replace(/y$/,'iest'),'more '+b];}
add("comp","Comparatives",CMP.map(function(v,i){return Q(lv(i,CMP.length),v[0]+" → ___ (comparative)",v[1],cw(v[0]).concat(['more '+v[1]]));}));
add("comp","Superlatives",CMP.map(function(v,i){return Q(lv(i,CMP.length),v[0]+" → the ___",v[2],sw(v[0]).concat([v[1]]));}));

/* ---------- PLURALS ---------- */
var PL=[["car","cars"],["dog","dogs"],["house","houses"],["girl","girls"],["ship","ships"],["dish","dishes"],["glass","glasses"],["church","churches"],["beach","beaches"],["fox","foxes"],["tomato","tomatoes"],
  ["class","classes"],["brush","brushes"],["party","parties"],["family","families"],["story","stories"],["lady","ladies"],["cherry","cherries"],["key","keys"],["toy","toys"],["monkey","monkeys"],
  ["holiday","holidays"],["half","halves"],["life","lives"],["thief","thieves"],["tooth","teeth"],["person","people"],["goose","geese"],["photo","photos"],["piano","pianos"]];
function plw(b){return [b+'s',b+'es',b.replace(/y$/,'ies'),b.replace(/fe?$/,'ves'),b.replace(/y$/,'yes')];}
var PLQ=PL.map(function(v,i){return Q(lv(i,PL.length),"one "+v[0]+" → two ___",v[1],plw(v[0]));});
add("plurals","-s or -es?",PLQ.slice(0,13));add("plurals","-y → -ies",PLQ.slice(13,22));add("plurals","-f → -ves",PLQ.slice(22,25));add("plurals","Irregular",PLQ.slice(25));

/* ---------- ARTICLES ---------- */
var AR=[["egg","an",1],["orange","an",1],["umbrella","an",1],["island","an",2],["elephant","an",1],["onion","an",2],["idea","an",2],["ice cream","an",2],["interesting book","an",3],["old house","an",3],
  ["engineer","an",2],["artist","an",2],["hour","an",4],["honest answer","an",5],["book","a",1],["cat","a",1],["house","a",1],["horse","a",1],["pilot","a",2],["big apple","a",3],["useful tool","a",4],
  ["uniform","a",4],["university","a",4],["European city","a",5],["one-way ticket","a",5],["unicorn","a",4]];
add("articles","A or An?",AR.map(function(x){return Q(x[2],"___ "+x[0],x[1],["a","an"]);}));

/* ---------- PREPOSITIONS OF TIME ---------- */
var PT=[["6 o'clock","at",1],["9:30","at",1],["midnight","at",2],["noon","at",2],["night","at",3],["lunchtime","at",3],["Monday","on",1],["Friday night","on",3],["my birthday","on",2],["May 21st","on",2],
  ["Christmas Day","on",3],["Tuesday morning","on",4],["the weekend (USA)","on",5],["April","in",1],["2025","in",1],["the morning","in",2],["the evening","in",2],["summer","in",1],["the 21st century","in",4],["the 1990s","in",4],["winter","in",1],["the afternoon","in",2]];
add("preptime","Mixed",PT.map(function(x){return Q(x[2],"___ "+x[0],x[1],["at","in","on"]);}));

/* ---------- ADJECTIVES / ADVERBS ---------- */
var OP=[["big","small"],["young","old"],["happy","sad"],["fast","slow"],["rich","poor"],["clean","dirty"],["strong","weak"],["light","heavy"],["open","closed"],["full","empty"],["early","late"],["long","short"],
  ["wide","narrow"],["safe","dangerous"],["hard","soft"],["loud","quiet"],["beautiful","ugly"],["interesting","boring"],["friendly","unfriendly"],["right","wrong"],["new","old"],["thick","thin"]];
add("adj","Opposites",OP.map(function(x,i){return Q(lv(i,OP.length),x[0]+" ↔ ___",x[1],[OP[(i+5)%OP.length][1],OP[(i+11)%OP.length][0]]);}));
var LY=[["quiet","quietly"],["careful","carefully"],["happy","happily"],["bad","badly"],["loud","loudly"],["sad","sadly"],["real","really"],["beautiful","beautifully"],["angry","angrily"],["hard","hard"],
  ["late","late"],["nice","nicely"],["polite","politely"],["perfect","perfectly"],["simple","simply"],["gentle","gently"],["terrible","terribly"],["slow","slowly"],["easy","easily"],["good","well"],["fast","fast"],["early","early"]];
function lyw(b){return [b+'ly',b.replace(/y$/,'ily'),b.replace(/le$/,'ly'),b+'lly',b];}
add("adv","Adjective → Adverb",LY.map(function(x,i){return Q(lv(i,LY.length),x[0]+" → ___ (adverb)",x[1],lyw(x[0]).concat(x[1]==='well'?['goodly']:[]));}));

/* ---------- COUNTABLE ---------- */
var CN=[["chair","countable",1],["egg","countable",1],["banana","countable",1],["bottle","countable",2],["student","countable",1],["cookie","countable",2],["tree","countable",1],["minute","countable",3],["idea","countable",3],["suitcase","countable",4],
  ["rice","uncountable",1],["sugar","uncountable",1],["bread","uncountable",2],["milk","uncountable",1],["homework","uncountable",3],["music","uncountable",2],["furniture","uncountable",4],["advice","uncountable",4],
  ["news","uncountable",5],["luggage","uncountable",5],["traffic","uncountable",3],["salt","uncountable",2],["weather","uncountable",4]];
add("count","Countable or Not?",CN.map(function(x){return Q(x[2],x[0],x[1],["countable","uncountable"]);}));
var MM=CN.map(function(x){var pl=x[1]==='countable'?(x[0]==='suitcase'?'suitcases':x[0]==='cookie'?'cookies':x[0]+'s'):x[0];return Q(x[2],"How ___ "+pl+"?",x[1]==='countable'?'many':'much',["much","many"]);});
add("count","Much or Many?",MM);

/* ---------- DEMONSTRATIVES / PRONOUNS ---------- */
var DM=[["book","books"],["ship","ships"],["chair","chairs"],["phone","phones"],["shoe","shoes"],["boat","boats"],["house","houses"],["key","keys"],["dog","dogs"],["bag","bags"]];
var NEAR=[],FAR=[];DM.forEach(function(d,i){var L=lv(i,DM.length);
  NEAR.push(Q(L,"👇 ___ "+d[0]+" is new.","This",["This","These","That"]));NEAR.push(Q(L,"👇 ___ "+d[1]+" are new.","These",["This","These","Those"]));
  FAR.push(Q(L,"👉 ___ "+d[0]+" is old.","That",["That","Those","This"]));FAR.push(Q(L,"👉 ___ "+d[1]+" are old.","Those",["That","Those","These"]));});
add("demonst","Near (cerca)",NEAR);add("demonst","Far (lejos)",FAR);
var PS=[["my","mine","me"],["your","yours","you"],["his","his","him"],["her","hers","she"],["our","ours","us"],["their","theirs","them"]],TH2=["book","car","phone","bag","house","seat"];
var RW=[];PS.forEach(function(p,i){TH2.forEach(function(o,k){if((i+k)%2)return;RW.push(Q(lv(i,PS.length),"It's "+p[0]+" "+o+". → It's ___.",p[1],[p[0],p[2],p[1]+"'s"]));});});
add("posspron","Rewrite",RW);
var SP=[["Camila","She",1],["Mr. Soto","He",1],["The ship","It",1],["My friends","They",2],["Ana and I","We",2],["You and Pedro","You",3],["The cat","It",1],["My grandparents","They",2],["My mother","She",1],
  ["The books","They",2],["My brother","He",1],["The city","It",2],["Diego and Tomás","They",3],["My classmates and I","We",4],["The weather","It",4],["The police","They",5]];
add("pron","Subject Pronouns",SP.map(function(x){return Q(x[2],x[0]+" → ___",x[1],["He","She","It","We","They","You"].filter(function(y){return y!==x[1];}).slice(0,3));}));
/* ---------- TEMAS RESTANTES (listas) ---------- */
function pick(list,correct,i){var o=list.filter(function(x){return x!==correct;});if(o.length<=3)return [correct].concat(o);var k=i%o.length;return [correct].concat(o.concat(o).slice(k,k+3));}
function mk(id,cat,items,opts){add(id,cat,items.map(function(x,i){var o=opts?pick(opts,x[1],i):[x[1]].concat(x[2]||[]);return Q(x[3]||lv(i,items.length),x[0],x[1],o.slice(1));}));}
var TE=[["every day","Present Simple"],["now","Present Continuous"],["always","Present Simple"],["at the moment","Present Continuous"],["usually","Present Simple"],["right now","Present Continuous"],["on Mondays","Present Simple"],
  ["this week","Present Continuous"],["never","Present Simple"],["Look!","Present Continuous"],["once a month","Present Simple"],["Listen!","Present Continuous"],["often","Present Simple"],["these days","Present Continuous"],["twice a year","Present Simple"]];
mk("psvpc","Time Expressions",TE.map(function(x){return ["'"+x[0]+"' goes with…",x[1]];}),["Present Simple","Present Continuous"]);
var AB=[["Birds","can","fly"],["Fish","can't","walk"],["Dogs","can't","talk"],["Cheetahs","can","run very fast"],["Penguins","can","swim"],["Cats","can","climb trees"],["Snakes","can't","walk"],["Babies","can't","read"],
  ["Parrots","can","repeat words"],["Elephants","can't","fly"],["Dolphins","can","swim very fast"],["Kangaroos","can","jump high"],["Humans","can't","breathe under water"],["Chickens","can't","fly long distances"],["Bats","can","fly at night"]];
mk("can","Ability",AB.map(function(x){return [x[0]+" ___ "+x[2]+".",x[1]];}),["can","can't"]);
var MD=[["🚭 You ___ smoke here.","mustn't"],["⛑️ On the dock you ___ wear a helmet.","must"],["🆓 Entry is free. You ___ pay.","don't have to"],["🤒 You're sick. You ___ see a doctor.","should"],["📵 You ___ use phones during the test.","mustn't"],
  ["🦺 Workers ___ wear a vest.","must"],["Saturday class is optional. You ___ come.","don't have to"],["😴 You're tired. You ___ go to bed early.","should"],["🏊 No swimming! You ___ swim here.","mustn't"],["🍬 You ___ eat so much candy.","shouldn't"],
  ["🎫 Passengers ___ show their tickets.","must"],["🧥 It's cold. You ___ take a jacket.","should"],["The uniform isn't required on Friday. You ___ wear it.","don't have to"],["🚦 The light is red. You ___ cross.","mustn't"],["📚 The exam is tomorrow. You ___ study.","should"]];
mk("modals","Which Modal?",MD,["must","mustn't","should","shouldn't","don't have to"]);
var C0=[["If you drop a glass, it ___.","breaks",["broke","breaking"]],["If you don't water plants, they ___.","die",["died","dying"]],["If you mix red and white, you ___ pink.","get",["got","getting"]],["If it rains, the ground ___ wet.","gets",["got","getting"]],
  ["If you heat water to 100 °C, it ___.","boils",["boiled","boiling"]],["If I drink coffee at night, I ___ sleep.","can't",["couldn't","not can"]],["Ice ___ if you leave it in the sun.","melts",["melted","melting"]],["If you press this button, the light ___ on.","turns",["turned","turning"]]];
mk("cond","Zero Conditional",C0);
var C1=[["If it rains tomorrow, we ___ stay home.","will",["would"]],["If you study, you ___ pass the test.","will",["would"]],["If I ___ time, I'll call you.","have",["will have","had"]],["If she misses the bus, she ___ be late.","will",["would"]],
  ["We'll go to the beach if it ___ sunny.","is",["will be","was"]],["If you don't hurry, you ___ miss the ferry.","will",["would"]],["If they win, they ___ celebrate.","will",["would"]]];
mk("cond","First Conditional",C1);
var C2=[["If I ___ a boat, I would sail around Chile.","had",["have","will have"]],["If I were rich, I ___ travel the world.","would",["will"]],["If she ___ wings, she would fly.","had",["has","will have"]],["If we lived in Antarctica, we ___ see penguins every day.","would",["will"]],
  ["If I ___ the President, I would build more schools.","were",["am","will be"]],["What would you do if you ___ a million dollars?","won",["win","will win"]],["If I spoke Japanese, I ___ work in Tokyo.","could",["can","will"]]];
mk("cond","Second Conditional",C2);
var PLC=[["The milk is ___ the fridge.","in"],["The picture is ___ the wall.","on"],["I'm waiting ___ the bus stop.","at"],["The keys are ___ my pocket.","in"],["The cat is sleeping ___ the sofa.","on"],["She's ___ the cinema with her friends.","at"],
  ["The fish swim ___ the sea.","in"],["The phone is ___ the table.","on"],["We are ___ school.","at"],["Valparaíso is ___ Chile.","in"],["The boat is floating ___ the water.","on"],["Meet me ___ the entrance.","at"],["My house is ___ Prat Street.","on"],["The students are ___ the classroom.","in"],["He lives ___ 15 Condell Street.","at"]];
mk("prepplace","At / In / On (places)",PLC,["at","in","on"]);
var CL=[["Cierra la puerta","Close the door."],["Siéntate","Sit down."],["Ponte de pie","Stand up."],["Abre la ventana","Open the window."],["Copia lo de la pizarra","Copy the board."],["Guarda tu celular","Put your phone away."],["Mira la pizarra","Look at the board."],
  ["Haz silencio","Be quiet."],["Lee en voz alta","Read aloud."],["Escribe tu nombre","Write your name."],["No hables","Don't talk."],["No corras","Don't run."],["Trabaja solo","Work alone."],["Saca tu cuaderno","Take out your notebook."],["Sigue las instrucciones","Follow the instructions."]];
mk("imper","Classroom Language",CL.map(function(x){return ["'"+x[0]+"' = ___",x[1]];}),CL.map(function(x){return x[1];}));
var WA=[["'Because I was tired.' answers…","Why…?"],["'In Viña del Mar.' answers…","Where…?"],["'At half past eight.' answers…","What time…?"],["'My sister.' answers…","Who…?"],["'Two hours.' answers…","How long…?"],["'Twice a week.' answers…","How often…?"],
  ["'5,000 pesos.' answers…","How much…?"],["'Three brothers.' answers…","How many…?"],["'Sixteen.' answers…","How old…?"],["'The blue one.' answers…","Which…?"],["'It's Pedro's.' answers…","Whose…?"],["'Last Monday.' answers…","When…?"],["'By train.' answers…","How…?"],["'Pizza.' answers…","What…?"]];
mk("whq","Match the Answer",WA,["Why…?","Where…?","What time…?","Who…?","How long…?","How often…?","How much…?","How many…?","How old…?","Which…?","Whose…?","When…?","How…?","What…?"]);
var CJ=[["I was tired, ___ I went to bed early.","so"],["I went to bed early ___ I was tired.","because"],["She likes tea ___ coffee.","and"],["He's rich, ___ he isn't happy.","but"],["Do you want pizza ___ pasta?","or"],["It was sunny, ___ we went to the beach.","so"],
  ["We stayed home ___ it was raining.","because"],["I can swim, ___ I can't dive.","but"],["She speaks English ___ French.","and"],["Is it Monday ___ Tuesday today?","or"],["I studied a lot, ___ I passed the test.","so"],["He was hungry, ___ he didn't eat.","but"],["Take an umbrella, ___ you'll get wet.","or"],["The ferry was late ___ the sea was rough.","because"]];
var CJa=CJ.filter(function(x){return /^(and|but|or)$/.test(x[1]);}),CJb=CJ.filter(function(x){return /^(because|so)$/.test(x[1]);});
mk("connect","And / But / Or",CJa,["and","but","or","so"]);mk("connect","Because / So",CJb,["because","so","but","and"]);
var TO=[["This bag is ___ heavy. I can't carry it.","too"],["He's tall ___ to touch the ceiling.","enough"],["The soup is ___ hot to eat.","too"],["I'm not old ___ to drive.","enough"],["It's ___ cold to swim today.","too"],["Is the room big ___ for 30 students?","enough"],
  ["We don't have ___ chairs for everyone.","enough"],["The film is ___ long. I'm falling asleep.","too"],["You aren't fast ___ to win the race.","enough"],["These shoes are ___ small for me.","too"],["Do you have ___ money for the bus?","enough"],["It's ___ late to call him now.","too"],["The test was easy ___ for everyone.","enough"]];
mk("tooenough","Enough",TO,["too","enough"]);

})();
