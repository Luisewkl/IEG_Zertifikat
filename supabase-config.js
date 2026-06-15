/* IEG Claude Academy — Supabase Config */

const SUPABASE_URL = 'https://hojkbskyhwocsknucvos.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvamtic2t5aHdvY3NrbnVjdm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MzI4NzYsImV4cCI6MjA5NzEwODg3Nn0.A2jd2EPn9bSBHiUh-CQDbx-zUnGart4iU688gXypT3c';

window._supabaseURL = SUPABASE_URL;
window._supabaseKEY = SUPABASE_ANON_KEY;

// Supabase Client laden
(function() {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
  s.onload = function() {
    window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✓ Supabase bereit');
    document.dispatchEvent(new Event('supabaseReady'));
  };
  document.head.appendChild(s);
})();
