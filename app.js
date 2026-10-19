/* Goethe mit Omar - App Logic */
const STORAGE_KEY = "goethe_v4";
function getLessons(){ return window.LESSONS || []; }

const REDEMITTEL = {
a1:[
{cat:"تحيات وتعارف",items:[
["Hallo! / Guten Morgen! / Guten Tag!","مرحباً / صباح الخير / نهارك سعيد"],
["Guten Abend! / Gute Nacht!","مساء الخير / تصبح على خير"],
["Tschüss! / Auf Wiedersehen! / Bis bald!","باي / إلى اللقاء / قريباً"],
["Wie heißt du? / Wie heißen Sie?","ما اسمك؟"],
["Ich heiße … / Mein Name ist …","اسمي …"],
["Woher kommst du?","من أين أنت؟"],
["Ich komme aus …","أنا من …"],
["Wo wohnst du?","أين تسكن؟"],
["Ich wohne in …","أسكن في …"],
["Wie alt bist du?","كم عمرك؟"],
["Ich bin … Jahre alt.","عمري … سنة"],
["Wie geht's?","كيف حالك؟"],
["Mir geht's gut.","أنا بخير"],
["Freut mich!","سررت بلقائك!"]
]},
{cat:"طلبات واستفسار",items:[
["Entschuldigung!","عفواً!"],
["Können Sie mir bitte helfen?","هل يمكنكم مساعدتي؟"],
["Was bedeutet das?","ماذا يعني هذا؟"],
["Können Sie das bitte wiederholen?","أعد من فضلك"],
["Sprechen Sie bitte langsamer.","تحدث ببطء"],
["Ich hätte gerne … / Ich möchte …","أريد … من فضلك"],
["Was kostet das?","كم السعر؟"],
["Wo ist …?","أين …؟"],
["Die Rechnung bitte!","الحساب من فضلك!"],
["Danke schön!","شكراً!"]
]},
{cat:"تخطيط بسيط",items:[
["Wollen wir …?","هل نريد …؟"],
["Ja, gerne!","نعم بكل سرور!"],
["Leider habe ich keine Zeit.","للأسف ليس لدي وقت"],
["Wann? / Um wie viel Uhr?","متى؟"],
["Wo treffen wir uns?","أين نلتقي؟"]
]},
{cat:"كتابة بسيطة",items:[
["Liebe(r) …","عزيزي/عزيزتي …"],
["Wie geht es dir?","كيف حالك؟"],
["Ich mache am Samstag eine Party.","سأقيم حفلة السبت"],
["Kannst du kommen?","هل تستطيع المجيء؟"],
["Viele Grüße","تحياتي"]
]}
],
a2:[
{cat:"الرأي",items:[["Ich finde, dass...","أجد أن..."],["Meiner Meinung nach...","في رأيي..."],["..., weil...","... لأن..."],["Das stimmt.","هذا صحيح"]]},
{cat:"التخطيط",items:[["Wollen wir...?","هل نريد...؟"],["Wie wäre es mit...?","ماذا لو...؟"],["Das ist eine gute Idee.","فكرة جيدة"]]}
],
b1:[
{cat:"العرض",items:[["Das Thema meiner Präsentation ist...","موضوع عرضي..."],["Zuerst... Dann... Zum Schluss...","أولاً... ثم... أخيراً..."],["Vielen Dank für Ihre Aufmerksamkeit.","شكراً على انتباهكم"]]},
{cat:"المناقشة",items:[["Meiner Meinung nach...","في رأيي..."],["Da stimme ich dir zu.","أوافقك"],["Einerseits..., andererseits...","من ناحية... من ناحية أخرى..."]]}
],
b2:[
{cat:"حجاج",items:[["Es lässt sich nicht leugnen, dass...","لا يمكن إنكار أن..."],["Im Gegensatz dazu...","على عكس ذلك..."],["Abschließend möchte ich betonen, dass...","في الختام أؤكد أن..."]]},
{cat:"رسمي",items:[["Sehr geehrte Damen und Herren,","السيدات والسادة،"],["Mit freundlichen Grüßen","مع أطيب التحيات"]]}
]
};

