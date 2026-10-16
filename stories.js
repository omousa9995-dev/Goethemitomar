/* Short graded stories for reading practice A1 → B2 */
const STORIES = [
  {
    id: "s-a1-01",
    level: "a1",
    number: 1,
    title: "Mein Name ist Omar",
    titleAr: "اسمي عمر",
    content: `<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.1rem">
        Hallo! Mein Name ist Omar. Ich komme aus Jordanien. Ich wohne in Amman. 
        Ich bin 28 Jahre alt. Ich bin Ingenieur. Mein Hobby ist Fußball. 
        Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte. 
        Freut mich!
      </div>
      <h2>مفردات مهمة</h2>
      <table class="vocab-table">
        <tr><th>ألماني</th><th>عربي</th></tr>
        <tr><td>kommen aus</td><td>يأتي من</td></tr>
        <tr><td>wohnen in</td><td>يسكن في</td></tr>
        <tr><td>Hobby</td><td>هواية</td></tr>
        <tr><td>lernen</td><td>يتعلم</td></tr>
        <tr><td>weil</td><td>لأن</td></tr>
        <tr><td>möchten</td><td>يرغب / يريد (مهذب)</td></tr>
      </table>
      <h2>أسئلة فهم</h2>
      <ol>
        <li>Woher kommt Omar?</li>
        <li>Wo wohnt er?</li>
        <li>Was ist sein Hobby?</li>
        <li>Warum lernt er Deutsch?</li>
      </ol>`
  },
  {
    id: "s-a1-02",
    level: "a1",
    number: 2,
    title: "Ein Tag in Amman",
    titleAr: "يوم في عمان",
    content: `<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.1rem">
        Ich stehe um sieben Uhr auf. Dann frühstücke ich. Ich trinke Tee und esse Brot. 
        Um acht Uhr gehe ich zur Arbeit. Ich arbeite in einem Büro. 
        Um fünf Uhr komme ich nach Hause. Abends schaue ich fern oder lese ein Buch. 
        Um elf Uhr gehe ich schlafen.
      </div>
      <h2>مفردات</h2>
      <table class="vocab-table">
        <tr><th>ألماني</th><th>عربي</th></tr>
        <tr><td>aufstehen</td><td>يستيقظ</td></tr>
        <tr><td>frühstücken</td><td>يتناول الإفطار</td></tr>
        <tr><td>zur Arbeit gehen</td><td>يذهب إلى العمل</td></tr>
        <tr><td>nach Hause kommen</td><td>يعود إلى المنزل</td></tr>
        <tr><td>fernsehen</td><td>يشاهد التلفاز</td></tr>
        <tr><td>schlafen gehen</td><td>يذهب للنوم</td></tr>
      </table>`
  },
  {
    id: "s-a1-03",
    level: "a1",
    number: 3,
    title: "Im Café",
    titleAr: "في المقهى",
    content: `<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.1rem">
        Omar geht in ein Café. Er bestellt einen Kaffee und ein Stück Kuchen. 
        Der Kellner fragt: „Mit Milch oder ohne Milch?“ Omar sagt: „Mit Milch, bitte.“ 
        Der Kaffee kostet drei Euro. Omar bezahlt und sagt: „Danke schön!“
      </div>
      <h2>عبارات مفيدة</h2>
      <p>Ich hätte gerne... · Was kostet das? · Mit Milch / ohne Milch · Die Rechnung, bitte · Danke schön</p>`
  },
  {
    id: "s-a2-01",
    level: "a2",
    number: 1,
    title: "Mein letzter Urlaub",
    titleAr: "آخر إجازة لي",
    content: `<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
        Letztes Jahr bin ich nach Istanbul geflogen. Ich habe dort eine Woche verbracht. 
        Ich habe viele Museen besucht und leckeres Essen probiert. 
        Das Wetter war sehr schön. Ich habe viele Fotos gemacht. 
        Am letzten Tag habe ich Souvenirs für meine Familie gekauft. 
        Es war ein toller Urlaub!
      </div>
      <h2>قواعد في النص (Perfekt)</h2>
      <p>bin ... geflogen · habe ... verbracht · habe ... besucht · habe ... probiert · habe ... gemacht · habe ... gekauft</p>
      <div class="grammar-box">لاحظ استخدام <b>sein</b> مع fliegen (حركة) و <b>haben</b> مع باقي الأفعال.</div>`
  },
  {
    id: "s-a2-02",
    level: "a2",
    number: 2,
    title: "Warum lerne ich Deutsch?",
    titleAr: "لماذا أتعلم الألمانية؟",
    content: `<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
        Ich lerne Deutsch, weil ich in Deutschland studieren möchte. 
        Ich glaube, dass die deutschen Universitäten sehr gut sind. 
        Außerdem möchte ich später in einem internationalen Unternehmen arbeiten. 
        Deutsch ist nicht einfach, aber ich übe jeden Tag. 
        Ich höre deutsche Podcasts und schaue deutsche Serien.
      </div>
      <h2>جمل ثانوية في النص</h2>
      <p>weil ich ... möchte · dass die Universitäten ... sind</p>`
  },
  {
    id: "s-b1-01",
    level: "b1",
    number: 1,
    title: "Wenn ich ein Jahr frei hätte...",
    titleAr: "لو كان لدي سنة حرة...",
    content: `<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
        Wenn ich ein Jahr frei hätte, würde ich um die Welt reisen. 
        Zuerst würde ich nach Japan fliegen, weil mich die Kultur sehr interessiert. 
        Danach würde ich einige Monate in Südamerika verbringen. 
        Ich würde Spanisch lernen und neue Leute kennenlernen. 
        Am Ende des Jahres würde ich nach Hause zurückkehren und ein Buch über meine Erlebnisse schreiben.
      </div>
      <div class="grammar-box"><b>Konjunktiv II</b> في كل الجملة: hätte · würde fliegen · würde verbringen · würde lernen · würde zurückkehren · würde schreiben</div>`
  },
  {
    id: "s-b1-02",
    level: "b1",
    number: 2,
    title: "Die Digitalisierung der Arbeitswelt",
    titleAr: "رقمنة عالم العمل",
    content: `<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
        Durch die Digitalisierung werden viele Arbeitsplätze verändert. 
        Einige Berufe werden durch Maschinen ersetzt, während neue Jobs entstehen. 
        Es ist wichtig, dass die Menschen sich weiterbilden. 
        Nur so können sie mit den Veränderungen Schritt halten. 
        Die Politik sollte mehr in Bildung und Umschulung investieren.
      </div>
      <h2>ملاحظات</h2>
      <p>Passiv: werden ... verändert / werden ... ersetzt<br>
      Nebensatz: dass die Menschen sich weiterbilden<br>
      Modalverb: sollten ... investieren</p>`
  },
  {
    id: "s-b2-01",
    level: "b2",
    number: 1,
    title: "Die Bedeutung lebenslangen Lernens",
    titleAr: "أهمية التعلم مدى الحياة",
    content: `<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
        In einer sich schnell verändernden Welt ist lebenslanges Lernen unverzichtbar geworden. 
        Die Digitalisierung und der technologische Fortschritt führen dazu, dass Wissen schnell veraltet. 
        Arbeitnehmer müssen sich kontinuierlich weiterqualifizieren, um wettbewerbsfähig zu bleiben. 
        Gleichzeitig eröffnet lebenslanges Lernen neue berufliche Perspektiven und trägt zur persönlichen Entwicklung bei. 
        Es lässt sich nicht leugnen, dass die Investition in Bildung sowohl für den Einzelnen als auch für die Gesellschaft von großem Nutzen ist.
      </div>
      <h2>عبارات B2 في النص</h2>
      <p>unverzichtbar geworden · führen dazu, dass · wettbewerbsfähig bleiben · eröffnet Perspektiven · trägt bei · Es lässt sich nicht leugnen, dass...</p>
      <div class="grammar-box">لاحظ كثرة <b>Nominalisierung</b> و التراكيب المعقدة المناسبة لمستوى B2.</div>`
  },
  {
    id: "s-b2-02",
    level: "b2",
    number: 2,
    title: "Vor- und Nachteile des Homeoffice",
    titleAr: "مزايا وعيوب العمل من المنزل",
    content: `<div class="example-box" dir="ltr" style="text-align:left;font-family:Inter,sans-serif;line-height:1.8;font-size:1.05rem">
        Das Homeoffice hat in den letzten Jahren stark an Bedeutung gewonnen. 
        Einerseits ermöglicht es eine bessere Vereinbarkeit von Beruf und Privatleben sowie eine Einsparung von Pendelzeiten. 
        Andererseits kann die fehlende soziale Interaktion zu Isolation führen und die Grenze zwischen Arbeit und Freizeit verwischen. 
        Zusammenfassend lässt sich sagen, dass Homeoffice sowohl Chancen als auch Herausforderungen mit sich bringt. 
        Eine ausgewogene Mischung aus Präsenzarbeit und remote work scheint die beste Lösung zu sein.
      </div>
      <h2>هيكل حجاجي</h2>
      <p>Einerseits... · Andererseits... · Zusammenfassend lässt sich sagen, dass... · scheint die beste Lösung zu sein</p>`
  }
];
window.STORIES = STORIES;
