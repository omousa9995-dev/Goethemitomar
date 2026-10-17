/* Goethe Exam Practice – Original models inspired by official structure (2018–2025 style)
   ملاحظة مهمة: هذه نماذج تدريب أصلية وليست الامتحانات الرسمية.
   الامتحانات الرسمية محمية بحقوق النشر ولا يمكن نشرها.
*/
const EXAMS = [
/* ===================== A1 ===================== */
{
  id: "exam-a1-01", level: "a1", number: 1,
  title: "نموذج A1 – أسلوب 2018–2020",
  titleDe: "Goethe-Zertifikat A1 Modell (Stil 2018–2020)",
  type: "full",
  content: `
<div class="exam-notice" style="background:#fff3cd;padding:12px;border-radius:8px;margin-bottom:16px;border-right:4px solid #ffc107">
  <b>تنبيه:</b> هذا نموذج تدريب أصلي مستوحى من هيكل امتحان Goethe. ليس الامتحان الرسمي.
</div>
<div class="exam-section">
  <h2>📖 Lesen (25 دقيقة)</h2>
  <p><b>Aufgabe 1:</b> اقرأ الإعلان ثم اختر الإجابة الصحيحة.</p>
  <div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8">
    <b>Wohnung zu vermieten</b><br>
    Schöne 2-Zimmer-Wohnung in München, 55 m². Küche, Bad, Balkon.<br>
    Miete: 850 Euro + Nebenkosten. Ab 1. März frei.<br>
    Telefon: 089 / 123456
  </div>
  <ol>
    <li>Die Wohnung hat ... Zimmer. &nbsp; a) 1 &nbsp; b) 2 &nbsp; c) 3</li>
    <li>Die Miete kostet ... Euro. &nbsp; a) 550 &nbsp; b) 850 &nbsp; c) 1550</li>
    <li>Die Wohnung ist ab ... frei. &nbsp; a) 1. Mai &nbsp; b) 1. März &nbsp; c) 1. April</li>
  </ol>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben (20 دقيقة)</h2>
  <p>اكتب بريدًا إلكترونيًا قصيرًا (30–50 كلمة) لحجز غرفة في فندق: تاريخ الوصول والمغادرة، عدد الأشخاص، هل تريدون إفطارًا.</p>
  <div class="grammar-box">Sehr geehrte Damen und Herren, ... Ich möchte ein Zimmer reservieren. ... Mit freundlichen Grüßen</div>
</div>
<div class="exam-section">
  <h2>🗣️ Sprechen</h2>
  <p>Teil 1: قدم نفسك. Teil 2: اطلب معلومات عن دورة لغة. Teil 3: خطط عطلة نهاية أسبوع مع زميلك.</p>
</div>`
},
{
  id: "exam-a1-02", level: "a1", number: 2,
  title: "نموذج A1 – أسلوب 2021–2025",
  titleDe: "Goethe-Zertifikat A1 Modell (Stil 2021–2025)",
  type: "full",
  content: `
<div class="exam-notice" style="background:#fff3cd;padding:12px;border-radius:8px;margin-bottom:16px;border-right:4px solid #ffc107">
  <b>تنبيه:</b> نموذج تدريب أصلي – ليس الامتحان الرسمي.
</div>
<div class="exam-section">
  <h2>📖 Lesen</h2>
  <div class="example-box" dir="ltr" style="text-align:left">
    <b>Kursangebot – Volkshochschule</b><br>
    Deutsch A1: Montag und Mittwoch, 18:00–19:30<br>
    Beginn: 5. Oktober · Preis: 120 Euro<br>
    Anmeldung bis 25. September
  </div>
  <p>أسئلة: متى يبدأ الكورس؟ كم يكلف؟ حتى متى التسجيل؟</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben</h2>
  <p>اكتب رسالة قصيرة لصديق تعتذر فيها عن عدم الحضور إلى حفلة وتقترح موعدًا آخر.</p>
</div>`
},

/* ===================== A2 ===================== */
{
  id: "exam-a2-01", level: "a2", number: 1,
  title: "نموذج A2 – أسلوب 2018–2020",
  titleDe: "Goethe-Zertifikat A2 Modell (Stil 2018–2020)",
  type: "full",
  content: `
<div class="exam-notice" style="background:#fff3cd;padding:12px;border-radius:8px;margin-bottom:16px;border-right:4px solid #ffc107">
  <b>تنبيه:</b> نموذج تدريب أصلي مستوحى من هيكل الامتحان.
</div>
<div class="exam-section">
  <h2>📖 Lesen (30 دقيقة)</h2>
  <div class="example-box" dir="ltr" style="text-align:left;line-height:1.8">
    <b>Fahrrad zu verkaufen</b><br>
    Ich verkaufe mein altes Fahrrad. Es ist 5 Jahre alt, aber in gutem Zustand.
    Neue Reifen, Licht funktioniert. Preis: 80 Euro.
    Abholung in Berlin-Mitte möglich.
  </div>
  <ol>
    <li>Wie alt ist das Fahrrad?</li>
    <li>Was ist neu am Fahrrad?</li>
    <li>Wo kann man es abholen?</li>
  </ol>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben (30 دقيقة)</h2>
  <p>اكتب إيميلًا (40–60 كلمة) تخبر فيه صديقك بنجاحك في امتحان A2 وخططك القادمة وتدعوه للقاء.</p>
</div>
<div class="exam-section">
  <h2>🗣️ Sprechen</h2>
  <p>تحدث عن روتينك اليومي، صف صورة، وخطط رحلة نهاية أسبوع مع شريكك.</p>
</div>`
},
{
  id: "exam-a2-02", level: "a2", number: 2,
  title: "نموذج A2 – أسلوب 2021–2025",
  titleDe: "Goethe-Zertifikat A2 Modell (Stil 2021–2025)",
  type: "full",
  content: `
<div class="exam-notice" style="background:#fff3cd;padding:12px;border-radius:8px;margin-bottom:16px;border-right:4px solid #ffc107">
  <b>تنبيه:</b> نموذج تدريب أصلي.
</div>
<div class="exam-section">
  <h2>📖 Lesen</h2>
  <p>اقرأ نصًا عن شخص يتحدث عن وظيفته الجديدة وأجب عن أسئلة الفهم.</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben</h2>
  <p>اكتب ردًا على دعوة لحفلة عيد ميلاد (اقبل أو اعتذر واسأل عن التفاصيل).</p>
</div>`
},

/* ===================== B1 ===================== */
{
  id: "exam-b1-01", level: "b1", number: 1,
  title: "نموذج B1 – أسلوب 2018–2020",
  titleDe: "Goethe-Zertifikat B1 Modell (Stil 2018–2020)",
  type: "full",
  content: `
<div class="exam-notice" style="background:#fff3cd;padding:12px;border-radius:8px;margin-bottom:16px;border-right:4px solid #ffc107">
  <b>تنبيه:</b> نموذج تدريب أصلي مستوحى من هيكل امتحان B1.
</div>
<div class="exam-section">
  <h2>📖 Lesen (65 دقيقة)</h2>
  <p>Teil 1: 5 نصوص قصيرة – اختر العنوان المناسب.<br>
  Teil 2: مقال عن العمل عن بعد أو التعلم عبر الإنترنت – أسئلة اختيار من متعدد.<br>
  Teil 3: رتب فقرات أو أكمل الجمل.</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben (60 دقيقة)</h2>
  <p>Aufgabe 1: رسالة رسمية/شبه رسمية (شكوى عن فندق أو منتج) 80–120 كلمة.<br>
  Aufgabe 2: نص رأي شخصي باستخدام Einerseits… Andererseits…</p>
  <div class="grammar-box">Sehr geehrte Damen und Herren, hiermit möchte ich mich über ... beschweren. Mit freundlichen Grüßen</div>
</div>
<div class="exam-section">
  <h2>🗣️ Sprechen (15 دقيقة)</h2>
  <p>Teil 1: تقديم + موضوع شخصي.<br>
  Teil 2: عرض قصير 3–4 دقائق.<br>
  Teil 3: مناقشة والوصول إلى اتفاق.</p>
</div>`
},
{
  id: "exam-b1-02", level: "b1", number: 2,
  title: "نموذج B1 – أسلوب 2021–2025",
  titleDe: "Goethe-Zertifikat B1 Modell (Stil 2021–2025)",
  type: "full",
  content: `
<div class="exam-notice" style="background:#fff3cd;padding:12px;border-radius:8px;margin-bottom:16px;border-right:4px solid #ffc107">
  <b>تنبيه:</b> نموذج تدريب أصلي.
</div>
<div class="exam-section">
  <h2>📖 Lesen</h2>
  <p>اقرأ نصًا عن أهمية الرياضة في الحياة اليومية وأجب عن أسئلة الفهم التفصيلي والاستنتاجي.</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben</h2>
  <p>اكتب رسالة إلى صديق عن تجربتك في دورة ألمانية وما هي خططك القادمة.</p>
</div>`
},
{
  id: "exam-b1-03", level: "b1", number: 3,
  title: "نموذج B1 – مواضيع حديثة 2023–2025",
  titleDe: "Goethe-Zertifikat B1 – Aktuelle Themen 2023–2025",
  type: "full",
  content: `
<div class="exam-notice" style="background:#fff3cd;padding:12px;border-radius:8px;margin-bottom:16px;border-right:4px solid #ffc107">
  <b>تنبيه:</b> نموذج تدريب بموضوعات شائعة في السنوات الأخيرة.
</div>
<div class="exam-section">
  <h2>📖 Lesen</h2>
  <p>نصوص عن: الرقمنة في العمل، التسوق الإلكتروني، الحياة في المدينة مقابل الريف.</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben</h2>
  <p>اكتب رأيًا حول موضوع: «Sollte man in der Freizeit mehr Sport treiben?» مستخدمًا هيكل حجاجي بسيط.</p>
</div>`
},

/* ===================== B2 ===================== */
{
  id: "exam-b2-01", level: "b2", number: 1,
  title: "نموذج B2 – أسلوب 2018–2020",
  titleDe: "Goethe-Zertifikat B2 Modell (Stil 2018–2020)",
  type: "full",
  content: `
<div class="exam-notice" style="background:#fff3cd;padding:12px;border-radius:8px;margin-bottom:16px;border-right:4px solid #ffc107">
  <b>تنبيه:</b> نموذج تدريب أصلي مستوحى من هيكل امتحان B2.
</div>
<div class="exam-section">
  <h2>📖 Lesen (65 دقيقة)</h2>
  <p>Teil 1: نص طويل عن موضوع مجتمعي (رقمنة / مناخ).<br>
  Teil 2: Cloze test متقدم.<br>
  Teil 3–4: ترتيب فقرات + مقارنة نصين.</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben (75 دقيقة)</h2>
  <p>Aufgabe 1 (180–200 كلمة): نص حجاجي عن Homeoffice أو وسائل التواصل.<br>
  Aufgabe 2: رسالة رسمية.</p>
  <div class="grammar-box">
    Einleitung → Einerseits... → Andererseits... → Zusammenfassend lässt sich sagen, dass...
  </div>
</div>
<div class="exam-section">
  <h2>🗣️ Sprechen (15 دقيقة)</h2>
  <p>عرض منظم 4–5 دقائق + مناقشة جدلية مع الوصول إلى حل وسط.</p>
</div>`
},
{
  id: "exam-b2-02", level: "b2", number: 2,
  title: "نموذج B2 – أسلوب 2021–2023",
  titleDe: "Goethe-Zertifikat B2 Modell (Stil 2021–2023)",
  type: "full",
  content: `
<div class="exam-notice" style="background:#fff3cd;padding:12px;border-radius:8px;margin-bottom:16px;border-right:4px solid #ffc107">
  <b>تنبيه:</b> نموذج تدريب أصلي.
</div>
<div class="exam-section">
  <h2>📖 Lesen</h2>
  <p>اقرأ مقالاً عن «مستقبل العمل في عصر الذكاء الاصطناعي» وأجب عن أسئلة الفهم العميق.</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben</h2>
  <p>اكتب مقالاً عن: «Ist lebenslanges Lernen heute notwendiger denn je?»<br>
  استخدم: Es lässt sich nicht leugnen, dass... · Ein weiterer wichtiger Aspekt ist... · Abschließend möchte ich betonen, dass...</p>
</div>`
},
{
  id: "exam-b2-03", level: "b2", number: 3,
  title: "نموذج B2 – مواضيع 2024–2025",
  titleDe: "Goethe-Zertifikat B2 – Aktuelle Themen 2024–2025",
  type: "full",
  content: `
<div class="exam-notice" style="background:#fff3cd;padding:12px;border-radius:8px;margin-bottom:16px;border-right:4px solid #ffc107">
  <b>تنبيه:</b> نموذج تدريب بموضوعات معاصرة (2024–2025).
</div>
<div class="exam-section">
  <h2>📖 Lesen</h2>
  <p>نصوص عن: التعددية الثقافية، حماية البيئة والمسؤولية الفردية، دور الإعلام في الديمقراطية، التعلم مدى الحياة.</p>
</div>
<div class="exam-section">
  <h2>✍️ Schreiben</h2>
  <p>موضوعات مقترحة للكتابة الحجاجية:<br>
  • Homeoffice vs. Präsenzarbeit<br>
  • Soziale Medien: Chancen und Risiken<br>
  • Klimawandel und individuelle Verantwortung</p>
</div>
<div class="exam-section">
  <h2>🗣️ Sprechen</h2>
  <p>عرض + مناقشة حول أحد الموضوعات أعلاه مع استخدام عبارات ربط متقدمة.</p>
</div>`
},

/* ===== روابط رسمية ===== */
{
  id: "exam-official-links", level: "b2", number: 4,
  title: "روابط النماذج الرسمية من معهد غوته",
  titleDe: "Offizielle Übungsmaterialien – Goethe-Institut",
  type: "links",
  content: `
<div class="exam-section">
  <h2>🔗 المواد الرسمية المجانية من Goethe-Institut</h2>
  <p>الامتحانات الحقيقية محمية بحقوق النشر. استخدم الروابط الرسمية التالية للتدريب:</p>
  <ul style="line-height:2">
    <li><b>A1:</b> ابحث عن «Goethe-Zertifikat A1 Übungsmaterial» على goethe.de</li>
    <li><b>A2:</b> <a href="https://www.goethe.de/en/spr/prf/ueb/pa2.html" target="_blank" style="color:#0a7a3e">Exam training A2 – Goethe-Institut</a></li>
    <li><b>B1 / B2:</b> صفحة المواد الرسمية: <a href="https://www.goethe.de/ins/de/en/prf/exc.html" target="_blank" style="color:#0a7a3e">Practice materials A1–C2</a></li>
    <li>ابحث أيضًا عن «Modellsatz» أو «Übungstest» على موقع goethe.de لكل مستوى.</li>
  </ul>
  <div class="grammar-box">
    <b>نصيحة:</b> النماذج الرسمية (Modellsatz) على موقع غوته هي الأقرب للامتحان الحقيقي. استخدمها مع المؤقت لمحاكاة الظروف الفعلية.
  </div>
</div>`
}
];
window.EXAMS = EXAMS;
