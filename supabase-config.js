/* ============================================
   IEG Claude Academy — Supabase Konfiguration
   
   SETUP (einmalig, 5 Minuten):
   1. Gehe zu https://supabase.com → kostenlosen Account erstellen
   2. Neues Projekt erstellen (Name: ieg-academy)
   3. Warte bis Projekt bereit ist (~2 Min.)
   4. Gehe zu: Settings → API
   5. Kopiere "Project URL" → ersetze YOUR_SUPABASE_URL unten
   6. Kopiere "anon public" Key → ersetze YOUR_SUPABASE_ANON_KEY unten
   7. Gehe zu: SQL Editor → "New Query" → füge den SQL-Code unten ein → Run
   8. Diese Datei speichern und auf GitHub hochladen
   ============================================ */

const SUPABASE_URL = 'https://wjocijiccmbhdnopwnlg.supabase.co'

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb2NpamljY21iaGRub3B3bmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1Mjc5ODUsImV4cCI6MjA5NzEwMzk4NX0.MpVu6AnZBMZVo-YVboXVLgtc5RSRqrI-ylDAFpOfC8c'

/* ============================================
   SQL-CODE FÜR SUPABASE (einmalig ausführen):
   
   Gehe zu Supabase → SQL Editor → New Query → einfügen → Run:
   
   CREATE TABLE progress (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
     module_id INTEGER NOT NULL,
     passed BOOLEAN DEFAULT FALSE,
     score INTEGER DEFAULT 0,
     completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     UNIQUE(user_id, module_id)
   );
   
   ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
   
   CREATE POLICY "Users can only see own progress"
     ON progress FOR ALL USING (auth.uid() = user_id);
   
   CREATE TABLE final_exam (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
     passed BOOLEAN DEFAULT FALSE,
     score INTEGER DEFAULT 0,
     user_name TEXT,
     completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   
   ALTER TABLE final_exam ENABLE ROW LEVEL SECURITY;
   
   CREATE POLICY "Users can only see own exam"
     ON final_exam FOR ALL USING (auth.uid() = user_id);
   
   ============================================ */

// Supabase Client laden (CDN)
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
  script.onload = function() {
    if (SUPABASE_URL.includes('YOUR_') || SUPABASE_ANON_KEY.includes('YOUR_')) {
      console.warn('⚠️ Supabase nicht konfiguriert. Bitte supabase-config.js anpassen.');
      window.supabaseClient = null;
      return;
    }
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✓ Supabase verbunden');
    // Custom event, damit app.js weiß dass Supabase bereit ist
    document.dispatchEvent(new Event('supabaseReady'));
  };
  document.head.appendChild(script);
})();
