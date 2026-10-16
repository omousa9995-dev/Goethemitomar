/* Graded short stories for Goethe-style reading practice – A1 to B2 */
const STORIES = [
/* ==================== A1 ==================== */
{
  id:"s-a1-01", level:"a1", number:1,
  title:"Mein Name ist Omar", titleAr:"اسمي عمر",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.1rem">
Hallo! Mein Name ist Omar. Ich komme aus Jordanien. Ich wohne in Amman. Ich bin 28 Jahre alt und Ingenieur. Mein Hobby ist Fußball. Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte. Freut mich!
</div>
<h2>مفردات مهمة</h2>
<table class="vocab-table"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>kommen aus</td><td>يأتي من</td></tr>
<tr><td>wohnen</td><td>يسكن</td></tr>
<tr><td>Hobby</td><td>هواية</td></tr>
<tr><td>möchten</td><td>يرغب (مهذب)</td></tr></table>
<h2>أسئلة</h2><ol><li>Woher kommt Omar?</li><li>Was ist sein Beruf?</li><li>Warum lernt er Deutsch?</li></ol>`
},
{
  id:"s-a1-02", level:"a1", number:2,
  title:"Ein Tag in Amman", titleAr:"يوم في عمّان",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.1rem">
Ich stehe um sieben Uhr auf. Dann frühstücke ich. Ich trinke Tee und esse Brot mit Käse. Um acht Uhr gehe ich zur Arbeit. Ich arbeite in einem Büro. Um fünf Uhr komme ich nach Hause. Abends schaue ich fern oder lese ein Buch. Um elf Uhr gehe ich schlafen.
</div>
<h2>مفردات</h2>
<table class="vocab-table"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>aufstehen</td><td>يستيقظ</td></tr>
<tr><td>frühstücken</td><td>يفطر</td></tr>
<tr><td>zur Arbeit gehen</td><td>يذهب للعمل</td></tr>
<tr><td>nach Hause kommen</td><td>يعود للمنزل</td></tr>
<tr><td>fernsehen</td><td>يشاهد التلفاز</td></tr></table>`
},
{
  id:"s-a1-03", level:"a1", number:3,
  title:"Im Café", titleAr:"في المقهى",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.1rem">
Omar geht in ein Café. Er bestellt einen Kaffee und ein Stück Kuchen. Der Kellner fragt: „Mit Milch oder ohne Milch?“ Omar antwortet: „Mit Milch, bitte.“ Der Kaffee kostet drei Euro. Omar bezahlt und sagt: „Danke schön!“
</div>
<p><b>عبارات مفيدة:</b> Ich hätte gerne... · Was kostet das? · Mit Milch / ohne Milch · Die Rechnung, bitte</p>`
},
{
  id:"s-a1-04", level:"a1", number:4,
  title:"Meine Familie", titleAr:"عائلتي",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.1rem">
Das ist meine Familie. Mein Vater heißt Ahmed. Er ist 55 Jahre alt und Arzt. Meine Mutter heißt Sara. Sie ist Lehrerin. Ich habe einen Bruder und eine Schwester. Mein Bruder ist Student. Meine Schwester geht noch zur Schule. Wir wohnen alle in Amman.
</div>
<table class="vocab-table"><tr><th>ألماني</th><th>عربي</th></tr>
<tr><td>der Vater</td><td>الأب</td></tr>
<tr><td>die Mutter</td><td>الأم</td></tr>
<tr><td>der Bruder</td><td>الأخ</td></tr>
<tr><td>die Schwester</td><td>الأخت</td></tr>
<tr><td>der Arzt / die Ärztin</td><td>الطبيب / الطبيبة</td></tr></table>`
},
{
  id:"s-a1-05", level:"a1", number:5,
  title:"Einkaufen im Supermarkt", titleAr:"التسوق في السوبرماركت",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.1rem">
Heute gehe ich in den Supermarkt. Ich brauche Brot, Milch, Äpfel und Käse. Das Brot kostet zwei Euro. Die Milch ist im Kühlschrank. An der Kasse sage ich: „Das ist alles, danke.“ Ich bezahle mit Karte.
</div>
<p><b>كلمات:</b> der Supermarkt · brauchen · der Kühlschrank · die Kasse · mit Karte bezahlen</p>`
},
{
  id:"s-a1-06", level:"a1", number:6,
  title:"Beim Arzt", titleAr:"عند الطبيب",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.1rem">
Ich fühle mich nicht gut. Ich habe Kopfschmerzen und Fieber. Ich gehe zum Arzt. Der Arzt fragt: „Seit wann haben Sie das?“ Ich antworte: „Seit zwei Tagen.“ Der Arzt gibt mir Medizin und sagt: „Ruhen Sie sich aus.“
</div>
<p><b>مفردات طبية:</b> sich fühlen · Kopfschmerzen · Fieber · die Medizin · sich ausruhen</p>`
},

/* ==================== A2 ==================== */
{
  id:"s-a2-01", level:"a2", number:1,
  title:"Mein letzter Urlaub", titleAr:"آخر إجازة لي",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Letztes Jahr bin ich nach Istanbul geflogen. Ich habe dort eine Woche verbracht. Ich habe viele Museen besucht und leckeres Essen probiert. Das Wetter war sehr schön. Am letzten Tag habe ich Souvenirs für meine Familie gekauft. Es war ein toller Urlaub!
</div>
<div class="grammar-box"><b>Perfekt:</b> bin geflogen (sein) · habe verbracht / besucht / probiert / gekauft (haben)</div>`
},
{
  id:"s-a2-02", level:"a2", number:2,
  title:"Warum lerne ich Deutsch?", titleAr:"لماذا أتعلم الألمانية؟",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Ich lerne Deutsch, weil ich in Deutschland studieren möchte. Ich glaube, dass die deutschen Universitäten sehr gut sind. Außerdem möchte ich später in einem internationalen Unternehmen arbeiten. Deutsch ist nicht einfach, aber ich übe jeden Tag.
</div>
<div class="grammar-box">جمل ثانوية: weil ... möchte · dass ... sind</div>`
},
{
  id:"s-a2-03", level:"a2", number:3,
  title:"Ein Wochenende in Berlin", titleAr:"نهاية أسبوع في برلين",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Am Samstag bin ich früh aufgestanden und zum Bahnhof gegangen. Der Zug nach Berlin hatte zehn Minuten Verspätung. In Berlin habe ich das Brandenburger Tor und die Museumsinsel besucht. Abends habe ich in einem Restaurant Currywurst gegessen. Es hat mir sehr gut gefallen.
</div>
<p><b>مفردات:</b> der Bahnhof · die Verspätung · das Brandenburger Tor · die Museumsinsel · die Currywurst</p>`
},
{
  id:"s-a2-04", level:"a2", number:4,
  title:"Mein neuer Job", titleAr:"وظيفتي الجديدة",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Seit einem Monat habe ich einen neuen Job. Ich arbeite in einer Firma in Amman. Meine Kollegen sind sehr nett. Ich muss jeden Tag um acht Uhr im Büro sein. Die Arbeit ist interessant, aber manchmal auch stressig. Am Freitag habe ich frei.
</div>
<p><b>كلمات:</b> der Job / die Stelle · die Firma · die Kollegen · stressig · frei haben</p>`
},
{
  id:"s-a2-05", level:"a2", number:5,
  title:"Ein Brief an einen Freund", titleAr:"رسالة لصديق",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Lieber Ali, wie geht es dir? Mir geht es gut. Letzte Woche habe ich eine Prüfung geschrieben. Sie war nicht so schwer. Nächstes Wochenende möchte ich dich besuchen. Hast du Zeit? Schreib mir bitte bald. Viele Grüße, Omar
</div>
<p><b>عبارات الرسائل:</b> Lieber... · Wie geht es dir? · Mir geht es gut. · Viele Grüße</p>`
},

/* ==================== B1 ==================== */
{
  id:"s-b1-01", level:"b1", number:1,
  title:"Wenn ich ein Jahr frei hätte...", titleAr:"لو كان لدي سنة حرة...",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Wenn ich ein Jahr frei hätte, würde ich um die Welt reisen. Zuerst würde ich nach Japan fliegen, weil mich die Kultur sehr interessiert. Danach würde ich einige Monate in Südamerika verbringen. Ich würde Spanisch lernen und neue Leute kennenlernen. Am Ende des Jahres würde ich nach Hause zurückkehren und ein Buch über meine Erlebnisse schreiben.
</div>
<div class="grammar-box"><b>Konjunktiv II:</b> hätte · würde fliegen · würde verbringen · würde lernen · würde zurückkehren</div>`
},
{
  id:"s-b1-02", level:"b1", number:2,
  title:"Die Digitalisierung der Arbeitswelt", titleAr:"رقمنة عالم العمل",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Durch die Digitalisierung werden viele Arbeitsplätze verändert. Einige Berufe werden durch Maschinen ersetzt, während neue Jobs entstehen. Es ist wichtig, dass die Menschen sich weiterbilden. Nur so können sie mit den Veränderungen Schritt halten. Die Politik sollte mehr in Bildung und Umschulung investieren.
</div>
<p><b>ملاحظات:</b> Passiv (werden verändert / ersetzt) · Nebensatz mit dass · Modalverb sollte</p>`
},
{
  id:"s-b1-03", level:"b1", number:3,
  title:"Mein erstes Vorstellungsgespräch", titleAr:"أول مقابلة عمل لي",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Gestern hatte ich mein erstes Vorstellungsgespräch. Ich war ziemlich nervös. Der Personalchef hat mir viele Fragen gestellt: Warum möchten Sie bei uns arbeiten? Was sind Ihre Stärken? Ich habe versucht, ruhig und klar zu antworten. Am Ende hat er gesagt, dass er sich in einer Woche melden wird. Ich hoffe, dass ich die Stelle bekomme.
</div>
<p><b>مفردات:</b> das Vorstellungsgespräch · nervös · der Personalchef · die Stärken · sich melden · die Stelle bekommen</p>`
},
{
  id:"s-b1-04", level:"b1", number:4,
  title:"Umweltschutz im Alltag", titleAr:"حماية البيئة في الحياة اليومية",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Jeder kann etwas für den Umweltschutz tun. Zum Beispiel kann man weniger Plastik verwenden und öfter mit dem Fahrrad fahren statt mit dem Auto. Auch das Trennen von Müll ist wichtig. Wenn alle mitmachen würden, könnte man viel erreichen. Meiner Meinung nach sollte die Regierung strengere Gesetze erlassen.
</div>
<div class="grammar-box">Konjunktiv II: würden · könnte · sollte</div>`
},
{
  id:"s-b1-05", level:"b1", number:5,
  title:"Eine Präsentation halten", titleAr:"تقديم عرض",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Nächste Woche muss ich eine Präsentation halten. Das Thema ist „Vorteile des Deutschlernens“. Zuerst werde ich eine kurze Einleitung geben. Dann präsentiere ich die wichtigsten Punkte. Am Ende fasse ich zusammen und beantworte Fragen. Ich übe jeden Tag vor dem Spiegel, damit ich nicht so nervös bin.
</div>
<p><b>عبارات العرض:</b> Das Thema meiner Präsentation ist... · Zuerst... · Dann... · Zum Schluss... · Haben Sie Fragen?</p>`
},

/* ==================== B2 ==================== */
{
  id:"s-b2-01", level:"b2", number:1,
  title:"Die Bedeutung lebenslangen Lernens", titleAr:"أهمية التعلم مدى الحياة",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
In einer sich schnell verändernden Welt ist lebenslanges Lernen unverzichtbar geworden. Die Digitalisierung und der technologische Fortschritt führen dazu, dass Wissen schnell veraltet. Arbeitnehmer müssen sich kontinuierlich weiterqualifizieren, um wettbewerbsfähig zu bleiben. Gleichzeitig eröffnet lebenslanges Lernen neue berufliche Perspektiven und trägt zur persönlichen Entwicklung bei. Es lässt sich nicht leugnen, dass die Investition in Bildung sowohl für den Einzelnen als auch für die Gesellschaft von großem Nutzen ist.
</div>
<div class="grammar-box">Nominalisierung + عبارات B2: unverzichtbar geworden · führen dazu, dass · wettbewerbsfähig bleiben · Es lässt sich nicht leugnen, dass...</div>`
},
{
  id:"s-b2-02", level:"b2", number:2,
  title:"Vor- und Nachteile des Homeoffice", titleAr:"مزايا وعيوب العمل من المنزل",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Das Homeoffice hat in den letzten Jahren stark an Bedeutung gewonnen. Einerseits ermöglicht es eine bessere Vereinbarkeit von Beruf und Privatleben sowie eine Einsparung von Pendelzeiten. Andererseits kann die fehlende soziale Interaktion zu Isolation führen und die Grenze zwischen Arbeit und Freizeit verwischen. Zusammenfassend lässt sich sagen, dass Homeoffice sowohl Chancen als auch Herausforderungen mit sich bringt. Eine ausgewogene Mischung aus Präsenzarbeit und remote work scheint die beste Lösung zu sein.
</div>
<p><b>هيكل حجاجي:</b> Einerseits... · Andererseits... · Zusammenfassend lässt sich sagen, dass...</p>`
},
{
  id:"s-b2-03", level:"b2", number:3,
  title:"Die Rolle der Medien in der Gesellschaft", titleAr:"دور وسائل الإعلام في المجتمع",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Medien spielen eine entscheidende Rolle in der modernen Gesellschaft. Sie informieren die Bürger über aktuelle Ereignisse und tragen zur Meinungsbildung bei. Allerdings besteht die Gefahr der Verbreitung von Falschmeldungen und einseitiger Berichterstattung. Daher ist es unerlässlich, dass die Medienkonsumenten kritisch hinterfragen, was sie lesen und hören. Nur so kann eine informierte und demokratische Gesellschaft funktionieren.
</div>
<p><b>مفردات B2:</b> eine entscheidende Rolle spielen · zur Meinungsbildung beitragen · Falschmeldungen · unerlässlich · kritisch hinterfragen</p>`
},
{
  id:"s-b2-04", level:"b2", number:4,
  title:"Integration von Zuwanderern", titleAr:"اندماج المهاجرين",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Die erfolgreiche Integration von Zuwanderern stellt eine der größten Herausforderungen moderner Gesellschaften dar. Einerseits müssen die Aufnahmeländer Sprachkurse und berufliche Qualifizierungsmöglichkeiten anbieten. Andererseits liegt es auch in der Verantwortung der Zuwanderer selbst, die Sprache zu lernen und sich aktiv am gesellschaftlichen Leben zu beteiligen. Nur durch gegenseitigen Respekt und Anstrengungen beider Seiten kann ein friedliches Zusammenleben gelingen.
</div>
<div class="grammar-box">Nominalstil + هياكل معقدة مناسبة لـ B2 Lesen و Schreiben</div>`
},
{
  id:"s-b2-05", level:"b2", number:5,
  title:"Klimawandel und individuelle Verantwortung", titleAr:"تغير المناخ والمسؤولية الفردية",
  content:`<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
Der Klimawandel ist eine der drängendsten Herausforderungen unserer Zeit. Während große Unternehmen und Staaten eine zentrale Rolle spielen, darf die individuelle Verantwortung nicht unterschätzt werden. Jeder Einzelne kann durch bewussten Konsum, die Nutzung öffentlicher Verkehrsmittel und den Verzicht auf unnötige Flüge einen Beitrag leisten. Es stellt sich jedoch die Frage, ob individuelle Maßnahmen ausreichen oder ob systemische Veränderungen notwendiger sind.
</div>
<p><b>عبارات متقدمة:</b> eine der drängendsten Herausforderungen · darf nicht unterschätzt werden · einen Beitrag leisten · Es stellt sich die Frage, ob...</p>`
}
];
window.STORIES = STORIES;
