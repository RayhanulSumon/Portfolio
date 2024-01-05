// service-worker.js

const cacheName = 'my-cache';
const cacheFiles = [
    '/',
    '/index.html',
    '/static/css/main.chunk.css',
    '/static/js/bundle.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
