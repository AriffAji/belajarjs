//// !! Parameter and Agrument !!

//// Belajar Parameter
////////////// ini adalah parameter
// function tambah(a, b, c) {
//   return a + b * c;
// }

// var a = parseInt(prompt("masukkan nilai a:"));
// var b = parseInt(prompt("masukkan nilai b:"));
// var c = parseInt(prompt("masukkan nilai c:"));
// /////////// ini adalah argument
// var hasil = tambah(a, b, c);
// // var hasil = tambah(2, 4, 6);
// alert(hasil);

//// Belajar Arguments

// function tambah() {
//   return arguments;
// }

// var coba = tambah(5, 10, 20, "hi", false);
// console.log(coba);

// menggunakan sudo variable
function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var coba = tambah(1, 2, 3, 40);
console.log(coba);
