/* Goethe mit Omar – Full App Logic A1→B2 + Stories + Exams + Export/Import */
const STORAGE_KEY = "goethe_v4";
const LESSONS = window.LESSONS || [];

const REDEMITTEL = {
a1:[
{cat:"تحيات وتعارف",items:[["Hallo! / Guten Tag!","مرحباً / نهارك سعيد"],["Wie heißt du? / Wie heißen Sie?","ما اسمك؟"],["Ich heiße...","اسمي..."],["Woher kommst du?","من أين أنت؟"],["Freut mich!","سررت بلقائك!"],["Wie geht's?","كيف حالك؟"],["Mir geht's gut.","أنا بخير."]]},
{cat:"طلبات ومجاملة",items:[["Entschuldigung!","عفوًا!"],["Können Sie mir helfen?","هل يمكنكم مساعدتي؟"],["Ich hätte gerne...","أريد... من فضلك"],["Was kostet das?","كم يكلف هذا؟"],["Sprechen Sie bitte langsamer.","تحدثوا ببطء من فضلكم."],["Danke schön!","شكراً جزيلاً!"],["Bitte schön!","عفواً"]]}
],
a2:[
{cat:"التعبير عن الرأي",items:[["Ich finde, dass...","أجد أن..."],["Ich glaube, dass...","أعتقد أن..."],["Meiner Meinung nach...","في رأيي..."],["..., weil...","... لأن..."],["Ein Vorteil ist, dass...","ميزة هي أن..."],["Das stimmt.","هذا صحيح"]]},
{cat:"التخطيط",items:[["Wollen wir...?","هل نريد...؟"],["Wie wäre es mit...?","ماذا لو...؟"],["Das ist eine gute Idee.","هذه فكرة جيدة."],["Leider habe ich keine Zeit.","للأسف ليس لدي وقت."]]}
],
b1:[
{cat:"العرض التقديمي",items:[["Das Thema meiner Präsentation ist...","موضوع عرضي هو..."],["Zuerst... / Dann... / Zum Schluss...","أولاً... / ثم... / في الختام..."],["Zusammenfassend möchte ich sagen, dass...","بشكل ملخص أود أن أقول أن..."],["Vielen Dank für Ihre Aufmerksamkeit.","شكرًا على انتباهكم."]]},
{cat:"المناقشة",items:[["Meiner Meinung nach...","في رأيي..."],["Da stimme ich dir zu.","أوافقك."],["Da bin ich anderer Meinung.","أنا من رأي آخر."],["Einerseits..., andererseits...","من ناحية... من ناحية أخرى..."]]}
],
b2:[
{cat:"الحجاج المتقدم",items:[["Es lässt sich nicht leugnen, dass...","لا يمكن إنكار أن..."],["Im Gegensatz dazu...","على عكس ذلك..."],["Darüber hinaus...","علاوة على ذلك..."],["Abschließend möchte ich betonen, dass...","في الختام أود التأكيد على أن..."]]},
{cat:"الكتابة الرسمية",items:[["Sehr geehrte Damen und Herren,","السيدات والسادة المحترمون،"],["Ich wäre Ihnen sehr dankbar, wenn...","سأكون ممتنًا جدًا لو..."],["Mit freundlichen Grüßen","مع أطيب التحيات"],["Für Rückfragen stehe ich gerne zur Verfügung.","لأي استفسارات أنا مستعد."]]}
]
};

