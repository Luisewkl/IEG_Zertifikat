/* ============================================
   IEG Claude Academy — App Logic v6.0
   ============================================ */

// Login-Check läuft in <head> von index.html

// ===== STATE =====
var STORAGE_KEY = 'ieg-academy-progress-v1';
var state = loadLocalState();
var currentUser = { name: localStorage.getItem('ieg_user_name') || 'User' };
var currentUserId = null;   // Supabase Auth user.id, gesetzt beim App-Start
var previewMode = false;

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
  if (!confirm('Gesamten Lernfortschritt zurücksetzen?')) return;
  state = { completed: [], finalPassed: false, finalScore: 0, userName: '', completionDate: '' };
  saveState();
  saveProgressToSupabase();   // Reset auch in Supabase persistieren
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
    '<p class="section-lede" style="margin-bottom:48px">Herzlichen Glückwunsch — laden Sie Ihr persönliches Zertifikat als PDF herunter.</p>' +
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
        '<div class="cert-meta-item"><div class="cert-meta-label">Ausgestellt von</div><div class="cert-meta-value cert-signature">Stefan Heilmann</div><div class="cert-meta-role">Group CEO, IEG</div></div>' +
      '</div>' +
      '<div class="cert-verify">Credential ID: <span class="cert-meta-mono">' + cid + '</span></div>' +
    '</div>' +
    '<div class="cert-actions">' +
      '<button class="btn btn-primary" onclick="printCertificate()">' +
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' +
        'Als PDF speichern' +
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
// Lädt genau einen Datensatz pro Nutzer aus user_progress und mappt ihn auf den State.
async function loadProgressFromSupabase() {
  if (!window.sb || !currentUserId) return;
  // Load progress from Supabase (ein Datensatz pro user_id)
  var res = await window.sb.from('user_progress')
    .select('completed_modules, final_passed, final_score, completion_date')
    .eq('user_id', currentUserId)
    .maybeSingle();

  if (res.error) { console.warn('Supabase load error:', res.error.message); return; }

  if (!res.data) {
    // Kein Datensatz vorhanden → neuen mit Default-Werten anlegen (insert)
    await window.sb.from('user_progress').insert({
      user_id: currentUserId,
      completed_modules: [],
      final_passed: false,
      final_score: 0,
      completion_date: null
    });
    return; // State bleibt auf Default
  }

  // Supabase ist die Source of Truth → Row auf bestehende State-Struktur mappen
  state.completed      = Array.isArray(res.data.completed_modules) ? res.data.completed_modules : [];
  state.finalPassed    = !!res.data.final_passed;
  state.finalScore     = res.data.final_score || 0;
  state.completionDate = res.data.completion_date || '';
  saveState(); // lokaler Cache, damit Offline/Reload schnell rendert
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
