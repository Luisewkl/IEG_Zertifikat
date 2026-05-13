# IEG Claude Academy

Eine interne Lern-Website für IEG-Mitarbeiter und Praktikanten zur Beherrschung von Claude
für Investment-Banking-Workflows.

---

## ⚠️ WICHTIG — So starten Sie die Seite RICHTIG

Die Website ist eine **moderne Web-Anwendung** und benötigt einen **Web-Server** (auch lokal).
Wenn Sie `index.html` einfach doppelklicken, blockieren moderne Browser oft das Laden
des Logos und das JavaScript funktioniert nicht zuverlässig (CORS / `file://`-Beschränkungen).

### ✅ Empfohlene Methode: Lokaler Server

**Mit Python (vorinstalliert auf Mac & Linux):**
```bash
cd ieg-academy
python3 -m http.server 8000
# Dann im Browser öffnen: http://localhost:8000
```

**Mit Node.js:**
```bash
cd ieg-academy
npx serve
```

**Mit VS Code:** Die Extension "Live Server" installieren, dann Rechtsklick auf `index.html` →
"Open with Live Server".

### ✅ Für GitHub-Deployment

Wenn Sie die Seite auf GitHub Pages, Vercel oder Netlify hosten, **funktioniert alles automatisch**.
Das ist der eigentliche Anwendungsfall — kein `file://`-Problem mehr.

```bash
# GitHub Pages: Push das Repo, dann unter Settings → Pages aktivieren
# Vercel: Im Ordner: vercel --prod
# Netlify: Den Ordner einfach auf netlify.com per Drag & Drop hochladen
```

---

## Inhalte (aus dem Claude Mastery Curriculum)

Alle 6 Module der hochgeladenen Curriculum-Datei sind 1:1 als Lern-Modal eingebaut, plus 7 Quizzes
und ein Final Examination:

| # | Titel | Niveau |
|---|-------|--------|
| 00 | Strategic Orientation: The AI-Powered Investment Bank | Foundational |
| 01 | Foundations & The Analyst's Workbench | Beginner |
| 02 | Document Engineering & Data Synthesis | Intermediate |
| 03 | Claude Cowork — Agentic File Management | Advanced |
| 04 | The Integrated Ecosystem — Connectors & Skills | Professional |
| 05 | Claude Code — The Terminal-Based Power User | Expert |
| 06 | Advanced Prompt Engineering for Finance | Masterclass |
| ★ | Final Examination (15 Fragen) | Comprehensive |

---

## So funktioniert die Lern-Mechanik

1. Standardmäßig ist **nur Modul 00** freigeschaltet (mit pulsierendem blauen Rahmen markiert)
2. Klick auf Modul 00 öffnet das Lern-Modal mit dem vollen Curriculum-Inhalt
3. Am Ende des Moduls: Button **„Zum Quiz"**
4. Quiz bestehen (≥ 70%) → Modul 01 wird automatisch freigeschaltet
5. So weiter, bis alle 6 Module abgeschlossen sind
6. Dann wird das **Final Examination** freigeschaltet (15 Fragen, mischt Inhalte aller Module)
7. Bei Bestehen → personalisiertes **IEG Claude Certificate** mit Name, Datum, Cert-ID und Logo

### 👁 Vorschau-Modus

Im Curriculum-Bereich gibt es einen **"Vorschau-Modus"**-Button.
Damit können Sie als Admin alle Module direkt ansehen, ohne Quizzes absolvieren zu müssen —
ideal, um den Inhalt vor dem Roll-Out zu reviewen.

---

## Dateistruktur

```
ieg-academy/
├── index.html        # Hauptseite (HTML-Struktur)
├── styles.css        # Stylesheet (IEG-Brand-Farben)
├── content.js        # ALLE Lerninhalte + Quiz-Fragen
├── app.js            # App-Logik (Locking, Quiz-Engine, Zertifikat)
├── assets/
│   └── ieg-logo.png  # IEG-Logo (transparent)
└── README.md         # Diese Datei
```

---

## Anpassung

### Inhalte ändern (`content.js`)
- `CURRICULUM` → Array mit allen 6 Modulen: Titel, Beschreibung, HTML-Inhalt, Quizfragen
- `FINAL_EXAM` → Array mit den 15 Fragen des Abschluss-Examens
- `PASS_THRESHOLD = 70` → Pass-Schwelle in %

### Team-Mitglieder anpassen (`index.html`)
Im Abschnitt `<section id="team">` finden Sie alle Team-Karten. Pro Person eine `<article>`.

### Branding (`styles.css`, CSS-Variablen)
```css
--ieg-blue: #075DE4;          /* Primary IEG Blue (aus dem Logo extrahiert) */
--ieg-blue-bright: #2876F2;
--ieg-blue-deep: #0040AE;
--ieg-blue-soft: #E8F0FF;
--navy: #0A1A33;
```

### Zertifikat-Signatur (`app.js`, Funktion `renderCertificate`)
Standardmäßig "S. Heilmann" — frei anpassbar.

---

## Datenschutz

- **Keine Server-Kommunikation:** Alle Daten bleiben im Browser des Nutzers (`localStorage`)
- **Pro Browser:** Jeder Nutzer sieht nur seinen eigenen Fortschritt
- **Reset möglich:** Über den Footer-Link "Fortschritt zurücksetzen"

---

## Support

Bei Fragen zur Website oder zum Curriculum wenden Sie sich an Ihren internen IEG-Ansprechpartner.

© 2026 IEG Investment Banking Group · Internal Training Material · v1.3
