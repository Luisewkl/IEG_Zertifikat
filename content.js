/* ============================================
   IEG Claude Academy — Content
   Alle Module + Quizzes
   ============================================ */

const CURRICULUM = [
  {
    id: 0,
    number: '00',
    meta: 'Strategic Orientation · Foundational',
    title: 'The AI-Powered Investment Bank',
    desc: 'Warum agentische KI für M&A keine Option mehr ist, sondern eine Wettbewerbsnotwendigkeit. Die drei Interaktionsmodi: Chat, Cowork, Code.',
    duration: '15 Min.',
    content: `
      <div class="module-doc-meta">Strategic Orientation · Modul 0</div>
      <h2 class="module-doc-title">The AI-Powered Investment Bank</h2>
      <p class="module-doc-lede">
        Die Finanzdienstleistungsbranche durchläuft einen tektonischen Wandel — weg von statischen
        Chatbots, hin zu agentischen Workflows. Für M&amp;A-Profis ist Claude-Mastery keine Option
        mehr, sondern Wettbewerbsnotwendigkeit.
      </p>

      <p>In einer Welt, in der <strong>Deal-Velocity</strong> und <strong>Präzision</strong> die
      primären Währungen sind, wirkt agentische KI als Kraftmultiplikator. Im Gegensatz zu
      Standardmodellen agiert Claude als autonomer Partner: Er navigiert komplexe lokale und
      cloud-basierte Dateisysteme, führt mehrstufige Datensynthesen aus und automatisiert
      reibungsstarke Origination- und Underwriting-Aufgaben.</p>

      <h3>Die drei Kerninteraktionsmodi</h3>

      <table>
        <thead>
          <tr><th>Modus</th><th>Definition</th><th>Anwendungsfall im Investment Banking</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Chat</strong></td>
            <td>Standard-Konversationsoberfläche für direkte Anfragen.</td>
            <td>Marktnachrichten zusammenfassen, schnelle Formelchecks, Outreach-Drafts für Syndicate-Koordination.</td>
          </tr>
          <tr>
            <td><strong>Cowork</strong></td>
            <td>Desktop-Umgebung, in der Claude lokale Dateien liest und bearbeitet.</td>
            <td>Pitchbook-Datenvorbereitung, Bereinigen von Transaction Logs, Batch-Generierung von Client Reports.</td>
          </tr>
          <tr>
            <td><strong>Code</strong></td>
            <td>Terminalbasierter Agent für autonome Entwicklung &amp; Engineering.</td>
            <td>Bespoke LBO-Modelle, komplexe Datenpipelines, web-basierte Deal Rooms.</td>
          </tr>
        </tbody>
      </table>

      <div class="callout">
        <div class="callout-title">Kernidee</div>
        <p>Der Übergang von High-Level-Strategie zu Execution erfordert eine präzise Grundkonfiguration —
        damit Modell-Outputs den rigorosen Audit-Standards der Bankenbranche entsprechen.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Welche drei Kerninteraktionsmodi mit Claude werden im Investment Banking unterschieden?',
        options: [
          'Chat, Cowork und Code',
          'Beginner, Intermediate und Expert',
          'Web, Mobile und Desktop',
          'Opus, Sonnet und Haiku'
        ],
        correct: 0,
        explanation: 'Chat (Konversation), Cowork (lokale Dateien) und Code (Terminal-Agent) sind die drei zentralen Interaktionsmodi, die in der Strategic Orientation eingeführt werden.'
      },
      {
        q: 'Welche Aufgabe eignet sich am besten für den Cowork-Modus?',
        options: [
          'Eine kurze Marktnachricht zusammenfassen',
          'Pitchbook-Datenvorbereitung und Bereinigung von Transaction Logs',
          'Aufbau eines vollständigen Deal Rooms aus dem Terminal',
          'Beantwortung einer einfachen Faktenfrage'
        ],
        correct: 1,
        explanation: 'Cowork ist die Desktop-Umgebung, in der Claude direkt mit lokalen Dateien arbeitet — ideal für Pitchbook-Vorbereitung und das Bereinigen von Transaction Logs.'
      },
      {
        q: 'Was bedeutet "agentische KI" als Kraftmultiplikator im Banking-Kontext?',
        options: [
          'Schnellere Antworten in einem Chat-Fenster',
          'Autonome Navigation durch komplexe Dateisysteme und mehrstufige Datensynthesen',
          'Bessere Suchergebnisse in Google',
          'Übersetzung von Dokumenten in andere Sprachen'
        ],
        correct: 1,
        explanation: 'Agentische KI navigiert autonom Dateisysteme, führt mehrstufige Synthesen aus und automatisiert friction-heavy Aufgaben — das macht sie zum Kraftmultiplikator für Deal Velocity.'
      }
    ]
  },
  {
    id: 1,
    number: '01',
    meta: 'Beginner · Module 1',
    title: 'Foundations & The Analyst\u2019s Workbench',
    desc: 'Die richtige Konfiguration ist die erste Verteidigungslinie gegen Halluzinationen. Personal Preferences, das Claude Model Family und Real-Time Tools.',
    duration: '25 Min.',
    content: `
      <div class="module-doc-meta">Beginner · Modul 1</div>
      <h2 class="module-doc-title">Foundations &amp; The Analyst&rsquo;s Workbench</h2>
      <p class="module-doc-lede">
        In hochsensiblem Financial Reporting ist die Environmental Configuration die erste
        Verteidigungslinie gegen Inakkuratheit. Ein richtig konfigurierter Workbench minimiert
        Halluzinationsrisiken und stellt sicher, dass das Modell innerhalb institutioneller Standards arbeitet.
      </p>

      <h3>Personal Preferences &amp; Professional Persona</h3>
      <p>Damit Claude als spezialisierter Finanzanalyst und nicht als Generalist agiert, müssen
      User die <em>Personal Preferences</em> in den Einstellungen definieren. Das etabliert einen
      permanenten, professionellen Kontext für jede Interaktion.</p>

      <h4>Investment Banking Persona Template</h4>
      <div class="callout">
        <div class="callout-title">Mandated Persona</div>
        <p><strong>Role:</strong> Investment Banking Analyst / Associate.<br>
        <strong>Tone:</strong> Direct, technical, professional. "No-fluff" approach.<br>
        <strong>Operational Directive:</strong> Prioritize data integrity. If a data point is missing
        or a query is ambiguous, <strong>ask for clarification instead of guessing</strong>.<br>
        <strong>Output Formatting:</strong> Default to structured Markdown tables and bulleted lists
        suitable for executive summaries.</p>
      </div>

      <h3>Die Claude Model Family</h3>
      <p>Strategische Modellauswahl ist essenziell, um Rechentiefe und Geschwindigkeit auszubalancieren:</p>
      <ul>
        <li><strong>Claude Opus</strong> — Premier-Forschungsmodell. Ausgelegt für Deep-Dive-Analysen,
        z. B. die Synthese von 70+ disparaten Quellen für umfassende DAX-Marktreports oder komplexe
        Underwriting-Audits.</li>
        <li><strong>Claude Sonnet</strong> — Der optimale Daily Driver. Ideal für Document Drafting,
        E-Mail-Management und Standardanalysen.</li>
        <li><strong>Claude Haiku</strong> — Auf Geschwindigkeit optimiert. Perfekt für schnelle
        Textformatierung, einfache Übersetzungen und High-Volume Low-Complexity-Aufgaben.</li>
      </ul>

      <h3>Real-Time Tools</h3>
      <p>Die <strong>Claude Desktop App</strong> und die <strong>Chrome Extension</strong> bieten die
      nötige Konnektivität für moderne Workflows. Die <em>Golden Tab</em>-Funktion der Extension ist
      besonders potent für Echtzeit-Marktforschung — Claude navigiert autonom durch Browser-Tabs, um
      Wettbewerbspreise oder SEC-Filings zu extrahieren.</p>

      <div class="callout callout-warn">
        <div class="callout-title">Kritisch</div>
        <p>Ohne korrekt definierte Persona arbeitet Claude als Generalist und liefert oft zu allgemeine,
        nicht audit-taugliche Outputs. Die Persona ist <em>nicht</em> optional.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Welches Claude-Modell ist die beste Wahl für die Synthese von 70+ Quellen in einem umfassenden DAX-Marktreport?',
        options: [
          'Claude Haiku',
          'Claude Sonnet',
          'Claude Opus',
          'Spielt keine Rolle'
        ],
        correct: 2,
        explanation: 'Claude Opus ist das Premier-Forschungsmodell, ausgelegt für Deep-Dive-Analysen mit vielen disparaten Quellen.'
      },
      {
        q: 'Was sollte Claude laut der Investment Banking Persona tun, wenn eine Anfrage mehrdeutig ist oder ein Datenpunkt fehlt?',
        options: [
          'Den plausibelsten Wert raten',
          'Nach Klarstellung fragen, statt zu raten',
          'Die Anfrage ablehnen',
          'Das Internet durchsuchen, ohne den User zu informieren'
        ],
        correct: 1,
        explanation: 'Operational Directive der Persona: Bei fehlenden Datenpunkten oder mehrdeutigen Queries soll Claude nach Klarstellung fragen — nie raten. Datenintegrität hat Priorität.'
      },
      {
        q: 'Welche Funktion der Chrome Extension wird besonders für Echtzeit-Marktforschung empfohlen?',
        options: [
          'Tab Memory',
          'Auto-Translate',
          'Golden Tab',
          'Citation Mode'
        ],
        correct: 2,
        explanation: 'Die Golden-Tab-Funktion erlaubt Claude die autonome Navigation durch Browser-Tabs, um Wettbewerbsdaten oder SEC-Filings zu extrahieren.'
      },
      {
        q: 'Welches Default-Output-Format wird in der Investment Banking Persona vorgegeben?',
        options: [
          'Lange Fließtext-Essays',
          'Reine Bulletpoint-Listen ohne Struktur',
          'Strukturierte Markdown-Tabellen und Bulletlisten für Executive Summaries',
          'Reine Code-Blöcke'
        ],
        correct: 2,
        explanation: 'Die Persona schreibt strukturierte Markdown-Tabellen und Bullets vor — passend für Executive Summaries.'
      }
    ]
  },
  {
    id: 2,
    number: '02',
    meta: 'Intermediate · Module 2',
    title: 'Document Engineering & Data Synthesis',
    desc: 'Vom passiven Datenkonsum zum aktiven Generieren von Deliverables. Interactive Artifacts, Spreadsheet Cleanup und Excel-Integration.',
    duration: '30 Min.',
    content: `
      <div class="module-doc-meta">Intermediate · Modul 2</div>
      <h2 class="module-doc-title">Document Engineering &amp; Data Synthesis</h2>
      <p class="module-doc-lede">
        Intermediate-Mastery bedeutet den Wechsel vom reinen Datenkonsum zum
        <em>Generieren von Deliverables</em>. Mit Claudes interner Verarbeitungskraft
        automatisieren Analysten Aufgaben, die sonst Stunden manueller Arbeit kosten.
      </p>

      <h3>Interactive Artifacts</h3>
      <p>Mit der Artifacts-Funktion kann Claude interaktive Frontend-Anwendungen direkt im UI rendern.
      Im Banking-Kontext besonders wertvoll für:</p>
      <ul>
        <li><strong>LBO Variable Sensitivity Dashboards:</strong> Claude architektiert ein interaktives
        Dashboard, in dem User Variablen (Exit Multiple, Debt-to-Equity-Ratio) anpassen und IRR-Effekte
        in Echtzeit sehen.</li>
        <li><strong>Bond Yield Calculators:</strong> Bespoke, teilbare Tools, die Yields oder
        Amortisationen berechnen — als standalone HTML für Client Presentations downloadbar.</li>
      </ul>

      <h3>Spreadsheet Cleanup &amp; Excel-Integration</h3>
      <p>Claude exzelliert darin, fragmentierte Transaction Logs in audit-taugliche Datasets zu transformieren.</p>

      <h4>Cleanup Checklist</h4>
      <ul>
        <li><strong>Standardize Formats:</strong> Inkonsistente Datumsformate (YYYY-MM-DD) und
        Währungsnotationen normalisieren.</li>
        <li><strong>Intelligent Reconciliation:</strong> Duplikate von Transaction Rows identifizieren und entfernen.</li>
        <li><strong>Reasoning-Based Filling:</strong> Fehlende Werte (z. B. Venue Capacity) auf Basis
        früherer Einträge füllen — durch interne Logik.</li>
        <li><strong>Anomaly Flagging:</strong> Revenue-Mismatches oder Outlier-Tickets automatisch zur
        Human Review markieren.</li>
      </ul>

      <h4>Claude in Excel</h4>
      <p>Die direkte Excel-Integration erlaubt das Reparieren zirkulärer Referenzen und das Generieren
      dynamischer Multi-Line-Charts mit <strong>einsatzbereiten Single-Sentence-Prompts</strong> —
      ohne komplexes VBA.</p>

      <div class="callout">
        <div class="callout-title">Pro Tip</div>
        <p>Sobald Data Cleanup im UI gemeistert ist, kann der Profi zur erweiterten Automatisierung
        lokaler Dateisysteme übergehen — das ist der Sprung zu Cowork (Modul 3).</p>
      </div>
    `,
    quiz: [
      {
        q: 'Welcher der folgenden Use Cases ist KEIN typisches Beispiel für Interactive Artifacts im Banking?',
        options: [
          'LBO Variable Sensitivity Dashboard',
          'Bond Yield Calculator als standalone HTML',
          'Eine Datenbank mit verschlüsselten PII der Klienten',
          'Interaktives Dashboard mit IRR-Echtzeit-Updates'
        ],
        correct: 2,
        explanation: 'PII-Datenbanken sind sicherheitskritisch und werden NICHT in Artifacts erstellt — die anderen drei sind Standard-Use-Cases.'
      },
      {
        q: 'Welche der vier Aufgaben gehört NICHT zur Spreadsheet-Cleanup-Checkliste?',
        options: [
          'Standardize Formats (Datumsformate, Währungen)',
          'Intelligent Reconciliation (Duplikate entfernen)',
          'Predictive Trading (Zukunftsprognosen erstellen)',
          'Anomaly Flagging (Outlier markieren)'
        ],
        correct: 2,
        explanation: 'Standardisierung, Reconciliation, Reasoning-Based Filling und Anomaly Flagging sind die vier Punkte. Predictive Trading gehört nicht dazu.'
      },
      {
        q: 'Wofür eignet sich Claude in Excel besonders?',
        options: [
          'Manuelle VBA-Programmierung lehren',
          'Reparatur zirkulärer Referenzen und Generierung dynamischer Charts mit Single-Sentence-Prompts',
          'Automatisches Trading von Aktien',
          'Kompletter Ersatz für Excel als Software'
        ],
        correct: 1,
        explanation: 'Die Excel-Integration umgeht VBA — User können mit einem einzigen Prompt zirkuläre Referenzen reparieren oder dynamische Charts erzeugen.'
      },
      {
        q: 'Was ist "Reasoning-Based Filling" beim Spreadsheet Cleanup?',
        options: [
          'Random-Werte einfügen, um Lücken zu schließen',
          'Lücken anhand vorhandener Logik (z. B. Venue Capacity aus früheren Einträgen) füllen',
          'Datenpunkte manuell eingeben',
          'Lücken mit Nullen füllen'
        ],
        correct: 1,
        explanation: 'Reasoning-Based Filling nutzt die interne Logik des Modells, um aus vorhandenen Daten konsistente Werte für fehlende Einträge abzuleiten.'
      }
    ]
  },
  {
    id: 3,
    number: '03',
    meta: 'Advanced · Module 3',
    title: 'Claude Cowork — Agentic File Management',
    desc: 'Human-in-the-Loop-Automation auf der lokalen Maschine. claude.md, Reference Folders, Batch-Reports und Security Protocols für Capital Markets.',
    duration: '35 Min.',
    content: `
      <div class="module-doc-meta">Advanced · Modul 3</div>
      <h2 class="module-doc-title">Claude Cowork &mdash; Agentic File Management</h2>
      <p class="module-doc-lede">
        Cowork führt &bdquo;Human-in-the-Loop&ldquo;-Automation ein. Claude operiert direkt auf der
        lokalen Maschine des Users und führt mehrstufige Dateioperationen aus &mdash; während der
        Analyst strategische Aufsicht und finale Approvals liefert.
      </p>

      <h3>Architektur des Workspaces</h3>
      <p>Eine professionelle Cowork-Umgebung beruht auf einer strukturierten Hierarchie:</p>
      <ul>
        <li><strong>claude.md (Folder Instructions):</strong> Eine Markdown-Datei im Projektordner,
        die projektspezifische Logik diktiert &mdash; etwa spezialisierte Definitionen für
        &bdquo;Gross Transaction Value&ldquo; (GTV) oder bevorzugte SQL-Naming-Conventions.</li>
        <li><strong>Reference Folder:</strong> Sicherer Raum für Brand Assets &mdash;
        bank-spezifische Logos, Farbschemata (Hex Codes) und Standard-Pitchbook-Typografie.</li>
      </ul>

      <h3>Workflow: Batch Document Generation</h3>
      <p>Mit Cowork führen Analysten High-Volume-Reportgenerierung aus. Beispiel: Claude wird auf
      eine Client-CSV gepointet und generiert autonom fünf distinct, hochwertige
      <em>&bdquo;Q2 Portfolio Performance Reports&ldquo;</em> als PDFs. Durch Zugriff auf den
      Reference Folder stellt Claude sicher, dass jeder Report korrekte navy-blaue Headers und
      geometric sans-serif Fonts (z. B. Poppins oder Montserrat) trägt &mdash; client-ready.</p>

      <h3>Security Protocols &amp; The Virtual Machine</h3>
      <p>Sicherheit ist im Capital-Markets-Umfeld die oberste Priorität. Cowork läuft in einer
      <strong>secure Virtual Machine (VM)</strong> &mdash; es synct nicht über Geräte hinweg und
      speichert keine lokalen Dateien auf Anthropics Servern.</p>

      <div class="callout callout-warn">
        <div class="callout-title">Sicherheitsregeln &mdash; nicht verhandelbar</div>
        <ul style="margin: 8px 0 0 0;">
          <li><strong>PII Restriction:</strong> Niemals Claude Zugriff auf Ordner mit
          hochsensitiven PII (SSNs, Passwörter) gewähren.</li>
          <li><strong>Backups sind Pflicht:</strong> Vor agentischem Zugriff lokale Backups halten
          &mdash; Claude kann auf Anweisung destruktive Aktionen (Deletion) ausführen.</li>
          <li><strong>Human Verification:</strong> Approval-Prompts sind die primäre
          Verteidigungslinie. Niemals durch Prompts &bdquo;flicken&ldquo; &mdash; jede geplante
          Dateiänderung sorgfältig prüfen.</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        q: 'Wozu dient eine claude.md-Datei in einem Projektordner?',
        options: [
          'Sie speichert Passwörter im Klartext',
          'Sie diktiert projektspezifische Logik wie GTV-Definitionen oder SQL-Naming-Conventions',
          'Sie ist eine Dummy-Datei ohne Funktion',
          'Sie ersetzt den .git-Ordner'
        ],
        correct: 1,
        explanation: 'claude.md gibt projektspezifische Anweisungen — z. B. eigene Definitionen für GTV oder Coding-Conventions, die Claude für jede Operation in diesem Ordner verwendet.'
      },
      {
        q: 'Was ist beim Umgang mit Cowork und sensiblen PII zu beachten?',
        options: [
          'PII darf in einem speziellen "Privacy Mode" geteilt werden',
          'PII wird automatisch verschlüsselt durch Claude',
          'Niemals Claude Zugriff auf Ordner mit hochsensitiven PII (SSNs, Passwörter) gewähren',
          'PII darf nur an Wochenenden geteilt werden'
        ],
        correct: 2,
        explanation: 'Strikte Regel: Hochsensitive PII (Sozialversicherungsnummern, Passwörter etc.) gehören NIE in Ordner, auf die Claude Zugriff erhält.'
      },
      {
        q: 'In welcher Umgebung läuft Claude Cowork?',
        options: [
          'Direkt auf den Anthropic-Servern, die alle Files speichern',
          'In einer secure Virtual Machine (VM); kein Sync, keine Filespeicherung auf Anthropic-Servern',
          'In einer öffentlichen Cloud',
          'Direkt auf dem Hauptbetriebssystem ohne Isolation'
        ],
        correct: 1,
        explanation: 'Cowork operiert in einer abgesicherten VM. Es synct nicht über Geräte und speichert keine lokalen Dateien bei Anthropic.'
      },
      {
        q: 'Wie sollte ein Analyst mit Approval-Prompts in Cowork umgehen?',
        options: [
          'Schnell durchklicken, um Zeit zu sparen',
          'Nur jeden zweiten Prompt prüfen',
          'Jede geplante Dateiänderung sorgfältig prüfen — Approval-Prompts sind die primäre Verteidigungslinie',
          'Approvals deaktivieren'
        ],
        correct: 2,
        explanation: 'Human Verification ist die primäre Verteidigung. "Flicken durch Prompts" ist explizit verboten — jede Änderung muss bewusst geprüft werden.'
      }
    ]
  },
  {
    id: 4,
    number: '04',
    meta: 'Professional · Module 4',
    title: 'The Integrated Ecosystem — Connectors & Skills',
    desc: 'MCP, Skills Framework, Deep Research mit NotebookLM und die Plugin-Architektur. Claude als zentrale Operating Hub des modernen Investment Banks.',
    duration: '30 Min.',
    content: `
      <div class="module-doc-meta">Professional &middot; Modul 4</div>
      <h2 class="module-doc-title">The Integrated Ecosystem &mdash; Connectors &amp; Skills</h2>
      <p class="module-doc-lede">
        Das <strong>Model Context Protocol (MCP)</strong> verwandelt Claude in eine zentrale
        Operating Hub des modernen Investment Banks &mdash; durch Sync zwischen lokalen Daten und
        Cloud-Tools wie Google Drive, Notion und Gmail.
      </p>

      <h3>Das Skills Framework (skill.md) &amp; Deep Research</h3>
      <p>Skills sind wiederholbare Instruction Packages, die professionelle Prozeduren in
      wiederverwendbare Module &bdquo;hardenen&ldquo;.</p>

      <h4>Die Deep Research Pipeline</h4>
      <p>Analysten sollten <strong>NotebookLM</strong> nutzen, um eine Knowledge Base aus 64+
      Quellen zu synthetisieren (sektorspezifische Coverage, historische Transaktionsdaten).
      Diese synthetisierte Intelligenz wird in eine skill.md gefüttert &mdash; daraus entsteht ein
      <em>&bdquo;Sector Coverage Skill&ldquo;</em>, den Claude über jedes Projekt hinweg deployen kann.</p>

      <h4>Content Extraction Skill</h4>
      <p>Identifiziert automatisch Key Hooks und Executive Insights aus 15+ Stunden Financial Memos
      oder Accident Reports und übersetzt sie in Briefing Notes für die Senior Leadership.</p>

      <h3>MCP Connectors &amp; Plugins</h3>
      <p>Connectors überbrücken die Lücke zwischen statischen Files und der Cloud:</p>
      <ul>
        <li><strong>Google Drive / Notion Sync:</strong> Claude liest und summiert massive
        Cloud-Datenvolumen, identifiziert Cross-Cutting Market Themes &mdash; ohne manuelle Downloads.</li>
        <li><strong>Plugin Architecture:</strong>
          <ul>
            <li><strong>Data Plugin:</strong> Optimiert für SQL/BigQuery-Exploration und das Mappen
            von Data-Warehouse-Schemata.</li>
            <li><strong>Marketing Plugin:</strong> SEO Audits und Brand Voice Maintenance für
            client-facing digitale Assets.</li>
          </ul>
        </li>
      </ul>

      <div class="callout">
        <div class="callout-title">Strategischer Bezug</div>
        <p>Die Integration dieser externen Ökosysteme bereitet den Profi auf die höchste Stufe
        technischer Mastery vor: Claude Code (Modul 5).</p>
      </div>
    `,
    quiz: [
      {
        q: 'Wofür steht MCP, und was leistet es?',
        options: [
          'Master Control Protocol — verwaltet Server',
          'Model Context Protocol — verwandelt Claude in eine zentrale Operating Hub durch Sync von lokalen und cloud-basierten Tools',
          'Multi Cloud Platform — eine Cloud-Anbieter-Übersicht',
          'Module Configuration Protocol'
        ],
        correct: 1,
        explanation: 'Model Context Protocol (MCP) ist das Framework, das Claude an Cloud-Tools wie Google Drive, Notion und Gmail anbindet — daher der Name "Operating Hub".'
      },
      {
        q: 'Welches Tool wird empfohlen, um aus 64+ Quellen eine Knowledge Base für einen "Sector Coverage Skill" zu synthetisieren?',
        options: [
          'Excel',
          'NotebookLM',
          'PowerPoint',
          'Slack'
        ],
        correct: 1,
        explanation: 'NotebookLM ist explizit als das Tool für die Deep Research Pipeline genannt — es konsolidiert die Quellen, deren Output in skill.md überführt wird.'
      },
      {
        q: 'Was ist die Funktion des Data Plugins?',
        options: [
          'SEO Audits durchführen',
          'Brand Voice für Marketing pflegen',
          'SQL/BigQuery-Exploration und Mapping von Data-Warehouse-Schemata',
          'Social-Media-Posts erstellen'
        ],
        correct: 2,
        explanation: 'Das Data Plugin ist auf SQL/BigQuery-Workflows und das Mappen von Data-Warehouse-Schemata optimiert. SEO/Brand Voice gehören zum Marketing Plugin.'
      },
      {
        q: 'Wie sind "Skills" laut dem Curriculum am besten beschrieben?',
        options: [
          'Einmalige One-Off-Prompts',
          'Wiederholbare Instruction Packages, die professionelle Prozeduren als wiederverwendbare Module hardenen',
          'Lange E-Mail-Templates',
          'Externe APIs'
        ],
        correct: 1,
        explanation: 'Skills sind das Format, mit dem Standardprozeduren als reproduzierbare Module festgehalten werden — projektübergreifend einsetzbar.'
      }
    ]
  },
  {
    id: 5,
    number: '05',
    meta: 'Expert · Module 5',
    title: 'Claude Code — The Terminal-Based Power User',
    desc: '"PhD in Computer Science in your pocket". Bis zu 15 Stunden autonomer Operation, /prime, /create-plan, IDE-Integration und das "Chunking"-Prinzip.',
    duration: '40 Min.',
    content: `
      <div class="module-doc-meta">Expert &middot; Modul 5</div>
      <h2 class="module-doc-title">Claude Code &mdash; The Terminal-Based Power User</h2>
      <p class="module-doc-lede">
        Claude Code ist ein spezialisierter Agent f&uuml;r autonome Execution &mdash;
        beschrieben als <em>&bdquo;ein PhD in Computer Science in your pocket&ldquo;</em>,
        f&auml;hig zu bis zu <strong>15 Stunden autonomer Operation</strong>.
      </p>

      <h3>Installation &amp; Command Workflow</h3>
      <p>Claude Code operiert via Terminal und integriert sich mit professionellen IDEs wie
      <strong>VS Code</strong>. Der Workflow zentriert sich um drei kritische Commands:</p>
      <ul>
        <li><strong>/prime</strong> &mdash; Zwingt das Modell, alle Context Files zu lesen,
        und initialisiert die Session mit der spezifischen Rolle und den Business Objectives des Users.</li>
        <li><strong>/create-plan</strong> &mdash; Instruiert Claude, das Projekt zu architektieren
        (Gaps identifizieren, Technical Steps outlinen) <em>bevor</em> die Execution beginnt.</li>
        <li><strong>dangerously skip permissions</strong> &mdash; (Pro Tip) In High-Velocity-Umgebungen
        mit etabliertem Trusted Workflow erlaubt dieser Command Claude, repetitive Dateioperationen
        ohne manuelle Approval-Prompts auszuf&uuml;hren. <strong>Use with extreme caution.</strong></li>
      </ul>

      <h3>IDE-Integration &amp; Debugging</h3>
      <p>Experts nutzen Claude Code, um vollst&auml;ndige Financial-Modelling-Apps oder komplexe
      Datenpipelines autonom zu bauen. Bei Large-Scale-Automatisierungen ist der Schl&uuml;ssel das
      <strong>&bdquo;Chunking&ldquo;</strong>: Massive Tasks in handhabbare Sub-Tasks splitten,
      um Token Limits oder Agent Fatigue zu vermeiden.</p>

      <div class="callout callout-warn">
        <div class="callout-title">Vorsicht bei dangerously skip permissions</div>
        <p>Dieser Command soll ausschlie&szlig;lich in <em>vertrauten</em>, etablierten Workflows
        eingesetzt werden &mdash; nie auf neuen Tasks oder bei Unsicherheit. Er deaktiviert die
        prim&auml;re Verteidigungslinie (Human Approval).</p>
      </div>
    `,
    quiz: [
      {
        q: 'Wie wird Claude Code im Curriculum metaphorisch beschrieben?',
        options: [
          '"Ein Stack Overflow im Pocket"',
          '"Ein PhD in Computer Science in your pocket"',
          '"Ein Junior Developer im Slack"',
          '"Eine App im App Store"'
        ],
        correct: 1,
        explanation: 'Die exakte Metapher aus dem Curriculum ist "PhD in Computer Science in your pocket" — Claude Code agiert als Senior-Level-Engineer.'
      },
      {
        q: 'Wie lange kann Claude Code maximal autonom operieren?',
        options: [
          'Bis zu 1 Stunde',
          'Bis zu 5 Stunden',
          'Bis zu 15 Stunden',
          'Unbegrenzt'
        ],
        correct: 2,
        explanation: 'Claude Code ist für bis zu 15 Stunden autonomer Operation ausgelegt — das macht es zum Spezialwerkzeug für Long-Running-Tasks.'
      },
      {
        q: 'Was tut der /prime-Command?',
        options: [
          'Er löscht Cache und Verlauf',
          'Er zwingt das Modell, alle Context Files zu lesen, und initialisiert die Session mit Rolle und Business Objectives',
          'Er installiert Updates',
          'Er beendet die Session'
        ],
        correct: 1,
        explanation: '/prime erzwingt das Einlesen aller Kontextdateien — Claude startet damit informiert und auf Rolle plus Geschäftsziele kalibriert.'
      },
      {
        q: 'Was ist "Chunking" im Kontext großer Automatisierungen?',
        options: [
          'Code in einzelne Files aufteilen',
          'Massive Tasks in handhabbare Sub-Tasks splitten, um Token Limits und Agent Fatigue zu vermeiden',
          'Dateien zippen vor dem Upload',
          'Einen Task auf mehrere Personen verteilen'
        ],
        correct: 1,
        explanation: 'Chunking adressiert zwei Risiken: Token-Limits und Agent-Fatigue. Das Aufteilen in Sub-Tasks erhält Output-Qualität bei langen Workflows.'
      },
      {
        q: 'Wann sollte "dangerously skip permissions" eingesetzt werden?',
        options: [
          'Immer, um Zeit zu sparen',
          'Bei jedem neuen Task',
          'Ausschließlich in vertrauten, etablierten Workflows mit extremer Vorsicht',
          'Niemals'
        ],
        correct: 2,
        explanation: 'Der Command ist ausschließlich für vertraute Trusted Workflows gedacht. Er deaktiviert die Human-Approval-Verteidigung — daher Use with extreme caution.'
      }
    ]
  },
  {
    id: 6,
    number: '06',
    meta: 'Masterclass · Module 6',
    title: 'Advanced Prompt Engineering for Finance',
    desc: 'Prompt Engineering als empirische Wissenschaft. XML-Tags, Order of Operations, Few-Shot, Chain-of-Thought und die Pre-fill-Technik.',
    duration: '35 Min.',
    content: `
      <div class="module-doc-meta">Masterclass &middot; Modul 6</div>
      <h2 class="module-doc-title">Advanced Prompt Engineering for Finance</h2>
      <p class="module-doc-lede">
        Prompt Engineering ist eine <em>empirische, iterative Wissenschaft</em>. In Finance m&uuml;ssen
        Prompts auf maximale Faktenakkuratheit getuned sein &mdash; um Auditing und Due Diligence
        zu unterst&uuml;tzen.
      </p>

      <h3>Structural Prompting &amp; Order of Operations</h3>
      <p>Zur Organisation komplexer Inputs nutzen Profis XML Tags wie <code>&lt;context&gt;</code>,
      <code>&lt;instructions&gt;</code>, <code>&lt;examples&gt;</code>. Crucially: Claude performt
      besser, wenn er einer spezifischen <strong>Order of Operations</strong> folgt:</p>
      <ul>
        <li><strong>Analyze the Form before the Sketch:</strong> In visuellen oder Multi-Part-Audits
        immer Claude instruieren, strukturierte Daten (die <em>Form</em>) <em>vor</em> visuellen oder
        unstrukturierten Daten (dem <em>Sketch</em>) zu analysieren. So hat das Modell den korrekten
        Kontext, bevor es ein Urteil f&auml;llt.</li>
      </ul>

      <h3>Few-Shot &amp; Chain-of-Thought</h3>
      <p>Output-Quality wird exponentiell durch <strong>Few-Shot Prompting</strong> verbessert &mdash;
      3&ndash;5 Beispiele eines &bdquo;Perfect Pitchbook Summary&ldquo; bereitstellen. Das zwingt das Modell,
      spezifische Reasoning- und Formatting-Stile zu matchen.</p>
      <p><strong>Chain-of-Thought</strong>-Techniken ermutigen das Modell weiter, &bdquo;step-by-step zu denken&ldquo;
      durch eine Bewertung oder einen Accident Report &mdash; bevor es ein finales Verdict liefert.</p>

      <h3>Die &bdquo;Pre-fill&ldquo;-Technik</h3>
      <p>Um konversationale Pre-Ambles zu umgehen und Daten direkt in Banking-Software zu f&uuml;ttern,
      nutzt man die <strong>Pre-fill</strong>-Technik. Indem man eine Antwort mit einem spezifischen
      Zeichen startet (z. B. <code>{</code>), zwingt man Claude zu valider JSON oder einer
      Markdown-Tabelle &mdash; ready for immediate integration.</p>

      <div class="callout">
        <div class="callout-title">Conclusion</div>
        <p>Der Weg zur Claude-Mastery beginnt mit einer einzigen, bewussten Automatisierung. Heute
        personalisierte Personas, morgen agentische Workflows &mdash; so steigern Investment Banking
        Profis ihren Impact und navigieren globale Kapitalm&auml;rkte mit unvergleichlicher Geschwindigkeit.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Welches Prinzip beschreibt "Analyze the Form before the Sketch"?',
        options: [
          'Erst kreativ skizzieren, dann strukturieren',
          'In Multi-Part-Audits immer strukturierte Daten (Form) vor visuellen/unstrukturierten Daten (Sketch) analysieren',
          'Formulare digitalisieren, bevor man zeichnet',
          'Skizzen sind im Banking generell verboten'
        ],
        correct: 1,
        explanation: 'Order of Operations: Strukturierte Daten zuerst — sie liefern den Kontext, in dem unstrukturierte Daten korrekt interpretiert werden können.'
      },
      {
        q: 'Wie viele Beispiele werden für effektives Few-Shot Prompting empfohlen?',
        options: [
          '1 Beispiel reicht immer',
          '3–5 Beispiele',
          '20–30 Beispiele',
          'So viele wie möglich, mindestens 100'
        ],
        correct: 1,
        explanation: '3–5 Beispiele eines "Perfect Pitchbook Summary" werden im Curriculum als Sweet Spot genannt — genug, um Stil zu prägen, ohne das Modell zu überladen.'
      },
      {
        q: 'Was bewirkt die "Pre-fill"-Technik?',
        options: [
          'Sie speichert Prompts vorab',
          'Sie zwingt Claude zu einem bestimmten Output-Format (z.B. valides JSON), indem die Antwort mit einem spezifischen Zeichen wie { gestartet wird',
          'Sie sendet Prompts automatisch',
          'Sie übersetzt Prompts in andere Sprachen'
        ],
        correct: 1,
        explanation: 'Pre-fill umgeht konversationale Vorworte: Wer mit "{" startet, bekommt valides JSON; wer mit "|" startet, eine Markdown-Tabelle. Output direkt integrierbar.'
      },
      {
        q: 'Welche XML-Tags werden für Structural Prompting verwendet?',
        options: [
          '<a>, <b>, <p>',
          '<header>, <footer>, <main>',
          '<context>, <instructions>, <examples>',
          '<div>, <span>, <button>'
        ],
        correct: 2,
        explanation: '<context>, <instructions> und <examples> sind die zentralen Tags, um komplexe Inputs strukturiert zu organisieren.'
      },
      {
        q: 'Wie wird Prompt Engineering im Curriculum charakterisiert?',
        options: [
          'Als reine Kunst, die nicht lernbar ist',
          'Als empirische, iterative Wissenschaft — besonders kritisch in Finance, wo Faktenakkuratheit zählt',
          'Als optionales Soft Skill',
          'Als reine Programmieraufgabe'
        ],
        correct: 1,
        explanation: 'Empirisch und iterativ — also: Hypothesen testen, Ergebnisse beobachten, Prompts anpassen. In Finance entscheidet sich daran die Audit-Tauglichkeit.'
      }
    ]
  }
];

