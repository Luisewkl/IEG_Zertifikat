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
