/* ============================================
   IEG Claude Academy — Content
   Alle Module + Quizzes
   v5.0 — Luise Live Version + Login-Ready
   ============================================ */

const CURRICULUM = [
  {
    id: 0,
    number: '00',
    meta: 'Einführung · Grundlagen',
    title: 'Claude im Überblick: Funktionen, Arbeitsbereiche und Tools',
    desc: 'Überblick über zentrale Claude-Funktionen, Arbeitsbereiche und Erweiterungen — von Projects und Visualisierungen bis zu Claude Code, Skills und Konnektoren.',
    duration: '15 Min.',
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
        <li><strong>Hintergrund-Arbeit:</strong> Cowork erledigt Aufgaben autonom, während du andere Dinge tust.</li>
        <li><strong>Fernsteuerung per App:</strong> Du kannst Cowork von unterwegs über dein Handy Anweisungen geben.</li>
      </ul>

      <h3>4. Entwicklung und Erweiterungen</h3>
      <h4>Claude Code</h4>
      <p>Dieser Dienst fungiert als <strong>persönlicher Entwickler</strong>, der Webseiten-Prototypen,
      Tools und Apps baut, ohne dass du selbst Code schreiben musst.</p>
      <h4>Skills und Plugins</h4>
      <ul>
        <li><strong>Skills:</strong> Einzelne Fähigkeiten, die du Claude beibringst.</li>
        <li><strong>Plugins:</strong> Ganze Bündel solcher Fähigkeiten.</li>
      </ul>
      <h4>Konnektoren</h4>
      <p>Konnektoren verbinden Claude direkt mit Anwendungen wie <strong>Gmail, Google Calendar
      oder Notion</strong>, sodass die KI innerhalb dieser Tools agieren kann.</p>
      <div class="callout callout-warn">
        <div class="callout-title">Wichtig bei Konnektoren</div>
        <p>Konnektoren sind mächtig, aber bergen Sicherheitsrisiken — mehr dazu in Modul 04.</p>
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
        explanation: 'Projects sind wie ein ausgelagertes Gehirn: einmal angelegt, muss man nicht bei null anfangen.'
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
        explanation: 'Claude erstellt Diagramme direkt im Chat — ohne Plugins. Ein Befehl wie "zeig mir" reicht.'
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
        explanation: 'Cowork lebt in der Desktop-App und arbeitet Aufgaben ab, solange Computer und App aktiv sind.'
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
        explanation: 'Skills = einzelne Fähigkeiten. Plugins = ganze Bündel solcher Fähigkeiten.'
      },
      {
        q: 'Was machen Konnektoren in Claude?',
        options: [
          'Sie übersetzen Prompts in andere Sprachen',
          'Sie verbessern die Antwortgeschwindigkeit',
          'Sie speichern Chats als PDF',
          'Sie verbinden Claude mit Apps wie Gmail, Calendar oder Notion'
        ],
        correct: 3,
        explanation: 'Konnektoren verknüpfen Claude direkt mit externen Anwendungen.'
      }
    ]
  },
  {
    id: 1,
    number: '01',
    meta: 'Grundlagen · Modul 1',
    title: 'Grundlagen und Arbeitsumgebung',
    desc: 'Einführung in die grundlegende Nutzung von Claude: Chat-Struktur, Modelle, zentrale Funktionen, Personalisierung sowie Datenschutz und sichere Anwendung.',
    duration: '45 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/51vysjHcJ5A', title: 'Claude kompletter Grundkurs (2026)', caption: 'Video 1.1 · Claude Grundkurs — von Beginner zu Profi (30:42)' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Grundlagen und Chat-Organisation</h3>
      <div class="callout">
        <div class="callout-title">Goldene Regel</div>
        <p>Erstelle für <strong>jedes neue Thema</strong> einen neuen Chat. Das Vermischen von Themen
        in einem Chat verwirrt die KI und verschlechtert die Ergebnisqualität erheblich.</p>
      </div>

      <h3>2. Die Modellfamilie</h3>
      <table>
        <thead><tr><th>Modell</th><th>Stärke</th><th>Typischer Einsatz</th></tr></thead>
        <tbody>
          <tr><td><strong>Haiku</strong></td><td>Das schnellste Modell</td><td>Einfache Formatierungen, schnelle Antworten.</td></tr>
          <tr><td><strong>Sonnet</strong></td><td>Der Allrounder</td><td>Tägliche Arbeit, Standard in der Gratisversion.</td></tr>
          <tr><td><strong>Opus</strong></td><td>Das leistungsstärkste Modell</td><td>Komplexe Recherchen, Quellen und Studien integrieren. Pro-Version.</td></tr>
        </tbody>
      </table>

      <h3>3. Zentrale Funktionen</h3>
      <h4>Websuche</h4>
      <p>Kann über das <strong>Plus-Symbol</strong> aktiviert werden, um aktuelle Informationen aus dem Internet zu ziehen.</p>
      <h4>Dateiupload</h4>
      <p>Claude verarbeitet <strong>PDFs, Excel-Tabellen und Word-Dokumente</strong>. Für gründliche Analysen empfiehlt sich der <em>erweiterte Nachdenkenmodus</em> (Stoppuhr-Symbol).</p>
      <h4>Technik-Berater</h4>
      <p>Claude kann technische Probleme lösen, indem man Anfragen mit <strong>Screenshots</strong> kombiniert.</p>

      <h3>4. Personalisierung</h3>
      <ul>
        <li><strong>Präferenzen:</strong> Globale Einstellungen für jeden neuen Chat.</li>
        <li><strong>Stile:</strong> Eigene Schreibstile durch Hochladen von Textproben.</li>
        <li><strong>Erinnerungen (Memory):</strong> Gezielte Anweisungen für die Zukunft.</li>
      </ul>

      <h3>5. Produktivität und fortgeschrittene Tools</h3>
      <h4>Projekte</h4>
      <p>Geschlossener Bereich für Chats mit hinterlegten Anweisungen und Dateien.</p>
      <h4>Claude in Excel</h4>
      <p>Eine <strong>Pro-Funktion</strong>, die direkt in Excel Tabellen füllt, Charts erstellt und Formelfehler korrigiert.</p>

      <h3>6. Datenschutz und Sicherheit</h3>
      <div class="callout callout-warn">
        <div class="callout-title">Pflicht bei IEG</div>
        <p><strong>Training deaktivieren:</strong> Unter „Datenschutz" die Option „hilft dabei Claude zu verbessern" <strong>deaktivieren</strong>.</p>
      </div>
      <p><strong>Inkognitomodus</strong> (Geist-Symbol): Chats werden nicht dauerhaft gespeichert.</p>
    `,
    quiz: [
      {
        q: 'Warum sollte man für jedes neue Thema einen separaten Chat erstellen?',
        options: [
          'Weil separate Chats schneller laden und kürzere Antworten erzwingen',
          'Weil Claude nur einen Chat gleichzeitig speichern kann',
          'Weil das Vermischen von Themen die KI verwirrt und die Ergebnisqualität verschlechtert',
          'Damit Themen ohne Zusammenhang besser vermischt werden'
        ],
        correct: 2,
        explanation: 'Chat-Disziplin: Themen mischen verwirrt den Kontext und verschlechtert die Antwortqualität.'
      },
      {
        q: 'Welches Claude-Modell eignet sich für tiefgehende Analysen mit Quellen?',
        options: [
          'Haiku — das schnellste Modell',
          'Alle drei Modelle liefern identische Ergebnisse',
          'Sonnet — der Allrounder',
          'Opus — das leistungsstärkste Modell'
        ],
        correct: 3,
        explanation: 'Opus kann Quellen und Studien integrieren — ideal für komplexe Recherchen.'
      },
      {
        q: 'Was sollte man vor einer gründlichen Dateianalyse aktivieren?',
        options: [
          'Einen neuen Schreibstil erstellen',
          'Den erweiterten Nachdenkenmodus (Stoppuhr-Symbol)',
          'Den Inkognitomodus',
          'Die Websuche über das Plus-Symbol'
        ],
        correct: 1,
        explanation: 'Der erweiterte Nachdenkenmodus sorgt dafür, dass Claude die Datei gründlicher einliest.'
      },
      {
        q: 'Was ist der Unterschied zwischen Präferenzen und Erinnerungen (Memory)?',
        options: [
          'Präferenzen gelten nur für ein einzelnes Wort',
          'Präferenzen sind globale Einstellungen für jeden Chat, Erinnerungen sind gezielte Zukunfts-Anweisungen',
          'Erinnerungen sind nur in der Gratisversion verfügbar',
          'Es gibt keinen Unterschied'
        ],
        correct: 1,
        explanation: 'Präferenzen = global für jeden neuen Chat. Erinnerungen = gezielte Einzelanweisungen im Gedächtnis.'
      },
      {
        q: 'Welche Datenschutz-Einstellung muss bei IEG deaktiviert werden?',
        options: [
          'Die Websuche',
          'Die Erinnerungen (Memory)',
          'Der Inkognitomodus',
          'Die Option „hilft dabei Claude zu verbessern" unter Datenschutz'
        ],
        correct: 3,
        explanation: 'Pflicht bei IEG: Trainings-Option deaktivieren, damit keine Firmendaten zum KI-Training genutzt werden.'
      }
    ]
  },
  {
    id: 2,
    number: '02',
    meta: 'Aufbau · Modul 2',
    title: 'Prompting und strukturierte Anweisungen',
    desc: 'Einführung in den Aufbau wirksamer Prompts, den Einsatz von Beispielen, XML-Strukturen und wiederverwendbaren Anweisungen für konsistentere Ergebnisse.',
    duration: '60 Min.',
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
        der KI und baut den Prompt <em>schrittweise (iterativ)</em> aus.</li>
        <li><strong>Das Ziel:</strong> Klare Anweisungen so strukturieren, dass die KI im ersten Versuch
        (&bdquo;One-Shot&ldquo;) das gewünschte Ergebnis liefert.</li>
      </ul>

      <h3>2. Die 6 Bausteine des perfekten Prompts</h3>
      <table>
        <thead><tr><th>Baustein</th><th>Beschreibung</th><th>Beispiel</th></tr></thead>
        <tbody>
          <tr><td><strong>Rolle</strong></td><td>Fachliche Identität geben</td><td>&bdquo;Du bist ein erfahrener Social-Media-Berater&ldquo;</td></tr>
          <tr><td><strong>Aufgabe</strong></td><td>Das Herzstück — starte mit einem Verb</td><td>&bdquo;Analysiere&ldquo;, &bdquo;Erstelle&ldquo;, &bdquo;Vergleiche&ldquo;</td></tr>
          <tr><td><strong>Kontext</strong></td><td>Relevante Hintergrundinfos</td><td>Zielgruppe, Problemstellung, Tonfall</td></tr>
          <tr><td><strong>Vorgehen</strong></td><td>Logische Einzelschritte</td><td>&bdquo;Schritt 1: Recherche, Schritt 2: Analyse&ldquo;</td></tr>
          <tr><td><strong>Stoppkriterien</strong></td><td>Grenzen gegen Halluzinationen</td><td>&bdquo;Wenn unsicher, sag es offen&ldquo;</td></tr>
          <tr><td><strong>Output</strong></td><td>Genaues Format bestimmen</td><td>Tabelle, Liste, JSON, Wortanzahl</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Warum Stoppkriterien?</div>
        <p>Ohne klare Grenzen &bdquo;ratet&ldquo; Claude lieber, als Unsicherheit zuzugeben.</p>
      </div>

      <h3>3. Strukturierung durch XML-Tags</h3>
      <p>Anthropic empfiehlt XML-Tags (z.B. <code>&lt;anweisungen&gt;</code>, <code>&lt;kontext&gt;</code>), um Informationen sauber zu trennen.</p>
      <ul>
        <li><strong>Vorteil:</strong> Claude wurde darauf trainiert, diese Struktur zu verstehen.</li>
        <li><strong>Output-Kontrolle:</strong> Endergebnis in Tags wie <code>&lt;urteil&gt;</code> setzen.</li>
      </ul>

      <h3>4. Fortgeschrittene Prompt-Techniken</h3>
      <h4>Few-Shot Prompting</h4>
      <p>Zeige Claude <strong>1 bis 3 Beispiele</strong> — oft mächtiger als jede lange Beschreibung.</p>
      <h4>Chain of Thought</h4>
      <p>Claude anweisen, <strong>&bdquo;Schritt für Schritt zu denken&ldquo;</strong> — verbessert die Logik massiv.</p>
      <h4>Prompt Chaining</h4>
      <p>Riesige Aufgabe in <strong>kleine, aufeinanderfolgende Prompts</strong> zerlegen. Jedes Teilergebnis prüfen.</p>
      <h4>Self-Reflection</h4>
      <p>Claude bitten, seine Antwort <strong>selbst auf Fehler zu prüfen</strong> und zu überarbeiten.</p>
      <h4>Pre-filling</h4>
      <p>Anfang der Antwort vorgeben (z.B. <code>{</code> für JSON) — <strong>erzwingt das Format strikt</strong>.</p>

      <h3>5. Effizienz durch System-Prompts &amp; Caching</h3>
      <ul>
        <li><strong>System-Prompts:</strong> Statische Informationen auslagern.</li>
        <li><strong>Prompt Caching:</strong> Spart Zeit, da Claude statische Dokumente nicht neu einlesen muss.</li>
      </ul>

      <h3>6. Die Reihenfolge der Analyse</h3>
      <p>Immer <strong>Form vor Sketch</strong> — erst klare Fakten, dann interpretative Daten.</p>
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
    meta: 'Sicherheit · Modul 3',
    title: 'Sicherer Umgang mit Daten und Tools',
    desc: 'Grundlagen für den sicheren Einsatz von Claude: sensible Inhalte, typische Risikofelder, Konnektoren und zentrale Regeln für datenschutzbewusstes Arbeiten.',
    duration: '15 Min.',
    videos: [],
    images: [],
    longContent: '',
    content: `
      <h3>Never paste these into a personal account</h3>
      <p>Some data should never touch your personal AI account. If you've pasted a few of these, you're not alone. Just stop now.</p>
      <div class="callout callout-warn">
        <div class="callout-title">Never paste</div>
        <ul>
          <li>Source code, or anything from your company's codebase</li>
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
      <p>What if you use your company's AI to vibecode a side project? Bad news: <strong>your company now owns your project.</strong></p>
      <p>What if you vibecode your side project with your personal AI, but on the company's computer? You're still at risk. Just don't do it.</p>

      <h3>The most dangerous thing</h3>
      <p>A <strong>connector</strong> links your AI to another service: Gmail, Google Drive, Calendar, Slack, Teams, Outlook. Once connected, the AI can read that data and act on it.</p>
      <p>Useful. Also, <strong>the most dangerous thing you can do</strong> with a personal AI account.</p>
      <p><strong>The access is enormous.</strong> Connect Gmail and the AI can read your whole mailbox. Connect Drive and it can search every file you can open.</p>
      <p>A connected AI can be <strong>hijacked by the content it reads</strong>. Researchers proved it twice in 2025: the <strong>"lethal trifecta."</strong></p>
      <div class="callout callout-warn">
        <div class="callout-title">The Lethal Trifecta</div>
        <p>AI can reach your private data + read external content you don't control + send information out = attacker can steal your data.</p>
      </div>

      <h3>How to use connectors safely</h3>
      <ul>
        <li><strong>Never connect work accounts to your personal AI.</strong></li>
        <li><strong>Connect the least, with the narrowest access.</strong> Pick read-only or a single folder.</li>
        <li><strong>Only connect official connectors.</strong> A random third-party connector can quietly change behavior after approval.</li>
        <li><strong>Review and disconnect monthly.</strong></li>
      </ul>
      <div class="callout callout-success">
        <div class="callout-title">Bottom line</div>
        <p>Save the connected setup for the <strong>IEG Claude account</strong>, where someone is paid to secure it.</p>
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
        explanation: 'Contracts with real names and deal terms are never-paste material. Anonymize first or use the IEG enterprise account.'
      },
      {
        q: 'You vibecoded a side project using your company\'s AI subscription. Who likely owns it?',
        options: ['You, because you wrote the prompts', 'Nobody — AI-generated code has no owner', 'The AI company (Anthropic)', 'Your employer, because you used their AI tool'],
        correct: 3,
        explanation: 'Using company AI for a side project = IP may legally belong to your employer.'
      },
      {
        q: 'What happens when you connect Gmail to your personal AI account?',
        options: ['The AI can only see emails you manually select', 'The AI gains read access to your entire mailbox', 'Nothing changes — connectors are cosmetic only', 'The AI deletes old emails automatically'],
        correct: 1,
        explanation: 'Enormous access: once connected, the AI can read your whole mailbox.'
      },
      {
        q: 'What three conditions make the "lethal trifecta" possible?',
        options: ['Three AI models running at once', 'AI can reach private data, read external content you don\'t control, and send information out', 'Using three different browsers simultaneously', 'Having three connectors from the same provider'],
        correct: 1,
        explanation: 'Private data + external content + outbound = attacker can hijack the AI.'
      },
      {
        q: 'Why should you never connect your work Slack to a personal AI account?',
        options: ['Because Slack doesn\'t support AI connectors', 'Because it makes the AI slower', 'Because you\'d pipe your company\'s data into a tool with no enterprise contract', 'Because personal accounts have better security'],
        correct: 2,
        explanation: 'Work accounts on personal AI = company data with no contract, no audit trail.'
      },
      {
        q: 'A third-party connector you approved last month could be dangerous because...',
        options: ['It might slow down your computer', 'It could quietly change its behavior after approval', 'Third-party connectors always steal passwords', 'It uses too much battery'],
        correct: 1,
        explanation: 'Remote third-party connectors can silently change what they do after approval.'
      },
      {
        q: 'How often should you review and disconnect unused connectors?',
        options: ['Once a year during the annual review', 'Never — once connected, leave them', 'Only when something goes wrong', 'Monthly — check your AI settings and cut what you\'re not using'],
        correct: 3,
        explanation: 'Monthly review: disconnect anything not actively in use.'
      }
    ]
  },
  {
    id: 4,
    number: '04',
    meta: 'Fortgeschritten · Modul 4',
    title: 'Skills und wiederverwendbare Arbeitsabläufe',
    desc: 'Einführung in Skills als strukturierte, wiederverwendbare Arbeitsanweisungen — von der inhaltlichen Vorbereitung bis zur praktischen Anwendung im Arbeitsalltag.',
    duration: '30 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/XHVgq4zodpE', title: 'Claude Skills', caption: 'Video 3.1 · Claude Skills erstellen und anwenden' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Was sind Claude Skills?</h3>
      <p>Ein Skill ist eine <strong>fest definierte, wiederverwendbare Arbeitsanweisung</strong>.</p>
      <table>
        <thead><tr><th>Eigenschaft</th><th>Projekte</th><th>Skills</th></tr></thead>
        <tbody>
          <tr><td><strong>Übertragbarkeit</strong></td><td>Isoliert</td><td>In jedem Chat nutzbar</td></tr>
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
        <li><strong>Deep Research:</strong> NotebookLM durchsucht über 60 Quellen.</li>
        <li><strong>Wissen strukturieren:</strong> Rohmaterial in ein klares System überführen.</li>
      </ul>

      <h3>3. Den Skill in Claude konfigurieren</h3>
      <p>Im <strong>Skill Creator Modus</strong> stellt Claude Rückfragen: Ziel, Zielgruppe, Output-Format, Sprache.</p>

      <h3>4. Den Skill im Alltag anwenden</h3>
      <ul>
        <li>Über das <strong>Plus-Symbol</strong> im Chat auswählen.</li>
        <li>Geringer Prompt-Aufwand dank verankertem Expertenwissen.</li>
      </ul>

      <h3>5. Skalierbarkeit</h3>
      <p>Nicht auf Landing Pages beschränkt — einsetzbar für E-Mail-Funnels, Content-Strategien, Unternehmensstrategien.</p>
    `,
    quiz: [
      {
        q: 'Was unterscheidet einen Claude Skill von einer Projektanweisung?',
        options: [
          'Skills funktionieren nur mit Claude Opus',
          'Ein Skill ist nur für private Notizen gedacht',
          'Projektanweisungen sind flexibler als Skills',
          'Skills sind übertragbar und in jedem Chat nutzbar, Projektanweisungen sind isoliert'
        ],
        correct: 3,
        explanation: 'Skills sind übertragbar und kombinierbar — Projektanweisungen bleiben an ein Projekt gebunden.'
      },
      {
        q: 'Welches Tool wird für die Wissensgewinnung vor der Skill-Erstellung empfohlen?',
        options: ['Google Docs', 'NotebookLM mit Deep Research', 'Microsoft Word', 'ChatGPT'],
        correct: 1,
        explanation: 'NotebookLM mit Deep Research durchsucht über 60 Quellen.'
      },
      {
        q: 'Welche Rückfragen stellt Claude im Skill Creator Modus?',
        options: [
          'Ziel, Zielgruppe, Output-Format und Sprache',
          'Claude stellt keine Rückfragen',
          'Nur nach dem Namen des Skills',
          'Nur nach dem Preis'
        ],
        correct: 0,
        explanation: 'Claude fragt interaktiv: Ziel, Zielgruppe, Format, Sprache.'
      },
      {
        q: 'Warum reicht bei einem fertigen Skill oft ein kurzer Prompt?',
        options: [
          'Weil Skills nur einfache Aufgaben erledigen',
          'Weil der Skill den Prompt automatisch verlängert',
          'Weil das Expertenwissen bereits im Skill verankert ist',
          'Weil Skills mit zufälligen Texten arbeiten'
        ],
        correct: 2,
        explanation: 'Frameworks und Abläufe sind bereits gespeichert — der Skill sorgt automatisch für Qualität.'
      },
      {
        q: 'Was ist das übergeordnete Ziel des Skill-Systems?',
        options: [
          'Nur Landing Pages zu erstellen',
          'Claude durch ein anderes Tool zu ersetzen',
          'Möglichst viele einzelne Prompts zu schreiben',
          'Weg von einzelnen Prompts hin zu einem festen Arbeitssystem'
        ],
        correct: 3,
        explanation: 'Ziel: Von isolierten Prompts zu einem systematischen Arbeitssystem.'
      }
    ]
  },
  {
    id: 5,
    number: '05',
    meta: 'Praxis · Modul 5',
    title: 'Skills in Finance-Workflows',
    desc: 'Praxisnahe Anwendungsbeispiele für Skills in finanznahen Prozessen, darunter Datenaufbereitung, Strukturierung von Inhalten, Dashboards und wiederkehrende Arbeitsabläufe.',
    duration: '20 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/h0XeJi6OAVI', title: 'Finance Automation mit Claude Skills', caption: 'Video 5.1 · Kreditkartenabrechnung vollautomatisiert mit Claude Skills' },
    ],
    images: [],
    longContent: '',
    content: `
      <p>Dieser Workflow zeigt, wie man komplexe Finanzaufgaben durch die Kombination
      spezialisierter Skills in einen <strong>vollautomatisierten Prozess</strong> verwandelt.</p>

      <h3>1. Was sind Claude Skills im Finanzkontext?</h3>
      <p>Ein Skill konserviert einen einmal definierten Workflow für zukünftige Nutzung.
      Im Finanzbereich transformieren sie Rohdaten in <strong>CFO-fertige Berichte</strong>.</p>

      <h3>2. Die Bausteine des Workflows</h3>
      <h4>Skill 1: Data Cleaning</h4>
      <ul>
        <li><strong>Ausgangslage:</strong> Rohdateien oft unstrukturiert, fehlende Felder.</li>
        <li><strong>Funktion:</strong> Tabs konsolidieren, nur relevante Felder behalten, fehlende Infos ergänzen.</li>
        <li><strong>Erstellung:</strong> Nach korrekter Bereinigung im Chat den Skill daraus erstellen lassen.</li>
      </ul>
      <h4>Skill 2: Branding &amp; Design-Richtlinien</h4>
      <p>Farben, Stile und KPI-Anforderungen hinterlegen — alle Ausgaben tragen automatisch das Corporate Design.</p>
      <h4>Skill 3: Dynamic Dashboard Builder</h4>
      <ul>
        <li><strong>Technik:</strong> Interaktives HTML-Dashboard.</li>
        <li><strong>Drill-Down:</strong> Klick auf Namen zeigt alle detaillierten Berichte.</li>
      </ul>
      <h4>Skill 4: PowerPoint-Präsentationen</h4>
      <p>Präsentation für Vorstandssitzungen — Branding automatisch übernommen.</p>

      <h3>3. Der "Super Skill" (Full Cycle Automation)</h3>
      <div class="callout callout-success">
        <div class="callout-title">Ablauf</div>
        <p><strong>1.</strong> Data Cleaning → <strong>2.</strong> Saubere Excel → <strong>3.</strong> Dashboard → <strong>4.</strong> PowerPoint</p>
      </div>
      <p>Ein Prompt wie <strong>"credit card report cycle"</strong> führt den gesamten Prozess in Minuten autark durch.</p>

      <h3>4. Verwaltung der Skills</h3>
      <p>Einstellungen → <strong>Customize → Skills</strong></p>
      <div class="callout">
        <div class="callout-title">Kernidee</div>
        <p>Einmalig spezialisierte Skills bauen, dann mit einem einzigen Prompt auslösen.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Was ist ein Claude Skill im Finanzkontext?',
        options: [
          'Ein einmaliger Prompt, der nach Benutzung gelöscht wird',
          'Eine gespeicherte Arbeitsanweisung, die Rohdaten in CFO-fertige Berichte transformiert',
          'Ein externes Excel-Plugin',
          'Eine manuelle Checkliste für Buchhalter'
        ],
        correct: 1,
        explanation: 'Ein Skill konserviert einen definierten Workflow für wiederholte Nutzung.'
      },
      {
        q: 'Was macht der "Data Cleaning"-Skill mit unstrukturierten Excel-Exporten?',
        options: [
          'Er löscht die gesamte Datei und erstellt sie neu',
          'Er konsolidiert Tabs, behält relevante Felder und fügt fehlende Infos hinzu',
          'Er konvertiert Excel in PDF ohne Änderungen',
          'Er sendet die Datei an einen menschlichen Buchhalter'
        ],
        correct: 1,
        explanation: 'Data Cleaning: Tabs zusammenführen, relevante Felder behalten, fehlende Infos ergänzen.'
      },
      {
        q: 'Warum wird ein separater Branding-Skill erstellt?',
        options: [
          'Weil Claude ohne Branding-Skill nicht funktioniert',
          'Damit alle Ausgaben automatisch das Corporate Design tragen',
          'Um das Claude-Interface farblich anzupassen',
          'Weil Branding gesetzlich vorgeschrieben ist'
        ],
        correct: 1,
        explanation: 'Der Branding-Skill hinterlegt Farben und Stile — alle Outputs sehen automatisch professionell aus.'
      },
      {
        q: 'Was ist die "Drill-Down"-Funktion im Dynamic Dashboard?',
        options: [
          'Eine Funktion zum Löschen von Daten',
          'Ein Button zum Exportieren als PDF',
          'Ein Bohrmaschinen-Simulator',
          'Durch Klick auf einen Namen werden alle detaillierten Berichte angezeigt'
        ],
        correct: 3,
        explanation: 'Drill-Down = auf Namen klicken → alle detaillierten Transaktionen sehen.'
      },
      {
        q: 'In welcher Reihenfolge arbeitet der "Super Skill"?',
        options: [
          'Dashboard → PowerPoint → Data Cleaning → Excel',
          'PowerPoint → Dashboard → Excel → Data Cleaning',
          'Data Cleaning → saubere Excel → Dashboard → PowerPoint',
          'Excel → PowerPoint → Dashboard → Data Cleaning'
        ],
        correct: 2,
        explanation: 'Die Kette: 1. Cleaning → 2. Excel → 3. Dashboard → 4. PowerPoint.'
      },
      {
        q: 'Was passiert, wenn man "credit card report cycle" eingibt?',
        options: [
          'Claude fragt nach weiteren Details und wartet',
          'Claude führt den gesamten Workflow autark durch',
          'Claude zeigt nur die letzte Kreditkartenabrechnung',
          'Claude öffnet die Kreditkarten-Website'
        ],
        correct: 1,
        explanation: 'Der Super Skill verkn&uuml;pft alle Einzelskills — ein Prompt löst den kompletten Prozess aus.'
      },
      {
        q: 'Wo findet man alle gespeicherten Skills?',
        options: [
          'Im Chat-Verlauf unter "Letzte Nachrichten"',
          'In den Einstellungen unter Customize → Skills',
          'Auf der Anthropic-Website unter "Downloads"',
          'Skills können nach der Erstellung nicht mehr bearbeitet werden'
        ],
        correct: 1,
        explanation: 'Einstellungen → Customize → Skills.'
      },
      {
        q: 'Wie wird ein neuer Skill am besten erstellt?',
        options: [
          'Man schreibt den Skill manuell in einem Texteditor',
          'Man kauft Skills im Claude Store',
          'Man lässt Claude die Aufgabe erst im Chat lösen, dann den Skill erstellen',
          'Skills werden automatisch nach 10 ähnlichen Chats erstellt'
        ],
        correct: 2,
        explanation: 'Best Practice: Erst im Chat lösen, dann Claude anweisen den Skill zu erstellen.'
      },
      {
        q: 'Welches Format nutzt der Dashboard Builder?',
        options: [
          'PDF mit eingebetteten Links',
          'PowerPoint mit Animationen',
          'Excel mit Pivot-Tabellen',
          'Interaktives HTML mit Filtern und Trendanalysen'
        ],
        correct: 3,
        explanation: 'Der Dashboard Builder erstellt interaktives HTML mit Drill-Down-Funktionalität.'
      },
      {
        q: 'Was ist der Hauptvorteil des modularen Skill-Ansatzes?',
        options: [
          'Ein großer Prompt ist immer besser als mehrere Skills',
          'Modulare Skills sind billiger',
          'Einzelne Skills können unabhängig aktualisiert, kombiniert und wiederverwendet werden',
          'Es gibt keinen Unterschied'
        ],
        correct: 2,
        explanation: 'Modularität: Jeder Skill einzeln aktualisierbar, frei kombinierbar, in verschiedenen Workflows wiederverwendbar.'
      }
    ]
  },
  {
    id: 6,
    number: '06',
    meta: 'Vertiefung · Modul 6',
    title: 'Fortgeschrittenes Prompting im Finance-Kontext',
    desc: 'Vertiefung strukturierter Prompting-Techniken für finanzbezogene Aufgaben, darunter XML-Tags, Reihenfolge von Anweisungen, Beispiele und kontrollierte Ausgabeformate.',
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
      <p><strong>3–5 Beispiele</strong> eines "Perfect Pitchbook Summary" bereitstellen.
      <strong>Chain-of-Thought</strong>: Step-by-step denken, bevor ein Verdict kommt.</p>

      <h3>Die Pre-fill-Technik</h3>
      <p>Antwort mit <code>{</code> beginnen lassen → valides JSON. Mit <code>|</code> → Markdown-Tabelle.</p>
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
        explanation: 'Strukturierte Daten zuerst — sie liefern den Kontext für die Interpretation.'
      },
      {
        q: 'Wie viele Beispiele werden für effektives Few-Shot Prompting empfohlen?',
        options: ['So viele wie möglich, mindestens 100', '20–30 Beispiele', '3–5 Beispiele', '1 Beispiel reicht immer'],
        correct: 2,
        explanation: '3–5 Beispiele sind der Sweet Spot.'
      },
      {
        q: 'Welche XML-Tags werden für Structural Prompting verwendet?',
        options: ['<context>, <instructions>, <examples>', '<div>, <span>, <button>', '<header>, <footer>, <main>', '<a>, <b>, <p>'],
        correct: 0,
        explanation: '<context>, <instructions> und <examples> sind die zentralen Tags.'
      },
      {
        q: 'Was macht die Pre-fill-Technik mit dem Zeichen { ?',
        options: ['Sie startet einen neuen Chat', 'Sie aktiviert den Debug-Modus', 'Sie erzwingt valides JSON als Output-Format', 'Sie speichert den Prompt als Template'],
        correct: 2,
        explanation: 'Pre-fill mit { → Claude liefert valides JSON.'
      }
    ]
  }
];