function loadProgress(){try{var r=localStorage.getItem(STORAGE_KEY);return r?JSON.parse(r):{completedLessons:[],streak:0,lastStudyDate:null,wordsLearned:0,startDate:new Date().toISOString().slice(0,10)}}catch(e){return{completedLessons:[],streak:0,lastStudyDate:null,wordsLearned:0,startDate:new Date().toISOString().slice(0,10)}}}
function saveProgress(p){localStorage.setItem(STORAGE_KEY,JSON.stringify(p))}
var progress=loadProgress();

function updateUI(){
var LESSONS=getLessons();
var total=LESSONS.length||1,done=progress.completedLessons.length,pct=Math.round(done/total*100);
var el=document.getElementById("overall-percent");if(el)el.textContent=pct+"%";
var bar=document.getElementById("overall-bar");if(bar)bar.style.width=pct+"%";
var ld=document.getElementById("lessons-done");if(ld)ld.textContent=done;
var sc=document.getElementById("streak-count");if(sc)sc.textContent=progress.streak;
var wl=document.getElementById("words-learned");if(wl)wl.textContent=progress.wordsLearned||done*12;
var start=new Date(progress.startDate),diff=Math.floor((new Date()-start)/86400000);
var dl=document.getElementById("days-left");if(dl)dl.textContent=Math.max(0,210-diff);
["a1","a2","b1","b2"].forEach(function(level){
var ls=LESSONS.filter(function(l){return l.level===level});
var d=ls.filter(function(l){return progress.completedLessons.indexOf(l.id)!==-1}).length;
var p=ls.length?Math.round(d/ls.length*100):0;
var pe=document.getElementById(level+"-percent");if(pe)pe.textContent=p+"%";
var ba=document.getElementById(level+"-bar");if(ba)ba.style.width=p+"%";
});
renderTodayLesson();
}

function renderTodayLesson(){
var c=document.getElementById("today-lesson");if(!c)return;
var LESSONS=getLessons();
var next=null;
for(var i=0;i<LESSONS.length;i++){if(progress.completedLessons.indexOf(LESSONS[i].id)===-1){next=LESSONS[i];break;}}
if(next){c.innerHTML="<h3>"+next.title+"</h3><p>"+next.description+"</p><button class='btn btn-primary' id='btnStart'>ابدأ الدرس الآن</button>";
setTimeout(function(){var b=document.getElementById("btnStart");if(b)b.onclick=function(){openLesson(next.id)};},50);
}else{c.innerHTML="<h3>أحسنت! أكملت جميع الدروس.</h3>";}
}

function showSection(id){
var ss=document.querySelectorAll(".section");for(var i=0;i<ss.length;i++)ss[i].classList.remove("active");
var sec=document.getElementById(id);if(sec)sec.classList.add("active");
var bs=document.querySelectorAll(".nav-btn");for(var j=0;j<bs.length;j++)bs[j].classList.toggle("active",bs[j].getAttribute("data-section")===id);
if(id==="lessons")filterLessons(currentLevel);
if(id==="redemittel")filterRedemittel(currentRmLevel);
if(id==="stories")filterStories(currentStoryLevel);
if(id==="exams")filterExams(currentExamLevel);
if(id==="wordbank")showWordbankTab(currentWordbankTab||"vocab");
window.scrollTo(0,0);
}

