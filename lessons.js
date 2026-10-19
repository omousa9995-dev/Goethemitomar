const LESSONS = [
/* A1 - 20 rich lessons from curriculum */
{id:"a1-01",level:"a1",number:1,title:"الأبجدية والنطق",titleDe:"Alphabet & Aussprache",description:"الحروف، الأصوات الخاصة، Umlaute وß",
content:`<h2>الأبجدية الألمانية (Das Alphabet)</h2>
<p>26 حرفاً + Ä Ö Ü + ß</p>
<table class="vocab-table"><tr><th>الحرف/المقطع</th><th>النطق</th><th>مثال</th></tr>
<tr><td>ch بعد a/o/u</td><td>خ مفخمة</td><td>Buch (بوخ)</td></tr>
<tr><td>ch بعد e/i</td><td>ش ناعمة</td><td>ich (إيش)</td></tr>
<tr><td>sch</td><td>ش</td><td>Schule (شوله)</td></tr>
<tr><td>sp / st في البداية</td><td>شپ / شت</td><td>sprechen / Stadt</td></tr>
<tr><td>z · w · v · ß</td><td>تس · ڤ · ف · س طويلة</td><td>Zeit · Wasser · Vater · Straße</td></tr>
<tr><td>ei · eu/äu · ie</td><td>آي · أوي · إي</td><td>ein · Häuser · Liebe</td></tr></table>
<div class="grammar-box"><b>Umlaute:</b> Ä ≈ إيه · Ö ≈ أو مرققة · Ü ≈ إي مع ضم الشفاه<br><b>تمرين:</b> schön – über – Straße – sprechen – ich – Buch – Zeit – Wasser</div>`},
{id:"a1-02",level:"a1",number:2,title:"التحيات والتعارف",titleDe:"Begrüßung & Vorstellung",description:"التحيات + القالب الذهبي",
content:`<h2>التحيات</h2>
<table class="vocab-table"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>Hallo! / Guten Morgen! / Guten Tag!</td><td>مرحباً / صباح الخير / نهارك سعيد</td></tr>
<tr><td>Guten Abend! / Gute Nacht!</td><td>مساء الخير / تصبح على خير</td></tr>
<tr><td>Tschüss! / Auf Wiedersehen! / Bis bald!</td><td>باي / إلى اللقاء / قريباً</td></tr></table>
<h2>القالب الذهبي</h2>
<div class="example-box"><div class="de">Hallo, ich heiße Omar. Ich bin 31 Jahre alt. Ich komme aus Jordanien. Ich wohne in Amman. Ich spreche Arabisch und ein bisschen Deutsch. Ich bin Ingenieur. Mein Hobby ist Lesen. Freut mich!</div></div>
<div class="grammar-box">Wie heißt du? · Woher kommst du? · Wo wohnst du? · Wie alt bist du? · Was machst du?<br><b>du</b> غير رسمي · <b>Sie</b> رسمي</div>`},
{id:"a1-03",level:"a1",number:3,title:"الأرقام والوقت والتقويم",titleDe:"Zahlen, Uhrzeit & Kalender",description:"0–100 · الساعة · الأيام · الشهور",
content:`<h2>الأرقام</h2>
<p>0 null · 1 eins · 2 zwei · 3 drei · 4 vier · 5 fünf · 6 sechs · 7 sieben · 8 acht · 9 neun · 10 zehn · 11 elf · 12 zwölf · 20 zwanzig · 21 einundzwanzig · 30 dreißig · 100 hundert</p>
<div class="grammar-box">الواحدات قبل العشرات: 21 = einundzwanzig</div>
<div class="example-box"><div class="de">Wie spät ist es? — Es ist zwei Uhr. / halb drei. / Viertel nach zwei. · um 8 Uhr · von 9 bis 12 Uhr</div></div>
<p>أيام: Montag…Sonntag → <b>am</b> Montag · شهور: Januar…Dezember → <b>im</b> Januar · فصول: Frühling, Sommer, Herbst, Winter</p>`},
{id:"a1-04",level:"a1",number:4,title:"الضمائر و sein و haben",titleDe:"Pronomen, sein & haben",description:"الضمائر + أهم فعلين بالكامل",
content:`<p>ich · du · er/sie/es · wir · ihr · sie/Sie</p>
<table class="vocab-table"><tr><th>sein</th><th>haben</th></tr>
<tr><td>ich bin · du bist · er ist · wir/sie/Sie sind · ihr seid</td><td>ich habe · du hast · er hat · wir/sie/Sie haben · ihr habt</td></tr></table>
<div class="grammar-box">Ich bin müde (حالة) · Ich habe Hunger (شعور) · Ich habe einen Bruder · Ich habe keine Zeit</div>`},
{id:"a1-05",level:"a1",number:5,title:"تصريف الأفعال المنتظمة والشاذة",titleDe:"Verbkonjugation Präsens",description:"نهايات Präsens + أفعال شاذة",
content:`<p>نهايات: ich -e · du -st · er -t · wir -en · ihr -t</p>
<table class="vocab-table"><tr><th>Infinitiv</th><th>du</th><th>er/sie/es</th></tr>
<tr><td>sprechen</td><td>sprichst</td><td>spricht</td></tr>
<tr><td>essen</td><td>isst</td><td>isst</td></tr>
<tr><td>lesen</td><td>liest</td><td>liest</td></tr>
<tr><td>sehen</td><td>siehst</td><td>sieht</td></tr>
<tr><td>fahren</td><td>fährst</td><td>fährt</td></tr>
<tr><td>geben</td><td>gibst</td><td>gibt</td></tr>
<tr><td>nehmen</td><td>nimmst</td><td>nimmt</td></tr></table>
<div class="grammar-box">الفعل المصرّف دائماً في المركز الثاني (V2)</div>`},
{id:"a1-06",level:"a1",number:6,title:"جنس الأسماء وأدوات التعريف",titleDe:"Genus & Artikel",description:"der die das + ein eine",
content:`<table class="vocab-table"><tr><th>جنس</th><th>معرفة</th><th>نكرة</th></tr>
<tr><td>مذكر</td><td>der</td><td>ein</td></tr>
<tr><td>مؤنث</td><td>die</td><td>eine</td></tr>
<tr><td>محايد</td><td>das</td><td>ein</td></tr>
<tr><td>جمع</td><td>die</td><td>—</td></tr></table>
<div class="grammar-box">-ung/-heit/-keit → مؤنث · -chen → محايد · احفظ الاسم مع أداته: der Tisch · die Lampe · das Buch</div>`},
{id:"a1-07",level:"a1",number:7,title:"Akkusativ و Dativ",titleDe:"Akkusativ & Dativ",description:"النصب والجر مع جداول",
content:`<h2>Akkusativ – Wen? Was?</h2>
<p>المذكر: der→<b>den</b> · ein→<b>einen</b></p>
<div class="example-box"><div class="de">Ich sehe den Mann. · Ich kaufe einen Apfel. · Ich habe eine Schwester.</div></div>
<h2>Dativ – Wem?</h2>
<p>dem / der / dem / den(+n)</p>
<div class="example-box"><div class="de">Ich helfe dem Freund. · Mit dem Bus. · Ich gebe der Frau das Buch.</div></div>
<div class="grammar-box">حروف جر Dativ: aus bei mit nach seit von zu · Akkusativ: durch für gegen ohne um</div>`},
{id:"a1-08",level:"a1",number:8,title:"النفي والملكية",titleDe:"Negation & Possessivartikel",description:"nicht / kein + mein dein",
content:`<p><b>kein</b> للاسم · <b>nicht</b> للفعل والصفة</p>
<div class="example-box"><div class="de">Ich habe kein Auto. · Ich lerne nicht. · Ich habe keine Zeit. · Ich habe keinen Hunger.</div></div>
<p>mein/meine · dein/deine · sein/seine · ihr/ihre · unser/unsere · euer/eure · Ihr/Ihre</p>`},
{id:"a1-09",level:"a1",number:9,title:"الأفعال المساعدة والمنفصلة",titleDe:"Modalverben & Trennbare Verben",description:"können müssen wollen + Trennbare",
content:`<table class="vocab-table"><tr><th>فعل</th><th>ich</th><th>du</th><th>er</th></tr>
<tr><td>können</td><td>kann</td><td>kannst</td><td>kann</td></tr>
<tr><td>müssen</td><td>muss</td><td>musst</td><td>muss</td></tr>
<tr><td>wollen</td><td>will</td><td>willst</td><td>will</td></tr>
<tr><td>möchten</td><td>möchte</td><td>möchtest</td><td>möchte</td></tr>
<tr><td>dürfen</td><td>darf</td><td>darfst</td><td>darf</td></tr>
<tr><td>sollen</td><td>soll</td><td>sollst</td><td>soll</td></tr></table>
<div class="example-box"><div class="de">Ich kann Deutsch sprechen. · Ich stehe um 7 Uhr auf. · Wir kaufen im Supermarkt ein.</div></div>`},
{id:"a1-10",level:"a1",number:10,title:"الماضي والأمر",titleDe:"Perfekt, Präteritum & Imperativ",description:"Perfekt + war/hatte + أمر",
content:`<h2>Perfekt</h2>
<div class="example-box"><div class="de">Ich habe gelernt. · Ich bin nach Hause gegangen. · Ich bin nach Berlin gefahren.</div></div>
<div class="grammar-box">sein مع الحركة: gehen, fahren, kommen · haben مع الباقي</div>
<h2>war / hatte</h2>
<p>ich war · du warst · er war · wir waren · ich hatte · du hattest · er hatte</p>
<div class="example-box"><div class="de">Trink viel Wasser! · Komm hierher! · Lernen Sie fleißig!</div></div>`},
{id:"a1-11",level:"a1",number:11,title:"الأسئلة وترتيب الجملة",titleDe:"Fragen & Satzbau",description:"V2 + W-Fragen",
content:`<p>Was? Wer? Wo? Woher? Wohin? Wann? Wie? Warum? Wie viel?</p>
<div class="example-box"><div class="de">Heute lerne ich Deutsch. · Am Montag arbeite ich.<br>Lernst du Deutsch? · Wo wohnst du?</div></div>
<div class="grammar-box">الجملة الخبرية: الفعل في المركز الثاني · سؤال نعم/لا: الفعل أولاً</div>`},
{id:"a1-12",level:"a1",number:12,title:"حروف الجر الأساسية",titleDe:"Präpositionen",description:"Dativ و Akkusativ",
content:`<p><b>Dativ:</b> aus · bei · mit · nach · seit · von · zu</p>
<p><b>Akkusativ:</b> durch · für · gegen · ohne · um</p>
<div class="example-box"><div class="de">Ich komme aus Jordanien. · Ich fahre mit dem Bus. · Das ist für dich. · Um 9 Uhr.</div></div>`},
{id:"a1-13",level:"a1",number:13,title:"مفردات: عائلة سكن طعام",titleDe:"Wortschatz: Familie, Wohnen, Essen",description:"ثلاث موضوعات أساسية",
content:`<p><b>عائلة:</b> Eltern, Vater, Mutter, Bruder, Schwester, Kind, Sohn, Tochter, Großeltern</p>
<p><b>سكن:</b> Wohnung, Zimmer, Küche, Bad, Schlafzimmer, Tisch, Stuhl, Bett, Fenster, Tür</p>
<p><b>طعام:</b> Brot, Käse, Wasser, Kaffee, Tee, Milch · Ich hätte gern… · Die Rechnung bitte!</p>`},
{id:"a1-14",level:"a1",number:14,title:"مفردات: مدينة تسوق صحة مواصلات",titleDe:"Wortschatz: Stadt, Einkaufen, Gesundheit",description:"مواقف يومية",
content:`<p>Bahnhof, Haltestelle, Supermarkt, Apotheke, Krankenhaus · links / rechts / geradeaus</p>
<div class="example-box"><div class="de">Was kostet das? · Haben Sie das in Größe M?<br>Ich habe Kopfschmerzen. · Ich bin erkältet.<br>Wann fährt der nächste Zug?</div></div>`},
{id:"a1-15",level:"a1",number:15,title:"مفردات: طقس ألوان صفات أفعال",titleDe:"Wetter, Farben, Adjektive, Verben",description:"صفات وأفعال عالية التكرار",
content:`<p>sonnig · regnerisch · kalt · warm · heiß · rot · blau · grün · schwarz · weiß</p>
<p>groß/klein · gut/schlecht · teuer/billig · leicht/schwer · schön · nett · wichtig</p>
<p>sein · haben · können · machen · gehen · kommen · sehen · sprechen · essen · lernen · kaufen · helfen</p>`},
{id:"a1-16",level:"a1",number:16,title:"تمارين A1 محلولة (1)",titleDe:"Übungen A1 (1)",description:"sein/haben · Artikel · Akkusativ · نفي",
content:`<ol>
<li>Ich ______ Student. → <b>bin</b></li>
<li>Du ______ ein Buch. → <b>hast</b></li>
<li>Er ______ Arzt. → <b>ist</b></li>
<li>Ich sehe (der Mann). → <b>den Mann</b></li>
<li>Ich kaufe (ein Apfel). → <b>einen Apfel</b></li>
<li>Ich habe ______ Auto. (نفي) → <b>kein</b></li>
<li>Ich lerne ______. (نفي) → <b>nicht</b></li>
</ol>`},
{id:"a1-17",level:"a1",number:17,title:"تمارين A1 محلولة (2)",titleDe:"Übungen A1 (2)",description:"Modalverben · Trennbare · Satzbau",
content:`<ol>
<li>Ich ______ Deutsch sprechen. (können) → <b>kann</b></li>
<li>Du ______ mehr lernen. (müssen) → <b>musst</b></li>
<li>Ich (aufstehen) um 7. → Ich <b>stehe</b> um 7 <b>auf</b>.</li>
<li>ich – Deutsch – lerne – jeden Tag → <b>Ich lerne jeden Tag Deutsch.</b></li>
<li>du – heißt – wie → <b>Wie heißt du?</b></li>
</ol>`},
{id:"a1-18",level:"a1",number:18,title:"قراءة وكتابة وتحدث A1",titleDe:"Lesen, Schreiben, Sprechen A1",description:"نصوص + رسالة + تحدث",
content:`<div class="example-box"><div class="de">Hallo! Ich heiße Anna. Ich bin 25 Jahre alt. Ich wohne in Berlin. Ich bin Studentin. Ich habe eine Katze. Die Katze heißt Mimi. Am Morgen trinke ich Kaffee.</div></div>
<p>أسئلة: الاسم؟ أين؟ حيوان؟ → Anna · Berlin · Ja, eine Katze</p>
<div class="example-box"><div class="de">Liebe(r) …, wie geht es dir? Ich habe am Samstag Geburtstag. Party um 19 Uhr. Kannst du kommen? Viele Grüße</div></div>
<p><b>Sprechen:</b> قدّم نفسك · اطرح سؤالاً · اطلب بلطف</p>`},
{id:"a1-19",level:"a1",number:19,title:"نص عائلة + استماع مقهى",titleDe:"Familie & Hören Café",description:"نص سارة + حوار",
content:`<div class="example-box"><div class="de">Ich heiße Sara. Mein Vater heißt Thomas. Er ist Lehrer. Meine Mutter heißt Maria. Ich habe einen Bruder. Er heißt Tim. Wir wohnen in München.</div></div>
<div class="example-box"><div class="de">Kellnerin: Was möchten Sie?<br>Gast: Ich möchte einen Kaffee, bitte. Nur mit Milch.<br>Gast: Ich hätte gern ein Stück Kuchen.<br>Kellnerin: Das macht 5 Euro 50.</div></div>`},
{id:"a1-20",level:"a1",number:20,title:"خطة 30 يوماً + قائمة التحقق",titleDe:"30-Tage-Plan & Checkliste",description:"خطة يومية + جاهزية الامتحان",
content:`<table class="vocab-table"><tr><th>أيام</th><th>تركيز</th></tr>
<tr><td>1–7</td><td>أبجدية، sein/haben، تحيات، عائلة</td></tr>
<tr><td>8–14</td><td>Akkusativ، Modalverben، أسئلة</td></tr>
<tr><td>15–21</td><td>Dativ، حروف جر، أفعال منفصلة</td></tr>
<tr><td>22–30</td><td>مراجعة + امتحان تجريبي A1</td></tr></table>
<div class="grammar-box">أنت جاهز عندما تستطيع: تقديم نفسك · استخدام sein/haben/Modalverben · كتابة 30–40 كلمة · فهم نص قصير · طلب شيء في مقهى</div>`},

/* A2 */
{id:"a2-01",level:"a2",number:1,title:"Perfekt - الماضي",titleDe:"Perfekt",description:"haben/sein + Partizip II",
content:`<div class="example-box"><div class="de">Ich habe gearbeitet. · Ich bin nach Hause gegangen. · Wir sind nach Berlin gefahren.</div></div>
<div class="grammar-box">الحركة والتغيير مع sein: gehen, kommen, fahren, werden, bleiben</div>`},
{id:"a2-02",level:"a2",number:2,title:"الجمل الثانوية weil dass wenn",titleDe:"Nebensätze",description:"الفعل في النهاية",
content:`<div class="example-box"><div class="de">Ich lerne Deutsch, weil ich in Deutschland studieren möchte.<br>Ich glaube, dass das eine gute Idee ist.<br>Wenn ich Zeit habe, gehe ich ins Kino.</div></div>`},
{id:"a2-03",level:"a2",number:3,title:"حروف الجر المتغيرة",titleDe:"Wechselpräpositionen",description:"in an auf",
content:`<p>Wohin? → Akkusativ · Wo? → Dativ</p>
<div class="example-box"><div class="de">Ich gehe in die Stadt. · Ich bin in der Stadt.</div></div>`},
{id:"a2-04",level:"a2",number:4,title:"التسوق والصحة والسفر",titleDe:"Alltag A2",description:"مواقف يومية",
content:`<div class="example-box"><div class="de">Haben Sie das in Größe M? · Ich habe Kopfschmerzen. · Wann fährt der nächste Zug nach Berlin?</div></div>`},
{id:"a2-05",level:"a2",number:5,title:"المقارنات و Konjunktiv II أساسي",titleDe:"Komparativ & Konjunktiv II",description:"تفضيل + طلبات مهذبة",
content:`<p>groß → größer → am größten · gut → besser</p>
<div class="example-box"><div class="de">Könnten Sie mir bitte helfen? · Ich möchte einen Kaffee.</div></div>`},
{id:"a2-06",level:"a2",number:6,title:"قراءة وكتابة وتمارين A2",titleDe:"Lesen Schreiben Übungen A2",description:"تمارين محلولة",
content:`<ol><li>Ich lerne Deutsch, weil ich in Deutschland ______ (arbeiten). → <b>arbeiten möchte</b></li><li>Ich gehe ______ Kino. → <b>ins</b></li></ol>`},

/* B1 */
{id:"b1-01",level:"b1",number:1,title:"Konjunktiv II المتقدم",titleDe:"Konjunktiv II",description:"نصائح وفرضيات",
content:`<div class="example-box"><div class="de">Wenn ich reich wäre, würde ich um die Welt reisen.<br>Du solltest mehr schlafen.</div></div>`},
{id:"b1-02",level:"b1",number:2,title:"Passiv المبني للمجهول",titleDe:"Passiv",description:"werden + Partizip II",
content:`<div class="example-box"><div class="de">Das Buch wird gelesen. · Die Prüfungen werden korrigiert.</div></div>`},
{id:"b1-03",level:"b1",number:3,title:"الجمل النسبية Relativsätze",titleDe:"Relativsätze",description:"der die das للربط",
content:`<div class="example-box"><div class="de">Das ist der Mann, der mir geholfen hat.<br>Das ist die Frau, die ich gestern gesehen habe.</div></div>`},
{id:"b1-04",level:"b1",number:4,title:"أدوات الربط والرأي",titleDe:"Konnektoren & Meinung",description:"obwohl damit",
content:`<p>obwohl · damit · nachdem · bevor · während</p>
<div class="example-box"><div class="de">Meiner Meinung nach… Einerseits… andererseits…</div></div>`},
{id:"b1-05",level:"b1",number:5,title:"كتابة وعرض B1",titleDe:"Schreiben & Präsentation B1",description:"رسائل وعرض",
content:`<div class="example-box"><div class="de">Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil… Mit freundlichen Grüßen</div></div>`},

/* B2 */
{id:"b2-01",level:"b2",number:1,title:"Nominalisierung و Konjunktiv I",titleDe:"Nominalisierung & Konjunktiv I",description:"تحويل + كلام غير مباشر",
content:`<p>entwickeln → die Entwicklung</p>
<div class="example-box"><div class="de">Er sagte, er sei müde. · Sie behauptete, sie komme morgen.</div></div>`},
{id:"b2-02",level:"b2",number:2,title:"كتابة B2 واستراتيجيات الامتحان",titleDe:"Schreiben B2 & Strategien",description:"مقال رأي",
content:`<div class="grammar-box">Meiner Ansicht nach… Erstens… Zweitens… Allerdings… Zusammenfassend…</div>`},
{id:"b2-03",level:"b2",number:3,title:"خطة 7 أشهر ومراجعة نهائية",titleDe:"7-Monats-Plan & Checkliste",description:"من الصفر إلى B2",
content:`<table class="vocab-table"><tr><th>شهر</th><th>مستوى</th></tr>
<tr><td>1-2</td><td>A1</td></tr><tr><td>3-4</td><td>A2</td></tr><tr><td>5-6</td><td>B1</td></tr><tr><td>7</td><td>B2</td></tr></table>`}
];
if (typeof window !== "undefined") { window.LESSONS = LESSONS; }
