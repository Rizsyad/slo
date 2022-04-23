$(document).ready(function () {
  const setInputValue = (select, value) => $(select).val(value);
  const setInputSelected = (select, value) =>
    $(`select${select} option[value="${value}"]`).attr("selected", "selected");
  const setInputSelectedRegex = (select, value) =>
    $(`select${select} option[value^="${value}"]`).attr("selected", "selected");
  const getInputValue = (select) => $(select).val();
  const setElement = (select, body) => $(select).append(body);
  const setElementAfter = (select, body) => $(select).after(body);
  const setElementFirst = (select, body) => $(select).prepend(body);
  const setLocalStorage = (key, value) =>
    window.localStorage.setItem(key, value);
  const getLocalStorage = (key) => window.localStorage.getItem(key);
  const arrayData = (role) => JSON.parse(getLocalStorage(role)) || [];
  const clicked = (select) => $(select).click();

  const AutoSetSLO = (id) => {
    let daya = $("table tr:eq(5) th:last").text();
    let ampre = daya.replace("VA", "").trim();
    let jumlahSklarOrFitting =
      ampre >= 1300 ? (ampre >= 3500 ? "7" : "6") : "4";
    let kapasitasArus = ampre >= 3500 && ampre <= 4400 ? "16" : "6";

    switch (id) {
      // warna PE
      case "#inputan_7779_44370":
      case "#inputan_7779_44372":
      case "#inputan_7779_44374":
      case "#inputan_7778_44352":
      case "#inputan_7781_44403":
        setInputSelected(id, "Kuning hijau");
        break;
      // warna pharsa
      case "#inputan_7778_44354":
      case "#inputan_7781_44404":
      case "#inputan_7782_44420":
        setInputSelected(id, "Hitam");
        break;
      // warna netral
      case "#inputan_7778_44356":
      case "#inputan_7781_44405":
      case "#inputan_7782_44421":
        setInputSelected(id, "Biru");
        break;
      case "#inputan_7777_44334":
      case "#inputan_7777_44337":
      case "#inputan_7777_44340":
      case "#inputan_7777_44343":
      case "#inputan_7778_44351":
      case "#inputan_7778_44353":
      case "#inputan_7778_44355":
      case "#inputan_7779_44369":
      case "#inputan_7779_44371":
      case "#inputan_7779_44373":
      case "#inputan_7781_44400":
      case "#inputan_7781_44402":
      case "#inputan_7782_44416":
      case "#inputan_7783_44425":
        setInputSelected(id, "Ada");
        break;
      case "#inputan_7777_44335":
      case "#inputan_7777_44338":
      case "#inputan_7777_44341":
      case "#inputan_7777_44344":
      case "#inputan_7778_44357":
      case "#inputan_7778_44361":
      case "#inputan_7778_44363":
      case "#inputan_7780_44384":
      case "#inputan_7780_44389":
      case "#inputan_7780_44390":
      case "#inputan_7781_44407":
      case "#inputan_7781_44408":
      case "#inputan_7782_44418":
      case "#inputan_7782_44419":
      case "#inputan_7783_44426":
      case "#inputan_7783_44444":
      case "#inputan_7783_44427":
        setInputSelected(id, "Sesuai");
        break;
      case "#inputan_7779_44368":
      case "#inputan_7780_44393":
        setInputSelected(id, "Ya");
        break;
      case "#inputan_7781_44396":
      case "#inputan_7781_44399":
        setInputSelected(id, "Biasa");
        break;
      case "#inputan_7781_44397":
      case "#inputan_7782_44413":
      case "#inputan_7783_44424":
        setInputSelected(id, "Dalam ruangan");
        break;
      case "#inputan_7778_44346":
      case "#inputan_7778_44347":
      case "#inputan_7778_44346":
      case "#inputan_7778_44359":
      case "#inputan_7780_44382":
      case "#inputan_7780_44383":
      case "#inputan_7781_44394":
      case "#inputan_7781_44395":
      case "#inputan_7782_44411":
      case "#inputan_7782_44412":
        setInputValue(id, "1");
        break;
      case "#inputan_7778_44433":
      case "#inputan_7781_44439":
      case "#inputan_7782_44441":
      case "#inputan_7783_44443":
        setInputValue(id, "Broco");
        break;
      case "#inputan_7778_44350":
      case "#inputan_7779_44376":
      case "#inputan_7781_44401":
      case "#inputan_7782_44417":
        setInputValue(id, "60");
        break;
      case "#inputan_7779_44378":
      case "#inputan_7780_44388":
      case "#inputan_7784_44430":
        setInputValue(id, "400");
        break;
      case "#inputan_7782_44410":
      case "#inputan_7783_44423":
        setInputValue(id, jumlahSklarOrFitting);
        break;
      case "#inputan_7780_44380":
        setInputSelected(id, `${daya} /`);
        break;
      case "#inputan_7780_44381":
        // get phasa automatic
        let getPhasa = getInputValue("#inputan_7780_44380 option:selected");
        let selectPhasa = getPhasa.split("/")[1].trim().replace("p", "P");
        setInputSelected("#inputan_7780_44381", selectPhasa);
        break;
      case "#inputan_7778_44358":
        setInputSelected(id, "MCB");
        break;
      case "#inputan_7778_44349":
        setInputSelected(id, "PHB utama");
        break;
      case "#inputan_7778_44362":
        setInputSelected(id, "Phasa");

      case "#inputan_7779_44367":
        setInputSelected(id, "TT");
        break;
      case "#inputan_7779_44435":
        setInputSelected(id, "BC");
        break;
      case "#inputan_7779_44375":
        setInputSelected(id, "Full tembaga");
        break;
      case "#inputan_7780_44385":
        setInputSelected(id, "Saluran utama");
        break;
      case "#inputan_7780_44386":
        setInputSelected(id, "NYM");
        break;
      case "#inputan_7780_44391":
        setInputSelected(id, "Menempel");
        break;
      case "#inputan_7780_44392":
        setInputSelected(id, "Rapi");
        break;
      case "#inputan_7781_44398":
        setInputSelected(id, "1 Phasa");
        break;
      case "#inputan_7781_44406":
        setInputSelected(id, "Kiri");
        break;
      case "#inputan_7782_44414":
        setInputSelected(id, "Saklar biasa");
        break;
      case "#inputan_7782_44415":
        setInputSelected(id, "Pemutus Phasa");
        break;
      case "#inputan_7784_44429":
        setInputSelected(id, "Phasa dengan Netral");
        break;
      case "#inputan_7777_88956":
        setInputSelected(id, "PT Perusahaan Listrik Negara (Persero)");
        break;

      case "#inputan_7780_44387":
        setInputValue(id, "3");
        break;
      case "#inputan_7780_44437":
        setInputValue(id, "Eterna");
        break;
      case "#inputan_7778_44360":
        setInputValue(id, kapasitasArus);
        break;
      case "#inputan_7778_44348":
        setInputValue(id, "MCB");
        break;
      default:
        break;
    }
  };

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
