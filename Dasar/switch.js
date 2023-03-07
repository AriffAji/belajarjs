//// cara seperti ini memaksa angka yang dimasukkan menjadi string
// var angka = prompt("Masukkan Angka");
// // cara ini tetap mengembalikan nilai yang dimasukkan menjadi interger
// var angka = parseInt(prompt("Masukkan Angka"));

// if (angka == 1) {
//   alert("anda memasukkan 1");
// } else {
//   alert("salah!");
// }

// // Switch

// switch (angka) {
//   case 1:
//     alert("anda memasukkan angka 1");
//     break;
//   case 2:
//     alert("anda memasukkan angka 2");
//     break;
//   case 3:
//     alert("anda memasukkan angka 3");
//     break;
//   default:
//     alert("anda memasukkan angka salah!");
//     break;
// }

var item = prompt("masukkan makanan & minuman");

switch (item) {
  case "nasi":
  case "daging":
  case "gandum":
    alert("makanan sehat");
    break;
  case "pizza":
  case "hamburger":
    alert("makanan tidak sehat");
    break;
  default:
    alert("makanan salah!");
    break;
}
