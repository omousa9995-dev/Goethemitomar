/* ==================== بيانات الدروس ==================== */
const LESSONS = [
  // ========== A1 ==========
  {
    id: "a1-01",
    level: "a1",
    number: 1,
    title: "التحيات والتعارف",
    titleDe: "Begrüßung und Vorstellung",
    description: "تعلم كيف تقول مرحباً وتعرف بنفسك",
    content: `
      <h2>1. التحيات الأساسية</h2>
      <p>في الألمانية تختلف التحيات حسب الوقت من اليوم ومستوى الرسمية:</p>
      
      <table class="vocab-table">
        <thead>
          <tr><th>الألمانية</th><th>العربية</th><th>الاستخدام</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Hallo!</strong></td><td>مرحبا!</td><td>غير رسمي (مع الأصدقاء)</td></tr>
          <tr><td><strong>Guten Morgen!</strong></td><td>صباح الخير!</td><td>حتى الساعة 11 تقريباً</td></tr>
          <tr><td><strong>Guten Tag!</strong></td><td>نهارك سعيد!</td><td>من الظهر حتى المساء (رسمي)</td></tr>
          <tr><td><strong>Guten Abend!</strong></td><td>مساء الخير!</td><td>من المساء</td></tr>
          <tr><td><strong>Gute Nacht!</strong></td><td>تصبح على خير!</td><td>عند الذهاب للنوم فقط</td></tr>
          <tr><td><strong>Tschüss!</strong></td><td>مع السلامة!</td><td>غير رسمي</td></tr>
          <tr><td><strong>Auf Wiedersehen!</strong></td><td>إلى اللقاء!</td><td>رسمي</td></tr>
        </tbody>
      </table>

      <h2>2. كيف تقدم نفسك؟</h2>
      <div class="example-box">
        <div class="de">Hallo! Ich heiße Omar.</div>
        <div class="ar">مرحباً! اسمي عمر.</div>
      </div>
      <div class="example-box">
        <div class="de">Guten Tag! Mein Name ist Sara.</div>
        <div class="ar">نهارك سعيد! اسمي سارة.</div>
      </div>
      <div class="example-box">
        <div class="de">Ich komme aus Ägypten.</div>
        <div class="ar">أنا من مصر.</div>
      </div>
      <div class="example-box">
        <div class="de">Ich wohne in Kairo.</div>
        <div class="ar">أسكن في القاهرة.</div>
      </div>
      <div class="example-box">
        <div class="de">Ich bin 28 Jahre alt.</div>
        <div class="ar">عمري 28 سنة.</div>
      </div>

      <h2>3. أسئلة مهمة</h2>
      <table class="vocab-table">
        <thead>
          <tr><th>السؤال</th><th>المعنى</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Wie heißt du?</strong></td><td>ما اسمك؟ (غير رسمي)</td></tr>
          <tr><td><strong>Wie heißen Sie?</strong></td><td>ما اسمك؟ (رسمي)</td></tr>
          <tr><td><strong>Woher kommst du?</strong></td><td>من أين أنت؟</td></tr>
          <tr><td><strong>Wo wohnst du?</strong></td><td>أين تسكن؟</td></tr>
          <tr><td><strong>Wie alt bist du?</strong></td><td>كم عمرك؟</td></tr>
        </tbody>
      </table>

      <div class="grammar-box">
        <strong>ملاحظة مهمة:</strong><br>
        في الألمانية نستخدم <strong>du</strong> مع الأصدقاء والعائلة والشباب، و<strong>Sie</strong> (بحرف كبير) في المواقف الرسمية ومع كبار السن والغرباء.
      </div>

      <h2>4. محادثة قصيرة كاملة</h2>
      <div class="example-box">
        <div class="de">A: Guten Tag! Ich heiße Omar. Wie heißen Sie?</div>
        <div class="ar">أ: نهارك سعيد! اسمي عمر. ما اسمك؟</div>
      </div>
      <div class="example-box">
        <div class="de">B: Guten Tag, Herr Omar! Ich heiße Frau Müller.</div>
        <div class="ar">ب: نهارك سعيد يا سيد عمر! اسمي السيدة مولر.</div>
      </div>
      <div class="example-box">
        <div class="de">A: Freut mich!</div>
        <div class="ar">أ: سررت بلقائك!</div>
      </div>
      <div class="example-box">
        <div class="de">B: Mich auch!</div>
        <div class="ar">ب: وأنا أيضاً!</div>
      </div>
    `
  },
  {
    id: "a1-02",
    level: "a1",
    number: 2,
    title: "الأرقام من 1 إلى 100",
    titleDe: "Die Zahlen",
    description: "تعلم الأرقام وطريقة نطقها",
    content: `
      <h2>الأرقام الأساسية (0–20)</h2>
      <table class="vocab-table">
        <thead>
          <tr><th>الرقم</th><th>الألمانية</th><th>النطق التقريبي</th></tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>null</td><td>نول</td></tr>
          <tr><td>1</td><td>eins</td><td>آينس</td></tr>
          <tr><td>2</td><td>zwei</td><td>تسفاي</td></tr>
          <tr><td>3</td><td>drei</td><td>دراي</td></tr>
          <tr><td>4</td><td>vier</td><td>فير</td></tr>
          <tr><td>5</td><td>fünf</td><td>فونف</td></tr>
          <tr><td>6</td><td>sechs</td><td>زكس</td></tr>
          <tr><td>7</td><td>sieben</td><td>زيبن</td></tr>
          <tr><td>8</td><td>acht</td><td>آخت</td></tr>
          <tr><td>9</td><td>neun</td><td>نوين</td></tr>
          <tr><td>10</td><td>zehn</td><td>تسين</td></tr>
          <tr><td>11</td><td>elf</td><td>إلف</td></tr>
          <tr><td>12</td><td>zwölf</td><td>تسفولف</td></tr>
          <tr><td>13</td><td>dreizehn</td><td>درايتسين</td></tr>
          <tr><td>14</td><td>vierzehn</td><td>فيرتسين</td></tr>
          <tr><td>15</td><td>fünfzehn</td><td>فونفتسين</td></tr>
          <tr><td>16</td><td>sechzehn</td><td>زكستسين</td></tr>
          <tr><td>17</td><td>siebzehn</td><td>زيبتسين</td></tr>
          <tr><td>18</td><td>achtzehn</td><td>آختتسين</td></tr>
          <tr><td>19</td><td>neunzehn</td><td>نوينتسين</td></tr>
          <tr><td>20</td><td>zwanzig</td><td>تسفانتشيخ</td></tr>
        </tbody>
      </table>

      <h2>العشرات</h2>
      <table class="vocab-table">
        <thead>
          <tr><th>الرقم</th><th>الألمانية</th></tr>
        </thead>
        <tbody>
          <tr><td>30</td><td>dreißig</td></tr>
          <tr><td>40</td><td>vierzig</td></tr>
          <tr><td>50</td><td>fünfzig</td></tr>
          <tr><td>60</td><td>sechzig</td></tr>
          <tr><td>70</td><td>siebzig</td></tr>
          <tr><td>80</td><td>achtzig</td></tr>
          <tr><td>90</td><td>neunzig</td></tr>
          <tr><td>100</td><td>hundert</td></tr>
        </tbody>
      </table>

      <div class="grammar-box">
        <strong>قاعدة مهمة جداً:</strong><br>
        من 21 فما فوق نقول الوحدة أولاً ثم "und" ثم العشرات.<br>
        مثال: 21 = <strong>einundzwanzig</strong> (واحد وعشرون)<br>
        35 = <strong>fünfunddreißig</strong><br>
        47 = <strong>siebenundvierzig</strong>
      </div>

      <h2>أمثلة عملية</h2>
      <div class="example-box">
        <div class="de">Ich bin fünfundzwanzig Jahre alt.</div>
        <div class="ar">عمري خمسة وعشرون سنة.</div>
      </div>
      <div class="example-box">
        <div class="de">Das kostet neunzehn Euro.</div>
        <div class="ar">هذا يكلف تسعة عشر يورو.</div>
      </div>
    `
  },
  {
    id: "a1-03",
    level: "a1",
    number: 3,
    title: "الأفعال الأساسية في الحاضر",
    titleDe: "Wichtige Verben im Präsens",
    description: "تعلم تصريف أهم الأفعال",
    content: `
      <h2>الفعل sein (يكون)</h2>
      <table class="vocab-table">
        <thead>
          <tr><th>الضمير</th><th>التصريف</th><th>المعنى</th></tr>
        </thead>
        <tbody>
          <tr><td>ich</td><td><strong>bin</strong></td><td>أنا أكون</td></tr>
          <tr><td>du</td><td><strong>bist</strong></td><td>أنت تكون</td></tr>
          <tr><td>er/sie/es</td><td><strong>ist</strong></td><td>هو/هي يكون</td></tr>
          <tr><td>wir</td><td><strong>sind</strong></td><td>نحن نكون</td></tr>
          <tr><td>ihr</td><td><strong>seid</strong></td><td>أنتم تكونون</td></tr>
          <tr><td>Sie/sie</td><td><strong>sind</strong></td><td>حضرتك / هم</td></tr>
        </tbody>
      </table>

      <h2>الفعل haben (يملك)</h2>
      <table class="vocab-table">
        <thead>
          <tr><th>الضمير</th><th>التصريف</th></tr>
        </thead>
        <tbody>
          <tr><td>ich</td><td><strong>habe</strong></td></tr>
          <tr><td>du</td><td><strong>hast</strong></td></tr>
          <tr><td>er/sie/es</td><td><strong>hat</strong></td></tr>
          <tr><td>wir</td><td><strong>haben</strong></td></tr>
          <tr><td>ihr</td><td><strong>habt</strong></td></tr>
          <tr><td>Sie/sie</td><td><strong>haben</strong></td></tr>
        </tbody>
      </table>

      <h2>أفعال منتظمة مهمة</h2>
      <p>معظم الأفعال المنتظمة تُصرف كالتالي (مثال: lernen = يتعلم):</p>
      <table class="vocab-table">
        <thead>
          <tr><th>الضمير</th><th>lernen</th><th>wohnen</th><th>kommen</th></tr>
        </thead>
        <tbody>
          <tr><td>ich</td><td>lerne</td><td>wohne</td><td>komme</td></tr>
          <tr><td>du</td><td>lernst</td><td>wohnst</td><td>kommst</td></tr>
          <tr><td>er/sie/es</td><td>lernt</td><td>wohnt</td><td>kommt</td></tr>
          <tr><td>wir</td><td>lernen</td><td>wohnen</td><td>kommen</td></tr>
          <tr><td>ihr</td><td>lernt</td><td>wohnt</td><td>kommt</td></tr>
          <tr><td>Sie/sie</td><td>lernen</td><td>wohnen</td><td>kommen</td></tr>
        </tbody>
      </table>

      <div class="grammar-box">
        <strong>قاعدة ذهبية:</strong><br>
        في الجملة الخبرية الألمانية يأتي الفعل دائماً في الموضع الثاني!<br>
        مثال: <em>Ich lerne Deutsch.</em> (أنا أتعلم الألمانية)<br>
        <em>Heute lerne ich Deutsch.</em> (اليوم أتعلم الألمانية) ← الفعل بقي في الموضع الثاني.
      </div>

      <h2>أمثلة</h2>
      <div class="example-box">
        <div class="de">Ich bin Student.</div>
        <div class="ar">أنا طالب.</div>
      </div>
      <div class="example-box">
        <div class="de">Sie hat ein Auto.</div>
        <div class="ar">هي تملك سيارة.</div>
      </div>
      <div class="example-box">
        <div class="de">Wir lernen jeden Tag Deutsch.</div>
        <div class="ar">نحن نتعلم الألمانية كل يوم.</div>
      </div>
    `
  },
  {
    id: "a1-04",
    level: "a1",
    number: 4,
    title: "العائلة والأشخاص",
    titleDe: "Die Familie",
    description: "مفردات العائلة والصفات الأساسية",
    content: `
      <h2>أفراد العائلة</h2>
      <table class="vocab-table">
        <thead>
          <tr><th>الألمانية</th><th>العربية</th></tr>
        </thead>
        <tbody>
          <tr><td>die Familie</td><td>العائلة</td></tr>
          <tr><td>der Vater / der Papa</td><td>الأب</td></tr>
          <tr><td>die Mutter / die Mama</td><td>الأم</td></tr>
          <tr><td>die Eltern</td><td>الوالدان</td></tr>
          <tr><td>der Bruder</td><td>الأخ</td></tr>
          <tr><td>die Schwester</td><td>الأخت</td></tr>
          <tr><td>die Geschwister</td><td>الإخوة والأخوات</td></tr>
          <tr><td>der Sohn</td><td>الابن</td></tr>
          <tr><td>die Tochter</td><td>الابنة</td></tr>
          <tr><td>der Großvater / der Opa</td><td>الجد</td></tr>
          <tr><td>die Großmutter / die Oma</td><td>الجدة</td></tr>
          <tr><td>der Onkel</td><td>العم / الخال</td></tr>
          <tr><td>die Tante</td><td>العمة / الخالة</td></tr>
          <tr><td>der Freund / die Freundin</td><td>الصديق / الصديقة</td></tr>
        </tbody>
      </table>

      <div class="grammar-box">
        <strong>تذكير مهم:</strong> في الألمانية كل اسم له جنس (der مذكر، die مؤنث، das محايد). يجب حفظ الاسم مع أداته.
      </div>

      <h2>صفات مفيدة لوصف الأشخاص</h2>
      <table class="vocab-table">
        <thead>
          <tr><th>الصفة</th><th>المعنى</th></tr>
        </thead>
        <tbody>
          <tr><td>nett</td><td>لطيف</td></tr>
          <tr><td>freundlich</td><td>ودود</td></tr>
          <tr><td>intelligent</td><td>ذكي</td></tr>
          <tr><td>lustig</td><td>مضحك / مرح</td></tr>
          <tr><td>groß</td><td>طويل / كبير</td></tr>
          <tr><td>klein</td><td>قصير / صغير</td></tr>
          <tr><td>jung</td><td>شاب</td></tr>
          <tr><td>alt</td><td>كبير في السن</td></tr>
        </tbody>
      </table>

      <h2>جمل مفيدة</h2>
      <div class="example-box">
        <div class="de">Das ist meine Mutter. Sie heißt Fatima.</div>
        <div class="ar">هذه أمي. اسمها فاطمة.</div>
      </div>
      <div class="example-box">
        <div class="de">Ich habe zwei Brüder und eine Schwester.</div>
        <div class="ar">لدي أخوين وأخت واحدة.</div>
      </div>
      <div class="example-box">
        <div class="de">Mein Vater ist sehr nett.</div>
        <div class="ar">أبي لطيف جداً.</div>
      </div>
    `
  },
  {
    id: "a1-05",
    level: "a1",
    number: 5,
    title: "الطعام والشراب",
    titleDe: "Essen und Trinken",
    description: "مفردات الطعام وكيفية الطلب",
    content: `
      <h2>أطعمة أساسية</h2>
      <table class="vocab-table">
        <thead>
          <tr><th>الألمانية</th><th>العربية</th></tr>
        </thead>
        <tbody>
          <tr><td>das Brot</td><td>الخبز</td></tr>
          <tr><td>das Wasser</td><td>الماء</td></tr>
          <tr><td>der Kaffee</td><td>القهوة</td></tr>
          <tr><td>der Tee</td><td>الشاي</td></tr>
          <tr><td>die Milch</td><td>الحليب</td></tr>
          <tr><td>der Apfel</td><td>التفاحة</td></tr>
          <tr><td>die Banane</td><td>الموزة</td></tr>
          <tr><td>das Fleisch</td><td>اللحم</td></tr>
          <tr><td>der Fisch</td><td>السمك</td></tr>
          <tr><td>der Reis</td><td>الأرز</td></tr>
          <tr><td>die Suppe</td><td>الشوربة</td></tr>
          <tr><td>der Salat</td><td>السلطة</td></tr>
          <tr><td>der Kuchen</td><td>الكعكة</td></tr>
        </tbody>
      </table>

      <h2>جمل مفيدة في المطعم</h2>
      <div class="example-box">
        <div class="de">Ich hätte gern einen Kaffee, bitte.</div>
        <div class="ar">أريد قهوة من فضلك.</div>
      </div>
      <div class="example-box">
        <div class="de">Die Rechnung, bitte!</div>
        <div class="ar">الحساب من فضلك!</div>
      </div>
      <div class="example-box">
        <div class="de">Es schmeckt sehr gut!</div>
        <div class="ar">طعمه لذيذ جداً!</div>
      </div>
      <div class="example-box">
        <div class="de">Ich bin Vegetarier.</div>
        <div class="ar">أنا نباتي.</div>
      </div>

      <div class="grammar-box">
        <strong>تعبير مهذب للطلب:</strong><br>
        نستخدم غالباً: <strong>Ich hätte gern ...</strong> أو <strong>Ich möchte ...</strong><br>
        وهي ألطف من "Ich will" (أريد).
      </div>
    `
  },

  // ========== A2 (عينة) ==========
  {
    id: "a2-01",
    level: "a2",
    number: 1,
    title: "التسوق في المتجر",
    titleDe: "Einkaufen",
    description: "كيف تتسوق وتسأل عن الأسعار",
    content: `
      <h2>عبارات التسوق الأساسية</h2>
      <div class="example-box">
        <div class="de">Was kostet das?</div>
        <div class="ar">بكم هذا؟</div>
      </div>
      <div class="example-box">
        <div class="de">Das ist zu teuer.</div>
        <div class="ar">هذا غالي جداً.</div>
      </div>
      <div class="example-box">
        <div class="de">Haben Sie das in Größe 42?</div>
        <div class="ar">هل لديكم هذا بمقاس 42؟</div>
      </div>
      <div class="example-box">
        <div class="de">Ich nehme das.</div>
        <div class="ar">سآخذ هذا.</div>
      </div>
      <div class="example-box">
        <div class="de">Kann ich mit Karte zahlen?</div>
        <div class="ar">هل يمكنني الدفع بالبطاقة؟</div>
      </div>

      <h2>مفردات مفيدة</h2>
      <table class="vocab-table">
        <thead>
          <tr><th>الألمانية</th><th>العربية</th></tr>
        </thead>
        <tbody>
          <tr><td>der Supermarkt</td><td>السوبرماركت</td></tr>
          <tr><td>das Geschäft</td><td>المتجر</td></tr>
          <tr><td>der Preis</td><td>السعر</td></tr>
          <tr><td>billig</td><td>رخيص</td></tr>
          <tr><td>teuer</td><td>غالي</td></tr>
          <tr><td>die Größe</td><td>المقاس</td></tr>
          <tr><td>die Farbe</td><td>اللون</td></tr>
        </tbody>
      </table>
    `
  },

  // ========== B1 & B2 placeholders ==========
  {
    id: "b1-01",
    level: "b1",
    number: 1,
    title: "التعبير عن الرأي",
    titleDe: "Meine Meinung sagen",
    description: "كيف تعبر عن رأيك بأدب وقوة",
    content: `
      <h2>عبارات للتعبير عن الرأي</h2>
      <div class="example-box">
        <div class="de">Meiner Meinung nach ...</div>
        <div class="ar">في رأيي ...</div>
      </div>
      <div class="example-box">
        <div class="de">Ich finde, dass ...</div>
        <div class="ar">أعتقد أن ...</div>
      </div>
      <div class="example-box">
        <div class="de">Ich bin der Meinung, dass ...</div>
        <div class="ar">أنا على رأي أن ...</div>
      </div>
      <div class="example-box">
        <div class="de">Das sehe ich anders.</div>
        <div class="ar">أرى هذا بشكل مختلف.</div>
      </div>
      <p>هذا الدرس سيتم توسيعه قريباً بمحتوى أعمق وتمارين.</p>
    `
  },
  {
    id: "b2-01",
    level: "b2",
    number: 1,
    title: "كتابة مقال رأي (B2)",
    titleDe: "Eine Argumentation schreiben",
    description: "هيكل مقال الرأي المطلوب في اختبار جوته",
    content: `
      <h2>هيكل مقال الرأي في B2</h2>
      <ol>
        <li><strong>المقدمة (Einleitung):</strong> قدم الموضوع واذكر أهميته.</li>
        <li><strong>الحجج مع (Pro):</strong> اذكر 2–3 نقاط إيجابية مع أمثلة.</li>
        <li><strong>الحجج ضد (Contra):</strong> اذكر النقاط السلبية.</li>
        <li><strong>رأيك الشخصي:</strong> وضح موقفك بوضوح.</li>
        <li><strong>الخاتمة (Schluss):</strong> لخص وأعطِ نظرة مستقبلية أو توصية.</li>
      </ol>
      <div class="grammar-box">
        استخدم روابط مثل: <em>erstens, außerdem, dagegen, jedoch, deshalb, zusammenfassend</em>
      </div>
      <p>سيتم إضافة نماذج كاملة وتمارين كتابة قريباً.</p>
    `
  }
];

