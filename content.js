/* ============================================
   IEG Claude Academy — Content
   Alle Module + Quizzes
   v4.0 — Alle Antworten durchgemischt
   ============================================ */

const CURRICULUM = [
  {
    id: 0,
    number: '00',
    meta: 'Strategic Orientation · Foundational',
    title: 'Claude im Überblick — Projects, Cowork & Code',
    desc: 'Organisation durch Projects, Visualisierung im Chat, Claude Cowork als autonomer Assistent und Entwicklung mit Claude Code, Skills und Konnektoren.',
    duration: '20 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/EE9qr6Bfwj8', title: 'Claude im Überblick', caption: 'Video 0.1 · Claude Features im Überblick' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Organisation durch Projects</h3>
      <p>Projects fungieren wie ein <strong>ausgelagertes Gehirn</strong> — ein Briefing-Ordner,
      in dem du Dokumente, Anweisungen und Kontext für spezifische Themenbereiche abspeichern kannst.</p>
      <p>Einmal angelegt (z.&thinsp;B. für Kunden-E-Mails inklusive Tonfall und Produktinfos),
      muss man für neue Gespräche innerhalb dieses Projekts <strong>nicht wieder bei null anfangen</strong>.
      Das spart enorm Zeit bei Routineaufgaben.</p>

      <h3>2. Visualisierung und Interaktivität</h3>
      <p>Claude kann <strong>ohne zusätzliche Plugins oder Installationen</strong> Diagramme,
      Dashboards und interaktive Grafiken erstellen — direkt im Chat.</p>
      <div class="callout">
        <div class="callout-title">So einfach geht es</div>
        <p>Ein Befehl wie &bdquo;zeig mir&ldquo; reicht aus, damit das visuelle Element
        direkt im Chat-Fenster erscheint. Keine externe Software nötig.</p>
      </div>

      <h3>3. Claude Cowork: Der autonome Assistent</h3>
      <p>Cowork lebt in der <strong>Desktop-App</strong> und arbeitet Aufgaben ab, solange der
      Computer eingeschaltet und die App offen ist.</p>
      <ul>
        <li><strong>Hintergrund-Arbeit:</strong> Cowork erledigt Aufgaben autonom, während du
        andere Dinge tust.</li>
        <li><strong>Fernsteuerung per App:</strong> Du kannst Cowork von unterwegs über dein
        Handy Anweisungen geben — z.&thinsp;B. das Organisieren von hunderten Dateien auf
        deinem Desktop.</li>
      </ul>

      <h3>4. Entwicklung und Erweiterungen</h3>
      <h4>Claude Code</h4>
      <p>Dieser Dienst fungiert als <strong>persönlicher Entwickler</strong>, der
      Webseiten-Prototypen, Tools und Apps baut, ohne dass du selbst Code schreiben musst.</p>

      <h4>Skills und Plugins</h4>
      <ul>
        <li><strong>Skills:</strong> Einzelne Fähigkeiten, die du Claude beibringst
        (z.&thinsp;B. einen bestimmten Schreibstil oder Analyseprozess).</li>
        <li><strong>Plugins:</strong> Ganze Bündel solcher Fähigkeiten (z.&thinsp;B. das
        &bdquo;Productivity&ldquo;-Plugin), um Claude zum persönlichen Assistenten zu machen.</li>
      </ul>

      <h4>Konnektoren</h4>
      <p>Konnektoren verbinden Claude direkt mit Anwendungen wie <strong>Gmail, Google Calendar
      oder Notion</strong>, sodass die KI innerhalb dieser Tools agieren kann.</p>

      <div class="callout callout-warn">
        <div class="callout-title">Wichtig bei Konnektoren</div>
        <p>Konnektoren sind mächtig, aber bergen Sicherheitsrisiken — mehr dazu in Modul 04
        (Sicherheit &amp; Datenschutz).</p>
      </div>
    `,
    quiz: [
      {
        q: 'Wozu dienen "Projects" in Claude?',
        options: [
          'Sie sind nur für die Ablage alter Chats gedacht',
          'Sie ersetzen die Websuche vollständig',
          'Sie fungieren als Briefing-Ordner mit Dokumenten, Anweisungen und Kontext für spezifische Themen',
          'Sie aktivieren den Programmiermodus'
        ],
        correct: 2,
        explanation: 'Projects sind wie ein ausgelagertes Gehirn: Dokumente, Tonfall, Produktinfos — einmal angelegt, muss man nicht bei null anfangen.'
      },
      {
        q: 'Was braucht Claude, um Diagramme und interaktive Grafiken zu erstellen?',
        options: [
          'Ein spezielles Grafik-Plugin aus dem App Store',
          'Nichts — Claude kann das ohne Plugins direkt im Chat',
          'Eine externe Anbindung an PowerPoint',
          'Mindestens die Pro-Version und ein Screenshot'
        ],
        correct: 1,
        explanation: 'Claude erstellt Diagramme und Dashboards direkt im Chat — ohne Plugins oder Installationen. Ein Befehl wie "zeig mir" reicht.'
      },
      {
        q: 'Welche Voraussetzung hat Claude Cowork?',
        options: [
          'Cowork funktioniert nur mit Internetverbindung im Browser',
          'Cowork braucht eine spezielle Server-Installation',
          'Computer muss eingeschaltet und die Desktop-App offen sein',
          'Cowork läuft ausschließlich auf dem Handy'
        ],
        correct: 2,
        explanation: 'Cowork lebt in der Desktop-App und arbeitet Aufgaben ab, solange Computer und App aktiv sind. Per Handy kann man es auch fernsteuern.'
      },
      {
        q: 'Was ist der Unterschied zwischen Skills und Plugins?',
        options: [
          'Skills sind einzelne Fähigkeiten, Plugins sind ganze Bündel von Fähigkeiten',
          'Es gibt keinen Unterschied — beides sind Synonyme',
          'Plugins sind kostenlos, Skills kosten extra',
          'Skills funktionieren nur mit Claude Code'
        ],
        correct: 0,
        explanation: 'Skills = einzelne Fähigkeiten (z.B. ein Schreibstil). Plugins = ganze Bündel solcher Fähigkeiten (z.B. das Productivity-Plugin).'
      },
      {
        q: 'Was machen Konnektoren in Claude?',
        options: [
          'Sie übersetzen Prompts in andere Sprachen',
          'Sie verbessern die Antwortgeschwindigkeit',
          'Sie speichern Chats als PDF',
          'Sie verbinden Claude mit Apps wie Gmail, Calendar oder Notion, sodass die KI dort agieren kann'
        ],
        correct: 3,
        explanation: 'Konnektoren verknüpfen Claude direkt mit externen Anwendungen — die KI kann dann innerhalb dieser Tools lesen und handeln.'
      }
    ]
  },
  {
    id: 1,
    number: '01',
    meta: 'Beginner · Module 1',
    title: 'Foundations & The Analyst\u2019s Workbench',
    desc: 'Claude-Grundlagen, Chat-Organisation, die drei Modelle (Haiku, Sonnet, Opus), zentrale Funktionen, Personalisierung und Datenschutz.',
    duration: '30 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/51vysjHcJ5A', title: 'Claude kompletter Grundkurs (2026)', caption: 'Video 1.1 \u00b7 Claude Grundkurs \u2014 von Beginner zu Profi (30:42)' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Grundlagen und Chat-Organisation</h3>
      <p>Claude funktioniert \u00e4hnlich wie ChatGPT oder Gemini \u00fcber eine zentrale Textbox
      f\u00fcr Prompts (Anfragen). Entscheidend f\u00fcr gute Ergebnisse ist die <strong>Chat-Disziplin</strong>:</p>
      <div class="callout">
        <div class="callout-title">Goldene Regel</div>
        <p>Erstelle f\u00fcr <strong>jedes neue Thema</strong> einen neuen Chat. Das Vermischen von Themen
        in einem Chat verwirrt die KI und verschlechtert die Ergebnisqualit\u00e4t erheblich.</p>
      </div>

      <h3>2. Die Modellfamilie</h3>
      <table>
        <thead><tr><th>Modell</th><th>St\u00e4rke</th><th>Typischer Einsatz</th></tr></thead>
        <tbody>
          <tr><td><strong>Haiku</strong></td><td>Das schnellste Modell</td><td>Einfache Formatierungen, schnelle Antworten.</td></tr>
          <tr><td><strong>Sonnet</strong></td><td>Der Allrounder</td><td>T\u00e4gliche Arbeit, Standard in der Gratisversion.</td></tr>
          <tr><td><strong>Opus</strong></td><td>Das leistungsst\u00e4rkste Modell</td><td>Komplexe Recherchen, Quellen und Studien integrieren. Pro-Version.</td></tr>
        </tbody>
      </table>

      <h3>3. Zentrale Funktionen</h3>
      <h4>Websuche</h4>
      <p>Kann \u00fcber das <strong>Plus-Symbol</strong> aktiviert werden, um aktuelle Informationen aus dem Internet zu ziehen.</p>
      <h4>Dateiupload</h4>
      <p>Claude verarbeitet <strong>PDFs, Excel-Tabellen und Word-Dokumente</strong>. F\u00fcr gr\u00fcndliche Analysen empfiehlt sich der <em>erweiterte Nachdenkenmodus</em> (Stoppuhr-Symbol).</p>
      <h4>Technik-Berater</h4>
      <p>Claude kann technische Probleme l\u00f6sen, indem man Anfragen mit <strong>Screenshots</strong> kombiniert.</p>

      <h3>4. Personalisierung</h3>
      <ul>
        <li><strong>Pr\u00e4ferenzen:</strong> Globale Einstellungen f\u00fcr jeden neuen Chat.</li>
        <li><strong>Stile:</strong> Eigene Schreibstile durch Hochladen von Textproben.</li>
        <li><strong>Erinnerungen (Memory):</strong> Gezielte Anweisungen f\u00fcr die Zukunft.</li>
      </ul>

      <h3>5. Produktivit\u00e4t und fortgeschrittene Tools</h3>
      <h4>Projekte</h4>
      <p>Geschlossener Bereich f\u00fcr Chats mit hinterlegten Anweisungen und Dateien.</p>
      <h4>Claude in Excel</h4>
      <p>Eine <strong>Pro-Funktion</strong>, die direkt in Excel Tabellen f\u00fcllt, Charts erstellt und Formelfehler korrigiert.</p>

      <h3>6. Datenschutz und Sicherheit</h3>
      <div class="callout callout-warn">
        <div class="callout-title">Pflicht bei IEG</div>
        <p><strong>Training deaktivieren:</strong> Unter \u201eDatenschutz\u201c die Option \u201ehilft dabei Claude zu verbessern\u201c <strong>deaktivieren</strong>.</p>
      </div>
      <p><strong>Inkognitomodus</strong> (Geist-Symbol): Chats werden nicht dauerhaft gespeichert.</p>
    `,
    quiz: [
      {
        q: 'Warum sollte man f\u00fcr jedes neue Thema einen separaten Chat erstellen?',
        options: [
          'Weil separate Chats schneller laden und k\u00fcrzere Antworten erzwingen',
          'Weil Claude nur einen Chat gleichzeitig speichern kann',
          'Weil das Vermischen von Themen die KI verwirrt und die Ergebnisqualit\u00e4t verschlechtert',
          'Damit Themen ohne Zusammenhang besser vermischt werden'
        ],
        correct: 2,
        explanation: 'Chat-Disziplin: Themen mischen verwirrt den Kontext und verschlechtert die Antwortqualit\u00e4t.'
      },
      {
        q: 'Welches Claude-Modell eignet sich f\u00fcr tiefgehende Analysen mit Quellen?',
        options: [
          'Haiku \u2014 das schnellste Modell',
          'Alle drei Modelle liefern identische Ergebnisse',
          'Sonnet \u2014 der Allrounder',
          'Opus \u2014 das leistungsst\u00e4rkste Modell'
        ],
        correct: 3,
        explanation: 'Opus kann Quellen und Studien integrieren \u2014 ideal f\u00fcr komplexe Recherchen.'
      },
      {
        q: 'Was sollte man vor einer gr\u00fcndlichen Dateianalyse aktivieren?',
        options: [
          'Einen neuen Schreibstil erstellen',
          'Den erweiterten Nachdenkenmodus (Stoppuhr-Symbol)',
          'Den Inkognitomodus',
          'Die Websuche \u00fcber das Plus-Symbol'
        ],
        correct: 1,
        explanation: 'Der erweiterte Nachdenkenmodus sorgt daf\u00fcr, dass Claude die Datei gr\u00fcndlicher einliest.'
      },
      {
        q: 'Was ist der Unterschied zwischen Pr\u00e4ferenzen und Erinnerungen (Memory)?',
        options: [
          'Pr\u00e4ferenzen gelten nur f\u00fcr ein einzelnes Wort',
          'Pr\u00e4ferenzen sind globale Einstellungen f\u00fcr jeden Chat, Erinnerungen sind gezielte Zukunfts-Anweisungen',
          'Erinnerungen sind nur in der Gratisversion verf\u00fcgbar',
          'Es gibt keinen Unterschied'
        ],
        correct: 1,
        explanation: 'Pr\u00e4ferenzen = global f\u00fcr jeden neuen Chat. Erinnerungen = gezielte Einzelanweisungen im Ged\u00e4chtnis.'
      },
      {
        q: 'Welche Datenschutz-Einstellung muss bei IEG deaktiviert werden?',
        options: [
          'Die Websuche',
          'Die Erinnerungen (Memory)',
          'Der Inkognitomodus',
          'Die Option \u201ehilft dabei Claude zu verbessern\u201c unter Datenschutz'
        ],
        correct: 3,
        explanation: 'Pflicht bei IEG: Trainings-Option deaktivieren, damit keine Firmendaten zum KI-Training genutzt werden.'
      }
    ]
  },
  {
    id: 2,
    number: '02',
    meta: 'Intermediate · Module 2',
    title: 'Prompt Engineering Masterclass',
    desc: 'Die 6 Bausteine des perfekten Prompts, XML-Tags, Few-Shot, Chain of Thought, Prompt Chaining, Self-Reflection, Pre-filling und System Prompts.',
    duration: '35 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/m4rFoTPpeAA', title: 'Prompt Engineering Praxis', caption: 'Video 2.1 · Prompt Engineering in der Praxis' },
      { url: 'https://www.youtube.com/embed/ysPbXH0LpIE', title: 'Anthropic Best Practices', caption: 'Video 2.2 · Prompt Engineering 101 nach Anthropic' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Prompt Engineering als iterative Wissenschaft</h3>
      <p>Prompt Engineering ist kein einmaliges Eintippen, sondern eine <strong>empirische Wissenschaft</strong>.</p>
      <ul>
        <li><strong>Der Prozess:</strong> Man startet mit einer Basis-Anweisung, analysiert die Fehler
        der KI und baut den Prompt <em>schrittweise (iterativ)</em> aus, bis das Ergebnis perfekt ist.</li>
        <li><strong>Das Ziel:</strong> Klare Anweisungen und Kontext so strukturieren, dass die KI
        im ersten Versuch (&bdquo;One-Shot&ldquo;) das gewünschte Ergebnis liefert.</li>
      </ul>

      <h3>2. Die 6 Bausteine des perfekten Prompts</h3>
      <table>
        <thead><tr><th>Baustein</th><th>Beschreibung</th><th>Beispiel</th></tr></thead>
        <tbody>
          <tr><td><strong>Rolle</strong></td><td>Gib Claude eine fachliche Identität</td><td>&bdquo;Du bist ein erfahrener Social-Media-Berater&ldquo;</td></tr>
          <tr><td><strong>Aufgabe</strong></td><td>Das Herzstück &mdash; starte mit einem Verb</td><td>&bdquo;Analysiere&ldquo;, &bdquo;Erstelle&ldquo;, &bdquo;Vergleiche&ldquo;</td></tr>
          <tr><td><strong>Kontext</strong></td><td>Relevante Hintergrundinfos</td><td>Zielgruppe, Problemstellung, Tonfall</td></tr>
          <tr><td><strong>Vorgehen</strong></td><td>Logische Einzelschritte (Fahrplan)</td><td>&bdquo;Schritt 1: Recherche, Schritt 2: Analyse&ldquo;</td></tr>
          <tr><td><strong>Stoppkriterien</strong></td><td>Grenzen gegen Halluzinationen</td><td>&bdquo;Wenn du unsicher bist, sag es offen&ldquo;</td></tr>
          <tr><td><strong>Output</strong></td><td>Genaues Format bestimmen</td><td>Tabelle, Liste, JSON, Wortanzahl</td></tr>
        </tbody>
      </table>

      <div class="callout">
        <div class="callout-title">Warum Stoppkriterien?</div>
        <p>Ohne klare Grenzen &bdquo;ratet&ldquo; Claude lieber, als zuzugeben, dass er unsicher ist.
        Stoppkriterien wie &bdquo;Verwende keine Fachbegriffe&ldquo; verhindern Halluzinationen.</p>
      </div>

      <h3>3. Strukturierung durch XML-Tags</h3>
      <p>Anthropic empfiehlt XML-Tags (z.B. <code>&lt;anweisungen&gt;</code>,
      <code>&lt;kontext&gt;</code>, <code>&lt;beispiel&gt;</code>), um Informationen sauber zu trennen.</p>
      <ul>
        <li><strong>Vorteil:</strong> Claude wurde darauf trainiert, diese Struktur zu verstehen.</li>
        <li><strong>Output-Kontrolle:</strong> Endergebnis in Tags wie <code>&lt;urteil&gt;</code> setzen für automatisierte Weiterverarbeitung.</li>
      </ul>

      <h3>4. Fortgeschrittene Prompt-Techniken</h3>
      <h4>Few-Shot Prompting</h4>
      <p>Zeige Claude <strong>1 bis 3 Beispiele</strong> &mdash; oft mächtiger als jede lange Beschreibung.</p>
      <h4>Chain of Thought (Gedankenkette)</h4>
      <p>Weise Claude an, <strong>&bdquo;Schritt für Schritt zu denken&ldquo;</strong> &mdash; verbessert die Logik massiv.</p>
      <h4>Prompt Chaining</h4>
      <p>Riesige Aufgabe in <strong>kleine, aufeinanderfolgende Prompts</strong> zerlegen. Jedes Teilergebnis prüfen.</p>
      <h4>Self-Reflection</h4>
      <p>Claude bitten, seine Antwort <strong>selbst auf Fehler zu prüfen</strong> und zu überarbeiten.</p>
      <h4>Pre-filling</h4>
      <p>Anfang der Antwort vorgeben (z.B. <code>{</code> für JSON) &mdash; <strong>erzwingt das Format strikt</strong>.</p>

      <h3>5. Effizienz durch System-Prompts &amp; Caching</h3>
      <ul>
        <li><strong>System-Prompts:</strong> Statische Informationen (z.B. Firmenformulare) auslagern.</li>
        <li><strong>Prompt Caching:</strong> Spart Zeit, da Claude statische Dokumente nicht neu einlesen muss.</li>
      </ul>

      <h3>6. Die Reihenfolge der Analyse</h3>
      <p>Immer <strong>Form vor Sketch</strong> &mdash; erst klare Fakten, dann interpretative Daten.</p>

      <div class="callout callout-warn">
        <div class="callout-title">Merke</div>
        <p>Strukturierte Daten liefern den Kontext, in dem unstrukturierte Daten korrekt interpretiert werden.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Was bedeutet es, dass Prompt Engineering eine "iterative Wissenschaft" ist?',
        options: ['Man kopiert Prompts aus dem Internet', 'Man startet mit einer Basis, analysiert Fehler und verbessert schrittweise', 'Man schreibt einmal einen perfekten Prompt', 'Man lässt die KI den Prompt selbst schreiben'],
        correct: 1, explanation: 'Iterativ = schrittweise verbessern. Basis → Fehler analysieren → ausbauen → wiederholen.'
      },
      {
        q: 'Welcher der 6 Bausteine wird als "Herzstück" eines Prompts bezeichnet?',
        options: ['Der Kontext', 'Das Output-Format', 'Die Rolle', 'Die Aufgabe — sie startet immer mit einem Verb'],
        correct: 3, explanation: 'Die Aufgabe ist das Herzstück. Sie muss konkret sein und mit einem Verb starten.'
      },
      {
        q: 'Wozu dienen "Stoppkriterien" in einem Prompt?',
        options: ['Sie beenden den Chat nach einer bestimmten Zeit', 'Sie verhindern, dass Claude Fragen stellt', 'Sie setzen Grenzen gegen Halluzinationen', 'Sie begrenzen die Wortanzahl auf 100 Wörter'],
        correct: 2, explanation: 'Stoppkriterien verhindern, dass Claude ratet statt Unsicherheit zuzugeben.'
      },
      {
        q: 'Warum empfiehlt Anthropic XML-Tags im Prompt?',
        options: ['Weil sie den Prompt verschlüsseln', 'Weil Claude darauf trainiert wurde und sich gezielt auf Abschnitte beziehen kann', 'Weil sie für die Websuche nötig sind', 'Weil sie den Prompt optisch schöner machen'],
        correct: 1, explanation: 'Claude wurde auf XML-Struktur trainiert. Tags ermöglichen gezielte Referenzierung.'
      },
      {
        q: 'Was ist "Prompt Chaining"?',
        options: ['Den Prompt in eine Kette aus Emojis verpacken', 'Prompts automatisch übersetzen', 'Eine große Aufgabe in kleine, aufeinanderfolgende Prompts zerlegen', 'Mehrere KI-Modelle gleichzeitig nutzen'],
        correct: 2, explanation: 'Prompt Chaining: Große Aufgabe → kleine Schritte → Teilergebnisse prüfen → weiter.'
      },
      {
        q: 'Was bewirkt "Self-Reflection" als Prompt-Technik?',
        options: ['Claude erstellt automatisch ein Tagebuch', 'Der User reflektiert über seine Frage', 'Claude meditiert vor jeder Antwort', 'Claude prüft seine Antwort selbst auf Fehler und überarbeitet sie'],
        correct: 3, explanation: 'Self-Reflection: Claude wird gebeten, seine Antwort kritisch zu prüfen und zu verbessern.'
      },
      {
        q: 'Wie funktioniert Pre-filling?',
        options: ['Man speichert häufig genutzte Prompts', 'Man gibt Claude den Anfang seiner Antwort vor (z.B. { für JSON)', 'Man lässt Claude den Chat zusammenfassen', 'Man füllt ein Online-Formular aus'],
        correct: 1, explanation: 'Pre-filling: Antwort mit { beginnen = JSON erzwingen.'
      },
      {
        q: 'Warum sollten statische Informationen in den System-Prompt?',
        options: ['Weil der System-Prompt unbegrenzt lang sein kann', 'Weil normale Prompts keine Dokumente akzeptieren', 'Weil statische Infos durch Caching nicht jedes Mal neu eingelesen werden', 'Weil der System-Prompt schneller tippt'],
        correct: 2, explanation: 'Caching: Statische Infos werden gecacht = weniger Verarbeitungszeit.'
      },
      {
        q: 'Welche Reihenfolge gilt bei kombinierter Bild-Text-Analyse?',
        options: ['Die Reihenfolge spielt keine Rolle', 'Erst klare Fakten (Formular), dann interpretative Daten (Skizze)', 'Beides gleichzeitig für Effizienz', 'Erst die Skizze, dann das Formular'],
        correct: 1, explanation: 'Form vor Sketch: Strukturierte Daten liefern den Kontext für die Interpretation.'
      },
      {
        q: 'Was ist der Vorteil von Few-Shot Prompting?',
        options: ['Es funktioniert nur mit Claude Opus', 'Es ist billiger weil weniger Tokens verbraucht werden', '1–3 konkrete Beispiele zeigen Claude das Ergebnis besser als lange Beschreibungen', 'Few-Shot funktioniert nur für Code'],
        correct: 2, explanation: 'Konkrete Beispiele sind oft mächtiger als lange Erklärungen — Claude lernt am Muster.'
      }
    ]
  },
  {
    id: 3,
    number: '03',
    meta: 'Advanced \u00b7 Module 3',
    title: 'Claude Skills \u2014 KI-Experten auf Knopfdruck',
    desc: 'Skills als wiederverwendbare Arbeitsanweisungen. Von der Wissensgewinnung mit NotebookLM \u00fcber die Skill-Konfiguration bis zur Anwendung.',
    duration: '30 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/XHVgq4zodpE', title: 'Claude Skills', caption: 'Video 3.1 \u00b7 Claude Skills erstellen und anwenden' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Was sind Claude Skills?</h3>
      <p>Ein Skill ist eine <strong>fest definierte, wiederverwendbare Arbeitsanweisung</strong>.</p>
      <table>
        <thead><tr><th>Eigenschaft</th><th>Projekte</th><th>Skills</th></tr></thead>
        <tbody>
          <tr><td><strong>\u00dcbertragbarkeit</strong></td><td>Isoliert</td><td>In jedem Chat nutzbar</td></tr>
          <tr><td><strong>Kombinierbarkeit</strong></td><td>Festgefahren</td><td>Flexibel kombinierbar</td></tr>
          <tr><td><strong>Systematik</strong></td><td>Manuell</td><td>Definierte Prozesse</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Kernidee</div>
        <p>Statt der KI jedes Mal zu sagen was sie tun soll, baust du eine <strong>Sammlung klar definierter Prozesse</strong> auf.</p>
      </div>

      <h3>2. Wissensgewinnung mit NotebookLM</h3>
      <ul>
        <li><strong>Deep Research:</strong> NotebookLM durchsucht \u00fcber 60 Quellen.</li>
        <li><strong>Wissen strukturieren:</strong> Rohmaterial in ein klares System \u00fcberf\u00fchren.</li>
      </ul>

      <h3>3. Den Skill in Claude konfigurieren</h3>
      <p>Im <strong>Skill Creator Modus</strong> stellt Claude R\u00fcckfragen: Ziel, Zielgruppe, Output-Format, Sprache.</p>

      <h3>4. Den Skill im Alltag anwenden</h3>
      <ul>
        <li>\u00dcber das <strong>Plus-Symbol</strong> im Chat ausw\u00e4hlen.</li>
        <li>Geringer Prompt-Aufwand dank verankertem Expertenwissen.</li>
        <li>Automatisch: Storytelling, Social Proof, psychologische Ans\u00e4tze.</li>
      </ul>

      <h3>5. Skalierbarkeit</h3>
      <p>Nicht auf Landing Pages beschr\u00e4nkt \u2014 einsetzbar f\u00fcr E-Mail-Funnels, Content-Strategien, Unternehmensstrategien.</p>
    `,
    quiz: [
      {
        q: 'Was unterscheidet einen Claude Skill von einer Projektanweisung?',
        options: [
          'Skills funktionieren nur mit Claude Opus',
          'Ein Skill ist nur f\u00fcr private Notizen gedacht',
          'Projektanweisungen sind flexibler als Skills',
          'Skills sind \u00fcbertragbar und in jedem Chat nutzbar, Projektanweisungen sind isoliert'
        ],
        correct: 3,
        explanation: 'Skills sind \u00fcbertragbar und kombinierbar \u2014 Projektanweisungen bleiben an ein Projekt gebunden.'
      },
      {
        q: 'Welches Tool wird f\u00fcr die Wissensgewinnung vor der Skill-Erstellung empfohlen?',
        options: [
          'Google Docs',
          'NotebookLM mit Deep Research',
          'Microsoft Word',
          'ChatGPT'
        ],
        correct: 1,
        explanation: 'NotebookLM mit Deep Research durchsucht \u00fcber 60 Quellen f\u00fcr fundiertes Expertenwissen.'
      },
      {
        q: 'Welche R\u00fcckfragen stellt Claude im Skill Creator Modus?',
        options: [
          'Ziel, Zielgruppe, Output-Format und Sprache',
          'Claude stellt keine R\u00fcckfragen',
          'Nur nach dem Namen des Skills',
          'Nur nach dem Preis'
        ],
        correct: 0,
        explanation: 'Claude fragt interaktiv: Ziel, Zielgruppe, Format (Text/Code), Sprache.'
      },
      {
        q: 'Warum reicht bei einem fertigen Skill oft ein kurzer Prompt?',
        options: [
          'Weil Skills nur einfache Aufgaben erledigen',
          'Weil der Skill den Prompt automatisch verl\u00e4ngert',
          'Weil das Expertenwissen bereits im Skill verankert ist',
          'Weil Skills mit zuf\u00e4lligen Texten arbeiten'
        ],
        correct: 2,
        explanation: 'Frameworks, Standards und Abl\u00e4ufe sind bereits gespeichert \u2014 der Skill sorgt automatisch f\u00fcr Qualit\u00e4t.'
      },
      {
        q: 'Was ist das \u00fcbergeordnete Ziel des Skill-Systems?',
        options: [
          'Nur Landing Pages zu erstellen',
          'Claude durch ein anderes Tool zu ersetzen',
          'M\u00f6glichst viele einzelne Prompts zu schreiben',
          'Weg von einzelnen Prompts hin zu einem festen Arbeitssystem'
        ],
        correct: 3,
        explanation: 'Ziel: Von isolierten Prompts zu einem systematischen Arbeitssystem mit wiederverwendbaren Skills.'
      }
    ]
  },
  {
    id: 4,
    number: '04',
    meta: 'Professional \u00b7 Module 4',
    title: 'Security & Data Safety',
    desc: 'What never to paste, the vibecoding trap, the lethal trifecta of connectors, and the golden rules for working safely with AI.',
    duration: '25 Min.',
    videos: [],
    images: [],
    longContent: '',
    content: `
      <h3>Never paste these into a personal account</h3>
      <p>Some data should never touch your personal AI account. If you\u2019ve pasted a few of these, you\u2019re not alone. Just stop now.</p>

      <div class="callout callout-warn">
        <div class="callout-title">Never paste</div>
        <ul>
          <li>Source code, or anything from your company\u2019s codebase</li>
          <li>Customer or client data: names, emails, phone numbers, addresses, order history, health info</li>
          <li>Unreleased plans, roadmaps, designs, prototypes</li>
          <li>Non-public financials: revenue, margins, budgets, forecasts, deal terms</li>
          <li>Anything marked confidential, internal-only, or under NDA</li>
          <li>Logins, passwords, access keys, security settings</li>
          <li>Full contracts or legal docs with real names and terms</li>
          <li>Recordings or transcripts of internal meetings</li>
        </ul>
      </div>

      <p>If you need AI help with any of these, <strong>anonymize them first</strong> or use your IEG Claude account.</p>

      <h3>The vibecoding trap</h3>
      <p>What if you use your company\u2019s AI to vibecode a side project? Bad news: <strong>your company now owns your project.</strong></p>
      <p>What if you vibecode your side project with your personal AI, but on the company\u2019s computer? You\u2019re still at risk. Just don\u2019t do it.</p>

      <h3>The most dangerous thing</h3>
      <p>A <strong>connector</strong> (some tools call it an integration or an \u201capp\u201d) links your AI to another service: Gmail, Google Drive, Calendar, Slack, Teams, Outlook. Once it\u2019s connected, the AI can read that data and act on it.</p>
      <p>Useful. Also, <strong>the most dangerous thing you can do</strong> with a personal AI account.</p>

      <h4>Two reasons:</h4>
      <p><strong>The access is enormous.</strong> Connect Gmail and the AI can read your whole mailbox. Connect Drive and it can search every file you can open, including documents other people shared with you years ago.</p>

      <p><strong>The second reason is the one that\u2019s actually new:</strong> a connected AI can be <strong>hijacked by the content it reads</strong>. Researchers proved it twice in 2025. They have a name for why this works: the <strong>\u201clethal trifecta.\u201d</strong></p>

      <div class="callout callout-warn">
        <div class="callout-title">The Lethal Trifecta</div>
        <p>The moment an AI can <strong>reach your private data</strong>, <strong>read content from outside</strong> that you don\u2019t control, and <strong>send information back out</strong>, it can be tricked into stealing your own data for an attacker.</p>
      </div>

      <h3>How to use connectors safely</h3>
      <ul>
        <li><strong>Never connect work accounts to your personal AI.</strong> Work Gmail, work Drive, work Slack stay off your personal account. That\u2019s the whole company\u2019s data in a tool with no contract behind it.</li>
        <li><strong>Connect the least, with the narrowest access.</strong> Pick read-only, or a single folder, over \u201call of my Drive.\u201d If you can just paste the one thing you need, skip the connector.</li>
        <li><strong>Only connect official connectors.</strong> Use the ones listed in your AI\u2019s own connector directory. A random third-party connector can quietly change what it does after you approve it.</li>
        <li><strong>Review and disconnect monthly.</strong> Open your AI\u2019s settings and cut anything you\u2019re not actively using.</li>
      </ul>

      <div class="callout callout-success">
        <div class="callout-title">Bottom line</div>
        <p>A connector hands your AI the keys to a whole app, and anyone who can get a file or an email in front of it can try to grab those keys. Connect almost nothing on a personal account. Save the connected setup for the <strong>IEG Claude account</strong>, where someone is actually paid to secure it.</p>
      </div>
    `,
    quiz: [
      {
        q: 'You need to analyze a contract with real client names and deal terms. What should you do?',
        options: [
          'Paste it into your personal Claude and enable incognito mode',
          'Ask a colleague to paste it instead',
          'Anonymize the data first or use the IEG enterprise Claude account',
          'Paste it quickly before anyone notices'
        ],
        correct: 2,
        explanation: 'Contracts with real names and deal terms are never-paste material. Either anonymize first or use the IEG enterprise account.'
      },
      {
        q: 'You vibecoded a side project using your company\u2019s AI subscription. Who likely owns it?',
        options: [
          'You, because you wrote the prompts',
          'Nobody \u2014 AI-generated code has no owner',
          'The AI company (Anthropic)',
          'Your employer, because you used their AI tool'
        ],
        correct: 3,
        explanation: 'If you use your company\u2019s AI (or hardware) for a side project, the intellectual property may legally belong to your employer.'
      },
      {
        q: 'What happens when you connect Gmail to your personal AI account?',
        options: [
          'The AI can only see emails you manually select',
          'The AI gains read access to your entire mailbox',
          'Nothing changes \u2014 connectors are cosmetic only',
          'The AI deletes old emails automatically'
        ],
        correct: 1,
        explanation: 'Enormous access: once connected, the AI can read your whole mailbox, including emails from years ago.'
      },
      {
        q: 'What three conditions make the "lethal trifecta" possible?',
        options: [
          'Three AI models running at once',
          'AI can reach private data, read external content you don\u2019t control, and send information out',
          'Using three different browsers simultaneously',
          'Having three connectors from the same provider'
        ],
        correct: 1,
        explanation: 'The trifecta: access to private data + reading uncontrolled external content + ability to send data out = an attacker can trick the AI into stealing your data.'
      },
      {
        q: 'Why should you never connect your work Slack to a personal AI account?',
        options: [
          'Because Slack doesn\u2019t support AI connectors',
          'Because it makes the AI slower',
          'Because you\u2019d pipe your company\u2019s data into a tool with no enterprise contract',
          'Because personal accounts have better security'
        ],
        correct: 2,
        explanation: 'Work accounts on personal AI = company data in a tool with no contract, no audit trail, no security guarantees.'
      },
      {
        q: 'A third-party connector you approved last month could be dangerous because...',
        options: [
          'It might slow down your computer',
          'It could quietly change its behavior after approval',
          'Third-party connectors always steal passwords',
          'It uses too much battery'
        ],
        correct: 1,
        explanation: 'Remote third-party connectors can silently change what they do after you approve them. Stick to official connectors from your AI\u2019s directory.'
      },
      {
        q: 'How often should you review and disconnect unused connectors?',
        options: [
          'Once a year during the annual review',
          'Never \u2014 once connected, leave them',
          'Only when something goes wrong',
          'Monthly \u2014 check your AI settings and cut what you\u2019re not using'
        ],
        correct: 3,
        explanation: 'Monthly review: open your AI settings and your Google/Microsoft third-party access page, and disconnect anything not actively in use.'
      }
    ]
  },
  {
    id: 5,
    number: '05',
    meta: 'Expert \u00b7 Module 5',
    title: 'Claude Code \u2014 The Terminal-Based Power User',
    desc: '"PhD in Computer Science in your pocket". Bis zu 15 Stunden autonomer Operation, /prime, /create-plan und das Chunking-Prinzip.',
    duration: '40 Min.',
    videos: [],
    images: [],
    longContent: '',
    content: `
      <h3>Installation &amp; Command Workflow</h3>
      <p>Claude Code operiert via Terminal mit IDEs wie <strong>VS Code</strong>. Drei kritische Commands:</p>
      <ul>
        <li><strong>/prime</strong> \u2014 Alle Context Files lesen, Session mit Rolle und Business Objectives initialisieren.</li>
        <li><strong>/create-plan</strong> \u2014 Projekt architektieren (Gaps identifizieren, Steps outlinen) <em>bevor</em> Execution beginnt.</li>
        <li><strong>dangerously skip permissions</strong> \u2014 Nur in vertrauten Workflows. Deaktiviert Human Approval.</li>
      </ul>

      <h3>IDE-Integration &amp; Debugging</h3>
      <p>Der Schl\u00fcssel bei Large-Scale-Automatisierungen: <strong>Chunking</strong> \u2014 massive Tasks in Sub-Tasks splitten, um Token Limits und Agent Fatigue zu vermeiden.</p>

      <div class="callout callout-warn">
        <div class="callout-title">Vorsicht</div>
        <p><strong>dangerously skip permissions</strong> nur in vertrauten Workflows \u2014 nie bei Unsicherheit. Es deaktiviert die prim\u00e4re Verteidigungslinie.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Wie wird Claude Code metaphorisch beschrieben?',
        options: [
          '"Ein Junior Developer im Slack"',
          '"Eine App im App Store"',
          '"Ein PhD in Computer Science in your pocket"',
          '"Ein Stack Overflow im Pocket"'
        ],
        correct: 2,
        explanation: 'Claude Code = "PhD in Computer Science in your pocket" \u2014 Senior-Level-Engineer-F\u00e4higkeiten.'
      },
      {
        q: 'Was tut der /prime-Command?',
        options: [
          'Er installiert Updates f\u00fcr Claude Code',
          'Er l\u00e4dt den Kontext f\u00fcr das Plugin-Hub',
          'Er l\u00f6scht Cache und Verlauf f\u00fcr mehr Speicher',
          'Er liest alle Context Files und initialisiert die Session mit Rolle und Zielen'
        ],
        correct: 3,
        explanation: '/prime erzwingt das Einlesen aller Kontextdateien und kalibriert Claude auf Rolle + Gesch\u00e4ftsziele.'
      },
      {
        q: 'Was ist "Chunking" bei gro\u00dfen Automatisierungen?',
        options: [
          'Dateien zippen vor dem Upload',
          'Tasks auf mehrere Personen verteilen',
          'Massive Tasks in Sub-Tasks splitten, um Token Limits und Agent Fatigue zu vermeiden',
          'Code in einzelne Dateien aufteilen'
        ],
        correct: 2,
        explanation: 'Chunking adressiert Token-Limits und Agent-Fatigue \u2014 Sub-Tasks erhalten die Output-Qualit\u00e4t.'
      },
      {
        q: 'Wann sollte "dangerously skip permissions" eingesetzt werden?',
        options: [
          'Bei jedem neuen, unbekannten Task',
          'Immer, um Zeit zu sparen',
          'Niemals \u2014 es ist komplett verboten',
          'Ausschlie\u00dflich in vertrauten, etablierten Workflows mit extremer Vorsicht'
        ],
        correct: 3,
        explanation: 'Nur in trusted Workflows. Der Command deaktiviert Human Approval \u2014 die prim\u00e4re Verteidigungslinie.'
      },
      {
        q: 'Wie lange kann Claude Code maximal autonom operieren?',
        options: [
          'Bis zu 15 Stunden',
          'Unbegrenzt',
          'Bis zu 1 Stunde',
          'Bis zu 5 Stunden'
        ],
        correct: 0,
        explanation: 'Claude Code ist f\u00fcr bis zu 15 Stunden autonomer Operation ausgelegt.'
      }
    ]
  },
  {
    id: 6,
    number: '06',
    meta: 'Masterclass \u00b7 Module 6',
    title: 'Advanced Prompt Engineering for Finance',
    desc: 'XML-Tags, Order of Operations, Few-Shot, Chain-of-Thought und die Pre-fill-Technik \u2014 spezialisiert f\u00fcr Finance.',
    duration: '35 Min.',
    videos: [],
    images: [],
    longContent: '',
    content: `
      <h3>Structural Prompting &amp; Order of Operations</h3>
      <p>XML Tags wie <code>&lt;context&gt;</code>, <code>&lt;instructions&gt;</code>, <code>&lt;examples&gt;</code>.
      Claude performt besser mit <strong>Order of Operations</strong>:</p>
      <ul>
        <li><strong>Analyze the Form before the Sketch:</strong> Strukturierte Daten vor visuellen Daten.</li>
      </ul>

      <h3>Few-Shot &amp; Chain-of-Thought</h3>
      <p><strong>3\u20135 Beispiele</strong> eines "Perfect Pitchbook Summary" bereitstellen.
      <strong>Chain-of-Thought</strong>: Step-by-step denken, bevor ein Verdict kommt.</p>

      <h3>Die Pre-fill-Technik</h3>
      <p>Antwort mit <code>{</code> beginnen lassen \u2192 valides JSON. Mit <code>|</code> \u2192 Markdown-Tabelle.</p>
    `,
    quiz: [
      {
        q: 'Was beschreibt "Analyze the Form before the Sketch"?',
        options: [
          'Skizzen sind im Banking generell verboten',
          'Erst strukturierte Daten (Form) analysieren, dann visuelle Daten (Sketch)',
          'Formulare digitalisieren, bevor man zeichnet',
          'Erst kreativ skizzieren, dann strukturieren'
        ],
        correct: 1,
        explanation: 'Strukturierte Daten zuerst \u2014 sie liefern den Kontext f\u00fcr die Interpretation.'
      },
      {
        q: 'Wie viele Beispiele werden f\u00fcr effektives Few-Shot Prompting empfohlen?',
        options: [
          'So viele wie m\u00f6glich, mindestens 100',
          '20\u201330 Beispiele',
          '3\u20135 Beispiele',
          '1 Beispiel reicht immer'
        ],
        correct: 2,
        explanation: '3\u20135 Beispiele sind der Sweet Spot \u2014 genug um den Stil zu pr\u00e4gen, ohne zu \u00fcberladen.'
      },
      {
        q: 'Welche XML-Tags werden f\u00fcr Structural Prompting verwendet?',
        options: [
          '<context>, <instructions>, <examples>',
          '<div>, <span>, <button>',
          '<header>, <footer>, <main>',
          '<a>, <b>, <p>'
        ],
        correct: 0,
        explanation: '<context>, <instructions> und <examples> sind die zentralen Tags f\u00fcr strukturierte Prompts.'
      },
      {
        q: 'Was macht die Pre-fill-Technik mit dem Zeichen { ?',
        options: [
          'Sie startet einen neuen Chat',
          'Sie aktiviert den Debug-Modus',
          'Sie erzwingt valides JSON als Output-Format',
          'Sie speichert den Prompt als Template'
        ],
        correct: 2,
        explanation: 'Pre-fill mit { \u2192 Claude liefert valides JSON. Mit | \u2192 Markdown-Tabelle.'
      }
    ]
  }
];