const QUIZZES = {
vocab:[
{question:"Guten Morgen تعني؟",options:["مساء الخير","صباح الخير","تصبح على خير","إلى اللقاء"],correct:1},
{question:"Ich heiße Omar تعني؟",options:["أنا عمر","اسمي عمر","عمري عمر","من عمر"],correct:1},
{question:"der Bruder تعني؟",options:["الأخت","الأب","الأخ","الابن"],correct:2},
{question:"fünfundzwanzig تعني؟",options:["25","52","20","15"],correct:0},
{question:"die Wohnung تعني؟",options:["المنزل","الشقة","الغرفة","المطبخ"],correct:1}
],
grammar:[
{question:"sein مع ich؟",options:["ist","bin","bist","sind"],correct:1},
{question:"الفعل في الموضع؟",options:["الأول","الثاني","الأخير","أي"],correct:1},
{question:"haben مع er؟",options:["habe","hast","hat","haben"],correct:2},
{question:"Sie (رسمي) تعني؟",options:["هي","هم","حضرتك","نحن"],correct:2},
{question:"في الجملة الثانوية الفعل يكون في؟",options:["البداية","الوسط","النهاية","أي مكان"],correct:2}
],
fill:[
{question:"Ich _____ Omar",options:["heiße","bin","habe","komme"],correct:0},
{question:"Wie _____ du?",options:["heißt","heiße","heißen","bist"],correct:0},
{question:"Ich _____ Deutsch",options:["lerne","lernst","lernt","lernen"],correct:0},
{question:"_____ heißt du?",options:["Wie","Was","Wo","Wer"],correct:0},
{question:"Das kostet _____ Euro",options:["zwanzig","zwanzigste","zwanzigs","zwanzigem"],correct:0}
],
match:[
{question:"Guten Abend؟",options:["صباح","مساء الخير","تصبح","إلى اللقاء"],correct:1},
{question:"Danke schön؟",options:["من فضلك","عفواً","شكراً جزيلاً","مع السلامة"],correct:2},
{question:"Entschuldigung؟",options:["شكراً","عفواً","مرحبا","نعم"],correct:1},
{question:"Bitte؟",options:["شكراً","من فضلك","لا","نعم"],correct:1},
{question:"Auf Wiedersehen؟",options:["مرحبا","مع السلامة","صباح","كيف"],correct:1}
]
};

function loadProgress(){try{var r=localStorage.getItem(STORAGE_KEY);return r?JSON.parse(r):{completedLessons:[],streak:0,lastStudyDate:null,wordsLearned:0,startDate:new Date().toISOString().slice(0,10)}}catch(e){return{completedLessons:[],streak:0,lastStudyDate:null,wordsLearned:0,startDate:new Date().toISOString().slice(0,10)}}}
function saveProgress(p){localStorage.setItem(STORAGE_KEY,JSON.stringify(p))}
var progress=loadProgress();

function updateUI(){
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
var next=null;
for(var i=0;i<LESSONS.length;i++){if(progress.completedLessons.indexOf(LESSONS[i].id)===-1){next=LESSONS[i];break;}}
if(next){c.innerHTML="<h3>"+next.title+"</h3><p>"+next.description+"</p><button class='btn btn-primary' id='btnStart'>ابدأ الدرس الآن</button>";
setTimeout(function(){var b=document.getElementById("btnStart");if(b)b.onclick=function(){openLesson(next.id)};},50);
}else{c.innerHTML="<h3>أحسنت! 🎉</h3><p>أكملت جميع الدروس الحالية.</p>";}
}

function showSection(id){
var ss=document.querySelectorAll(".section");for(var i=0;i<ss.length;i++)ss[i].classList.remove("active");
var sec=document.getElementById(id);if(sec)sec.classList.add("active");
var bs=document.querySelectorAll(".nav-btn");for(var j=0;j<bs.length;j++)bs[j].classList.toggle("active",bs[j].getAttribute("data-section")===id);
if(id==="lessons")filterLessons(currentLevel);
if(id==="redemittel")filterRedemittel(currentRmLevel);
if(id==="stories")filterStories(currentStoryLevel);
if(id==="exams")filterExams(currentExamLevel);
window.scrollTo(0,0);
}

var currentLevel="a1";
function filterLessons(level){
currentLevel=level;
var tabs=document.querySelectorAll(".tab-btn[data-level]");for(var i=0;i<tabs.length;i++)tabs[i].classList.toggle("active",tabs[i].getAttribute("data-level")===level);
var list=document.getElementById("lessons-list");if(!list)return;
var html="";
for(var i=0;i<LESSONS.length;i++){
var l=LESSONS[i];if(l.level!==level)continue;
var done=progress.completedLessons.indexOf(l.id)!==-1;
html+="<div class='lesson-card"+(done?" completed":"")+"' onclick='openLesson(\""+l.id+"\")'><div class='lesson-num'>"+l.number+"</div><div class='lesson-info'><h3>"+l.title+"</h3><p>"+l.titleDe+"</p></div><div class='lesson-status'>"+(done?"✅":"▶️")+"</div></div>";
}
list.innerHTML=html||"<div class='card'><p>قريباً دروس هذا المستوى...</p></div>";
}

function openLesson(id){
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
var btn=document.getElementById("mark-complete-btn");btn.textContent="✓ مكتمل - أحسنت!";btn.style.background="#27ae60";
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
list.innerHTML=html||"<p>لا توجد عبارات لهذا المستوى بعد.</p>";
}

