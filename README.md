# SLO Automatic

membuat penginputan lebih mudah

## Use

you have to use google chrome and need to install extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=id).
copy this script

```javascript
// ==UserScript==
// @name         Auto SLO
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  This For Make Auto SLO
// @author       Rizsyad AR
// @match        https://sbudjk.esdm.go.id/*
// @icon         https://www.esdm.go.id/assets/imagecache/contentPictureThumb/xprofil-arti-logo-cszkz2w.png,qr=t2w869d.pagespeed.ic.dW6bW37Apo.png
// @require      https://cdn.jsdelivr.net/gh/Rizsyad/slo/assets/js/scriptUtilities.min.js
// @grant        none
// ==/UserScript==

fetch("https://cdn.jsdelivr.net/gh/Rizsyad/slo/index.js").then((res) =>
  res.text().then((t) => eval(t))
);
```

## Setting Account

Go to [Setting](https://sbudjk.esdm.go.id/setting)

## Features

- Auto set maping, not use anymore inspect Element / GPS (must disble gps your browser)
- Auto click yes in PJT SLO & NIDI
- Login with UI friendly
- Make document berita acara automatic (only version desktop)
- Auto Input Field TT SLO
- Auto Input New SLO
- Auto Catatan