var currentLevel="a1";
function filterLessons(level){
currentLevel=level;
var tabs=document.querySelectorAll(".tab-btn[data-level]");for(var i=0;i<tabs.length;i++)tabs[i].classList.toggle("active",tabs[i].getAttribute("data-level")===level);
var list=document.getElementById("lessons-list");if(!list)return;
var LESSONS=getLessons();
var html="";
for(var i=0;i<LESSONS.length;i++){
var l=LESSONS[i];if(l.level!==level)continue;
var done=progress.completedLessons.indexOf(l.id)!==-1;
html+="<div class='lesson-card"+(done?" completed":"")+"' onclick='openLesson(\""+l.id+"\")'><div class='lesson-num'>"+l.number+"</div><div class='lesson-info'><h3>"+l.title+"</h3><p>"+l.titleDe+"</p></div><div class='lesson-status'>"+(done?"✅":"▶️")+"</div></div>";
}
list.innerHTML=html||"<div class='card'><p>قريباً...</p></div>";
}
function openLesson(id){
var LESSONS=getLessons();
var lesson=null;for(var i=0;i<LESSONS.length;i++){if(LESSONS[i].id===id){lesson=LESSONS[i];break;}}
if(!lesson)return;
var badge=document.getElementById("lv-badge");if(badge){badge.textContent=lesson.level.toUpperCase();badge.className="level-badge "+lesson.level;}
var title=document.getElementById("lv-title");if(title)title.textContent=lesson.title;
var content=document.getElementById("lesson-content");if(content)content.innerHTML=lesson.content||"";
var btn=document.getElementById("mark-complete-btn");
if(progress.completedLessons.indexOf(id)!==-1){btn.textContent="✓ مكتمل";btn.style.background="#27ae60";btn.onclick=null;}
else{btn.textContent="✓ أكملت هذا الدرس";btn.style.background="";btn.onclick=function(){markLessonComplete(id)};}
showSection("lesson-view");
}
function markLessonComplete(id){
if(id&&progress.completedLessons.indexOf(id)!==-1)return;
if(id&&progress.completedLessons.indexOf(id)===-1){
progress.completedLessons.push(id);
var today=new Date().toISOString().slice(0,10);
if(progress.lastStudyDate!==today){
var y=new Date();y.setDate(y.getDate()-1);
progress.streak=progress.lastStudyDate===y.toISOString().slice(0,10)?progress.streak+1:1;
progress.lastStudyDate=today;
}
progress.wordsLearned=(progress.wordsLearned||0)+15;
saveProgress(progress);updateUI();
var btn=document.getElementById("mark-complete-btn");if(btn){btn.textContent="✓ مكتمل - أحسنت!";btn.style.background="#27ae60";}
}
}

var currentRmLevel="a1";
function filterRedemittel(level){
currentRmLevel=level;
var tabs=document.querySelectorAll(".tab-btn[data-rm]");for(var i=0;i<tabs.length;i++)tabs[i].classList.toggle("active",tabs[i].getAttribute("data-rm")===level);
var list=document.getElementById("redemittel-list");if(!list)return;
var data=REDEMITTEL[level]||[];
var html="";
for(var i=0;i<data.length;i++){
var cat=data[i];html+="<div class='rm-cat'><h3>"+cat.cat+"</h3>";
for(var j=0;j<cat.items.length;j++){html+="<div class='rm-item'><span class='de'>"+cat.items[j][0]+"</span><span class='ar'>"+cat.items[j][1]+"</span></div>";}
html+="</div>";
}
list.innerHTML=html||"<p>لا توجد عبارات.</p>";
}

function exportProgress(){
try{
var data=loadProgress();data.exportedAt=new Date().toISOString();
var json=JSON.stringify(data,null,2);
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(json).then(function(){alert("تم نسخ التقدم!");});}
else{prompt("انسخ:",json);}
}catch(e){alert("خطأ: "+e.message);}
}
function importProgress(){
var json=prompt("الصق بيانات التقدم:");
if(!json||!json.trim())return;
try{
var data=JSON.parse(json.trim());
if(!confirm("استبدال التقدم؟"))return;
var clean={completedLessons:Array.isArray(data.completedLessons)?data.completedLessons:[],streak:data.streak||0,lastStudyDate:data.lastStudyDate||null,wordsLearned:data.wordsLearned||0,startDate:data.startDate||new Date().toISOString().slice(0,10)};
saveProgress(clean);progress=clean;updateUI();alert("تم الاستيراد!");
}catch(e){alert("فشل: "+e.message);}
}

