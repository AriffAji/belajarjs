// !! This !!

// ? Membuat Object dengan function declaration

// ** cara cara membuat object
// ? 1. Function declaration
// function halo() {
//   console.log("Halo!");
// }
// this.halo();
// this mengembalikan object global

// ?2. Object Literal
// var obj = { a: "ArifAji" };
// obj.halo1 = function () {
//   console.log(this);
//   console.log("Halo!!");
// };
// obj.halo1();
// this mengembalikan object yang sudah di inisialisasikan atau yang bersangkutan

// ? 3. Constructor
function Halo2() {
  console.log(this);
  // console.log("Halo!!!");
}
new Halo2();
// this akan mengembalikan nilai object yang baru dibuat
