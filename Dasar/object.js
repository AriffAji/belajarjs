// !! Object Literal !!

// var mahasiswa = {
//   nama: "Muhammad Arif Purnama Aji",
//   lulus: true,
//   IPSemester: [2.9, 3.1, 3.25, 2.88, 4.0],
//   IPKumulatif: function () {
//     var total = 0;
//     var ips = this.IPSemester;
//     for (var i = 0; i < ips.length; i++) {
//       total += ips[i];
//     }
//     return total / ips.length;
//   },
// };
// console.log(mahasiswa.IPKumulatif());

// var orang = {
//   nama: "Muhammad Arif Purnama Aji",
//   umur: 23,
//   pekerjaan: "Mahasiswa",
//   alamat: {
//     jalan: "JL. M.H Thamrin",
//     Kelurahan: "Giri",
//     Kecamatan: "Giri",
//     Kabupaten: "Banyuwangi",
//   },
//   sapa: function () {
//     return (
//       "Hi, Perkenalkan Nama saya " + this.nama + " ,saya berumur " + this.umur + " , Saya seorang " + this.pekerjaan + " Saya Tinggal di " + this.alamat.jalan + " Kelurahan " + this.alamat.Kelurahan
//     );
//   },
// };
// console.log(orang.sapa());

// ? Membuat Object dengan function declaration

// function objectMahasiswa(nama, nim, email, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nim = nim;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }

// var mahasiswa = objectMahasiswa("ArifAji", 361955401112, "ArifNauval1530@gmail.com", "Teknik Informatika");

// ? Membuat Object dengan Constructor

// function Mahasiswa(nama, nim, email, jurusan) {
//   this.nama = nama;
//   this.nim = nim;
//   this.email = email;
//   this.jurusan = jurusan;
// }

// var mhs4 = new Mahasiswa("ArifAji", 361955401112, "ArifNauval1530@gmail.com", "Teknik Informatika");

// ** cara cara membuat object
// ? 1. Function declaration
function halo() {
  console.log("Halo!");
}
halo();

// ?2. Object Literal
var obj = {};
obj.halo1 = function () {
  console.log("Halo!!");
};
obj.halo1();

// ? 3. Constructor
function Halo2() {
  console.log("Halo!!!");
}
new Halo2();
