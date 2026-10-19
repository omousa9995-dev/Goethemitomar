const LESSONS = [
/* ========== A1 ========== */
{id:"a1-01",level:"a1",number:1,title:"الأبجدية والنطق",titleDe:"Alphabet & Aussprache",description:"الحروف والأصوات الخاصة",
content:`<h2>الأبجدية الألمانية</h2>
<p>26 حرفًا + Ä Ö Ü + ß</p>
<table class="vocab-table"><tr><th>الحرف/المقطع</th><th>النطق</th><th>مثال</th></tr>
<tr><td>ch بعد a/o/u</td><td>خ مفخمة</td><td>Buch</td></tr>
<tr><td>ch بعد e/i</td><td>ش ناعمة</td><td>ich</td></tr>
<tr><td>sch</td><td>ش</td><td>Schule</td></tr>
<tr><td>sp / st في البداية</td><td>شپ / شت</td><td>sprechen / Stadt</td></tr>
<tr><td>z · w · v · ß</td><td>تس · ڤ · ف · س طويلة</td><td>Zeit · Wasser · Vater · Straße</td></tr>
<tr><td>ei · eu/äu · ie</td><td>آي · أوي · إي</td><td>ein · Häuser · Liebe</td></tr></table>
<div class="grammar-box"><b>Umlaute:</b> Ä ≈ إيه · Ö ≈ أُو مرققة · Ü ≈ إي مع ضم الشفاه</div>`},
{id:"a1-02",level:"a1",number:2,title:"التحيات والتعارف",titleDe:"Begrüßung & Vorstellung",description:"التحيات + تقديم النفس",
content:`<h2>التحيات</h2>
<table class="vocab-table"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>Hallo! / Guten Morgen! / Guten Tag!</td><td>مرحبًا / صباح الخير / نهارك سعيد</td></tr>
<tr><td>Guten Abend! / Gute Nacht! / Tschüss!</td><td>مساء الخير / تصبح على خير / باي</td></tr>
<tr><td>Auf Wiedersehen! / Bis bald!</td><td>إلى اللقاء / قريبًا</td></tr></table>
<div class="example-box"><div class="de">Hallo, ich heiße Omar. Ich bin 31 Jahre alt. Ich komme aus Jordanien. Ich wohne in Amman. Ich spreche Arabisch und ein bisschen Deutsch. Ich bin Ingenieur. Freut mich!</div></div>
<div class="grammar-box">Wie heißt du? · Woher kommst du? · Wo wohnst du? · du غير رسمي · Sie رسمي</div>`},
{id:"a1-03",level:"a1",number:3,title:"الأرقام والوقت والتقويم",titleDe:"Zahlen, Uhrzeit & Kalender",description:"0-100 والساعة والأيام",
content:`<h2>الأرقام</h2>
<p>0 null · 1 eins · 2 zwei · 3 drei · 4 vier · 5 fünf · 6 sechs · 7 sieben · 8 acht · 9 neun · 10 zehn · 11 elf · 12 zwölf · 20 zwanzig · 21 einundzwanzig · 30 dreißig · 100 hundert</p>
<div class="grammar-box">الواحدات قبل العشرات: 21 = einundzwanzig</div>
<div class="example-box"><div class="de">Wie spät ist es? — Es ist zwei Uhr. / halb drei. / Viertel nach zwei. · um 8 Uhr</div></div>
<p>أيام: Montag…Sonntag → am Montag · شهور: Januar…Dezember → im Januar · فصول: Frühling, Sommer, Herbst, Winter</p>`},
{id:"a1-04",level:"a1",number:4,title:"الضمائر و sein و haben",titleDe:"Pronomen, sein & haben",description:"الضمائر + أهم فعلين",
content:`<p>ich · du · er/sie/es · wir · ihr · sie/Sie</p>
<table class="vocab-table"><tr><th>sein</th><th>haben</th></tr>
<tr><td>ich bin · du bist · er ist · wir sind · ihr seid</td><td>ich habe · du hast · er hat · wir haben · ihr habt</td></tr></table>
<div class="grammar-box">Ich bin müde · Ich habe Hunger · Ich habe einen Bruder · Ich habe keine Zeit</div>`},
{id:"a1-05",level:"a1",number:5,title:"تصريف الأفعال",titleDe:"Verbkonjugation",description:"منتظمة وشاذة",
content:`<p>نهايات: ich -e · du -st · er -t · wir -en · ihr -t</p>
<p>شاذة: sprechen→sprichst · geben→gibst · nehmen→nimmst · lesen→liest · fahren→fährst · sehen→siehst · essen→isst</p>
<div class="grammar-box">الفعل المصرّف في الموضع الثاني دائمًا (V2)</div>`},
{id:"a1-06",level:"a1",number:6,title:"جنس الأسماء وأدوات التعريف",titleDe:"Genus & Artikel",description:"der die das",
content:`<table class="vocab-table"><tr><th>جنس</th><th>معرفة</th><th>نكرة</th></tr>
<tr><td>مذكر</td><td>der</td><td>ein</td></tr>
<tr><td>مؤنث</td><td>die</td><td>eine</td></tr>
<tr><td>محايد</td><td>das</td><td>ein</td></tr>
<tr><td>جمع</td><td>die</td><td>—</td></tr></table>
<div class="grammar-box">-ung/-heit/-keit → مؤنث · -chen → محايد · احفظ الاسم مع أداته</div>`},
{id:"a1-07",level:"a1",number:7,title:"Akkusativ و Dativ",titleDe:"Akkusativ & Dativ",description:"النصب والجر",
content:`<h2>Akkusativ</h2>
<p>المذكر: der→den · ein→einen</p>
<div class="example-box"><div class="de">Ich habe einen Bruder. · Ich sehe den Mann.</div></div>
<h2>Dativ</h2>
<p>dem/einem · der/einer · dem/einem · den (جمع)</p>
<div class="example-box"><div class="de">Ich helfe dem Freund. · Ich fahre mit dem Bus.</div></div>
<div class="grammar-box">حروف جر Dativ: mit nach von zu bei aus seit · Akkusativ: durch für gegen ohne um</div>`},
{id:"a1-08",level:"a1",number:8,title:"النفي والملكية",titleDe:"Negation & Possessiv",description:"nicht kein + mein dein",
content:`<p><b>nicht</b> للفعل · <b>kein</b> للاسم النكرة</p>
<div class="example-box"><div class="de">Ich lerne nicht. · Ich habe kein Auto. · Ich habe keine Zeit.</div></div>
<p>mein/meine · dein/deine · sein/seine · ihr/ihre · unser/unsere · euer/eure</p>`},
{id:"a1-09",level:"a1",number:9,title:"الأفعال المساعدة والمنفصلة",titleDe:"Modalverben & Trennbare Verben",description:"können müssen wollen",
content:`<table class="vocab-table"><tr><th>فعل</th><th>ich</th><th>du</th><th>er</th></tr>
<tr><td>können</td><td>kann</td><td>kannst</td><td>kann</td></tr>
<tr><td>müssen</td><td>muss</td><td>musst</td><td>muss</td></tr>
<tr><td>wollen</td><td>will</td><td>willst</td><td>will</td></tr>
<tr><td>möchten</td><td>möchte</td><td>möchtest</td><td>möchte</td></tr></table>
<div class="example-box"><div class="de">Ich kann Deutsch sprechen. · Ich stehe um 7 Uhr auf.</div></div>`},
{id:"a1-10",level:"a1",number:10,title:"الأسئلة وترتيب الجملة",titleDe:"Fragen & Satzbau",description:"W-Fragen و V2",
content:`<p>Was? Wer? Wo? Woher? Wohin? Wann? Wie? Warum? Wie viel?</p>
<div class="grammar-box">سؤال نعم/لا: الفعل أولًا → Kommst du morgen?</div>`},
{id:"a1-11",level:"a1",number:11,title:"مفردات عائلة طعام سكن",titleDe:"Wortschatz 1",description:"عائلة وطعام وسكن",
content:`<p><b>عائلة:</b> Eltern, Vater, Mutter, Bruder, Schwester, Kind</p>
<p><b>طعام:</b> Brot, Käse, Wasser, Kaffee, Tee · Ich hätte gerne… · Die Rechnung bitte!</p>
<p><b>سكن:</b> Wohnung, Zimmer, Küche, Bad, Schlafzimmer</p>`},
{id:"a1-12",level:"a1",number:12,title:"مفردات مدينة تسوق صحة",titleDe:"Wortschatz 2",description:"مدينة وتسوق وصحة",
content:`<p>Bahnhof, Haltestelle, Supermarkt, Apotheke, Krankenhaus</p>
<div class="example-box"><div class="de">Was kostet das? · Haben Sie das in Größe M? · Ich habe Kopfschmerzen.</div></div>`},
{id:"a1-13",level:"a1",number:13,title:"تمارين A1 محلولة",titleDe:"Übungen A1",description:"sein/haben و Akkusativ",
content:`<ol>
<li>Ich ______ Student. → <b>bin</b></li>
<li>Du ______ ein Buch. → <b>hast</b></li>
<li>Er ______ Arzt. → <b>ist</b></li>
<li>Ich sehe (der Mann). → <b>den Mann</b></li>
<li>Ich kaufe (ein Apfel). → <b>einen Apfel</b></li>
</ol>`},
{id:"a1-14",level:"a1",number:14,title:"قراءة وكتابة وتحدث A1",titleDe:"Lesen Schreiben Sprechen",description:"نص + بطاقة + تحدث",
content:`<div class="example-box"><div class="de">Hallo! Ich heiße Anna. Ich bin 25 Jahre alt. Ich wohne in Berlin. Ich bin Studentin. Ich habe eine Katze.</div></div>
<p>أسئلة: الاسم؟ أين؟ حيوان؟ → Anna · Berlin · Ja</p>
<div class="example-box"><div class="de">Liebe(r) …, ich habe am Samstag Geburtstag. Party um 19 Uhr. Kannst du kommen? Viele Grüße</div></div>`},
{id:"a1-15",level:"a1",number:15,title:"خطة 30 يومًا + استماع",titleDe:"30-Tage-Plan & Hören",description:"جدول + نص مقهى",
content:`<table class="vocab-table"><tr><th>أيام</th><th>تركيز</th></tr>
<tr><td>1-7</td><td>أبجدية، sein/haben، تحيات، عائلة</td></tr>
<tr><td>8-14</td><td>Akkusativ، Modalverben، أسئلة</td></tr>
<tr><td>15-21</td><td>Dativ، حروف جر، أفعال منفصلة</td></tr>
<tr><td>22-30</td><td>weil/dass، مراجعة، امتحان تجريبي</td></tr></table>
<div class="example-box"><div class="de">Kellnerin: Was möchten Sie? · Gast: Einen Kaffee, bitte. Nur mit Milch.</div></div>`},

/* ========== A2 ========== */
{id:"a2-01",level:"a2",number:1,title:"Perfekt - الماضي",titleDe:"Perfekt",description:"haben/sein + Partizip II",
content:`<div class="example-box"><div class="de">Ich habe gearbeitet. · Ich bin nach Hause gegangen. · Wir sind nach Berlin gefahren.</div></div>
<div class="grammar-box">الحركة والتغيير مع sein: gehen, kommen, fahren, werden, bleiben</div>`},
{id:"a2-02",level:"a2",number:2,title:"الجمل الثانوية weil dass wenn",titleDe:"Nebensätze",description:"الفعل في النهاية",
content:`<div class="example-box"><div class="de">Ich lerne Deutsch, weil ich in Deutschland studieren möchte.<br>Ich glaube, dass das eine gute Idee ist.<br>Wenn ich Zeit habe, gehe ich ins Kino.</div></div>
<div class="grammar-box">في الجملة الثانوية الفعل المصرف في النهاية دائمًا</div>`},
{id:"a2-03",level:"a2",number:3,title:"حروف الجر المتغيرة",titleDe:"Wechselpräpositionen",description:"in an auf - Akk أو Dat",
content:`<p>Wohin? → Akkusativ · Wo? → Dativ</p>
<div class="example-box"><div class="de">Ich gehe in die Stadt. · Ich bin in der Stadt.<br>Das Buch liegt auf dem Tisch. · Ich lege das Buch auf den Tisch.</div></div>`},
{id:"a2-04",level:"a2",number:4,title:"التسوق والصحة والسفر",titleDe:"Alltag A2",description:"مواقف يومية",
content:`<div class="example-box"><div class="de">Haben Sie das in Größe M? · Kann ich das anprobieren?<br>Ich habe Kopfschmerzen. · Mir ist übel.<br>Wann fährt der nächste Zug nach Berlin?</div></div>`},
{id:"a2-05",level:"a2",number:5,title:"المقارنات و Konjunktiv II أساسي",titleDe:"Komparativ & Konjunktiv II",description:"أفعل التفضيل + طلبات مهذبة",
content:`<p>groß → größer → am größten · gut → besser → am besten</p>
<div class="example-box"><div class="de">Könnten Sie mir bitte helfen? · Ich möchte einen Kaffee. · Du solltest mehr lernen.</div></div>`},
{id:"a2-06",level:"a2",number:6,title:"قراءة وكتابة وتمارين A2",titleDe:"Lesen Schreiben Übungen A2",description:"نصوص وتمارين محلولة",
content:`<div class="example-box"><div class="de">Ich habe einen neuen Job gefunden. Die Arbeitszeiten sind von 9 bis 17 Uhr.</div></div>
<ol>
<li>Ich lerne Deutsch, weil ich in Deutschland ______ (arbeiten). → <b>arbeiten möchte</b></li>
<li>Wenn ich Zeit ______ (haben), gehe ich ins Kino. → <b>habe</b></li>
<li>Ich gehe ______ Kino. → <b>ins</b></li>
</ol>`},

/* ========== B1 ========== */
{id:"b1-01",level:"b1",number:1,title:"Konjunktiv II المتقدم",titleDe:"Konjunktiv II",description:"نصائح وفرضيات",
content:`<div class="example-box"><div class="de">Wenn ich reich wäre, würde ich um die Welt reisen.<br>Du solltest mehr schlafen.<br>An deiner Stelle würde ich das nicht machen.</div></div>`},
{id:"b1-02",level:"b1",number:2,title:"Passiv المبني للمجهول",titleDe:"Passiv",description:"werden + Partizip II",
content:`<div class="example-box"><div class="de">Das Buch wird gelesen. · Die Prüfungen werden korrigiert.<br>Das Auto wurde repariert. · Die Tür ist geöffnet worden.</div></div>`},
{id:"b1-03",level:"b1",number:3,title:"الجمل النسبية Relativsätze",titleDe:"Relativsätze",description:"der die das للربط",
content:`<div class="example-box"><div class="de">Das ist der Mann, der mir geholfen hat.<br>Das ist die Frau, die ich gestern gesehen habe.<br>Das ist das Buch, über das ich spreche.</div></div>`},
{id:"b1-04",level:"b1",number:4,title:"أدوات الربط والرأي",titleDe:"Konnektoren & Meinung",description:"obwohl damit + عبارات نقاش",
content:`<p>obwohl · damit · nachdem · bevor · während · je…desto</p>
<div class="example-box"><div class="de">Meiner Meinung nach… Einerseits… andererseits… Da stimme ich dir zu.</div></div>`},
{id:"b1-05",level:"b1",number:5,title:"كتابة وعرض B1",titleDe:"Schreiben & Präsentation B1",description:"رسائل وعرض تقديمي",
content:`<div class="example-box"><div class="de">Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil… Mit freundlichen Grüßen</div></div>
<p>العرض: Thema → Gliederung → Hauptteil → Zusammenfassung → Fragen</p>`},

/* ========== B2 ========== */
{id:"b2-01",level:"b2",number:1,title:"Nominalisierung و Konjunktiv I",titleDe:"Nominalisierung & Konjunktiv I",description:"تحويل لأساء + كلام غير مباشر",
content:`<p>entwickeln → die Entwicklung · entscheiden → die Entscheidung</p>
<div class="example-box"><div class="de">Er sagte, er sei müde. · Sie behauptete, sie komme morgen.</div></div>`},
{id:"b2-02",level:"b2",number:2,title:"كتابة B2 واستراتيجيات الامتحان",titleDe:"Schreiben B2 & Strategien",description:"مقال رأي + معايير غوته",
content:`<div class="grammar-box">Meiner Ansicht nach… Erstens… Zweitens… Allerdings… Zusammenfassend…</div>
<p>Lesen 65د · Hören 40د · Schreiben 75د · Sprechen 15د</p>`},
{id:"b2-03",level:"b2",number:3,title:"خطة 7 أشهر ومراجعة نهائية",titleDe:"7-Monats-Plan & Checkliste",description:"من الصفر إلى B2",
content:`<table class="vocab-table"><tr><th>شهر</th><th>مستوى</th></tr>
<tr><td>1-2</td><td>A1</td></tr>
<tr><td>3-4</td><td>A2</td></tr>
<tr><td>5-6</td><td>B1</td></tr>
<tr><td>7</td><td>B2 + نماذج امتحان</td></tr></table>
<div class="grammar-box">يوميًا: 10د مفردات · 20د قواعد · 15د استماع · 15د كتابة/تحدث</div>`}
];

if (typeof window !== 'undefined') { window.LESSONS = LESSONS; }
