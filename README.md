# IEG Claude Academy

Eine interne Lern-Website für IEG-Mitarbeiter zur Beherrschung von Claude
für Investment-Banking-Workflows.

---

## ⚠️ WICHTIG — So starten Sie die Seite RICHTIG

Wenn Sie `index.html` per Doppelklick öffnen, **funktioniert sie nicht zuverlässig**.
Stattdessen:

### Lokal testen
```bash
cd ieg-academy
python3 -m http.server 8000
# Dann im Browser öffnen: http://localhost:8000
```

### Auf GitHub Pages hosten
Einfach den Ordner pushen, Pages aktivieren — **dann funktioniert alles automatisch**.

---

## 📚 Modul-Struktur

Jedes Modul hat eine eigene Seite im Ordner `modules/`:
- `modules/modul-00.html` — Strategic Orientation
- `modules/modul-01.html` — Foundations & Workbench
- `modules/modul-02.html` — Document Engineering
- `modules/modul-03.html` — Claude Cowork
- `modules/modul-04.html` — Connectors & Skills
- `modules/modul-05.html` — Claude Code
- `modules/modul-06.html` — Advanced Prompt Engineering

Du kannst Inhalte auf **ZWEI Arten** hinzufügen:

### 🅰️ Option A: Zentral in `content.js` (empfohlen für die meisten Inhalte)
Schnell, übersichtlich, alle Module an einer Stelle. **Hier fügst du Videos, Bilder
und Zusatztexte ein, die AUTOMATISCH auf den Modul-Seiten erscheinen.**

### 🅱️ Option B: Direkt in `modules/modul-XX.html` (für volle Kontrolle)
Für komplexere Layouts oder wenn du Inhalte zwischen die bestehenden Texte setzen willst.

---

## 🅰️ Option A: Inhalte über `content.js` (EMPFOHLEN)

Öffne `content.js` in einem Texteditor. Für jedes Modul gibt es drei neue Felder:
`videos`, `images` und `longContent`.

### Video hinzufügen

In `content.js`, suche das gewünschte Modul (z.B. `id: 1`) und ändere die `videos:`-Liste:

```javascript
videos: [
  {
    url: 'https://www.youtube.com/embed/DEINE_VIDEO_ID',
    title: 'Titel des Videos',
    caption: 'Video 1.1 · Kurze Beschreibung (5:32)'
  },
],
```

**So bekommst du die Video-URL:**
- **YouTube:** Video öffnen → "Teilen" → "Einbetten" → den `src`-Link aus dem iframe kopieren.
  Sieht aus wie: `https://www.youtube.com/embed/dQw4w9WgXcQ`
- **Vimeo:** Video öffnen → "Share" → "Embed" → den `src`-Link kopieren.
  Sieht aus wie: `https://player.vimeo.com/video/123456789`

**Mehrere Videos** in einem Modul? Einfach mehrere Objekte in die Liste:
```javascript
videos: [
  { url: 'https://www.youtube.com/embed/VIDEO1', title: 'Einführung', caption: 'Video 1.1 (3:42)' },
  { url: 'https://www.youtube.com/embed/VIDEO2', title: 'Demo', caption: 'Video 1.2 (8:15)' },
],
```

### Bild hinzufügen

1. Bild in den Ordner `assets/` legen (z.B. `assets/grafik-1.png`)
2. In `content.js` bei `images:`:

```javascript
images: [
  {
    src: '../assets/grafik-1.png',
    alt: 'Adoption-Kurve agentische KI',
    caption: 'Abbildung 1.1 · Quelle: IEG Internal Analysis'
  },
],
```

### Langen Zusatztext hinzufügen

