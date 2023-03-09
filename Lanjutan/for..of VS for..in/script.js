// ! For ... of

// //* Array
// const mhs = ["Muhammad", "Arif", "Purnama", "Aji"];

// //? menggunakan forEach
// mhs.forEach((m) => console.log(m));

// //? menggunakan for of
// for (const m of mhs) {
//   console.log(m);
// }

// //* String
// const nama = "Muhammad Arif";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["Muhammad", "Arif", "Purnama", "Aji"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
//   console.log([i, m]);
// }

//* NodeList
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

//* Arguments
// function jumlahAngka() {
// return arguments.reduce((a,i)=> a=i);
// arguments.forEach((a) => (jumlah += a));
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahAngka(1, 2, 3, 4, 5, 6, 7, 8, 9));

// ! For ...in

const mhs = {
  nama: "ArifAji",
  umur: 23,
  email: "Arifnauval1530@gmail.com",
};
//? Iterable
// for (m in mhs) {
//   console.log(m);
// }

// for (m in mhs) {
//   console.log(mhs[m]);
// }
