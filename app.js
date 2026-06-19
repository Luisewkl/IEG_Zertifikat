/* ============================================
   IEG Claude Academy — App Logic v6.0
   ============================================ */

// Login-Check läuft in <head> von index.html

// ===== STATE =====
var STORAGE_KEY = 'ieg-academy-progress-v1';
var state = loadLocalState();
var currentUser = { name: localStorage.getItem('ieg_user_name') || 'User' };
var previewMode = false;

function loadLocalState() {
  try {
    var s = localStorage.getItem(STORAGE_KEY);
    if (s) return JSON.parse(s);
  } catch (e) {}
  return { completed: [], finalPassed: false, userName: '', completionDate: '' };
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

function logout() {
  localStorage.removeItem('ieg_logged_in');
  localStorage.removeItem('ieg_user_name');
  window.location.replace('login.html');
}

function resetProgress() {
  if (!confirm('Gesamten Lernfortschritt zurücksetzen?')) return;
  state = { completed: [], finalPassed: false, userName: '', completionDate: '' };
  saveState();
  renderEverything();
  document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' });
}

function togglePreviewMode() {
  previewMode = !previewMode;
  var btn = document.getElementById('previewToggle');
  if (btn) {
    btn.classList.toggle('active', previewMode);
    btn.textContent = previewMode ? '✓ Vorschau aktiv' : 'Vorschau aktivieren';
  }
  renderEverything();
}

// ===== LOCKING =====
function isModuleUnlocked(id) {
  if (previewMode) return true;
  if (id === 0) return true;
  return state.completed.indexOf(id - 1) !== -1;
}
function isFinalUnlocked() {
  if (previewMode) return true;
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
    var isNext = unlocked && !completed && !previewMode;

    var icon = completed
      ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>'
      : unlocked
        ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>'
        : '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="1"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>';

    var status = completed ? 'Abgeschlossen' : unlocked ? (isNext ? '▶ Jetzt verfügbar' : 'Verfügbar') : 'Erst nach Modul ' + String(mod.id - 1).padStart(2, '0');

    var card = document.createElement('div');
    card.className = 'module-card ' + cls + (isNext ? ' module-next' : '');
    card.innerHTML =
      '<div class="module-header"><div class="module-number">' + mod.number + '</div><div class="module-status-icon ' + cls + '">' + icon + '</div></div>' +
      '<div class="module-meta">' + mod.meta + ' · ' + mod.duration + '</div>' +
      '<div class="module-title">' + mod.title + '</div>' +
      '<div class="module-desc">' + mod.desc + '</div>' +
      '<div class="module-status-bar"><div class="module-status-fill" style="width:' + (completed ? 100 : 0) + '%"></div></div>' +
      '<div class="module-footer"><span class="module-status">' + status + '</span>' +
      (unlocked
        ? '<span class="module-action">' + (completed ? 'Wiederholen' : 'Jetzt starten') + ' <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>'
        : '<span class="module-action" style="color:var(--text-faint);">🔒 Gesperrt</span>') +
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
    '<div class="module-header"><div class="module-number">07</div><div class="module-status-icon ' + fc + '">' + fi + '</div></div>' +
    '<div class="module-meta">Abschlussprüfung · 40 Fragen</div>' +
    '<div class="module-title">IEG Claude Academy — Abschlussprüfung</div>' +
    '<div class="module-desc">Das Abschluss-Examen über alle Module. Pass-Threshold: 70 %.</div>' +
    '<div class="module-footer"><span class="module-status">' + (fp ? 'Bestanden' : fu ? 'Verfügbar' : 'Alle Module abschließen') + '</span>' +
    (fu ? '<span class="module-action">' + (fp ? 'Wiederholen' : 'Prüfung starten') + ' <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>'
      : '<span class="module-action" style="color:rgba(255,255,255,0.4);">🔒 Gesperrt</span>') +
    '</div>';
  if (fu) fcard.onclick = startFinalExam;
  grid.appendChild(fcard);
}

function renderProgress() {
  var t = CURRICULUM.length, c = Math.min(state.completed.length, t), p = Math.min(Math.round(c / t * 100), 100);
  var el;
  if ((el = document.getElementById('progressFill'))) el.style.width = p + '%';
  if ((el = document.getElementById('progressText'))) el.textContent = c + ' von ' + t + ' Modulen abgeschlossen';
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
    title: isFinal ? 'Abschlussprüfung' : 'Modul ' + String(moduleId).padStart(2,'0') + ' · Quiz',
    subtitle: qs.length + ' Fragen · ' + PASS_THRESHOLD + '%'
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

  var expl = done ? '<div class="quiz-explanation"><strong>' + (ua === q.correct ? '✓ Richtig.' : '✗ Nicht ganz.') + '</strong> ' + q.explanation + '</div>' : '';
  var last = i === n - 1, all = currentQuiz.answers.every(function(a) { return a !== null; });
  var nav = '<div class="quiz-nav"><button class="btn btn-ghost" onclick="prevQuestion()" style="color:var(--text);border:1px solid var(--bone-soft);' + (i === 0 ? 'opacity:.3' : '') + '" ' + (i === 0 ? 'disabled' : '') + '>← Zurück</button>' +
    (done ? (last && all ? '<button class="btn btn-primary" onclick="finishQuiz()">Auswerten →</button>' : '<button class="btn btn-primary" onclick="nextQuestion()">Nächste →</button>') : '<span style="color:var(--text-faint);font-size:13px;">Antwort wählen</span>') + '</div>';

  var b = document.getElementById('quizModalBody');
  if (b) b.innerHTML = '<div class="quiz-header"><div class="quiz-eyebrow">' + currentQuiz.title + '</div><div class="quiz-title">Frage ' + (i+1) + ' von ' + n + '</div><div class="quiz-subtitle">' + currentQuiz.subtitle + '</div></div><div class="quiz-progress">' + dots + '</div><div class="quiz-question">' + q.q + '</div><div class="quiz-options">' + opts + '</div>' + expl + nav;
}

function answerQuestion(j) { currentQuiz.answers[currentQuiz.currentIndex] = j; renderQuizQuestion(); }
function nextQuestion() { if (currentQuiz.currentIndex < currentQuiz.questions.length - 1) { currentQuiz.currentIndex++; renderQuizQuestion(); } }
function prevQuestion() { if (currentQuiz.currentIndex > 0) { currentQuiz.currentIndex--; renderQuizQuestion(); } }

function finishQuiz() {
  var t = currentQuiz.questions.length, c = 0;
  currentQuiz.questions.forEach(function(q, i) { if (currentQuiz.answers[i] === q.correct) c++; });
  var pct = Math.round(c / t * 100), pass = pct >= PASS_THRESHOLD;

  if (pass) {
    if (currentQuiz.isFinal) { state.finalPassed = true; state.completionDate = new Date().toISOString(); }
    else if (state.completed.indexOf(currentQuiz.moduleId) === -1) state.completed.push(currentQuiz.moduleId);
    saveState();
  }

  var b = document.getElementById('quizModalBody');
  if (b) b.innerHTML = '<div class="quiz-result"><div class="quiz-result-icon ' + (pass ? 'pass' : 'fail') + '">' + (pass ? '✓' : '!') + '</div>' +
    '<div class="quiz-result-title">' + (pass ? (currentQuiz.isFinal ? 'Bestanden!' : 'Modul abgeschlossen') : 'Knapp daneben') + '</div>' +
    '<div class="quiz-result-score">' + c + '/' + t + ' · ' + pct + '%</div>' +
    '<div class="quiz-result-msg">' + (pass ? (currentQuiz.isFinal ? 'Ihr Zertifikat wartet.' : 'Nächstes Kapitel freigeschaltet.') : 'Mindestens ' + PASS_THRESHOLD + '% nötig.') + '</div>' +
    '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">' +
    (pass ? (currentQuiz.isFinal ? '<button class="btn btn-primary" onclick="closeQuiz();showCertificate();">Zum Zertifikat →</button>' : '<button class="btn btn-primary" onclick="closeQuiz();renderEverything();">Weiter →</button>')
      : '<button class="btn btn-primary" onclick="restartQuiz()">Nochmal</button>') + '</div></div>';
}

function restartQuiz() { startQuiz(currentQuiz.moduleId, currentQuiz.isFinal); }
function closeQuiz() { var m = document.getElementById('quizModal'); if (m) { m.style.display = 'none'; document.body.style.overflow = ''; } currentQuiz = null; renderEverything(); }

// ===== FINAL EXAM =====
function startFinalExam() {
  if (!isFinalUnlocked()) return;
  if (!state.userName) { state.userName = currentUser.name; saveState(); }
  startQuiz(null, true);
}
function submitName() {
  var inp = document.getElementById('userNameInput'), n = inp ? inp.value.trim() : '';
  if (n.length < 2) { if (inp) inp.style.borderColor = 'var(--rust)'; return; }
  state.userName = n; saveState();
  var nm = document.getElementById('nameModal'); if (nm) { nm.style.display = 'none'; document.body.style.overflow = ''; }
  startQuiz(null, true);
}

// ===== CERTIFICATE =====
function showCertificate() { var el = document.getElementById('certificate'); if (el) el.scrollIntoView({behavior:'smooth'}); renderCertificate(); }

function renderCertificate() {
  var lo = document.getElementById('certLockedState'), un = document.getElementById('certUnlockedState');
  if (!lo || !un) return;
  if (!state.finalPassed) {
    lo.style.display = 'block'; un.style.display = 'none';
    var s = document.getElementById('certStatus');
    if (s) s.textContent = isFinalUnlocked() ? 'Status: Prüfung verfügbar' : 'Status: ' + state.completed.length + '/7 Module';
    return;
  }
  lo.style.display = 'none'; un.style.display = 'block';
  var d = new Date(state.completionDate || Date.now());
  var ds = d.toLocaleDateString('de-DE', {year:'numeric',month:'long',day:'numeric'});

  // Stable credential ID: generate once, store in state
  if (!state.credentialId) {
    state.credentialId = 'IEG-' + d.getFullYear() + String(d.getMonth()+1).padStart(2,'0') + String(d.getDate()).padStart(2,'0') + '-' + Math.random().toString(36).substr(2,6).toUpperCase();
    saveState(state);
  }
  var cid = state.credentialId;
  // verifyUrl intentionally removed — no public verification endpoint exists

  un.innerHTML =
    '<div class="section-eyebrow">/ Certificate</div>' +
    '<h2 class="section-title">Ihr Zertifikat</h2>' +
    '<p class="section-lede" style="margin-bottom:48px">Herzlichen Glückwunsch — laden Sie Ihr Zertifikat herunter und teilen Sie es auf LinkedIn.</p>' +
    '<div class="certificate" id="certDoc">' +
      '<div class="cert-corner cert-corner-tl"></div><div class="cert-corner cert-corner-tr"></div>' +
      '<div class="cert-corner cert-corner-bl"></div><div class="cert-corner cert-corner-br"></div>' +
      '<img src="assets/ieg-logo.png" alt="IEG" class="cert-logo-img">' +
      '<div class="cert-issuing-line">IEG Investment Banking Group · Internal Training</div>' +
      '<div class="cert-this-certifies">Hiermit wird bestätigt, dass</div>' +
      '<div class="cert-name">' + esc(state.userName) + '</div>' +
      '<div class="cert-completed">den folgenden Kurs erfolgreich abgeschlossen hat:</div>' +
      '<div class="cert-program">IEG Claude Academy</div>' +
      '<div class="cert-program-sub">Künstliche Intelligenz im Investment Banking · 7 Module · Final Examination</div>' +
      '<div class="cert-meta">' +
        '<div class="cert-meta-item"><div class="cert-meta-label">Abschlussdatum</div><div class="cert-meta-value">' + ds + '</div></div>' +
        '<div class="cert-meta-item"><div class="cert-meta-label">Credential ID</div><div class="cert-meta-value cert-meta-mono">' + cid + '</div></div>' +
        '<div class="cert-meta-item"><div class="cert-meta-label">Ausgestellt von</div><div class="cert-meta-value cert-signature">S. Heilmann</div><div class="cert-meta-role">Group CEO, IEG</div></div>' +
      '</div>' +
      '<div class="cert-verify">Credential ID: <span class="cert-meta-mono">' + cid + '</span></div>' +
    '</div>' +
    '<div class="cert-actions">' +
      '<button class="btn btn-primary" onclick="printCertificate()">' +
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' +
        'Als PDF speichern' +
      '</button>' +
      '<button class="btn btn-ghost" onclick="copyLinkedIn(\'' + esc(cid) + '\', \'' + esc(ds) + '\')">' +
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' +
        'Für LinkedIn kopieren' +
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

function copyLinkedIn(cid, dateStr) {
  var text = 'Ich habe die IEG Claude Academy abgeschlossen — ein internes Training zu KI-Workflows im Investment Banking.\n\nCredential ID: ' + cid + '\nAusgestellt: ' + dateStr + '\nAusgestellt von: IEG Investment Banking Group\n\n#IEG #InvestmentBanking #AI #Claude #Weiterbildung';
  navigator.clipboard.writeText(text).then(function() {
    var btn = event.target.closest('button');
    var orig = btn.innerHTML;
    btn.textContent = 'Kopiert!';
    setTimeout(function() { btn.innerHTML = orig; }, 2000);
  });
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

// ===== START =====
renderEverything();
setupNavObserver();
