// ! Execution Context, Hoisting & Scope
// ! 2 Fase pada Execution context adalah : 1 Creation, 2 Execution

// * 1. Creation phase

// console.log(nama);
// // var nama = "Arif";
// function nama() {}

// creation phase pada global context
// nama var =  undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// *Execution phase

// console.log(sayHello);
// var nama = "Arif";
// var umur = 23;

// function sayHello() {
//   return `Halo, Nama saya ${nama},saya ${umur} tahun`;
// }

// var nama = "ArifAji";
// var username = "@arifaji";

// function cetakUrl(username) {
//   var instagramUrl = "http://instagram/";
//   return instagramUrl + username;
// }
// console.log(cetakUrl("@hayyyu"));

// function a() {
//   console.log("ini a");
//   function b() {
//     console.log("ini b");
//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

// function satu() {
//   var nama = "Aji";
//   console.log(nama);
// }
// function dua() {
//   console.log(nama);
// }
// console.log(nama);
// var nama = "Erik";
// satu();
// dua("Doddy");
// console.log(nama);

// ! closure
function init() {
  let nama = "Aji";
  function tampilNama() {
    console.log(nama);
  }
  // tampilNama();
  console.dir(tampilNama);
}
init();
