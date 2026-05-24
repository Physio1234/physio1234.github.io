// WSZ SW Cleaner wsz-v6-215adbde
self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.map(function(k) { return caches.delete(k); }));
  }));
});
self.addEventListener('activate', function(e) {
  e.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(function(keys) {
        return Promise.all(keys.map(function(k) { return caches.delete(k); }));
      })
    ]).then(function() {
      return self.clients.matchAll({includeUncontrolled: true}).then(function(clients) {
        clients.forEach(function(c) { c.postMessage({type:'RELOAD'}); });
      });
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(new Request(e.request, {cache: 'no-store'})).catch(function() {
      return new Response('', {status: 503});
    })
  );
});
