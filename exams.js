/* Goethe Exam Practice Models A1 → B2 – Original practice material inspired by official structure */
const EXAMS = [
/* ===================== A1 ===================== */
{
  id: "exam-a1-01",
  level: "a1",
  number: 1,
  title: "نموذج امتحان Goethe A1 – الجزء 1",
  titleDe: "Goethe-Zertifikat A1 Modelltest 1",
  type: "full",
  content: `
<div class="exam-section">
  <h2>📖 Lesen (القراءة) – 25 دقيقة</h2>
  <p><b>Aufgabe 1:</b> اقرأ النص ثم اختر الإجابة الصحيحة.</p>
  <div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8">
    <b>Wohnung zu vermieten</b><br>
    Schöne 2-Zimmer-Wohnung in München, 55 m². Küche, Bad, Balkon. 
    Miete: 850 Euro + Nebenkosten. Ab 1. März frei. 
    Telefon: 089 / 123456
  </div>
  <ol>
    <li>Die Wohnung hat ... Zimmer. &nbsp; a) 1 &nbsp; b) 2 &nbsp; c) 3</li>
    <li>Die Miete kostet ... Euro. &nbsp; a) 550 &nbsp; b) 850 &nbsp; c) 1550</li>
    <li>Die Wohnung ist ab ... frei. &nbsp; a) 1. Mai &nbsp; b) 1. März &nbsp; c) 1. April</li>
  </ol>
</div>

<div class="exam-section">
  <h2>✍️ Schreiben (الكتابة) – 20 دقيقة</h2>
  <p><b>Aufgabe:</b> اكتب بريدًا إلكترونيًا قصيرًا (30–50 كلمة).</p>
  <p>أنت تريد حجز غرفة في فندق. اكتب:</p>
  <ul>
    <li>متى تريد الوصول والمغادرة</li>
    <li>كم شخصًا أنتم</li>
    <li>هل تريدون وجبة إفطار</li>
  </ul>
  <div class="grammar-box">
    <b>عبارات مفيدة:</b><br>
    Sehr geehrte Damen und Herren, ...<br>
    Ich möchte ein Zimmer reservieren. ...<br>
    Mit freundlichen Grüßen
  </div>
</div>

<div class="exam-section">
  <h2>🗣️ Sprechen (المحادثة)</h2>
  <p><b>Teil 1:</b> تقديم نفسك (اسمك، من أين أنت، مهنتك، هواياتك).</p>
  <p><b>Teil 2:</b> اطلب معلومات عن دورة لغة أو عن مواعيد المكتبة.</p>
  <p><b>Teil 3:</b> خطط مع زميلك لقضاء عطلة نهاية الأسبوع.</p>
</div>
`
},
{
  id: "exam-a1-02",
  level: "a1",
  number: 2,
  title: "نموذج امتحان Goethe A1 – الجزء 2",
  titleDe: "Goethe-Zertifikat A1 Modelltest 2",
  type: "full",
  content: `
<div class="exam-section">
  <h2>📖 Lesen</h2>
  <div class="example-box" dir="ltr" style="text-align:left">
    <b>Kursangebot – Volkshochschule</b><br>
    Deutsch A1: Montag und Mittwoch, 18:00–19:30<br>
    Beginn: 5. Oktober · Preis: 120 Euro<br>
    Anmeldung bis 25. September
  </div>
  <p>أسئلة: متى يبدأ الكورس؟ كم يكلف؟ حتى متى يمكن التسجيل؟</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben</h2>
  <p>اكتب رسالة قصيرة لصديقك تخبره أنك لا تستطيع الحضور إلى الحفلة، واذكر السبب واقترح موعدًا آخر.</p>
</div>
`
},

/* ===================== A2 ===================== */
{
  id: "exam-a2-01",
  level: "a2",
  number: 1,
  title: "نموذج امتحان Goethe A2 – الجزء 1",
  titleDe: "Goethe-Zertifikat A2 Modelltest 1",
  type: "full",
  content: `
<div class="exam-section">
  <h2>📖 Lesen (30 دقيقة)</h2>
  <p><b>Aufgabe 1:</b> اقرأ الإعلان ثم أجب.</p>
  <div class="example-box" dir="ltr" style="text-align:left;line-height:1.8">
    <b>Fahrrad zu verkaufen</b><br>
    Ich verkaufe mein altes Fahrrad. Es ist 5 Jahre alt, aber in gutem Zustand. 
    Neue Reifen, Licht funktioniert. Preis: 80 Euro. 
    Abholung in Berlin-Mitte möglich. Telefon: 0176 / 9876543
  </div>
  <ol>
    <li>Wie alt ist das Fahrrad?</li>
    <li>Was ist neu am Fahrrad?</li>
    <li>Wo kann man das Fahrrad abholen?</li>
  </ol>
</div>

<div class="exam-section">
  <h2>✍️ Schreiben (30 دقيقة)</h2>
  <p><b>Aufgabe:</b> اكتب إيميلًا (40–60 كلمة) إلى صديقك الألماني.</p>
  <ul>
    <li>أخبرته أنك نجحت في امتحان A2</li>
    <li>ماذا تخطط أن تفعل بعد ذلك</li>
    <li>ادعُه لزيارتك أو اقترح لقاءً</li>
  </ul>
  <div class="grammar-box">
    Hallo...,<br>
    Ich habe die A2-Prüfung bestanden! ...<br>
    Hast du Lust, ...?<br>
    Viele Grüße
  </div>
</div>

<div class="exam-section">
  <h2>🗣️ Sprechen</h2>
  <p><b>Teil 1:</b> تحدث عن روتينك اليومي وعن هواياتك.</p>
  <p><b>Teil 2:</b> صف صورة (مثلاً أشخاص في حديقة أو في مطعم).</p>
  <p><b>Teil 3:</b> خطط مع شريكك لرحلة نهاية أسبوع (مكان، مواصلات، برنامج).</p>
</div>
`
},
{
  id: "exam-a2-02",
  level: "a2",
  number: 2,
  title: "نموذج امتحان Goethe A2 – الجزء 2",
  titleDe: "Goethe-Zertifikat A2 Modelltest 2",
  type: "full",
  content: `
<div class="exam-section">
  <h2>📖 Lesen</h2>
  <p>اقرأ نصًا عن شخص يتحدث عن وظيفته الجديدة وأجب عن أسئلة الفهم (أين يعمل، هل يحب العمل، ماذا يفعل في وقت الفراغ).</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben</h2>
  <p>اكتب ردًا على دعوة لحضور حفلة عيد ميلاد. اعتذر أو اقبل، واسأل عن التفاصيل (الوقت، المكان، ماذا تحضر).</p>
</div>
`
},

/* ===================== B1 ===================== */
{
  id: "exam-b1-01",
  level: "b1",
  number: 1,
  title: "نموذج امتحان Goethe B1 – الجزء 1",
  titleDe: "Goethe-Zertifikat B1 Modelltest 1",
  type: "full",
  content: `
<div class="exam-section">
  <h2>📖 Lesen (65 دقيقة)</h2>
  <p><b>Teil 1:</b> اقرأ 5 نصوص قصيرة (إعلانات، رسائل، مقالات قصيرة) واختر العنوان أو الجملة المناسبة لكل نص.</p>
  <p><b>Teil 2:</b> اقرأ مقالاً عن موضوع مثل "العمل عن بعد" أو "التعلم عبر الإنترنت" وأجب عن 6 أسئلة اختيار من متعدد.</p>
  <p><b>Teil 3:</b> رتب فقرات نص أو أكمل الجمل بناءً على السياق.</p>
</div>

<div class="exam-section">
  <h2>✍️ Schreiben (60 دقيقة)</h2>
  <p><b>Aufgabe 1:</b> اكتب رسالة رسمية أو شبه رسمية (80–120 كلمة).</p>
  <p>مثال: أنت غير راضٍ عن خدمة في فندق أو عن منتج اشتريته. اكتب شكوى واطلب حلاً.</p>
  <div class="grammar-box">
    Sehr geehrte Damen und Herren,<br>
    hiermit möchte ich mich über ... beschweren.<br>
    Ich bitte Sie, ...<br>
    Mit freundlichen Grüßen
  </div>
  <p><b>Aufgabe 2:</b> اكتب نصًا عن رأي شخصي (مثلاً: هل العمل من المنزل أفضل؟) مستخدمًا Einerseits... Andererseits...</p>
</div>

<div class="exam-section">
  <h2>🗣️ Sprechen (15 دقيقة)</h2>
  <p><b>Teil 1:</b> تقديم نفسك + الحديث عن موضوع شخصي (العمل، الدراسة، الهوايات).</p>
  <p><b>Teil 2:</b> قدم عرضًا قصيرًا (3–4 دقائق) عن موضوع معطى (مثلاً: مزايا تعلم لغة أجنبية).</p>
  <p><b>Teil 3:</b> ناقش مع شريكك موضوعًا واوصلا إلى اتفاق (مثلاً: كيف نقضي عطلة نهاية الأسبوع معًا).</p>
</div>
`
},
{
  id: "exam-b1-02",
  level: "b1",
  number: 2,
  title: "نموذج امتحان Goethe B1 – الجزء 2",
  titleDe: "Goethe-Zertifikat B1 Modelltest 2",
  type: "full",
  content: `
<div class="exam-section">
  <h2>📖 Lesen</h2>
  <p>اقرأ نصًا عن "أهمية الرياضة في الحياة اليومية" وأجب عن أسئلة الفهم التفصيلية والاستنتاجية.</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben</h2>
  <p>اكتب رسالة إلى صديق تخبره عن تجربتك في دورة ألمانية، وما أعجبك وما كان صعبًا، وما هي خططك القادمة.</p>
</div>
`
},

/* ===================== B2 ===================== */
{
  id: "exam-b2-01",
  level: "b2",
  number: 1,
  title: "نموذج امتحان Goethe B2 – الجزء 1",
  titleDe: "Goethe-Zertifikat B2 Modelltest 1",
  type: "full",
  content: `
<div class="exam-section">
  <h2>📖 Lesen (65 دقيقة)</h2>
  <p><b>Teil 1:</b> اقرأ نصًا طويلاً نسبيًا عن موضوع مجتمعي (مثل الرقمنة أو تغير المناخ) وأجب عن أسئلة الفهم الدقيق.</p>
  <p><b>Teil 2:</b> أكمل نصًا بكلمات أو عبارات مناسبة (Cloze test متقدم).</p>
  <p><b>Teil 3:</b> رتب فقرات أو اختر الجملة التي تلخص الفقرة بشكل أفضل.</p>
  <p><b>Teil 4:</b> اقرأ نصين قصيرين وقارن بينهما أو أجب عن أسئلة الاستنتاج.</p>
</div>

<div class="exam-section">
  <h2>✍️ Schreiben (75 دقيقة)</h2>
  <p><b>Aufgabe 1 (حوالي 180–200 كلمة):</b> اكتب نصًا حجاجيًا عن موضوع مثل:</p>
  <ul>
    <li>«Homeoffice: Vorteile und Nachteile»</li>
    <li>«Sollte man soziale Medien im Alltag einschränken?»</li>
  </ul>
  <div class="grammar-box">
    <b>هيكل مقترح:</b><br>
    Einleitung → Einerseits... → Andererseits... → Zusammenfassend lässt sich sagen, dass... → eigene Meinung
  </div>
  <p><b>Aufgabe 2:</b> اكتب رسالة رسمية (طلب، شكوى، أو طلب معلومات) بأسلوب رسمي مناسب.</p>
</div>

<div class="exam-section">
  <h2>🗣️ Sprechen (15 دقيقة)</h2>
  <p><b>Teil 1:</b> تحدث عن موضوع شخصي أو مهني (مثلاً: كيف أثر تعلم الألمانية على حياتك).</p>
  <p><b>Teil 2:</b> قدم عرضًا منظمًا (4–5 دقائق) عن موضوع معطى مع استخدام عبارات الربط المتقدمة.</p>
  <p><b>Teil 3:</b> ناقش مع الشريك موضوعًا جدليًا وحاولا الوصول إلى حل وسط.</p>
</div>
`
},
{
  id: "exam-b2-02",
  level: "b2",
  number: 2,
  title: "نموذج امتحان Goethe B2 – الجزء 2",
  titleDe: "Goethe-Zertifikat B2 Modelltest 2",
  type: "full",
  content: `
<div class="exam-section">
  <h2>📖 Lesen</h2>
  <p>اقرأ مقالاً عن "مستقبل العمل في عصر الذكاء الاصطناعي" وأجب عن أسئلة الفهم العميق والمفردات في السياق.</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben</h2>
  <p>اكتب مقالاً قصيرًا يناقش موضوع: «Ist lebenslanges Lernen heute notwendiger denn je?». استخدم عبارات مثل:</p>
  <ul>
    <li>Es lässt sich nicht leugnen, dass...</li>
    <li>Ein weiterer wichtiger Aspekt ist...</li>
    <li>Abschließend möchte ich betonen, dass...</li>
  </ul>
</div>
`
}
];

window.EXAMS = EXAMS;
