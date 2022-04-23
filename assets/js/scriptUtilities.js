const setInputValue = (select, value) => $(select).val(value);
const setInputSelected = (select, value) =>
  $(`select${select} option[value="${value}"]`).attr("selected", "selected");
const setInputSelectedRegex = (select, value) =>
  $(`select${select} option[value^="${value}"]`).attr("selected", "selected");
const getInputValue = (select) => $(select).val();
const setElement = (select, body) => $(select).append(body);
const setElementAfter = (select, body) => $(select).after(body);
const setElementFirst = (select, body) => $(select).prepend(body);
const setLocalStorage = (key, value) => window.localStorage.setItem(key, value);
const getLocalStorage = (key) => window.localStorage.getItem(key);
const arrayData = (role) => JSON.parse(getLocalStorage(role)) || [];
const clicked = (select) => $(select).click();

const AutoSetSLO = (id) => {
  let daya = $("table tr:eq(5) th:last").text();
  let ampre = daya.replace("VA", "").trim();
  let jumlahSklarOrFitting = ampre >= 1300 ? (ampre >= 3500 ? "7" : "6") : "4";
  let kapasitasArus = ampre >= 3500 && ampre <= 4400 ? "16" : "6";

  const setWarnaPe = () => setInputSelected(id, "Kuning hijau");
  const setWarnaPahsa = () => setInputSelected(id, "Hitam");
  const setWarnaNetral = () => setInputSelected(id, "Biru");
  const setKeperluan = () => setInputSelected(id, "Ada");
  const setKesesuaian = () => setInputSelected(id, "Sesuai");
  const setPilihan = () => setInputSelected(id, "Ya");
  const setJenis = () => setInputSelected(id, "Biasa");
  const setRuangan = () => setInputSelected(id, "Dalam ruangan");
  const setDayaTersambung = () => setInputSelectedRegex(id, `${daya} /`);
  const setPhasa = () => {
    let getPhasa = getInputValue("#inputan_7780_44380 option:selected");
    let selectPhasa = getPhasa.split("/")[1].trim().replace("p", "P");
    setInputSelected("#inputan_7780_44381", selectPhasa);
  };
  const setGawaiProteksi = () => setInputSelected(id, "MCB");
  const setTipePhb = () => setInputSelected(id, "PHB utama");
  const setBagianTersambungGawaiProteksi = () => setInputSelected(id, "Phasa");
  const setTT = () => setInputSelected(id, "TT");
  const setBC = () => setInputSelected(id, "BC");
  const setFullTembaga = () => setInputSelected(id, "Full tembaga");
  const setSaluranUtama = () => setInputSelected(id, "Saluran utama");
  const setNYM = () => setInputSelected(id, "NYM");
  const setMenempel = () => setInputSelected(id, "Menempel");
  const setRapi = () => setInputSelected(id, "Rapi");
  const set1Phasa = () => setInputSelected(id, "1 Phasa");
  const setKiri = () => setInputSelected(id, "Kiri");
  const setSaklarBiasa = () => setInputSelected(id, "Saklar biasa");
  const setPemutusPhasa = () => setInputSelected(id, "Pemutus Phasa");
  const setPhasaNetral = () => setInputSelected(id, "Phasa Netral");
  const setPerusahan = () =>
    setInputSelected(id, "PT Perusahaan Listrik Negara (Persero)");
  const setJumlah3 = () => setInputValue(id, "3");
  const setEterna = () => setInputValue(id, "Eterna");
  const setJumlahSaluranPanel = () => setInputValue(id, "1");
  const setMerekBroco = () => setInputValue(id, "Broco");
  const setUkuran60 = () => setInputValue(id, "60");
  const setUkuran400 = () => setInputValue(id, "400");
  const setJumlahSklarOrFitting = () => setInputValue(id, jumlahSklarOrFitting);
  const setKodePhb = () => setInputValue(id, "MCB");
  const setKapasitasArus = () => setInputValue(id, kapasitasArus);

  let ObjFieldSLO = {
    "#inputan_7779_44370": setWarnaPe,
    "#inputan_7779_44372": setWarnaPe,
    "#inputan_7779_44374": setWarnaPe,
    "#inputan_7778_44352": setWarnaPe,
    "#inputan_7781_44403": setWarnaPe,
    "#inputan_7778_44354": setWarnaPahsa,
    "#inputan_7781_44404": setWarnaPahsa,
    "#inputan_7782_44420": setWarnaPahsa,
    "#inputan_7778_44356": setWarnaNetral,
    "#inputan_7781_44405": setWarnaNetral,
    "#inputan_7782_44421": setWarnaNetral,
    "#inputan_7777_44334": setKeperluan,
    "#inputan_7777_44337": setKeperluan,
    "#inputan_7777_44340": setKeperluan,
    "#inputan_7777_44343": setKeperluan,
    "#inputan_7778_44351": setKeperluan,
    "#inputan_7778_44353": setKeperluan,
    "#inputan_7778_44355": setKeperluan,
    "#inputan_7779_44369": setKeperluan,
    "#inputan_7779_44371": setKeperluan,
    "#inputan_7779_44373": setKeperluan,
    "#inputan_7781_44400": setKeperluan,
    "#inputan_7781_44402": setKeperluan,
    "#inputan_7782_44416": setKeperluan,
    "#inputan_7783_44425": setKeperluan,
    "#inputan_7779_44368": setPilihan,
    "#inputan_7780_44393": setPilihan,
    "#inputan_7777_44335": setKesesuaian,
    "#inputan_7777_44338": setKesesuaian,
    "#inputan_7777_44341": setKesesuaian,
    "#inputan_7777_44344": setKesesuaian,
    "#inputan_7778_44357": setKesesuaian,
    "#inputan_7778_44361": setKesesuaian,
    "#inputan_7778_44363": setKesesuaian,
    "#inputan_7780_44384": setKesesuaian,
    "#inputan_7780_44389": setKesesuaian,
    "#inputan_7780_44390": setKesesuaian,
    "#inputan_7781_44407": setKesesuaian,
    "#inputan_7781_44408": setKesesuaian,
    "#inputan_7782_44418": setKesesuaian,
    "#inputan_7782_44419": setKesesuaian,
    "#inputan_7783_44426": setKesesuaian,
    "#inputan_7783_44444": setKesesuaian,
    "#inputan_7783_44427": setKesesuaian,
    "#inputan_7781_44396": setJenis,
    "#inputan_7781_44399": setJenis,
    "#inputan_7781_44397": setRuangan,
    "#inputan_7782_44413": setRuangan,
    "#inputan_7783_44424": setRuangan,
    "#inputan_7778_44346": setJumlahSaluranPanel,
    "#inputan_7778_44347": setJumlahSaluranPanel,
    "#inputan_7778_44346": setJumlahSaluranPanel,
    "#inputan_7778_44359": setJumlahSaluranPanel,
    "#inputan_7780_44382": setJumlahSaluranPanel,
    "#inputan_7780_44383": setJumlahSaluranPanel,
    "#inputan_7781_44394": setJumlahSaluranPanel,
    "#inputan_7781_44395": setJumlahSaluranPanel,
    "#inputan_7782_44411": setJumlahSaluranPanel,
    "#inputan_7782_44412": setJumlahSaluranPanel,
    "#inputan_7778_44433": setMerekBroco,
    "#inputan_7781_44439": setMerekBroco,
    "#inputan_7782_44441": setMerekBroco,
    "#inputan_7783_44443": setMerekBroco,
    "#inputan_7778_44350": setUkuran60,
    "#inputan_7779_44376": setUkuran60,
    "#inputan_7781_44401": setUkuran60,
    "#inputan_7782_44417": setUkuran60,
    "#inputan_7779_44378": setUkuran400,
    "#inputan_7780_44388": setUkuran400,
    "#inputan_7784_44430": setUkuran400,
    "#inputan_7782_44410": setJumlahSklarOrFitting,
    "#inputan_7783_44423": setJumlahSklarOrFitting,
    "#inputan_7780_44380": setDayaTersambung,
    "#inputan_7780_44381": setPhasa,
    "#inputan_7778_44358": setGawaiProteksi,
    "#inputan_7778_44349": setTipePhb,
    "#inputan_7778_44362": setBagianTersambungGawaiProteksi,
    "#inputan_7779_44367": setTT,
    "#inputan_7779_44435": setBC,
    "#inputan_7779_44375": setFullTembaga,
    "#inputan_7780_44385": setSaluranUtama,
    "#inputan_7780_44386": setNYM,
    "#inputan_7780_44391": setMenempel,
    "#inputan_7780_44392": setRapi,
    "#inputan_7781_44398": set1Phasa,
    "#inputan_7781_44406": setKiri,
    "#inputan_7782_44414": setSaklarBiasa,
    "#inputan_7782_44415": setPemutusPhasa,
    "#inputan_7784_44429": setPhasaNetral,
    "#inputan_7777_88956": setPerusahan,
    "#inputan_7780_44387": setJumlah3,
    "#inputan_7780_44437": setEterna,
    "#inputan_7778_44360": setKapasitasArus,
    "#inputan_7778_44348": setKodePhb,
  };

  return ObjFieldSLO[id]();
};