// Abschlussprüfung — 15 Fragen
const FINAL_EXAM = [
  { q: 'Wozu dienen "Projects" in Claude?', options: ['Sie aktivieren den Programmiermodus', 'Sie ersetzen die Websuche', 'Sie sind Briefing-Ordner mit Kontext für spezifische Themen', 'Sie speichern nur alte Chats'], correct: 2, explanation: 'Projects = ausgelagertes Gehirn mit Dokumenten, Anweisungen und Kontext.' },
  { q: 'Was unterscheidet Skills von Plugins?', options: ['Skills sind einzelne Fähigkeiten, Plugins sind Bündel', 'Es gibt keinen Unterschied', 'Plugins sind kostenlos', 'Skills brauchen Claude Code'], correct: 0, explanation: 'Skills = einzelne Fähigkeiten. Plugins = ganze Bündel.' },
  { q: 'Welches Modell eignet sich für tiefgehende Analysen mit Quellen?', options: ['Haiku', 'Alle identisch', 'Sonnet', 'Opus'], correct: 3, explanation: 'Opus kann Quellen und Studien integrieren.' },
  { q: 'Welche Datenschutz-Einstellung muss bei IEG deaktiviert werden?', options: ['Die Erinnerungen (Memory)', 'Die Websuche', 'Der Inkognitomodus', 'Die Option "hilft dabei Claude zu verbessern"'], correct: 3, explanation: 'Trainings-Option deaktivieren.' },
  { q: 'Welche sechs Elemente umfasst die ideale Prompt-Struktur?', options: ['Ausschließlich Code-Beispiele', 'Nur eine kurze Frage', 'Aufgabe, Kontext, Hintergrunddaten, Anweisungen, Beispiele, Erinnerungen', 'Überschrift und ein Satz'], correct: 2, explanation: 'Sechs Elemente: Aufgabe, Kontext, Hintergrunddaten, Anweisungen, Beispiele, Erinnerungen.' },
  { q: 'Wozu dienen XML-Tags in einem Prompt?', options: ['Sie verschlüsseln den Prompt', 'Sie sind Dekoration', 'Sie strukturieren den Prompt für gezielte Abschnitt-Zugriffe', 'Sie aktivieren den Code-Modus'], correct: 2, explanation: 'XML-Tags geben dem Prompt eine klare Hierarchie.' },
  { q: 'Was unterscheidet einen Skill von einer Projektanweisung?', options: ['Projekte sind flexibler', 'Skills funktionieren nur offline', 'Skills sind übertragbar und in jedem Chat nutzbar', 'Kein Unterschied'], correct: 2, explanation: 'Skills sind chatübergreifend wiederverwendbar.' },
  { q: 'You vibecoded a side project on your company\'s AI. Who owns it?', options: ['You', 'The AI company', 'Nobody', 'Your employer'], correct: 3, explanation: 'Using company AI = IP likely belongs to employer.' },
  { q: 'What is the "lethal trifecta"?', options: ['Three AI models at once', 'Three browsers simultaneously', 'AI accesses private data, reads external content, and can send data out', 'Three connectors from one provider'], correct: 2, explanation: 'Private data + external content + outbound = attackers can hijack.' },
  { q: 'How often should you review and disconnect unused connectors?', options: ['Never', 'Only when something breaks', 'Once a year', 'Monthly'], correct: 3, explanation: 'Monthly: check settings, cut anything not in use.' },
  { q: 'Was macht der "Super Skill" bei der Finanzautomatisierung?', options: ['Er erstellt nur eine Excel-Datei', 'Er verkettet Data Cleaning, Excel, Dashboard und PowerPoint in einem Durchlauf', 'Er sendet Rechnungen per E-Mail', 'Er bucht Transaktionen automatisch'], correct: 1, explanation: 'Super Skill: Cleaning → Excel → Dashboard → PowerPoint — alles mit einem Prompt.' },
  { q: 'Was ist "Prompt Chaining"?', options: ['Prompts in Emojis verpacken', 'Prompts übersetzen', 'Eine große Aufgabe in kleine aufeinanderfolgende Prompts zerlegen', 'Mehrere KI-Modelle gleichzeitig nutzen'], correct: 2, explanation: 'Prompt Chaining = große Aufgabe → kleine Schritte → Teilergebnisse prüfen.' },
  { q: 'Was bewirkt Pre-filling mit dem Zeichen { ?', options: ['Neuen Chat starten', 'Prompt speichern', 'Valides JSON als Output erzwingen', 'Debug-Modus aktivieren'], correct: 2, explanation: 'Pre-fill mit { = Claude liefert valides JSON.' },
  { q: 'Welche Reihenfolge gilt bei "Analyze the Form before the Sketch"?', options: ['Beide gleichzeitig', 'Reihenfolge egal', 'Erst Sketch, dann Form', 'Erst klare Fakten (Form), dann interpretative Daten (Sketch)'], correct: 3, explanation: 'Klare Fakten zuerst — sie kalibrieren den Kontext.' },
  { q: 'Why should you never connect work Gmail to a personal AI?', options: ['It makes AI slower', 'Personal accounts have better security', 'Gmail doesn\'t support it', 'You\'d pipe company data into a tool with no contract'], correct: 3, explanation: 'Work accounts on personal AI = company data without contract or security guarantees.' }
];

const PASS_THRESHOLD = 70;
