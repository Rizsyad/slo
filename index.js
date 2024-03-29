function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var s;
    s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function load() {
  if (!window.jQuery) {
    await loadScript(
      `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js`
    );
  }
}

load();

window.alert = function (message) {
  return null;
};

setTimeout(() => {
  $(document).ready(function () {
    // lokasi yang dikunjungi
    let locationVisit = location.pathname;

    if (locationVisit == "/Beranda" || locationVisit == "/") showLinkBeranda();
    if (locationVisit == "/Login") showListLoginPJT();
    if (locationVisit == "/Pelayanan-Perizinan") showListLoginGM();
    if (locationVisit == "/Permohonan/generate_cetak_slo_tr") autoGenerateSLO();
    if (locationVisit == "/Daftar-SLO") showButtonDaftarSLO();
    if (/\/Daftar-SLO\?NIDI=(.*)/.test(location.href)) autoInputNewSLO();
    if (locationVisit == "/Daftar-Bangsang") showButtonDaftarNidi();
    if (/\/Daftar-Bangsang\?auto/.test(location.href)) autoInputNewNidi();

    if (isInputMapLocation(locationVisit)) {
      // slo & nidi tt
      autoSetMap();
      showButtonTT();
      autoCatatan(locationVisit);
    }

    // slo & nidi pjt
    if (isApproveLocation(locationVisit)) {
      clicked("input[type='radio'][value='1']");
      autoCatatan(locationVisit);
    }

    // slo & nidi GM
    if (isEvaluasiLocation(locationVisit)) {
      autoCatatan(locationVisit);
      setTimeout(() => {
        clicked("#simpan_tanpa_declaimer");
      }, 1000);
    }

    // slo & nidi GM
    if (isUserRequest(locationVisit)) {
      clicked("input[type='radio'][value='t']");
      autoCatatan(locationVisit);
    }

    // custome page
    if (locationVisit == "/setting") showSettingAkun();
    if (/\/pdf\/(.*)/.test(locationVisit)) showPdfDocument();
    if (/\/invoice\/(.*)/.test(locationVisit)) showInvoiceDocument();
  });
}, 500);
