'use strict';

// ─── IndexedDB — local-first dream storage ────────────────────────────────────
const DB_NAME    = 'yaaawn-dream';
const DB_VERSION = 1;
const STORE      = 'dreams';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: 'id' });
        store.createIndex('created_at', 'created_at', { unique: false });
      }
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror   = (e) => reject(e.target.error);
  });
}

function uid() {
  return typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
}

async function saveDream(data) {
  const db = await openDB();
  const entry = {
    id:               data.id           || uid(),
    created_at:       data.created_at   || new Date().toISOString(),
    body:             data.body         || '',
    voice_blob_id:    data.voice_blob_id  ?? null,
    mood_before:      data.mood_before    ?? null,
    mood_after:       data.mood_after     ?? null,
    symbols:          data.symbols      || [],
    characters:       data.characters   || [],
    settings:         data.settings     || [],
    interpretations: {
      freud: data.interpretations?.freud ?? null,
      jung:  data.interpretations?.jung  ?? null,
      fromm: data.interpretations?.fromm ?? null,
    },
    meta_observation: data.meta_observation ?? null,
    user_notes:       data.user_notes       ?? null,
  };
  return new Promise((resolve, reject) => {
    const tx  = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(entry).onsuccess = () => resolve(entry);
    tx.onerror = (e) => reject(e.target.error);
  });
}

async function getDream(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE, 'readonly').objectStore(STORE).get(id);
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror   = (e) => reject(e.target.error);
  });
}

async function getAllDreams() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE, 'readonly').objectStore(STORE).getAll();
    req.onsuccess = (e) => resolve(
      e.target.result.sort((a, b) => b.created_at.localeCompare(a.created_at))
    );
    req.onerror = (e) => reject(e.target.error);
  });
}

async function updateDream(id, updates) {
  const existing = await getDream(id);
  if (!existing) throw new Error(`Dream ${id} not found`);
  return saveDream({ ...existing, ...updates });
}

async function getDreamCount() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE, 'readonly').objectStore(STORE).count();
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror   = (e) => reject(e.target.error);
  });
}

async function searchDreams(query) {
  const all = await getAllDreams();
  const q   = query.toLowerCase().trim();
  if (!q) return all;
  return all.filter(d =>
    d.body.toLowerCase().includes(q)       ||
    d.symbols.some(s    => s.toLowerCase().includes(q)) ||
    d.characters.some(c => c.toLowerCase().includes(q)) ||
    d.settings.some(s   => s.toLowerCase().includes(q))
  );
}

const DreamDB = { saveDream, getDream, getAllDreams, updateDream, getDreamCount, searchDreams };
