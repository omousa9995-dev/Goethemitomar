/* Goethe mit Omar — app v20 · Ankommo-inspired */
(function () {
  "use strict";

  var STORAGE_KEY = "gmo_progress_v2";

  function getLessons() {
    try {
      if (typeof LESSONS !== "undefined" && LESSONS) return LESSONS;
    } catch (e) {}
    return window.LESSONS || [];
  }
  function getStories() {
    try {
      if (typeof STORIES !== "undefined" && STORIES) return STORIES;
    } catch (e) {}
    return window.STORIES || [];
  }
  function getExams() {
    try {
      if (typeof EXAMS !== "undefined" && EXAMS) return EXAMS;
    } catch (e) {}
    return window.EXAMS || [];
  }
  function getVocab() {
    return window.VOCAB_A1 || window.VOCAB || [];
  }
  function getSentences() {
    return window.SENTENCES_A1 || window.SENTENCES || [];
  }

  var progress = loadProgress();
  var currentPathLevel = "a1";
  var currentExamLevel = "a1";
  var currentStoryLevel = "a1";
  var currentPracticeTab = "vocab";

  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var p = JSON.parse(raw);
        return {
          completedLessons: p.completedLessons || [],
          streak: p.streak || 0,
          lastStudyDate: p.lastStudyDate || null,
        };
      }
    } catch (e) {}
    return { completedLessons: [], streak: 0, lastStudyDate: null };
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {}
    updateChrome();
  }

  function todayStr() {
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }

  function touchStreak() {
    var t = todayStr();
    if (progress.lastStudyDate === t) return;
    var y = new Date();
    y.setDate(y.getDate() - 1);
    var ys = y.getFullYear() + "-" + (y.getMonth() + 1) + "-" + y.getDate();
    if (progress.lastStudyDate === ys) progress.streak = (progress.streak || 0) + 1;
    else progress.streak = 1;
    progress.lastStudyDate = t;
    saveProgress();
  }

  function escapeHtml(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&")
      .replace(/</g, "<")
      .replace(/>/g, ">")
      .replace(/"/g, """);
  }

  function showSection(id) {
    var sections = document.querySelectorAll(".section");
    for (var i = 0; i < sections.length; i++) sections[i].classList.remove("active");
    var sec = document.getElementById(id);
    if (sec) sec.classList.add("active");

    var navMap = {
      home: "home",
      path: "path",
      "lesson-view": "path",
      practice: "practice",
      exam: "exam",
      more: "more",
      reading: "more",
      resources: "more",
    };
    var navId = navMap[id] || id;
    var btns = document.querySelectorAll(".nav-btn");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle("active", btns[j].getAttribute("data-section") === navId);
    }

    if (id === "path") filterPath(currentPathLevel);
    if (id === "practice") showPracticeTab(currentPracticeTab);
    if (id === "exam") filterExams(currentExamLevel);
    if (id === "reading") filterStories(currentStoryLevel);

    window.scrollTo(0, 0);
  }

  function updateChrome() {
    var lessons = getLessons();
    var total = lessons.length || 1;
    var done = progress.completedLessons.length;
    var pct = Math.min(100, Math.round((done / total) * 100));
    var elPct = document.getElementById("overall-percent");
    var elBar = document.getElementById("overall-bar");
    var elLessons = document.getElementById("stat-lessons");
    var elStreak = document.getElementById("stat-streak");
    var elStreak2 = document.getElementById("streak-count");
    if (elPct) elPct.textContent = pct + "%";
    if (elBar) elBar.style.width = pct + "%";
    if (elLessons) elLessons.textContent = String(done);
    if (elStreak) elStreak.textContent = String(progress.streak || 0);
    if (elStreak2) elStreak2.textContent = String(progress.streak || 0);

    var next = null;
    for (var i = 0; i < lessons.length; i++) {
      if (progress.completedLessons.indexOf(lessons[i].id) === -1) {
        next = lessons[i];
        break;
      }
    }
    var nt = document.getElementById("next-title");
    var ns = document.getElementById("next-sub");
    if (next) {
      if (nt) nt.textContent = next.title || next.titleDe || next.id;
      if (ns)
        ns.textContent =
          (next.level || "").toUpperCase() +
          (next.titleDe ? " · " + next.titleDe : "") +
          (next.number ? " · Ch. " + next.number : "");
    } else {
      if (nt) nt.textContent = "أحسنت — أكملت كل الفصول المتاحة";
      if (ns) ns.textContent = "Great — all available chapters done";
    }
  }

  function continueLearning() {
    var lessons = getLessons();
    for (var i = 0; i < lessons.length; i++) {
      if (progress.completedLessons.indexOf(lessons[i].id) === -1) {
        openLesson(lessons[i].id);
        return;
      }
    }
    showSection("path");
  }

  function openPathLevel(level) {
    currentPathLevel = level;
    showSection("path");
    filterPath(level);
  }

  function filterPath(level) {
    currentPathLevel = level;
    var tabs = document.querySelectorAll("#path-tabs .tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle("active", tabs[i].getAttribute("data-level") === level);
    }
    var list = document.getElementById("path-list");
    if (!list) return;
    var lessons = getLessons();
    var html = "";
    var n = 0;
    for (var j = 0; j < lessons.length; j++) {
      var l = lessons[j];
      if (l.level !== level) continue;
      n++;
      var done = progress.completedLessons.indexOf(l.id) !== -1;
      var num = l.number != null ? l.number : n;
      html +=
        '<button type="button" class="chapter-card' +
        (done ? " done" : "") +
        '" onclick="openLesson(\'' +
        escapeHtml(l.id) +
        "')">" +
        '<div class="chapter-num">' +
        (done ? "✓" : num) +
        "</div>" +
        '<div class="chapter-body">' +
        "<h3>" +
        escapeHtml(l.title || "") +
        "</h3>" +
        "<p>" +
        escapeHtml(l.titleDe || l.description || "") +
        "</p>" +
        '<div class="chapter-meta">' +
        (level || "").toUpperCase() +
        " · Chapter " +
        num +
        "</div>" +
        "</div>" +
        '<div class="chapter-status">' +
        (done ? "✅" : "→") +
        "</div>" +
        "</button>";
    }
    list.innerHTML =
      html ||
      '<div class="card"><p class="muted">قريباً لهذا المستوى · Coming soon for this level.</p></div>';
  }

  function openLesson(id) {
    var lessons = getLessons();
    var lesson = null;
    for (var i = 0; i < lessons.length; i++) {
      if (lessons[i].id === id) {
        lesson = lessons[i];
        break;
      }
    }
    if (!lesson) return;

    var badge = document.getElementById("lv-badge");
    if (badge) {
      badge.textContent = (lesson.level || "a1").toUpperCase();
    }
    var title = document.getElementById("lv-title");
    if (title) title.textContent = lesson.title || "";
    var sub = document.getElementById("lv-title-sub");
    if (sub) sub.textContent = lesson.titleDe || lesson.description || "";
    var content = document.getElementById("lesson-content");
    if (content) content.innerHTML = lesson.content || "<p class='muted'>لا يوجد محتوى بعد.</p>";

    var btn = document.getElementById("mark-complete-btn");
    if (btn) {
      if (progress.completedLessons.indexOf(id) !== -1) {
        btn.textContent = "✓ مكتمل · Completed";
        btn.onclick = null;
        btn.style.opacity = "0.85";
      } else {
        btn.textContent = "✓ أكملت هذا الفصل · Mark complete";
        btn.style.opacity = "1";
        btn.onclick = function () {
          markLessonComplete(id);
        };
      }
    }
    showSection("lesson-view");
  }

  function markLessonComplete(id) {
    if (!id) return;
    if (progress.completedLessons.indexOf(id) === -1) {
      progress.completedLessons.push(id);
      touchStreak();
      saveProgress();
    }
    var btn = document.getElementById("mark-complete-btn");
    if (btn) {
      btn.textContent = "✓ مكتمل · Completed";
      btn.onclick = null;
    }
    updateChrome();
  }

  var REDEMITTEL = {
    a1: [
      { cat: "تحيات · Greetings", items: [
        ["Hallo! / Guten Morgen!", "Hello! / Good morning!", "مرحباً / صباح الخير"],
        ["Guten Tag! / Guten Abend!", "Good day! / Good evening!", "نهارك سعيد / مساء الخير"],
        ["Wie heißt du?", "What is your name?", "ما اسمك؟"],
        ["Ich heiße …", "My name is …", "اسمي …"],
        ["Woher kommst du?", "Where are you from?", "من أين أنت؟"],
        ["Ich komme aus …", "I come from …", "أنا من …"],
        ["Freut mich!", "Nice to meet you!", "سررت بلقائك!"]
      ]},
      { cat: "طلبات · Requests", items: [
        ["Entschuldigung!", "Excuse me!", "عفواً!"],
        ["Können Sie mir bitte helfen?", "Can you help me please?", "هل يمكنكم مساعدتي؟"],
        ["Was bedeutet das?", "What does that mean?", "ماذا يعني هذا؟"],
        ["Die Rechnung bitte!", "The bill please!", "الحساب من فضلك!"],
        ["Danke schön!", "Thank you!", "شكراً!"]
      ]}
    ]
  };

  function showPracticeTab(tab) {
    currentPracticeTab = tab;
    var tabs = document.querySelectorAll("#practice-tabs .tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle("active", tabs[i].getAttribute("data-tab") === tab);
    }
    var panel = document.getElementById("practice-panel");
    if (!panel) return;

    if (tab === "vocab") {
      renderVocab(panel);
    } else if (tab === "sentences") {
      renderSentences(panel);
    } else {
      renderPhrases(panel);
    }
  }

  function renderVocab(panel) {
    var data = getVocab();
    if (!data || !data.length) {
      panel.innerHTML =
        '<div class="card"><p class="muted">بنك المفردات يُحمّل قريباً · Vocab bank loading soon.</p></div>';
      return;
    }
    var html = "";
    if (data[0] && data[0].words) {
      for (var i = 0; i < data.length; i++) {
        var cat = data[i];
        html += '<div class="vocab-cat"><h3>' + escapeHtml(cat.title || cat.category || "") + "</h3><div class='vocab-grid'>";
        var words = cat.words || [];
        for (var j = 0; j < words.length; j++) {
          var w = words[j];
          var de="", en="", ar="";
          if (Array.isArray(w)) { de=w[0]||""; ar=w[1]||""; en=w[2]||""; }
          else { de=w.de||w.german||w.word||""; en=w.en||w.english||""; ar=w.ar||w.arabic||""; }
          html +=
            '<div class="vocab-item"><span class="de">' +
            escapeHtml(de) +
            '</span><span class="en">' +
            escapeHtml(en) +
            "</span><span>" +
            escapeHtml(ar) +
            "</span></div>";
        }
        html += "</div></div>";
      }
    } else {
      html = '<div class="vocab-grid">';
      for (var k = 0; k < data.length; k++) {
        var item = data[k];
        html +=
          '<div class="vocab-item"><span class="de">' +
          escapeHtml(item.de || item.german || item.word || "") +
          '</span><span class="en">' +
          escapeHtml(item.en || item.english || "") +
          "</span><span>" +
          escapeHtml(item.ar || item.arabic || "") +
          "</span></div>";
      }
      html += "</div>";
    }
    panel.innerHTML = html;
  }

  function renderSentences(panel) {
    var data = getSentences();
    if (!data || !data.length) {
      panel.innerHTML =
        '<div class="card"><p class="muted">بنك الجمل يُحمّل قريباً · Sentence bank loading soon.</p></div>';
      return;
    }
    var html = "";
    if (data[0] && data[0].sentences) {
      for (var i = 0; i < data.length; i++) {
        var topic = data[i];
        html += "<h3 style='margin:12px 0 8px;color:var(--green)'>" + escapeHtml(topic.topic || topic.title || "") + "</h3>";
        var list = topic.sentences || [];
        for (var j = 0; j < list.length; j++) {
          var s = list[j];
          if (typeof s === "string") {
            html += '<div class="sentence-item"><div class="de">' + escapeHtml(s) + "</div></div>";
          } else if (Array.isArray(s)) {
            html +=
              '<div class="sentence-item"><div class="de">' +
              escapeHtml(s[0] || "") +
              '</div><div class="ar">' +
              escapeHtml(s[1] || "") +
              '</div><div class="en">' +
              escapeHtml(s[2] || "") +
              "</div></div>";
          } else {
            html +=
              '<div class="sentence-item"><div class="de">' +
              escapeHtml(s.de || s.german || "") +
              '</div><div class="ar">' +
              escapeHtml(s.ar || s.arabic || "") +
              '</div><div class="en">' +
              escapeHtml(s.en || s.english || "") +
              "</div></div>";
          }
        }
      }
    } else {
      for (var k = 0; k < data.length; k++) {
        var item = data[k];
        if (typeof item === "string") {
          html += '<div class="sentence-item"><div class="de">' + escapeHtml(item) + "</div></div>";
        } else {
          html +=
            '<div class="sentence-item"><div class="de">' +
            escapeHtml(item.de || item.german || item.text || "") +
            '</div><div class="ar">' +
            escapeHtml(item.ar || item.arabic || "") +
            '</div><div class="en">' +
            escapeHtml(item.en || item.english || "") +
            "</div></div>";
        }
      }
    }
    panel.innerHTML = html || '<div class="card"><p class="muted">لا جمل بعد.</p></div>';
  }

  function renderPhrases(panel) {
    var data = REDEMITTEL.a1 || [];
    var html = "";
    for (var i = 0; i < data.length; i++) {
      var cat = data[i];
      html += "<h3 style='margin:12px 0 8px;color:var(--green)'>" + escapeHtml(cat.cat) + "</h3>";
      var items = cat.items || [];
      for (var j = 0; j < items.length; j++) {
        var it = items[j];
        html +=
          '<div class="sentence-item"><div class="de">' +
          escapeHtml(it[0] || "") +
          '</div><div class="en">' +
          escapeHtml(it[1] || "") +
          '</div><div class="ar">' +
          escapeHtml(it[2] || "") +
          "</div></div>";
      }
    }
    panel.innerHTML = html || '<div class="card"><p class="muted">قريباً</p></div>';
  }

  function filterExams(level) {
    currentExamLevel = level;
    window.currentExamLevel = level;
    var tabs = document.querySelectorAll("#exam-tabs .tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle("active", tabs[i].getAttribute("data-level") === level);
    }
    var list = document.getElementById("exams-list");
    var view = document.getElementById("exam-view");
    if (view) {
      view.classList.add("hidden");
      view.innerHTML = "";
    }
    if (!list) return;
    var exams = getExams();
    var html = "";
    var n = 0;
    for (var j = 0; j < exams.length; j++) {
      var e = exams[j];
      if (e.level && e.level !== level) continue;
      n++;
      html +=
        '<button type="button" class="chapter-card" onclick="openExam(\'' +
        escapeHtml(e.id) +
        "')">" +
        '<div class="chapter-num">' +
        n +
        "</div>" +
        '<div class="chapter-body"><h3>' +
        escapeHtml(e.title || e.name || "Exam") +
        "</h3><p>" +
        escapeHtml(e.description || e.titleDe || "") +
        "</p></div>" +
        '<div class="chapter-status">→</div></button>';
    }
    list.innerHTML =
      html ||
      '<div class="card"><p class="muted">نماذج هذا المستوى قريباً · Mock exams coming soon.</p></div>';
  }

  function openExam(id) {
    var exams = getExams();
    var exam = null;
    for (var i = 0; i < exams.length; i++) {
      if (exams[i].id === id) {
        exam = exams[i];
        break;
      }
    }
    if (!exam) return;
    var list = document.getElementById("exams-list");
    var view = document.getElementById("exam-view");
    if (list) list.innerHTML = "";
    if (!view) return;
    view.classList.remove("hidden");
    var body = exam.content || exam.html || "";
    if (!body && exam.sections) {
      body = exam.sections
        .map(function (s) {
          return "<div class='card'><h3>" + escapeHtml(s.title || "") + "</h3>" + (s.content || "") + "</div>";
        })
        .join("");
    }
    view.innerHTML =
      '<button type="button" class="back-link" onclick="filterExams(currentExamLevel)">← القائمة</button>' +
      "<h2 style='margin-bottom:12px'>" +
      escapeHtml(exam.title || "") +
      "</h2>" +
      '<div class="lesson-body prose">' +
      (body || "<p class='muted'>لا محتوى بعد.</p>") +
      "</div>";
  }

  function filterStories(level) {
    currentStoryLevel = level;
    var tabs = document.querySelectorAll("#reading .tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle("active", tabs[i].getAttribute("data-level") === level);
    }
    var list = document.getElementById("stories-list");
    var view = document.getElementById("story-view");
    if (view) {
      view.classList.add("hidden");
      view.innerHTML = "";
    }
    if (!list) return;
    var stories = getStories();
    var html = "";
    var n = 0;
    for (var j = 0; j < stories.length; j++) {
      var s = stories[j];
      if (s.level !== level) continue;
      n++;
      html +=
        '<button type="button" class="chapter-card" onclick="openStory(\'' +
        escapeHtml(s.id) +
        "')">" +
        '<div class="chapter-num">' +
        (s.number != null ? s.number : n) +
        "</div>" +
        '<div class="chapter-body"><h3>' +
        escapeHtml(s.title || "") +
        "</h3><p>" +
        escapeHtml(s.titleAr || s.titleDe || "") +
        "</p></div>" +
        '<div class="chapter-status">→</div></button>';
    }
    list.innerHTML =
      html || '<div class="card"><p class="muted">لا قصص لهذا المستوى بعد.</p></div>';
  }

  function openStory(id) {
    var stories = getStories();
    var story = null;
    for (var i = 0; i < stories.length; i++) {
      if (stories[i].id === id) {
        story = stories[i];
        break;
      }
    }
    if (!story) return;
    var list = document.getElementById("stories-list");
    var view = document.getElementById("story-view");
    if (list) list.innerHTML = "";
    if (!view) return;
    view.classList.remove("hidden");
    view.innerHTML =
      "<h2 style='margin-bottom:8px'>" +
      escapeHtml(story.title || "") +
      "</h2>" +
      (story.titleAr ? "<p class='muted' style='margin-bottom:12px'>" + escapeHtml(story.titleAr) + "</p>" : "") +
      (story.content || "");
  }

  function exportProgress() {
    var blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "goethe-mit-omar-progress.json";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function importProgress(ev) {
    var file = ev.target.files && ev.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = JSON.parse(reader.result);
        if (data && Array.isArray(data.completedLessons)) {
          progress.completedLessons = data.completedLessons;
          progress.streak = data.streak || 0;
          progress.lastStudyDate = data.lastStudyDate || null;
          saveProgress();
          alert("تم استيراد التقدم · Progress imported");
          showSection("home");
        } else {
          alert("ملف غير صالح · Invalid file");
        }
      } catch (e) {
        alert("تعذر قراءة الملف · Could not read file");
      }
    };
    reader.readAsText(file);
    ev.target.value = "";
  }

  window.showSection = showSection;
  window.continueLearning = continueLearning;
  window.openPathLevel = openPathLevel;
  window.filterPath = filterPath;
  window.openLesson = openLesson;
  window.markLessonComplete = markLessonComplete;
  window.showPracticeTab = showPracticeTab;
  window.filterExams = filterExams;
  window.openExam = openExam;
  window.filterStories = filterStories;
  window.openStory = openStory;
  window.exportProgress = exportProgress;
  window.importProgress = importProgress;
  window.currentExamLevel = currentExamLevel;

  document.addEventListener("DOMContentLoaded", function () {
    try {
      if (typeof LESSONS !== "undefined") window.LESSONS = LESSONS;
    } catch (e) {}
    try {
      if (typeof STORIES !== "undefined") window.STORIES = STORIES;
    } catch (e) {}
    try {
      if (typeof EXAMS !== "undefined") window.EXAMS = EXAMS;
    } catch (e) {}
    updateChrome();
    showSection("home");
  });
})();