var currentStoryLevel="a1";
function filterStories(level){
currentStoryLevel=level;
var tabs=document.querySelectorAll("[data-story-level]");
for(var i=0;i<tabs.length;i++)tabs[i].classList.toggle("active",tabs[i].getAttribute("data-story-level")===level);
var list=document.getElementById("stories-list");if(!list)return;
var stories=(window.STORIES||[]).filter(function(s){return s.level===level});
var html="";
for(var i=0;i<stories.length;i++){
var s=stories[i];
html+="<div class='lesson-card' onclick='openStory(\""+s.id+"\")'><div class='lesson-num'>"+s.number+"</div><div class='lesson-info'><h3>"+s.title+"</h3><p>"+(s.titleAr||"")+"</p></div><div class='lesson-status'>📖</div></div>";
}
list.innerHTML=html||"<div class='card'><p>قريباً...</p></div>";
}
function openStory(id){
var story=null,all=window.STORIES||[];
for(var i=0;i<all.length;i++)if(all[i].id===id){story=all[i];break;}
if(!story)return;
var badge=document.getElementById("sv-badge");
if(badge){badge.textContent=story.level.toUpperCase();badge.className="level-badge "+story.level;}
var title=document.getElementById("sv-title");if(title)title.textContent=story.title;
var content=document.getElementById("story-content");if(content)content.innerHTML=story.content||"";
showSection("story-view");
}
function speakStory(){
var content=document.getElementById("story-content");if(!content)return;
var box=content.querySelector(".example-box");
var text=box?box.innerText:content.innerText;
if(!text)return;
if("speechSynthesis" in window){speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(text);u.lang="de-DE";u.rate=0.85;speechSynthesis.speak(u);}
}

var currentExamLevel="a1";
function filterExams(level){
currentExamLevel=level;
var tabs=document.querySelectorAll("[data-exam-level]");
for(var i=0;i<tabs.length;i++)tabs[i].classList.toggle("active",tabs[i].getAttribute("data-exam-level")===level);
var list=document.getElementById("exams-list");if(!list)return;
var exams=(window.EXAMS||[]).filter(function(e){return e.level===level});
var html="";
for(var i=0;i<exams.length;i++){
var e=exams[i];
html+="<div class='lesson-card' onclick='openExam(\""+e.id+"\")'><div class='lesson-num'>"+e.number+"</div><div class='lesson-info'><h3>"+e.title+"</h3><p>"+(e.titleDe||"")+"</p></div><div class='lesson-status'>📝</div></div>";
}
list.innerHTML=html||"<div class='card'><p>قريباً...</p></div>";
}
function openExam(id){
var exam=null,all=window.EXAMS||[];
for(var i=0;i<all.length;i++)if(all[i].id===id){exam=all[i];break;}
if(!exam)return;
var badge=document.getElementById("ev-badge");
if(badge){badge.textContent=exam.level.toUpperCase();badge.className="level-badge "+exam.level;}
var title=document.getElementById("ev-title");if(title)title.textContent=exam.title;
var content=document.getElementById("exam-content");if(content)content.innerHTML=exam.content||"";
showSection("exam-view");
}

