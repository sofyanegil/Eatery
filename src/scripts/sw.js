/* eslint-disable prefer-regex-literals */
/* eslint-disable comma-dangle */
/* eslint-disable no-restricted-globals */
import 'regenerator-runtime/runtime';
import { setCacheNameDetails } from 'workbox-core';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

setCacheNameDetails({
  prefix: 'eatery',
  suffix: 'app',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'assets-cache',
  })
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com' || url.origin === 'https://restaurant-api.dicoding.dev' || url.origin === 'https://www.themealdb.com',
  new NetworkFirst({
    cacheName: 'api-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
        maxEntries: 100,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === 'style' || request.destination === 'script' || request.destination === 'worker',
  new StaleWhileRevalidate({
    cacheName: 'assets-cache',
  })
);

registerRoute(
  new RegExp('/images/.*\\.webp'),
  new StaleWhileRevalidate({
    cacheName: 'assets-cache',
  })
);

cleanupOutdatedCaches();

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
