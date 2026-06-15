/* ============================================
   IEG Claude Academy — Content
   Alle Module + Quizzes
   v4.0 — Alle Antworten durchgemischt
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
    meta: 'Grundlagen · Modul 1',
    title: 'Grundlagen und Arbeitsumgebung',
    desc: 'Einführung in die grundlegende Nutzung von Claude: Chat-Struktur, Modelle, zentrale Funktionen, Personalisierung sowie Datenschutz und sichere Anwendung.',
    duration: '45 Min.',
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
    meta: 'Fortgeschritten · Modul 3',
    title: 'Skills und wiederverwendbare Arbeitsabläufe',
    desc: 'Einführung in Skills als strukturierte, wiederverwendbare Arbeitsanweisungen — von der inhaltlichen Vorbereitung bis zur praktischen Anwendung im Arbeitsalltag.',
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
    meta: 'Sicherheit · Modul 4',
    title: 'Sicherer Umgang mit Daten und Tools',
    desc: 'Grundlagen für den sicheren Einsatz von Claude: sensible Inhalte, typische Risikofelder, Konnektoren und zentrale Regeln für datenschutzbewusstes Arbeiten.',
    duration: '15 Min.',
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
    meta: 'Praxis · Modul 5',
    title: 'Skills in Finance-Workflows',
    desc: 'Praxisnahe Anwendungsbeispiele für Skills in finanznahen Prozessen, darunter Datenaufbereitung, Strukturierung von Inhalten, Dashboards und wiederkehrende Arbeitsabläufe.',
    duration: '20 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/h0XeJi6OAVI', title: 'Finance Automation mit Claude Skills', caption: 'Video 5.1 \u00b7 Kreditkartenabrechnung vollautomatisiert mit Claude Skills' },
    ],
    images: [],
    longContent: '',
    content: `
      <p>Dieser Workflow zeigt, wie man komplexe, zeitintensive Finanzaufgaben durch die Kombination
      spezialisierter Skills in einen <strong>vollautomatisierten Prozess</strong> verwandelt.</p>

      <h3>1. Was sind Claude Skills im Finanzkontext?</h3>
      <p>Ein Skill ist eine gespeicherte Arbeitsanweisung, die einen einmal definierten Workflow
      f\u00fcr die zuk\u00fcnftige Nutzung konserviert. Im Finanzbereich erm\u00f6glichen sie es,
      Rohdaten ohne manuellen Aufwand in <strong>\u201eCFO-fertige\u201c Berichte</strong> zu transformieren.</p>

      <h3>2. Die Bausteine des Workflows (Modulare Skills)</h3>

      <h4>Skill 1: Data Cleaning (Datenbereinigung)</h4>
      <ul>
        <li><strong>Ausgangslage:</strong> Rohdateien (z.B. Excel-Exporte) sind oft unstrukturiert,
        enthalten \u00fcberfl\u00fcssige Zeilen/Spalten oder es fehlt der Kontext.</li>
        <li><strong>Funktion:</strong> Claude konsolidiert verschiedene Tabs in einer Tabelle,
        beh\u00e4lt nur relevante Felder (Datum, Beschreibung, Betrag) und f\u00fcgt fehlende
        Informationen wie den Firmennamen oder den Karteninhaber hinzu.</li>
        <li><strong>Erstellung:</strong> Sobald Claude die Daten im Chat korrekt bereinigt hat,
        weist man ihn an, daraus den Skill \u201eData Cleaning\u201c zu erstellen.</li>
      </ul>

      <h4>Skill 2: Branding &amp; Design-Richtlinien</h4>
      <p>Damit alle Ausgaben (Dashboards, Folien) professionell aussehen, wird ein Skill f\u00fcr
      das <strong>Corporate Design</strong> erstellt. Hier werden Farben, Stile und funktionale
      Anforderungen (z.B. KPIs oder Narrative) hinterlegt.</p>

      <h4>Skill 3: Dynamic Dashboard Builder</h4>
      <ul>
        <li><strong>Technik:</strong> Claude erstellt ein <strong>interaktives HTML-Dashboard</strong>.</li>
        <li><strong>Features:</strong> Filter, Trendanalysen und Darstellungen gro\u00dfer Transaktionen.</li>
        <li><strong>Drill-Down:</strong> Schl\u00fcsselfunktion \u2014 durch Klicken auf einen Namen
        werden sofort alle detaillierten Berichte zu dieser Person angezeigt.</li>
      </ul>

      <h4>Skill 4: PowerPoint-Pr\u00e4sentationen</h4>
      <p>Basierend auf den bereinigten Excel-Daten und den Dashboard-Erkenntnissen erstellt Claude
      eine <strong>Pr\u00e4sentation f\u00fcr Vorstandssitzungen</strong>. Das Branding wird dabei
      automatisch durch den Branding-Skill \u00fcbernommen.</p>

      <h3>3. Der "Super Skill" (Full Cycle Automation)</h3>
      <p>Der Super Skill verkn\u00fcpft alle Einzelfertigkeiten zu einer Kette:</p>
      <div class="callout callout-success">
        <div class="callout-title">Ablauf des Super Skills</div>
        <p><strong>1.</strong> Data Cleaning \u2192 <strong>2.</strong> Saubere Excel-Datei \u2192
        <strong>3.</strong> Dashboard-Erstellung \u2192 <strong>4.</strong> PowerPoint-Generierung</p>
      </div>
      <p>Mit einem kurzen Prompt wie <strong>\u201ecredit card report cycle\u201c</strong> f\u00fchrt
      Claude den gesamten, oft tagef\u00fcllenden Prozess in <strong>Minuten autark</strong> durch.</p>

      <h3>4. Verwaltung der Skills</h3>
      <p>Alle erstellten und gespeicherten Skills k\u00f6nnen in den Einstellungen unter
      <strong>Customize (Anpassen) \u2192 Skills</strong> eingesehen und bearbeitet werden.</p>

      <div class="callout">
        <div class="callout-title">Kernidee</div>
        <p>Statt jeden Monat Stunden mit repetitiven Finanzaufgaben zu verbringen, baust du dir
        einmalig spezialisierte Skills, die du dann mit einem einzigen Prompt ausl\u00f6st.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Was ist ein Claude Skill im Finanzkontext?',
        options: [
          'Ein einmaliger Prompt, der nach Benutzung gel\u00f6scht wird',
          'Eine gespeicherte Arbeitsanweisung, die Rohdaten in CFO-fertige Berichte transformiert',
          'Ein externes Excel-Plugin',
          'Eine manuelle Checkliste f\u00fcr Buchhalter'
        ],
        correct: 1,
        explanation: 'Ein Skill konserviert einen definierten Workflow f\u00fcr wiederholte Nutzung \u2014 im Finanzbereich z.B. die Transformation von Rohdaten in fertige Berichte.'
      },
      {
        q: 'Was macht der "Data Cleaning"-Skill mit unstrukturierten Excel-Exporten?',
        options: [
          'Er l\u00f6scht die gesamte Datei und erstellt sie neu',
          'Er konsolidiert Tabs, beh\u00e4lt relevante Felder und f\u00fcgt fehlende Infos hinzu',
          'Er konvertiert Excel in PDF ohne \u00c4nderungen',
          'Er sendet die Datei an einen menschlichen Buchhalter'
        ],
        correct: 1,
        explanation: 'Data Cleaning: Tabs zusammenf\u00fchren, nur Datum/Beschreibung/Betrag behalten, fehlende Infos (Firmenname, Karteninhaber) erg\u00e4nzen.'
      },
      {
        q: 'Warum wird ein separater Branding-Skill erstellt?',
        options: [
          'Weil Claude ohne Branding-Skill nicht funktioniert',
          'Damit alle Ausgaben (Dashboards, Folien) automatisch das Corporate Design tragen',
          'Um das Claude-Interface farblich anzupassen',
          'Weil Branding gesetzlich vorgeschrieben ist'
        ],
        correct: 1,
        explanation: 'Der Branding-Skill hinterlegt Farben, Stile und KPI-Anforderungen \u2014 alle nachfolgenden Outputs sehen automatisch professionell aus.'
      },
      {
        q: 'Was ist die "Drill-Down"-Funktion im Dynamic Dashboard?',
        options: [
          'Eine Funktion zum L\u00f6schen von Daten',
          'Ein Button zum Exportieren als PDF',
          'Ein Bohrmaschinen-Simulator',
          'Durch Klick auf einen Namen werden alle detaillierten Berichte zu dieser Person angezeigt'
        ],
        correct: 3,
        explanation: 'Drill-Down = auf einen Namen klicken \u2192 sofort alle detaillierten Transaktionen und Berichte dieser Person sehen.'
      },
      {
        q: 'In welcher Reihenfolge arbeitet der "Super Skill"?',
        options: [
          'Dashboard \u2192 PowerPoint \u2192 Data Cleaning \u2192 Excel',
          'PowerPoint \u2192 Dashboard \u2192 Excel \u2192 Data Cleaning',
          'Data Cleaning \u2192 saubere Excel \u2192 Dashboard \u2192 PowerPoint',
          'Excel \u2192 PowerPoint \u2192 Dashboard \u2192 Data Cleaning'
        ],
        correct: 2,
        explanation: 'Die Kette: 1. Data Cleaning \u2192 2. Saubere Excel \u2192 3. Dashboard \u2192 4. PowerPoint-Pr\u00e4sentation.'
      },
      {
        q: 'Was passiert, wenn man den Prompt "credit card report cycle" eingibt?',
        options: [
          'Claude fragt nach weiteren Details und wartet',
          'Claude f\u00fchrt den gesamten Workflow (Cleaning \u2192 Excel \u2192 Dashboard \u2192 PPT) autark durch',
          'Claude zeigt nur die letzte Kreditkartenabrechnung an',
          'Claude \u00f6ffnet die Kreditkarten-Website'
        ],
        correct: 1,
        explanation: 'Der Super Skill verkn\u00fcpft alle Einzelskills \u2014 ein kurzer Prompt l\u00f6st den kompletten, oft tagef\u00fcllenden Prozess in Minuten aus.'
      },
      {
        q: 'Wo findet man alle gespeicherten Skills zur Bearbeitung?',
        options: [
          'Im Chat-Verlauf unter "Letzte Nachrichten"',
          'In den Einstellungen unter Customize (Anpassen) \u2192 Skills',
          'Auf der Anthropic-Website unter "Downloads"',
          'Skills k\u00f6nnen nach der Erstellung nicht mehr bearbeitet werden'
        ],
        correct: 1,
        explanation: 'Alle Skills sind unter Einstellungen \u2192 Customize \u2192 Skills einsehbar und editierbar.'
      },
      {
        q: 'Wie wird ein neuer Skill am besten erstellt?',
        options: [
          'Man schreibt den Skill manuell in einem Texteditor',
          'Man kauft Skills im Claude Store',
          'Man l\u00e4sst Claude die Aufgabe erst im Chat korrekt l\u00f6sen, dann den Skill daraus erstellen',
          'Skills werden automatisch nach 10 \u00e4hnlichen Chats erstellt'
        ],
        correct: 2,
        explanation: 'Best Practice: Erst im Chat die Aufgabe l\u00f6sen lassen, dann Claude anweisen, daraus einen wiederverwendbaren Skill zu erstellen.'
      },
      {
        q: 'Welches Format nutzt der Dashboard Builder f\u00fcr interaktive Dashboards?',
        options: [
          'PDF mit eingebetteten Links',
          'PowerPoint mit Animationen',
          'Excel mit Pivot-Tabellen',
          'Interaktives HTML mit Filtern und Trendanalysen'
        ],
        correct: 3,
        explanation: 'Der Dashboard Builder erstellt interaktives HTML \u2014 mit Filtern, Trendanalysen und Drill-Down-Funktionalit\u00e4t.'
      },
      {
        q: 'Was ist der Hauptvorteil des modularen Skill-Ansatzes gegen\u00fcber einem einzigen gro\u00dfen Prompt?',
        options: [
          'Ein gro\u00dfer Prompt ist immer besser als mehrere Skills',
          'Modulare Skills sind billiger',
          'Vertiefung strukturierter Prompting-Techniken für finanzbezogene Aufgaben, darunter XML-Tags, Reihenfolge von Anweisungen, Beispiele und kontrollierte Ausgabeformate.'
        ],
        correct: 2,
        explanation: 'Modularit\u00e4t: Jeder Skill kann einzeln aktualisiert, frei kombiniert und in verschiedenen Workflows wiederverwendet werden.'
      }
    ]
  },
  {
    id: 6,
    number: '06',
    meta: 'Vertiefung · Modul 6',
    title: 'Fortgeschrittenes Prompting im Finance-Kontext',
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

// Abschlussprüfung \u2014 15 Fragen aus allen Modulen, Antworten durchgemischt
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
    q: 'Was macht der "Super Skill" bei der Finanzautomatisierung?',
    options: ['Er erstellt nur eine Excel-Datei', 'Er verkettet Data Cleaning, Excel, Dashboard und PowerPoint in einem Durchlauf', 'Er sendet Rechnungen per E-Mail', 'Er bucht Transaktionen automatisch'],
    correct: 1, explanation: 'Der Super Skill verkettet alle Einzelskills: Cleaning \u2192 Excel \u2192 Dashboard \u2192 PowerPoint \u2014 alles mit einem Prompt.'
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
