/* ============================================
   IEG Claude Academy — Content
   Alle Module + Quizzes
   ============================================ */

const CURRICULUM = [
  {
    id: 0,
    number: '00',
    meta: 'Strategic Orientation · Foundational',
    title: 'The AI-Powered Investment Bank & Prompt Engineering 101',
    desc: 'Die drei Interaktionsmodi (Chat, Cowork, Code), agentische KI als Wettbewerbsvorteil und die Grundlagen des Prompt Engineerings nach Anthropic Best Practices.',
    duration: '25 Min.',
    // === ZUSATZ-INHALTE ===
    videos: [
      { url: 'https://www.youtube.com/embed/ysPbXH0LpIE', title: 'Prompt Engineering 101 — Anthropic Best Practices', caption: 'Video 0.1 · Prompt Engineering 101 nach Anthropic Best Practices' },
    ],
    images: [],
    longContent: ``,
    content: `
      <h3>Warum agentische KI jetzt?</h3>
      <p>Die Finanzdienstleistungsbranche durchläuft einen tektonischen Wandel &mdash; weg von statischen
      Chatbots, hin zu agentischen Workflows. Für M&amp;A-Profis ist Claude-Mastery keine Option
      mehr, sondern <strong>Wettbewerbsnotwendigkeit</strong>.</p>
      <p>In einer Welt, in der <strong>Deal-Velocity</strong> und <strong>Präzision</strong> die
      primären Währungen sind, wirkt agentische KI als Kraftmultiplikator. Claude agiert als
      autonomer Partner: Er navigiert komplexe Dateisysteme, führt mehrstufige Datensynthesen aus
      und automatisiert reibungsstarke Origination- und Underwriting-Aufgaben.</p>

      <h3>Die drei Kerninteraktionsmodi</h3>
      <table>
        <thead>
          <tr><th>Modus</th><th>Definition</th><th>Anwendungsfall im Investment Banking</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Chat</strong></td>
            <td>Standard-Konversationsoberfläche für direkte Anfragen.</td>
            <td>Marktnachrichten zusammenfassen, schnelle Formelchecks, Outreach-Drafts.</td>
          </tr>
          <tr>
            <td><strong>Cowork</strong></td>
            <td>Desktop-Umgebung, in der Claude lokale Dateien liest und bearbeitet.</td>
            <td>Pitchbook-Datenvorbereitung, Bereinigen von Transaction Logs, Batch-Reports.</td>
          </tr>
          <tr>
            <td><strong>Code</strong></td>
            <td>Terminalbasierter Agent für autonome Entwicklung &amp; Engineering.</td>
            <td>Bespoke LBO-Modelle, komplexe Datenpipelines, web-basierte Deal Rooms.</td>
          </tr>
        </tbody>
      </table>

      <h3>Prompt Engineering 101 &mdash; Anthropic Best Practices</h3>

      <h4>1. Prompt Engineering als iterative Wissenschaft</h4>
      <p>Prompt Engineering ist ein <strong>empirischer, iterativer Prozess</strong>. Man beginnt mit einem
      einfachen Prompt, analysiert die Fehler der KI und baut den Prompt Schritt für Schritt auf,
      um die Genauigkeit zu erhöhen. Es hilft, <em>Testfälle</em> zu erstellen, um sicherzustellen,
      dass die KI in der gewünschten Domäne bleibt (z.&thinsp;B. Autounfälle statt Skiunfälle).</p>

      <h4>2. Die ideale Prompt-Struktur</h4>
      <p>Anthropic empfiehlt einen spezifischen Aufbau für komplexe Aufgaben, um sie beim ersten
      Versuch (<em>&bdquo;one-shot&ldquo;</em>) korrekt zu lösen:</p>
      <ol>
        <li><strong>Aufgabenbeschreibung:</strong> Festlegen der Rolle und des Ziels
        (z.&thinsp;B. &bdquo;Du bist ein Schadensprüfer&ldquo;).</li>
        <li><strong>Kontext &amp; Tonfall:</strong> Anweisungen zum Stil
        (z.&thinsp;B. &bdquo;bleib sachlich&ldquo;, &bdquo;antworte nur, wenn du sicher bist&ldquo;).</li>
        <li><strong>Hintergrunddaten:</strong> Statische Informationen oder Dokumente
        (idealerweise im System Prompt).</li>
        <li><strong>Detaillierte Anweisungen:</strong> Eine Schritt-für-Schritt-Liste,
        wie die KI die Aufgabe angehen soll.</li>
        <li><strong>Beispiele (Few-Shot):</strong> Musterlösungen für schwierige Fälle.</li>
        <li><strong>Wichtige Erinnerungen:</strong> Wiederholung der kritischsten Punkte
        am Ende des Prompts.</li>
      </ol>

      <h4>3. Strukturierung durch XML-Tags</h4>
      <p>Claude liebt Struktur. Verwende <strong>XML-Tags</strong>
      (z.&thinsp;B. <code>&lt;form&gt;...&lt;/form&gt;</code> oder
      <code>&lt;anweisungen&gt;...&lt;/anweisungen&gt;</code>), um verschiedene Arten von
      Informationen voneinander abzugrenzen. Dies hilft der KI, sich später im Prompt gezielt
      auf bestimmte Abschnitte zu beziehen.</p>

      <div class="callout">
        <div class="callout-title">Warum XML-Tags?</div>
        <p>Tags geben dem Prompt eine klare Hierarchie. Statt alles in Fließtext zu packen,
        trennt man Kontext, Anweisungen und Beispiele &mdash; Claude kann dann gezielt auf
        einzelne Abschnitte zugreifen und interpretiert den Prompt präziser.</p>
      </div>

      <h4>4. Die Reihenfolge der Analyse</h4>
      <p>Die Reihenfolge, in der Claude Informationen analysiert, ist <strong>entscheidend</strong>.
      Weise Claude an, zuerst die klaren Fakten (z.&thinsp;B. ein Formular) zu prüfen, bevor er
      interpretative Daten (z.&thinsp;B. eine Skizze) analysiert &mdash; genau wie ein Mensch
      es tun würde. Dieses Prinzip heißt <em>&bdquo;Analyze the Form before the Sketch&ldquo;</em>.</p>

      <h4>5. Kontrolle des Outputs</h4>
      <ul>
        <li><strong>Formatvorgaben:</strong> Nutze XML-Tags am Ende (z.&thinsp;B.
        <code>&lt;urteil&gt;...&lt;/urteil&gt;</code>), um nur das Endergebnis zu extrahieren
        &mdash; wichtig für technische Anwendungen und Daten-Pipelines.</li>
        <li><strong>Antworten &bdquo;vorgeben&ldquo; (Pre-filling):</strong> Du kannst Claude
        den Anfang seiner Antwort in den Mund legen (z.&thinsp;B. indem du die Antwort mit
        <code>{</code> für JSON beginnen lässt), um das Format zu erzwingen.</li>
      </ul>

      <h4>6. Prompt Caching &amp; System Prompts</h4>
      <p>Informationen, die sich nie ändern (wie die Struktur eines Standardformulars),
      gehören in den <strong>System Prompt</strong>. Durch <em>Caching</em> spart man Zeit und
      Ressourcen, da Claude das Dokument nicht bei jeder Anfrage neu &bdquo;lernen&ldquo; muss.</p>

      <div class="callout callout-warn">
        <div class="callout-title">Kernidee</div>
        <p>Der Übergang von High-Level-Strategie zu Execution erfordert eine präzise
        Grundkonfiguration &mdash; damit Modell-Outputs den rigorosen Audit-Standards der
        Bankenbranche entsprechen. Prompt Engineering ist dabei die Schlüsselkompetenz.</p>
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
        explanation: 'Chat (Konversation), Cowork (lokale Dateien) und Code (Terminal-Agent) sind die drei zentralen Interaktionsmodi.'
      },
      {
        q: 'Wie wird Prompt Engineering laut Anthropic am besten beschrieben?',
        options: [
          'Als einmaliger Prozess — ein guter Prompt bleibt für immer',
          'Als empirischer, iterativer Prozess: einfach beginnen, Fehler analysieren, Schritt für Schritt verbessern',
          'Als reine Programmieraufgabe',
          'Als unwichtige Nebensache'
        ],
        correct: 1,
        explanation: 'Prompt Engineering ist iterativ: Man beginnt einfach, analysiert die Fehler und verfeinert den Prompt schrittweise.'
      },
      {
        q: 'In welcher Reihenfolge sollte Claude laut dem Prinzip "Analyze the Form before the Sketch" Informationen analysieren?',
        options: [
          'Erst die Skizze, dann das Formular',
          'Beide gleichzeitig',
          'Erst die klaren Fakten (z.B. Formular), dann interpretative Daten (z.B. Skizze)',
          'Die Reihenfolge spielt keine Rolle'
        ],
        correct: 2,
        explanation: 'Klare Fakten zuerst, dann interpretative Daten — genau wie ein Mensch es tun würde. So hat Claude den korrekten Kontext für seine Interpretation.'
      },
      {
        q: 'Wozu dienen XML-Tags (z.B. <form>, <anweisungen>) in einem Prompt?',
        options: [
          'Sie sind reine Dekoration ohne Funktion',
          'Sie strukturieren den Prompt, damit Claude verschiedene Informationsarten unterscheiden und gezielt darauf zugreifen kann',
          'Sie aktivieren den Programmiermodus',
          'Sie verschlüsseln den Prompt'
        ],
        correct: 1,
        explanation: 'XML-Tags geben dem Prompt eine klare Hierarchie. Claude kann dann gezielt auf einzelne Abschnitte zugreifen und den Prompt präziser interpretieren.'
      },
      {
        q: 'Was bewirkt die "Pre-filling"-Technik beim Prompt Engineering?',
        options: [
          'Sie speichert Prompts in der Cloud',
          'Man gibt Claude den Anfang seiner Antwort vor (z.B. mit { für JSON), um das Ausgabeformat zu erzwingen',
          'Sie übersetzt Prompts automatisch',
          'Sie löscht den Chat-Verlauf'
        ],
        correct: 1,
        explanation: 'Pre-filling erzwingt ein bestimmtes Output-Format: Beginnt man die Antwort mit { bekommt man valides JSON, mit | eine Markdown-Tabelle.'
      },
      {
        q: 'Welche der folgenden Elemente gehören zur idealen Prompt-Struktur nach Anthropic?',
        options: [
          'Nur eine kurze Frage ohne Kontext',
          'Aufgabenbeschreibung, Kontext, Hintergrunddaten, Anweisungen, Beispiele (Few-Shot) und wichtige Erinnerungen',
          'Ausschließlich Code-Beispiele',
          'Ein einzelnes Schlüsselwort'
        ],
        correct: 1,
        explanation: 'Die ideale Struktur umfasst sechs Elemente: Aufgabenbeschreibung, Kontext & Tonfall, Hintergrunddaten, detaillierte Anweisungen, Beispiele (Few-Shot) und wichtige Erinnerungen am Ende.'
      },
      {
        q: 'Warum gehören statische Informationen (z.B. ein Standardformular) in den System Prompt?',
        options: [
          'Weil sie dort schöner aussehen',
          'Weil Claude sie durch Caching nicht bei jeder Anfrage neu lernen muss — das spart Zeit und Ressourcen',
          'Weil sie im normalen Prompt nicht funktionieren',
          'Weil der System Prompt kürzer ist'
        ],
        correct: 1,
        explanation: 'Prompt Caching: Statische Informationen im System Prompt werden gecacht, sodass Claude sie nicht bei jeder Anfrage neu verarbeiten muss.'
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
    // === ZUSATZ-INHALTE ===
    videos: [
      { url: 'https://www.youtube.com/embed/51vysjHcJ5A', title: 'Claude kompletter Grundkurs (2026): BEGINNER zu PROFI in 30 min!', caption: 'Video 1.1 · Claude Grundkurs — von Beginner zu Profi (30:42)' },
    ],
    images: [],
    longContent: ``,
    content: `
      <h3>1. Grundlagen und Chat-Organisation</h3>
      <p>Claude funktioniert ähnlich wie ChatGPT oder Gemini über eine zentrale Textbox
      für Prompts (Anfragen). Entscheidend für gute Ergebnisse ist die <strong>Chat-Disziplin</strong>:</p>

      <div class="callout">
        <div class="callout-title">Goldene Regel</div>
        <p>Erstelle für <strong>jedes neue Thema</strong> einen neuen Chat. Das Vermischen von Themen
        in einem Chat verwirrt die KI und verschlechtert die Ergebnisqualität erheblich.</p>
      </div>

      <h3>2. Die Modellfamilie</h3>
      <p>Claude bietet drei spezialisierte Modelle für unterschiedliche Aufgaben:</p>

      <table>
        <thead>
          <tr><th>Modell</th><th>Stärke</th><th>Typischer Einsatz</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Haiku</strong></td>
            <td>Das schnellste Modell</td>
            <td>Einfache Formatierungen, schnelle Antworten. Weniger tiefgründig.</td>
          </tr>
          <tr>
            <td><strong>Sonnet</strong></td>
            <td>Der Allrounder</td>
            <td>Tägliche Arbeit, Standard in der Gratisversion. Gute Balance aus Geschwindigkeit und Qualität.</td>
          </tr>
          <tr>
            <td><strong>Opus</strong></td>
            <td>Das leistungsstärkste Modell</td>
            <td>Komplexe Recherchen, tiefgehende Analysen. Langsamer, kann aber Quellen und Studien integrieren. Verfügbar in der Pro-Version.</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Zentrale Funktionen</h3>

      <h4>Websuche</h4>
      <p>Kann über das <strong>Plus-Symbol</strong> aktiviert werden, um aktuelle Informationen
      (z.&thinsp;B. DAX-Daten, Breaking News) aus dem Internet zu ziehen. Besonders nützlich für
      Marktrecherchen und aktuelle Unternehmensdaten.</p>

      <h4>Dateiupload</h4>
      <p>Claude verarbeitet <strong>PDFs, Excel-Tabellen und Word-Dokumente</strong>. Für gründliche
      Analysen empfiehlt sich der <em>erweiterte Nachdenkenmodus</em> (Stoppuhr-Symbol) &mdash;
      damit liest die KI die Datei sorgfältiger ein und liefert bessere Ergebnisse.</p>

      <h4>Technik-Berater</h4>
      <p>Claude kann technische Probleme (z.&thinsp;B. langsamer PC) lösen, indem man allgemeine Anfragen
      mit <strong>Screenshots der Benutzeroberfläche</strong> kombiniert. Die KI erkennt UI-Elemente
      und gibt konkrete Handlungsanweisungen.</p>

      <h3>4. Personalisierung</h3>
      <p>Claude lässt sich auf drei Ebenen an die eigene Arbeitsweise anpassen:</p>
      <ul>
        <li><strong>Präferenzen:</strong> Globale Einstellungen (z.&thinsp;B. &bdquo;Antworte immer in einem
        Satz&ldquo;), die für <em>jeden neuen Chat</em> automatisch übernommen werden.</li>
        <li><strong>Stile:</strong> Vordefinierte Schreibstile (z.&thinsp;B. formell) oder eigene Stile,
        die durch das Hochladen von <strong>Textproben</strong> erstellt werden können &mdash; Claude
        adaptiert dann Ton, Struktur und Wortwahl.</li>
        <li><strong>Erinnerungen (Memory):</strong> Gezielte Anweisungen für die Zukunft
        (z.&thinsp;B. &bdquo;Schlage bei Reisen nur Bahnverbindungen vor&ldquo;), die Claude im
        &bdquo;Gedächtnis&ldquo; speichert und in zukünftigen Chats berücksichtigt.</li>
      </ul>

      <h3>5. Produktivität und fortgeschrittene Tools</h3>

      <h4>Projekte</h4>
      <p>Ein geschlossener Bereich für Chats, in dem <strong>Anweisungen und Dateien</strong>
      (z.&thinsp;B. für einen LinkedIn-Post-Generator) für alle Chats innerhalb des Projekts
      hinterlegt sind. Ideal für wiederkehrende Workflows.</p>

      <h4>Programmierung</h4>
      <p>Claude kann <strong>interaktive Dashboards</strong> oder komplette HTML-Websites erstellen
      &mdash; inklusive Schritt-für-Schritt-Anleitungen zur Veröffentlichung. Kein
      Programmier-Vorwissen nötig.</p>

      <h4>Claude in Excel</h4>
      <p>Eine <strong>Pro-Funktion</strong>, die direkt in Excel Tabellen füllt, Charts erstellt
      und Formelfehler (wie Zirkelbezüge) korrigiert &mdash; per natürlichsprachlicher Anweisung.</p>

      <h3>6. Datenschutz und Sicherheit</h3>

      <div class="callout callout-warn">
        <div class="callout-title">Pflicht bei IEG</div>
        <p><strong>Training deaktivieren:</strong> In den Einstellungen unter &bdquo;Datenschutz&ldquo;
        muss die Option &bdquo;hilft dabei Claude zu verbessern&ldquo; <strong>deaktiviert</strong>
        werden, damit eigene Daten nicht zum Training der KI genutzt werden.</p>
      </div>

      <p><strong>Inkognitomodus</strong> (Geist-Symbol): Chats werden hier nicht dauerhaft in der
      Seitenleiste gespeichert &mdash; ideal für private oder einmalige Anfragen. In diesem Modus
      werden keine Daten für zukünftige Sessions aufbewahrt.</p>
    `,
    quiz: [
      {
        q: 'Warum sollte man für jedes neue Thema einen separaten Chat erstellen?',
        options: [
          'Weil Claude nur einen Chat gleichzeitig speichern kann',
          'Weil das Vermischen von Themen die KI verwirren und die Ergebnisqualität verschlechtern kann',
          'Weil jeder Chat nach 10 Nachrichten automatisch geschlossen wird',
          'Weil separate Chats schneller laden'
        ],
        correct: 1,
        explanation: 'Chat-Disziplin ist entscheidend: Wenn verschiedene Themen im selben Chat vermischt werden, verliert Claude den Kontext und die Antwortqualität sinkt.'
      },
      {
        q: 'Welches Claude-Modell eignet sich am besten für eine tiefgehende Analyse mit Quellen und Studien?',
        options: [
          'Haiku — das schnellste Modell',
          'Sonnet — der Allrounder',
          'Opus — das leistungsstärkste Modell',
          'Alle drei Modelle liefern identische Ergebnisse'
        ],
        correct: 2,
        explanation: 'Opus ist das leistungsstärkste Modell: Es ist langsamer, kann aber Quellen und Studien in Antworten integrieren — ideal für komplexe Recherchen.'
      },
      {
        q: 'Was sollte man vor einer gründlichen Dateianalyse in Claude aktivieren?',
        options: [
          'Den Inkognitomodus',
          'Die Websuche über das Plus-Symbol',
          'Den erweiterten Nachdenkenmodus (Stoppuhr-Symbol)',
          'Einen neuen Schreibstil erstellen'
        ],
        correct: 2,
        explanation: 'Der erweiterte Nachdenkenmodus (Stoppuhr-Symbol) sorgt dafür, dass Claude die hochgeladene Datei gründlicher einliest und bessere Analyseergebnisse liefert.'
      },
      {
        q: 'Was ist der Unterschied zwischen "Präferenzen" und "Erinnerungen (Memory)"?',
        options: [
          'Es gibt keinen Unterschied — beides ist dasselbe',
          'Präferenzen sind globale Einstellungen für jeden Chat, Erinnerungen sind gezielte Anweisungen für die Zukunft',
          'Präferenzen gelten nur für einen Chat, Erinnerungen für alle',
          'Erinnerungen sind nur in der Gratisversion verfügbar'
        ],
        correct: 1,
        explanation: 'Präferenzen sind globale Einstellungen, die automatisch für jeden neuen Chat übernommen werden. Erinnerungen (Memory) sind gezielte Einzelanweisungen, die Claude langfristig im Gedächtnis speichert.'
      },
      {
        q: 'Welche Datenschutz-Einstellung sollte bei IEG unbedingt deaktiviert werden?',
        options: [
          'Die Websuche',
          'Der Inkognitomodus',
          'Die Option "hilft dabei Claude zu verbessern" unter Datenschutz',
          'Die Erinnerungen (Memory)'
        ],
        correct: 2,
        explanation: 'Bei IEG ist es Pflicht, die Option "hilft dabei Claude zu verbessern" zu deaktivieren — damit werden keine eigenen Daten zum Training der KI genutzt.'
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
    // === ZUSATZ-INHALTE (optional) ===
    // Hier kannst du Videos, Bilder und zusätzlichen Text einfügen.
    // Diese Inhalte erscheinen AUTOMATISCH auf der Modul-Seite (modules/modul-XX.html).
    videos: [
      // Beispiel:
      // { url: 'https://www.youtube.com/embed/VIDEO_ID', title: 'Titel', caption: 'Video 1.1 · Beschreibung (Dauer)' },
    ],
    images: [
      // Beispiel:
      // { src: '../assets/bild.png', alt: 'Beschreibung', caption: 'Abbildung 1.1 · Bildunterschrift' },
    ],
    longContent: `
      <!-- Hier kannst du beliebig viel zusätzlichen HTML-Text einfügen.
           Wird unterhalb des Standard-Inhalts angezeigt.
           Lass es leer, wenn du nichts hinzufügen willst. -->
    `,
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
    // === ZUSATZ-INHALTE (optional) ===
    // Hier kannst du Videos, Bilder und zusätzlichen Text einfügen.
    // Diese Inhalte erscheinen AUTOMATISCH auf der Modul-Seite (modules/modul-XX.html).
    videos: [
      // Beispiel:
      // { url: 'https://www.youtube.com/embed/VIDEO_ID', title: 'Titel', caption: 'Video 1.1 · Beschreibung (Dauer)' },
    ],
    images: [
      // Beispiel:
      // { src: '../assets/bild.png', alt: 'Beschreibung', caption: 'Abbildung 1.1 · Bildunterschrift' },
    ],
    longContent: `
      <!-- Hier kannst du beliebig viel zusätzlichen HTML-Text einfügen.
           Wird unterhalb des Standard-Inhalts angezeigt.
           Lass es leer, wenn du nichts hinzufügen willst. -->
    `,
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
    // === ZUSATZ-INHALTE (optional) ===
    // Hier kannst du Videos, Bilder und zusätzlichen Text einfügen.
    // Diese Inhalte erscheinen AUTOMATISCH auf der Modul-Seite (modules/modul-XX.html).
    videos: [
      // Beispiel:
      // { url: 'https://www.youtube.com/embed/VIDEO_ID', title: 'Titel', caption: 'Video 1.1 · Beschreibung (Dauer)' },
    ],
    images: [
      // Beispiel:
      // { src: '../assets/bild.png', alt: 'Beschreibung', caption: 'Abbildung 1.1 · Bildunterschrift' },
    ],
    longContent: `
      <!-- Hier kannst du beliebig viel zusätzlichen HTML-Text einfügen.
           Wird unterhalb des Standard-Inhalts angezeigt.
           Lass es leer, wenn du nichts hinzufügen willst. -->
    `,
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
    // === ZUSATZ-INHALTE (optional) ===
    // Hier kannst du Videos, Bilder und zusätzlichen Text einfügen.
    // Diese Inhalte erscheinen AUTOMATISCH auf der Modul-Seite (modules/modul-XX.html).
    videos: [
      // Beispiel:
      // { url: 'https://www.youtube.com/embed/VIDEO_ID', title: 'Titel', caption: 'Video 1.1 · Beschreibung (Dauer)' },
    ],
    images: [
      // Beispiel:
      // { src: '../assets/bild.png', alt: 'Beschreibung', caption: 'Abbildung 1.1 · Bildunterschrift' },
    ],
    longContent: `
      <!-- Hier kannst du beliebig viel zusätzlichen HTML-Text einfügen.
           Wird unterhalb des Standard-Inhalts angezeigt.
           Lass es leer, wenn du nichts hinzufügen willst. -->
    `,
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
    // === ZUSATZ-INHALTE (optional) ===
    // Hier kannst du Videos, Bilder und zusätzlichen Text einfügen.
    // Diese Inhalte erscheinen AUTOMATISCH auf der Modul-Seite (modules/modul-XX.html).
    videos: [
      // Beispiel:
      // { url: 'https://www.youtube.com/embed/VIDEO_ID', title: 'Titel', caption: 'Video 1.1 · Beschreibung (Dauer)' },
    ],
    images: [
      // Beispiel:
      // { src: '../assets/bild.png', alt: 'Beschreibung', caption: 'Abbildung 1.1 · Bildunterschrift' },
    ],
    longContent: `
      <!-- Hier kannst du beliebig viel zusätzlichen HTML-Text einfügen.
           Wird unterhalb des Standard-Inhalts angezeigt.
           Lass es leer, wenn du nichts hinzufügen willst. -->
    `,
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

// FINAL EXAM — Mix aus allen Modulen (aktualisiert mit Modul 0 & 1 Inhalten)
const FINAL_EXAM = [
  // --- AUS MODUL 0: Prompt Engineering 101 ---
  {
    q: 'Welche drei Kerninteraktionsmodi mit Claude gibt es?',
    options: ['Chat, Cowork und Code', 'Beginner, Intermediate und Expert', 'Web, Mobile und Desktop', 'Opus, Sonnet und Haiku'],
    correct: 0,
    explanation: 'Chat (Konversation), Cowork (lokale Dateien) und Code (Terminal-Agent) sind die drei zentralen Modi.'
  },
  {
    q: 'Welche sechs Elemente umfasst die ideale Prompt-Struktur nach Anthropic?',
    options: [
      'Nur eine kurze Frage',
      'Aufgabenbeschreibung, Kontext & Tonfall, Hintergrunddaten, Anweisungen, Beispiele (Few-Shot) und wichtige Erinnerungen',
      'Ausschließlich Code-Beispiele',
      'Überschrift und ein einzelner Satz'
    ],
    correct: 1,
    explanation: 'Die ideale Struktur nach Anthropic umfasst sechs Elemente: Rolle/Ziel, Kontext, Hintergrunddaten, Schritt-für-Schritt-Anweisungen, Musterlösungen und Wiederholung kritischer Punkte.'
  },
  {
    q: 'Wozu dienen XML-Tags in einem Prompt?',
    options: [
      'Sie sind Dekoration',
      'Sie strukturieren den Prompt, damit Claude verschiedene Informationsarten unterscheiden kann',
      'Sie aktivieren den Programmiermodus',
      'Sie verschlüsseln den Prompt'
    ],
    correct: 1,
    explanation: 'XML-Tags geben dem Prompt eine klare Hierarchie — Claude kann gezielt auf einzelne Abschnitte zugreifen.'
  },
  // --- AUS MODUL 1: Grundlagen & Workbench ---
  {
    q: 'Warum sollte man für jedes Thema einen separaten Chat erstellen?',
    options: [
      'Weil Claude nur einen Chat speichern kann',
      'Weil das Vermischen von Themen die KI verwirrt und die Qualität verschlechtert',
      'Weil Chats nach 10 Nachrichten geschlossen werden',
      'Weil separate Chats schneller laden'
    ],
    correct: 1,
    explanation: 'Chat-Disziplin: Themen mischen verwirrt den Kontext und verschlechtert die Ergebnisqualität.'
  },
  {
    q: 'Welches Modell eignet sich für tiefgehende Analysen mit Quellen und Studien?',
    options: ['Haiku', 'Sonnet', 'Opus', 'Alle identisch'],
    correct: 2,
    explanation: 'Opus ist das leistungsstärkste Modell — kann Quellen und Studien integrieren.'
  },
  {
    q: 'Welche Datenschutz-Einstellung muss bei IEG deaktiviert werden?',
    options: [
      'Die Websuche',
      'Der Inkognitomodus',
      'Die Option "hilft dabei Claude zu verbessern"',
      'Die Erinnerungen (Memory)'
    ],
    correct: 2,
    explanation: 'Bei IEG ist es Pflicht, die Trainings-Option zu deaktivieren, damit keine Firmendaten zum KI-Training genutzt werden.'
  },
  // --- AUS MODUL 2: Document Engineering ---
  {
    q: 'Welche Cleanup-Aufgabe gehört NICHT zur Spreadsheet-Checkliste?',
    options: ['Standardize Formats', 'Anomaly Flagging', 'Predictive Stock Trading', 'Intelligent Reconciliation'],
    correct: 2,
    explanation: 'Predictive Trading ist nicht Teil der Checkliste.'
  },
  // --- AUS MODUL 3: Cowork ---
  {
    q: 'Welche Aussage zu Cowork ist FALSCH?',
    options: [
      'Cowork läuft in einer secure VM',
      'Claude kann destruktive Aktionen ausführen',
      'Cowork synct alle Files auf Anthropic-Server',
      'PII-Ordner sollten nie zugänglich sein'
    ],
    correct: 2,
    explanation: 'FALSCH: Cowork synct NICHT auf Anthropic-Server — das ist ein zentrales Sicherheitsmerkmal.'
  },
  // --- AUS MODUL 4: Connectors & Skills ---
  {
    q: 'Wofür steht MCP?',
    options: [
      'Master Cloud Processor',
      'Model Context Protocol — verbindet Claude mit Cloud-Tools wie Google Drive und Gmail',
      'Multi Cloud Platform',
      'Module Configuration Protocol'
    ],
    correct: 1,
    explanation: 'MCP = Model Context Protocol; es macht Claude zur Operating Hub durch Anbindung an Cloud-Tools.'
  },
  {
    q: 'Welches Tool wird für die Deep Research Pipeline (64+ Quellen) empfohlen?',
    options: ['Excel', 'NotebookLM', 'Slack', 'Microsoft Word'],
    correct: 1,
    explanation: 'NotebookLM konsolidiert die Quellen — der Output fließt in die skill.md.'
  },
  // --- AUS MODUL 5: Claude Code ---
  {
    q: 'Was tut der /prime-Command in Claude Code?',
    options: ['/start', 'Alle Kontextdateien lesen und Session initialisieren', 'Updates installieren', 'Session beenden'],
    correct: 1,
    explanation: '/prime erzwingt das Einlesen aller Kontextdateien mit Rollen- und Geschäftskontext.'
  },
  {
    q: 'Was bedeutet "Chunking" im Claude-Code-Kontext?',
    options: [
      'Files komprimieren',
      'Massive Tasks in Sub-Tasks splitten, um Token Limits und Agent Fatigue zu vermeiden',
      'Code übersetzen',
      'Logs sammeln'
    ],
    correct: 1,
    explanation: 'Chunking schützt vor Token Limits und Agent Fatigue bei Long-Running-Workflows.'
  },
  // --- AUS MODUL 0 & 6: Prompt Engineering ---
  {
    q: 'Was bewirkt die "Pre-fill"-Technik?',
    options: [
      'Prompts in der Cloud speichern',
      'Claude den Anfang seiner Antwort vorgeben (z.B. { für JSON), um das Format zu erzwingen',
      'Prompts automatisch senden',
      'Eine neue Session starten'
    ],
    correct: 1,
    explanation: 'Pre-fill: Mit "{" beginnen → valides JSON. Das Format wird damit erzwungen.'
  },
  {
    q: 'Warum gehören statische Informationen in den System Prompt?',
    options: [
      'Weil sie dort schöner aussehen',
      'Weil Claude sie durch Caching nicht bei jeder Anfrage neu lernen muss',
      'Weil sie im normalen Prompt nicht funktionieren',
      'Weil der System Prompt kürzer ist'
    ],
    correct: 1,
    explanation: 'Prompt Caching: Statische Informationen werden gecacht — das spart Zeit und Ressourcen.'
  },
  {
    q: 'Welche Reihenfolge gilt nach "Analyze the Form before the Sketch"?',
    options: [
      'Erst Sketch, dann Form',
      'Erst klare Fakten (Form), dann interpretative Daten (Sketch)',
      'Beide gleichzeitig',
      'Reihenfolge egal'
    ],
    correct: 1,
    explanation: 'Klare Fakten zuerst — sie kalibrieren den Kontext für die Interpretation.'
  }
];

// Pass-Threshold (in %)
const PASS_THRESHOLD = 70;
