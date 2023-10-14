var pdf = new jsPDF("p", "pt", "a4");

$(document).ready(function () {
  var formatTanggal = moment().locale("id").format("LL");
  var url = window.href;
  var array = ["nama", "alamat", "jumlah", "slo"];

  const hargaSLO = {
    450: 40000,
    900: 60000,
    1300: 95000,
    2200: 110000,
    3500: 105000,
    4400: 132000,
    5500: 165000,
    6600: 198000,
    7700: 231000,
    10600: 265000,
    11000: 275000,
    13200: 330000,
    16500: 412500,
    23000: 575000,
    33000: 660000,
    41500: 830000,
    53000: 1060000,
    66000: 1320000,
    82500: 1237000,
    105000: 1575000,
    131000: 1965000,
    147000: 2205000,
    164000: 2460000,
    197000: 2955000,
  };

  const setInputHtml = (select, value) => $(select).html(value);

  array.map((variabel) => {
    window[variabel] = purl(url).param(variabel);
  });

  const hargaSlo = hargaSLO[slo];

  setInputHtml(".tanggal", formatTanggal);
  setInputHtml(
    ".harga",
    toRupiah(hargaSlo, {
      replaceZeroDecimals: true,
      formal: false,
    })
  );
  setInputHtml(
    ".total",
    toRupiah(hargaSlo * jumlah, {
      replaceZeroDecimals: true,
      formal: false,
    })
  );

  if (!nama && !alamat && !jumlah && !slo) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Data tidak boleh ada yang kosong!",
    });
    return;
  }

  array.map((data) => {
    setInputHtml(`.${data}`, eval(data));
  });

  pdf.addHTML($("body").get(0), function () {
    pdf.save(`Invoice ${nama}.pdf`);
  });
});
