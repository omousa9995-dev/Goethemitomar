const LESSONS = [ /* A1 - lesson 01 is MODEL quality; rest to be upgraded same standard */ {id:"a1-01",level:"a1",number:1,title:"الأبجدية والنطق",titleDe:"Alphabet & Aussprache",description:"الحروف، الأصوات الخاصة، Umlaute وß — درس نموذجي كامل",
content:`<div class=\"lesson-goals\">
<h2>🎯 أهداف الدرس</h2>
<ul>
<li>تتعرف على الأبجدية الألمانية الـ 26 حرفاً + Ä Ö Ü و ß</li>
<li>تنطق الأصوات الصعبة: ch · sch · sp/st · z · w · v · ei/eu/ie</li>
<li>تميّز بين Umlaute (Ä Ö Ü) والحروف العادية</li>
<li>تتهجّى اسمك وكلمات بسيطة بصوت عالٍ</li>
</ul>
</div>

<div class=\"grammar-box\">
<b>لماذا هذا الدرس مهم؟</b><br>
في امتحان Goethe والاستماع اليومي، سوء النطق يعيق الفهم. إتقان الحروف والأصوات من أول يوم يسرّع حفظ المفردات والاستماع لاحقاً.
</div>

<h2>1) الأبجدية الألمانية (Das Alphabet)</h2>
<p>الألمانية تستخدم نفس الحروف اللاتينية، مع إضافات: <b>Ä ä · Ö ö · Ü ü · ß</b> (Eszett / scharfes S).</p>
<table class=\"vocab-table\">
<tr><th>الحرف</th><th>الاسم بالألمانية</th><th>تقريب النطق</th></tr>
<tr><td>A a</td><td>ah</td><td>آ</td></tr>
<tr><td>B b</td><td>beh</td><td>بيه</td></tr>
<tr><td>C c</td><td>tseh</td><td>تسيه</td></tr>
<tr><td>D d</td><td>deh</td><td>ديه</td></tr>
<tr><td>E e</td><td>eh</td><td>إيه</td></tr>
<tr><td>F f</td><td>eff</td><td>إف</td></tr>
<tr><td>G g</td><td>geh</td><td>غيه (صلبة)</td></tr>
<tr><td>H h</td><td>hah</td><td>ها</td></tr>
<tr><td>I i</td><td>ih</td><td>إي</td></tr>
<tr><td>J j</td><td>jot</td><td>يوت</td></tr>
<tr><td>K k</td><td>kah</td><td>كا</td></tr>
<tr><td>L l</td><td>ell</td><td>إل</td></tr>
<tr><td>M m</td><td>emm</td><td>إم</td></tr>
<tr><td>N n</td><td>enn</td><td>إن</td></tr>
<tr><td>O o</td><td>oh</td><td>أو</td></tr>
<tr><td>P p</td><td>peh</td><td>بيه</td></tr>
<tr><td>Q q</td><td>kuh</td><td>كو</td></tr>
<tr><td>R r</td><td>err</td><td>إر (من الحلق غالباً)</td></tr>
<tr><td>S s</td><td>ess</td><td>إس</td></tr>
<tr><td>T t</td><td>teh</td><td>تيه</td></tr>
<tr><td>U u</td><td>uh</td><td>أو مضمومة</td></tr>
<tr><td>V v</td><td>fau</td><td>فاو</td></tr>
<tr><td>W w</td><td>weh</td><td>فيه (مثل v الإنجليزية)</td></tr>
<tr><td>X x</td><td>iks</td><td>إكس</td></tr>
<tr><td>Y y</td><td>üpsilon</td><td>أوبسلون</td></tr>
<tr><td>Z z</td><td>tsett</td><td>تسيت</td></tr>
</table>

<h2>2) الحروف الخاصة: Ä Ö Ü و ß</h2>
<table class=\"vocab-table\">
<tr><th>الرمز</th><th>التقريب</th><th>مثال</th><th>المعنى</th></tr>
<tr><td>Ä ä</td><td>بين A و E (إيه مفتوحة)</td><td>Mädchen</td><td>فتاة</td></tr>
<tr><td>Ö ö</td><td>أو مع تدوير الشفاه</td><td>schön</td><td>جميل</td></tr>
<tr><td>Ü ü</td><td>إي مع ضم الشفاه</td><td>über</td><td>فوق / عبر</td></tr>
<tr><td>ß</td><td>س طويلة (ليست ss مضعّفة فقط)</td><td>Straße</td><td>شارع</td></tr>
</table>
<div class=\"example-box\">
<div class=\"de\">Ä ≈ في كلمة English \"bed\" أطول قليلاً · Ö و Ü تحتاجان تمرين أمام المرآة</div>
<div class=\"ar\">تدرّب: ä → ö → ü عدة مرات يومياً لمدة دقيقة</div>
</div>

<h2>3) الأصوات التي يخطئ فيها المبتدئون</h2>
<table class=\"vocab-table\">
<tr><th>المقطع</th><th>متى؟</th><th>النطق</th><th>مثال</th><th>ترجمة</th></tr>
<tr><td><b>ch</b></td><td>بعد a / o / u / au</td><td>خ مفخّمة (مثل «خ» العربية)</td><td>Buch · auch · Nacht</td><td>كتاب · أيضاً · ليل</td></tr>
<tr><td><b>ch</b></td><td>بعد e / i / ä / ö / ü / consonant</td><td>ش ناعمة (مثل ich)</td><td>ich · mich · schlecht</td><td>أنا · ني · سيء</td></tr>
<tr><td><b>sch</b></td><td>دائماً تقريباً</td><td>ش</td><td>Schule · schwimmen</td><td>مدرسة · يسبح</td></tr>
<tr><td><b>sp / st</b></td><td>في بداية الكلمة</td><td>شپ / شت</td><td>sprechen · Stadt</td><td>يتكلم · مدينة</td></tr>
<tr><td><b>z</b></td><td>دائماً</td><td>تس (ts)</td><td>Zeit · Herz</td><td>وقت · قلب</td></tr>
<tr><td><b>w</b></td><td>دائماً</td><td>ڤ (v الإنجليزية)</td><td>Wasser · wo</td><td>ماء · أين</td></tr>
<tr><td><b>v</b></td><td>غالباً</td><td>ف</td><td>Vater · viel</td><td>أب · كثير</td></tr>
<tr><td><b>ei</b></td><td>—</td><td>آي</td><td>ein · mein · zwei</td><td>واحد · لي · اثنان</td></tr>
<tr><td><b>ie</b></td><td>—</td><td>إي طويلة</td><td>Liebe · hier</td><td>حب · هنا</td></tr>
<tr><td><b>eu / äu</b></td><td>—</td><td>أوي</td><td>Freund · Häuser</td><td>صديق · بيوت</td></tr>
</table>

<h2>4) أمثلة للنطق (اقرأ بصوت عالٍ)</h2>
<div class=\"example-box\">
<div class=\"de\">1. ich – mich – dich – nicht – schlecht</div>
<div class=\"ar\">أنا – ني – كَ – ليس – سيء</div>
</div>
<div class=\"example-box\">
<div class=\"de\">2. Buch – auch – Nacht – machen – Tochter</div>
<div class=\"ar\">كتاب – أيضاً – ليل – يعمل – ابنة</div>
</div>
<div class=\"example-box\">
<div class=\"de\">3. Schule – sprechen – Stadt – Straße – schwimmen</div>
<div class=\"ar\">مدرسة – يتكلم – مدينة – شارع – يسبح</div>
</div>
<div class=\"example-box\">
<div class=\"de\">4. Zeit – zwei – Herz – zum – Katze</div>
<div class=\"ar\">وقت – اثنان – قلب – إلى – قطة</div>
</div>
<div class=\"example-box\">
<div class=\"de\">5. schön – über – Mädchen – Straße – Größe</div>
<div class=\"ar\">جميل – فوق – فتاة – شارع – حجم</div>
</div>

<h2>5) تمارين</h2>
<p><b>تمرين 1:</b> اختر النطق الأقرب لـ <i>ich</i></p>
<ul>
<li>أ) إخ (خ مفخمة)</li>
<li>ب) إيش (ش ناعمة) ✅</li>
<li>ج) إك</li>
</ul>
<p><b>تمرين 2:</b> أي كلمة فيها ch مفخمة (مثل خ)؟</p>
<ul>
<li>أ) mich</li>
<li>ب) Buch ✅</li>
<li>ج) schlecht</li>
</ul>
<p><b>تمرين 3:</b> املأ الحرف الناقص</p>
<ul>
<li>Sch__le → <b>Schule</b></li>
<li>spr__chen → <b>sprechen</b></li>
<li>Str__ße → <b>Straße</b></li>
</ul>
<p><b>تمرين 4:</b> صِل بين الألماني والعربي</p>
<table class=\"vocab-table\">
<tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>Wasser</td><td>ماء</td></tr>
<tr><td>Zeit</td><td>وقت</td></tr>
<tr><td>schön</td><td>جميل</td></tr>
<tr><td>Vater</td><td>أب</td></tr>
</table>

<details class=\"grammar-box\">
<summary><b>اعرض الحلول</b></summary>
<p>1) ب · 2) ب · 3) Schule / sprechen / Straße · 4) كما في الجدول أعلاه</p>
</details>

<h2>6) أخطاء شائعة للمتحدثين بالعربية</h2>
<ul>
<li><b>قراءة w كـ «و»</b> → الصحيح أقرب إلى «ڤ» (Wasser ≈ فاسر)</li>
<li><b>قراءة v كـ «ف» أو «ڤ» عشوائياً</b> → في أغلب كلمات A1: v = ف (Vater)</li>
<li><b>عدم التمييز بين ich-Laut و ach-Laut</b> → بعد e/i ناعمة، بعد a/o/u مفخمة</li>
<li><b>نطق z كـ «ز»</b> → الصحيح «تس»</li>
<li><b>إهمال Umlaute</b> → schön ≠ schon (جميل ≠ مسبقاً/already)</li>
</ul>

<h2>7) مهمة إنتاجية (افعلها الآن)</h2>
<div class=\"grammar-box\">
<ol>
<li>اكتب اسمك بالحروف الألمانية وتهجَّه بصوت عالٍ (مثل: O-M-A-R).</li>
<li>اقرأ القائمة التالية 3 مرات ببطء ثم بسرعة متوسطة:<br>
<code>ich – Buch – Schule – sprechen – Zeit – Wasser – schön – Straße</code></li>
<li>سجّل صوتك 20 ثانية وأنت تقرأ الجمل، ثم استمع مرة أخرى غداً.</li>
</ol>
</div>

<div class=\"example-box\">
<div class=\"de\"><b>خلاصة سريعة:</b> ch بعد a/o/u = خ · ch بعد e/i = ش ناعمة · sch = ش · sp/st بداية = شپ/شت · z = تس · w ≈ ڤ · v ≈ ف</div>
</div>`},
{id:"a1-02",level:"a1",number:2,title:"التحيات والتعارف",titleDe:"Begrüßung & Vorstellung",description:"التحيات + القالب الذهبي",
content:`<h2>التحيات</h2>
<table class=\"vocab-table\"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>Hallo! / Guten Morgen! / Guten Tag!</td><td>مرحباً / صباح الخير / نهارك سعيد</td></tr>
<tr><td>Guten Abend! / Gute Nacht!</td><td>مساء الخير / تصبح على خير</td></tr>
<tr><td>Tschüss! / Auf Wiedersehen! / Bis bald!</td><td>باي / إلى اللقاء / قريباً</td></tr></table>
<h2>القالب الذهبي</h2>
<div class=\"example-box\"><div class=\"de\">Hallo, ich heiße … Ich komme aus … Ich wohne in … Ich bin … Jahre alt. Und du?</div>
<div class=\"ar\">مرحباً، اسمي … أنا من … أسكن في … عمري … سنة. وأنت؟</div></div>`},
{id:"a1-03",level:"a1",number:3,title:"الأرقام والوقت والتقويم",titleDe:"Zahlen, Uhrzeit & Kalender",description:"0–100، الوقت، أيام الأسبوع",
content:`<h2>الأرقام 0–20</h2>
<p>null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig</p>
<h2>الوقت</h2>
<div class=\"example-box\"><div class=\"de\">Wie spät ist es? Es ist zehn Uhr. / Es ist halb drei. / Viertel nach zwei.</div></div>`},
{id:"a1-04",level:"a1",number:4,title:"الضمائر و sein و haben",titleDe:"Pronomen, sein & haben",description:"ich/du/er… + تصريف sein و haben",
content:`<h2>الضمائر</h2>
<table class=\"vocab-table\"><tr><th>Nominativ</th><th>عربي</th></tr>
<tr><td>ich · du · er/sie/es · wir · ihr · sie/Sie</td><td>أنا · أنت · هو/هي/هو · نحن · أنتم · هم/حضرتك</td></tr></table>
<h2>sein / haben (Präsens)</h2>
<div class=\"example-box\"><div class=\"de\">ich bin / habe · du bist / hast · er ist / hat · wir sind / haben</div></div>`},
{id:"a1-05",level:"a1",number:5,title:"تصريف الأفعال المنتظمة والشاذة",titleDe:"Verbkonjugation Präsens",description:"قاعدة -en وأفعال شاذة شائعة",
content:`<h2>القاعدة</h2>
<p>الفعل: machen → ich mache, du machst, er macht, wir machen</p>
<h2>شاذة مهمة</h2>
<p>fahren: du fährst, er fährt · lesen: du liest · sprechen: du sprichst · essen: du isst</p>`},
{id:"a1-06",level:"a1",number:6,title:"جنس الأسماء وأدوات التعريف",titleDe:"Genus & Artikel",description:"der/die/das + ein/eine",
content:`<h2>أدوات التعريف</h2>
<table class=\"vocab-table\"><tr><th>Geschlecht</th><th>bestimmt</th><th>unbestimmt</th></tr>
<tr><td>Maskulin</td><td>der</td><td>ein</td></tr>
<tr><td>Feminin</td><td>die</td><td>eine</td></tr>
<tr><td>Neutrum</td><td>das</td><td>ein</td></tr></table>`},
{id:"a1-07",level:"a1",number:7,title:"Akkusativ و Dativ مبسّط",titleDe:"Akkusativ & Dativ",description:"المفعول به والمفعول غير المباشر",
content:`<h2>Akkusativ</h2>
<p>der→den · ein→einen · ich→mich · du→dich</p>
<h2>Dativ</h2>
<p>der→dem · die→der · das→dem · ich→mir · du→dir</p>`},
{id:"a1-08",level:"a1",number:8,title:"حروف الجر الأساسية",titleDe:"Präpositionen",description:"in, auf, mit, zu, von, bei…",
content:`<h2>حروف جر شائعة</h2>
<p>in · auf · an · mit · zu · von · bei · für · ohne · um</p>
<div class=\"example-box\"><div class=\"de\">Ich bin in der Schule. Ich gehe zur Arbeit. Das ist für dich.</div></div>`},
{id:"a1-09",level:"a1",number:9,title:"الأسئلة والاستفهام",titleDe:"W-Fragen",description:"Wer, was, wo, wann, wie, warum…",
content:`<h2>أدوات الاستفهام</h2>
<table class=\"vocab-table\"><tr><th>Fragewort</th><th>عربي</th></tr>
<tr><td>Wer? Was? Wo? Wohin? Woher?</td><td>من؟ ماذا؟ أين؟ إلى أين؟ من أين؟</td></tr>
<tr><td>Wann? Wie? Warum? Welche(r/s)?</td><td>متى؟ كيف؟ لماذا؟ أي؟</td></tr></table>`},
{id:"a1-10",level:"a1",number:10,title:"النفي: nicht و kein",titleDe:"Negation",description:"متى nicht ومتى kein",
content:`<h2>nicht vs kein</h2>
<p><b>kein</b> مع الاسم بدون أداة تعريف محددة: Ich habe kein Auto.</p>
<p><b>nicht</b> لنفي الفعل/الصفة/الظرف: Ich komme nicht. Das ist nicht gut.</p>`},
{id:"a1-11",level:"a1",number:11,title:"الصفات والملكية",titleDe:"Adjektive & Possessiv",description:"mein/dein + صفات بسيطة",
content:`<h2>ضمائر الملكية</h2>
<p>mein, dein, sein, ihr, unser, euer, ihr, Ihr</p>
<div class=\"example-box\"><div class=\"de\">Das ist mein Buch. Wie ist dein Name?</div></div>`},
{id:"a1-12",level:"a1",number:12,title:"اليوميات والروتين",titleDe:"Tagesablauf",description:"أفعال يومية وترتيب الجملة",
content:`<h2>روتين يومي</h2>
<div class=\"example-box\"><div class=\"de\">Ich stehe um 7 Uhr auf. Ich frühstücke. Ich gehe zur Arbeit. Abends sehe ich fern.</div></div>`},
{id:"a1-13",level:"a1",number:13,title:"الطعام والمطعم",titleDe:"Essen & Restaurant",description:"طلب طعام ومفردات المائدة",
content:`<h2>في المطعم</h2>
<div class=\"example-box\"><div class=\"de\">Ich hätte gerne … / Die Speisekarte bitte! / Die Rechnung bitte!</div>
<div class=\"ar\">أريد … / القائمة من فضلك / الحساب من فضلك</div></div>`},
{id:"a1-14",level:"a1",number:14,title:"التسوق والأسعار",titleDe:"Einkaufen & Preise",description:"في المتجر والسوق",
content:`<h2>التسوق</h2>
<div class=\"example-box\"><div class=\"de\">Was kostet das? Das ist zu teuer. Haben Sie das in Größe M?</div></div>`},
{id:"a1-15",level:"a1",number:15,title:"المكان والاتجاهات",titleDe:"Ort & Wege",description:"وصف المكان وطلب الاتجاه",
content:`<h2>الاتجاهات</h2>
<div class=\"example-box\"><div class=\"de\">Wo ist der Bahnhof? Gehen Sie geradeaus, dann links.</div></div>`},
{id:"a1-16",level:"a1",number:16,title:"الصحة والجسم",titleDe:"Körper & Gesundheit",description:"أعراض بسيطة عند الطبيب",
content:`<h2>عند الطبيب</h2>
<div class=\"example-box\"><div class=\"de\">Mir geht es nicht gut. Ich habe Kopfschmerzen.</div></div>`},
{id:"a1-17",level:"a1",number:17,title:"الطقس والملابس",titleDe:"Wetter & Kleidung",description:"وصف الطقس والملابس",
content:`<h2>الطقس</h2>
<div class=\"example-box\"><div class=\"de\">Heute ist es sonnig und warm. Ich trage eine Jacke.</div></div>`},
{id:"a1-18",level:"a1",number:18,title:"الكتابة: بريد ورسالة قصيرة",titleDe:"Schreiben A1",description:"بريد إلكتروني بسيط وبطاقة",
content:`<h2>نموذج رسالة</h2>
<div class=\"example-box\"><div class=\"de\">Liebe Anna, wie geht es dir? Am Samstag habe ich Zeit. Viele Grüße</div></div>`},
{id:"a1-19",level:"a1",number:19,title:"المحادثة: مواقف A1",titleDe:"Sprechen A1",description:"مواقف شفهية للامتحان",
content:`<h2>مواقف</h2>
<p>تعارف · طلب في مقهى · السؤال عن الطريق · موعد بسيط</p>`},
{id:"a1-20",level:"a1",number:20,title:"خطة 30 يوماً + مراجعة A1",titleDe:"30-Tage-Plan A1",description:"جدول مراجعة قبل امتحان A1",
content:`<h2>خطة سريعة</h2>
<p>الأسبوع 1–2: أساسيات ونطق · 3–4: قواعد ومفردات · مراجعة + نموذج امتحان</p>`},
/* A2+ placeholders keep site structure */
{id:"a2-01",level:"a2",number:1,title:"مراجعة A1 + Perfekt",titleDe:"Perfekt",description:"الماضي المركب",content:`<h2>Perfekt</h2><p>ich habe gemacht · ich bin gegangen</p>`},
{id:"a2-02",level:"a2",number:2,title:"الجمل الثانوية weil/dass",titleDe:"Nebensätze",description:"weil و dass",content:`<h2>weil / dass</h2><p>Ich bleibe zu Hause, weil ich krank bin.</p>`},
{id:"a2-03",level:"a2",number:3,title:"المقارنات",titleDe:"Komparativ",description:"أكبر/أصغر",content:`<h2>Komparativ</h2><p>größer als · so groß wie</p>`},
{id:"b1-01",level:"b1",number:1,title:"Konjunktiv II للتهذيب",titleDe:"Konjunktiv II",description:"würde / hätte / wäre",content:`<h2>KII</h2><p>Ich würde gerne… · Hätten Sie…?</p>`},
{id:"b1-02",level:"b1",number:2,title:"Passiv مبسّط",titleDe:"Passiv",description:"werden + Partizip II",content:`<h2>Passiv</h2><p>Das Buch wird gelesen.</p>`},
{id:"b1-03",level:"b1",number:3,title:"الربط والحجاج B1",titleDe:"Argumentation",description:"رأي ودعم",content:`<h2>Meinung</h2><p>Meiner Meinung nach… · deshalb…</p>`},
{id:"b2-01",level:"b2",number:1,title:"Nominalisierung",titleDe:"Nominalisierung",description:"تحويل الفعل إلى اسم",content:`<h2>Nominalstil</h2><p>die Entwicklung der Technik</p>`},
{id:"b2-02",level:"b2",number:2,title:"Konjunktiv I للخطاب",titleDe:"Konjunktiv I",description:"نقل الكلام",content:`<h2>KI</h2><p>Er sagte, er habe keine Zeit.</p>`},
{id:"b2-03",level:"b2",number:3,title:"كتابة مقال B2",titleDe:"Erörterung",description:"هيكل المقال",content:`<h2>Aufbau</h2><p>Einleitung · Argumente · Schluss</p>`}
];