var currentQuiz=[],currentQuestionIndex=0,selectedAnswer=null;
function startQuiz(type){
currentQuiz=(QUIZZES[type]||[]).slice();currentQuestionIndex=0;
var area=document.getElementById("quiz-area");if(area)area.classList.remove("hidden");
showQuestion();
}
function showQuestion(){
var q=currentQuiz[currentQuestionIndex];if(!q)return;
var prog=document.getElementById("quiz-progress");if(prog)prog.textContent="سؤال "+(currentQuestionIndex+1)+" من "+currentQuiz.length;
var qq=document.getElementById("quiz-question");if(qq)qq.textContent=q.question;
var opts="";for(var i=0;i<q.options.length;i++){opts+="<button class='quiz-option' onclick='selectAnswer("+i+")'>"+q.options[i]+"</button>";}
var qo=document.getElementById("quiz-options");if(qo)qo.innerHTML=opts;
var fb=document.getElementById("quiz-feedback");if(fb)fb.classList.add("hidden");
var nq=document.getElementById("next-question-btn");if(nq)nq.classList.add("hidden");
selectedAnswer=null;
}
function selectAnswer(i){
if(selectedAnswer!==null)return;selectedAnswer=i;
var q=currentQuiz[currentQuestionIndex];
var btns=document.querySelectorAll(".quiz-option");
for(var j=0;j<btns.length;j++){if(j===q.correct)btns[j].classList.add("correct");else if(j===i)btns[j].classList.add("wrong");btns[j].onclick=null;}
var f=document.getElementById("quiz-feedback");if(f){f.classList.remove("hidden");if(i===q.correct){f.textContent="إجابة صحيحة! 🎉";f.className="quiz-feedback correct";}else{f.textContent="خطأ. الصحيحة: "+q.options[q.correct];f.className="quiz-feedback wrong";}}
var nq=document.getElementById("next-question-btn");if(nq)nq.classList.remove("hidden");
}
function nextQuestion(){currentQuestionIndex++;if(currentQuestionIndex>=currentQuiz.length){alert("أحسنت! أكملت التمرين.");closeQuiz();return;}showQuestion();}
function closeQuiz(){var area=document.getElementById("quiz-area");if(area)area.classList.add("hidden");}

function exportProgress() {
  try {
    var data = loadProgress();
    data.exportedAt = new Date().toISOString();
    data.version = "goethe_v4";
    var json = JSON.stringify(data, null, 2);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(json).then(function() {
        alert("✅ تم نسخ بيانات التقدم!\nأرسلها لنفسك ثم استوردها على الجهاز الآخر.");
      }).catch(function() { showExportModal(json); });
    } else { showExportModal(json); }
  } catch (e) { alert("خطأ: " + e.message); }
}
function showExportModal(json) {
  var existing = document.getElementById("export-modal");
  if (existing) existing.remove();
  var modal = document.createElement("div");
  modal.id = "export-modal";
  modal.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;";
  modal.innerHTML = '<div style="background:#fff;border-radius:16px;padding:20px;max-width:400px;width:100%"><h3 style="margin-bottom:12px;color:#0a7a3e">📤 نسخ التقدم</h3><textarea id="export-textarea" readonly style="width:100%;height:120px;font-size:0.75rem;direction:ltr;padding:8px"></textarea><button class="btn btn-primary" style="width:100%;margin-top:12px" onclick="document.getElementById(\'export-textarea\').select();document.execCommand(\'copy\');alert(\'تم النسخ!\')">📋 نسخ</button><button class="btn" style="width:100%;margin-top:8px;background:#eee" onclick="document.getElementById(\'export-modal\').remove()">إغلاق</button></div>';
  document.body.appendChild(modal);
  document.getElementById("export-textarea").value = json;
}
function importProgress() {
  var json = prompt("الصق بيانات التقدم هنا:");
  if (!json || !json.trim()) return;
  try {
    var data = JSON.parse(json.trim());
    if (!data || typeof data !== "object") throw new Error("بيانات غير صالحة");
    if (!confirm("استبدال التقدم الحالي؟ (دروس: " + (data.completedLessons ? data.completedLessons.length : 0) + ")")) return;
    var clean = {
      completedLessons: Array.isArray(data.completedLessons) ? data.completedLessons : [],
      streak: typeof data.streak === "number" ? data.streak : 0,
      lastStudyDate: data.lastStudyDate || null,
      wordsLearned: typeof data.wordsLearned === "number" ? data.wordsLearned : 0,
      startDate: data.startDate || new Date().toISOString().slice(0, 10)
    };
    saveProgress(clean);
    progress = clean;
    updateUI();
    alert("✅ تم الاستيراد! دروس: " + clean.completedLessons.length);
    if (typeof filterLessons === "function") filterLessons(currentLevel || "a1");
  } catch (e) { alert("فشل الاستيراد: " + e.message); }
}

