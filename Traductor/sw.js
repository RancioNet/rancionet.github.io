const CACHE_NAME = 'traductor-cache-v1';
const urlsToCache = [
    '/Traductor/', // Añade esta línea si quieres cachear la ruta base
    '/Traductor/traductor.html',
    '/Traductor/traductor.js',
    '/Traductor/styles.css',  // Añade aquí tus archivos CSS si tienes alguno
    // Añade aquí otras rutas de recursos que necesites almacenar en caché
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', function(event) {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
