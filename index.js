$(document).ready(function () {
  // lokasi yang dikunjungi
  let locationVisit = location.pathname;

  if (locationVisit == "/Beranda" || locationVisit == "/") showLinkBeranda();
  if (locationVisit == "/Login") showListLoginPJT();
  if (locationVisit == "/Pelayanan-Perizinan") showListLoginGM();

  // slo & midi tt
  if (isInputMapLocation(locationVisit)) {
    autoSetMap();
    showButtonTT();
    autoCatatan(locationVisit);
  }

  // slo & midi pjt
  if (isApproveLocation(locationVisit)) {
    clicked("input[type='radio'][value='1']");
    autoCatatan(locationVisit);
  }

  // custome page
  if (locationVisit == "/setting") showSettingAkun();
  if (/\/pdf\/(.*)/.test(locationVisit)) showPdfDocument();
});