/* ==================== بيانات التمارين ==================== */
const QUIZZES = {
  vocab: [
    {
      question: "ماذا تعني كلمة «Guten Morgen»؟",
      options: ["مساء الخير", "صباح الخير", "تصبح على خير", "نهارك سعيد"],
      correct: 1
    },
    {
      question: "كيف تقول «اسمي عمر» بالألمانية؟",
      options: ["Ich bin Omar", "Ich heiße Omar", "Mein Omar ist", "Omar heißt ich"],
      correct: 1
    },
    {
      question: "ما معنى «Tschüss»؟",
      options: ["مرحبا", "من فضلك", "مع السلامة", "شكراً"],
      correct: 2
    },
    {
      question: "الرقم 25 بالألمانية هو:",
      options: ["fünfzwanzig", "zwanzigfünf", "fünfundzwanzig", "fünf und zwanzig"],
      correct: 2
    },
    {
      question: "«Ich bin Student» تعني:",
      options: ["أنا أدرس", "أنا طالب", "أنا معلم", "أنا مهندس"],
      correct: 1
    }
  ],
  grammar: [
    {
      question: "ما هو تصريف الفعل sein مع «ich»؟",
      options: ["ist", "bin", "bist", "sind"],
      correct: 1
    },
    {
      question: "في الجملة الألمانية، الفعل يأتي عادة في:",
      options: ["الموضع الأول", "الموضع الثاني", "نهاية الجملة دائماً", "أي مكان"],
      correct: 1
    },
    {
      question: "«du» تستخدم مع:",
      options: ["الغرباء فقط", "كبار السن", "الأصدقاء والعائلة", "في الاختبارات فقط"],
      correct: 2
    },
    {
      question: "تصريف haben مع «er» هو:",
      options: ["habe", "hast", "hat", "haben"],
      correct: 2
    },
    {
      question: "«Sie» (بحرف كبير) تعني:",
      options: ["هي", "هم", "حضرتك (رسمي)", "نحن"],
      correct: 2
    }
  ]
};

