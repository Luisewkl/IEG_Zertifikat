/* ============================================
   IEG Claude Academy — App Logic
   v5.0 — Mit Supabase Login
   ============================================ */

// ============ AUTH & STATE ============
const STORAGE_KEY = 'ieg-academy-progress-v1';
let state = { completed: [], finalPassed: false, userName: '', completionDate: '' };
let currentUser = null;
let supabaseReady = false;
let previewMode = false;

// Warte auf Supabase
document.addEventListener('supabaseReady', initWithSupabase);
// Fallback nach 3 Sekunden
window.addEventListener('load', () => {
  setTimeout(() => {
    if (!supabaseReady) {
      state = loadLocalState();
      renderEverything();
      setupNavObserver();
    }
  }, 3000);
});

async function initWithSupabase() {
  supabaseReady = true;
  if (!window.sb) {
    state = loadLocalState();
    renderEverything();
    setupNavObserver();
    return;
  }

  // Session prüfen → wenn nicht eingeloggt, zu login.html
  const { data: { session } } = await window.sb.auth.getSession();
  if (!session) {
    window.location.href = 'login.html';
    return;
  }

  currentUser = session.user;
  updateUserDisplay();
  state = await loadCloudState();
  renderEverything();
  setupNavObserver();
}

function updateUserDisplay() {
  if (!currentUser) return;
  const name = currentUser.user_metadata?.full_name || currentUser.email.split('@')[0];
  const el = document.getElementById('userDisplayName');
  if (el) el.textContent = name;
  // Prefill Name-Feld für Zertifikat
  if (!state.userName) state.userName = name;
}

// ============ STATE: CLOUD vs LOCAL ============
async function loadCloudState() {
  try {
    // Fortschritt laden
    const { data: progressRows } = await window.sb
      .from('progress')
      .select('module_id, passed')
      .eq('user_id', currentUser.id);

    const completed = (progressRows || []).filter(r => r.passed).map(r => r.module_id);

    // Final Exam laden
    const { data: examRow } = await window.sb
      .from('final_exam')
      .select('passed, user_name, completed_at')
      .eq('user_id', currentUser.id)
      .single();

    return {
      completed,
      finalPassed: examRow?.passed || false,
      userName: examRow?.user_name || currentUser.user_metadata?.full_name || '',
      completionDate: examRow?.completed_at || ''
    };
  } catch (e) {
    console.error('Cloud state load error:', e);
    return loadLocalState();
  }
}

async function saveModuleComplete(moduleId) {
  if (window.sb && currentUser) {
    try {
      await window.sb.from('progress').upsert({
        user_id: currentUser.id,
        module_id: moduleId,
        passed: true,
        completed_at: new Date().toISOString()
      }, { onConflict: 'user_id,module_id' });
    } catch (e) { console.error('Save module error:', e); }
  } else {
    saveLocalState();
  }
}

async function saveFinalExam(userName) {
  if (window.sb && currentUser) {
    try {
      await window.sb.from('final_exam').upsert({
        user_id: currentUser.id,
        passed: true,
        user_name: userName,
        completed_at: new Date().toISOString()
      }, { onConflict: 'user_id' });
    } catch (e) { console.error('Save final exam error:', e); }
  } else {
    saveLocalState();
  }
}

// Local fallback
function loadLocalState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return { completed: [], finalPassed: false, userName: '', completionDate: '' };
}

function saveLocalState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

// Logout
async function logout() {
  if (window.sb) {
    await window.sb.auth.signOut();
  }
  window.location.href = 'login.html';
}

async function resetProgress() {
  if (!confirm('Möchten Sie Ihren gesamten Lernfortschritt wirklich zurücksetzen?')) return;

  if (window.sb && currentUser) {
    await window.sb.from('progress').delete().eq('user_id', currentUser.id);
    await window.sb.from('final_exam').delete().eq('user_id', currentUser.id);
  }

  state = { completed: [], finalPassed: false, userName: '', completionDate: '' };
  localStorage.removeItem(STORAGE_KEY);
  renderEverything();
  document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' });
}

