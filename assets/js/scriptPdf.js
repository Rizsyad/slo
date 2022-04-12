var pdf = new jsPDF("p", "pt", "a4");

$(document).ready(function () {
  var formatTanggal = moment().locale("id").format("LL");
  var replaceTanggal = formatTanggal.replace(/ /gm, "/");
  var url = window.href;
  var array = ["nama", "alamat", "provinsi", "kota", "tempat"];

  const setInputHtml = (select, value) => $(select).html(value);

  array.map((variabel) => {
    window[variabel] = purl(url).param(variabel);
  });

  setInputHtml("#tanggal", replaceTanggal);
  setInputHtml(".tanggal", formatTanggal);

  if (!nama && !alamat && !provinsi && !kota && !tempat) {
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

  pdf.addHTML($("#wrapper").get(0), function () {
    pdf.save(`Berita Acara ${nama}.pdf`);
  });
});
