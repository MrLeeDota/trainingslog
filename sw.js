"use strict";
/* Trainingslog – Service Worker (Offline-Betrieb)

   Die App-Dateien liegen im Cache und werden von dort sofort ausgeliefert, auch ohne Netz.
   Im Hintergrund wird jede angefragte Datei neu vom Server geholt und der Cache aktualisiert
   ("stale-while-revalidate"). Eine geänderte index.html ist dadurch beim nächsten Öffnen aktiv;
   die Seite bekommt dazu eine Nachricht und bietet das Neuladen an. Es muss also keine
   Versionsnummer gepflegt werden, wenn sich die App ändert.

   Die Trainingsdaten liegen in IndexedDB und haben mit diesem Cache nichts zu tun. */

const CACHE = "trainingslog-shell-v1";      // nur ändern, um den Cache einmal komplett neu aufzubauen
const SCOPE = self.registration.scope;      // Ordner der App, z. B. https://name.github.io/trainingslog/
const ROOT = new URL(SCOPE).pathname;

// Wird bei der Installation geladen, damit die App schon nach dem ersten Besuch offline startet.
// Neue Dateien, die offline gebraucht werden, hier eintragen.
const PRECACHE = ["./", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(PRECACHE.map(url => new Request(url, {cache: "reload"}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("trainingslog-shell-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET" || !req.url.startsWith(SCOPE)) return;   // alles andere geht unverändert ins Netz
  const path = new URL(req.url).pathname;
  const isShell = path === ROOT || path === ROOT + "index.html";    // beide Adressen liefern die App
  event.respondWith(respond(event, isShell ? SCOPE : req.url, isShell));
});

async function respond(event, key, isShell){
  const cache = await caches.open(CACHE);
  const cached = await cache.match(key);
  const fresh = refresh(event, cache, key, isShell && cached ? cached.clone() : null);
  if (!cached) return fresh;                  // noch nicht im Cache: direkt aus dem Netz
  event.waitUntil(fresh.catch(() => {}));     // offline schlägt das fehl, dann bleibt der Cache, wie er ist
  return cached;
}

async function refresh(event, cache, key, old){
  const res = await fetch(key, {cache: "no-cache"});   // am HTTP-Cache vorbei beim Server nachfragen
  if (!res.ok || res.type !== "basic") return res;
  const copy = res.clone();
  const stored = await cache.put(key, res.clone()).then(() => true, () => false);
  if (stored && old && await old.text() !== await copy.text()) await announceUpdate(event);
  return res;
}

// Sagt der gerade geladenen Seite, dass im Cache jetzt eine neuere Version der App liegt.
async function announceUpdate(event){
  const page = event.resultingClientId && await self.clients.get(event.resultingClientId);   // wartet, bis die Seite bereit ist
  let pages = page ? [page] : [];
  if (!pages.length){
    // Ältere Browser kennen resultingClientId nicht: kurz warten, bis die neue Seite auffindbar ist.
    await new Promise(done => setTimeout(done, 1500));
    pages = await self.clients.matchAll({type: "window"});
  }
  pages.forEach(p => p.postMessage({type: "update"}));
}
