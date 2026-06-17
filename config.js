// ============================================
// KONFIGURASI SUPABASE
// File ini sudah diisi dengan credentials project gudang-distribusi
// ============================================

const SUPABASE_URL = 'https://gpvahzvocznsftkreedc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_r4rxxBKrEaOdo1AEH2MoDA_ogkLGHs4';

// Jangan diubah di bawah ini
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
