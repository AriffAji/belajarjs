//// !! Array !!

/* myFunc = function () {
  alert("Hello World");
};

//arry bersarang
var myArr = ["teks", 2, false, myFunc, [4, 5, [4, 5, 6]]];
console.log(myArr[4][2][1]);
*/

//// !! Manipulasi Array dengan cara manual!!

// ? 1. Menambah isi Array
/* var arr = [];
arr[0] = "Muhammad ";
arr[1] = "Arif";
arr[2] = "Purnama";
arr[3] = "Aji";
!! jangan sampai ada array yang kosong karena akan diisi dengan undefined
console.log(arr);
*/

// ? 2.Menghapus isi array
/*
var arr = ["Muhammad", "Arif", "Purnama", "Aji"];
arr[1] = undefined;
console.log(arr);
*/

// ? 3.Manampilkan Array dengan looping
/*
var arr = ["Muhammad", "Arif", "Purnama", "Aji", "Naufal"];
for (var i = 0; i < arr.length; i++) {
  console.log("Mahasiswa ke-" + (i + 1) + " : " + arr[i]);
}
*/

// ? 4. Method pada Array

// ? 4.1 Join
// ** join hanya bisa digunakan untuk nilai yang dikembalikan dalam bentuk array
/*
var arr = ["Muhammad", "Arif", "Purnama", "Aji"];
console.log(arr.join(" - ")); // bisa menggunakan separator
*/

// ? 4.2 push & pop
// ** Push Digunakan untuk menambahkan array dengan memberikannya di akhir array ; bisa di tambah kan dengan sekali method
// var arr = ["Muhammad", "Arif", "Purnama", "Aji", "Naufal"];
// arr.push("Fadhlul", "Aziz");

// ** Pop digunakan untuk menghilangkan elemen diakhir array; tidak bisa ditambahkan dengan sekali method
// arr.pop();
// console.log(arr.join(" - "));

// ? 4.3 unshift & shift
// ** unshift Digunakan untuk menambahkan array dengan memberikannya di awal array ;
// var arr = ["Muhammad", "Arif", "Purnama", "Aji", "Naufal"];
// arr.unshift("Fadhlul", "Aziz");

// ** shift Digunakan untuk menghilangkan array dengan memberikannya di awal array ;
// arr.shift();
// console.log(arr.join(" - "));

// ? 4.4 Splice dan Slice
// ** Splice digunakan untuk menyisipkan array di tengah elemen ; ketentuan splice (indexAwal, mauDihapusBerapa(opt; akan dihapus setelah indexAwal yang di deklarasikan),elemenBaru1, elemenBaru2,)
// var arr = ["Muhammad", "Arif", "Purnama", "Aji", "Naufal"];
// arr.splice(2, 0, "Fadhlul", "Aziz");
// console.log(arr.join(" - "));

// ** Slice digunakan untuk mengiris array di tengah elemen ; ketentuan (awal(index awal yang di tampilkan),akhir(akhir pemotongan)) ; slice mengharuskan kita untuk membuat variable baru karena slice akan menghasilkan array baru
// var arr = ["Muhammad", "Arif", "Purnama", "Aji", "Naufal"];
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(" - "));

// ? 5. ForEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// angka.forEach(function (e, i) {
//   console.log(e);
//   console.log("Index ke-" + i + " adalah angka : " + e);
// });
// ** cara membaca = untuk setiap elemen(e) yang ada pada array angka lakukan function berikut ; i adalah index ; forEach tidak mengembalikan nilai array

// ? 6. Map
// ** Map hampir sama dengan ForEach tetapi Map mengembalikan Array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join("-"));

// ? 7. Sort
// ** digunakan untuk mengurutkan nilai array
// var angka = [1, 4, 6, 7, 9, 3, 2, 5, 10];
// angka.sort(function (a, b) { //untuk 2 angka
//   return a - b;
// });
// angka.sort();
// console.log(angka.join(" - "));

// ? 8. filter
// ** digunakan untuk mencari sebuah nilai dan menampilkan dalam bentuk array dan dalam banyak nilai
// var angka = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
// var angka2 = angka.filter(function (e) {
//   return e == 6;
//   return e > 5;
// });
// console.log(angka2);

// ? 9. Find
// ** digunakan untuk mencari sebuah nilai tidak menghasilkan array dan 1 niilai
// var angka = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10];
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];

var angka2 = angka.find(function (e) {
  return e > 5;
});
console.log(angka);
console.log(angka2);
