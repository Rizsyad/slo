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
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

fetch("https://raw.githubusercontent.com/Rizsyad/slo/main/index.js").then(
  (res) => res.text().then((t) => eval(t))
);
```

## Setting Account

Go to [Setting](https://sbudjk.esdm.go.id/setting)

## Features

- Auto set maping, not use anymore inspect Element / GPS (must disble gps your browser)
- Auto click yes in PJT
- Login with UI friendly
- Make document berita acara automatic (only version desktop)
