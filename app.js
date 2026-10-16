/* Goethe mit Omar – Comprehensive Curriculum A1→B2 */
const STORAGE_KEY = "goethe_v4";

const LESSONS = window.LESSONS || [];


const REDEMITTEL = {
a1:[
{cat:"تحيات وتعارف",items:[["Hallo! / Guten Tag!","مرحباً / نهارك سعيد"],["Wie heißt du? / Wie heißen Sie?","ما اسمك؟ (غير رسمي / رسمي)"],["Ich heiße... / Mein Name ist...","اسمي..."],["Woher kommst du? / Woher kommen Sie?","من أين أنت؟"],["Freut mich! / Sehr erfreut!","سررت بلقائك!"],["Wie geht's? / Wie geht es Ihnen?","كيف حالك؟"],["Mir geht's gut. / Danke, gut.","أنا بخير."]]},
{cat:"طلبات ومجاملة",items:[["Entschuldigung!","عفوًا!"],["Können Sie mir helfen?","هل يمكنكم مساعدتي؟"],["Ich hätte gerne...","أريد... من فضلك"],["Was kostet das?","كم يكلف هذا؟"],["Sprechen Sie bitte langsamer.","تحدثوا ببطء من فضلكم."],["Können Sie das bitte wiederholen?","هل يمكنكم إعادة ذلك؟"],["Danke schön! / Vielen Dank!","شكراً جزيلاً!"],["Bitte schön! / Gern geschehen!","عفواً / على الرحب والسعة"]]}
],
a2:[
{cat:"التعبير عن الرأي",items:[["Ich finde, dass...","أجد أن..."],["Ich glaube, dass...","أعتقد أن..."],["Meiner Meinung nach...","في رأيي..."],["..., weil...","... لأن..."],["Ein Vorteil / Nachteil ist, dass...","ميزة / عيب هو أن..."],["Das stimmt. / Das stimmt nicht.","هذا صحيح / غير صحيح"]]},
{cat:"التخطيط والاقتراح",items:[["Wollen wir...?","هل نريد...؟"],["Wie wäre es mit...?","ماذا لو...؟"],["Hast du Lust auf...?","هل لديك رغبة في...؟"],["Das ist eine gute Idee.","هذه فكرة جيدة."],["Leider habe ich keine Zeit.","للأسف ليس لدي وقت."],["Vielleicht ein anderes Mal.","ربما في مرة أخرى."]]}
],
b1:[
{cat:"العرض التقديمي",items:[["Das Thema meiner Präsentation ist...","موضوع عرضي هو..."],["Zuerst möchte ich über... sprechen.","أولاً أود التحدث عن..."],["Dann gehe ich auf... ein.","ثم أتطرق إلى..."],["Zum Schluss möchte ich zusammenfassen.","في الختام أود التلخيص."],["Zusammenfassend möchte ich sagen, dass...","بشكل ملخص أود أن أقول أن..."],["Vielen Dank für Ihre Aufmerksamkeit.","شكرًا على انتباهكم."],["Haben Sie Fragen?","هل لديكم أسئلة؟"]]},
{cat:"المناقشة",items:[["Meiner Meinung nach...","في رأيي..."],["Da stimme ich dir völlig zu.","أوافقك تماماً."],["Da bin ich anderer Meinung.","أنا من رأي آخر."],["Einerseits..., andererseits...","من ناحية... من ناحية أخرى..."],["Das kann ich so nicht sehen.","لا أستطيع رؤية الأمر بهذه الطريقة."],["Könntest du das bitte erklären?","هل يمكنك شرح ذلك؟"]]}
],
b2:[
{cat:"الحجاج المتقدم",items:[["Es lässt sich nicht leugnen, dass...","لا يمكن إنكار أن..."],["Im Gegensatz dazu...","على عكس ذلك..."],["Darüber hinaus...","علاوة على ذلك..."],["Abschließend möchte ich betonen, dass...","في الختام أود التأكيد على أن..."],["Man sollte bedenken, dass...","يجب أن نأخذ في الاعتبار أن..."],["Es stellt sich die Frage, ob...","يطرح السؤال عما إذا..."]]},
{cat:"الكتابة الرسمية",items:[["Ich erlaube mir, Ihnen mitzuteilen, dass...","أسمح لنفسي بإبلاغكم أن..."],["Ich wäre Ihnen sehr dankbar, wenn...","سأكون ممتنًا جدًا لو..."],["Für Rückfragen stehe ich gerne zur Verfügung.","لأي استفسارات أنا مستعد."],["Mit freundlichen Grüßen","مع أطيب التحيات"],["Sehr geehrte Damen und Herren,","السيدات والسادة المحترمون،"],["Bezüglich Ihrer Anfrage vom...","بخصوص استفساركم بتاريخ..."]]}
]
};
