self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open('v1').then((cache) => cache.addAll(['/','/index.html'])));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
