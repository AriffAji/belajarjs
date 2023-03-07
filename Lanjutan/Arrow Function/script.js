// ! Arrow function untuk meringkas function expression

// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama("Aji"));

// const hello = () => `Halo World`;
// console.log(hello());

// const perkenalan = (nama, umur) => `Halo, nama saya ${nama}. umur saya ${umur}`;
// console.log(perkenalan("Aji", 23));

// let mahasiswa = ["Arif", "Aji", "HadiR"];
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.table(jumlahHuruf);
// let jumlahHuruf = mahasiswa.map((nama) => ({ nama, jmlh: nama.length }));
// console.table(jumlahHuruf);

// ! Arrow Function lanjutan (konteks this) => arrow function tidak memiliki konsep this

// const Mahasiswa = function () {
//   this.nama = "Aji";
//   this.umur = 23;
//   this.sayHello = function () {
//     console.log(`Halo, Nama saya ${this.nama} dan umur saya ${this.umur}`);
//   };
//   setInterval(() => {
//     console.table(this.umur++);
//   }, 1000);
// };
// const aji = new Mahasiswa();

//  * munggunakan arrow function dengan constructor
// const Mahasiswa2 = function () {
//   this.nama = "Aji";
//   this.umur = 23;
//   this.sayHello = () => {
//     console.log(`Halo, Nama saya ${this.nama} dan umur saya ${this.umur}`);
//   };
// };
// const arif = new Mahasiswa();

// * menggunakan object literal
// const mhs1 = {
//   nama: "Arif",
//   umur: 23,
//   sayHello: () => {
//     console.log(`Halo, Nama saya ${this.nama} dan umur saya ${this.umur}`);
//   },
// };

// ! Latihan
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
