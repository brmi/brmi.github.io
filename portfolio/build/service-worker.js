"use strict";var precacheConfig=[["/portfolio/index.html","c60a2e57a609d5d7d9f8bd37df7905a3"],["/portfolio/static/js/main.1546eec3.js","b04383378e8a46c6bb73275af1aee181"],["/portfolio/static/media/cashback.424196d5.png","424196d53c7317bb7c04d9c2622d29a0"],["/portfolio/static/media/comment.068f2520.png","068f25200b2c8c85c34361177f3e27fb"],["/portfolio/static/media/dash.cc12b769.png","cc12b76982a35139a114297e2b24b997"],["/portfolio/static/media/dashbig.26ffcf79.png","26ffcf7957858b3724ba66107aecf8f1"],["/portfolio/static/media/databaseppt.6d5ab534.pdf","6d5ab53465bd3afe6c946000a40e46d2"],["/portfolio/static/media/discoverLately.a1c30a69.png","a1c30a694da3bd559c85caea04312ab7"],["/portfolio/static/media/github-logo.6e02c476.svg","6e02c476cf65f06ffa5ca281a66e1761"],["/portfolio/static/media/instagram-logo.4706aba6.svg","4706aba62cc2e4de845471c9bfe724c9"],["/portfolio/static/media/pic.e0a8420b.png","e0a8420b919851f75fe3bba5c2f57a5b"],["/portfolio/static/media/privatelabel.dbe011a1.png","dbe011a15990efe35ba247c6a9c23f2e"],["/portfolio/static/media/profile.e5db7e5d.JPG","e5db7e5d9c9a878cc6824d648cbfc9fa"],["/portfolio/static/media/qlastyear.4c573f29.png","4c573f29d98b4ecb3fe1187103f187ae"],["/portfolio/static/media/social.0ab5f9a2.svg","0ab5f9a26438ac2587476e82ce1a7279"],["/portfolio/static/media/spotify.b7f6665a.svg","b7f6665ae026b99983b56aa6c6b49405"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});