/* ==================== إدارة التقدم ==================== */
const STORAGE_KEY = "goethe_mit_omar_progress";

function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return getDefaultProgress();
    }
  }
  return getDefaultProgress();
}

function getDefaultProgress() {
  return {
    completedLessons: [],
    streak: 0,
    lastStudyDate: null,
    wordsLearned: 0,
    startDate: new Date().toISOString().slice(0, 10)
  };
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

let progress = loadProgress();

/* ==================== تحديث الواجهة ==================== */
function updateUI() {
  // التقدم الكلي
  const totalLessons = LESSONS.length;
  const done = progress.completedLessons.length;
  const percent = totalLessons ? Math.round((done / totalLessons) * 100) : 0;

  document.getElementById("overall-percent").textContent = percent + "%";
  document.getElementById("overall-bar").style.width = percent + "%";
  document.getElementById("lessons-done").textContent = done;
  document.getElementById("streak-count").textContent = progress.streak;
  document.getElementById("words-learned").textContent = progress.wordsLearned || done * 12;

  // الأيام المتبقية (تقريبي من 210 يوم)
  const start = new Date(progress.startDate);
  const now = new Date();
  const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const left = Math.max(0, 210 - diffDays);
  document.getElementById("days-left").textContent = left;

  // السلسلة
  document.getElementById("streak-display").textContent = `🔥 ${progress.streak} يوم`;

  // تقدم المستويات
  updateLevelProgress("a1");
  updateLevelProgress("a2");
  updateLevelProgress("b1");
  updateLevelProgress("b2");

  // درس اليوم
  renderTodayLesson();
}

function updateLevelProgress(level) {
  const levelLessons = LESSONS.filter(l => l.level === level);
  const done = levelLessons.filter(l => progress.completedLessons.includes(l.id)).length;
  const percent = levelLessons.length ? Math.round((done / levelLessons.length) * 100) : 0;
  document.getElementById(`${level}-percent`).textContent = percent + "%";
  document.getElementById(`${level}-bar`).style.width = percent + "%";
}

function renderTodayLesson() {
  const container = document.getElementById("today-lesson");
  const next = LESSONS.find(l => !progress.completedLessons.includes(l.id));
  if (next) {
    container.innerHTML = `
      <h3>${next.title}</h3>
      <p>${next.description}</p>
      <button class="btn btn-primary" onclick="openLesson('${next.id}')">ابدأ الدرس الآن</button>
    `;
  } else {
    container.innerHTML = `<h3>أحسنت! 🎉</h3><p>لقد أكملت جميع الدروس المتاحة حالياً.</p>`;
  }
}

/* ==================== التنقل ==================== */
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.section === sectionId);
  });

  if (sectionId === "lessons") {
    filterLessons(currentLevel);
  }
  window.scrollTo(0, 0);
}

