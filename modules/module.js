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

// Supabase-Verbindungsdaten (identisch mit login.html / supabase-config.js)
const _SB_URL = 'https://hojkbskyhwocsknucvos.supabase.co';
const _SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvamtic2t5aHdvY3NrbnVjdm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MzI4NzYsImV4cCI6MjA5NzEwODg3Nn0.A2jd2EPn9bSBHiUh-CQDbx-zUnGart4iU688gXypT3c';

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

// Supabase-Client lazy laden (Library ist auf den Modul-Seiten nicht eingebunden)
let _sbClientPromise = null;
function getSupabaseClient() {
  if (window.sb) return Promise.resolve(window.sb);
  if (_sbClientPromise) return _sbClientPromise;
  _sbClientPromise = new Promise((resolve) => {
    if (window.supabase) {
      window.sb = window.supabase.createClient(_SB_URL, _SB_KEY);
      return resolve(window.sb);
    }
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
    s.onload = () => { window.sb = window.supabase.createClient(_SB_URL, _SB_KEY); resolve(window.sb); };
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });
  return _sbClientPromise;
}

// Save progress to Supabase (upsert über user_id) — nutzt die offizielle Session
async function saveProgressToSupabase(state) {
  try {
    const sb = await getSupabaseClient();
    if (!sb) return;
    const sess = await sb.auth.getSession();
    const session = sess && sess.data ? sess.data.session : null;
    if (!session || !session.user) return; // nicht eingeloggt → nur localStorage

    await sb.from('user_progress').upsert({
      user_id:           session.user.id,
      completed_modules: state.completed || [],
      final_passed:      state.finalPassed || false,
      final_score:       state.finalScore  || 0,
      completion_date:   state.completionDate || null
    }, { onConflict: 'user_id' });
  } catch (e) {
    console.warn('Supabase save error (module):', e.message);
  }
}

// Library vorab laden, damit das Speichern nach dem Quiz sofort bereit ist
document.addEventListener('DOMContentLoaded', getSupabaseClient);