var currentStoryLevel = "a1";
function filterStories(level) {
  currentStoryLevel = level;
  var tabs = document.querySelectorAll("[data-story-level]");
  for (var i = 0; i < tabs.length; i++) tabs[i].classList.toggle("active", tabs[i].getAttribute("data-story-level") === level);
  var list = document.getElementById("stories-list");
  if (!list) return;
  var stories = (window.STORIES || []).filter(function(s) { return s.level === level; });
  var html = "";
  for (var i = 0; i < stories.length; i++) {
    var s = stories[i];
    html += '<div class="lesson-card" onclick="openStory(\'' + s.id + '\')"><div class="lesson-num">' + s.number + '</div><div class="lesson-info"><h3>' + s.title + '</h3><p>' + (s.titleAr || '') + '</p></div><div class="lesson-status">📖</div></div>';
  }
  list.innerHTML = html || "<div class='card'><p>قريباً...</p></div>";
}
function openStory(id) {
  var story = null, all = window.STORIES || [];
  for (var i = 0; i < all.length; i++) if (all[i].id === id) { story = all[i]; break; }
  if (!story) return;
  var badge = document.getElementById("sv-badge");
  if (badge) { badge.textContent = story.level.toUpperCase(); badge.className = "level-badge " + story.level; }
  var title = document.getElementById("sv-title");
  if (title) title.textContent = story.title;
  var content = document.getElementById("story-content");
  if (content) content.innerHTML = story.content || "";
  showSection("story-view");
}
function speakStory() {
  var content = document.getElementById("story-content");
  if (!content) return;
  var box = content.querySelector(".example-box");
  var text = box ? box.innerText : content.innerText;
  if (!text) return;
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE"; u.rate = 0.85;
    speechSynthesis.speak(u);
  } else alert("المتصفح لا يدعم النطق");
}

var currentExamLevel = "a1";
function filterExams(level) {
  currentExamLevel = level;
  var tabs = document.querySelectorAll("[data-exam-level]");
  for (var i = 0; i < tabs.length; i++) tabs[i].classList.toggle("active", tabs[i].getAttribute("data-exam-level") === level);
  var list = document.getElementById("exams-list");
  if (!list) return;
  var exams = (window.EXAMS || []).filter(function(e) { return e.level === level; });
  var html = "";
  for (var i = 0; i < exams.length; i++) {
    var e = exams[i];
    html += '<div class="lesson-card" onclick="openExam(\'' + e.id + '\')"><div class="lesson-num">' + e.number + '</div><div class="lesson-info"><h3>' + e.title + '</h3><p>' + (e.titleDe || '') + '</p></div><div class="lesson-status">📝</div></div>';
  }
  list.innerHTML = html || "<div class='card'><p>قريباً...</p></div>";
}
function openExam(id) {
  var exam = null, all = window.EXAMS || [];
  for (var i = 0; i < all.length; i++) if (all[i].id === id) { exam = all[i]; break; }
  if (!exam) return;
  var badge = document.getElementById("ev-badge");
  if (badge) { badge.textContent = exam.level.toUpperCase(); badge.className = "level-badge " + exam.level; }
  var title = document.getElementById("ev-title");
  if (title) title.textContent = exam.title;
  var content = document.getElementById("exam-content");
  if (content) content.innerHTML = exam.content || "";
  showSection("exam-view");
}

