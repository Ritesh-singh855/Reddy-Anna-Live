const CACHE_NAME = 'reddy-anna-live-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.png',
  '/images/reddy-anna-live-og.png',
  '/images/whatsapp-profile.webp',
  '/images/reddy-anna-logo.png',
  '/fonts/Inter.woff2', // If you have a custom font being preloaded
  // Add other critical assets like CSS, JS bundles, other images used on critical paths
  // For a dynamic app, you might want to cache more selectively or use network-first strategies
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(response =>
          response || fetch(event.request).then(fetchResponse => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          })
        )
      )
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
