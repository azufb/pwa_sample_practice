const cacheName = "pwa_sample_practice-v3";

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