/* ==================== الدروس ==================== */
let currentLevel = "a1";

function filterLessons(level) {
  currentLevel = level;
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.level === level);
  });

  const list = document.getElementById("lessons-list");
  const filtered = LESSONS.filter(l => l.level === level);

  if (filtered.length === 0) {
    list.innerHTML = `<div class="card"><p>قريباً سيتم إضافة دروس هذا المستوى...</p></div>`;
    return;
  }

  list.innerHTML = filtered.map(lesson => {
    const isDone = progress.completedLessons.includes(lesson.id);
    return `
      <div class="lesson-card ${isDone ? "completed" : ""}" onclick="openLesson('${lesson.id}')">
        <div class="lesson-num">${lesson.number}</div>
        <div class="lesson-info">
          <h3>${lesson.title}</h3>
          <p>${lesson.titleDe}</p>
        </div>
        <div class="lesson-status">${isDone ? "✅" : "▶️"}</div>
      </div>
    `;
  }).join("");
}

function openLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;

  document.getElementById("lv-badge").textContent = lesson.level.toUpperCase();
  document.getElementById("lv-badge").className = `lesson-level-badge ${lesson.level}`;
  document.getElementById("lv-title").textContent = lesson.title;
  document.getElementById("lesson-content").innerHTML = lesson.content;

  const btn = document.getElementById("mark-complete-btn");
  if (progress.completedLessons.includes(id)) {
    btn.textContent = "✓ مكتمل";
    btn.style.background = "#27ae60";
    btn.onclick = null;
  } else {
    btn.textContent = "✓ أكملت هذا الدرس";
    btn.style.background = "";
    btn.onclick = () => markLessonComplete(id);
  }

  showSection("lesson-view");
}

