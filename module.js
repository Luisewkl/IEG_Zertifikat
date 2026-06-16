/* ============================================
   IEG Claude Academy — Module Page Script
   Quiz-Engine, Fortschritts-Tracking, Dynamic Content
   ============================================ */

// Diese Konstante wird in jeder Modul-Seite überschrieben
// MODULE_ID = 0; // wird in der Modul-HTML gesetzt
// MODULE_QUIZ = [...]; // wird in der Modul-HTML gesetzt
// MODULE_TITLE = "..."; // wird in der Modul-HTML gesetzt

const STORAGE_KEY = 'ieg-academy-progress-v1';
// PASS_THRESHOLD wird aus content.js geladen (Wert: 70)

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return { completed: [], finalPassed: false, userName: '', completionDate: '' };
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

// ---------- DYNAMIC CONTENT FROM content.js ----------
// Lädt Videos, Bilder und Zusatztexte aus content.js (CURRICULUM[MODULE_ID])
// und fügt sie automatisch in den <div id="dynamicContent"> ein.
function renderDynamicContent() {
  // Sicherstellen, dass CURRICULUM verfügbar ist
  if (typeof CURRICULUM === 'undefined') return;

  const mod = CURRICULUM.find(m => m.id === MODULE_ID);
  if (!mod) return;

  const container = document.getElementById('dynamicContent');
  if (!container) return;

  let html = '';

  // 1. VIDEOS
  if (mod.videos && mod.videos.length > 0) {
    mod.videos.forEach(video => {
      html += `
        <div class="video-embed">
          <iframe
            src="${video.url}"
            title="${video.title || ''}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>`;
      if (video.caption) {
        html += `<div class="video-caption">${video.caption}</div>`;
      }
    });
  }

  // 2. IMAGES
  if (mod.images && mod.images.length > 0) {
    mod.images.forEach(image => {
      html += `<img src="${image.src}" alt="${image.alt || ''}" class="module-image">`;
      if (image.caption) {
        html += `<div class="image-caption">${image.caption}</div>`;
      }
    });
  }

  // 3. ZUSÄTZLICHER LANGER TEXT
  if (mod.longContent && mod.longContent.trim() && !mod.longContent.includes('<!-- Hier kannst du')) {
    html += mod.longContent;
  }

  container.innerHTML = html;
}

// Beim Laden der Seite: dynamische Inhalte rendern
document.addEventListener('DOMContentLoaded', renderDynamicContent);

// ---------- QUIZ ENGINE ----------
let currentQuiz = null;

function startQuiz() {
  currentQuiz = {
    moduleId: MODULE_ID,
    questions: MODULE_QUIZ,
    currentIndex: 0,
    answers: new Array(MODULE_QUIZ.length).fill(null)
  };

  document.getElementById('quizModal').classList.add('active');
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
    const marker = String.fromCharCode(65 + i);
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
      <button class="btn btn-ghost" onclick="prevQuestion()" ${idx === 0 ? 'disabled style="opacity:0.3"' : ''}>
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
      <div class="quiz-modal-eyebrow">Modul ${String(MODULE_ID).padStart(2, '0')} · Quiz</div>
      <div class="quiz-title">Frage ${idx + 1} von ${total}</div>
      <div class="quiz-subtitle">${total} Fragen · Pass-Threshold ${PASS_THRESHOLD}%</div>
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

  if (passed) {
    const state = loadState();
    if (!state.completed.includes(MODULE_ID)) state.completed.push(MODULE_ID);
    saveState(state);
  }

  const title = passed ? 'Modul abgeschlossen' : 'Knapp daneben';
  const msg = passed
    ? `Sie haben Modul ${String(MODULE_ID).padStart(2, '0')} erfolgreich abgeschlossen. Das nächste Kapitel ist nun freigeschaltet.`
    : `Sie benötigen mindestens ${PASS_THRESHOLD}% zum Bestehen. Sehen Sie sich das Material noch einmal an und versuchen Sie es erneut.`;

  const nextModuleId = MODULE_ID + 1;
  const hasNext = nextModuleId <= 6;

  const actions = passed
    ? (hasNext
        ? `<a href="modul-${String(nextModuleId).padStart(2, '0')}.html" class="btn btn-primary">Zu Modul ${String(nextModuleId).padStart(2, '0')} →</a>
           <a href="../index.html#curriculum" class="btn btn-ghost">Zur Übersicht</a>`
        : `<a href="../index.html#certificate" class="btn btn-primary">Zum Final Examination →</a>
           <a href="../index.html#curriculum" class="btn btn-ghost">Zur Übersicht</a>`)
    : `<button class="btn btn-primary" onclick="restartQuiz()">Quiz erneut versuchen</button>
       <button class="btn btn-ghost" onclick="closeQuiz()">Material erneut lesen</button>`;

  document.getElementById('quizModalBody').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-icon ${passed ? 'pass' : 'fail'}">${passed ? '✓' : '!'}</div>
      <div class="quiz-result-title">${title}</div>
      <div class="quiz-result-score">${correct} / ${total} richtig · ${percent}%</div>
      <div class="quiz-result-msg">${msg}</div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">${actions}</div>
    </div>
  `;
}

function restartQuiz() { startQuiz(); }

function closeQuiz() {
  document.getElementById('quizModal').classList.remove('active');
  document.body.style.overflow = '';
  currentQuiz = null;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.getElementById('quizModal').classList.contains('active')) {
    closeQuiz();
  }
});