// FINAL EXAM \u2014 15 Fragen aus allen Modulen, Antworten durchgemischt
const FINAL_EXAM = [
  {
    q: 'Wozu dienen "Projects" in Claude?',
    options: ['Sie aktivieren den Programmiermodus', 'Sie ersetzen die Websuche', 'Sie sind Briefing-Ordner mit Kontext f\u00fcr spezifische Themen', 'Sie speichern nur alte Chats'],
    correct: 2, explanation: 'Projects = ausgelagertes Gehirn mit Dokumenten, Anweisungen und Kontext.'
  },
  {
    q: 'Was unterscheidet Skills von Plugins?',
    options: ['Skills sind einzelne F\u00e4higkeiten, Plugins sind B\u00fcndel von F\u00e4higkeiten', 'Es gibt keinen Unterschied', 'Plugins sind kostenlos', 'Skills brauchen Claude Code'],
    correct: 0, explanation: 'Skills = einzelne F\u00e4higkeiten. Plugins = ganze B\u00fcndel (z.B. Productivity-Plugin).'
  },
  {
    q: 'Welches Modell eignet sich f\u00fcr tiefgehende Analysen mit Quellen?',
    options: ['Haiku', 'Alle identisch', 'Sonnet', 'Opus'],
    correct: 3, explanation: 'Opus ist das leistungsst\u00e4rkste Modell \u2014 kann Quellen und Studien integrieren.'
  },
  {
    q: 'Welche Datenschutz-Einstellung muss bei IEG deaktiviert werden?',
    options: ['Die Erinnerungen (Memory)', 'Die Websuche', 'Der Inkognitomodus', 'Die Option "hilft dabei Claude zu verbessern"'],
    correct: 3, explanation: 'Pflicht: Trainings-Option deaktivieren, damit keine Firmendaten zum KI-Training genutzt werden.'
  },
  {
    q: 'Welche sechs Elemente umfasst die ideale Prompt-Struktur?',
    options: ['Ausschlie\u00dflich Code-Beispiele', 'Nur eine kurze Frage', 'Aufgabe, Kontext, Hintergrunddaten, Anweisungen, Beispiele, Erinnerungen', '\u00dcberschrift und ein Satz'],
    correct: 2, explanation: 'Sechs Elemente: Aufgabe, Kontext, Hintergrunddaten, Anweisungen, Beispiele, Erinnerungen.'
  },
  {
    q: 'Wozu dienen XML-Tags in einem Prompt?',
    options: ['Sie verschl\u00fcsseln den Prompt', 'Sie sind Dekoration', 'Sie strukturieren den Prompt f\u00fcr gezielte Abschnitt-Zugriffe', 'Sie aktivieren den Code-Modus'],
    correct: 2, explanation: 'XML-Tags geben dem Prompt eine klare Hierarchie.'
  },
  {
    q: 'Was unterscheidet einen Skill von einer Projektanweisung?',
    options: ['Projekte sind flexibler', 'Skills funktionieren nur offline', 'Skills sind \u00fcbertragbar und in jedem Chat nutzbar', 'Kein Unterschied'],
    correct: 2, explanation: 'Skills sind chatübergreifend wiederverwendbar und kombinierbar.'
  },
  {
    q: 'You vibecoded a side project on your company\u2019s AI. Who owns it?',
    options: ['You', 'The AI company', 'Nobody', 'Your employer'],
    correct: 3, explanation: 'Using company AI/hardware = IP likely belongs to your employer.'
  },
  {
    q: 'What is the "lethal trifecta"?',
    options: ['Three AI models at once', 'Three browsers simultaneously', 'AI accesses private data, reads external content, and can send data out', 'Three connectors from one provider'],
    correct: 2, explanation: 'Private data access + external content + outbound capability = attackers can hijack the AI.'
  },
  {
    q: 'How often should you review and disconnect unused connectors?',
    options: ['Never', 'Only when something breaks', 'Once a year', 'Monthly'],
    correct: 3, explanation: 'Monthly: check settings, cut anything not actively in use.'
  },
  {
    q: 'Was tut /prime in Claude Code?',
    options: ['Updates installieren', 'Cache l\u00f6schen', 'Context Files lesen und Session initialisieren', 'Session beenden'],
    correct: 2, explanation: '/prime erzwingt das Einlesen aller Kontextdateien.'
  },
  {
    q: 'Was ist "Chunking"?',
    options: ['Dateien zippen', 'Tasks auf Personen verteilen', 'Code \u00fcbersetzen', 'Massive Tasks in Sub-Tasks splitten gegen Token Limits'],
    correct: 3, explanation: 'Chunking sch\u00fctzt vor Token Limits und Agent Fatigue.'
  },
  {
    q: 'Was bewirkt Pre-filling mit dem Zeichen { ?',
    options: ['Neuen Chat starten', 'Prompt speichern', 'Valides JSON als Output erzwingen', 'Debug-Modus aktivieren'],
    correct: 2, explanation: 'Pre-fill mit { = Claude liefert valides JSON.'
  },
  {
    q: 'Welche Reihenfolge gilt bei "Analyze the Form before the Sketch"?',
    options: ['Beide gleichzeitig', 'Reihenfolge egal', 'Erst Sketch, dann Form', 'Erst klare Fakten (Form), dann interpretative Daten (Sketch)'],
    correct: 3, explanation: 'Klare Fakten zuerst \u2014 sie kalibrieren den Kontext.'
  },
  {
    q: 'Why should you never connect work Gmail to a personal AI?',
    options: ['It makes AI slower', 'Personal accounts have better security', 'Gmail doesn\u2019t support it', 'You\u2019d pipe company data into a tool with no contract'],
    correct: 3, explanation: 'Work accounts on personal AI = company data without contract or security guarantees.'
  }
];

const PASS_THRESHOLD = 70;
