// Minimal service worker — just enough to make the app installable
// (Android requires a registered SW with a fetch handler) and to keep
// the app shell available if the network briefly drops. The live
// timer data still needs a real connection to Firestore; this only
// caches the static pages/icons, not event state.
const CACHE_NAME = 'stage-timer-shell-v1';
const SHELL_FILES = [
  '/index.html',
  '/operator.html',
  '/display.html',
  '/admin.html',
  '/firebase.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first for our own pages (so operators/displays always get
// the latest logic), falling back to the cached shell if offline.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // let Firestore/CDN requests pass through untouched

  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
