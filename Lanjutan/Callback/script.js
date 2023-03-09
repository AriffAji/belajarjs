//! CallBack
//! Synchronus Callback

// function halo(nama) {
//   alert(`halo ${nama}`);
// }
// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama : ");
//   callback(nama);
// }

// tampilkanPesan(halo);
// tampilkanPesan((n) => alert(`Halo, ${n}`));

//! Asynchronus Callback

// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }
// console.log("mulai");
// getDataMahasiswa(
//   "mahasiswa.json",
//   (result) => {
//     console.log(JSON.parse(result));
//     const mhs = JSON.parse(result);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("selesai");

//! Asynchronus Callback menggunakan jquery
console.log("mulai");
$.ajax({
  url: "mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
