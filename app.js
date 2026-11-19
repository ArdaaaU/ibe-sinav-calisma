// İBE Sınav Çalışma Stüdyosu — Uygulama Mantığı
(function () {
  "use strict";

  const DATA = window.IBE_DATA;
  const STORAGE_KEY = "ibe_study_state_v1";
  const OPTION_LETTERS = ["A", "B", "C", "D"];

  // ================= PERSISTED STATE =================
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          history: parsed.history || {}, // { qId: { correct: bool } }
          bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
          readLessons: Array.isArray(parsed.readLessons) ? parsed.readLessons : [],
          fcStatus: parsed.fcStatus || {}, // { fId: 'known' | 'review' }
          theme: parsed.theme === "dark" ? "dark" : "light"
        };
      }
    } catch (_) {}
    return { history: {}, bookmarks: [], readLessons: [], fcStatus: {}, theme: "light" };
  }

  let state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  // ================= UTILITY =================
  function shuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function lessonName(id) {
    const l = DATA.lessons.find((x) => x.id === id);
    return l ? `${l.code} — ${l.title}` : `Ders 0${id}`;
  }

  // ================= THEME =================
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const lbl = document.getElementById("theme-label");
    if (lbl) lbl.textContent = state.theme === "dark" ? "Gündüz Modu" : "Gece Modu";
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    applyTheme();
  }

  // ================= TAB NAVIGATION =================
  let currentTab = "quiz";

  function switchTab(tabName) {
    currentTab = tabName;
    document.querySelectorAll(".tab-panel").forEach((p) => {
      p.classList.toggle("active", p.id === `panel-${tabName}`);
    });
    document.querySelectorAll(".nav-item, .mobile-tab").forEach((btn) => {
      const active = btn.dataset.tab === tabName;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ================= SIDEBAR & GLOBAL METRICS =================
  function updateGlobalProgress() {
    const totalQ = DATA.questions.length;
    const answeredIds = Object.keys(state.history);
    const correctCount = answeredIds.filter((id) => state.history[id].correct).length;
    const wrongCount = answeredIds.filter((id) => !state.history[id].correct).length;
    const knownFc = Object.values(state.fcStatus).filter((v) => v === "known").length;

    document.getElementById("nav-quiz-badge").textContent = `${answeredIds.length}/${totalQ}`;
    document.getElementById("nav-notes-badge").textContent = `${state.readLessons.length}/${DATA.lessons.length}`;
    document.getElementById("nav-fc-badge").textContent = `${knownFc}/${DATA.flashcards.length}`;
    document.getElementById("mobile-accuracy").textContent = `${answeredIds.length}/${totalQ}`;

    const accEl = document.getElementById("overall-accuracy");
    if (answeredIds.length === 0) {
      accEl.textContent = "Başlanmadı";
    } else {
      const pct = Math.round((correctCount / answeredIds.length) * 100);
      accEl.textContent = `%${pct} başarı`;
    }

    // Per-lesson sidebar bars
    const barsWrap = document.getElementById("sidebar-lesson-bars");
    barsWrap.innerHTML = DATA.lessons
      .map((lesson) => {
        const qs = DATA.questions.filter((q) => q.lesson === lesson.id);
        const solvedCorrect = qs.filter((q) => state.history[q.id]?.correct).length;
        const pct = Math.round((solvedCorrect / qs.length) * 100);
        return `
          <div class="mini-bar-row" title="${lesson.title}: ${solvedCorrect}/${qs.length} doğru">
            <span class="mini-bar-label">Ders ${lesson.id}</span>
            <div class="mini-bar-track"><div class="mini-bar-fill" style="width:${pct}%"></div></div>
            <span class="mini-bar-val">${solvedCorrect}/${qs.length}</span>
          </div>
        `;
      })
      .join("");

    // Launcher quick stats
    const qsWrap = document.getElementById("quiz-quick-stats");
    const accText = answeredIds.length ? `%${Math.round((correctCount / answeredIds.length) * 100)}` : "—";
    qsWrap.innerHTML = `
      <div class="stat-chip"><div class="stat-chip-val">${answeredIds.length}/${totalQ}</div><div class="stat-chip-lbl">Çözülen Soru</div></div>
      <div class="stat-chip"><div class="stat-chip-val">${accText}</div><div class="stat-chip-lbl">Doğruluk</div></div>
      <div class="stat-chip"><div class="stat-chip-val">${wrongCount}</div><div class="stat-chip-lbl">Yanlış Havuzu</div></div>
    `;

    document.getElementById("wrong-count-inline").textContent = wrongCount;
    document.getElementById("bookmark-count-inline").textContent = state.bookmarks.length;

    updateLauncherPreview();
  }

  // ================= QUIZ LAUNCHER =================
  const quizConfig = {
    mode: "study", // 'study' | 'exam'
    lessons: new Set([1, 2, 3, 4, 5, 6]),
    pool: "all", // 'all' | 'unanswered' | 'wrong' | 'bookmarked'
    count: 20,
    shuffle: true
  };

  function renderLessonChips() {
    const wrap = document.getElementById("quiz-lesson-chips");
    wrap.innerHTML = DATA.lessons
      .map((l) => {
        const active = quizConfig.lessons.has(l.id) ? "active" : "";
        return `
          <button class="lesson-chip ${active}" data-lid="${l.id}">
            <span class="lesson-chip-code">${l.code} · 10 soru</span>
            <span class="lesson-chip-title">${l.title}</span>
          </button>
        `;
      })
      .join("");

    wrap.querySelectorAll(".lesson-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lid = Number(btn.dataset.lid);
        if (quizConfig.lessons.has(lid)) quizConfig.lessons.delete(lid);
        else quizConfig.lessons.add(lid);
        btn.classList.toggle("active", quizConfig.lessons.has(lid));
        updateLauncherPreview();
      });
    });
  }

  function getFilteredQuestions() {
    return DATA.questions.filter((q) => {
      if (!quizConfig.lessons.has(q.lesson)) return false;
      if (quizConfig.pool === "unanswered") return !state.history[q.id];
      if (quizConfig.pool === "wrong") return state.history[q.id] && !state.history[q.id].correct;
      if (quizConfig.pool === "bookmarked") return state.bookmarks.includes(q.id);
      return true;
    });
  }

  function updateLauncherPreview() {
    const matching = getFilteredQuestions();
    const info = document.getElementById("matching-questions-info");
    const btn = document.getElementById("start-quiz-btn");
    const toTake = Math.min(matching.length, quizConfig.count);

    if (matching.length === 0) {
      info.textContent = "Bu filtrede uygun soru yok";
      btn.disabled = true;
    } else {
      info.textContent = `${matching.length} sorudan ${toTake} tanesi açılacak`;
      btn.disabled = false;
    }
  }

  // ================= ACTIVE QUIZ ENGINE =================
  let activeSession = null;
  let timerHandle = null;

  function stopTimer() {
    if (timerHandle) {
      clearInterval(timerHandle);
      timerHandle = null;
    }
  }

  function prepareQuestions(rawQuestions, doShuffle) {
    const ordered = doShuffle ? shuffle(rawQuestions) : rawQuestions.slice();
    return ordered.map((q) => {
      const indexedOpts = q.options.map((text, idx) => ({ text, isCorrect: idx === q.correct }));
      const finalOpts = doShuffle ? shuffle(indexedOpts) : indexedOpts;
      const newCorrect = finalOpts.findIndex((o) => o.isCorrect);
      return {
        ...q,
        renderOptions: finalOpts.map((o) => o.text),
        renderCorrect: newCorrect
      };
    });
  }

  function startQuizSession(mode, customQuestions = null) {
    stopTimer();
    let pool;
    if (customQuestions) {
      pool = customQuestions;
    } else if (mode === "exam") {
      // Balanced 25 questions across all 6 lessons (~4 per lesson + 1 extra)
      const picked = [];
      const shuffledLessons = shuffle([1, 2, 3, 4, 5, 6]);
      shuffledLessons.forEach((lid, idx) => {
        const countForLesson = idx === 0 ? 5 : 4;
        const lqs = shuffle(DATA.questions.filter((q) => q.lesson === lid)).slice(0, countForLesson);
        picked.push(...lqs);
      });
      pool = picked;
    } else {
      const filtered = getFilteredQuestions();
      const ordered = quizConfig.shuffle ? shuffle(filtered) : filtered;
      pool = ordered.slice(0, quizConfig.count);
    }

    if (!pool.length) return;

    const prepared = prepareQuestions(pool, mode === "exam" ? true : quizConfig.shuffle);

    activeSession = {
      mode,
      questions: prepared,
      index: 0,
      answers: {}, // { qIndex: selectedOptionIndex }
      remainingSeconds: mode === "exam" ? 25 * 60 : 0
    };

    document.getElementById("quiz-launcher").classList.add("hidden");
    document.getElementById("quiz-results").classList.add("hidden");
    document.getElementById("quiz-runner").classList.remove("hidden");

    const timerEl = document.getElementById("runner-timer");
    if (mode === "exam") {
      timerEl.classList.remove("hidden");
      renderTimer();
      timerHandle = setInterval(() => {
        if (!activeSession) return stopTimer();
        activeSession.remainingSeconds -= 1;
        renderTimer();
        if (activeSession.remainingSeconds <= 0) {
          stopTimer();
          finishQuizSession();
        }
      }, 1000);
    } else {
      timerEl.classList.add("hidden");
    }

    renderActiveQuestion();
  }

  function renderTimer() {
    if (!activeSession) return;
    const s = Math.max(0, activeSession.remainingSeconds);
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    document.getElementById("runner-timer").textContent = `${mm}:${ss}`;
  }

  function renderActiveQuestion() {
    const sess = activeSession;
    if (!sess) return;
    const q = sess.questions[sess.index];
    const total = sess.questions.length;
    const chosen = sess.answers[sess.index];
    const isAnswered = chosen !== undefined;
    const isStudy = sess.mode === "study";

    document.getElementById("runner-counter").textContent = `${sess.index + 1} / ${total}`;
    document.getElementById("runner-progress-fill").style.width = `${((sess.index + 1) / total) * 100}%`;

    document.getElementById("q-lesson-pill").textContent = `Ders 0${q.lesson}`;
    document.getElementById("q-topic-pill").textContent = q.topic;
    document.getElementById("q-diff-pill").textContent = q.difficulty;
    document.getElementById("q-text").textContent = q.question;

    // Bookmark button
    const bmBtn = document.getElementById("q-bookmark-btn");
    const isBm = state.bookmarks.includes(q.id);
    bmBtn.classList.toggle("active", isBm);
    bmBtn.querySelector("span").textContent = isBm ? "Kaydedildi" : "Kaydet";

    // Options
    const optWrap = document.getElementById("q-options");
    optWrap.innerHTML = q.renderOptions
      .map((optText, i) => {
        let cls = "option-btn";
        let disabled = "";
        if (isStudy && isAnswered) {
          disabled = "disabled";
          if (i === q.renderCorrect) cls += " correct";
          else if (i === chosen) cls += " wrong";
        } else if (!isStudy && chosen === i) {
          cls += " selected";
        }
        return `
          <button class="${cls}" data-opt="${i}" ${disabled}>
            <span class="option-key">${OPTION_LETTERS[i]}</span>
            <span>${escapeHtml(optText)}</span>
          </button>
        `;
      })
      .join("");

    optWrap.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => selectOption(Number(btn.dataset.opt)));
    });

    // Explanation (Study Mode only)
    const expBox = document.getElementById("q-explanation");
    if (isStudy && isAnswered) {
      const ok = chosen === q.renderCorrect;
      expBox.classList.remove("hidden", "is-correct", "is-wrong");
      expBox.classList.add(ok ? "is-correct" : "is-wrong");
      document.getElementById("q-exp-status").textContent = ok
        ? "✓ Doğru Cevap"
        : `✕ Yanlış · Doğru şık ${OPTION_LETTERS[q.renderCorrect]}`;
      document.getElementById("q-slide-ref").textContent = q.slideRef;
      document.getElementById("q-exp-text").textContent = q.explanation;
    } else {
      expBox.classList.add("hidden");
    }

    // Navigation buttons
    document.getElementById("prev-q-btn").disabled = sess.index === 0;
    const nextBtn = document.getElementById("next-q-btn");
    nextBtn.textContent = sess.index === total - 1 ? "Sonuçları Gör ✓" : "Sonraki →";

    // Dots
    const dotsWrap = document.getElementById("q-dots");
    dotsWrap.innerHTML = sess.questions
      .map((item, idx) => {
        let c = "q-dot";
        if (idx === sess.index) c += " current";
        const ans = sess.answers[idx];
        if (ans !== undefined) {
          if (isStudy) {
            c += ans === item.renderCorrect ? " dot-correct" : " dot-wrong";
          } else {
            c += " answered";
          }
        }
        return `<button class="${c}" data-qidx="${idx}">${idx + 1}</button>`;
      })
      .join("");

    dotsWrap.querySelectorAll(".q-dot").forEach((d) => {
      d.addEventListener("click", () => {
        sess.index = Number(d.dataset.qidx);
        renderActiveQuestion();
      });
    });
  }

  function selectOption(optIdx) {
    const sess = activeSession;
    if (!sess) return;
    if (sess.mode === "study" && sess.answers[sess.index] !== undefined) return;

    sess.answers[sess.index] = optIdx;
    const q = sess.questions[sess.index];

    if (sess.mode === "study") {
      state.history[q.id] = { correct: optIdx === q.renderCorrect };
      saveState();
      updateGlobalProgress();
    }

    renderActiveQuestion();
  }

  function toggleCurrentBookmark() {
    if (!activeSession) return;
    const q = activeSession.questions[activeSession.index];
    const idx = state.bookmarks.indexOf(q.id);
    if (idx >= 0) state.bookmarks.splice(idx, 1);
    else state.bookmarks.push(q.id);
    saveState();
    updateGlobalProgress();
    renderActiveQuestion();
  }

  let lastFinishedSession = null;
  let currentReviewFilter = "all";

  function finishQuizSession() {
    stopTimer();
    const sess = activeSession;
    if (!sess) return;

    // Record answers for exam mode into lifetime history
    sess.questions.forEach((q, idx) => {
      const ans = sess.answers[idx];
      if (ans !== undefined) {
        state.history[q.id] = { correct: ans === q.renderCorrect };
      }
    });
    saveState();
    updateGlobalProgress();

    lastFinishedSession = sess;
    activeSession = null;

    document.getElementById("quiz-runner").classList.add("hidden");
    document.getElementById("quiz-results").classList.remove("hidden");
    renderResults();
  }

  function renderResults() {
    const sess = lastFinishedSession;
    if (!sess) return;

    let correct = 0;
    let wrong = 0;
    let blank = 0;
    const byLesson = {};

    sess.questions.forEach((q, idx) => {
      if (!byLesson[q.lesson]) byLesson[q.lesson] = { total: 0, correct: 0 };
      byLesson[q.lesson].total += 1;

      const ans = sess.answers[idx];
      if (ans === undefined) blank += 1;
      else if (ans === q.renderCorrect) {
        correct += 1;
        byLesson[q.lesson].correct += 1;
      } else {
        wrong += 1;
      }
    });

    const total = sess.questions.length;
    const pct = Math.round((correct / total) * 100);
    document.getElementById("res-percent").textContent = `%${pct}`;
    document.getElementById("res-summary").textContent = `${total} soruda ${correct} doğru · ${wrong} yanlış · ${blank} boş`;

    const retryBtn = document.getElementById("retry-wrong-btn");
    const wrongQs = sess.questions.filter((q, idx) => sess.answers[idx] !== q.renderCorrect);
    retryBtn.disabled = wrongQs.length === 0;
    retryBtn.textContent = wrongQs.length ? `Yanlış / Boşları Tekrar Çöz (${wrongQs.length})` : "Hatasız Tamamladın!";

    // Per-lesson breakdown
    const bdWrap = document.getElementById("res-breakdown");
    bdWrap.innerHTML = Object.keys(byLesson)
      .map(Number)
      .sort((a, b) => a - b)
      .map((lid) => {
        const d = byLesson[lid];
        const lpct = Math.round((d.correct / d.total) * 100);
        return `
          <div class="breakdown-row">
            <strong>Ders 0${lid}</strong>
            <div class="mini-bar-track"><div class="mini-bar-fill" style="width:${lpct}%"></div></div>
            <span class="mono" style="text-align:right">${d.correct}/${d.total} (%${lpct})</span>
          </div>
        `;
      })
      .join("");

    renderReviewList();
  }

  function renderReviewList() {
    const sess = lastFinishedSession;
    if (!sess) return;
    const wrap = document.getElementById("res-review-list");

    const items = sess.questions
      .map((q, idx) => ({ q, idx, ans: sess.answers[idx], ok: sess.answers[idx] === q.renderCorrect }))
      .filter((item) => {
        if (currentReviewFilter === "wrong") return !item.ok;
        if (currentReviewFilter === "correct") return item.ok;
        return true;
      });

    if (!items.length) {
      wrap.innerHTML = `<div class="card"><p class="muted">Bu filtrede gösterilecek soru yok.</p></div>`;
      return;
    }

    wrap.innerHTML = items
      .map(({ q, idx, ans, ok }) => {
        const userText = ans === undefined ? "Boş bırakıldı" : `${OPTION_LETTERS[ans]}) ${escapeHtml(q.renderOptions[ans])}`;
        const rightText = `${OPTION_LETTERS[q.renderCorrect]}) ${escapeHtml(q.renderOptions[q.renderCorrect])}`;
        return `
          <div class="card review-item ${ok ? "rev-correct" : "rev-wrong"}">
            <div class="meta-pills">
              <span class="pill accent">Soru ${idx + 1} · Ders 0${q.lesson}</span>
              <span class="pill">${escapeHtml(q.topic)}</span>
              <span class="pill subtle">${escapeHtml(q.slideRef)}</span>
            </div>
            <p class="review-item-q">${escapeHtml(q.question)}</p>
            <div class="review-answers">
              <div style="color:${ok ? "var(--success)" : "var(--danger)"}"><strong>Senin cevabın:</strong> ${userText}</div>
              ${!ok ? `<div style="color:var(--success)"><strong>Doğru cevap:</strong> ${rightText}</div>` : ""}
            </div>
            <div class="review-exp">${escapeHtml(q.explanation)}</div>
          </div>
        `;
      })
      .join("");
  }

  // ================= STUDY NOTES TAB =================
  let activeNoteLessonId = 1;
  let notesSearchQuery = "";

  function renderNotesTabs() {
    const wrap = document.getElementById("notes-lesson-tabs");
    wrap.innerHTML = DATA.lessons
      .map((l) => {
        const isRead = state.readLessons.includes(l.id);
        const active = !notesSearchQuery && l.id === activeNoteLessonId ? "active" : "";
        return `
          <button class="lesson-tab-btn ${active}" data-nlid="${l.id}">
            <span>${l.code}</span>
            ${isRead ? '<span class="check-dot" title="Okundu">✓</span>' : ""}
          </button>
        `;
      })
      .join("");

    wrap.querySelectorAll(".lesson-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        notesSearchQuery = "";
        document.getElementById("notes-search").value = "";
        activeNoteLessonId = Number(btn.dataset.nlid);
        renderNotesTabs();
        renderNotesBody();
      });
    });
  }

  function highlightText(htmlStr, query) {
    if (!query) return htmlStr;
    const safeQ = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Highlight only outside HTML tags
    return htmlStr.replace(/(<[^>]+>)|([^<]+)/g, (match, tag, text) => {
      if (tag) return tag;
      return text.replace(new RegExp(`(${safeQ})`, "gi"), "<mark>$1</mark>");
    });
  }

  function renderSectionHtml(sec, query) {
    let html = `<div class="note-section"><h3>${highlightText(escapeHtml(sec.heading), query)}</h3>`;
    if (sec.bullets) {
      html += `<ul class="note-bullets">${sec.bullets.map((b) => `<li>${highlightText(b, query)}</li>`).join("")}</ul>`;
    }
    if (sec.table) {
      html += `
        <div class="table-scroll">
          <table class="editorial-table">
            <thead><tr>${sec.table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
            <tbody>
              ${sec.table.rows
                .map((row) => `<tr>${row.map((cell) => `<td>${highlightText(escapeHtml(cell), query)}</td>`).join("")}</tr>`)
                .join("")}
            </tbody>
          </table>
        </div>
      `;
    }
    if (sec.callout) {
      html += `<div class="note-callout"><strong>Sınav Notu:</strong> ${highlightText(escapeHtml(sec.callout), query)}</div>`;
    }
    html += `</div>`;
    return html;
  }

  function renderNotesBody() {
    const wrap = document.getElementById("notes-content");
    const q = notesSearchQuery.trim();

    if (q) {
      const qLow = q.toLocaleLowerCase("tr");
      const matches = [];
      DATA.lessons.forEach((lesson) => {
        lesson.sections.forEach((sec) => {
          const blob = [
            sec.heading,
            ...(sec.bullets || []),
            sec.callout || "",
            ...(sec.table ? sec.table.rows.flat() : [])
          ]
            .join(" ")
            .replace(/<[^>]+>/g, " ")
            .toLocaleLowerCase("tr");
          if (blob.includes(qLow)) {
            matches.push({ lesson, sec });
          }
        });
      });

      if (!matches.length) {
        wrap.innerHTML = `<div class="card"><p class="muted">"${escapeHtml(q)}" için ders notlarında eşleşme bulunamadı.</p></div>`;
        return;
      }

      wrap.innerHTML = `
        <div class="card">
          <div class="eyebrow" style="margin-bottom:16px">"${escapeHtml(q)}" için ${matches.length} bölüm bulundu</div>
          ${matches
            .map(
              ({ lesson, sec }) => `
              <div style="margin-bottom:10px"><span class="pill accent">${lesson.code} · ${escapeHtml(lesson.title)}</span></div>
              ${renderSectionHtml(sec, q)}
            `
            )
            .join("<hr style='border:none;border-top:1px solid var(--border);margin:20px 0'/>")}
        </div>
      `;
      return;
    }

    const lesson = DATA.lessons.find((l) => l.id === activeNoteLessonId) || DATA.lessons[0];
    const isRead = state.readLessons.includes(lesson.id);

    wrap.innerHTML = `
      <article class="card">
        <div class="lesson-article-head">
          <div>
            <div class="eyebrow">${lesson.code} · ${lesson.slideCount} Slayt</div>
            <h2>${escapeHtml(lesson.title)}</h2>
            <p>${escapeHtml(lesson.summary)}</p>
          </div>
          <button class="${isRead ? "primary-btn" : "secondary-btn"}" id="toggle-lesson-read">
            ${isRead ? "✓ Okundu İşaretli" : "Okudum Olarak İşaretle"}
          </button>
        </div>

        ${lesson.sections.map((s) => renderSectionHtml(s, "")).join("")}

        <div class="note-footer-bar">
          <button class="secondary-btn" id="practice-lesson-fc">Bu Dersin Kartlarını Çalış</button>
          <button class="primary-btn" id="practice-lesson-quiz">Bu Dersin 10 Sorusunu Çöz →</button>
        </div>
      </article>
    `;

    document.getElementById("toggle-lesson-read").addEventListener("click", () => {
      const idx = state.readLessons.indexOf(lesson.id);
      if (idx >= 0) state.readLessons.splice(idx, 1);
      else state.readLessons.push(lesson.id);
      saveState();
      updateGlobalProgress();
      renderNotesTabs();
      renderNotesBody();
    });

    document.getElementById("practice-lesson-quiz").addEventListener("click", () => {
      quizConfig.mode = "study";
      quizConfig.lessons = new Set([lesson.id]);
      quizConfig.pool = "all";
      quizConfig.count = 10;
      renderLessonChips();
      switchTab("quiz");
      startQuizSession("study", DATA.questions.filter((item) => item.lesson === lesson.id));
    });

    document.getElementById("practice-lesson-fc").addEventListener("click", () => {
      document.getElementById("fc-lesson-filter").value = String(lesson.id);
      rebuildFlashcardDeck();
      switchTab("flashcards");
    });
  }

  // ================= FLASHCARDS TAB =================
  let fcDeck = DATA.flashcards.slice();
  let fcIndex = 0;
  let fcFlipped = false;

  function rebuildFlashcardDeck(doShuffle = false) {
    const val = document.getElementById("fc-lesson-filter").value;
    let list;
    if (val === "all") list = DATA.flashcards.slice();
    else if (val === "review") list = DATA.flashcards.filter((f) => state.fcStatus[f.id] !== "known");
    else list = DATA.flashcards.filter((f) => f.lesson === Number(val));

    fcDeck = doShuffle ? shuffle(list) : list;
    fcIndex = 0;
    fcFlipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    const stage = document.getElementById("fc-stage");
    if (!fcDeck.length) {
      document.getElementById("fc-lesson-badge").textContent = "Tamamlandı";
      document.getElementById("fc-counter").textContent = "0 / 0";
      document.getElementById("fc-status-pill").textContent = "Hepsi bilindi";
      document.getElementById("fc-front-text").textContent = "Bu filtredeki tüm bilgi kartlarını 'Biliyorum' olarak işaretledin!";
      document.getElementById("fc-back-text").textContent = "Harika iş! Filtreyi 'Tüm Dersler' yaparak baştan tekrar edebilirsin.";
      document.getElementById("flashcard-inner").classList.remove("flipped");
      return;
    }

    const card = fcDeck[fcIndex];
    const st = state.fcStatus[card.id];
    document.getElementById("fc-lesson-badge").textContent = `Ders 0${card.lesson}`;
    document.getElementById("fc-counter").textContent = `${fcIndex + 1} / ${fcDeck.length}`;

    const pill = document.getElementById("fc-status-pill");
    if (st === "known") pill.textContent = "✓ Biliyorum";
    else if (st === "review") pill.textContent = "↻ Tekrar Edilecek";
    else pill.textContent = "Yeni";

    document.getElementById("fc-front-text").textContent = card.front;
    document.getElementById("fc-back-text").textContent = card.back;
    document.getElementById("flashcard-inner").classList.toggle("flipped", fcFlipped);
  }

  function flipFlashcard() {
    if (!fcDeck.length) return;
    fcFlipped = !fcFlipped;
    document.getElementById("flashcard-inner").classList.toggle("flipped", fcFlipped);
  }

  function stepFlashcard(delta) {
    if (!fcDeck.length) return;
    fcIndex = (fcIndex + delta + fcDeck.length) % fcDeck.length;
    fcFlipped = false;
    renderFlashcard();
  }

  function rateFlashcard(status) {
    if (!fcDeck.length) return;
    const card = fcDeck[fcIndex];
    state.fcStatus[card.id] = status;
    saveState();
    updateGlobalProgress();
    stepFlashcard(1);
  }

  // ================= MATCHING GAME & CHEAT SHEET =================
  let matchState = { pairs: [], selectedLeft: null, selectedRight: null, matchedIds: new Set(), mistakes: 0 };

  function startMatchRound() {
    const picked = shuffle(DATA.matchPairs).slice(0, 6);
    matchState = {
      pairs: picked,
      leftOrder: shuffle(picked),
      rightOrder: shuffle(picked),
      selectedLeft: null,
      selectedRight: null,
      matchedIds: new Set(),
      mistakes: 0
    };
    document.getElementById("match-banner").classList.add("hidden");
    renderMatchBoard();
  }

  function renderMatchBoard() {
    document.getElementById("match-score").textContent = `${matchState.matchedIds.size} / ${matchState.pairs.length}`;
    document.getElementById("match-mistakes").textContent = `Hata: ${matchState.mistakes}`;

    const leftEl = document.getElementById("match-left");
    const rightEl = document.getElementById("match-right");

    leftEl.innerHTML = matchState.leftOrder
      .map((p) => {
        const matched = matchState.matchedIds.has(p.id);
        const sel = matchState.selectedLeft === p.id;
        return `<button class="match-tile ${matched ? "matched" : ""} ${sel ? "selected" : ""}" data-side="left" data-id="${p.id}" ${matched ? "disabled" : ""}>${escapeHtml(p.left)}</button>`;
      })
      .join("");

    rightEl.innerHTML = matchState.rightOrder
      .map((p) => {
        const matched = matchState.matchedIds.has(p.id);
        const sel = matchState.selectedRight === p.id;
        return `<button class="match-tile ${matched ? "matched" : ""} ${sel ? "selected" : ""}" data-side="right" data-id="${p.id}" ${matched ? "disabled" : ""}>${escapeHtml(p.right)}</button>`;
      })
      .join("");

    document.querySelectorAll(".match-tile:not(:disabled)").forEach((btn) => {
      btn.addEventListener("click", () => handleMatchClick(btn.dataset.side, btn.dataset.id, btn));
    });
  }

  function handleMatchClick(side, id, el) {
    if (side === "left") matchState.selectedLeft = id;
    else matchState.selectedRight = id;

    if (matchState.selectedLeft && matchState.selectedRight) {
      if (matchState.selectedLeft === matchState.selectedRight) {
        matchState.matchedIds.add(id);
        matchState.selectedLeft = null;
        matchState.selectedRight = null;
        renderMatchBoard();
        if (matchState.matchedIds.size === matchState.pairs.length) {
          const banner = document.getElementById("match-banner");
          banner.textContent =
            matchState.mistakes === 0
              ? "Kusursuz! 6 eşleştirmeyi sıfır hatayla tamamladın."
              : `Tebrikler! Turu ${matchState.mistakes} hata ile tamamladın. 'Yeni Tur' ile diğer araştırmacıları dene.`;
          banner.classList.remove("hidden");
        }
      } else {
        matchState.mistakes += 1;
        renderMatchBoard();
        // Brief flash feedback
        const lBtn = document.querySelector(`.match-tile[data-side="left"][data-id="${matchState.selectedLeft}"]`);
        const rBtn = document.querySelector(`.match-tile[data-side="right"][data-id="${matchState.selectedRight}"]`);
        if (lBtn) lBtn.classList.add("wrong-flash");
        if (rBtn) rBtn.classList.add("wrong-flash");
        matchState.selectedLeft = null;
        matchState.selectedRight = null;
        setTimeout(renderMatchBoard, 380);
      }
    } else {
      renderMatchBoard();
    }
  }

  function renderCheatSheet() {
    document.getElementById("cheat-numbers-grid").innerHTML = DATA.cheatNumbers
      .map(
        (n) => `
        <div class="num-card">
          <div class="num-val">${escapeHtml(n.value)}</div>
          <div class="num-lbl">${escapeHtml(n.label)}</div>
          <div class="num-det">${escapeHtml(n.detail)}</div>
        </div>
      `
      )
      .join("");

    document.getElementById("people-table-body").innerHTML = DATA.matchPairs
      .map(
        (p) => `
        <tr>
          <td><strong>${escapeHtml(p.left)}</strong></td>
          <td>${escapeHtml(p.right)}</td>
        </tr>
      `
      )
      .join("");
  }

  // ================= EVENT BINDINGS =================
  function bindEvents() {
    // Tabs
    document.querySelectorAll(".nav-item, .mobile-tab").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    // Theme & Reset
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
    document.getElementById("mobile-theme-toggle").addEventListener("click", toggleTheme);
    document.getElementById("reset-progress").addEventListener("click", () => {
      if (confirm("Çözülen sorular, okunan dersler ve kart geçmişi sıfırlansın mı?")) {
        state = { history: {}, bookmarks: [], readLessons: [], fcStatus: {}, theme: state.theme };
        saveState();
        updateGlobalProgress();
        renderNotesTabs();
        renderNotesBody();
        rebuildFlashcardDeck();
      }
    });

    // Mode cards
    document.querySelectorAll(".mode-card").forEach((card) => {
      card.addEventListener("click", () => {
        quizConfig.mode = card.dataset.mode;
        document.querySelectorAll(".mode-card").forEach((c) => c.classList.toggle("selected", c === card));
        document.getElementById("study-config").classList.toggle("hidden", quizConfig.mode !== "study");
        document.getElementById("exam-config").classList.toggle("hidden", quizConfig.mode !== "exam");
      });
    });

    document.getElementById("select-all-lessons").addEventListener("click", () => {
      quizConfig.lessons = new Set([1, 2, 3, 4, 5, 6]);
      renderLessonChips();
      updateLauncherPreview();
    });

    document.getElementById("clear-lessons").addEventListener("click", () => {
      quizConfig.lessons = new Set();
      renderLessonChips();
      updateLauncherPreview();
    });

    // Pool & Count segmented controls
    document.querySelectorAll("#pool-selector .seg-btn").forEach((b) => {
      b.addEventListener("click", () => {
        quizConfig.pool = b.dataset.pool;
        document.querySelectorAll("#pool-selector .seg-btn").forEach((x) => x.classList.toggle("active", x === b));
        updateLauncherPreview();
      });
    });

    document.querySelectorAll("#count-selector .seg-btn").forEach((b) => {
      b.addEventListener("click", () => {
        quizConfig.count = Number(b.dataset.count);
        document.querySelectorAll("#count-selector .seg-btn").forEach((x) => x.classList.toggle("active", x === b));
        updateLauncherPreview();
      });
    });

    document.getElementById("shuffle-toggle").addEventListener("change", (e) => {
      quizConfig.shuffle = e.target.checked;
    });

    document.getElementById("start-quiz-btn").addEventListener("click", () => startQuizSession("study"));
    document.getElementById("start-exam-btn").addEventListener("click", () => startQuizSession("exam"));

    // Runner buttons
    document.getElementById("exit-quiz-btn").addEventListener("click", () => {
      stopTimer();
      activeSession = null;
      document.getElementById("quiz-runner").classList.add("hidden");
      document.getElementById("quiz-launcher").classList.remove("hidden");
    });

    document.getElementById("finish-quiz-early-btn").addEventListener("click", finishQuizSession);
    document.getElementById("q-bookmark-btn").addEventListener("click", toggleCurrentBookmark);

    document.getElementById("prev-q-btn").addEventListener("click", () => {
      if (activeSession && activeSession.index > 0) {
        activeSession.index -= 1;
        renderActiveQuestion();
      }
    });

    document.getElementById("next-q-btn").addEventListener("click", () => {
      if (!activeSession) return;
      if (activeSession.index < activeSession.questions.length - 1) {
        activeSession.index += 1;
        renderActiveQuestion();
      } else {
        finishQuizSession();
      }
    });

    // Results buttons
    document.getElementById("back-to-launcher-btn").addEventListener("click", () => {
      document.getElementById("quiz-results").classList.add("hidden");
      document.getElementById("quiz-launcher").classList.remove("hidden");
      updateGlobalProgress();
    });

    document.getElementById("retry-wrong-btn").addEventListener("click", () => {
      if (!lastFinishedSession) return;
      const wrongIds = lastFinishedSession.questions
        .filter((q, idx) => lastFinishedSession.answers[idx] !== q.renderCorrect)
        .map((q) => q.id);
      const rawWrong = DATA.questions.filter((q) => wrongIds.includes(q.id));
      if (rawWrong.length) startQuizSession("study", rawWrong);
    });

    document.querySelectorAll("#review-filter .seg-btn").forEach((b) => {
      b.addEventListener("click", () => {
        currentReviewFilter = b.dataset.rfilter;
        document.querySelectorAll("#review-filter .seg-btn").forEach((x) => x.classList.toggle("active", x === b));
        renderReviewList();
      });
    });

    // Notes search
    document.getElementById("notes-search").addEventListener("input", (e) => {
      notesSearchQuery = e.target.value;
      renderNotesTabs();
      renderNotesBody();
    });

    // Flashcards
    document.getElementById("fc-lesson-filter").addEventListener("change", () => rebuildFlashcardDeck(false));
    document.getElementById("fc-shuffle-btn").addEventListener("click", () => rebuildFlashcardDeck(true));
    document.getElementById("flashcard-wrap").addEventListener("click", flipFlashcard);
    document.getElementById("fc-prev-btn").addEventListener("click", () => stepFlashcard(-1));
    document.getElementById("fc-next-btn").addEventListener("click", () => stepFlashcard(1));
    document.getElementById("fc-again-btn").addEventListener("click", () => rateFlashcard("review"));
    document.getElementById("fc-know-btn").addEventListener("click", () => rateFlashcard("known"));

    // Match game
    document.getElementById("match-new-round").addEventListener("click", startMatchRound);

    // Global Keyboard Shortcuts
    document.addEventListener("keydown", (e) => {
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (currentTab === "quiz" && activeSession) {
        const key = e.key.toLowerCase();
        const map = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
        if (key === "k") {
          toggleCurrentBookmark();
          return;
        }
        if (key in map) {
          selectOption(map[key]);
          return;
        }
        if (e.key === "ArrowRight" || e.key === "Enter") {
          e.preventDefault();
          document.getElementById("next-q-btn").click();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          document.getElementById("prev-q-btn").click();
        }
      } else if (currentTab === "flashcards") {
        if (e.code === "Space") {
          e.preventDefault();
          flipFlashcard();
        } else if (e.key === "ArrowRight") {
          stepFlashcard(1);
        } else if (e.key === "ArrowLeft") {
          stepFlashcard(-1);
        } else if (e.key === "1") {
          rateFlashcard("review");
        } else if (e.key === "2") {
          rateFlashcard("known");
        }
      }
    });
  }

  // ================= INIT =================
  applyTheme();
  renderLessonChips();
  renderNotesTabs();
  renderNotesBody();
  rebuildFlashcardDeck(false);
  startMatchRound();
  renderCheatSheet();
  updateGlobalProgress();
  bindEvents();
})();
