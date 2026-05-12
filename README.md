# IEG Claude Academy

Eine interne Lern-Website für IEG-Mitarbeiter und Praktikanten zur Beherrschung von Claude
für Investment-Banking-Workflows. Vollständig im IEG-Branding (kräftiges IEG-Blau, Navy,
Original-Logo).

## Inhalt

- **6 Module** mit Lerninhalten basierend auf dem Claude Mastery Curriculum
- **Quiz nach jedem Modul** (Pass-Threshold: 70%)
- **Sequentielles Freischalten** — das nächste Modul öffnet sich erst nach bestandenem Quiz
- **Final Examination** mit 15 Fragen über alle Module
- **IEG Claude Certificate** mit personalisiertem Namen, Datum, Zertifikat-ID und IEG-Logo
- **Team-Übersicht** mit IEG-Schlüsselpersonen (Stefan Heilmann, Mirko Heide, Erkan Ezgin u.v.m.)
- **Fortschritts-Tracking** über Browser-Storage (jeder Mitarbeiter sieht nur seinen eigenen Stand)

## Module

| # | Titel | Niveau |
|---|-------|--------|
| 00 | Strategic Orientation: The AI-Powered Investment Bank | Foundational |
| 01 | Foundations & The Analyst's Workbench | Beginner |
| 02 | Document Engineering & Data Synthesis | Intermediate |
| 03 | Claude Cowork — Agentic File Management | Advanced |
| 04 | The Integrated Ecosystem — Connectors & Skills | Professional |
| 05 | Claude Code — The Terminal-Based Power User | Expert |
| 06 | Advanced Prompt Engineering for Finance | Masterclass |
| ★ | Final Examination | Comprehensive |

## Dateistruktur

```
ieg-academy/
├── index.html        # Hauptseite
├── styles.css        # Stylesheet (IEG-Brand-Farben)
├── content.js        # Lerninhalte + Quiz-Fragen
├── app.js            # App-Logik (Locking, Quiz-Engine, Zertifikat)
├── assets/
│   └── ieg-logo.png  # Original IEG-Logo
└── README.md         # Diese Datei
```

## So starten Sie die Website lokal

**Option 1 — Doppelklick:**
1. Entpacken Sie das Archiv
2. Doppelklick auf `index.html` — die Seite öffnet sich im Browser
3. Fertig.

**Option 2 — Lokaler Server (empfohlen):**
```bash
cd ieg-academy
python3 -m http.server 8000
# Dann im Browser: http://localhost:8000
```

## Deployment / Hosting

Die Website ist eine reine statische Site (HTML/CSS/JS) — kein Backend nötig:

- **Vercel:** `vercel --prod` im Ordner ausführen
- **Netlify:** Ordner per Drag & Drop auf netlify.com hochladen
- **Internes IEG-Hosting:** Den Ordner einfach auf den Webserver kopieren
- **GitHub Pages:** Repo erstellen, Inhalte pushen, Pages aktivieren

## Anpassung

### Inhalte ändern
- **Modul-Texte und Quizfragen:** `content.js` editieren
  - Variable `CURRICULUM` enthält alle 6 Module
  - Variable `FINAL_EXAM` enthält die 15 Final-Fragen
- **Team-Mitglieder:** Direkt in `index.html` im Abschnitt `<section id="team">` editieren
- **Pass-Threshold:** `PASS_THRESHOLD = 70` in `content.js` anpassen

### IEG-Brand-Farben (CSS-Variablen in `styles.css`)
```css
--ieg-blue: #075DE4;          /* Primary IEG Blue (aus dem Logo) */
--ieg-blue-bright: #2876F2;   /* Helleres Blau für Hover */
--ieg-blue-deep: #0040AE;     /* Dunkleres Blau für Tiefe */
--ieg-blue-soft: #E8F0FF;     /* Sehr helles Blau für Hintergründe */
--navy: #0A1A33;              /* Navy für Hero/Footer/Team */
--paper: #FBFCFE;             /* Heller Hintergrund */
```

### Logo austauschen
Falls Sie eine höher aufgelöste Version oder eine SVG-Version des Logos haben:
- Datei als `assets/ieg-logo.png` (oder `.svg`) ablegen
- In `index.html` die `src="assets/ieg-logo.png"`-Verweise ggf. anpassen
- Logo erscheint automatisch in: Navbar, Footer, Zertifikat

### Zertifikat-Signatur
In `app.js` in der Funktion `renderCertificate()` finden Sie die Signatur "S. Heilmann".
Anpassbar dort.

## Datenschutz / Speicherung

- **Keine Server-Kommunikation:** Alle Daten bleiben im Browser des Nutzers (`localStorage`)
- **Pro Gerät und Browser:** Jeder Nutzer sieht nur seinen eigenen Fortschritt
- **Reset jederzeit möglich:** Über den Footer-Link "Fortschritt zurücksetzen"

## Support

Bei Fragen zur Website oder zum Curriculum:
**Erkan Ezgin** — Head of AI, IEG
e.ezgin@ieg-banking.com

---

© 2026 IEG Investment Banking Group · Internal Training Material · v1.1
