// ==UserScript==
// @name         Auto SLO INKINDO
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  This For Make Auto SLO
// @author       Rizsyad AR
// @match        https://sbudjk.esdm.go.id/*
// @icon         https://www.esdm.go.id/assets/imagecache/contentPictureThumb/xprofil-arti-logo-cszkz2w.png,qr=t2w869d.pagespeed.ic.dW6bW37Apo.png
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://pastebin.com/raw/wuqK4PYS
// @grant        none
// ==/UserScript==

$(document).ready(function () {
  const autoWordCatatan = (from, to) =>
    `Pengerjaan ${from} Diterima, Tindak Lanjuti Ke ${to} Untuk Pengecekan Laporan Hasil Pengerjaan ${from}.`;

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

  window.autoSetFieldTT = () => {
    let listIdInput = $(".modal form :input:visible");

    listIdInput.each(function () {
      if (!this.id) return;
      AutoSetSLO(`#${this.id}`);
    });
  };

  const menuList = (role) => {
    let dataAkun = arrayData(role);
    let roleUpper = role.toUpperCase();

    let listMenu = `<div class="col-md-12"><ul class="list-group" style="margin-top: 1rem">
    <li class="list-group-item active">Pilih ${roleUpper}</li>`;

    dataAkun.forEach((data) => {
      listMenu += `<li class="list-group-item auto-login" onclick="autoSetFieldLogin('${role}','${data.username}','${data.password}')" style="cursor: pointer;">${data.nama}</li>`;
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

  const showButtonTT = () => {
    setElementFirst(
      "#Modal-Tambah-Data-Mata-Hasil .modal-body",
      `<button type="button" class="btn btn-primary btn-sm mb-3" onclick="autoSetFieldTT();">Auto Input</button>`
    );
  };

  const isInputMapLocation = (locationVisit) => {
    return (
      /\/Permohonan\/lhpp_slo_tr\/(.*)/.test(locationVisit) ||
      /\/Permohonan\/lhpp\/(.*)/.test(locationVisit)
    );
  };

  const isApproveLocation = (locationVisit) => {
    return (
      /\/Permohonan\/pengesahan_lhpp_slo_tr\/(.*)/.test(locationVisit) ||
      /\/Permohonan\/pengesahan_lhpp\/(.*)/.test(locationVisit)
    );
  };

  const autoCatatan = (lokasi) => {
    if (isInputMapLocation(lokasi)) {
      return setInputValue(
        "#catatan",
        autoWordCatatan("Tenaga Teknik", "Penanggung Jawab Teknik")
      );
    }

    if (isApproveLocation(locationVisit)) {
      return setInputValue(
        "#catatan",
        autoWordCatatan("Penanggung Jawab Teknik", "GM")
      );
    }
  };

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