function togglePreviewMode() {
  previewMode = !previewMode;
  const btn = document.getElementById('previewToggle');
  if (btn) {
    btn.classList.toggle('active', previewMode);
    btn.textContent = previewMode ? '✓ Vorschau aktiv' : 'Vorschau aktivieren';
  }
  renderEverything();
}

// ============ LOCKING LOGIC ============
function isModuleUnlocked(moduleId) {
  if (previewMode) return true;
  if (moduleId === 0) return true;
  return state.completed.includes(moduleId - 1);
}
function isFinalUnlocked() {
  if (previewMode) return true;
  return CURRICULUM.every(m => state.completed.includes(m.id));
}
function isModuleCompleted(moduleId) {
  return state.completed.includes(moduleId);
}

// ============ RENDER MODULES ============
function renderModules() {
  const grid = document.getElementById('modulesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  CURRICULUM.forEach((mod) => {
    const unlocked = isModuleUnlocked(mod.id);
    const completed = isModuleCompleted(mod.id);
    const cardClass = completed ? 'completed' : (unlocked ? 'unlocked' : 'locked');
    const isNext = unlocked && !completed && !previewMode;

    const statusIcon = completed
      ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>`
      : (unlocked
        ? `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`
        : `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="1"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>`);

    const statusText = completed ? 'Abgeschlossen'
      : (unlocked ? (isNext ? '▶ Jetzt verfügbar' : 'Verfügbar') : `Erst nach Modul ${String(mod.id - 1).padStart(2, '0')}`);

    const card = document.createElement('div');
    card.className = `module-card ${cardClass}${isNext ? ' module-next' : ''}`;
    card.innerHTML = `
      <div class="module-header">
        <div class="module-number">${mod.number}</div>
        <div class="module-status-icon ${cardClass}">${statusIcon}</div>
      </div>
      <div class="module-meta">${mod.meta} · ${mod.duration}</div>
      <div class="module-title">${mod.title}</div>
      <div class="module-desc">${mod.desc}</div>
      <div class="module-status-bar"><div class="module-status-fill" style="width:${completed ? 100 : 0}%"></div></div>
      <div class="module-footer">
        <span class="module-status">${statusText}</span>
        ${unlocked
          ? `<span class="module-action">${completed ? 'Wiederholen' : 'Jetzt starten'}
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>`
          : `<span class="module-action" style="color:var(--text-faint);">🔒 Gesperrt</span>`}
      </div>`;

    if (unlocked) card.addEventListener('click', () => openModule(mod.id));
    grid.appendChild(card);
  });

  // Final Exam Card
  const finalUnlocked = isFinalUnlocked();
  const finalPassed = state.finalPassed;
  const finalClass = finalPassed ? 'completed unlocked' : (finalUnlocked ? 'unlocked' : 'locked');
  const finalCard = document.createElement('div');
  finalCard.className = `module-card final-exam ${finalClass}`;
  const finalIcon = finalPassed
    ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>`
    : (finalUnlocked
      ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 L15 9 L22 9 L17 14 L19 21 L12 17 L5 21 L7 14 L2 9 L9 9 Z"/></svg>`
      : `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="1"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>`);

  finalCard.innerHTML = `
    <div class="module-header"><div class="module-number">07</div><div class="module-status-icon ${finalClass}">${finalIcon}</div></div>
    <div class="module-meta">Abschlussprüfung · 15 Fragen</div>
    <div class="module-title">IEG Claude Academy — Abschlussprüfung</div>
    <div class="module-desc">Das umfassende Abschluss-Examen über alle sechs Module. Pass-Threshold: 70 %. Bei Bestehen wird Ihr persönliches IEG Claude Certificate ausgestellt.</div>
    <div class="module-footer">
      <span class="module-status">${finalPassed ? 'Bestanden' : (finalUnlocked ? 'Verfügbar' : 'Alle Module abschließen')}</span>
      ${finalUnlocked
        ? `<span class="module-action">${finalPassed ? 'Wiederholen' : 'Prüfung starten'}
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>`
        : `<span class="module-action" style="color:rgba(255,255,255,0.4);">🔒 Gesperrt</span>`}
    </div>`;

  if (finalUnlocked) finalCard.addEventListener('click', startFinalExam);
  grid.appendChild(finalCard);
}

function renderProgress() {
  const completedCount = state.completed.length;
  const totalCount = CURRICULUM.length;
  const percent = Math.round((completedCount / totalCount) * 100);
  const fill = document.getElementById('progressFill');
  const text = document.getElementById('progressText');
  const pct = document.getElementById('progressPercent');
  const nav = document.getElementById('navProgress');
  if (fill) fill.style.width = percent + '%';
  if (text) text.textContent = `${completedCount} von ${totalCount} Modulen abgeschlossen`;
  if (pct) pct.textContent = percent + '%';
  if (nav) nav.textContent = `${completedCount}/${totalCount}`;
}

// ============ MODULE NAVIGATION ============
function openModule(moduleId) {
  const filename = `modules/modul-${String(moduleId).padStart(2, '0')}.html`;
  window.location.href = filename;
}
function closeModule() {
  const m = document.getElementById('moduleModal');
  if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
}

// ============ QUIZ ENGINE ============
let currentQuiz = null;

function startQuiz(moduleId, isFinal = false) {
  const questions = isFinal ? FINAL_EXAM : CURRICULUM.find(m => m.id === moduleId).quiz;
  const title = isFinal ? 'Abschlussprüfung' : `Modul ${String(moduleId).padStart(2, '0')} · Quiz`;
  const subtitle = `${questions.length} Fragen · Pass-Threshold ${PASS_THRESHOLD}%`;
  currentQuiz = { moduleId, isFinal, questions, currentIndex: 0, answers: new Array(questions.length).fill(null), title, subtitle };
  const m = document.getElementById('quizModal');
  if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = currentQuiz.questions[currentQuiz.currentIndex];
  const idx = currentQuiz.currentIndex;
  const total = currentQuiz.questions.length;
  const userAnswer = currentQuiz.answers[idx];
  const answered = userAnswer !== null;

  const dotsHtml = currentQuiz.questions.map((_, i) => {
    let cls = 'quiz-dot';
    if (i === idx) cls += ' active';
    else if (currentQuiz.answers[i] !== null) cls += ' done';
    return `<div class="${cls}"></div>`;
  }).join('');

  const optionsHtml = q.options.map((opt, i) => {
    let cls = 'quiz-option';
    if (answered) {
      if (i === q.correct) cls += ' correct';
      else if (i === userAnswer) cls += ' wrong';
    }
    return `<button class="${cls}" ${answered ? 'disabled' : ''} onclick="answerQuestion(${i})">
      <span class="quiz-option-marker">${String.fromCharCode(65 + i)}</span><span>${opt}</span></button>`;
  }).join('');

  const explanationHtml = answered
    ? `<div class="quiz-explanation"><strong>${userAnswer === q.correct ? '✓ Richtig.' : '✗ Nicht ganz.'}</strong> ${q.explanation}</div>`
    : '';

  const isLast = idx === total - 1;
  const allAnswered = currentQuiz.answers.every(a => a !== null);
  const navHtml = `<div class="quiz-nav">
    <button class="btn btn-ghost" onclick="prevQuestion()" style="color:var(--text);border:1px solid var(--bone-soft);" ${idx === 0 ? 'disabled style="opacity:0.3"' : ''}>← Zurück</button>
    ${answered
      ? (isLast && allAnswered
        ? `<button class="btn btn-primary" onclick="finishQuiz()">Auswerten →</button>`
        : `<button class="btn btn-primary" onclick="nextQuestion()" ${idx === total - 1 ? 'disabled style="opacity:0.5"' : ''}>Nächste →</button>`)
      : `<span style="color:var(--text-faint);font-size:13px;align-self:center;">Antwort wählen</span>`}
  </div>`;

  const body = document.getElementById('quizModalBody');
  if (body) body.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-eyebrow">${currentQuiz.title}</div>
      <div class="quiz-title">Frage ${idx + 1} von ${total}</div>
      <div class="quiz-subtitle">${currentQuiz.subtitle}</div>
    </div>
    <div class="quiz-progress">${dotsHtml}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">${optionsHtml}</div>
    ${explanationHtml}${navHtml}`;
}

function answerQuestion(i) { currentQuiz.answers[currentQuiz.currentIndex] = i; renderQuizQuestion(); }
function nextQuestion() { if (currentQuiz.currentIndex < currentQuiz.questions.length - 1) { currentQuiz.currentIndex++; renderQuizQuestion(); } }
function prevQuestion() { if (currentQuiz.currentIndex > 0) { currentQuiz.currentIndex--; renderQuizQuestion(); } }

async function finishQuiz() {
  const total = currentQuiz.questions.length;
  let correct = 0;
  currentQuiz.questions.forEach((q, i) => { if (currentQuiz.answers[i] === q.correct) correct++; });
  const percent = Math.round((correct / total) * 100);
  const passed = percent >= PASS_THRESHOLD;

  if (passed) {
    if (currentQuiz.isFinal) {
      state.finalPassed = true;
      state.completionDate = new Date().toISOString();
      await saveFinalExam(state.userName);
    } else {
      const id = currentQuiz.moduleId;
      if (!state.completed.includes(id)) {
        state.completed.push(id);
        await saveModuleComplete(id);
      }
    }
  }

  const title = passed ? (currentQuiz.isFinal ? 'Bestanden!' : 'Modul abgeschlossen') : 'Knapp daneben';
  const msg = passed
    ? (currentQuiz.isFinal
      ? 'Glückwunsch — Sie haben die Abschlussprüfung bestanden. Ihr Zertifikat wartet auf Sie.'
      : `Sie haben das Modul erfolgreich abgeschlossen. Das nächste Kapitel ist nun freigeschaltet.`)
    : `Sie benötigen mindestens ${PASS_THRESHOLD}% zum Bestehen. Sehen Sie sich das Material noch einmal an.`;

  const actions = passed
    ? (currentQuiz.isFinal
      ? `<button class="btn btn-primary" onclick="closeQuiz(); showCertificate();">Zum Zertifikat →</button>`
      : `<button class="btn btn-primary" onclick="closeQuiz(); renderEverything();">Weiter →</button>`)
    : `<button class="btn btn-primary" onclick="restartQuiz()">Erneut versuchen</button>
       <button class="btn btn-ghost" style="color:var(--text);border:1px solid var(--bone-soft);" onclick="closeQuiz();">Material lesen</button>`;

  const body = document.getElementById('quizModalBody');
  if (body) body.innerHTML = `<div class="quiz-result">
    <div class="quiz-result-icon ${passed ? 'pass' : 'fail'}">${passed ? '✓' : '!'}</div>
    <div class="quiz-result-title">${title}</div>
    <div class="quiz-result-score">${correct} / ${total} richtig · ${percent}%</div>
    <div class="quiz-result-msg">${msg}</div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">${actions}</div>
  </div>`;
}

function restartQuiz() { startQuiz(currentQuiz.moduleId, currentQuiz.isFinal); }
function closeQuiz() {
  const m = document.getElementById('quizModal');
  if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
  currentQuiz = null;
  renderEverything();
}

// ============ FINAL EXAM ============
function startFinalExam() {
  if (!isFinalUnlocked()) return;
  if (!state.userName) {
    const nm = document.getElementById('nameModal');
    if (nm) { nm.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
    setTimeout(() => { const inp = document.getElementById('userNameInput'); if (inp) inp.focus(); }, 100);
  } else {
    startQuiz(null, true);
  }
}
function submitName() {
  const input = document.getElementById('userNameInput');
  const name = input ? input.value.trim() : '';
  if (name.length < 2) { if (input) input.style.borderColor = 'var(--rust)'; return; }
  state.userName = name;
  const nm = document.getElementById('nameModal');
  if (nm) { nm.style.display = 'none'; document.body.style.overflow = ''; }
  startQuiz(null, true);
}

// ============ CERTIFICATE ============
function showCertificate() {
  const el = document.getElementById('certificate');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  renderCertificate();
}

function renderCertificate() {
  const lockedEl = document.getElementById('certLockedState');
  const unlockedEl = document.getElementById('certUnlockedState');
  if (!lockedEl || !unlockedEl) return;

  if (!state.finalPassed) {
    lockedEl.style.display = 'block';
    unlockedEl.style.display = 'none';
    const statusEl = document.getElementById('certStatus');
    if (statusEl) {
      if (isFinalUnlocked()) statusEl.textContent = 'Status: Abschlussprüfung verfügbar';
      else statusEl.textContent = `Status: ${state.completed.length} von 6 Modulen abgeschlossen`;
    }
    return;
  }

  lockedEl.style.display = 'none';
  unlockedEl.style.display = 'block';
  const date = new Date(state.completionDate || Date.now());
  const dateStr = date.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' });
  const certId = `IEG-CC-${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}${String(date.getDate()).padStart(2,'0')}-${Math.random().toString(36).substr(2,4).toUpperCase()}`;

  unlockedEl.innerHTML = `
    <div class="section-eyebrow">/ Certificate · Issued</div>
    <h2 class="section-title">Ihr Zertifikat ist bereit</h2>
    <p class="section-lede" style="margin-bottom:48px;">Glückwunsch zur erfolgreichen Absolvierung des IEG Claude Academy Kurses.</p>
    <div class="certificate" id="certificateEl">
      <div class="cert-corner cert-corner-tl"></div><div class="cert-corner cert-corner-tr"></div>
      <div class="cert-corner cert-corner-bl"></div><div class="cert-corner cert-corner-br"></div>
      <img src="assets/ieg-logo.png" alt="IEG" class="cert-logo-img">
      <div class="cert-issuing-line">Investment Banking Group · Internal Training</div>
      <div class="cert-this-certifies">Hiermit wird bestätigt, dass</div>
      <div class="cert-name">${escapeHtml(state.userName)}</div>
      <div class="cert-completed">erfolgreich den folgenden Kurs abgeschlossen hat:</div>
      <div class="cert-program">IEG Claude Academy</div>
      <div class="cert-program-sub">Claude Training for Investment Banking Teams</div>
      <div class="cert-meta">
        <div class="cert-meta-item"><div class="cert-meta-label">Ausgestellt am</div><div class="cert-meta-value">${dateStr}</div></div>
        <div class="cert-meta-item"><div class="cert-meta-label">Zertifikat-ID</div><div class="cert-meta-value" style="font-family:var(--mono);font-size:13px;">${certId}</div></div>
        <div class="cert-meta-item"><div class="cert-meta-label">Ausstellende Stelle</div><div class="cert-meta-value cert-signature">S. Heilmann</div><div style="font-family:var(--mono);font-size:10px;color:var(--text-muted);margin-top:4px;letter-spacing:0.06em;">GROUP CEO, IEG</div></div>
      </div>
    </div>
    <div class="cert-actions">
      <button class="btn btn-primary" onclick="window.print()">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"/></svg>
        Zertifikat drucken
      </button>
    </div>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ============ NAV + KEYBOARD ============
function setupNavObserver() {
  const sections = ['home', 'curriculum', 'team', 'certificate'];
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.nav === entry.target.id));
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });
  sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
}

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  const qm = document.getElementById('quizModal');
  const nm = document.getElementById('nameModal');
  if (qm && qm.style.display === 'flex') closeQuiz();
  if (nm && nm.style.display === 'flex') { nm.style.display = 'none'; document.body.style.overflow = ''; }
});
document.addEventListener('keydown', (e) => {
  const nm = document.getElementById('nameModal');
  if (e.key === 'Enter' && nm && nm.style.display === 'flex') submitName();
});

function renderEverything() {
  renderModules();
  renderProgress();
  renderCertificate();
}