var scanImageData=null;
function handleScanImage(event){
var file=event.target.files&&event.target.files[0];if(!file)return;
var reader=new FileReader();
reader.onload=function(e){scanImageData=e.target.result;
document.getElementById("scan-preview").src=scanImageData;
document.getElementById("scan-preview-wrap").classList.remove("hidden");
document.getElementById("scan-ocr-btn").disabled=false;};
reader.readAsDataURL(file);
}
function clearScanImage(){scanImageData=null;var w=document.getElementById("scan-preview-wrap");if(w)w.classList.add("hidden");var b=document.getElementById("scan-ocr-btn");if(b)b.disabled=true;}
async function runOCR(){
if(!scanImageData||typeof Tesseract==="undefined"){alert("ارفع صورة");return;}
var btn=document.getElementById("scan-ocr-btn");var status=document.getElementById("scan-ocr-status");
if(btn)btn.disabled=true;if(status)status.textContent="جاري التحليل...";
try{
var result=await Tesseract.recognize(scanImageData,"deu");
var text=(result&&result.data&&result.data.text)?result.data.text.trim():"";
document.getElementById("scan-input").value=text||"";
if(status)status.textContent=text?"تم":"لم يُعثر على نص";
}catch(e){if(status)status.textContent="فشلت";}
if(btn)btn.disabled=false;
}
function escapeHtml(s){if(!s)return "";var d=document.createElement("div");d.appendChild(document.createTextNode(String(s)));return d.innerHTML;}
async function analyzeGermanText(){
var text=(document.getElementById("scan-input").value||"").trim();
if(!text){alert("اكتب نصاً");return;}
var box=document.getElementById("scan-errors-box");var hl=document.getElementById("scan-highlighted");var corr=document.getElementById("scan-corrections");
if(box)box.classList.remove("hidden");if(hl)hl.innerHTML="جاري...";if(corr)corr.innerHTML="";
try{
var res=await fetch("https://api.languagetool.org/v2/check",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"text="+encodeURIComponent(text)+"&language=de-DE"});
var data=await res.json();var matches=data.matches||[];
if(matches.length===0){if(hl)hl.innerHTML=escapeHtml(text);if(corr)corr.innerHTML="لا أخطاء";return;}
matches.sort(function(a,b){return b.offset-a.offset});
var html=text;
for(var i=0;i<matches.length;i++){
var m=matches[i];
html=html.substring(0,m.offset)+"<span class='scan-err'>"+escapeHtml(text.substring(m.offset,m.offset+m.length))+"</span>"+html.substring(m.offset+m.length);
}
if(hl)hl.innerHTML=html;if(corr)corr.innerHTML="وُجد "+matches.length+" خطأ";
}catch(e){if(hl)hl.innerHTML=escapeHtml(text);if(corr)corr.innerHTML="تعذر";}
}
function speakScanText(){
var text=(document.getElementById("scan-input").value||"").trim();
if(!text)return;
if("speechSynthesis" in window){var u=new SpeechSynthesisUtterance(text);u.lang="de-DE";speechSynthesis.speak(u);}
}
async function translateScanText(){
var text=(document.getElementById("scan-input").value||"").trim();
if(!text)return;
var box=document.getElementById("scan-translation");
if(box){box.classList.remove("hidden");box.innerHTML="جاري...";}
try{
var res=await fetch("https://api.mymemory.translated.net/get?q="+encodeURIComponent(text.substring(0,400))+"&langpair=de|ar");
var data=await res.json();
var t=(data.responseData&&data.responseData.translatedText)||"تعذرت";
if(box)box.innerHTML="<strong>الترجمة:</strong><br>"+escapeHtml(t);
}catch(e){if(box)box.innerHTML="تعذر";}
}

