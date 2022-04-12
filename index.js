const setInputValue = (select, value) => $(select).val(value);
const setElement = (select, body) => $(select).append(body);
const setElementAfter = (select, body) => $(select).after(body);
const getLocalStorage = (key) => window.localStorage.getItem(key);
const arrayData = (role) => JSON.parse(getLocalStorage(role)) || [];

$(document).ready(function () {
  const autoSetMap = () => {
    const latTable = $("#profile1 table tr:nth-child(9) th:last").text();
    const longTable = $("#profile1 table tr:nth-child(10) th:last").text();

    setInputValue("#latitude", latTable);
    setInputValue("#longitude", longTable);
  };

  window.autoSetFieldLogin = (role = "", username, password) => {
    if (role == "pjt" || role == "tt") {
      setInputValue("#username", username);
      setInputValue("#pass", password);
    } else {
      setInputValue("#email", username);
      setInputValue("#userpass", password);
    }

    $("#btn-login").click();
  };

  const menuList = (role) => {
    let dataAkun = arrayData(role);
    let roleUpper = role.toUpperCase();

    let listMenu = `<div class="col-md-12"><ul class="list-group" style="margin-top: 1rem">
    <li class="list-group-item active">Pilih ${roleUpper}</li>`;

    dataAkun.forEach((data) => {
      listMenu += `<li class="list-group-item auto-login" onclick="autoSetFieldLogin('${role}','${data.username}','${data.password}')" >${data.nama}</li>`;
    });

    listMenu += "</ul></div>";

    return listMenu;
  };

  const showListLoginPJT = () => {
    $(".form-group").addClass("d-none");
    $("#btn-login").addClass("d-none");

    const listPJT = menuList("pjt");
    const listTT = menuList("tt");
    const list = `${listPJT} ${listTT}`;

    return setElementAfter(".row:last .col-md-12:last", list);
  };

  const showListLoginGM = () => {
    $("#btn-login").addClass("hidden");
    $("input").addClass("hidden");
    $("label").addClass("hidden");

    const list = menuList("gm");
    return setElementAfter("#formValidate div > :nth-child(7)", list);
  };

  const showLinkBeranda = () => {
    const getTextLink = $(".hvr-link").text();

    if (/Halo, (.*)/.test(getTextLink)) return;

    const link = `<li><a class="hvr-link" href="https://sbudjk.esdm.go.id/Login">Login Sebagai PJT/TT</a></li>
    <li><a class="hvr-link" href="https://sbudjk.esdm.go.id/Pelayanan-Perizinan">Login Sebagai GM/biasa</a></li>`;

    return setElement(".navigation", link);
  };

  const showSettingAkun = () => {
    fetch("https://raw.githubusercontent.com/Rizsyad/slo/main/setting.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (string) {
        document.open("text/html", "replace");
        document.write(string);
        document.close();
      });
  };

  const showPdfDocument = () => {
    fetch("https://raw.githubusercontent.com/Rizsyad/slo/main/pdf.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (string) {
        document.open("text/html", "replace");
        document.write(string);
        document.close();
      });
  };

  // lokasi yang dikunjungi
  let locationVisit = location.pathname;

  if (locationVisit == "/Beranda" || locationVisit == "/") showLinkBeranda();
  if (locationVisit == "/Login") showListLoginPJT();
  if (locationVisit == "/Pelayanan-Perizinan") showListLoginGM();

  if (
    /\/Permohonan\/lhpp_slo_tr\/(.*)/.test(locationVisit) ||
    /\/Permohonan\/lhpp\/(.*)/.test(locationVisit)
  )
    autoSetMap();

  if (
    /\/Permohonan\/pengesahan_lhpp_slo_tr\/(.*)/.test(locationVisit) ||
    /\/Permohonan\/pengesahan_lhpp\/(.*)/.test(locationVisit)
  )
    $("input[type='radio'][value='1']").click();

  // custome page
  if (locationVisit == "/setting") showSettingAkun();
  if (/\/pdf\/(.*)/.test(locationVisit)) showPdfDocument();
});
