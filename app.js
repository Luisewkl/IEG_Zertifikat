/* ============================================
   IEG Claude Academy — App Logic
   ============================================ */

// ---------- STATE ----------
const STORAGE_KEY = 'ieg-academy-progress-v1';
let state = loadState();
let previewMode = false; // Wenn true: alle Module direkt zugänglich (für Review/Vorschau)

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) { /* fall through */ }
  return {
    completed: [],
    finalPassed: false,
    userName: '',
    completionDate: ''
  };
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) { /* localStorage full or disabled */ }
}

function togglePreviewMode() {
  previewMode = !previewMode;
  const btn = document.getElementById('previewToggle');
  if (btn) {
    btn.classList.toggle('active', previewMode);
    btn.textContent = previewMode ? '✓ Vorschau-Modus aktiv' : 'Vorschau-Modus';
  }
  renderEverything();
}

function resetProgress() {
  if (!confirm('Möchten Sie Ihren gesamten Lernfortschritt wirklich zurücksetzen? Diese Aktion kann nicht rückgängig gemacht werden.')) return;
  state = { completed: [], finalPassed: false, userName: '', completionDate: '' };
  saveState();
  renderEverything();
  document.getElementById('curriculum').scrollIntoView({behavior:'smooth'});
}

// ---------- LOCKING LOGIC ----------
// Module 0 always unlocked. Module N unlocks when module N-1 is completed.
// Im Preview-Modus sind alle Module unlocked.
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

// ---------- RENDER MODULES ----------
function renderModules() {
  const grid = document.getElementById('modulesGrid');
  grid.innerHTML = '';

  CURRICULUM.forEach((mod) => {
    const unlocked = isModuleUnlocked(mod.id);
    const completed = isModuleCompleted(mod.id);

    const cardClass = completed ? 'completed' : (unlocked ? 'unlocked' : 'locked');
    // Ist das hier das "nächste" Modul (aktiv = freigeschaltet aber nicht abgeschlossen)?
    const isNext = unlocked && !completed && !previewMode;

    const statusIcon = completed
      ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>`
      : (unlocked
          ? `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`
          : `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="1"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>`);

    const statusText = completed
      ? 'Abgeschlossen'
      : (unlocked
          ? (isNext ? '▶ Jetzt verfügbar' : 'Verfügbar')
          : `Erst nach Modul ${String(mod.id - 1).padStart(2, '0')}`);

    const actionLabel = completed
      ? 'Wiederholen'
      : (unlocked ? 'Jetzt starten' : 'Gesperrt');

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
      <div class="module-status-bar">
        <div class="module-status-fill" style="width:${completed ? 100 : 0}%"></div>
      </div>
      <div class="module-footer">
        <span class="module-status">${statusText}</span>
        ${unlocked ? `<span class="module-action">${actionLabel}
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </span>` : `<span class="module-action" style="color:var(--text-faint);">🔒 Gesperrt</span>`}
      </div>
    `;

    if (unlocked) {
      card.addEventListener('click', () => openModule(mod.id));
    }

    grid.appendChild(card);
  });

  // FINAL EXAM CARD
  const finalUnlocked = isFinalUnlocked();
  const finalPassed = state.finalPassed;
  const finalClass = finalPassed ? 'completed unlocked' : (finalUnlocked ? 'unlocked' : 'locked');
  const finalCard = document.createElement('div');
  finalCard.className = `module-card final-exam ${finalClass}`;

  const finalStatusIcon = finalPassed
    ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>`
    : (finalUnlocked
        ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 L15 9 L22 9 L17 14 L19 21 L12 17 L5 21 L7 14 L2 9 L9 9 Z"/></svg>`
        : `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="1"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>`);

  finalCard.innerHTML = `
    <div class="module-header">
      <div class="module-number">07</div>
      <div class="module-status-icon ${finalClass}">${finalStatusIcon}</div>
    </div>
    <div class="module-meta">Final Examination · 15 Fragen</div>
    <div class="module-title">IEG Claude Mastery — Final Examination</div>
    <div class="module-desc">
      Das umfassende Abschluss-Examen über alle sechs Module. Pass-Threshold: 70 %. Bei Bestehen
      wird Ihr persönliches IEG Claude Certificate ausgestellt.
    </div>
    <div class="module-footer">
      <span class="module-status">${finalPassed ? 'Bestanden' : (finalUnlocked ? 'Verfügbar' : 'Alle Module abschließen')}</span>
      ${finalUnlocked ? `<span class="module-action">${finalPassed ? 'Wiederholen' : 'Examen starten'}
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </span>` : `<span class="module-action" style="color:rgba(255,255,255,0.4);">🔒 Gesperrt</span>`}
    </div>
  `;

  if (finalUnlocked) {
    finalCard.addEventListener('click', startFinalExam);
  }

  grid.appendChild(finalCard);
}