function markLessonComplete(id) {
  if (!id) {
    // من الزر داخل الدرس
    const title = document.getElementById("lv-title").textContent;
    const lesson = LESSONS.find(l => l.title === title);
    if (lesson) id = lesson.id;
  }

  if (id && !progress.completedLessons.includes(id)) {
    progress.completedLessons.push(id);
    updateStreak();
    progress.wordsLearned = (progress.wordsLearned || 0) + 15;
    saveProgress(progress);
    updateUI();

    const btn = document.getElementById("mark-complete-btn");
    btn.textContent = "✓ مكتمل - أحسنت!";
    btn.style.background = "#27ae60";
  }
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (progress.lastStudyDate === today) return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().slice(0, 10);

  if (progress.lastStudyDate === yesterdayStr) {
    progress.streak += 1;
  } else {
    progress.streak = 1;
  }
  progress.lastStudyDate = today;
}

/* ==================== التمارين ==================== */
let currentQuiz = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;

function startQuiz(type) {
  if (type === "listening" || type === "writing") {
    alert("هذا النوع من التمارين قيد التطوير وسيتوفر قريباً!");
    return;
  }

  currentQuiz = [...QUIZZES[type]];
  currentQuestionIndex = 0;
  document.getElementById("quiz-area").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = currentQuiz[currentQuestionIndex];
  document.getElementById("quiz-progress").textContent = `سؤال ${currentQuestionIndex + 1} من ${currentQuiz.length}`;
  document.getElementById("quiz-question").textContent = q.question;

  const optionsContainer = document.getElementById("quiz-options");
  optionsContainer.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-option" onclick="selectAnswer(${i})">${opt}</button>
  `).join("");

  document.getElementById("quiz-feedback").classList.add("hidden");
  document.getElementById("next-question-btn").classList.add("hidden");
  selectedAnswer = null;
}

function selectAnswer(index) {
  if (selectedAnswer !== null) return;
  selectedAnswer = index;
  const q = currentQuiz[currentQuestionIndex];
  const options = document.querySelectorAll(".quiz-option");

  options.forEach((btn, i) => {
    if (i === q.correct) btn.classList.add("correct");
    else if (i === index) btn.classList.add("wrong");
    btn.onclick = null;
  });

  const feedback = document.getElementById("quiz-feedback");
  feedback.classList.remove("hidden");
  if (index === q.correct) {
    feedback.textContent = "إجابة صحيحة! 🎉";
    feedback.className = "quiz-feedback correct";
  } else {
    feedback.textContent = `خطأ. الإجابة الصحيحة: ${q.options[q.correct]}`;
    feedback.className = "quiz-feedback wrong";
  }

  document.getElementById("next-question-btn").classList.remove("hidden");
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= currentQuiz.length) {
    alert("أحسنت! أنهيت التمرين.");
    closeQuiz();
    return;
  }
  showQuestion();
}

function closeQuiz() {
  document.getElementById("quiz-area").classList.add("hidden");
}

/* ==================== التهيئة ==================== */
document.addEventListener("DOMContentLoaded", () => {
  updateUI();
  filterLessons("a1");
});
