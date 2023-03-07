// ! Membuat Object

// * 1 Literal
// let mahasiswa = {
//   nama: "ArifAji",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`selamat makan ${this.nama}`);
//   },
// };

// ? simple, jika objectnya banyak akan memakan banyak resource karena mendeklariskan secara berulang2, tidak efektif

// * 2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama}`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Bermain!`);
//   };
//   return mahasiswa;
// }
// let aji = Mahasiswa("Aji", 20);
// let naufal = Mahasiswa("naufal", 20);

// ? dibelakang layar function di dalamnya tetap dibuat pada setiap object hampir mirip dengan literal
// ? yang lebih efektif di bawah ini : dan kekurangnya kita harus maintenance 2 function sekaligus . jika tidak ingin seperti itu makan dapat menggunakan object.create

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama}`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Bermain!`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat Tidur! `);
//   },
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }
// let aji = Mahasiswa("Aji", 20);
// let naufal = Mahasiswa("naufal", 20);

// * 3. Constructor Function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama}`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Bermain!`);
//   };
// }
// let aji = new Mahasiswa("Aji", 20);

// ? Menggunakan prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// ! dibelakang layar js akan memanggil "let this = object create(Mahasiswa.prototype )" -> yang nanti di console akan menampilkan prototype
// }
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   console.log(`selamat makan ${this.nama}`);
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   console.log(`Halo ${this.nama}, Selamat Bermain!`);
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   console.log(`Halo ${this.nama}, Selamat Tidur! `);
// };

// let aji = new Mahasiswa("Aji", 20);

// ? versi menggunakan class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//   makan(porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama}`);
//   }
//   main(jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Bermain!`);
//   }
//   tidur(jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat Tidur! `);
//   }
// }

// let aji = new Mahasiswa("Aji", 10);
