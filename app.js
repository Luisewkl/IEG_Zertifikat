/* ============================================
   IEG Claude Academy — App Logic v6.0
   ============================================ */

// Login-Check läuft in <head> von index.html

// ===== STATE =====
var STORAGE_KEY = 'ieg-academy-progress-v1';
var state = loadLocalState();
var currentUser = { name: localStorage.getItem('ieg_user_name') || 'User' };
var currentUserId = null;   // Supabase Auth user.id, gesetzt beim App-Start

function loadLocalState() {
  try {
    var s = localStorage.getItem(STORAGE_KEY);
    if (s) return JSON.parse(s);
  } catch (e) {}
  return { completed: [], finalPassed: false, finalScore: 0, userName: '', completionDate: '' };
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

function logout() {
  if (window.sb) { try { window.sb.auth.signOut(); } catch (e) {} } // Supabase-Session beenden
  localStorage.removeItem('ieg_logged_in');
  localStorage.removeItem('ieg_user_name');
  window.location.replace('login.html');
}

function resetProgress() {
  if (!confirm(tr('confirm_reset'))) return;
  state = { completed: [], finalPassed: false, finalScore: 0, userName: '', completionDate: '' };
  saveState();
  saveProgressToSupabase();   // Reset auch in Supabase persistieren
  renderEverything();
  document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' });
}

// ===== LOCKING =====
function isModuleUnlocked(id) {
  if (id === 0) return true;
  return state.completed.indexOf(id - 1) !== -1;
}
function isFinalUnlocked() {
  for (var i = 0; i < CURRICULUM.length; i++) {
    if (state.completed.indexOf(CURRICULUM[i].id) === -1) return false;
  }
  return true;
}
function isModuleCompleted(id) { return state.completed.indexOf(id) !== -1; }

// ===== RENDER MODULES =====
function renderModules() {
  var grid = document.getElementById('modulesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  CURRICULUM.forEach(function(mod) {
    var unlocked = isModuleUnlocked(mod.id);
    var completed = isModuleCompleted(mod.id);
    var cls = completed ? 'completed' : (unlocked ? 'unlocked' : 'locked');
    var isNext = unlocked && !completed;

    var icon = completed
      ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>'
      : unlocked
        ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>'
        : '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="1"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>';

    var status = completed ? tr('mod_status_completed') : unlocked ? (isNext ? tr('mod_status_available') : tr('mod_status_unlocked')) : tr('mod_status_locked', {n: String(mod.id - 1).padStart(2, '0')});

    var modEn = (typeof MODULES_EN !== 'undefined' && MODULES_EN[mod.id]) ? MODULES_EN[mod.id] : null;
    var modTitle = (currentLang === 'en' && modEn) ? modEn.title : mod.title;
    var modMeta = (currentLang === 'en' && modEn) ? modEn.meta : mod.meta;
    var modDesc = (currentLang === 'en' && modEn) ? modEn.desc : mod.desc;
    var modDur = (currentLang === 'en' && modEn) ? modEn.duration : mod.duration;

    var card = document.createElement('div');
    card.className = 'module-card ' + cls + (isNext ? ' module-next' : '');
    card.innerHTML =
      '<div class="module-header"><div class="module-number">' + mod.number + '</div><div class="module-status-icon ' + cls + '">' + icon + '</div></div>' +
      '<div class="module-meta">' + modMeta + ' · ' + modDur + '</div>' +
      '<div class="module-title">' + modTitle + '</div>' +
      '<div class="module-desc">' + modDesc + '</div>' +
      '<div class="module-status-bar"><div class="module-status-fill" style="width:' + (completed ? 100 : 0) + '%"></div></div>' +
      '<div class="module-footer"><span class="module-status">' + status + '</span>' +
      (unlocked
        ? '<span class="module-action">' + (completed ? tr('mod_action_repeat') : tr('mod_action_start')) + ' <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>'
        : '<span class="module-action" style="color:var(--text-faint);">' + tr('mod_action_locked') + '</span>') +
      '</div>';

    if (unlocked) (function(mid) { card.onclick = function() { openModule(mid); }; })(mod.id);
    grid.appendChild(card);
  });

  // Final Exam
  var fu = isFinalUnlocked(), fp = state.finalPassed;
  var fc = fp ? 'completed unlocked' : fu ? 'unlocked' : 'locked';
  var fi = fp ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>'
    : fu ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9Z"/></svg>'
    : '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="1"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>';

  var fcard = document.createElement('div');
  fcard.className = 'module-card final-exam ' + fc;
  fcard.innerHTML =
    '<div class="module-header"><div class="module-number">08</div><div class="module-status-icon ' + fc + '">' + fi + '</div></div>' +
    '<div class="module-meta">' + tr('final_meta') + '</div>' +
    '<div class="module-title">' + tr('final_title') + '</div>' +
    '<div class="module-desc">' + tr('final_desc') + '</div>' +
    '<div class="module-footer"><span class="module-status">' + (fp ? tr('final_status_passed') : fu ? tr('final_status_available') : tr('final_status_locked')) + '</span>' +
    (fu ? '<span class="module-action">' + (fp ? tr('final_action_repeat') : tr('final_action_start')) + ' <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>'
      : '<span class="module-action" style="color:rgba(255,255,255,0.4);">' + tr('final_action_locked') + '</span>') +
    '</div>';
  if (fu) fcard.onclick = startFinalExam;
  grid.appendChild(fcard);
}

