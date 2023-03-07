// ! menutup card dengan menggunakan DOM Traversal
const tutup = document.querySelectorAll(".close");
const kartu = document.querySelectorAll(".card");
const container = document.querySelector(".container");

// ** menggunakan traversal for
// for (let i = 0; i < tutup.length; i++) {
//   tutup[i].addEventListener("click", function (e) {
// tutup[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// ** menggunakan traversal foreach
// tutup.forEach(function (close) {
//   close.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault(); // mencegah aksi default yang dimiliki oleh element
//     e.stopPropagation(); // mencegah untuk melakukan 2kali klik (event bubling)
//   });
// });

// kartu.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     confirm("setuju hapus?");
//   });
// });

// ? menggunakan code yang lebih efektif dan bisa digunakan sewaktu menambahkan lewat console

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  }
});
