const LESSONS = [
/* ========== A1 ========== */
{id:"a1-01",level:"a1",number:1,title:"التحيات والتعارف",titleDe:"Begrüßung & Vorstellung",description:"تعلم كيف تقول مرحباً وتعرف بنفسك",
content:`<h2>التحيات الأساسية</h2>
<table class="vocab-table"><tr><th>الألمانية</th><th>العربية</th></tr>
<tr><td>Hallo!</td><td>مرحباً!</td></tr>
<tr><td>Guten Morgen!</td><td>صباح الخير!</td></tr>
<tr><td>Guten Tag!</td><td>نهارك سعيد!</td></tr>
<tr><td>Guten Abend!</td><td>مساء الخير!</td></tr>
<tr><td>Gute Nacht!</td><td>تصبح على خير!</td></tr>
<tr><td>Tschüss!</td><td>باي!</td></tr>
<tr><td>Auf Wiedersehen!</td><td>إلى اللقاء!</td></tr></table>
<div class="example-box"><div class="de">Hallo, ich heiße Omar. Ich komme aus Jordanien. Ich wohne in Amman.</div><div class="ar">مرحباً، اسمي عمر. أنا من الأردن. أسكن في عمان.</div></div>
<h2>القالب الذهبي لتقديم النفس</h2>
<p><b>Hallo, ich heiße [اسمك].</b><br>Ich bin [العمر] Jahre alt.<br>Ich komme aus [البلد].<br>Ich wohne in [المدينة].<br>Ich bin [المهنة].<br>Mein Hobby ist [الهواية].<br>Freut mich!</p>
<div class="grammar-box"><b>أسئلة مهمة:</b><br>Wie heißt du? · Woher kommst du? · Wo wohnst du? · Wie alt bist du? · Was machst du?</div>`},

{id:"a1-02",level:"a1",number:2,title:"الأرقام والوقت",titleDe:"Zahlen & Uhrzeit",description:"الأرقام من 0 إلى 100 والساعة",
content:`<h2>الأرقام الأساسية</h2>
<table class="vocab-table"><tr><th>رقم</th><th>ألماني</th><th>رقم</th><th>ألماني</th></tr>
<tr><td>0</td><td>null</td><td>11</td><td>elf</td></tr>
<tr><td>1</td><td>eins</td><td>12</td><td>zwölf</td></tr>
<tr><td>2</td><td>zwei</td><td>20</td><td>zwanzig</td></tr>
<tr><td>3</td><td>drei</td><td>21</td><td>einundzwanzig</td></tr>
<tr><td>5</td><td>fünf</td><td>30</td><td>dreißig</td></tr>
<tr><td>10</td><td>zehn</td><td>100</td><td>hundert</td></tr></table>
<div class="grammar-box"><b>ملاحظة:</b> في الألمانية نقول «واحد وعشرون» (einundzwanzig) وليس «عشرون وواحد».</div>
<h2>الوقت</h2>
<div class="example-box"><div class="de">Wie spät ist es? — Es ist halb drei. / Es ist Viertel nach zwei.</div><div class="ar">كم الساعة؟ — الثانية والنصف. / الثانية والربع.</div></div>
<p><b>أيام الأسبوع:</b> Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag<br><b>قاعدة:</b> am Montag · am Wochenende</p>`},

{id:"a1-03",level:"a1",number:3,title:"sein و haben",titleDe:"sein & haben",description:"أهم فعلين في الألمانية",
content:`<h2>فعل sein (يكون)</h2>
<table class="vocab-table"><tr><th>الضمير</th><th>التصريف</th><th>مثال</th></tr>
<tr><td>ich</td><td>bin</td><td>Ich bin Student.</td></tr>
<tr><td>du</td><td>bist</td><td>Du bist nett.</td></tr>
<tr><td>er/sie/es</td><td>ist</td><td>Er ist Arzt.</td></tr>
<tr><td>wir</td><td>sind</td><td>Wir sind Freunde.</td></tr>
<tr><td>ihr</td><td>seid</td><td>Ihr seid müde.</td></tr>
<tr><td>sie/Sie</td><td>sind</td><td>Sie sind hier.</td></tr></table>
<h2>فعل haben (يملك)</h2>
<table class="vocab-table"><tr><th>الضمير</th><th>التصريف</th></tr>
<tr><td>ich</td><td>habe</td></tr>
<tr><td>du</td><td>hast</td></tr>
<tr><td>er/sie/es</td><td>hat</td></tr>
<tr><td>wir/sie/Sie</td><td>haben</td></tr>
<tr><td>ihr</td><td>habt</td></tr></table>
<div class="example-box"><div class="de">Ich habe einen Bruder. / Ich habe keine Zeit.</div><div class="ar">لدي أخ. / ليس لدي وقت.</div></div>
<div class="grammar-box"><b>تحذير:</b> Ich bin müde (حالة) ≠ Ich habe Hunger (شعور/ملكية)</div>`},

{id:"a1-04",level:"a1",number:4,title:"أدوات التعريف و Akkusativ",titleDe:"Artikel & Akkusativ",description:"der/die/das وحالة النصب",
content:`<h2>جنس الأسماء</h2>
<table class="vocab-table"><tr><th>الجنس</th><th>معرفة</th><th>نكرة</th><th>مثال</th></tr>
<tr><td>مذكر</td><td>der</td><td>ein</td><td>der Mann / ein Mann</td></tr>
<tr><td>مؤنث</td><td>die</td><td>eine</td><td>die Frau / eine Frau</td></tr>
<tr><td>محايد</td><td>das</td><td>ein</td><td>das Kind / ein Kind</td></tr>
<tr><td>جمع</td><td>die</td><td>—</td><td>die Kinder</td></tr></table>
<div class="grammar-box"><b>قواعد ذهبية:</b> -ung/-heit/-keit/-schaft → مؤنث · -chen/-lein → محايد · احفظ الاسم مع أداته دائماً.</div>
<h2>حالة النصب (Akkusativ)</h2>
<p>التغيير فقط في المذكر: <b>der → den</b> · <b>ein → einen</b></p>
<div class="example-box"><div class="de">Ich habe einen Bruder. / Ich sehe den Mann. / Ich kaufe einen Apfel.</div><div class="ar">لدي أخ. / أرى الرجل. / أشتري تفاحة.</div></div>`},

{id:"a1-05",level:"a1",number:5,title:"النفي والملكية",titleDe:"Negation & Possessiv",description:"nicht / kein والضمائر الملكية",
content:`<h2>النفي</h2>
<p><b>nicht</b> تنفي الفعل أو الصفة · <b>kein/keine/keinen</b> تنفي الاسم مع ein</p>
<div class="example-box"><div class="de">Ich habe keine Zeit. / Ich bin nicht müde. / Das ist kein Problem.</div><div class="ar">ليس لدي وقت. / لست متعباً. / هذه ليست مشكلة.</div></div>
<h2>الضمائر الملكية</h2>
<table class="vocab-table"><tr><th>ضمير</th><th>مذكر</th><th>مؤنث</th></tr>
<tr><td>ich</td><td>mein</td><td>meine</td></tr>
<tr><td>du</td><td>dein</td><td>deine</td></tr>
<tr><td>er</td><td>sein</td><td>seine</td></tr>
<tr><td>sie</td><td>ihr</td><td>ihre</td></tr></table>`},

{id:"a1-06",level:"a1",number:6,title:"العائلة",titleDe:"Familie",description:"أفراد العائلة",
content:`<h2>أفراد العائلة</h2>
<table class="vocab-table"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>der Vater / der Papa</td><td>الأب</td></tr>
<tr><td>die Mutter / die Mama</td><td>الأم</td></tr>
<tr><td>der Bruder</td><td>الأخ</td></tr>
<tr><td>die Schwester</td><td>الأخت</td></tr>
<tr><td>die Eltern</td><td>الوالدان</td></tr>
<tr><td>das Kind / die Kinder</td><td>الطفل / الأطفال</td></tr>
<tr><td>der Freund / die Freundin</td><td>الصديق / الصديقة</td></tr></table>
<div class="example-box"><div class="de">Das ist mein Vater. Er heißt Ahmed. Er ist 50 Jahre alt.</div><div class="ar">هذا أبي. اسمه أحمد. عمره 50 سنة.</div></div>`},

{id:"a1-07",level:"a1",number:7,title:"الطعام والشراب",titleDe:"Essen & Trinken",description:"مفردات الطعام وطلب في المطعم",
content:`<h2>طعام أساسي</h2>
<table class="vocab-table"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>das Brot</td><td>الخبز</td></tr>
<tr><td>das Wasser</td><td>الماء</td></tr>
<tr><td>der Kaffee</td><td>القهوة</td></tr>
<tr><td>der Tee</td><td>الشاي</td></tr>
<tr><td>der Apfel</td><td>التفاحة</td></tr>
<tr><td>die Banane</td><td>الموزة</td></tr>
<tr><td>das Fleisch</td><td>اللحم</td></tr>
<tr><td>der Reis</td><td>الأرز</td></tr></table>
<div class="example-box"><div class="de">Ich hätte gerne einen Kaffee und ein Stück Kuchen, bitte.</div><div class="ar">أريد قهوة وقطعة كعكة من فضلك.</div></div>
<p><b>في المطعم:</b> Die Speisekarte, bitte. · Was empfehlen Sie? · Die Rechnung, bitte.</p>`},

{id:"a1-08",level:"a1",number:8,title:"البيت والغرف",titleDe:"Wohnen & Zimmer",description:"وصف المنزل والغرف",
content:`<h2>الغرف والأثاث</h2>
<table class="vocab-table"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>die Wohnung</td><td>الشقة</td></tr>
<tr><td>das Haus</td><td>المنزل</td></tr>
<tr><td>das Zimmer</td><td>الغرفة</td></tr>
<tr><td>die Küche</td><td>المطبخ</td></tr>
<tr><td>das Bad</td><td>الحمام</td></tr>
<tr><td>das Schlafzimmer</td><td>غرفة النوم</td></tr>
<tr><td>der Tisch</td><td>الطاولة</td></tr>
<tr><td>das Bett</td><td>السرير</td></tr></table>
<div class="example-box"><div class="de">Ich wohne in einer Wohnung. Die Wohnung hat drei Zimmer.</div><div class="ar">أسكن في شقة. الشقة فيها ثلاث غرف.</div></div>`},

{id:"a1-09",level:"a1",number:9,title:"الروتين اليومي",titleDe:"Tagesablauf",description:"وصف يومك العادي",
content:`<h2>أفعال الروتين</h2>
<table class="vocab-table"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>aufstehen</td><td>يستيقظ</td></tr>
<tr><td>frühstücken</td><td>يتناول الإفطار</td></tr>
<tr><td>zur Arbeit gehen</td><td>يذهب إلى العمل</td></tr>
<tr><td>arbeiten</td><td>يعمل</td></tr>
<tr><td>nach Hause kommen</td><td>يعود إلى المنزل</td></tr>
<tr><td>schlafen gehen</td><td>يذهب للنوم</td></tr></table>
<div class="example-box"><div class="de">Ich stehe um sieben Uhr auf. Dann frühstücke ich. Um acht Uhr gehe ich zur Arbeit.</div><div class="ar">أستيقظ في السابعة. ثم أتناول الإفطار. في الثامنة أذهب إلى العمل.</div></div>`},

/* ========== A2 ========== */
{id:"a2-01",level:"a2",number:1,title:"Perfekt - الماضي",titleDe:"Perfekt",description:"الحديث عن الماضي",
content:`<h2>تكوين Perfekt</h2>
<p>haben/sein + Partizip II</p>
<div class="example-box"><div class="de">Ich habe gearbeitet. / Ich bin nach Hause gegangen.</div><div class="ar">عملتُ. / ذهبتُ إلى المنزل.</div></div>
<div class="grammar-box"><b>قاعدة:</b> معظم الأفعال مع haben. أفعال الحركة والتغيير مع sein (gehen, kommen, werden, bleiben...)</div>`},

{id:"a2-02",level:"a2",number:2,title:"الجمل الثانوية weil / dass",titleDe:"Nebensätze",description:"ربط الجمل بسبب و أن",
content:`<h2>weil (لأن)</h2>
<p>الفعل يذهب إلى <b>نهاية</b> الجملة الثانوية.</p>
<div class="example-box"><div class="de">Ich lerne Deutsch, weil ich in Deutschland studieren möchte.</div><div class="ar">أتعلم الألمانية لأنني أريد الدراسة في ألمانيا.</div></div>
<h2>dass (أن)</h2>
<div class="example-box"><div class="de">Ich glaube, dass das eine gute Idee ist.</div><div class="ar">أعتقد أن هذه فكرة جيدة.</div></div>`},

{id:"a2-03",level:"a2",number:3,title:"التسوق والملابس",titleDe:"Einkaufen & Kleidung",description:"في المتجر",
content:`<h2>الملابس</h2>
<table class="vocab-table"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>die Hose</td><td>البنطلون</td></tr>
<tr><td>das Hemd</td><td>القميص</td></tr>
<tr><td>die Jacke</td><td>السترة</td></tr>
<tr><td>die Schuhe</td><td>الحذاء</td></tr></table>
<div class="example-box"><div class="de">Haben Sie das in Größe M? · Kann ich das anprobieren? · Wie viel kostet das?</div><div class="ar">هل لديكم هذا بمقاس M؟ · هل يمكنني تجربته؟ · كم يكلف؟</div></div>`},

{id:"a2-04",level:"a2",number:4,title:"الصحة والطبيب",titleDe:"Gesundheit",description:"عند الطبيب",
content:`<div class="example-box"><div class="de">Ich fühle mich nicht gut. / Ich habe Kopfschmerzen. / Ich habe Fieber.</div><div class="ar">لا أشعر أنني بخير. / لدي صداع. / لدي حرارة.</div></div>
<p><b>عند الطبيب:</b> Was fehlt Ihnen? · Seit wann haben Sie das? · Nehmen Sie Medikamente?</p>`},

/* ========== B1 ========== */
{id:"b1-01",level:"b1",number:1,title:"Konjunktiv II",titleDe:"Konjunktiv II",description:"الرغبات والاقتراحات المهذبة",
content:`<h2>تكوين Konjunktiv II</h2>
<p>wäre · hätte · würde · könnte · müsste · sollte</p>
<div class="example-box"><div class="de">Wenn ich reich wäre, würde ich um die Welt reisen.</div><div class="ar">لو كنت غنياً، لسافرت حول العالم.</div></div>
<div class="example-box"><div class="de">Könntest du mir bitte helfen?</div><div class="ar">هل يمكنك مساعدتي من فضلك؟</div></div>
<p>Ich würde gerne... · Es wäre schön, wenn... · An deiner Stelle würde ich...</p>`},

{id:"b1-02",level:"b1",number:2,title:"Passiv",titleDe:"Passiv",description:"المبني للمجهول",
content:`<h2>تكوين Passiv</h2>
<p>werden + Partizip II</p>
<table class="vocab-table"><tr><th>زمن</th><th>مثال</th></tr>
<tr><td>Präsens</td><td>Das Buch wird gelesen.</td></tr>
<tr><td>Perfekt</td><td>Das Buch ist gelesen worden.</td></tr>
<tr><td>Präteritum</td><td>Das Buch wurde gelesen.</td></tr></table>
<div class="example-box"><div class="de">In Deutschland wird viel Bier getrunken.</div><div class="ar">في ألمانيا يُشرب الكثير من الجعة.</div></div>`},

{id:"b1-03",level:"b1",number:3,title:"التعبير عن الرأي والمناقشة",titleDe:"Meinung & Diskussion",description:"عبارات المناقشة",
content:`<div class="example-box"><div class="de">Meiner Meinung nach ist das eine gute Idee. Einerseits... andererseits... Da stimme ich dir zu. Da bin ich anderer Meinung.</div><div class="ar">في رأيي هذه فكرة جيدة. من ناحية... من ناحية أخرى... أوافقك. أنا من رأي آخر.</div></div>`},

/* ========== B2 ========== */
{id:"b2-01",level:"b2",number:1,title:"Nominalisierung",titleDe:"Nominalisierung",description:"تحويل الأفعال إلى أسماء",
content:`<h2>ما هي Nominalisierung؟</h2>
<p>تحويل الفعل أو الصفة إلى اسم، شائع في النصوص الرسمية.</p>
<div class="example-box"><div class="de">Die Einführung neuer Technologien führt zu einer Steigerung der Produktivität.</div><div class="ar">إدخال تقنيات جديدة يؤدي إلى زيادة الإنتاجية.</div></div>
<p>lösen → die Lösung · entscheiden → die Entscheidung · wichtig → die Wichtigkeit</p>`},

{id:"b2-02",level:"b2",number:2,title:"كتابة ومناقشة B2",titleDe:"Schreiben & Diskussion",description:"مقال رأي ومناقشة متقدمة",
content:`<h2>Forumsbeitrag (150-180 كلمة)</h2>
<div class="example-box"><div class="de">Ich denke, dass das Studium kostenlos sein sollte. Meiner Meinung nach ist Bildung ein Grundrecht. Einerseits... Andererseits... Zusammenfassend bin ich der Meinung, dass...</div></div>
<p><b>عبارات متقدمة:</b> Es lässt sich nicht leugnen, dass... · Im Gegensatz dazu... · Darüber hinaus... · Abschließend möchte ich betonen, dass...</p>`},

{id:"b2-03",level:"b2",number:3,title:"استراتيجيات امتحان B2",titleDe:"Prüfungsstrategien B2",description:"Lesen · Hören · Schreiben · Sprechen",
content:`<h2>أجزاء الامتحان</h2>
<table class="vocab-table"><tr><th>المهارة</th><th>المدة</th><th>نصائح</th></tr>
<tr><td>Lesen</td><td>65 د</td><td>اقرأ الأسئلة أولاً · ابحث عن كلمات مفتاحية</td></tr>
<tr><td>Hören</td><td>40 د</td><td>استمع مرتين · ركز على الأرقام والأسماء</td></tr>
<tr><td>Schreiben</td><td>75 د</td><td>150-180 كلمة منتدى · 100-120 بريد رسمي</td></tr>
<tr><td>Sprechen</td><td>~15 د</td><td>عرض 3-4 دقائق · مناقشة 6 دقائق</td></tr></table>
<div class="grammar-box"><b>قائمة التحقق:</b> قواعد B2 ✓ · 4000+ كلمة ✓ · 5 نماذج امتحان ✓ · تصحيح كتابة ✓ · شريك محادثة ✓</div>
<p><b>مصادر:</b> Goethe Modellsatz · DW Top-Thema · Easy German · Menschen B2 · Aspekte neu</p>`}
];
window.LESSONS = LESSONS;