function renderProgress() {
  var t = CURRICULUM.length, c = Math.min(state.completed.length, t), p = Math.min(Math.round(c / t * 100), 100);
  var el;
  if ((el = document.getElementById('progressFill'))) el.style.width = p + '%';
  if ((el = document.getElementById('progressText'))) el.textContent = tr('progress_text', {c: c, t: t});
  if ((el = document.getElementById('progressPercent'))) el.textContent = p + '%';
  if ((el = document.getElementById('navProgress'))) el.textContent = c + '/' + t;
}

// ===== MODULE =====
function openModule(id) { window.location.href = 'modules/modul-' + String(id).padStart(2, '0') + '.html'; }
function closeModule() { var m = document.getElementById('moduleModal'); if (m) { m.style.display = 'none'; document.body.style.overflow = ''; } }

// ===== QUIZ =====
var currentQuiz = null;

function startQuiz(moduleId, isFinal) {
  var qs = isFinal ? FINAL_EXAM : CURRICULUM.find(function(m) { return m.id === moduleId; }).quiz;
  currentQuiz = {
    moduleId: moduleId, isFinal: !!isFinal, questions: qs, currentIndex: 0,
    answers: new Array(qs.length).fill(null),
    title: isFinal ? tr('quiz_final_eyebrow') : tr('quiz_module_title', {n: String(moduleId).padStart(2,'0')}),
    subtitle: tr('quiz_questions_n', {n: qs.length}) + ' · ' + PASS_THRESHOLD + '%'
  };
  var m = document.getElementById('quizModal');
  if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
  renderQuizQuestion();
}

function renderQuizQuestion() {
  var q = currentQuiz.questions[currentQuiz.currentIndex], i = currentQuiz.currentIndex, n = currentQuiz.questions.length;
  var ua = currentQuiz.answers[i], done = ua !== null;

  var dots = currentQuiz.questions.map(function(_, j) {
    return '<div class="quiz-dot' + (j === i ? ' active' : currentQuiz.answers[j] !== null ? ' done' : '') + '"></div>';
  }).join('');

  var opts = q.options.map(function(o, j) {
    var c = 'quiz-option' + (done ? (j === q.correct ? ' correct' : j === ua ? ' wrong' : '') : '');
    return '<button class="' + c + '" ' + (done ? 'disabled' : '') + ' onclick="answerQuestion(' + j + ')"><span class="quiz-option-marker">' + String.fromCharCode(65+j) + '</span><span>' + o + '</span></button>';
  }).join('');

  var expl = done ? '<div class="quiz-explanation"><strong>' + (ua === q.correct ? tr('quiz_correct') : tr('quiz_wrong')) + '</strong> ' + q.explanation + '</div>' : '';
  var last = i === n - 1, all = currentQuiz.answers.every(function(a) { return a !== null; });
  var nav = '<div class="quiz-nav"><button class="btn btn-ghost" onclick="prevQuestion()" style="color:var(--text);border:1px solid var(--bone-soft);' + (i === 0 ? 'opacity:.3' : '') + '" ' + (i === 0 ? 'disabled' : '') + '>' + tr('quiz_back') + '</button>' +
    (done ? (last && all ? '<button class="btn btn-primary" onclick="finishQuiz()">' + tr('quiz_submit') + '</button>' : '<button class="btn btn-primary" onclick="nextQuestion()">' + tr('quiz_next') + '</button>') : '<span style="color:var(--text-faint);font-size:13px;">' + tr('quiz_select_answer') + '</span>') + '</div>';

  var b = document.getElementById('quizModalBody');
  if (b) b.innerHTML = '<div class="quiz-header"><div class="quiz-eyebrow">' + currentQuiz.title + '</div><div class="quiz-title">' + tr('quiz_question_label') + ' ' + (i+1) + ' ' + tr('quiz_of') + ' ' + n + '</div><div class="quiz-subtitle">' + currentQuiz.subtitle + '</div></div><div class="quiz-progress">' + dots + '</div><div class="quiz-question">' + q.q + '</div><div class="quiz-options">' + opts + '</div>' + expl + nav;
}