var scanImageData=null;
function handleScanImage(event){
var file=event.target.files&&event.target.files[0];if(!file)return;
if(!file.type.match(/^image\//)){alert("اختر صورة فقط");return;}
var reader=new FileReader();
reader.onload=function(e){scanImageData=e.target.result;
document.getElementById("scan-preview").src=scanImageData;
document.getElementById("scan-preview-wrap").classList.remove("hidden");
document.getElementById("scan-ocr-btn").disabled=false;
document.getElementById("scan-ocr-status").textContent="الصورة جاهزة";};
reader.readAsDataURL(file);
}
function clearScanImage(){
scanImageData=null;document.getElementById("scan-file").value="";
document.getElementById("scan-preview").src="";
document.getElementById("scan-preview-wrap").classList.add("hidden");
document.getElementById("scan-ocr-btn").disabled=true;
document.getElementById("scan-ocr-status").textContent="";
}
async function runOCR(){
if(!scanImageData){alert("ارفع صورة أولاً");return;}
if(typeof Tesseract==="undefined"){alert("مكتبة القراءة لم تُحمَّل");return;}
var btn=document.getElementById("scan-ocr-btn");var status=document.getElementById("scan-ocr-status");
btn.disabled=true;status.innerHTML="⏳ جاري التحليل...";
try{
var result=await Tesseract.recognize(scanImageData,"deu",{logger:function(m){
if(m.status==="recognizing text"&&m.progress!=null){
var pct=Math.round(m.progress*100);
status.textContent="⏳ قراءة... "+pct+"%";
}}});
var text=(result&&result.data&&result.data.text)?result.data.text.trim():"";
if(!text){status.textContent="لم يُعثر على نص";btn.disabled=false;return;}
document.getElementById("scan-input").value=text;
status.textContent="✅ تم استخراج النص";
btn.disabled=false;
}catch(err){console.error(err);status.textContent="❌ فشلت القراءة";btn.disabled=false;}
}

function escapeHtml(s){if(!s)return"";return String(s).replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">").replace(/"/g,""");}
function escapeAttr(s){return escapeHtml(s).replace(/'/g,"&#39;");}

async function analyzeGermanText(){
var text=(document.getElementById("scan-input").value||"").trim();
if(!text){alert("اكتب نصًا ألمانيًا أولاً");return;}
var box=document.getElementById("scan-errors-box");var hl=document.getElementById("scan-highlighted");var corr=document.getElementById("scan-corrections");
box.classList.remove("hidden");hl.innerHTML="⏳ جاري التحليل...";corr.innerHTML="";
try{
var res=await fetch("https://api.languagetool.org/v2/check",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"text="+encodeURIComponent(text)+"&language=de-DE&enabledOnly=false"});
if(!res.ok)throw new Error("API "+res.status);
var data=await res.json();var matches=data.matches||[];
if(matches.length===0){hl.innerHTML=escapeHtml(text);corr.innerHTML="<div class='scan-ok-banner'>✅ لا توجد أخطاء!</div>";return;}
matches.sort(function(a,b){return b.offset-a.offset});
var html=text,items=[];
for(var i=0;i<matches.length;i++){
var m=matches[i],start=m.offset,end=m.offset+m.length,wrong=text.substring(start,end);
var suggestion=(m.replacements&&m.replacements[0])?m.replacements[0].value:"—";
var msg=m.message||"";
html=html.substring(0,start)+'<span class="scan-err" title="'+escapeAttr(msg)+'">'+escapeHtml(wrong)+"</span>"+html.substring(end);
items.push({wrong:wrong,right:suggestion,msg:msg});
}
items.reverse();hl.innerHTML=html;
var list="";for(var j=0;j<items.length;j++){var it=items[j];list+="<div class='scan-corr-item'><div><span class='wrong'>"+escapeHtml(it.wrong)+"</span> → <span class='right'>"+escapeHtml(it.right)+"</span></div><div class='msg'>"+escapeHtml(it.msg)+"</div></div>";}
corr.innerHTML="<p style='font-weight:700;margin-bottom:8px;color:#c0392b'>وُجد "+items.length+" خطأ:</p>"+list;
}catch(e){console.error(e);hl.innerHTML=escapeHtml(text);corr.innerHTML="<div class='scan-corr-item'><div class='msg'>تعذر الاتصال بخدمة التحليل.</div></div>";}
}
function speakScanText(){var text=(document.getElementById("scan-input").value||"").trim();if(!text){alert("لا يوجد نص");return;}if("speechSynthesis" in window){speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(text);u.lang="de-DE";u.rate=0.9;speechSynthesis.speak(u);}else alert("لا يدعم النطق");}
async function translateScanText(){var text=(document.getElementById("scan-input").value||"").trim();if(!text){alert("لا يوجد نص");return;}var box=document.getElementById("scan-translation");box.classList.remove("hidden");box.innerHTML="⏳ جاري الترجمة...";try{var url="https://api.mymemory.translated.net/get?q="+encodeURIComponent(text.substring(0,500))+"&langpair=de|ar";var res=await fetch(url);var data=await res.json();var translated=(data&&data.responseData&&data.responseData.translatedText)?data.responseData.translatedText:"تعذرت الترجمة";box.innerHTML="<strong>🇸🇦 الترجمة:</strong><br>"+escapeHtml(translated);}catch(e){box.innerHTML="تعذر الاتصال بخدمة الترجمة.";}}

document.addEventListener("DOMContentLoaded",function(){updateUI();filterLessons("a1");filterRedemittel("a1");if(typeof filterStories==="function")filterStories("a1");if(typeof filterExams==="function")filterExams("a1");});
