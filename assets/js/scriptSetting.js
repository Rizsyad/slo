$(document).ready(function () {
  const setLocalStorage = (key, value) =>
    window.localStorage.setItem(key, value);
  const getLocalStorage = (key) => window.localStorage.getItem(key);
  const arrayData = (role) => JSON.parse(getLocalStorage(role)) || [];
  const setInputValue = (select, value) => $(select).val(value);
  const getInputValue = (select) => $(select).val();

  const getAkun = (role, id) => {
    const getData = JSON.parse(getLocalStorage(role));
    const akun = getData.find((o) => o.id == id);

    return akun;
  };

  const createList = (role, nama, username, password, id) => {
    const oldData = arrayData(role);
    let objData;
    let newList;

    if (id) {
      newList = oldData.map((item) => {
        if (item.id == id) {
          objData = {
            id,
            nama,
            username,
            password,
          };
          return objData;
        }

        return item;
      });
    } else {
      objData = {
        id: Math.round(Math.random() * 100),
        nama,
        username,
        password,
      };
      newList = [...oldData, objData];
    }

    return newList;
  };

  const newAkun = (role, nama, username, password, id) => {
    const listData = createList(role, nama, username, password, id);
    return setLocalStorage(role, JSON.stringify(listData));
  };

  const deleteAkun = (role, id) => {
    const oldData = arrayData(role);
    const filterData = oldData.filter((item) => item.id !== parseInt(id));
    return setLocalStorage(role, JSON.stringify(filterData));
  };

  const createRow = (role, select) => {
    const data = arrayData(role);
    let rowData = "";

    if (data.length == 0) {
      return $(select).append(
        `<tr class="text-center"><td colspan="5">Data ${role.toUpperCase()} tidak ada</td></tr>`
      );
    }

    data.forEach((el, index) => {
      rowData += `<tr>
            <td>${index + 1}</td>
            <td>${el.nama}</td><td>${el.username}</td>
            <td>${el.password}</td>
            <td>
              <button class="btn btn-warning btn-sm my-1 edit-data" data-role="${role}" data-id="${
        el.id
      }">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn btn-danger btn-sm my-1 remove-data" data-nama="${
                el.nama
              }" data-role="${role}" data-id="${el.id}">
                <i class="fa-solid fa-trash"></i>
              </button></td>
          </tr>`;
    });

    $(select).append(rowData);
  };

  createRow("pjt", "#data-pjt");
  createRow("tt", "#data-tt");
  createRow("gm", "#data-gm");

  // add and edit
  const clearInput = () => {
    setInputValue("#role", "");
    setInputValue("#nama", "");
    setInputValue("#username", "");
    setInputValue("#password", "");
    setInputValue("#id", "");
  };

  $(".add-data").on("click", function () {
    clearInput();
    const roleData = $(this).attr("data-role");
    setInputValue("#role", roleData);
    $("#add-modal").modal("show");
    $(".modal-title").text(`Add ${roleData.toUpperCase()}`);
  });

  $("#save-data").on("click", function () {
    const arr = ["role", "nama", "username", "password"];

    arr.map((vars) => {
      window[vars] = getInputValue(`#${vars}`);
    });

    const idEdit = getInputValue("#id");
    const isModeEdit = idEdit !== "";
    const kataAlert = isModeEdit ? "Diedit" : "Ditambah";

    newAkun(role, nama, username, password, idEdit);

    Swal.fire("Sukses", `Akun Berhasil ${kataAlert}`, "success").then(() => {
      location.reload();
    });
  });

  $(".edit-data").on("click", function () {
    let roleData = $(this).attr("data-role");
    let idData = $(this).attr("data-id");

    const dataAkun = getAkun(roleData, idData);

    let { nama, username, password } = dataAkun;

    setInputValue("#role", roleData);
    setInputValue("#nama", nama);
    setInputValue("#username", username);
    setInputValue("#password", password);
    setInputValue("#id", idData);

    $("#add-modal").modal("show");
    $(".modal-title").text(`Edit ${roleData.toUpperCase()}`);
  });

  $(".remove-data").on("click", function () {
    let roleData = $(this).attr("data-role");
    let idData = $(this).attr("data-id");
    let namaData = $(this).attr("data-nama");

    Swal.fire({
      title: "Apakah kamu yakin?",
      html: `ingin menghapus akun ${roleData.toUpperCase()} dengan nama <b>${namaData}</b>? <br/> Anda tidak akan dapat mengembalikan ini!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAkun(roleData, idData);

        Swal.fire({
          title: "Dihapus!",
          html: `Akun ${roleData.toUpperCase()} dengan nama <b>${namaData}</b> telah dihapus.`,
          icon: "success",
        }).then(() => {
          location.reload();
        });
      }
    });
  });

  $(".link-buat").on("click", function () {
    const arr = ["namapemohon", "alamat", "provinsi", "kota", "tempat"];

    arr.map((vars) => {
      window[vars] = getInputValue(`#${vars}`);
    });

    if (!namapemohon && !alamat && !provinsi && !kota && !tempat) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Data tidak boleh ada yang kosong!",
      });
      return;
    }

    let url = window.location.href;
    let pdfUrl = `pdf/?nama=${namapemohon}&alamat=${alamat}&provinsi=${provinsi}&kota=${kota}&tempat=${tempat}`;

    window.open(url.replace("setting", pdfUrl), "_blank");
  });
});