function answerQuestion(j) { currentQuiz.answers[currentQuiz.currentIndex] = j; renderQuizQuestion(); }
function nextQuestion() { if (currentQuiz.currentIndex < currentQuiz.questions.length - 1) { currentQuiz.currentIndex++; renderQuizQuestion(); } }
function prevQuestion() { if (currentQuiz.currentIndex > 0) { currentQuiz.currentIndex--; renderQuizQuestion(); } }

function finishQuiz() {
  var t = currentQuiz.questions.length, c = 0;
  currentQuiz.questions.forEach(function(q, i) { if (currentQuiz.answers[i] === q.correct) c++; });
  var pct = Math.round(c / t * 100), pass = pct >= PASS_THRESHOLD;

  if (pass) {
    if (currentQuiz.isFinal) {
      state.finalPassed = true;
      state.finalScore = pct;
      // completion_date nur beim ERSTEN bestandenen Final-Quiz setzen
      if (!state.completionDate) state.completionDate = new Date().toISOString();
    }
    else if (state.completed.indexOf(currentQuiz.moduleId) === -1) state.completed.push(currentQuiz.moduleId);
    saveState();
    saveProgressToSupabase();   // Save progress to Supabase (Modul bestanden / Final bestanden)
  }

  var b = document.getElementById('quizModalBody');
  if (b) b.innerHTML = '<div class="quiz-result"><div class="quiz-result-icon ' + (pass ? 'pass' : 'fail') + '">' + (pass ? '✓' : '!') + '</div>' +
    '<div class="quiz-result-title">' + (pass ? (currentQuiz.isFinal ? tr('quiz_result_pass_final') : tr('quiz_result_pass_module')) : tr('quiz_result_fail')) + '</div>' +
    '<div class="quiz-result-score">' + c + '/' + t + ' · ' + pct + '%</div>' +
    '<div class="quiz-result-msg">' + (pass ? (currentQuiz.isFinal ? tr('quiz_result_cert') : tr('quiz_result_next')) : tr('quiz_result_min', {p: PASS_THRESHOLD})) + '</div>' +
    '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">' +
    (pass ? (currentQuiz.isFinal ? '<button class="btn btn-primary" onclick="closeQuiz();showCertificate();">' + tr('quiz_btn_certificate') + '</button>' : '<button class="btn btn-primary" onclick="closeQuiz();renderEverything();">' + tr('quiz_btn_continue') + '</button>')
      : '<button class="btn btn-primary" onclick="restartQuiz()">' + tr('quiz_btn_retry') + '</button>') + '</div></div>';
}

function restartQuiz() { startQuiz(currentQuiz.moduleId, currentQuiz.isFinal); }
function closeQuiz() {
  // Laufende, noch nicht abgegebene Abschlussprüfung: Stand sichern statt verwerfen
  if (currentQuiz && currentQuiz.isFinal && !currentQuiz.submitted) saveExamState();
  clearExamTimer();
  var m = document.getElementById('quizModal'); if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
  currentQuiz = null; renderEverything();
}

// ============================================
//  FINAL EXAM — Professioneller Prüfungsmodus
//  Persistenter Zustand, Timer, Frage-Palette,
//  Markierungen, Bestätigung & Auto-Speicherung.
// ============================================

var EXAM_STORAGE_KEY = 'ieg-academy-final-exam-v1';
var FINAL_EXAM_DURATION_SEC = 40 * 60;   // 40 Minuten für 40 Fragen
var examTimerId = null;

// ----- Persistenz -----
function saveExamState() {
  if (!currentQuiz || !currentQuiz.isFinal) return;
  try {
    localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify({
      started: currentQuiz.started,
      submitted: currentQuiz.submitted,
      currentIndex: currentQuiz.currentIndex,
      answers: currentQuiz.answers,
      flagged: currentQuiz.flagged,
      endsAt: currentQuiz.endsAt,
      durationSec: currentQuiz.durationSec,
      startedAt: currentQuiz.startedAt,
      timeLeft: Math.max(0, Math.round((currentQuiz.endsAt - Date.now()) / 1000)),
      savedAt: Date.now()
    }));
  } catch (e) {}
}
function loadExamState() {
  try { var s = localStorage.getItem(EXAM_STORAGE_KEY); if (s) return JSON.parse(s); } catch (e) {}
  return null;
}
function clearExamState() {
  try { localStorage.removeItem(EXAM_STORAGE_KEY); } catch (e) {}
}

// Bringt ein (ggf. veraltetes) Array auf die korrekte Länge des aktuellen Fragensatzes.
function normalizeExamArray(arr, len, fill) {
  var out = new Array(len);
  for (var i = 0; i < len; i++) {
    out[i] = (arr && i < arr.length && arr[i] !== undefined && arr[i] !== null) ? arr[i] : fill;
  }
  return out;
}