var currentWordbankTab="vocab";
function showWordbankTab(tab){
currentWordbankTab=tab||"vocab";
var v=document.getElementById("wordbank-vocab");
var s=document.getElementById("wordbank-sentences");
var tv=document.getElementById("wb-tab-vocab");
var ts=document.getElementById("wb-tab-sentences");
if(v)v.classList.toggle("hidden",tab!=="vocab");
if(s)s.classList.toggle("hidden",tab!=="sentences");
if(tv)tv.classList.toggle("active",tab==="vocab");
if(ts)ts.classList.toggle("active",tab==="sentences");
if(tab==="vocab")renderVocabCats();else renderSentenceCats();
}
function renderVocabCats(){
var list=document.getElementById("vocab-cats-list");
var cardsView=document.getElementById("vocab-cards-view");
if(!list)return;
if(cardsView)cardsView.classList.add("hidden");
list.classList.remove("hidden");
var data=window.VOCAB_A1||[];
var html="";
for(var i=0;i<data.length;i++){
var c=data[i];var n=(c.words&&c.words.length)||0;
html+="<div class='lesson-card' onclick='openVocabCat(\""+c.id+"\")'><div class='lesson-num'>"+c.number+"</div><div class='lesson-info'><h3>"+c.title+"</h3><p>"+n+" كلمة</p></div><div class='lesson-status'>▶️</div></div>";
}
list.innerHTML=html||"<div class='card'><p>لا توجد مفردات</p></div>";
}
function openVocabCat(id){
var data=window.VOCAB_A1||[];var cat=null;
for(var i=0;i<data.length;i++)if(data[i].id===id){cat=data[i];break;}
if(!cat)return;
var list=document.getElementById("vocab-cats-list");
var view=document.getElementById("vocab-cards-view");
var title=document.getElementById("vocab-cat-title");
var cards=document.getElementById("vocab-cards");
if(list)list.classList.add("hidden");
if(view)view.classList.remove("hidden");
if(title)title.textContent=cat.title+" ("+(cat.words?cat.words.length:0)+")";
var html="";var words=cat.words||[];
for(var j=0;j<words.length;j++){
html+="<div class='flash-card' onclick='this.classList.toggle(\"flipped\")'><div class='flash-front' dir='ltr'>"+words[j][0]+"</div><div class='flash-back'>"+words[j][1]+"</div></div>";
}
if(cards)cards.innerHTML=html;window.scrollTo(0,0);
}
function closeVocabCards(){
var list=document.getElementById("vocab-cats-list");
var view=document.getElementById("vocab-cards-view");
if(view)view.classList.add("hidden");
if(list)list.classList.remove("hidden");
}
function renderSentenceCats(){
var list=document.getElementById("sentences-cats-list");
var itemsView=document.getElementById("sentences-list-view");
if(!list)return;
if(itemsView)itemsView.classList.add("hidden");
list.classList.remove("hidden");
var data=window.SENTENCES_A1||[];
var html="";
for(var i=0;i<data.length;i++){
var c=data[i];var n=(c.sentences&&c.sentences.length)||0;
html+="<div class='lesson-card' onclick='openSentenceCat(\""+c.id+"\")'><div class='lesson-num'>"+c.number+"</div><div class='lesson-info'><h3>"+c.title+"</h3><p>"+n+" جملة</p></div><div class='lesson-status'>▶️</div></div>";
}
list.innerHTML=html||"<div class='card'><p>لا توجد جمل</p></div>";
}
function openSentenceCat(id){
var data=window.SENTENCES_A1||[];var cat=null;
for(var i=0;i<data.length;i++)if(data[i].id===id){cat=data[i];break;}
if(!cat)return;
var list=document.getElementById("sentences-cats-list");
var view=document.getElementById("sentences-list-view");
var title=document.getElementById("sentences-cat-title");
var items=document.getElementById("sentences-items");
if(list)list.classList.add("hidden");
if(view)view.classList.remove("hidden");
if(title)title.textContent=cat.title;
var html="";var sents=cat.sentences||[];
for(var j=0;j<sents.length;j++){
html+="<div class='sentence-item' onclick='this.classList.toggle(\"show-ar\")'><div class='sentence-de' dir='ltr'>"+(j+1)+". "+sents[j][0]+"</div><div class='sentence-ar'>"+sents[j][1]+"</div></div>";
}
if(items)items.innerHTML=html;window.scrollTo(0,0);
}
function closeSentencesList(){
var list=document.getElementById("sentences-cats-list");
var view=document.getElementById("sentences-list-view");
if(view)view.classList.add("hidden");
if(list)list.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded",function(){
updateUI();
filterLessons("a1");
filterRedemittel("a1");
if(typeof filterStories==="function")filterStories("a1");
if(typeof filterExams==="function")filterExams("a1");
});