// FINAL EXAM — Mix aus allen Modulen
const FINAL_EXAM = [
  {
    q: 'Welcher Interaktionsmodus eignet sich am besten, um Pitchbook-Daten direkt aus lokalen Dateien zu generieren?',
    options: ['Chat', 'Cowork', 'Code', 'Mobile App'],
    correct: 1,
    explanation: 'Cowork bedient lokale Dateien direkt — der natürliche Modus für Pitchbook-Vorbereitung.'
  },
  {
    q: 'Welches Modell ist für Tiefenanalyse mit 70+ Quellen ausgelegt?',
    options: ['Haiku', 'Sonnet', 'Opus', 'Mini'],
    correct: 2,
    explanation: 'Opus ist das Premier-Forschungsmodell für Deep-Dive-Analysen.'
  },
  {
    q: 'Welche Cleanup-Aufgabe gehört NICHT zur empfohlenen Spreadsheet-Checkliste?',
    options: [
      'Standardize Formats',
      'Anomaly Flagging',
      'Predictive Stock Trading',
      'Intelligent Reconciliation'
    ],
    correct: 2,
    explanation: 'Predictive Trading ist nicht Teil der Checkliste — Standardisierung, Reconciliation, Reasoning-Filling und Anomaly Flagging sind die vier Punkte.'
  },
  {
    q: 'Was beschreibt die claude.md Datei am besten?',
    options: [
      'Eine Konfigurationsdatei für die globale Claude-Installation',
      'Eine Markdown-Datei im Projektordner mit projektspezifischen Anweisungen (z.B. GTV-Definition)',
      'Eine Backup-Datei',
      'Eine Logfile'
    ],
    correct: 1,
    explanation: 'claude.md liegt im Projektordner und liefert projektspezifische Logik — Definitionen, Naming Conventions etc.'
  },
  {
    q: 'Welche der folgenden Aussagen zu Cowork ist FALSCH?',
    options: [
      'Cowork läuft in einer secure VM',
      'Claude kann auf Anweisung destruktive Aktionen ausführen',
      'Cowork synct alle Files automatisch auf Anthropic-Server',
      'PII-Ordner sollten Claude nie zugänglich gemacht werden'
    ],
    correct: 2,
    explanation: 'FALSCH: Cowork synct NICHT auf Anthropic-Server. Genau das ist eines seiner zentralen Sicherheitsmerkmale.'
  },
  {
    q: 'Welcher Slash-Command zwingt Claude Code dazu, alle Kontextdateien zu lesen, bevor die Arbeit beginnt?',
    options: ['/start', '/prime', '/init', '/load'],
    correct: 1,
    explanation: '/prime ist der Initialisierungs-Command, der Rollen- und Geschäftskontext lädt.'
  },
  {
    q: 'Wie viele Beispiele werden für effektives Few-Shot Prompting empfohlen?',
    options: ['1', '3–5', '10–15', '50+'],
    correct: 1,
    explanation: '3–5 Beispiele sind der dokumentierte Sweet Spot.'
  },
  {
    q: 'Was bewirkt die "Pre-fill"-Technik?',
    options: [
      'Sie sendet Prompts vor dem Mitarbeiter ab',
      'Sie zwingt Claude in ein bestimmtes Output-Format (z. B. JSON), indem die Antwort mit einem spezifischen Zeichen begonnen wird',
      'Sie speichert Prompts in der Cloud',
      'Sie startet eine neue Session'
    ],
    correct: 1,
    explanation: 'Pre-fill: Mit "{" beginnen → valides JSON. Mit "|" beginnen → Markdown-Tabelle.'
  },
  {
    q: 'Welche der folgenden Aussagen zu MCP ist KORREKT?',
    options: [
      'MCP steht für "Master Cloud Processor"',
      'MCP ist nur für Coding-Tasks geeignet',
      'MCP (Model Context Protocol) verbindet Claude mit Cloud-Tools wie Google Drive, Notion und Gmail',
      'MCP ist ein abgekündigtes Protokoll'
    ],
    correct: 2,
    explanation: 'MCP = Model Context Protocol; es macht Claude zur Operating Hub durch Anbindung an Cloud-Tools.'
  },
  {
    q: 'Wann sollte "dangerously skip permissions" in Claude Code verwendet werden?',
    options: [
      'Immer, für maximale Geschwindigkeit',
      'Bei jedem neuen, unbekannten Task',
      'Nur in vertrauten, etablierten Workflows mit extremer Vorsicht',
      'Niemals'
    ],
    correct: 2,
    explanation: 'Ausschließlich in trusted Workflows. Der Command deaktiviert die primäre Verteidigungslinie (Human Approval).'
  },
  {
    q: 'Was zeichnet "Reasoning-Based Filling" aus?',
    options: [
      'Lücken werden mit Nullen gefüllt',
      'Lücken werden zufällig befüllt',
      'Lücken werden anhand interner Logik aus vorhandenen Daten geschlossen',
      'Lücken bleiben offen'
    ],
    correct: 2,
    explanation: 'Reasoning-Based Filling nutzt das Modell-Reasoning auf den vorhandenen Daten, um konsistente Werte abzuleiten.'
  },
  {
    q: 'Welches Tool wird für die Deep Research Pipeline (Synthese aus 64+ Quellen) empfohlen?',
    options: ['Excel', 'NotebookLM', 'Slack', 'Microsoft Word'],
    correct: 1,
    explanation: 'NotebookLM konsolidiert die Quellen — der Output fließt anschließend in die skill.md.'
  },
  {
    q: 'Welche Reihenfolge gilt nach "Analyze the Form before the Sketch"?',
    options: [
      'Erst Sketch, dann Form',
      'Erst Form (strukturierte Daten), dann Sketch (visuelle / unstrukturierte Daten)',
      'Beide gleichzeitig',
      'Beides ist egal'
    ],
    correct: 1,
    explanation: 'Strukturierte Daten zuerst — sie kalibrieren den Kontext für die Interpretation des Sketchs.'
  },
  {
    q: 'Was bedeutet "Chunking" im Claude-Code-Kontext?',
    options: [
      'Files komprimieren',
      'Massive Tasks in kleinere Sub-Tasks splitten, um Token Limits und Agent Fatigue zu vermeiden',
      'Code in mehrere Sprachen übersetzen',
      'Logs sammeln'
    ],
    correct: 1,
    explanation: 'Chunking schützt vor zwei Risiken bei Long-Running-Workflows: Token Limits und Agent Fatigue.'
  },
  {
    q: 'Was ist die zentrale Aussage des Curriculums über den Weg zur Claude-Mastery?',
    options: [
      'Man muss alle Module gleichzeitig durcharbeiten',
      'Sie beginnt mit einer einzigen bewussten Automatisierung — von Personas heute zu agentischen Workflows morgen',
      'Mastery erfordert mindestens 5 Jahre Erfahrung',
      'Es gibt keine Mastery — KI-Tools ändern sich zu schnell'
    ],
    correct: 1,
    explanation: 'Conclusion des Curriculums: Eine einzige, bewusste Automatisierung als Startpunkt — und dann iterativ skalieren.'
  }
];

// Pass-Threshold (in %)
const PASS_THRESHOLD = 70;
