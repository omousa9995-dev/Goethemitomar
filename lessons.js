const LESSONS = [
/* ========== A1 – الأساسيات (موسّع) ========== */
{id:"a1-01",level:"a1",number:1,title:"التحيات والتعارف",titleDe:"Begrüßung & Vorstellung",description:"كيف تحيي وتعرّف بنفسك رسميًا وغير رسمي",
content:`<h2>التحيات حسب الوقت</h2>
<table class=\"vocab-table\"><tr><th>الألمانية</th><th>العربية</th><th>ملاحظات</th></tr>
<tr><td>Hallo!</td><td>مرحباً</td><td>غير رسمي</td></tr>
<tr><td>Guten Morgen!</td><td>صباح الخير</td><td>حتى الظهر</td></tr>
<tr><td>Guten Tag!</td><td>نهارك سعيد</td><td>عام / رسمي</td></tr>
<tr><td>Guten Abend!</td><td>مساء الخير</td><td>من المساء</td></tr>
<tr><td>Gute Nacht!</td><td>تصبح على خير</td><td>عند النوم</td></tr>
<tr><td>Tschüss!</td><td>باي</td><td>غير رسمي</td></tr>
<tr><td>Auf Wiedersehen!</td><td>إلى اللقاء</td><td>رسمي</td></tr>
<tr><td>Bis bald!</td><td>إلى اللقاء قريبًا</td><td>ودّي</td></tr></table>
<h2>القالب الذهبي لتقديم النفس</h2>
<div class=\"example-box\"><div class=\"de\">Hallo, ich heiße Omar. Ich bin 28 Jahre alt. Ich komme aus Jordanien und wohne in Amman. Ich bin Ingenieur. Mein Hobby ist Fußball. Freut mich!</div>
<div class=\"ar\">مرحباً، اسمي عمر. عمري 28 سنة. أنا من الأردن وأسكن في عمان. أنا مهندس. هوايتي كرة القدم. سررت بلقائك!</div></div>
<div class=\"grammar-box\"><b>أسئلة يجب حفظها:</b><br>Wie heißt du? · Woher kommst du? · Wo wohnst du? · Wie alt bist du? · Was machst du? · Was sind deine Hobbys?</div>
<h2>du أم Sie؟</h2>
<p><b>du</b> = أصدقاء وعائلة. <b>Sie</b> = رسمي (دائمًا بحرف كبير).</p>`},

{id:"a1-02",level:"a1",number:2,title:"الأرقام والوقت والتواريخ",titleDe:"Zahlen, Uhrzeit & Datum",description:"الأرقام 0–1000، الساعة، الأيام والشهور",
content:`<h2>الأرقام الأساسية</h2>
<table class=\"vocab-table\"><tr><th>رقم</th><th>ألماني</th><th>رقم</th><th>ألماني</th></tr>
<tr><td>0</td><td>null</td><td>11</td><td>elf</td></tr>
<tr><td>1</td><td>eins</td><td>12</td><td>zwölf</td></tr>
<tr><td>2</td><td>zwei</td><td>20</td><td>zwanzig</td></tr>
<tr><td>3</td><td>drei</td><td>21</td><td>einundzwanzig</td></tr>
<tr><td>5</td><td>fünf</td><td>30</td><td>dreißig</td></tr>
<tr><td>10</td><td>zehn</td><td>100</td><td>hundert</td></tr>
<tr><td>7</td><td>sieben</td><td>1000</td><td>tausend</td></tr></table>
<div class=\"grammar-box\"><b>قاعدة:</b> الواحدات قبل العشرات: 21 = einundzwanzig</div>
<h2>الوقت</h2>
<div class=\"example-box\"><div class=\"de\">Wie spät ist es? — Es ist drei Uhr. / Es ist halb vier. / Es ist Viertel nach zwei.</div>
<div class=\"ar\">كم الساعة؟ — الثالثة. / الثالثة والنصف. / الثانية والربع.</div></div>
<p><b>أيام:</b> Montag · Dienstag · Mittwoch · Donnerstag · Freitag · Samstag · Sonntag<br>
<b>شهور:</b> Januar bis Dezember</p>`},

{id:"a1-03",level:"a1",number:3,title:"الأفعال sein و haben",titleDe:"sein & haben",description:"أهم فعلين مع التصريف الكامل",
content:`<h2>sein = يكون</h2>
<table class=\"vocab-table\"><tr><th>الضمير</th><th>التصريف</th><th>مثال</th></tr>
<tr><td>ich</td><td>bin</td><td>Ich bin Student.</td></tr>
<tr><td>du</td><td>bist</td><td>Du bist nett.</td></tr>
<tr><td>er/sie/es</td><td>ist</td><td>Er ist Arzt.</td></tr>
<tr><td>wir</td><td>sind</td><td>Wir sind müde.</td></tr>
<tr><td>ihr</td><td>seid</td><td>Ihr seid Freunde.</td></tr>
<tr><td>sie/Sie</td><td>sind</td><td>Sie sind hier.</td></tr></table>
<h2>haben = يملك</h2>
<table class=\"vocab-table\"><tr><th>الضمير</th><th>التصريف</th></tr>
<tr><td>ich</td><td>habe</td></tr><tr><td>du</td><td>hast</td></tr><tr><td>er/sie/es</td><td>hat</td></tr>
<tr><td>wir/sie/Sie</td><td>haben</td></tr><tr><td>ihr</td><td>habt</td></tr></table>
<div class=\"grammar-box\">Ich habe Hunger. · Ich habe keine Zeit. · Ich bin müde. · Es ist kalt.</div>`},

{id:"a1-04",level:"a1",number:4,title:"أدوات التعريف والجنس",titleDe:"Artikel & Genus",description:"der / die / das وكيفية معرفة جنس الاسم",
content:`<h2>أدوات التعريف</h2>
<table class=\"vocab-table\"><tr><th>الجنس</th><th>معرفة</th><th>نكرة</th><th>أمثلة</th></tr>
<tr><td>مذكر</td><td>der</td><td>ein</td><td>der Mann, der Tisch</td></tr>
<tr><td>مؤنث</td><td>die</td><td>eine</td><td>die Frau, die Milch</td></tr>
<tr><td>محايد</td><td>das</td><td>ein</td><td>das Kind, das Buch</td></tr>
<tr><td>جمع</td><td>die</td><td>—</td><td>die Männer</td></tr></table>
<div class=\"grammar-box\"><b>نصائح:</b> -ung/-heit/-schaft/-keit → مؤنث · -chen/-lein → محايد · احفظ الاسم مع أداته دائمًا</div>`},

{id:"a1-05",level:"a1",number:5,title:"الضمائر الشخصية والملكية",titleDe:"Personal- & Possessivpronomen",description:"ich, du, er... و mein, dein, sein...",
content:`<h2>الضمائر الشخصية</h2>
<table class=\"vocab-table\"><tr><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
<tr><td>ich</td><td>mich</td><td>mir</td></tr>
<tr><td>du</td><td>dich</td><td>dir</td></tr>
<tr><td>er/sie/es</td><td>ihn/sie/es</td><td>ihm/ihr/ihm</td></tr>
<tr><td>wir</td><td>uns</td><td>uns</td></tr>
<tr><td>ihr</td><td>euch</td><td>euch</td></tr>
<tr><td>sie/Sie</td><td>sie/Sie</td><td>ihnen/Ihnen</td></tr></table>
<h2>ضمائر الملكية</h2>
<p>mein, dein, sein, ihr, unser, euer, ihr/Ihr — مع المؤنث/الجمع أضف -e: meine Tasche</p>`},

{id:"a1-06",level:"a1",number:6,title:"الأفعال المنتظمة وتصريف Präsens",titleDe:"Regelmäßige Verben – Präsens",description:"كيف تصرّف أي فعل منتظم في المضارع",
content:`<h2>قاعدة التصريف</h2>
<table class=\"vocab-table\"><tr><th>الضمير</th><th>نهاية</th><th>lernen</th></tr>
<tr><td>ich</td><td>-e</td><td>lerne</td></tr>
<tr><td>du</td><td>-st</td><td>lernst</td></tr>
<tr><td>er/sie/es</td><td>-t</td><td>lernt</td></tr>
<tr><td>wir/sie/Sie</td><td>-en</td><td>lernen</td></tr>
<tr><td>ihr</td><td>-t</td><td>lernt</td></tr></table>
<div class=\"grammar-box\"><b>Position 2:</b> الفعل المصرّف دائمًا في الموضع الثاني. Ich lerne Deutsch. · Heute lerne ich Deutsch.</div>
<p>أفعال شائعة: machen, kommen, gehen, sprechen, arbeiten, kaufen, trinken, essen, lesen, schreiben, verstehen, spielen, hören, sehen</p>`},

{id:"a1-07",level:"a1",number:7,title:"الأسرة والصفات الشخصية",titleDe:"Familie & Eigenschaften",description:"أفراد العائلة ووصف الأشخاص",
content:`<h2>أفراد العائلة</h2>
<table class=\"vocab-table\"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>die Eltern</td><td>الوالدان</td></tr>
<tr><td>der Vater / die Mutter</td><td>الأب / الأم</td></tr>
<tr><td>der Bruder / die Schwester</td><td>الأخ / الأخت</td></tr>
<tr><td>das Kind / der Sohn / die Tochter</td><td>الطفل / الابن / الابنة</td></tr>
<tr><td>der Freund / die Freundin</td><td>الصديق / الصديقة</td></tr>
<tr><td>verheiratet / ledig</td><td>متزوج / أعزب</td></tr></table>
<p>صفات: nett, freundlich, intelligent, fleißig, groß, klein, jung, alt, schön, lustig, sportlich</p>
<div class=\"example-box\"><div class=\"de\">Das ist meine Schwester. Sie heißt Layla. Sie ist 25 und sehr nett.</div>
<div class=\"ar\">هذه أختي. اسمها ليلى. عمرها 25 ولطيفة جدًا.</div></div>`},

{id:"a1-08",level:"a1",number:8,title:"الطعام والشراب والمطعم",titleDe:"Essen, Trinken & Restaurant",description:"طلب الطعام والشراب",
content:`<h2>مفردات</h2>
<p>das Brot, der Käse, das Fleisch, das Gemüse, das Obst, das Wasser, der Saft, der Kaffee, der Tee, die Milch, die Rechnung, die Speisekarte</p>
<div class=\"grammar-box\">Ich hätte gerne... · Die Rechnung bitte! · Stimmt so. · Guten Appetit! · Prost!</div>
<div class=\"example-box\"><div class=\"de\">Ich hätte gerne einen Kaffee und ein Stück Kuchen.</div>
<div class=\"ar\">أريد قهوة وقطعة كعكة من فضلك.</div></div>`},

{id:"a1-09",level:"a1",number:9,title:"الروتين اليومي",titleDe:"Tagesablauf",description:"وصف يومك من الصباح إلى المساء",
content:`<h2>أفعال الروتين</h2>
<p>aufstehen · sich waschen · frühstücken · zur Arbeit gehen · arbeiten · zu Mittag essen · nach Hause kommen · kochen · fernsehen · schlafen gehen</p>
<div class=\"example-box\"><div class=\"de\">Ich stehe um sieben Uhr auf. Dann frühstücke ich. Um acht gehe ich zur Arbeit. Am Abend koche ich.</div>
<div class=\"ar\">أستيقظ الساعة السابعة. ثم أفطر. الساعة الثامنة أذهب للعمل. مساءً أطبخ.</div></div>`},

{id:"a1-10",level:"a1",number:10,title:"السؤال والنفي",titleDe:"Fragen & Negation",description:"كيف تسأل وكيف تنفي",
content:`<h2>كلمات الاستفهام</h2>
<p>Was? Wer? Wo? Woher? Wohin? Wann? Wie? Wie viel? Warum?</p>
<h2>النفي</h2>
<p><b>nicht</b> للفعل/الصفة · <b>kein/keine</b> للاسم النكرة</p>
<div class=\"example-box\"><div class=\"de\">Ich verstehe nicht. · Ich habe keine Zeit. · Das ist nicht teuer.</div>
<div class=\"ar\">لا أفهم. · ليس لدي وقت. · هذا ليس غاليًا.</div></div>`},

{id:"a1-11",level:"a1",number:11,title:"Akkusativ – حالة المفعول به",titleDe:"Akkusativ",description:"متى تتغير der إلى den",
content:`<h2>التغيير في Akkusativ</h2>
<p>المذكر فقط: <b>der → den</b> · <b>ein → einen</b></p>
<div class=\"grammar-box\">أفعال شائعة: haben, sehen, kaufen, finden, brauchen, suchen, essen, trinken, verstehen</div>
<div class=\"example-box\"><div class=\"de\">Ich habe einen Bruder. · Ich kaufe den Apfel. · Wir brauchen eine Wohnung.</div>
<div class=\"ar\">لدي أخ. · أشتري التفاحة. · نحتاج شقة.</div></div>`},

{id:"a1-12",level:"a1",number:12,title:"المدينة والتسوق والاتجاهات",titleDe:"Stadt, Einkaufen & Wege",description:"السؤال عن المكان والتسوق",
content:`<h2>أماكن</h2>
<p>der Bahnhof, die Haltestelle, der Supermarkt, die Apotheke, die Bank, das Krankenhaus, die Post</p>
<div class=\"grammar-box\">Wo ist...? · Gehen Sie geradeaus. · Biegen Sie links/rechts ab. · Es ist in der Nähe.</div>
<div class=\"example-box\"><div class=\"de\">Was kostet das? · Das ist zu teuer. · Haben Sie das in Größe M? · Bar oder Karte?</div>
<div class=\"ar\">كم السعر؟ · غالي جدًا. · هل لديكم القياس M؟ · نقدًا أم بطاقة؟</div></div>`},

/* ========== A2 ========== */
{id:"a2-01",level:"a2",number:1,title:"Perfekt - الماضي",titleDe:"Perfekt",description:"الحديث عن الماضي",
content:`<h2>تكوين Perfekt</h2>
<p>haben/sein + Partizip II</p>
<div class=\"example-box\"><div class=\"de\">Ich habe gearbeitet. / Ich bin nach Hause gegangen.</div><div class=\"ar\">عملتُ. / ذهبتُ إلى المنزل.</div></div>
<div class=\"grammar-box\"><b>قاعدة:</b> معظم الأفعال مع haben. أفعال الحركة والتغيير مع sein (gehen, kommen, fahren, werden, bleiben)</div>`},

{id:"a2-02",level:"a2",number:2,title:"الجمل الثانوية weil / dass",titleDe:"Nebensätze weil & dass",description:"ربط الجمل بسبب و أن",
content:`<h2>weil (لأن) و dass (أن)</h2>
<p>الفعل يذهب إلى <b>نهاية</b> الجملة الثانوية.</p>
<div class=\"example-box\"><div class=\"de\">Ich lerne Deutsch, weil ich in Deutschland studieren möchte. / Ich glaube, dass das eine gute Idee ist.</div>
<div class=\"ar\">أتعلم الألمانية لأنني أريد الدراسة في ألمانيا. / أعتقد أن هذه فكرة جيدة.</div></div>`},

{id:"a2-03",level:"a2",number:3,title:"التسوق والملابس",titleDe:"Einkaufen & Kleidung",description:"في المتجر",
content:`<p>die Hose, das Hemd, die Jacke, die Schuhe, der Rock, das Kleid</p>
<div class=\"example-box\"><div class=\"de\">Haben Sie das in Größe M? · Kann ich das anprobieren? · Das passt mir gut.</div>
<div class=\"ar\">هل لديكم هذا بمقاس M؟ · هل يمكنني تجربته؟ · يناسبني جيدًا.</div></div>`},

{id:"a2-04",level:"a2",number:4,title:"الصحة والطبيب",titleDe:"Gesundheit",description:"عند الطبيب",
content:`<div class=\"example-box\"><div class=\"de\">Ich fühle mich nicht gut. / Ich habe Kopfschmerzen und Fieber. / Mir ist übel.</div>
<div class=\"ar\">لا أشعر أنني بخير. / لدي صداع وحرارة. / أشعر بالغثيان.</div></div>`},

{id:"a2-05",level:"a2",number:5,title:"السفر والمواصلات",titleDe:"Reisen & Verkehr",description:"في المحطة والمطار",
content:`<div class=\"example-box\"><div class=\"de\">Wann fährt der nächste Zug nach Berlin? · Ein Hin- und Rückfahrticket, bitte.</div>
<div class=\"ar\">متى ينطلق القطار التالي إلى برلين؟ · تذكرة ذهاب وعودة من فضلك.</div></div>`},

{id:"a2-06",level:"a2",number:6,title:"المقارنات والصفات",titleDe:"Komparativ & Superlativ",description:"أفعل التفضيل",
content:`<p>klein → kleiner → am kleinsten · gut → besser → am besten</p>
<div class=\"example-box\"><div class=\"de\">Deutsch ist schwieriger als Englisch. / Das ist das beste Restaurant.</div>
<div class=\"ar\">الألمانية أصعب من الإنجليزية. / هذا أفضل مطعم.</div></div>`},

/* ========== B1 ========== */
{id:"b1-01",level:"b1",number:1,title:"Konjunktiv II",titleDe:"Konjunktiv II",description:"الرغبات والاقتراحات المهذبة",
content:`<p>wäre · hätte · würde · könnte · müsste · sollte</p>
<div class=\"example-box\"><div class=\"de\">Wenn ich reich wäre, würde ich um die Welt reisen. / Könntest du mir bitte helfen?</div>
<div class=\"ar\">لو كنت غنيًا لسافرت حول العالم. / هل يمكنك مساعدتي؟</div></div>`},

{id:"b1-02",level:"b1",number:2,title:"Passiv",titleDe:"Passiv",description:"المبني للمجهول",
content:`<p>werden + Partizip II</p>
<div class=\"example-box\"><div class=\"de\">In Deutschland wird viel Bier getrunken. / Das Problem wird gelöst.</div>
<div class=\"ar\">في ألمانيا يُشرب الكثير من الجعة. / تُحل المشكلة.</div></div>`},

{id:"b1-03",level:"b1",number:3,title:"التعبير عن الرأي والمناقشة",titleDe:"Meinung & Diskussion",description:"عبارات المناقشة",
content:`<div class=\"example-box\"><div class=\"de\">Meiner Meinung nach... Einerseits... andererseits... Da stimme ich dir zu. Da bin ich anderer Meinung.</div>
<div class=\"ar\">في رأيي... من ناحية... من ناحية أخرى... أوافقك. أنا من رأي آخر.</div></div>`},

{id:"b1-04",level:"b1",number:4,title:"Relativsätze",titleDe:"Relativsätze",description:"الجمل النسبية",
content:`<div class=\"example-box\"><div class=\"de\">Das ist der Mann, der mir geholfen hat. / Die Frau, die dort steht, ist meine Lehrerin.</div>
<div class=\"ar\">هذا الرجل الذي ساعدني. / المرأة التي تقف هناك هي معلمتي.</div></div>`},

{id:"b1-05",level:"b1",number:5,title:"العرض التقديمي",titleDe:"Präsentation",description:"هيكل العرض الشفهي",
content:`<p>Begrüßung → Thema → Gliederung → Hauptteil → Zusammenfassung → Fragen</p>
<div class=\"example-box\"><div class=\"de\">Das Thema meiner Präsentation ist... Zuerst... Dann... Zum Schluss... Vielen Dank für Ihre Aufmerksamkeit.</div></div>`},

/* ========== B2 ========== */
{id:"b2-01",level:"b2",number:1,title:"Nominalisierung",titleDe:"Nominalisierung",description:"تحويل الأفعال إلى أسماء",
content:`<div class=\"example-box\"><div class=\"de\">Die Einführung neuer Technologien führt zu einer Steigerung der Produktivität.</div>
<div class=\"ar\">إدخال تقنيات جديدة يؤدي إلى زيادة الإنتاجية.</div></div>
<p>lösen → die Lösung · entscheiden → die Entscheidung</p>`},

{id:"b2-02",level:"b2",number:2,title:"كتابة ومناقشة B2",titleDe:"Schreiben & Diskussion B2",description:"مقال رأي متقدم",
content:`<div class=\"grammar-box\">Es lässt sich nicht leugnen, dass... · Im Gegensatz dazu... · Darüber hinaus... · Abschließend möchte ich betonen, dass...</div>`},

{id:"b2-03",level:"b2",number:3,title:"استراتيجيات امتحان B2",titleDe:"Prüfungsstrategien B2",description:"Lesen · Hören · Schreiben · Sprechen",
content:`<p>تدرب بالمؤقت. اقرأ الأسئلة قبل النص. في الكتابة: مقدمة + رأي + حجج + خاتمة. في المحادثة: نظم أفكارك وعبارات الربط.</p>`},

{id:"b2-04",level:"b2",number:4,title:"Konjunktiv I و الخطاب غير المباشر",titleDe:"Konjunktiv I",description:"نقل الكلام",
content:`<div class=\"example-box\"><div class=\"de\">Er sagt, er habe keine Zeit. / Sie behauptet, das sei nicht wahr.</div>
<div class=\"ar\">يقول إنه ليس لديه وقت. / تدعي أن هذا غير صحيح.</div></div>`}
];
window.LESSONS = LESSONS;
