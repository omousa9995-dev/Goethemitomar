const LESSONS = [
/* ========== A1 – الأساسيات الكاملة من المحتوى التعليمي ========== */
{id:"a1-01",level:"a1",number:1,title:"الأبجدية والنطق",titleDe:"Alphabet & Aussprache",description:"الحروف والأصوات الخاصة Umlaute وß",
content:`<h2>الأبجدية الألمانية</h2>
<p>26 حرفًا + Ä Ö Ü + ß</p>
<table class="vocab-table"><tr><th>الحرف/المقطع</th><th>النطق</th><th>مثال</th></tr>
<tr><td>ch بعد a/o/u</td><td>خ مفخمة</td><td>Buch</td></tr>
<tr><td>ch بعد e/i</td><td>ش ناعمة</td><td>ich</td></tr>
<tr><td>sch</td><td>ش</td><td>Schule</td></tr>
<tr><td>sp / st في البداية</td><td>شپ / شت</td><td>sprechen / Stadt</td></tr>
<tr><td>z · w · v · ß</td><td>تس · ڤ · ف · س طويلة</td><td>Zeit · Wasser · Vater · Straße</td></tr>
<tr><td>ei · eu/äu · ie</td><td>آي · أوي · إي</td><td>ein · Häuser · Liebe</td></tr></table>
<div class="grammar-box"><b>Umlaute:</b> Ä ≈ إيه · Ö ≈ أُو مرققة · Ü ≈ إي مع ضم الشفاه<br>تمرين: schön – über – Straße – sprechen – ich – Buch – Zeit – Wasser</div>`},

{id:"a1-02",level:"a1",number:2,title:"التحيات والتعارف",titleDe:"Begrüßung & Vorstellung",description:"التحيات + القالب الذهبي لتقديم النفس",
content:`<h2>التحيات</h2>
<table class="vocab-table"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>Hallo! / Guten Morgen! / Guten Tag! / Guten Abend! / Gute Nacht!</td><td>مرحبًا / صباح الخير / نهارك سعيد / مساء الخير / تصبح على خير</td></tr>
<tr><td>Tschüss! / Auf Wiedersehen! / Bis bald! / Bis morgen!</td><td>باي / إلى اللقاء / قريبًا / إلى الغد</td></tr></table>
<h2>القالب الذهبي</h2>
<div class="example-box"><div class="de">Hallo, ich heiße Omar. Ich bin 31 Jahre alt. Ich komme aus Jordanien. Ich wohne in Amman. Ich spreche Arabisch und ein bisschen Deutsch. Ich bin Ingenieur. Mein Hobby ist Lesen. Freut mich!</div>
<div class="ar">مرحبًا، اسمي عمر. عمري 31. من الأردن. أسكن في عمان. أتحدث العربية وقليلًا ألمانية. مهندس. هوايتي القراءة. سررت بلقائك!</div></div>
<div class="grammar-box">Wie heißt du? · Woher kommst du? · Wo wohnst du? · Wie alt bist du? · Was machst du?<br><b>du</b> غير رسمي · <b>Sie</b> رسمي (بحرف كبير)</div>`},

{id:"a1-03",level:"a1",number:3,title:"الأرقام والوقت والتقويم",titleDe:"Zahlen, Uhrzeit & Kalender",description:"0–100، الساعة، الأيام، الشهور، الفصول",
content:`<h2>الأرقام</h2>
<p>0 null · 1 eins · 2 zwei · 3 drei · 4 vier · 5 fünf · 6 sechs · 7 sieben · 8 acht · 9 neun · 10 zehn<br>
11 elf · 12 zwölf · 13 dreizehn · 20 zwanzig · 21 einundzwanzig · 30 dreißig · 100 hundert</p>
<div class="grammar-box">الواحدات قبل العشرات: 21 = einundzwanzig</div>
<h2>الوقت</h2>
<div class="example-box"><div class="de">Wie spät ist es? — Es ist zwei Uhr. / halb drei. / Viertel nach zwei. / Viertel vor drei. · um 8 Uhr · von 9 bis 12 Uhr</div></div>
<p><b>أيام:</b> Montag…Sonntag → am Montag<br><b>شهور:</b> Januar…Dezember → im Januar<br><b>فصول:</b> Frühling, Sommer, Herbst, Winter → im Sommer</p>`},

{id:"a1-04",level:"a1",number:4,title:"الضمائر و sein و haben",titleDe:"Pronomen, sein & haben",description:"الضمائر + أهم فعلين",
content:`<h2>الضمائر</h2>
<p>ich · du · er/sie/es · wir · ihr · sie/Sie (رسمي بحرف كبير)</p>
<h2>sein</h2>
<table class="vocab-table"><tr><th>ich bin</th><th>du bist</th><th>er/sie/es ist</th><th>wir/sie/Sie sind</th><th>ihr seid</th></tr></table>
<h2>haben</h2>
<table class="vocab-table"><tr><th>ich habe</th><th>du hast</th><th>er/sie/es hat</th><th>wir/sie/Sie haben</th><th>ihr habt</th></tr></table>
<div class="grammar-box">Ich bin müde (حالة) · Ich habe Hunger (شعور)<br>Ich habe einen Bruder. · Ich habe keine Zeit.</div>`},

{id:"a1-05",level:"a1",number:5,title:"تصريف الأفعال المنتظمة والشاذة",titleDe:"Verbkonjugation Präsens",description:"نهايات Präsens + أفعال شاذة",
content:`<h2>منتظمة</h2>
<p>احذف -en ثم: ich -e · du -st · er -t · wir/sie -en · ihr -t</p>
<table class="vocab-table"><tr><th></th><th>lernen</th><th>wohnen</th><th>arbeiten</th></tr>
<tr><td>ich</td><td>lerne</td><td>wohne</td><td>arbeite</td></tr>
<tr><td>du</td><td>lernst</td><td>wohnst</td><td>arbeitest</td></tr>
<tr><td>er</td><td>lernt</td><td>wohnt</td><td>arbeitet</td></tr></table>
<div class="grammar-box">Position 2: الفعل المصرّف في الموضع الثاني دائمًا.</div>
<h2>شاذة</h2>
<p>sprechen→sprichst/spricht · geben→gibst/gibt · nehmen→nimmst/nimmt · lesen→liest · fahren→fährst/fährt · schlafen→schläfst · sehen→siehst · essen→isst</p>`},

{id:"a1-06",level:"a1",number:6,title:"جنس الأسماء وأدوات التعريف",titleDe:"Genus & Artikel",description:"der die das + قواعد الجنس",
content:`<table class="vocab-table"><tr><th>جنس</th><th>معرفة</th><th>نكرة</th></tr>
<tr><td>مذكر</td><td>der</td><td>ein</td></tr>
<tr><td>مؤنث</td><td>die</td><td>eine</td></tr>
<tr><td>محايد</td><td>das</td><td>ein</td></tr>
<tr><td>جمع</td><td>die</td><td>—</td></tr></table>
<div class="grammar-box">-ung/-heit/-keit/-schaft/-ion → مؤنث · -chen/-lein → محايد<br>احفظ الاسم مع أداته: der Tisch · die Lampe · das Buch</div>`},

{id:"a1-07",level:"a1",number:7,title:"Akkusativ و Dativ",titleDe:"Akkusativ & Dativ",description:"النصب والجر مع الأفعال وحروف الجر",
content:`<h2>Akkusativ</h2>
<p>المذكر فقط: der→den · ein→einen</p>
<p>أفعال: haben, sehen, kaufen, brauchen, suchen, finden, lesen, essen, trinken, machen, nehmen, treffen, fragen</p>
<div class="example-box"><div class="de">Ich habe einen Bruder. · Ich sehe den Mann. · Ich brauche eine Wohnung.</div></div>
<h2>Dativ</h2>
<p>dem/einem · der/einer · dem/einem · den+n (جمع)</p>
<p>أفعال: helfen, danken, gefallen, gehören, geben, sagen, antworten<br>حروف جر: mit, nach, von, zu, bei, aus, seit</p>
<div class="example-box"><div class="de">Ich helfe dem Freund. · Das gefällt mir. · Ich fahre mit dem Bus. · Ich gebe dem Kind einen Ball.</div></div>
<div class="grammar-box">الشخص غالبًا Dativ · الشيء غالبًا Akkusativ</div>`},

{id:"a1-08",level:"a1",number:8,title:"النفي والملكية",titleDe:"Negation & Possessivartikel",description:"nicht / kein + mein dein sein",
content:`<p><b>nicht</b> للفعل/الصفة · <b>kein/keine/keinen</b> للاسم النكرة</p>
<div class="example-box"><div class="de">Ich lerne nicht. · Ich habe kein Auto. · Ich habe keine Zeit. · Ich habe keinen Hunger.</div></div>
<table class="vocab-table"><tr><th>ضمير</th><th>مذكر/محايد</th><th>مؤنث/جمع</th></tr>
<tr><td>ich</td><td>mein</td><td>meine</td></tr>
<tr><td>du</td><td>dein</td><td>deine</td></tr>
<tr><td>er/es</td><td>sein</td><td>seine</td></tr>
<tr><td>sie</td><td>ihr</td><td>ihre</td></tr>
<tr><td>wir</td><td>unser</td><td>unsere</td></tr>
<tr><td>ihr</td><td>euer</td><td>eure</td></tr>
<tr><td>sie/Sie</td><td>ihr/Ihr</td><td>ihre/Ihre</td></tr></table>`},

{id:"a1-09",level:"a1",number:9,title:"الأفعال المساعدة والمنفصلة",titleDe:"Modalverben & trennbare Verben",description:"können müssen wollen + aufstehen",
content:`<table class="vocab-table"><tr><th>فعل</th><th>معنى</th><th>ich</th><th>du</th><th>er</th></tr>
<tr><td>können</td><td>يستطيع</td><td>kann</td><td>kannst</td><td>kann</td></tr>
<tr><td>müssen</td><td>يجب</td><td>muss</td><td>musst</td><td>muss</td></tr>
<tr><td>wollen</td><td>يريد</td><td>will</td><td>willst</td><td>will</td></tr>
<tr><td>möchten</td><td>يود</td><td>möchte</td><td>möchtest</td><td>möchte</td></tr>
<tr><td>dürfen</td><td>مسموح</td><td>darf</td><td>darfst</td><td>darf</td></tr>
<tr><td>sollen</td><td>ينبغي</td><td>soll</td><td>sollst</td><td>soll</td></tr></table>
<div class="grammar-box">المساعد موضع 2 · المصدر في النهاية: Ich kann Deutsch sprechen.</div>
<p>منفصلة: aufstehen, einkaufen, anfangen, ausgehen, mitkommen, abfahren, zurückkommen</p>
<div class="example-box"><div class="de">Ich stehe um 7 Uhr auf. · Er kauft im Supermarkt ein.</div></div>`},

{id:"a1-10",level:"a1",number:10,title:"الأسئلة وترتيب الجملة",titleDe:"Fragen & Satzstellung",description:"W-Fragen و Position 2",
content:`<p>Was? Wer? Wo? Woher? Wohin? Wann? Wie? Wie viel? Warum?</p>
<div class="grammar-box">الفعل المصرّف في الموضع الثاني. سؤال نعم/لا: الفعل أولًا → Kommst du morgen?</div>`},

{id:"a1-11",level:"a1",number:11,title:"مفردات 1 – عائلة طعام سكن",titleDe:"Wortschatz 1",description:"عائلة، طعام، سكن",
content:`<p><b>عائلة:</b> Eltern, Vater, Mutter, Bruder, Schwester, Kind, Sohn, Tochter, Freund/in, verheiratet, ledig</p>
<p><b>طعام:</b> Brot, Käse, Fleisch, Gemüse, Obst, Wasser, Kaffee, Tee, Milch, Rechnung, Speisekarte</p>
<div class="grammar-box">Ich hätte gerne... · Die Rechnung bitte!</div>
<p><b>سكن:</b> Wohnung, Haus, Zimmer, Küche, Bad, Schlafzimmer, Tisch, Bett</p>`},

{id:"a1-12",level:"a1",number:12,title:"مفردات 2 – مدينة تسوق صحة",titleDe:"Wortschatz 2",description:"مدينة، تسوق، صحة",
content:`<p>Bahnhof, Haltestelle, Supermarkt, Apotheke, Bank, Krankenhaus, Post</p>
<div class="example-box"><div class="de">Was kostet das? · Haben Sie das in Größe M? · Ich fühle mich nicht gut. · Ich habe Kopfschmerzen.</div></div>`},

{id:"a1-13",level:"a1",number:13,title:"تمارين A1 محلولة",titleDe:"Übungen A1 mit Lösungen",description:"sein/haben و Akkusativ مع الحلول",
content:`<h2>sein / haben</h2>
<ol>
<li>Ich ______ Student. → <b>bin</b></li>
<li>Du ______ ein Buch. → <b>hast</b></li>
<li>Er ______ Arzt. → <b>ist</b></li>
<li>Wir ______ Freunde. → <b>sind</b></li>
<li>Ihr ______ Hunger. → <b>habt</b></li>
<li>Sie ______ zwei Kinder. → <b>hat</b></li>
<li>______ du Zeit? → <b>Hast</b></li>
<li>Das ______ mein Bruder. → <b>ist</b></li>
<li>Meine Eltern ______ in Amman. → <b>sind</b></li>
<li>Ich ______ keine Zeit. → <b>habe</b></li>
</ol>
<h2>Akkusativ</h2>
<ol>
<li>Ich sehe (der Mann). → <b>den Mann</b></li>
<li>Ich kaufe (ein Apfel). → <b>einen Apfel</b></li>
<li>Er hat (eine Schwester). → <b>eine Schwester</b></li>
<li>Wir suchen (der Schlüssel). → <b>den Schlüssel</b></li>
<li>Sie trinkt (ein Kaffee). → <b>einen Kaffee</b></li>
</ol>`},

{id:"a1-14",level:"a1",number:14,title:"قراءة وكتابة وتحدث A1",titleDe:"Lesen Schreiben Sprechen A1",description:"نص + بطاقة بريدية + مهام تحدث",
content:`<h2>Lesen</h2>
<div class="example-box"><div class="de">Hallo! Ich heiße Anna. Ich bin 25 Jahre alt. Ich komme aus Deutschland. Ich wohne in Berlin. Ich bin Studentin. Ich habe eine Katze. Die Katze heißt Mimi. Am Morgen trinke ich Kaffee. Am Abend lese ich ein Buch.</div></div>
<p>أسئلة: الاسم؟ أين تسكن؟ ماذا تفعل صباحًا؟ هل لديها حيوان؟ → Anna · Berlin · Kaffee · Ja, Katze</p>
<h2>Schreiben (30–40 كلمة)</h2>
<div class="example-box"><div class="de">Liebe(r) [Name], wie geht es dir? Ich habe am Samstag Geburtstag. Ich mache eine Party um 19 Uhr. Kannst du kommen? Viele Grüße, [Dein Name]</div></div>
<h2>Sprechen</h2>
<p>قدم نفسك · اطرح سؤالًا · اطلب بلطف: Geben Sie mir bitte einen Stift!</p>`},

{id:"a1-15",level:"a1",number:15,title:"خطة 30 يومًا + استماع A1",titleDe:"30-Tage-Plan & Hören",description:"جدول دراسي + نص مقهى",
content:`<h2>خطة 30 يومًا</h2>
<table class="vocab-table"><tr><th>أيام</th><th>تركيز</th></tr>
<tr><td>1–7</td><td>أبجدية، ضمائر، sein/haben، أرقام، تحيات، عائلة + مراجعة</td></tr>
<tr><td>8–14</td><td>nicht/kein، Akkusativ، Modalverben، أسئلة، مدينة + مراجعة</td></tr>
<tr><td>15–21</td><td>أفعال منفصلة، Dativ، حروف جر، ملكية، Perfekt مقدمة + مراجعة</td></tr>
<tr><td>22–28</td><td>weil/dass، روتين، ماضي، عمل + مراجعة</td></tr>
<tr><td>29–30</td><td>مراجعة شاملة + امتحان تجريبي A1</td></tr></table>
<div class="grammar-box">يوميًا: 10د مفردات · 20د قواعد · 15د استماع · 15د كتابة/تحدث</div>
<h2>Hörtext: Im Café</h2>
<div class="example-box"><div class="de">Kellnerin: Was möchten Sie?<br>Gast: Einen Kaffee, bitte. Nur mit Milch.<br>Gast: Ein Stück Kuchen.<br>Kellnerin: 5 Euro 50.</div></div>
<p>يشرب؟ مع حليب؟ يأكل؟ السعر؟ → Kaffee · nur Milch · Kuchen · 5,50</p>`},

/* ========== A2 ========== */
{id:"a2-01",level:"a2",number:1,title:"Perfekt - الماضي",titleDe:"Perfekt",description:"haben/sein + Partizip II",
content:`<div class="example-box"><div class="de">Ich habe gearbeitet. / Ich bin nach Hause gegangen.</div></div>
<div class="grammar-box">الحركة والتغيير غالبًا مع sein (gehen, kommen, fahren, werden, bleiben)</div>`},
{id:"a2-02",level:"a2",number:2,title:"الجمل الثانوية weil / dass / wenn",titleDe:"Nebensätze",description:"الفعل في نهاية الجملة الثانوية",
content:`<div class="example-box"><div class="de">Ich lerne Deutsch, weil ich in Deutschland studieren möchte. / Ich glaube, dass das eine gute Idee ist. / Wenn ich Zeit habe, gehe ich ins Kino.</div></div>`},
{id:"a2-03",level:"a2",number:3,title:"تمارين A2 محلولة",titleDe:"Übungen A2",description:"جمل ثانوية + حروف جر",
content:`<ol>
<li>Ich lerne Deutsch, weil ich in Deutschland ______ (arbeiten). → <b>arbeiten möchte</b></li>
<li>Er sagt, dass er morgen ______ (kommen). → <b>kommt</b></li>
<li>Wenn ich Zeit ______ (haben), gehe ich ins Kino. → <b>habe</b></li>
<li>Als ich klein ______ (sein), habe ich in Amman gelebt. → <b>war</b></li>
<li>Ich gehe ______ Kino. → <b>ins</b></li>
<li>Das Buch liegt ______ Tisch. → <b>auf dem</b></li>
</ol>`},
{id:"a2-04",level:"a2",number:4,title:"التسوق والملابس والصحة والسفر",titleDe:"Alltag A2",description:"مواقف يومية",
content:`<div class="example-box"><div class="de">Haben Sie das in Größe M? · Kann ich das anprobieren?<br>Ich fühle mich nicht gut. / Kopfschmerzen und Fieber.<br>Wann fährt der nächste Zug nach Berlin? · Hin- und Rückfahrticket.</div></div>`},
{id:"a2-05",level:"a2",number:5,title:"المقارنات و Präteritum أساسي",titleDe:"Komparativ & Präteritum",description:"أفعل التفضيل + war/hatte",
content:`<p>klein → kleiner → am kleinsten · gut → besser → am besten</p>
<div class="example-box"><div class="de">Deutsch ist schwieriger als Englisch. / Als ich klein war, habe ich in Amman gelebt.</div></div>`},
{id:"a2-06",level:"a2",number:6,title:"استماع A2 – المحطة",titleDe:"Hören A2 Bahnhof",description:"نص استماع مع أسئلة",
content:`<div class="example-box"><div class="de">A: Wann fährt der nächste Zug nach Berlin?<br>B: Um 14:30 Uhr von Gleis 5. Etwa zwei Stunden. Direkt, ohne Umsteigen.</div></div>
<p>متى؟ من أي رصيف؟ المدة؟ تحويل؟ → 14:30 · Gleis 5 · ساعتان · لا</p>`},

/* ========== B1 ========== */
{id:"b1-01",level:"b1",number:1,title:"Konjunktiv II",titleDe:"Konjunktiv II",description:"رغبات وطلبات مهذبة",
content:`<p>wäre · hätte · würde · könnte · müsste · sollte</p>
<div class="example-box"><div class="de">Wenn ich reich wäre, würde ich um die Welt reisen. / Könntest du mir bitte helfen? / An deiner Stelle würde ich...</div></div>`},
{id:"b1-02",level:"b1",number:2,title:"Passiv",titleDe:"Passiv",description:"المبني للمجهول",
content:`<div class="example-box"><div class="de">Das Buch wird gelesen. / Die Prüfungen werden korrigiert. / Der Vertrag ist unterschrieben worden.</div></div>`},
{id:"b1-03",level:"b1",number:3,title:"تمارين B1 محلولة",titleDe:"Übungen B1",description:"Konjunktiv II و Passiv",
content:`<ol>
<li>Wenn ich Zeit ______ (haben), ______ ich ins Kino gehen. → <b>hätte, würde</b></li>
<li>______ (können) Sie mir bitte helfen? → <b>Könnten</b></li>
<li>Der Lehrer korrigiert die Prüfungen. → Die Prüfungen <b>werden</b> vom Lehrer <b>korrigiert</b>.</li>
<li>Man baut ein neues Krankenhaus. → Ein neues Krankenhaus <b>wird gebaut</b>.</li>
</ol>`},
{id:"b1-04",level:"b1",number:4,title:"Relativsätze والرأي",titleDe:"Relativsätze & Meinung",description:"جمل موصولة + عبارات نقاش",
content:`<div class="example-box"><div class="de">Das ist der Mann, der mir geholfen hat.<br>Meiner Meinung nach... Einerseits... andererseits... Da stimme ich dir zu.</div></div>`},
{id:"b1-05",level:"b1",number:5,title:"العرض التقديمي واستماع B1",titleDe:"Präsentation & Hören B1",description:"هيكل العرض + مقابلة عمل",
content:`<p>Thema → Gliederung → Hauptteil → Zusammenfassung → Fragen</p>
<div class="example-box"><div class="de">Ich heiße Sara Müller. Ich habe einen Bachelor in BWL. Drei Jahre Erfahrung im Marketing. Ich bin flexibel und teamfähig.</div></div>`},

/* ========== B2 ========== */
{id:"b2-01",level:"b2",number:1,title:"Nominalisierung و Konjunktiv I",titleDe:"Nominalisierung & Konjunktiv I",description:"تحويل لأساء + كلام غير مباشر",
content:`<p>entwickeln → die Entwicklung · entscheiden → die Entscheidung</p>
<div class="example-box"><div class="de">Er sagte, er sei müde. / Sie behauptete, sie komme morgen.</div></div>`},
{id:"b2-02",level:"b2",number:2,title:"تمارين B2 محلولة",titleDe:"Übungen B2",description:"Konjunktiv I و Nominalisierung",
content:`<ol>
<li>Er sagte: "Ich bin müde." → er <b>sei</b> müde</li>
<li>Sie behauptete: "Ich komme morgen." → sie <b>komme</b> morgen</li>
<li>entwickeln → <b>die Entwicklung</b></li>
<li>entscheiden → <b>die Entscheidung</b></li>
<li>diskutieren → <b>die Diskussion</b></li>
</ol>`},
{id:"b2-03",level:"b2",number:3,title:"كتابة B2 واستراتيجيات الامتحان",titleDe:"Schreiben B2 & Strategien",description:"مقال رأي + معايير غوته",
content:`<div class="grammar-box">Es lässt sich nicht leugnen, dass... · Im Gegensatz dazu... · Darüber hinaus... · Abschließend möchte ich betonen, dass...</div>
<p><b>معايير الكتابة:</b> Erfüllung 30% · Kohärenz 20% · Wortschatz 25% · Grammatik 25%</p>
<p>مفردات امتحان: Klimawandel, CO2-Ausstoß, nachhaltig · Bewerbung, Lebenslauf · künstliche Intelligenz, Datenschutz · Integration, Gleichberechtigung</p>`},
{id:"b2-04",level:"b2",number:4,title:"خطة 7 أشهر ونصائح ذهبية",titleDe:"7-Monats-Plan",description:"جدول المستويات + نصائح النجاح",
content:`<table class="vocab-table"><tr><th>شهر</th><th>مستوى</th></tr>
<tr><td>1–2</td><td>A1 كامل</td></tr>
<tr><td>3–4</td><td>A2 كامل</td></tr>
<tr><td>5–6</td><td>B1</td></tr>
<tr><td>7</td><td>B2 + نماذج امتحان</td></tr></table>
<div class="grammar-box">يوميًا ساعة: 10د مفردات · 20د قواعد/قراءة · 15د استماع · 15د كتابة/تحدث<br>
ممارسة يومية · سياق للمفردات · نماذج امتحان بمؤقت · تصحيح الكتابة والتحدث</div>
<p><b>Viel Erfolg!</b></p>`}
];
window.LESSONS = LESSONS;