// ---------- DYNAMIC CONTENT FROM content.js ----------
// Lädt Videos, Bilder, Haupttext und Zusatztexte aus content.js (CURRICULUM[MODULE_ID])
// sprachabhängig (DE/EN) und fügt sie automatisch in die Container ein.
function renderDynamicContent() {
  // Sicherstellen, dass CURRICULUM verfügbar ist
  if (typeof CURRICULUM === 'undefined') return;

  const mod = CURRICULUM.find(m => m.id === MODULE_ID);
  if (!mod) return;

  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'de';
  const isEn = lang === 'en';

  // ---- HAUPTTEXT (content / content_en) ----
  const mainContainer = document.getElementById('moduleMainContent');
  if (mainContainer) {
    const mainHtml = (isEn && mod.content_en) ? mod.content_en : mod.content;
    if (mainHtml) mainContainer.innerHTML = mainHtml;
  }

  // ---- HERO-TEXTE (Titel, Lede, Breadcrumb) ----
  const heroTitle = document.querySelector('.module-hero-title');
  if (heroTitle) heroTitle.textContent = (isEn && mod.title_en) ? mod.title_en : mod.title;

  const heroLede = document.querySelector('.module-hero-lede');
  if (heroLede && mod.heroLede) {
    heroLede.textContent = (isEn && mod.heroLede_en) ? mod.heroLede_en : mod.heroLede;
  }

  const container = document.getElementById('dynamicContent');
  if (!container) return;

  let html = '';

  // 1. VIDEOS
  if (mod.videos && mod.videos.length > 0) {
    mod.videos.forEach(video => {
      // Extract YouTube video ID from embed or watch URL
      const ytMatch = (video.url || '').match(/(?:embed\/|v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
      const watchUrl = video.watchUrl || (ytMatch ? `https://www.youtube.com/watch?v=${ytMatch[1]}` : null);
      const thumbUrl = ytMatch ? `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg` : null;
      const videoTitle = (isEn && video.title_en) ? video.title_en : video.title;
      const videoCaption = (isEn && video.caption_en) ? video.caption_en : video.caption;

      if (thumbUrl && watchUrl) {
        html += `
          <div class="video-embed video-link-wrapper">
            <a href="${watchUrl}" target="_blank" rel="noopener" class="video-thumb-link" aria-label="${videoTitle || (isEn ? 'Watch video' : 'Video ansehen')}">
              <img src="${thumbUrl}" alt="${videoTitle || ''}" class="video-thumb">
              <div class="video-play-btn"><svg viewBox="0 0 24 24" width="48" height="48" fill="white"><polygon points="5,3 19,12 5,21"/></svg></div>
            </a>
          </div>`;
      } else {
        html += `
          <div class="video-embed">
            <iframe
              src="${video.url}"
              title="${videoTitle || ''}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>`;
      }
      if (videoCaption) {
        html += `<div class="video-caption">${videoCaption}</div>`;
      }
    });
  }

  // 2. IMAGES
  if (mod.images && mod.images.length > 0) {
    mod.images.forEach(image => {
      const imgAlt = (isEn && image.alt_en) ? image.alt_en : image.alt;
      const imgCaption = (isEn && image.caption_en) ? image.caption_en : image.caption;
      html += `<img src="${image.src}" alt="${imgAlt || ''}" class="module-image">`;
      if (imgCaption) {
        html += `<div class="image-caption">${imgCaption}</div>`;
      }
    });
  }

  // 3. ZUSÄTZLICHER LANGER TEXT
  const longContent = (isEn && mod.longContent_en) ? mod.longContent_en : mod.longContent;
  if (longContent && longContent.trim() && !longContent.includes('<!-- Hier kannst du')) {
    html += longContent;
  }

  container.innerHTML = html;
}

// Beim Sprachwechsel (Button auf der Modul-Seite) Inhalte neu rendern
function renderEverything() {
  renderDynamicContent();
  updateNextModuleLock();
}

// Beim Laden der Seite: dynamische Inhalte rendern
document.addEventListener('DOMContentLoaded', renderDynamicContent);

// ---------- QUIZ ENGINE ----------
let currentQuiz = null;

// Speichert den laufenden Quiz-Fortschritt (Antworten + aktuelle Frage) pro Modul,
// damit ein begonnenes Quiz beim Schließen/Verlassen nicht verloren geht.
const QUIZ_PROGRESS_KEY = 'ieg-academy-quiz-progress-v1';

function loadQuizProgress() {
  try {
    const saved = localStorage.getItem(QUIZ_PROGRESS_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return {};
}

function saveQuizProgress() {
  if (!currentQuiz) return;
  try {
    const all = loadQuizProgress();
    all[MODULE_ID] = {
      currentIndex: currentQuiz.currentIndex,
      answers: currentQuiz.answers
    };
    localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(all));
  } catch (e) {}
}

function clearQuizProgress() {
  try {
    const all = loadQuizProgress();
    delete all[MODULE_ID];
    localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(all));
  } catch (e) {}
}

function getActiveQuiz() {
  if (typeof CURRICULUM === 'undefined') return MODULE_QUIZ;
  const mod = CURRICULUM.find(m => m.id === MODULE_ID);
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'de';
  if (mod && lang === 'en' && Array.isArray(mod.quiz_en) && mod.quiz_en.length === (mod.quiz || []).length) {
    return mod.quiz_en;
  }
  return MODULE_QUIZ;
}

function startQuiz() {
  const activeQuiz = getActiveQuiz();

  // Vorhandenen Fortschritt wiederherstellen, falls das Quiz schon begonnen wurde
  const saved = loadQuizProgress()[MODULE_ID];
  const validSaved = saved
    && Array.isArray(saved.answers)
    && saved.answers.length === activeQuiz.length;

  currentQuiz = {
    moduleId: MODULE_ID,
    questions: activeQuiz,
    currentIndex: validSaved ? saved.currentIndex : 0,
    answers: validSaved ? saved.answers.slice() : new Array(activeQuiz.length).fill(null)
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
  const t = (typeof tr === 'function') ? tr : function(k, v) { return k; };

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
      <strong>${userAnswer === q.correct ? t('quiz_correct') : t('quiz_wrong')}</strong> ${q.explanation}
    </div>
  ` : '';

  const isLast = idx === total - 1;
  const allAnswered = currentQuiz.answers.every(a => a !== null);

  const navHtml = `
    <div class="quiz-nav">
      <button class="btn btn-ghost" onclick="prevQuestion()" ${idx === 0 ? 'disabled style="opacity:0.3"' : ''}>
        ${t('quiz_back')}
      </button>
      ${answered
        ? (isLast && allAnswered
            ? `<button class="btn btn-primary" onclick="finishQuiz()">${t('quiz_submit')}</button>`
            : `<button class="btn btn-primary" onclick="nextQuestion()" ${idx === total - 1 ? 'disabled style="opacity:0.5"' : ''}>${t('quiz_next')}</button>`)
        : `<span style="color:var(--text-faint);font-size:13px;align-self:center;">${t('quiz_select_answer')}</span>`
      }
    </div>
  `;

  document.getElementById('quizModalBody').innerHTML = `
    <div class="quiz-header">
      <div class="quiz-modal-eyebrow">${t('quiz_module_title', {n: String(MODULE_ID).padStart(2, '0')})}</div>
      <div class="quiz-title">${t('quiz_question_label')} ${idx + 1} ${t('quiz_of')} ${total}</div>
      <div class="quiz-subtitle">${t('quiz_questions_n', {n: total})} · Pass-Threshold ${PASS_THRESHOLD}%</div>
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
  saveQuizProgress();
  renderQuizQuestion();
}

function nextQuestion() {
  if (currentQuiz.currentIndex < currentQuiz.questions.length - 1) {
    currentQuiz.currentIndex++;
    saveQuizProgress();
    renderQuizQuestion();
  }
}

function prevQuestion() {
  if (currentQuiz.currentIndex > 0) {
    currentQuiz.currentIndex--;
    saveQuizProgress();
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
  const t = (typeof tr === 'function') ? tr : function(k, v) { return k; };

  // Quiz ausgewertet — laufenden Fortschritt verwerfen
  clearQuizProgress();

  if (passed) {
    const state = loadState();
    if (!state.completed.includes(MODULE_ID)) state.completed.push(MODULE_ID);
    saveState(state);
    saveProgressToSupabase(state); // Save progress to Supabase after module quiz passed
  }

  // Nächstes-Modul-Karte sofort entsperren, falls jetzt bestanden (ohne Reload)
  updateNextModuleLock();

  const title = passed ? t('quiz_result_pass_module') : t('quiz_result_fail');
  const msg = passed
    ? t('quiz_result_next')
    : t('quiz_result_min', {p: PASS_THRESHOLD});

  const nextModuleId = MODULE_ID + 1;
  const hasNext = nextModuleId <= 6;

  const actions = passed
    ? (hasNext
        ? `<a href="modul-${String(nextModuleId).padStart(2, '0')}.html" class="btn btn-primary">${t('quiz_btn_continue')}</a>
           <a href="../index.html#curriculum" class="btn btn-ghost">${t('nav_curriculum')}</a>`
        : `<a href="../index.html#certificate" class="btn btn-primary">${t('quiz_btn_certificate')}</a>
           <a href="../index.html#curriculum" class="btn btn-ghost">${t('nav_curriculum')}</a>`)
    : `<button class="btn btn-primary" onclick="restartQuiz()">${t('quiz_btn_retry')}</button>
       <button class="btn btn-ghost" onclick="closeQuiz()">${t('quiz_reread')}</button>`;

  document.getElementById('quizModalBody').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-icon ${passed ? 'pass' : 'fail'}">${passed ? '✓' : '!'}</div>
      <div class="quiz-result-title">${title}</div>
      <div class="quiz-result-score">${correct} / ${total} ${t('quiz_correct_count_label')} · ${percent}%</div>
      <div class="quiz-result-msg">${msg}</div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">${actions}</div>
    </div>
  `;
}

function restartQuiz() { clearQuizProgress(); startQuiz(); }

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

// ---------- NÄCHSTES MODUL ERST NACH BESTANDENEM QUIZ FREISCHALTEN ----------
function isCurrentModuleCompleted() {
  const s = loadState();
  return Array.isArray(s.completed) && s.completed.indexOf(MODULE_ID) !== -1;
}

// Sperrt die "Nächstes Modul"-Karte, solange das aktuelle Modul-Quiz
// nicht mit mindestens PASS_THRESHOLD % bestanden wurde.
function updateNextModuleLock() {
  const card = document.querySelector('.nav-card-next');
  if (!card) return;
  const threshold = (typeof PASS_THRESHOLD !== 'undefined') ? PASS_THRESHOLD : 70;

  if (isCurrentModuleCompleted()) {
    // freischalten
    card.classList.remove('nav-card-locked');
    if (card.dataset.lockedHref) { card.setAttribute('href', card.dataset.lockedHref); delete card.dataset.lockedHref; }
    card.removeAttribute('aria-disabled');
    const hint = card.querySelector('.nav-card-lock-hint');
    if (hint) hint.remove();
  } else {
    // sperren: Link deaktivieren + Hinweis anzeigen
    card.classList.add('nav-card-locked');
    card.setAttribute('aria-disabled', 'true');
    const href = card.getAttribute('href');
    if (href) { card.dataset.lockedHref = href; card.removeAttribute('href'); }
    if (!card.querySelector('.nav-card-lock-hint')) {
      const hint = document.createElement('div');
      hint.className = 'nav-card-lock-hint';
      const t = (typeof tr === 'function') ? tr : function(k, v) { return '🔒 Erst nach bestandenem Quiz (≥ ' + (v ? v.p : '') + ' %)'; };
      hint.textContent = t('lock_hint', {p: threshold});
      card.appendChild(hint);
    }
  }
}

document.addEventListener('DOMContentLoaded', updateNextModuleLock);

// ---------- EXERCISE SOLUTION TOGGLE ----------
function toggleSolution(btn) {
  btn.classList.toggle('open');
  var sol = btn.nextElementSibling;
  sol.classList.toggle('visible');
  var isOpen = sol.classList.contains('visible');
  var label = btn.getAttribute('data-label-open') || 'Musterlösung ausblenden';
  var labelClosed = btn.getAttribute('data-label-closed') || 'Musterlösung anzeigen';
  btn.firstChild.textContent = isOpen ? label + ' ' : labelClosed + ' ';
}

/* ============================================
   IEG Claude Academy — i18n (DE / EN)
   ============================================ */

var currentLang = localStorage.getItem('ieg-lang') || 'de';

// ===== Module metadata translations =====
var MODULES_EN = [
  {
    title: 'The Claude Ecosystem: An Overview',
    meta: 'Introduction · Ecosystem',
    desc: 'Model family, Projects, interactive visualizations, Claude Cowork, Claude Code, and extensions — a structured overview of the entire Claude ecosystem.',
    duration: '25 min.'
  },
  {
    title: 'Claude — The Complete Beginner\'s Course (2026)',
    meta: 'Introduction · Fundamentals',
    desc: 'Chat discipline, web search, file analysis, technical support, personalization, and privacy — everything you need for a professional start with Claude.',
    duration: '45 min.'
  },
  {
    title: 'Prompting and Structured Instructions',
    meta: 'Core Skills · Module 2',
    desc: 'Introduction to crafting effective prompts, using examples, XML structures, and reusable instructions for more consistent results.',
    duration: '60 min.'
  },
  {
    title: 'Safe Use of Data and Tools',
    meta: 'Security · Module 3',
    desc: 'Fundamentals for safe use of Claude: sensitive content, typical risk areas, connectors, and key rules for privacy-conscious work.',
    duration: '15 min.'
  },
  {
    title: 'Skills and Reusable Workflows',
    meta: 'Advanced · Module 4',
    desc: 'Introduction to Skills as structured, reusable work instructions — from content preparation to practical application in daily work.',
    duration: '30 min.'
  },
  {
    title: 'Skills in Finance Workflows',
    meta: 'Practice · Module 5',
    desc: 'Practical use cases for Skills in finance-related processes, including data preparation, content structuring, dashboards, and recurring workflows.',
    duration: '30 min.'
  },
  {
    title: 'Claude Cowork — The Autonomous Desktop Agent',
    meta: 'Practice · Module 6',
    desc: 'While a chatbot only responds, Claude Cowork acts independently on your computer: sorting files, creating documents, researching online, and planning tasks — including setup, security, and personal instructions.',
    duration: '45 min.'
  },
  {
    title: 'Claude in Microsoft Office (Excel &amp; PowerPoint)',
    meta: 'Practice · Module 7',
    desc: 'The Claude add-in directly in Excel and PowerPoint: generate formulas by voice, write VBA macros, fix circular references, and create complete presentations from data tables.',
    duration: '30 min.'
  }
];

// ===== Translation strings =====
var I18N = {
  de: {
    // Nav
    nav_home: 'Übersicht',
    nav_curriculum: 'Curriculum',
    nav_team: 'Team',
    nav_certificate: 'Zertifikat',
    nav_progress_label: 'Fortschritt',
    nav_logout_title: 'Abmelden',
    nav_back_curriculum: 'Zurück zum Curriculum',
    nav_card_prev_label: '← Vorheriges Modul',
    nav_card_next_label: 'Nächstes Modul →',
    mod0_title_short: 'Das Claude-Ökosystem im Überblick',
    mod1_title_short: 'Claude — Der komplette Grundkurs (2026)',
    mod2_title_short: 'Prompting und strukturierte Anweisungen',
    mod3_title_short: 'Sicherer Umgang mit Daten und Tools',
    mod4_title_short: 'Skills und wiederverwendbare Workflows',
    mod5_title_short: 'Skills in Finance-Workflows',
    mod6_title_short: 'Claude Cowork — Der autonome Desktop-Agent',
    mod7_title_short: 'Claude in Microsoft Office (Excel &amp; PowerPoint)',
    mod1_breadcrumb_eyebrow: 'EINFÜHRUNG',
    mod1_breadcrumb_module: 'MODUL 1',
    mod1_meta_duration: '30 Min. Lernzeit',
    mod1_meta_quiz: '10 Quiz-Fragen',
    mod1_meta_video: 'Mit Video',

    // Hero
    hero_eyebrow: 'Internes Trainingsprogramm &middot; Onboarding für Analysts &amp; Interns &middot; 2026',
    hero_title: 'Claude im Investment Banking',
    hero_lede: 'Ein achtteiliger Einführungskurs für den strukturierten Einsatz von Claude im Investment-Banking-Alltag. Der Kurs richtet sich an neue Mitarbeitende und Interns und vermittelt Grundlagen, Anwendungsfälle und praktische Workflows für typische Aufgaben im Team — mit klarem Blick auf Sicherheit und Einsatzgrenzen.',
    stat_modules: 'Module',
    stat_quizzes: 'Quizze',
    stat_hours: 'Lernzeit',
    stat_certificate: 'Teilnahmezertifikat',
    hero_btn_start: 'Curriculum starten',
    hero_btn_team: 'Über das IEG Team',

    // Curriculum section
    curriculum_eyebrow: '/ Curriculum',
    curriculum_title: 'Acht Module für den strukturierten Einstieg.',
    curriculum_lede: 'Jedes Modul schließt mit einem Quiz ab. Nach erfolgreichem Abschluss wird das nächste Modul freigeschaltet. Nach allen acht Modulen folgt eine Abschlussprüfung mit internem Teilnahmezertifikat.',
    progress_text: '{c} von {t} Modulen abgeschlossen',

    // Module cards (dynamic)
    mod_status_completed: 'Abgeschlossen',
    mod_status_available: '▶ Jetzt verfügbar',
    mod_status_unlocked: 'Verfügbar',
    mod_status_locked: 'Erst nach Modul {n}',
    mod_action_repeat: 'Wiederholen',
    mod_action_start: 'Jetzt starten',
    mod_action_locked: '🔒 Gesperrt',

    // Final exam card
    final_meta: 'Abschlussprüfung · 40 Fragen',
    final_title: 'IEG Claude Academy — Abschlussprüfung',
    final_desc: 'Das Abschluss-Examen über alle Module. Pass-Threshold: 70 %.',
    final_status_passed: 'Bestanden',
    final_status_available: 'Verfügbar',
    final_status_locked: 'Alle Module abschließen',
    final_action_repeat: 'Wiederholen',
    final_action_start: 'Prüfung starten',
    final_action_locked: '🔒 Gesperrt',

    // Team section
    team_eyebrow: '/ Team',
    team_title: 'Die Menschen hinter IEG',
    team_lede: 'Eine kurze Einführung in das IEG Team und ausgewählte Ansprechpartner. Besonders hilfreich für neue Praktikantinnen, Praktikanten und Analystinnen bzw. Analysten im Onboarding.',
    locations_eyebrow: 'Standorte',

    // Certificate section
    cert_eyebrow: '/ Zertifikat',
    cert_title: 'Ihr IEG Claude Teilnahmezertifikat',
    cert_lede: 'Schließen Sie alle acht Module und die Abschlussprüfung ab, um Ihr persönliches, auf Ihren Namen ausgestelltes Zertifikat zu erhalten.',
    cert_status_locked: 'Status: noch nicht freigeschaltet',
    cert_status_exam_available: 'Status: Prüfung verfügbar',
    cert_status_progress: 'Status: {c}/8 Module',

    // Certificate document
    cert_doc_eyebrow: '/ Certificate',
    cert_doc_title: 'Ihr Zertifikat',
    cert_doc_lede: 'Herzlichen Glückwunsch — laden Sie Ihr persönliches Zertifikat als PDF herunter.',
    cert_doc_certifies: 'Hiermit wird bestätigt, dass',
    cert_doc_completed: 'den folgenden Kurs erfolgreich abgeschlossen hat:',
    cert_doc_date_label: 'Abschlussdatum',
    cert_doc_issued_label: 'Ausgestellt von',
    cert_doc_save: 'Als PDF speichern',

    // Name modal
    name_modal_title: 'Wer schreibt die Abschlussprüfung?',
    name_modal_body: 'Bitte geben Sie Ihren vollständigen Namen ein. Dieser erscheint auf Ihrem Zertifikat.',
    name_modal_placeholder: 'z. B. Max Mustermann',
    name_modal_btn: 'Zur Abschlussprüfung',

    // Quiz (module quiz)
    quiz_select_answer: 'Antwort wählen',
    quiz_back: '← Zurück',
    quiz_next: 'Nächste →',
    quiz_submit: 'Auswerten →',
    quiz_correct: '✓ Richtig.',
    quiz_wrong: '✗ Nicht ganz.',
    quiz_question_label: 'Frage',
    quiz_of: 'von',
    quiz_questions_n: '{n} Fragen',
    quiz_module_title: 'Modul {n} · Quiz',
    quiz_final_eyebrow: 'Abschlussprüfung',
    quiz_result_pass_final: 'Bestanden!',
    quiz_result_pass_module: 'Modul abgeschlossen',
    quiz_result_fail: 'Knapp daneben',
    quiz_result_cert: 'Ihr Zertifikat wartet.',
    quiz_result_next: 'Nächstes Kapitel freigeschaltet.',
    quiz_result_min: 'Mindestens {p}% nötig.',
    quiz_btn_certificate: 'Zum Zertifikat →',
    quiz_btn_continue: 'Weiter →',
    quiz_btn_retry: 'Nochmal',
    quiz_reread: 'Material erneut lesen',
    quiz_correct_count_label: 'richtig',
    lock_hint: '🔒 Erst nach bestandenem Quiz (≥ {p} %)',

    // Final exam
    exam_eyebrow: 'Abschlussprüfung',
    exam_title: 'IEG Claude Academy — Abschlussprüfung',
    exam_questions: '{n} Fragen',
    exam_pass_threshold: '{p}% zum Bestehen',
    exam_duration: '{m} Min. Bearbeitungszeit',
    exam_rule_1: 'Die Zeit läuft ab dem Start. Bei Ablauf wird die Prüfung automatisch abgegeben.',
    exam_rule_2: 'Ihr Fortschritt wird automatisch gespeichert — Sie können die Prüfung jederzeit fortsetzen.',
    exam_rule_3: 'Sie können Fragen frei wählen, beantworten, ändern und zur Überprüfung markieren.',
    exam_rule_4: 'Die Auswertung erfolgt erst nach der endgültigen Abgabe.',
    exam_start_btn: 'Prüfung starten',
    exam_question_label: 'Frage',
    exam_of: 'von',
    exam_answered_label: 'Beantwortet',
    exam_flag_add: 'Zur Überprüfung markieren',
    exam_flag_remove: 'Markierung entfernen',
    exam_back: '← Zurück',
    exam_next: 'Weiter →',
    exam_submit: 'Prüfung abgeben',
    exam_restored: 'Dein Prüfungsfortschritt wurde automatisch gespeichert und wiederhergestellt.',
    exam_confirm_eyebrow: 'Bestätigung',
    exam_confirm_title: 'Prüfung endgültig abgeben?',
    exam_confirm_lede: 'Nach der Abgabe kann die Prüfung nicht mehr bearbeitet werden. Die Auswertung erfolgt sofort.',
    exam_confirm_unanswered_1: 'noch unbeantwortet',
    exam_confirm_unanswered_n: 'noch unbeantwortet',
    exam_confirm_flagged_1: 'zur Überprüfung markiert',
    exam_confirm_flagged_n: 'zur Überprüfung markiert',
    exam_confirm_question_s: 'Frage',
    exam_confirm_question_p: 'Fragen',
    exam_confirm_all_answered: 'Alle {n} Fragen beantwortet.',
    exam_confirm_back: '← Zurück zur Prüfung',
    exam_confirm_submit: 'Endgültig abgeben',
    exam_result_pass: 'Bestanden!',
    exam_result_fail: 'Nicht bestanden',
    exam_result_auto: 'Die Bearbeitungszeit ist abgelaufen — die Prüfung wurde automatisch abgegeben.',
    exam_result_cert: 'Ihr Zertifikat wartet.',
    exam_result_retry_msg: 'Mindestens {p}% nötig. Sie können die Prüfung erneut versuchen.',
    exam_result_to_cert: 'Zum Zertifikat →',
    exam_result_retry: 'Erneut versuchen',
    exam_result_close: 'Schließen',

    // Footer
    footer_academy: 'Academy',
    footer_internal: 'Internal',
    footer_about: 'Über uns',
    footer_reset: 'Fortschritt zurücksetzen',
    footer_contact: 'Kontakt',

    // Misc
    confirm_reset: 'Gesamten Lernfortschritt zurücksetzen?',
    date_locale: 'de-DE'
  },

  en: {
    // Nav
    nav_home: 'Overview',
    nav_curriculum: 'Curriculum',
    nav_team: 'Team',
    nav_certificate: 'Certificate',
    nav_progress_label: 'Progress',
    nav_logout_title: 'Log out',
    nav_back_curriculum: 'Back to Curriculum',
    nav_card_prev_label: '← Previous Module',
    nav_card_next_label: 'Next Module →',
    mod0_title_short: 'The Claude Ecosystem: An Overview',
    mod1_title_short: 'Claude — The Complete Beginner\'s Course (2026)',
    mod2_title_short: 'Prompting and Structured Instructions',
    mod3_title_short: 'Safe Use of Data and Tools',
    mod4_title_short: 'Skills and Reusable Workflows',
    mod5_title_short: 'Skills in Finance Workflows',
    mod6_title_short: 'Claude Cowork — The Autonomous Desktop Agent',
    mod7_title_short: 'Claude in Microsoft Office (Excel &amp; PowerPoint)',
    mod1_breadcrumb_eyebrow: 'INTRODUCTION',
    mod1_breadcrumb_module: 'MODULE 1',
    mod1_meta_duration: '30 min. learning time',
    mod1_meta_quiz: '10 quiz questions',
    mod1_meta_video: 'With video',

    // Hero
    hero_eyebrow: 'Internal Training Program &middot; Onboarding for Analysts &amp; Interns &middot; 2026',
    hero_title: 'Claude in Investment Banking',
    hero_lede: 'An eight-part introductory course for the structured use of Claude in day-to-day investment banking. The course is designed for new employees and interns, covering fundamentals, use cases, and practical workflows for typical team tasks — with a clear focus on safety and boundaries.',
    stat_modules: 'Modules',
    stat_quizzes: 'Quizzes',
    stat_hours: 'Learning Time',
    stat_certificate: 'Certificate',
    hero_btn_start: 'Start Curriculum',
    hero_btn_team: 'About the IEG Team',

    // Curriculum section
    curriculum_eyebrow: '/ Curriculum',
    curriculum_title: 'Eight modules for a structured introduction.',
    curriculum_lede: 'Each module ends with a quiz. After successful completion, the next module is unlocked. After all eight modules, a final exam follows with an internal participation certificate.',
    progress_text: '{c} of {t} modules completed',

    // Module cards (dynamic)
    mod_status_completed: 'Completed',
    mod_status_available: '▶ Now available',
    mod_status_unlocked: 'Available',
    mod_status_locked: 'After module {n}',
    mod_action_repeat: 'Repeat',
    mod_action_start: 'Start now',
    mod_action_locked: '🔒 Locked',

    // Final exam card
    final_meta: 'Final Exam · 40 Questions',
    final_title: 'IEG Claude Academy — Final Exam',
    final_desc: 'The final exam covering all modules. Pass threshold: 70%.',
    final_status_passed: 'Passed',
    final_status_available: 'Available',
    final_status_locked: 'Complete all modules',
    final_action_repeat: 'Repeat',
    final_action_start: 'Start exam',
    final_action_locked: '🔒 Locked',

    // Team section
    team_eyebrow: '/ Team',
    team_title: 'The People Behind IEG',
    team_lede: 'A brief introduction to the IEG team and selected contact persons. Especially helpful for new interns and analysts during onboarding.',
    locations_eyebrow: 'Locations',

    // Certificate section
    cert_eyebrow: '/ Certificate',
    cert_title: 'Your IEG Claude Participation Certificate',
    cert_lede: 'Complete all eight modules and the final exam to receive your personal certificate issued in your name.',
    cert_status_locked: 'Status: not yet unlocked',
    cert_status_exam_available: 'Status: Exam available',
    cert_status_progress: 'Status: {c}/8 modules',

    // Certificate document
    cert_doc_eyebrow: '/ Certificate',
    cert_doc_title: 'Your Certificate',
    cert_doc_lede: 'Congratulations — download your personal certificate as a PDF.',
    cert_doc_certifies: 'This is to certify that',
    cert_doc_completed: 'has successfully completed the following course:',
    cert_doc_date_label: 'Completion Date',
    cert_doc_issued_label: 'Issued by',
    cert_doc_save: 'Save as PDF',

    // Name modal
    name_modal_title: 'Who is taking the final exam?',
    name_modal_body: 'Please enter your full name. This will appear on your certificate.',
    name_modal_placeholder: 'e.g. Jane Smith',
    name_modal_btn: 'To the Final Exam',

    // Quiz (module quiz)
    quiz_select_answer: 'Select answer',
    quiz_back: '← Back',
    quiz_next: 'Next →',
    quiz_submit: 'Submit →',
    quiz_correct: '✓ Correct.',
    quiz_wrong: '✗ Not quite.',
    quiz_question_label: 'Question',
    quiz_of: 'of',
    quiz_questions_n: '{n} questions',
    quiz_module_title: 'Module {n} · Quiz',
    quiz_final_eyebrow: 'Final Exam',
    quiz_result_pass_final: 'Passed!',
    quiz_result_pass_module: 'Module completed',
    quiz_result_fail: 'Not quite',
    quiz_result_cert: 'Your certificate is waiting.',
    quiz_result_next: 'Next chapter unlocked.',
    quiz_result_min: 'At least {p}% required.',
    quiz_btn_certificate: 'To certificate →',
    quiz_btn_continue: 'Continue →',
    quiz_btn_retry: 'Try again',
    quiz_reread: 'Review the material',
    quiz_correct_count_label: 'correct',
    lock_hint: '🔒 Available after passing the quiz (≥ {p}%)',

    // Final exam
    exam_eyebrow: 'Final Exam',
    exam_title: 'IEG Claude Academy — Final Exam',
    exam_questions: '{n} questions',
    exam_pass_threshold: '{p}% to pass',
    exam_duration: '{m} min. time limit',
    exam_rule_1: 'The timer starts when you begin. The exam is automatically submitted when time runs out.',
    exam_rule_2: 'Your progress is saved automatically — you can resume the exam at any time.',
    exam_rule_3: 'You can freely navigate between questions, change answers, and flag questions for review.',
    exam_rule_4: 'Results are only shown after final submission.',
    exam_start_btn: 'Start exam',
    exam_question_label: 'Question',
    exam_of: 'of',
    exam_answered_label: 'Answered',
    exam_flag_add: 'Flag for review',
    exam_flag_remove: 'Remove flag',
    exam_back: '← Back',
    exam_next: 'Next →',
    exam_submit: 'Submit exam',
    exam_restored: 'Your exam progress was automatically saved and restored.',
    exam_confirm_eyebrow: 'Confirmation',
    exam_confirm_title: 'Submit exam for final grading?',
    exam_confirm_lede: 'The exam cannot be edited after submission. Results are shown immediately.',
    exam_confirm_unanswered_1: 'still unanswered',
    exam_confirm_unanswered_n: 'still unanswered',
    exam_confirm_flagged_1: 'flagged for review',
    exam_confirm_flagged_n: 'flagged for review',
    exam_confirm_question_s: 'question',
    exam_confirm_question_p: 'questions',
    exam_confirm_all_answered: 'All {n} questions answered.',
    exam_confirm_back: '← Back to exam',
    exam_confirm_submit: 'Submit final',
    exam_result_pass: 'Passed!',
    exam_result_fail: 'Not passed',
    exam_result_auto: 'Time is up — the exam was submitted automatically.',
    exam_result_cert: 'Your certificate is waiting.',
    exam_result_retry_msg: 'At least {p}% required. You can try again.',
    exam_result_to_cert: 'To certificate →',
    exam_result_retry: 'Try again',
    exam_result_close: 'Close',

    // Footer
    footer_academy: 'Academy',
    footer_internal: 'Internal',
    footer_about: 'About us',
    footer_reset: 'Reset progress',
    footer_contact: 'Contact',

    // Misc
    confirm_reset: 'Reset all learning progress?',
    date_locale: 'en-GB'
  }
};

// ===== Core translation function =====
function tr(key, vars) {
  var lang = currentLang;
  var str = (I18N[lang] && I18N[lang][key] !== undefined)
    ? I18N[lang][key]
    : (I18N['de'][key] !== undefined ? I18N['de'][key] : key);
  if (vars) {
    Object.keys(vars).forEach(function(k) {
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
    });
  }
  return str;
}

// ===== Apply language to static DOM elements =====
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ieg-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = tr(key);
    var attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, val);
    } else if (el.tagName === 'INPUT') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  var btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';

  if (typeof renderEverything === 'function') renderEverything();
}

function toggleLanguage() {
  applyLanguage(currentLang === 'de' ? 'en' : 'de');
}