// ----- Timer -----
function clearExamTimer() { if (examTimerId) { clearInterval(examTimerId); examTimerId = null; } }
function startExamTimer() {
  clearExamTimer();                 // verhindert doppelte Intervalle
  examTimerId = setInterval(tickExamTimer, 1000);
  tickExamTimer();
}
function examRemainingSec() {
  if (!currentQuiz) return 0;
  return Math.max(0, Math.round((currentQuiz.endsAt - Date.now()) / 1000));
}
function tickExamTimer() {
  if (!currentQuiz || !currentQuiz.isFinal || currentQuiz.submitted) { clearExamTimer(); return; }
  var remaining = examRemainingSec();
  updateTimerDisplay(remaining);
  if (remaining <= 0) { clearExamTimer(); finishExam(true); }
}
function updateTimerDisplay(sec) {
  var el = document.getElementById('examTimer');
  if (el) el.textContent = formatExamTime(sec);
  var pill = document.getElementById('examTimerPill');
  if (pill) pill.classList.toggle('warn', sec <= 300);   // letzte 5 Minuten hervorheben
}
function formatExamTime(sec) {
  var m = Math.floor(sec / 60), s = sec % 60;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

// ----- Modal-Helfer -----
function openExamModal() {
  var m = document.getElementById('quizModal');
  if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}

// ----- Einstieg -----
// Aufgerufen über die Final-Exam-Karte. Setzt eine laufende Prüfung NICHT zurück,
// sondern nimmt sie genau an der gespeicherten Stelle wieder auf.
function startFinalExam() {
  if (!isFinalUnlocked()) return;
  if (!state.userName) { state.userName = currentUser.name; saveState(); }
  var saved = loadExamState();
  if (saved && saved.started && !saved.submitted) { resumeExam(saved, false); return; }
  openExamModal();
  renderExamIntro();
}

// Vom Namens-Dialog (optional genutzt) — startet eine frische Prüfung.
function submitName() {
  var inp = document.getElementById('userNameInput'), n = inp ? inp.value.trim() : '';
  if (n.length < 2) { if (inp) inp.style.borderColor = 'var(--rust)'; return; }
  state.userName = n; saveState();
  var nm = document.getElementById('nameModal'); if (nm) { nm.style.display = 'none'; document.body.style.overflow = ''; }
  beginExam();
}

// Frische Prüfung initialisieren
function beginExam() {
  clearExamTimer();
  var n = FINAL_EXAM.length;
  currentQuiz = {
    isFinal: true, started: true, submitted: false,
    questions: FINAL_EXAM,
    currentIndex: 0,
    answers: new Array(n).fill(null),
    flagged: new Array(n).fill(false),
    durationSec: FINAL_EXAM_DURATION_SEC,
    startedAt: Date.now(),
    endsAt: Date.now() + FINAL_EXAM_DURATION_SEC * 1000,
    restored: false
  };
  saveExamState();
  openExamModal();
  startExamTimer();
  renderExamQuestion();
}

// Gespeicherten Stand wieder aufnehmen. showBanner=true blendet den Hinweis ein.
function resumeExam(saved, showBanner) {
  clearExamTimer();
  var n = FINAL_EXAM.length;
  currentQuiz = {
    isFinal: true, started: true, submitted: false,
    questions: FINAL_EXAM,
    currentIndex: Math.min(Math.max(saved.currentIndex || 0, 0), n - 1),
    answers: normalizeExamArray(saved.answers, n, null),
    flagged: normalizeExamArray(saved.flagged, n, false),
    durationSec: saved.durationSec || FINAL_EXAM_DURATION_SEC,
    startedAt: saved.startedAt || Date.now(),
    endsAt: saved.endsAt || (Date.now() + (saved.timeLeft || FINAL_EXAM_DURATION_SEC) * 1000),
    restored: !!showBanner
  };
  openExamModal();
  if (examRemainingSec() <= 0) { finishExam(true); return; }
  startExamTimer();
  renderExamQuestion();
}

// Beim Laden der Seite: gibt es eine laufende, nicht abgegebene Prüfung? → fortsetzen.
function restoreExamUI() {
  if (typeof FINAL_EXAM === 'undefined' || !FINAL_EXAM.length) return;
  var saved = loadExamState();
  if (!saved || !saved.started || saved.submitted) return;
  resumeExam(saved, true);
}

// ----- Interaktionen -----
function selectExamAnswer(j) {
  if (!currentQuiz || currentQuiz.submitted) return;
  currentQuiz.answers[currentQuiz.currentIndex] = j;
  saveExamState();
  renderExamQuestion();
}
function toggleExamFlag() {
  if (!currentQuiz) return;
  var i = currentQuiz.currentIndex;
  currentQuiz.flagged[i] = !currentQuiz.flagged[i];
  saveExamState();
  renderExamQuestion();
}
function examGoto(i) {
  if (!currentQuiz || i < 0 || i >= currentQuiz.questions.length) return;
  currentQuiz.currentIndex = i;
  saveExamState();
  renderExamQuestion();
}
function examNext() { examGoto(currentQuiz.currentIndex + 1); }
function examPrev() { examGoto(currentQuiz.currentIndex - 1); }

// ----- Abgabe -----
function confirmExamSubmit() { renderExamConfirm(); }
function cancelExamSubmit() { renderExamQuestion(); }

function finishExam(auto) {
  clearExamTimer();
  if (!currentQuiz || currentQuiz.submitted) return;
  currentQuiz.submitted = true;

  var t = currentQuiz.questions.length, c = 0;
  currentQuiz.questions.forEach(function(q, i) { if (currentQuiz.answers[i] === q.correct) c++; });
  var pct = Math.round(c / t * 100), pass = pct >= PASS_THRESHOLD;

  if (pass) {
    state.finalPassed = true;
    state.finalScore = pct;
    if (!state.completionDate) state.completionDate = new Date().toISOString();
    saveState();
    saveProgressToSupabase();
  } else if (pct > (state.finalScore || 0)) {
    state.finalScore = pct;        // besten Versuch behalten
    saveState();
    saveProgressToSupabase();
  }

  // Abgabe ist abgeschlossen → persistenten Prüfungsstand entfernen
  clearExamState();
  renderExamResult(c, t, pct, pass, !!auto);
}

function retryExam() { clearExamState(); beginExam(); }

// ----- Rendering -----
function renderExamHtml(html) {
  var b = document.getElementById('quizModalBody');
  if (b) b.innerHTML = html;
}

function renderExamIntro() {
  var n = FINAL_EXAM.length;
  var mins = Math.round(FINAL_EXAM_DURATION_SEC / 60);
  renderExamHtml(
    '<div class="exam-intro">' +
      '<div class="quiz-eyebrow">' + tr('exam_eyebrow') + '</div>' +
      '<h2 class="quiz-title" style="text-align:center;">' + tr('exam_title') + '</h2>' +
      '<div class="exam-intro-meta">' +
        '<span>' + tr('exam_questions', {n: '<strong>' + n + '</strong>'}) + '</span>' +
        '<span>' + tr('exam_pass_threshold', {p: '<strong>' + PASS_THRESHOLD + '</strong>'}) + '</span>' +
        '<span>' + tr('exam_duration', {m: '<strong>' + mins + '</strong>'}) + '</span>' +
      '</div>' +
      '<div class="exam-intro-rules">' +
        examRule(tr('exam_rule_1')) +
        examRule(tr('exam_rule_2')) +
        examRule(tr('exam_rule_3')) +
        examRule(tr('exam_rule_4')) +
      '</div>' +
      '<div style="text-align:center;">' +
        '<button class="btn btn-primary" onclick="beginExam()">' + tr('exam_start_btn') + ' ' +
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></button>' +
      '</div>' +
    '</div>'
  );
}
function examRule(text) {
  return '<div class="exam-intro-rule">' +
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;color:var(--ieg-blue);margin-top:1px;"><path d="M20 6L9 17l-5-5"/></svg>' +
    '<span>' + text + '</span></div>';
}

function renderExamQuestion() {
  if (!currentQuiz) return;
  var i = currentQuiz.currentIndex, n = currentQuiz.questions.length, q = currentQuiz.questions[i];
  var answeredCount = currentQuiz.answers.filter(function(a) { return a !== null; }).length;
  var remaining = examRemainingSec();
  var pctDone = Math.round(answeredCount / n * 100);

  var head =
    '<div class="exam-head">' +
      '<div class="exam-head-row">' +
        '<div class="exam-head-left">' +
          '<div class="exam-eyebrow">' + tr('exam_eyebrow') + '</div>' +
          '<div class="exam-qnum">' + tr('exam_question_label') + ' <strong>' + (i + 1) + '</strong> ' + tr('exam_of') + ' ' + n + '</div>' +
        '</div>' +
        '<div class="exam-head-right">' +
          '<div class="exam-answered"><span>' + tr('exam_answered_label') + '</span><strong>' + answeredCount + ' / ' + n + '</strong></div>' +
          '<div class="exam-timer-pill' + (remaining <= 300 ? ' warn' : '') + '" id="examTimerPill">' +
            '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>' +
            '<span id="examTimer">' + formatExamTime(remaining) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="exam-progress-line"><div class="exam-progress-line-fill" style="width:' + pctDone + '%"></div></div>' +
    '</div>';

  var banner = currentQuiz.restored
    ? '<div class="exam-restored-banner">' +
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>' +
        '<span>' + tr('exam_restored') + '</span>' +
      '</div>'
    : '';

  var ua = currentQuiz.answers[i];
  var opts = q.options.map(function(o, j) {
    var cls = 'quiz-option' + (j === ua ? ' selected' : '');
    return '<button class="' + cls + '" onclick="selectExamAnswer(' + j + ')">' +
      '<span class="quiz-option-marker">' + String.fromCharCode(65 + j) + '</span><span>' + o + '</span></button>';
  }).join('');

  var flagged = currentQuiz.flagged[i];
  var flagBtn = '<button class="exam-flag-btn' + (flagged ? ' active' : '') + '" onclick="toggleExamFlag()">' +
    '<svg viewBox="0 0 24 24" width="15" height="15" fill="' + (flagged ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>' +
    (flagged ? tr('exam_flag_remove') : tr('exam_flag_add')) + '</button>';

  var actions =
    '<div class="exam-actions">' +
      '<button class="btn btn-secondary"' + (i === 0 ? ' disabled' : '') + ' onclick="examPrev()">' + tr('exam_back') + '</button>' +
      '<div class="exam-actions-right">' +
        '<button class="btn btn-secondary"' + (i === n - 1 ? ' disabled' : '') + ' onclick="examNext()">' + tr('exam_next') + '</button>' +
        '<button class="btn btn-primary" onclick="confirmExamSubmit()">' + tr('exam_submit') + '</button>' +
      '</div>' +
    '</div>';

  renderExamHtml(
    head + banner +
    '<div class="quiz-question">' + q.q + '</div>' +
    '<div class="quiz-options">' + opts + '</div>' +
    '<div class="exam-flag-row">' + flagBtn + '</div>' +
    actions
  );

  currentQuiz.restored = false;   // Banner nur einmalig zeigen
}

function renderExamConfirm() {
  if (!currentQuiz) return;
  var n = currentQuiz.questions.length;
  var answered = currentQuiz.answers.filter(function(a) { return a !== null; }).length;
  var unanswered = n - answered;
  var flaggedCount = currentQuiz.flagged.filter(Boolean).length;

  var qWord = function(cnt) { return cnt === 1 ? tr('exam_confirm_question_s') : tr('exam_confirm_question_p'); };
  var warn = (unanswered > 0 || flaggedCount > 0)
    ? '<div class="exam-confirm-summary">' +
        (unanswered > 0 ? '<div class="exam-confirm-row warn"><strong>' + unanswered + '</strong> ' + qWord(unanswered) + ' ' + tr('exam_confirm_unanswered_1') + '</div>' : '') +
        (flaggedCount > 0 ? '<div class="exam-confirm-row"><strong>' + flaggedCount + '</strong> ' + qWord(flaggedCount) + ' ' + tr('exam_confirm_flagged_1') + '</div>' : '') +
      '</div>'
    : '<div class="exam-confirm-summary"><div class="exam-confirm-row ok">' + tr('exam_confirm_all_answered', {n: n}) + '</div></div>';

  renderExamHtml(
    '<div class="exam-confirm">' +
      '<div class="quiz-eyebrow">' + tr('exam_confirm_eyebrow') + '</div>' +
      '<h2 class="quiz-title" style="text-align:center;">' + tr('exam_confirm_title') + '</h2>' +
      '<p class="exam-confirm-lede">' + tr('exam_confirm_lede') + '</p>' +
      warn +
      '<div class="exam-confirm-actions">' +
        '<button class="btn btn-secondary" onclick="cancelExamSubmit()">' + tr('exam_confirm_back') + '</button>' +
        '<button class="btn btn-danger" onclick="finishExam(false)">' + tr('exam_confirm_submit') + '</button>' +
      '</div>' +
    '</div>'
  );
}

function renderExamResult(c, t, pct, pass, auto) {
  renderExamHtml(
    '<div class="quiz-result">' +
      '<div class="quiz-result-icon ' + (pass ? 'pass' : 'fail') + '">' + (pass ? '✓' : '!') + '</div>' +
      '<div class="quiz-result-title">' + (pass ? tr('exam_result_pass') : tr('exam_result_fail')) + '</div>' +
      '<div class="quiz-result-score">' + c + '/' + t + ' · ' + pct + '%</div>' +
      (auto ? '<div class="exam-result-auto">' + tr('exam_result_auto') + '</div>' : '') +
      '<div class="quiz-result-msg">' + (pass ? tr('exam_result_cert') : tr('exam_result_retry_msg', {p: PASS_THRESHOLD})) + '</div>' +
      '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">' +
        (pass
          ? '<button class="btn btn-primary" onclick="closeQuiz();showCertificate();">' + tr('exam_result_to_cert') + '</button>'
          : '<button class="btn btn-primary" onclick="retryExam()">' + tr('exam_result_retry') + '</button>' +
            '<button class="btn btn-secondary" onclick="closeQuiz()">' + tr('exam_result_close') + '</button>') +
      '</div>' +
    '</div>'
  );
}

// Warnung beim Verlassen, solange die Prüfung läuft und nicht abgegeben wurde.
function examBeforeUnload(e) {
  if (currentQuiz && currentQuiz.isFinal && currentQuiz.started && !currentQuiz.submitted) {
    saveExamState();          // Stand unmittelbar vor dem Verlassen sichern
    e.preventDefault();
    e.returnValue = '';
    return '';
  }
}
window.addEventListener('beforeunload', examBeforeUnload);

// ===== CERTIFICATE =====
function showCertificate() { var el = document.getElementById('certificate'); if (el) el.scrollIntoView({behavior:'smooth'}); renderCertificate(); }

function renderCertificate() {
  var lo = document.getElementById('certLockedState'), un = document.getElementById('certUnlockedState');
  if (!lo || !un) return;
  if (!state.finalPassed) {
    lo.style.display = 'block'; un.style.display = 'none';
    var s = document.getElementById('certStatus');
    if (s) s.textContent = isFinalUnlocked() ? tr('cert_status_exam_available') : tr('cert_status_progress', {c: state.completed.length});
    return;
  }
  lo.style.display = 'none'; un.style.display = 'block';
  var d = new Date(state.completionDate || Date.now());
  var ds = d.toLocaleDateString(tr('date_locale'), {year:'numeric',month:'long',day:'numeric'});

  // Stable credential ID: generate once, store in state
  if (!state.credentialId) {
    state.credentialId = 'IEG-' + d.getFullYear() + String(d.getMonth()+1).padStart(2,'0') + String(d.getDate()).padStart(2,'0') + '-' + Math.random().toString(36).substr(2,6).toUpperCase();
    saveState(state);
  }
  var cid = state.credentialId;
  // verifyUrl intentionally removed — no public verification endpoint exists

  un.innerHTML =
    '<div class="section-eyebrow">' + tr('cert_doc_eyebrow') + '</div>' +
    '<h2 class="section-title">' + tr('cert_doc_title') + '</h2>' +
    '<p class="section-lede" style="margin-bottom:48px">' + tr('cert_doc_lede') + '</p>' +
    '<div class="certificate" id="certDoc">' +
      '<div class="cert-corner cert-corner-tl"></div><div class="cert-corner cert-corner-tr"></div>' +
      '<div class="cert-corner cert-corner-bl"></div><div class="cert-corner cert-corner-br"></div>' +
      '<img src="assets/ieg-logo.png" alt="IEG" class="cert-logo-img">' +
      '<div class="cert-issuing-line">IEG Investment Banking Group · Internal Training</div>' +
      '<div class="cert-this-certifies">' + tr('cert_doc_certifies') + '</div>' +
      '<div class="cert-name">' + esc(state.userName) + '</div>' +
      '<div class="cert-completed">' + tr('cert_doc_completed') + '</div>' +
      '<div class="cert-program">IEG Claude Academy</div>' +
      '<div class="cert-program-sub">Künstliche Intelligenz im Investment Banking · 7 Module · Final Examination</div>' +
      '<div class="cert-meta">' +
        '<div class="cert-meta-item"><div class="cert-meta-label">' + tr('cert_doc_date_label') + '</div><div class="cert-meta-value">' + ds + '</div></div>' +
        '<div class="cert-meta-item"><div class="cert-meta-label">Credential ID</div><div class="cert-meta-value cert-meta-mono">' + cid + '</div></div>' +
        '<div class="cert-meta-item"><div class="cert-meta-label">' + tr('cert_doc_issued_label') + '</div><div class="cert-meta-value cert-signature">Stefan Heilmann</div><div class="cert-meta-role">Group CEO, IEG</div></div>' +
      '</div>' +
      '<div class="cert-verify">Credential ID: <span class="cert-meta-mono">' + cid + '</span></div>' +
    '</div>' +
    '<div class="cert-actions">' +
      '<button class="btn btn-primary" onclick="printCertificate()">' +
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' +
        tr('cert_doc_save') +
      '</button>' +
    '</div>';
}

function printCertificate() {
  var cert = document.getElementById('certDoc');
  if (!cert) return;
  var html = cert.outerHTML;
  var win = window.open('', '_blank', 'width=1200,height=800');
  win.document.write('<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8">');
  win.document.write('<base href="' + window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/') + '">');
  win.document.write('<link rel="preconnect" href="https://fonts.googleapis.com">');
  win.document.write('<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">');
  win.document.write('<link rel="stylesheet" href="styles.css">');
  win.document.write('<style>@page{size:A4 landscape;margin:0}body{margin:0;padding:40px;background:white;display:flex;align-items:center;justify-content:center;min-height:100vh;box-sizing:border-box}.certificate{box-shadow:none!important;border:2px solid #0A1A33;max-width:900px;width:100%}</style>');
  win.document.write('</head><body>' + html + '</body></html>');
  win.document.close();
  win.onload = function() { win.focus(); win.print(); };
}

function esc(s) { return String(s).replace(/[&<>"']/g, function(c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

// ===== USER DISPLAY =====
function updateUserDisplay() {
  var el = document.getElementById('userDisplayName');
  if (el) el.textContent = currentUser.name;
  if (!state.userName) { state.userName = currentUser.name; saveState(); }
}

// ===== NAV =====
function setupNavObserver() {
  var secs = ['home','curriculum','team','certificate'];
  var links = document.querySelectorAll('.nav-link');
  var obs = new IntersectionObserver(function(es) {
    es.forEach(function(e) { if (e.isIntersecting) links.forEach(function(l) { l.classList.toggle('active', l.dataset.nav === e.target.id); }); });
  }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });
  secs.forEach(function(id) { var el = document.getElementById(id); if (el) obs.observe(el); });
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { var q = document.getElementById('quizModal'); if (q && q.style.display === 'flex') closeQuiz(); }
});

// ===== RENDER =====
function renderEverything() { updateUserDisplay(); renderModules(); renderProgress(); renderCertificate(); }

// ===== SUPABASE PROGRESS SYNC =====
// Lädt den Datensatz aus user_progress und führt ihn mit dem lokalen Stand
// zusammen (Union), damit Fortschritt aus den Modul-Seiten nicht verloren geht.
async function loadProgressFromSupabase() {
  if (!window.sb || !currentUserId) return;

  // Lokalen Stand merken (z. B. gerade in einer Modul-Seite abgeschlossen)
  var localCompleted   = Array.isArray(state.completed) ? state.completed.slice() : [];
  var localFinalPassed = !!state.finalPassed;
  var localScore       = state.finalScore || 0;
  var localDate        = state.completionDate || '';

  // Load progress from Supabase (ein Datensatz pro user_id)
  var res = await window.sb.from('user_progress')
    .select('completed_modules, final_passed, final_score, completion_date')
    .eq('user_id', currentUserId)
    .maybeSingle();

  if (res.error) { console.warn('Supabase load error:', res.error.message); return; }

  var remoteCompleted = [], remoteFinalPassed = false, remoteScore = 0, remoteDate = '';
  if (res.data) {
    remoteCompleted   = Array.isArray(res.data.completed_modules) ? res.data.completed_modules : [];
    remoteFinalPassed = !!res.data.final_passed;
    remoteScore       = res.data.final_score || 0;
    remoteDate        = res.data.completion_date || '';
  }

  // Merge: Vereinigung der abgeschlossenen Module (lokal + Supabase)
  var mergedSet = {};
  localCompleted.concat(remoteCompleted).forEach(function(id) { mergedSet[id] = true; });
  var merged = Object.keys(mergedSet).map(Number).sort(function(a, b) { return a - b; });

  state.completed      = merged;
  state.finalPassed    = localFinalPassed || remoteFinalPassed;
  state.finalScore     = Math.max(localScore, remoteScore);
  state.completionDate = remoteDate || localDate || '';
  saveState(); // lokaler Cache

  // Wenn lokal weiter war als Supabase (oder noch kein Datensatz existiert),
  // den zusammengeführten Stand zurück nach Supabase schreiben.
  var localAhead = !res.data
    || merged.length > remoteCompleted.length
    || (state.finalPassed && !remoteFinalPassed)
    || (state.finalScore > remoteScore);
  if (localAhead) await saveProgressToSupabase();
}

// Schreibt den aktuellen State nach Supabase (upsert über user_id).
async function saveProgressToSupabase() {
  if (!window.sb || !currentUserId) return; // nicht eingeloggt → nur localStorage
  // Save progress to Supabase (upsert: anlegen oder aktualisieren)
  var res = await window.sb.from('user_progress').upsert({
    user_id: currentUserId,
    completed_modules: state.completed,
    final_passed: state.finalPassed,
    final_score: state.finalScore || 0,
    completion_date: state.completionDate || null
  }, { onConflict: 'user_id' });
  if (res.error) console.warn('Supabase save error:', res.error.message);
}

// ===== START =====
async function initApp() {
  renderEverything();   // sofortiges Rendern aus lokalem Cache (schneller First Paint)
  setupNavObserver();
  restoreExamUI();      // laufende Abschlussprüfung nach Reload/Schließen fortsetzen

  if (!window.sb) return; // kein Supabase verfügbar → reiner localStorage-Modus

  // Supabase Auth prüfen: ist ein Nutzer eingeloggt?
  var ures = await window.sb.auth.getUser();
  var user = ures && ures.data ? ures.data.user : null;

  if (user) {
    currentUserId = user.id;
    if (user.user_metadata && user.user_metadata.full_name) {
      currentUser.name = user.user_metadata.full_name;
    }
    await loadProgressFromSupabase();   // Supabase = Source of Truth
    renderEverything();                 // UI mit echten Daten neu rendern
  }
  // Kein User → anonyme Ansicht; index.html leitet ohne Login ohnehin auf login.html um
}

initApp();