Im Feld `longContent:` zwischen den Backticks (`` ` ``) kannst du beliebig viel HTML schreiben:

```javascript
longContent: `
  <h2>Zusätzliche Vertiefung</h2>
  <p>Hier ein langer Text mit <strong>fetten Wörtern</strong> und
  <em>kursiven Stellen</em>.</p>

  <h3>Ein weiterer Abschnitt</h3>
  <ul>
    <li>Punkt 1</li>
    <li>Punkt 2</li>
  </ul>

  <div class="callout">
    <div class="callout-title">Wichtiger Hinweis</div>
    <p>Hervorgehobene Box mit blauem Rand.</p>
  </div>
`,
```

### 🎯 Komplettes Beispiel: Modul 1 mit allem

```javascript
{
  id: 1,
  number: '01',
  meta: 'Beginner · Module 1',
  title: 'Foundations & The Analyst\u2019s Workbench',
  desc: '...',
  duration: '25 Min.',

  // ★ HIER deine Inhalte einfügen:
  videos: [
    {
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Personal Preferences Setup',
      caption: 'Video 1.1 · Anleitung Personal Preferences (5:32)'
    },
  ],
  images: [
    {
      src: '../assets/personas-screenshot.png',
      alt: 'Beispiel Persona Settings',
      caption: 'Abbildung 1.1 · Investment Banking Persona Template'
    },
  ],
  longContent: `
    <h2>Praxisbeispiele</h2>
    <p>Hier sind drei konkrete Beispiel-Prompts, die Sie sofort verwenden können:</p>
    <ol>
      <li>"Erstelle ein DCF für Mustermann AG mit folgenden Annahmen..."</li>
      <li>"Fasse die Q3-Earnings-Calls der Top-10 DAX-Unternehmen zusammen..."</li>
    </ol>
  `,

  content: `
    // Der ursprüngliche Modul-Inhalt (NICHT anfassen)
  `,
  quiz: [ /* ... */ ]
},
```

Sobald du `content.js` speicherst und die Seite neu lädst, erscheinen
**Video, Bild und Zusatztext automatisch** auf der Modul-Seite.

---

## 🅱️ Option B: Direkt in `modules/modul-XX.html`

Für mehr Kontrolle (z.B. Inhalt mitten zwischen bestehende Texte einfügen).
Suche im HTML nach `<main class="module-content">` und füge zwischen den Elementen ein:

### Video direkt im HTML

```html
<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/DEINE_VIDEO_ID"
    title="Titel"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>
<div class="video-caption">Video 1.1 · Beschreibung</div>
```

### Bild direkt im HTML

```html
<img src="../assets/bild.png" alt="Beschreibung" class="module-image">
<div class="image-caption">Abbildung 1.1 · Bildunterschrift</div>
```

### Text-Elemente

```html
<h2>Große Überschrift</h2>
<h3>Mittlere Überschrift</h3>
<p>Ein Absatz mit <strong>fett</strong> und <em>kursiv</em>.</p>

<ul>
  <li>Listenpunkt 1</li>
  <li>Listenpunkt 2</li>
</ul>

<div class="callout">
  <div class="callout-title">Wichtig</div>
  <p>Hervorgehobener Text.</p>
</div>
```

---

## 🎓 Quiz-Fragen ändern

In `content.js`, jedes Modul hat ein `quiz:`-Feld. Format:

```javascript
quiz: [
  {
    q: 'Ihre Frage hier?',
    options: ['Antwort A', 'Antwort B', 'Antwort C', 'Antwort D'],
    correct: 1,  // 0=A, 1=B, 2=C, 3=D
    explanation: 'Erklärung nach Auswahl'
  },
],
```

Auch das **Final Examination** (15 Fragen am Ende) liegt in `content.js`
im Array `FINAL_EXAM`.

---

## 🎨 Weiteres anpassen

- **Logo:** `assets/ieg-logo.png` ersetzen
- **Team-Mitglieder:** `index.html` → `<section id="team">`
- **Brand-Farben:** `styles.css` → CSS-Variablen am Anfang (`--ieg-blue` etc.)
- **Modul-Übersichts-Beschreibungen:** `content.js` → `title:` und `desc:` pro Modul

---

## 📂 Dateistruktur

```
ieg-academy/
├── index.html              # Hauptseite (Übersicht, Team, Zertifikat)
├── styles.css              # Stylesheet der Hauptseite
├── content.js              # ★ ZENTRAL: Modul-Inhalte, Videos, Bilder, Quizzes
├── app.js                  # App-Logik der Hauptseite
├── assets/
│   ├── ieg-logo.png        # IEG-Logo
│   └── ...                 # Hier eigene Bilder hochladen
├── modules/                # Modul-Seiten
│   ├── modul-00.html       # Modul 00 (eigene HTML-Datei)
│   ├── modul-01.html
│   ├── ...
│   ├── modul-06.html
│   ├── module-styles.css   # Gemeinsame Styles für Modul-Seiten
│   └── module.js           # Gemeinsame Quiz-Logik + Dynamic Content Loader
└── README.md               # Diese Datei
```

---

## 🔒 Locking-System

Beim Klick auf ein gesperrtes Modul **passiert nichts** — der User muss erst das
vorherige Modul-Quiz bestehen (≥70%), um das nächste Modul freizuschalten.

Der Fortschritt wird im `localStorage` des Browsers gespeichert.

---

## Support

Bei Fragen zur Website oder zum Curriculum wenden Sie sich an Ihren internen IEG-Ansprechpartner.

© 2026 IEG Investment Banking Group · Internal Training Material · v3.0
