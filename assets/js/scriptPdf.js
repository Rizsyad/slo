var pdf = new jsPDF("p", "pt", "a4");

$(document).ready(function () {
  var formatTanggal = moment().locale("id").format("LL");
  var replaceTanggal = formatTanggal.replace(/ /gm, "/");
  var url = window.href;
  var array = ["nama", "alamat", "provinsi", "kota"];

  array.map((variabel) => {
    window[variabel] = purl(url).param(variabel);
  });

  if (!nama && !alamat && !provinsi && !kota) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Data tidak boleh ada yang kosong!",
    });
    return;
  }

  $("#tanggal").html(replaceTanggal);
  $(".tanggal").html(formatTanggal);
  $(".tempat").html(tempat || "Bogor");

  array.map((data) => {
    $(`.${data}`).html(eval(data));
  });

  pdf.addHTML($("#wrapper").get(0), function () {
    pdf.save(`Berita Acara ${nama}.pdf`);
  });
});