function renderProgress() {
  const completedCount = state.completed.length;
  const totalCount = CURRICULUM.length;
  const percent = Math.round((completedCount / totalCount) * 100);

  document.getElementById('progressFill').style.width = percent + '%';
  document.getElementById('progressText').textContent = `${completedCount} von ${totalCount} Modulen abgeschlossen`;
  document.getElementById('progressPercent').textContent = percent + '%';
  document.getElementById('navProgress').textContent = `${completedCount}/${totalCount}`;
}

// ---------- MODULE MODAL ----------
function openModule(moduleId) {
  const mod = CURRICULUM.find(m => m.id === moduleId);
  if (!mod) return;

  const body = document.getElementById('moduleModalBody');
  body.innerHTML = `
    <div class="module-doc">
      ${mod.content}
      <div class="module-doc-footer">
        <div class="module-doc-footer-text">Bereit, Ihr Verständnis zu prüfen? Das Quiz hat ${mod.quiz.length} Fragen.</div>
        <button class="btn btn-primary" onclick="closeModule(); startQuiz(${mod.id});">
          Zum Quiz
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `;
  document.getElementById('moduleModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModule() {
  document.getElementById('moduleModal').style.display = 'none';
  document.body.style.overflow = '';
}

// ---------- QUIZ ENGINE ----------
let currentQuiz = null;

function startQuiz(moduleId, isFinal = false) {
  const questions = isFinal ? FINAL_EXAM : CURRICULUM.find(m => m.id === moduleId).quiz;
  const title = isFinal
    ? 'Final Examination'
    : `Modul ${String(moduleId).padStart(2, '0')} · Quiz`;
  const subtitle = isFinal
    ? `${questions.length} Fragen · Pass-Threshold ${PASS_THRESHOLD}%`
    : `${questions.length} Fragen · Pass-Threshold ${PASS_THRESHOLD}%`;

  currentQuiz = {
    moduleId, isFinal, questions,
    currentIndex: 0,
    answers: new Array(questions.length).fill(null),
    title, subtitle
  };

  document.getElementById('quizModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
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
    const marker = String.fromCharCode(65 + i); // A, B, C, D
    return `
      <button class="${cls}" ${answered ? 'disabled' : ''} onclick="answerQuestion(${i})">
        <span class="quiz-option-marker">${marker}</span>
        <span>${opt}</span>
      </button>
    `;
  }).join('');

  const explanationHtml = answered ? `
    <div class="quiz-explanation">
      <strong>${userAnswer === q.correct ? '✓ Richtig.' : '✗ Nicht ganz.'}</strong> ${q.explanation}
    </div>
  ` : '';

  const isLast = idx === total - 1;
  const allAnswered = currentQuiz.answers.every(a => a !== null);

  const navHtml = `
    <div class="quiz-nav">
      <button class="btn btn-ghost" onclick="prevQuestion()" style="color:var(--ink);border:1px solid var(--bone-soft);" ${idx === 0 ? 'disabled style="opacity:0.3"' : ''}>
        ← Zurück
      </button>
      ${answered
        ? (isLast && allAnswered
            ? `<button class="btn btn-primary" onclick="finishQuiz()">Quiz auswerten →</button>`
            : `<button class="btn btn-primary" onclick="nextQuestion()" ${idx === total - 1 ? 'disabled style="opacity:0.5"' : ''}>Nächste Frage →</button>`)
        : `<span style="color:var(--text-faint);font-size:13px;align-self:center;">Wählen Sie eine Antwort</span>`
      }
    </div>
  `;

  document.getElementById('quizModalBody').innerHTML = `
    <div class="quiz-header">
      <div class="quiz-eyebrow">${currentQuiz.title}</div>
      <div class="quiz-title">Frage ${idx + 1} von ${total}</div>
      <div class="quiz-subtitle">${currentQuiz.subtitle}</div>
    </div>
    <div class="quiz-progress">${dotsHtml}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">${optionsHtml}</div>
    ${explanationHtml}
    ${navHtml}
  `;
}

