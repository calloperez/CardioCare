// Service worker mínimo para que CardioRecord sea instalable (Chrome/Android
// exigen un service worker con manejador de "fetch" para ofrecer el ícono de
// instalación). A propósito NO cachea nada: los pedidos a Supabase deben ir
// siempre a la red para que la sincronización funcione correctamente.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Passthrough: dejamos que el navegador maneje la petición normalmente,
  // sin servir nada desde caché.
});
