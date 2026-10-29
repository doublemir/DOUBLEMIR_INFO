const CACHE_NAME = 'doublemir-pwa-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/music.html',
  '/style.css',
  // Сюда можно добавить пути к важным картинкам
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});