function answerQuestion(optionIndex) {
  currentQuiz.answers[currentQuiz.currentIndex] = optionIndex;
  renderQuizQuestion();
}

function nextQuestion() {
  if (currentQuiz.currentIndex < currentQuiz.questions.length - 1) {
    currentQuiz.currentIndex++;
    renderQuizQuestion();
  }
}

function prevQuestion() {
  if (currentQuiz.currentIndex > 0) {
    currentQuiz.currentIndex--;
    renderQuizQuestion();
  }
}

function finishQuiz() {
  const total = currentQuiz.questions.length;
  let correct = 0;
  currentQuiz.questions.forEach((q, i) => {
    if (currentQuiz.answers[i] === q.correct) correct++;
  });
  const percent = Math.round((correct / total) * 100);
  const passed = percent >= PASS_THRESHOLD;

  // SAVE STATE
  if (passed) {
    if (currentQuiz.isFinal) {
      state.finalPassed = true;
      state.completionDate = new Date().toISOString();
    } else {
      const id = currentQuiz.moduleId;
      if (!state.completed.includes(id)) state.completed.push(id);
    }
    saveState();
  }

  const title = passed
    ? (currentQuiz.isFinal ? 'Bestanden!' : 'Modul abgeschlossen')
    : 'Knapp daneben';

  const msg = passed
    ? (currentQuiz.isFinal
        ? 'Glückwunsch — Sie haben das IEG Claude Mastery Final Examination bestanden. Ihr persönliches Zertifikat wartet auf Sie.'
        : `Sie haben das Modul erfolgreich abgeschlossen. Das nächste Kapitel ist nun freigeschaltet.`)
    : `Sie benötigen mindestens ${PASS_THRESHOLD}% zum Bestehen. Sehen Sie sich das Material noch einmal an und versuchen Sie es erneut — ohne Zeitlimit.`;

  const actions = passed
    ? (currentQuiz.isFinal
        ? `<button class="btn btn-primary" onclick="closeQuiz(); showCertificate();">Zum Zertifikat →</button>`
        : `<button class="btn btn-primary" onclick="closeQuiz(); renderEverything();">Weiter zum nächsten Modul →</button>`)
    : `<button class="btn btn-primary" onclick="restartQuiz()">Quiz erneut versuchen</button>
       <button class="btn btn-ghost" style="color:var(--ink);border:1px solid var(--bone-soft);" onclick="closeQuiz();">Material erneut lesen</button>`;

  document.getElementById('quizModalBody').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-icon ${passed ? 'pass' : 'fail'}">
        ${passed ? '✓' : '!'}
      </div>
      <div class="quiz-result-title">${title}</div>
      <div class="quiz-result-score">${correct} / ${total} richtig · ${percent}%</div>
      <div class="quiz-result-msg">${msg}</div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">${actions}</div>
    </div>
  `;
}

function restartQuiz() {
  startQuiz(currentQuiz.moduleId, currentQuiz.isFinal);
}

function closeQuiz() {
  document.getElementById('quizModal').style.display = 'none';
  document.body.style.overflow = '';
  currentQuiz = null;
  renderEverything();
}

// ---------- FINAL EXAM ENTRY ----------
function startFinalExam() {
  if (!isFinalUnlocked()) return;
  // Ask for name first if not set
  if (!state.userName) {
    document.getElementById('nameModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('userNameInput').focus(), 100);
  } else {
    startQuiz(null, true);
  }
}

function submitName() {
  const input = document.getElementById('userNameInput');
  const name = input.value.trim();
  if (name.length < 2) {
    input.style.borderColor = 'var(--rust)';
    return;
  }
  state.userName = name;
  saveState();
  document.getElementById('nameModal').style.display = 'none';
  document.body.style.overflow = '';
  startQuiz(null, true);
}

// ---------- CERTIFICATE ----------
function showCertificate() {
  document.getElementById('certificate').scrollIntoView({behavior:'smooth'});
  renderCertificate();
}

function renderCertificate() {
  const lockedEl = document.getElementById('certLockedState');
  const unlockedEl = document.getElementById('certUnlockedState');

  if (!state.finalPassed) {
    lockedEl.style.display = 'block';
    unlockedEl.style.display = 'none';

    // Update status hint
    const completedCount = state.completed.length;
    let statusText = '';
    if (state.finalPassed) {
      statusText = 'Status: freigeschaltet';
    } else if (isFinalUnlocked()) {
      statusText = 'Status: Final Examination verfügbar';
    } else {
      statusText = `Status: ${completedCount} von 6 Modulen abgeschlossen`;
    }
    document.getElementById('certStatus').textContent = statusText;
    return;
  }

  // CERTIFICATE UNLOCKED
  lockedEl.style.display = 'none';
  unlockedEl.style.display = 'block';

  const date = new Date(state.completionDate || Date.now());
  const dateStr = date.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const certId = `IEG-CC-${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}${String(date.getDate()).padStart(2,'0')}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;

  unlockedEl.innerHTML = `
    <div class="section-eyebrow">/ Certificate · Issued</div>
    <h2 class="section-title">Ihr Zertifikat ist bereit</h2>
    <p class="section-lede" style="margin-bottom:48px;">
      Glückwunsch zur erfolgreichen Absolvierung des IEG Claude Mastery Programs.
      Drucken oder speichern Sie Ihr Zertifikat für Ihre Unterlagen.
    </p>

    <div class="certificate" id="certificateEl">
      <div class="cert-corner cert-corner-tl"></div>
      <div class="cert-corner cert-corner-tr"></div>
      <div class="cert-corner cert-corner-bl"></div>
      <div class="cert-corner cert-corner-br"></div>

      <img src="assets/ieg-logo.png" alt="IEG" class="cert-logo-img">
      <div class="cert-issuing-line">Investment Banking Group · Internal Training</div>

      <div class="cert-this-certifies">Hiermit wird bestätigt, dass</div>
      <div class="cert-name">${escapeHtml(state.userName)}</div>

      <div class="cert-completed">erfolgreich das folgende Programm abgeschlossen hat:</div>

      <div class="cert-program">Claude Mastery Curriculum</div>
      <div class="cert-program-sub">A Professional Learning Path for Investment Banking</div>

      <div class="cert-meta">
        <div class="cert-meta-item">
          <div class="cert-meta-label">Ausgestellt am</div>
          <div class="cert-meta-value">${dateStr}</div>
        </div>
        <div class="cert-meta-item">
          <div class="cert-meta-label">Zertifikat-ID</div>
          <div class="cert-meta-value" style="font-family:var(--mono);font-size:13px;">${certId}</div>
        </div>
        <div class="cert-meta-item">
          <div class="cert-meta-label">Ausstellende Stelle</div>
          <div class="cert-meta-value cert-signature">S. Heilmann</div>
          <div style="font-family:var(--mono);font-size:10px;color:var(--text-muted);margin-top:4px;letter-spacing:0.06em;">GROUP CEO, IEG</div>
        </div>
      </div>
    </div>

    <div class="cert-actions">
      <button class="btn btn-primary" onclick="window.print()">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"/></svg>
        Zertifikat drucken
      </button>
      <button class="btn btn-ghost" style="color:var(--ink);border:1px solid var(--bone-soft);" onclick="document.getElementById('curriculum').scrollIntoView({behavior:'smooth'})">
        Curriculum erneut ansehen
      </button>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ---------- NAV SCROLL HIGHLIGHTING ----------
function setupNavObserver() {
  const sections = ['home', 'curriculum', 'team', 'certificate'];
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.nav === id);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ---------- KEYBOARD ----------
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('moduleModal').style.display === 'flex') closeModule();
    else if (document.getElementById('quizModal').style.display === 'flex') closeQuiz();
    else if (document.getElementById('nameModal').style.display === 'flex') {
      document.getElementById('nameModal').style.display = 'none';
      document.body.style.overflow = '';
    }
  }
  if (document.getElementById('nameModal').style.display === 'flex' && e.key === 'Enter') {
    submitName();
  }
});

// ---------- RENDER ALL ----------
function renderEverything() {
  renderModules();
  renderProgress();
  renderCertificate();
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  renderEverything();
  setupNavObserver();
});
