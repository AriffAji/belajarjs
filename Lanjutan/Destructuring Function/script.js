// ! Destructuring Assignment 6.1

// const perkenalan = ["Halo", "nama", "saya", "ArifAji"];
// const [salam, satu, dua, nama] = perkenalan;
// ? Skipping Items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// * SWAP Items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// * Return Value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.table(a);
// console.table(b);

// * Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(values[4]);

// * Destructuring Object
// ? menggunakan deklarasi
// const mhs = { nama: "Arifaji", umur: 23 };
// const { nama, umur } = mhs;
// console.log(nama);

// ? Menggunakan Assigment
// ({ nama, umur } = { nama: "Arifaji", umur: 23 });
// console.log(umur);

// * Memberi nilai default + assign ke variabel baru
// const mhs = { nama: "Arifaji", umur: 23 };
// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);

// * Mengambil field pada object
// const mhs = { id: 12345, nama: "Arifaji", umur: 23 };
// function getIdMhs({ id, ...values }) {
//   return values;
// }
// console.log(getIdMhs(mhs));

// ! Destructuring Function

// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }
// const [jumlah, kali] = penjumlahanPerkalian(5, 6);
// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
// const { tambah, kurang, bagi, kali } = kalkulasi(5, 6);
// console.log(kurang);

// * Destructuring function arguments
const mhs = {
  id: 12345,
  nama: "Arifaji",
  umur: 23,
  nilai: { tugas: 80, uts: 89, uas: 65 },
};

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Hola, nama saya ${nama}, saya berumur ${umur} tahun. Nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs));
