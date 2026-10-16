/* High-quality graded reading stories for Goethe B2 preparation – 5 per level */
const STORIES = [
/* ============================== A1 ============================== */
{
  id:"s-a1-01", level:"a1", number:1,
  title:"Mein Name ist Omar", titleAr:"اسمي عمر",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.12rem">
Hallo! Mein Name ist Omar. Ich komme aus Jordanien und wohne in Amman. Ich bin 28 Jahre alt. Ich bin Ingenieur. Mein Hobby ist Fußball. Am Wochenende spiele ich oft mit meinen Freunden. Ich lerne Deutsch, weil ich später in Deutschland arbeiten möchte. Freut mich, Sie kennenzulernen!
</div>
<h2>المفردات الأساسية (مهمة جدًا)</h2>
<table class="vocab-table">
<tr><th>ألماني</th><th>عربي</th><th>مثال</th></tr>
<tr><td>kommen aus</td><td>يأتي من</td><td>Ich komme aus Jordanien.</td></tr>
<tr><td>wohnen in</td><td>يسكن في</td><td>Ich wohne in Amman.</td></tr>
<tr><td>Jahre alt sein</td><td>عمره ... سنة</td><td>Ich bin 28 Jahre alt.</td></tr>
<tr><td>Hobby</td><td>هواية</td><td>Mein Hobby ist Fußball.</td></tr>
<tr><td>möchten</td><td>يرغب / يريد (مهذب)</td><td>Ich möchte arbeiten.</td></tr>
<tr><td>kennenlernen</td><td>يتعرف على</td><td>Freut mich, Sie kennenzulernen!</td></tr>
</table>
<div class="grammar-box"><b>ملاحظة:</b> "möchten" أكثر تهذيبًا من "wollen". استخدمها في المواقف الرسمية.</div>
<h2>أسئلة فهم</h2>
<ol>
<li>Woher kommt Omar?</li>
<li>Was ist sein Beruf?</li>
<li>Warum lernt er Deutsch?</li>
</ol>`
},
{
  id:"s-a1-02", level:"a1", number:2,
  title:"Mein Tagesablauf", titleAr:"روتين يومي",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.12rem">
Ich stehe jeden Tag um sieben Uhr auf. Dann frühstücke ich. Ich trinke Tee und esse Brot mit Käse. Um acht Uhr gehe ich zur Arbeit. Ich arbeite in einem Büro von acht bis fünf. Nach der Arbeit komme ich nach Hause. Abends koche ich oder bestelle etwas. Manchmal schaue ich fern oder lese ein Buch. Um elf Uhr gehe ich schlafen.
</div>
<h2>المفردات الأساسية</h2>
<table class="vocab-table">
<tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>aufstehen</td><td>يستيقظ</td></tr>
<tr><td>frühstücken</td><td>يتناول الإفطار</td></tr>
<tr><td>zur Arbeit gehen</td><td>يذهب إلى العمل</td></tr>
<tr><td>von ... bis ...</td><td>من ... إلى ...</td></tr>
<tr><td>nach Hause kommen</td><td>يعود إلى المنزل</td></tr>
<tr><td>kochen</td><td>يطبخ</td></tr>
<tr><td>bestellen</td><td>يطلب (طعام)</td></tr>
<tr><td>fernsehen</td><td>يشاهد التلفاز</td></tr>
<tr><td>schlafen gehen</td><td>يذهب للنوم</td></tr>
</table>
<div class="grammar-box"><b>قاعدة مهمة:</b> الفعل يأتي في الموضع الثاني في الجملة العادية. مثال: Ich stehe um sieben Uhr auf.</div>`
},
{
  id:"s-a1-03", level:"a1", number:3,
  title:"Im Café", titleAr:"في المقهى",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.12rem">
Omar geht in ein Café in der Stadtmitte. Er setzt sich an einen Tisch am Fenster. Der Kellner kommt und fragt: „Was möchten Sie?“ Omar antwortet: „Ich hätte gerne einen Kaffee mit Milch und ein Stück Apfelkuchen, bitte.“ Der Kellner bringt die Bestellung. Der Kaffee kostet 3,50 Euro. Omar bezahlt bar und sagt: „Stimmt so. Danke schön!“
</div>
<h2>عبارات ذهبية للمقهى والمطعم</h2>
<table class="vocab-table">
<tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>Ich hätte gerne...</td><td>أريد ... من فضلك (مهذب جدًا)</td></tr>
<tr><td>Was möchten Sie?</td><td>ماذا تريدون؟</td></tr>
<tr><td>mit Milch / ohne Milch</td><td>مع حليب / بدون حليب</td></tr>
<tr><td>ein Stück Kuchen</td><td>قطعة كعكة</td></tr>
<tr><td>bar bezahlen</td><td>يدفع نقدًا</td></tr>
<tr><td>Stimmt so!</td><td>خلّي الباقي (بقشيش)</td></tr>
<tr><td>Danke schön!</td><td>شكرًا جزيلاً</td></tr>
</table>`
},
{
  id:"s-a1-04", level:"a1", number:4,
  title:"Meine Familie", titleAr:"عائلتي",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.12rem">
Das ist meine Familie. Mein Vater heißt Ahmed. Er ist 55 Jahre alt und arbeitet als Arzt in einem Krankenhaus. Meine Mutter heißt Sara. Sie ist Lehrerin an einer Schule. Ich habe einen älteren Bruder und eine jüngere Schwester. Mein Bruder studiert Informatik. Meine Schwester geht noch zur Schule. Am Wochenende essen wir oft zusammen.
</div>
<h2>مفردات العائلة + الصفات</h2>
<table class="vocab-table">
<tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>der Vater / die Mutter</td><td>الأب / الأم</td></tr>
<tr><td>der Bruder / die Schwester</td><td>الأخ / الأخت</td></tr>
<tr><td>älter / jünger</td><td>أكبر / أصغر</td></tr>
<tr><td>als Arzt arbeiten</td><td>يعمل كطبيب</td></tr>
<tr><td>studieren</td><td>يدرس (في الجامعة)</td></tr>
<tr><td>zur Schule gehen</td><td>يذهب إلى المدرسة</td></tr>
</table>
<div class="grammar-box"><b>Possessiv:</b> mein Vater · meine Mutter · mein Bruder · meine Schwester</div>`
},
{
  id:"s-a1-05", level:"a1", number:5,
  title:"Beim Arzt", titleAr:"عند الطبيب",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.12rem">
Seit zwei Tagen fühle ich mich nicht gut. Ich habe starke Kopfschmerzen und leichtes Fieber. Deshalb gehe ich zum Arzt. Im Wartezimmer warte ich zwanzig Minuten. Der Arzt fragt mich: „Was fehlt Ihnen? Seit wann haben Sie die Beschwerden?“ Ich erkläre alles. Der Arzt untersucht mich und verschreibt mir Medizin. Er sagt: „Ruhen Sie sich aus und trinken Sie viel Wasser.“
</div>
<h2>مفردات الصحة المهمة</h2>
<table class="vocab-table">
<tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>sich fühlen</td><td>يشعر</td></tr>
<tr><td>Kopfschmerzen haben</td><td>لديه صداع</td></tr>
<tr><td>Fieber haben</td><td>لديه حرارة</td></tr>
<tr><td>Was fehlt Ihnen?</td><td>ما الذي يزعجك؟ (رسمي)</td></tr>
<tr><td>die Beschwerden</td><td>الأعراض / الشكاوى</td></tr>
<tr><td>untersuchen</td><td>يفحص</td></tr>
<tr><td>Medizin verschreiben</td><td>يصف دواء</td></tr>
<tr><td>sich ausruhen</td><td>يستريح</td></tr>
</table>`
},

/* ============================== A2 ============================== */
{
  id:"s-a2-01", level:"a2", number:1,
  title:"Mein letzter Urlaub in Istanbul", titleAr:"آخر إجازة لي في إسطنبول",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Letztes Jahr bin ich für eine Woche nach Istanbul geflogen. Ich habe in einem kleinen Hotel in der Altstadt gewohnt. Jeden Tag habe ich etwas Neues entdeckt. Ich habe die Hagia Sophia und den Topkapı-Palast besucht. Abends habe ich in verschiedenen Restaurants gegessen und türkischen Tee getrunken. Am letzten Tag habe ich Souvenirs für meine Familie gekauft. Es war ein wunderbarer Urlaub. Ich möchte unbedingt wieder hinfahren.
</div>
<div class="grammar-box"><b>Perfekt مهم جدًا:</b><br>
• bin geflogen (sein + حركة)<br>
• habe gewohnt / besucht / gegessen / getrunken / gekauft (haben)</div>
<h2>مفردات السفر</h2>
<table class="vocab-table">
<tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>fliegen nach</td><td>يسافر بالطائرة إلى</td></tr>
<tr><td>in der Altstadt</td><td>في البلدة القديمة</td></tr>
<tr><td>entdecken</td><td>يكتشف</td></tr>
<tr><td>unbedingt</td><td>حتمًا / بكل تأكيد</td></tr>
<tr><td>wieder hinfahren</td><td>يعود إلى هناك</td></tr>
</table>`
},
{
  id:"s-a2-02", level:"a2", number:2,
  title:"Warum ich Deutsch lerne", titleAr:"لماذا أتعلم الألمانية",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Viele Leute fragen mich, warum ich Deutsch lerne. Ich antworte immer: Ich möchte in Deutschland studieren und später dort arbeiten. Ich glaube, dass die deutschen Universitäten zu den besten der Welt gehören. Außerdem finde ich die deutsche Kultur sehr interessant. Deshalb höre ich jeden Tag deutsche Podcasts und schaue deutsche Serien. Manchmal ist es schwer, aber ich gebe nicht auf.
</div>
<div class="grammar-box"><b>جمل ثانوية أساسية:</b><br>
• weil / deshalb (السبب)<br>
• dass (بعد glauben / finden / sagen...)<br>
الفعل في الجملة الثانوية يأتي في النهاية.</div>`
},
{
  id:"s-a2-03", level:"a2", number:3,
  title:"Ein Wochenende in Berlin", titleAr:"نهاية أسبوع في برلين",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Am Freitagabend bin ich mit dem Zug nach Berlin gefahren. Der Zug hatte leider zwanzig Minuten Verspätung. Am Samstag habe ich das Brandenburger Tor und die Museumsinsel besucht. Danach bin ich durch das Regierungsviertel gelaufen. Am Abend habe ich mit Freunden in einem Restaurant Currywurst und Pommes gegessen. Am Sonntag bin ich zurück nach Hause gefahren. Es war anstrengend, aber sehr schön.
</div>
<h2>مفردات مهمة</h2>
<table class="vocab-table">
<tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>die Verspätung</td><td>التأخير</td></tr>
<tr><td>das Brandenburger Tor</td><td>بوابة براندنبورغ</td></tr>
<tr><td>die Museumsinsel</td><td>جزيرة المتاحف</td></tr>
<tr><td>das Regierungsviertel</td><td>الحي الحكومي</td></tr>
<tr><td>anstrengend</td><td>مرهق</td></tr>
</table>`
},
{
  id:"s-a2-04", level:"a2", number:4,
  title:"Mein neuer Job", titleAr:"وظيفتي الجديدة",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Seit sechs Wochen habe ich einen neuen Job. Ich arbeite als Projektmanager in einer internationalen Firma in Amman. Meine Kollegen kommen aus verschiedenen Ländern und sind sehr hilfsbereit. Die Arbeit ist interessant, aber manchmal auch stressig. Ich muss oft Überstunden machen. Trotzdem bin ich froh, weil ich viel lerne und gut verdiene.
</div>
<h2>مفردات العمل</h2>
<table class="vocab-table">
<tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>der Job / die Stelle</td><td>الوظيفة</td></tr>
<tr><td>der Projektmanager</td><td>مدير مشاريع</td></tr>
<tr><td>hilfsbereit</td><td>متعاون / مساعد</td></tr>
<tr><td>stressig</td><td>مرهق / مليء بالضغط</td></tr>
<tr><td>Überstunden machen</td><td>يعمل ساعات إضافية</td></tr>
<tr><td>verdienen</td><td>يكسب (مال)</td></tr>
</table>`
},
{
  id:"s-a2-05", level:"a2", number:5,
  title:"Eine E-Mail an einen Freund", titleAr:"رسالة إلكترونية لصديق",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Hallo Karim,<br><br>
wie geht es dir? Mir geht es gut. Letzte Woche habe ich meine Deutschprüfung gemacht. Sie war nicht so schwer, wie ich gedacht habe. Nächstes Wochenende habe ich frei. Hast du Lust, etwas zusammen zu unternehmen? Wir könnten ins Kino gehen oder einfach einen Kaffee trinken. Schreib mir bitte bald zurück.<br><br>
Viele Grüße<br>
Omar
</div>
<div class="grammar-box"><b>عبارات الرسائل غير الرسمية:</b><br>
Hallo... · Wie geht es dir? · Mir geht es gut. · Hast du Lust...? · Schreib mir bitte bald. · Viele Grüße</div>`
},

/* ============================== B1 ============================== */
{
  id:"s-b1-01", level:"b1", number:1,
  title:"Wenn ich ein Jahr frei hätte", titleAr:"لو كان لدي سنة حرة",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Wenn ich ein ganzes Jahr frei hätte, würde ich auf jeden Fall um die Welt reisen. Zuerst würde ich mehrere Monate in Japan verbringen, weil mich die Kultur und die Sprache sehr interessieren. Danach würde ich nach Südamerika fliegen und Spanisch lernen. Ich würde neue Leute kennenlernen und viele Fotos machen. Am Ende des Jahres würde ich nach Hause zurückkehren und ein Blog über meine Erlebnisse schreiben. Das wäre ein Traum!
</div>
<div class="grammar-box"><b>Konjunktiv II (مهم جدًا لـ B1/B2):</b><br>
hätte · würde verbringen · würde fliegen · würde lernen · würde kennenlernen · würde zurückkehren · wäre<br>
يُستخدم للحديث عن أشياء غير واقعية أو للتهذيب.</div>`
},
{
  id:"s-b1-02", level:"b1", number:2,
  title:"Digitalisierung und Arbeitswelt", titleAr:"الرقمنة وعالم العمل",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Durch die Digitalisierung werden viele Berufe stark verändert. Einige Arbeitsplätze werden durch Maschinen und künstliche Intelligenz ersetzt. Gleichzeitig entstehen aber auch neue Jobs, zum Beispiel im Bereich der IT und der Datenanalyse. Deshalb ist es wichtig, dass die Menschen sich regelmäßig weiterbilden. Nur so können sie mit den schnellen Veränderungen Schritt halten. Die Politik sollte mehr in Umschulungsprogramme investieren.
</div>
<div class="grammar-box"><b>Passiv + جمل ثانوية:</b><br>
werden verändert · werden ersetzt · entstehen · dass die Menschen sich weiterbilden · sollte investieren</div>`
},
{
  id:"s-b1-03", level:"b1", number:3,
  title:"Mein erstes Vorstellungsgespräch", titleAr:"أول مقابلة عمل",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Vor zwei Wochen hatte ich mein erstes richtiges Vorstellungsgespräch. Ich war ziemlich nervös, aber ich habe mich gut vorbereitet. Der Personalchef hat mir viele Fragen gestellt: Warum möchten Sie bei uns arbeiten? Was sind Ihre Stärken und Schwächen? Wie gehen Sie mit Stress um? Ich habe versucht, ruhig und ehrlich zu antworten. Am Ende hat er gesagt, dass er sich in den nächsten Tagen bei mir melden wird. Ich hoffe sehr, dass ich die Stelle bekomme.
</div>
<h2>مفردات المقابلات</h2>
<table class="vocab-table">
<tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>das Vorstellungsgespräch</td><td>مقابلة العمل</td></tr>
<tr><td>sich vorbereiten</td><td>يستعد</td></tr>
<tr><td>der Personalchef</td><td>مدير الموارد البشرية</td></tr>
<tr><td>die Stärken / Schwächen</td><td>نقاط القوة / الضعف</td></tr>
<tr><td>mit Stress umgehen</td><td>يتعامل مع الضغط</td></tr>
<tr><td>sich melden</td><td>يتصل / يرد</td></tr>
</table>`
},
{
  id:"s-b1-04", level:"b1", number:4,
  title:"Umweltschutz im Alltag", titleAr:"حماية البيئة في الحياة اليومية",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Jeder kann im Alltag etwas für den Umweltschutz tun. Man kann zum Beispiel weniger Plastik verbrauchen, öfter mit dem Fahrrad fahren statt mit dem Auto und den Müll richtig trennen. Wenn alle Menschen mitmachen würden, könnte man sehr viel erreichen. Meiner Meinung nach sollte die Regierung aber auch strengere Gesetze erlassen und erneuerbare Energien stärker fördern.
</div>
<div class="grammar-box"><b>Konjunktiv II + رأي:</b><br>
würden mitmachen · könnte erreichen · sollte erlassen · Meiner Meinung nach...</div>`
},
{
  id:"s-b1-05", level:"b1", number:5,
  title:"Eine Präsentation vorbereiten", titleAr:"التحضير لعرض تقديمي",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Nächste Woche muss ich im Deutschkurs eine Präsentation halten. Das Thema lautet „Vorteile des Deutschlernens für die Karriere“. Zuerst werde ich eine kurze Einleitung geben und das Thema vorstellen. Dann gehe ich auf die wichtigsten Punkte ein. Am Ende fasse ich die Ergebnisse zusammen und beantworte Fragen. Ich übe jeden Tag vor dem Spiegel, damit ich nicht so nervös bin und flüssig sprechen kann.
</div>
<div class="grammar-box"><b>عبارات العرض (مهم جدًا لـ B1 Sprechen):</b><br>
Das Thema meiner Präsentation ist... · Zuerst... · Dann... · Zum Schluss... · Haben Sie Fragen?</div>`
},

/* ============================== B2 ============================== */
{
  id:"s-b2-01", level:"b2", number:1,
  title:"Lebenslanges Lernen in der modernen Welt", titleAr:"التعلم مدى الحياة في العالم الحديث",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
In einer sich rasant verändernden Welt ist lebenslanges Lernen unverzichtbar geworden. Der technologische Fortschritt und die Digitalisierung führen dazu, dass Fachwissen schnell veraltet. Arbeitnehmerinnen und Arbeitnehmer müssen sich daher kontinuierlich weiterqualifizieren, um auf dem Arbeitsmarkt wettbewerbsfähig zu bleiben. Gleichzeitig eröffnet lebenslanges Lernen neue berufliche Perspektiven und trägt maßgeblich zur persönlichen Entwicklung bei. Es lässt sich nicht leugnen, dass Investitionen in Bildung sowohl für den Einzelnen als auch für die Gesellschaft von enormem Nutzen sind.
</div>
<div class="grammar-box"><b>عبارات وNominalisierung B2:</b><br>
unverzichtbar geworden · führen dazu, dass · wettbewerbsfähig bleiben · eröffnet Perspektiven · trägt bei · Es lässt sich nicht leugnen, dass...</div>`
},
{
  id:"s-b2-02", level:"b2", number:2,
  title:"Homeoffice – Chancen und Risiken", titleAr:"العمل من المنزل – الفرص والمخاطر",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Das Homeoffice hat in den letzten Jahren erheblich an Bedeutung gewonnen. Einerseits ermöglicht es eine bessere Vereinbarkeit von Beruf und Privatleben sowie eine deutliche Reduzierung der Pendelzeiten. Andererseits kann der Mangel an sozialer Interaktion zu Isolation führen und die Grenzen zwischen Arbeitszeit und Freizeit verwischen. Zusammenfassend lässt sich feststellen, dass Homeoffice sowohl große Chancen als auch erhebliche Herausforderungen mit sich bringt. Eine ausgewogene Kombination aus Präsenzarbeit und remote work erscheint langfristig als die sinnvollste Lösung.
</div>
<div class="grammar-box"><b>هيكل حجاجي ممتاز لـ B2 Schreiben:</b><br>
Einerseits... · Andererseits... · Zusammenfassend lässt sich feststellen, dass... · erscheint als die sinnvollste Lösung</div>`
},
{
  id:"s-b2-03", level:"b2", number:3,
  title:"Die Rolle der Medien in der Demokratie", titleAr:"دور وسائل الإعلام في الديمقراطية",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Medien nehmen in modernen Demokratien eine zentrale Funktion wahr. Sie informieren die Bürgerinnen und Bürger über aktuelle Ereignisse und tragen wesentlich zur öffentlichen Meinungsbildung bei. Gleichzeitig besteht jedoch die Gefahr der Verbreitung von Falschmeldungen und einer einseitigen Berichterstattung. Aus diesem Grund ist es unerlässlich, dass Medienkonsumenten die Informationen kritisch hinterfragen und verschiedene Quellen vergleichen. Nur unter dieser Voraussetzung kann eine aufgeklärte und funktionierende Demokratie bestehen.
</div>
<p><b>مفردات عالية المستوى:</b> eine zentrale Funktion wahrnehmen · zur Meinungsbildung beitragen · Falschmeldungen · unerlässlich · kritisch hinterfragen · aufgeklärt</p>`
},
{
  id:"s-b2-04", level:"b2", number:4,
  title:"Herausforderungen der Integration", titleAr:"تحديات الاندماج",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Die gelungene Integration von Zuwanderern zählt zu den größten gesellschaftlichen Herausforderungen der Gegenwart. Einerseits obliegt es den Aufnahmeländern, ausreichend Sprachkurse sowie berufliche Qualifizierungsmöglichkeiten bereitzustellen. Andererseits tragen auch die Zuwanderer selbst Verantwortung: Sie müssen die Sprache erlernen und sich aktiv am gesellschaftlichen Leben beteiligen. Nur durch gegenseitigen Respekt, Offenheit und gemeinsame Anstrengungen kann ein friedliches und produktives Zusammenleben gelingen.
</div>
<div class="grammar-box"><b>أسلوب رسمي + Nominalisierung:</b><br>
zählt zu den größten Herausforderungen · obliegt es · bereitzustellen · tragen Verantwortung · sich beteiligen · kann gelingen</div>`
},
{
  id:"s-b2-05", level:"b2", number:5,
  title:"Klimawandel und persönliche Verantwortung", titleAr:"تغير المناخ والمسؤولية الشخصية",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.85;font-size:1.08rem">
Der Klimawandel stellt eine der drängendsten globalen Herausforderungen unserer Zeit dar. Während Staaten und Großunternehmen eine Schlüsselrolle spielen, darf die individuelle Verantwortung keineswegs unterschätzt werden. Jeder Einzelne kann durch bewussten Konsum, die bevorzugte Nutzung öffentlicher Verkehrsmittel und den Verzicht auf überflüssige Flugreisen einen konkreten Beitrag leisten. Dennoch stellt sich die Frage, ob individuelle Maßnahmen allein ausreichen oder ob weitreichende systemische Veränderungen unumgänglich sind.
</div>
<p><b>عبارات متقدمة جدًا:</b><br>
stellt eine der drängendsten Herausforderungen dar · darf keineswegs unterschätzt werden · einen konkreten Beitrag leisten · Dennoch stellt sich die Frage, ob... · unumgänglich</p>`
}
];
window.STORIES = STORIES;
