'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6705f8b9b71a1ebc442cdfdcfa816fcc",
"version.json": "784f31824f19cba47e27914ebda26396",
"index.html": "33ba91941af29670ba4b049d4980799b",
"/": "33ba91941af29670ba4b049d4980799b",
"main.dart.js": "9dc0fe7b288ed944583f83bc9af40191",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"README.md": "ed5c512970b96cf4991de6894c165e68",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a5674451c2b6f65e55ad456d51b9d4a0",
".git/ORIG_HEAD": "561111d0ae38b64b609e6b668e1421be",
".git/config": "b5613a7d9dfb3357af37ad702dd863b3",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/03/8040d4f8fb4071478d24ba89072d8b6979ff70": "817c9307feb801c85a303ef527aea18b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/b819c43ee19739693f07c66d2050653fa490c3": "865361893ec214386eda1afe5201dc10",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/499b9b0e2817b7cbaa119c05f5247cc200bf9a": "1a7f034990e1ab90a52f501f4ea58d19",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/67/1df58857bad8c0eb5183fd2cdb9ce64735a186": "81d1317f2a2b764d07eaec33735d1bfc",
".git/objects/94/20e5b2d1491a96a373b3cddd96b5d64ebe1798": "f916f90d9fdf2dcad428c2f0417ccb63",
".git/objects/94/17fa5d7a2b53263231d65c7eb45b1f9fed9c5e": "d14baab8f67101a80746ae04619991fb",
".git/objects/0e/710d39b53c3e397745ef57aaec90c6ecfdf9ae": "34a2ac89dbd63690b5b5a52b2e02aa58",
".git/objects/34/e9e4214e769402efc6040a1bc1a0e8646cc043": "45dfbcdc99e40049c0b6fe99c972a1c8",
".git/objects/33/9a63c5736510b414b43ede435768447d205c7a": "c3f5b7cdf7c42b0d213f00838c31fe0c",
".git/objects/33/f5fd0ea78653d6cc921065e9d0f7664e33c354": "1fe2efc8fd6d95bc1355c5df1d5ed8a0",
".git/objects/9d/7a2c35ccf8392eed2921999f7a9faf30d41ce7": "4d768d0ade97286889c4dd3da7028b3f",
".git/objects/02/b3f4aac1b066c2fd756e421a65f8ed0d8bd43b": "f9ca9397c2c89b0efa822a40bc547ffc",
".git/objects/a3/4e2d7a72233efd58684590d18fe73a352bcde2": "7f86a9d71173555efd2311b79bde94f5",
".git/objects/ac/f025cbbcd61894db513be4b21b7af98bb0c6a7": "3a4eaac5f1eb6ca43df09883e2663e41",
".git/objects/ac/a03cee982de219453fa6806bbe7e44dd029eec": "de4f0b3a2941260862ed377095408001",
".git/objects/bb/44de10eccaaa37f120933e400dcfe1b4ea6835": "b6ef53b82e7bea8de5cb775f60efbff4",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/3571ee511c64ac544ac68f19debde5defcf64f": "5ff77aa9fe1ec97b563da85aee933411",
".git/objects/ae/16a9ae506c05abbd5ceb5f9e3438b2c60e4544": "4d956a0eac5071da9f7ca4cc60ce48d1",
".git/objects/d8/8c300cc270fc6ce602390806a7352638ff525a": "c91bafb74a2f4acf2406a59c51f7566d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b21b09dc8d4a03a1755621173cdaedaca7cfdd": "5948dc77abc734a190440c0154fff41b",
".git/objects/c7/a580a2ba978c49126cd16c884a9d93c3c290c8": "481d38310d4dbdd845d2e602c8845313",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/5956a97ad17bb89750a3af0c7eb755ebad670a": "9595bf18c4fdd4cf3b92d043fa165f5c",
".git/objects/cf/1ec1a4fd8c84ce5d31a6aadf07bc8e979dbb86": "9dfd60c8bae7f0a5a758e87a8f1acc99",
".git/objects/ed/bcaa511afaed05998fdc520ef4e2eb40d6de28": "60b43b75ab7afb6b4f7723bacf9067d0",
".git/objects/11/f60e84151fcf0179ed4ad622da0582a455144f": "36c9e74740874b70d8b485ec32163ce2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/f6a861d516680a33ec220ec6a2ad140b260a62": "fead580d508a4fa6c4faf99af9546304",
".git/objects/17/9a08beec227fd314025c4a09d6583c9dbe07b6": "62abd3e010addfe00ade28ade9e8102d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/d65d05335bdfac30e7477ba3ce8e7a7e4aeb72": "1501ef007f322a3ed4cc6f3a4e8bb291",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/04edf2027f22edca99f72b97ec7d74adc9047e": "4aa1f5b98ed5dfc3d7343864678f1da6",
".git/objects/21/288f57bba16efa64a3a24780392b18d5d5e2e2": "bf9ca3977e1808ac1de78d03f65996fa",
".git/objects/72/11fe2a6d98c7076b55612d09573ae4a6d3a84c": "60e7c0986c0933eeb9ab5d7d37bae88f",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/81891cc417321689bb00d5198fb587080dad6a": "98ce8870b92da66281601872aa786c8f",
".git/objects/2a/da3be7b318794e3a48b863f16f4e0e9f57c2e7": "2271a5c8c78b737bc0ef7f73b649ba9d",
".git/objects/2a/952b4213498f861e4971990b7fb0282d8ee507": "5f0ea17bd43607a94f645ac1824c180d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/8741cb5bdb28a48e851fccff220be3feaead49": "0a82f67856cf71a6e60674f0bf85198a",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/3a/91f6c800bd016f378c382097ba56f22b135f2e": "f68e920d1decd21aa4e0c95aa682fa3f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6c/454dfb4ce12b806986b4c068705529d12a3a29": "05c1a3ac7792ea53925202838d591cda",
".git/objects/39/7885258469906570e1505f5a167fa1bdd55e8e": "8b69b0c4460a9723dd4c2e585266ca09",
".git/objects/99/d263cbe6d2ca34cd1a9624ff963b48828a2e48": "e6303eb58f54cd6968ebf43ec73a6d78",
".git/objects/64/cf5902a2c419874f5855422cc834d8c8f3baa4": "dd84e6cbcba59b387e5753cabce0064c",
".git/objects/64/46c4a9b6de01a292b5f01b44984be197600f5d": "0908087a2831807a5156051564190cc5",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6a43183bf58e87ee6e2dfcd79663536a6317e0": "c06a83fcd54be38fa64b45e459af3a6b",
".git/objects/d4/2892298425704c1f813d80eb709a87cf9213dc": "05e1056f4175e08c119828527052e577",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d5/9d70894db5d616f47d4bbf084c87fa76ca5e72": "536f2565fef0105642c048adeaa4bad7",
".git/objects/d5/36d66905c7d6a51158a1a85b8da83f2df35676": "36bab491c4737c1ae1a28ef7b0eade21",
".git/objects/d2/267eda593aecb7de983ff07d27695d99665221": "5840f805a9a6884689cfd164d422cdee",
".git/objects/aa/82ce0a1ca7cbf217e8577793014f73cc0858d3": "bdda58543b0f60108b74df37144b7aeb",
".git/objects/af/2afcde5749f62813021bd45372c0a019685aba": "864b7a15808b4ad7c3a820a0b1899b41",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/448d86d938e885dc2b465d60e21d4529fa2744": "99047faf50d121fc8a11b3edad407790",
".git/objects/f7/310eed9c6f1168c9b4ecb78ab3dceb5853ef24": "a67d17ffcc6cfdd3029a5a9a0525e208",
".git/objects/ff/b3480a5b7180afe3536baa036cca8a70033797": "4a399de7d0b30ecffb169d72a1dc28a5",
".git/objects/ce/bfa56a7c845f0a9b288db5fda09f45773087c8": "ece6a34f88e3ab1c27075a8edfc95db2",
".git/objects/ce/6f7389f69c85df0f6377570314e29fcf1e5d15": "b32cd37c7b150c568fa3f9f2a3938812",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/ba8f3d16b3b32db9bd47109d4edfb0e047e05c": "dee3bb23d96cefd6f307cbca9b917c6f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/efe88c40de22f6aa1ea8716e83048a1111e43b": "e493c6debc8119129972ad41f6dc3f4b",
".git/objects/4f/6df392dbf4cfb258a89844a6df0b9408481db0": "3b6db4db7d3687371006c0ca1a70b222",
".git/objects/8c/a985321d250e2ee4af1fa2d36c1a3f9c2fe5ed": "2d183923951610de784cd1e8745e42e1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/8311ee20e820957fc785c01d892a9657670b5b": "b35e9c69165a1507e17297abcf6fc0c5",
".git/objects/82/7b4bf8bb0eea81e173fa9322ae96a3b0ac3aa2": "a39b5768c3fa2dfa11a897adbde5e529",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "04db43b7210981f3b97857017de15207",
".git/logs/refs/heads/main": "c65c370c0626d35daf691e0ec51fa05a",
".git/logs/refs/remotes/origin/main": "ae812ca3dafc317490221f93d93f5c3f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9395e6f768f592eb4ecff29238ca2158",
".git/refs/remotes/origin/main": "9395e6f768f592eb4ecff29238ca2158",
".git/index": "e3f29dd1783d10a58062a0fa903efde0",
".git/COMMIT_EDITMSG": "f814683eca3c2188235c36db54fca485",
".git/FETCH_HEAD": "f9a73f509018606b6d32230aeaf06afd",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "36aa690e5efebb8a3f12cf8fed03cacf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "1edbfc1090fea23303c8650e8278b87b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
