// sw.js
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { CacheFirst } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { ExpirationPlugin } from 'workbox-expiration';

// Precache files (optional)
precacheAndRoute(self.__WB_MANIFEST);

// Cache CSS, JS, and HTML files with a Stale-While-Revalidate strategy
registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'document',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Cache images with a Cache-First strategy
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50, // Cache up to 50 images
        maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 Days
      }),
    ],
  })
);
