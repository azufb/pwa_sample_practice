const cacheName = "pwa_sample_practice-v4";

const appShellFiles = [
  "index.html",
  "index.tsx",
  "App.tsx",
  "index.css",
  "App.css",
];

window.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");

  // 以下のコードが実行されるまでインストールされない
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[Service Worker] Caching all: app shell and content");
      return cache.addAll(appShellFiles);
    })
  );
});

window.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response ? response : fetch(event.request);
    })
  );
});
