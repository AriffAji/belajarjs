// ! Template Literals / String 5.1

// console.log(`string 1
// string 2`);

// *Embedded Expressions

// console.log(`hasil = ${17 % 5}`);

// const x = 11;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// * HTML Fragment
// const mhs = {
//   nama: "Arif Aji",
//   umur: 23,
// };
// const el = `<div class="mhs"> <h2>${mhs.nama}</h2> <h2>${mhs.umur}</h2></div>`;

// console.log(el);

// ! Latihan Template Literals / String 5.2
// * HTML Fragment

// const mhs = {
//   nama: "Arif Aji",
//   umur: 23,
//   nim: 361955401112,
//   email: "arifnauval1530@gmail.com",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <h2>${mhs.umur}</h2>
//   <h2>${mhs.nim}</h2>
//   <span class="email">${mhs.email}</span>
// </div>`;

// * Looping

// const mhs = [
//   { nama: "Arif", email: "Arif@poliwangi.com" },
//   { nama: "aji", email: "Aji@poliwangi.com" },
//   { nama: "Naufal", email: "Naufal@poliwangi.com" },
// ];
// const el = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//       <li>${m.nama}</li>
//       <li>${m.email}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// * Conditional

// const lagu = [
//   { judul: "Heavy", penyanyi: "Linkin Park", feat: "Kiiara" },
//   { judul: "Afterlife", penyanyi: "A7X Park" },
// ];

// const el = `<div class="lagu">
//     ${lagu.map(
//       (m) => `
//     <ul>
//         <li>${m.penyanyi}</li>
//         <li>${m.judul} ${m.feat ? `(feat. ${m.feat})` : ""}</li>
//     </ul>
//     `
//     )}
// </div>`;

// *Nested / HTML Bersarang

// const mhs = {
//   nama: "Arif Aji",
//   umur: 23,
//   semester: 7,
//   nim: 361955401112,
//   mataKuliah: ["Algoritma Pemrograman", "Human Computer Interfase", "Jaringan ", "Sistem Operasi", "Machine Learning"],
// };
// function cetakMataKuliah(mataKuliah) {
//   return `
//       <ol>
//           ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
//       </ol>`;
// }
// const el = `<div>
//   <h2>Nama : ${mhs.nama}</h2>
//   <h2>Semester : ${mhs.semester}</h2>
//   <h4> Mata Kuliah :</h4>
//   ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;
// document.body.innerHTML = el;

// ! Tagged Template Literals / String 5.3

// * tagged
// const nama = " Muhammad Arif Purnama aji";
// const umur = 33;

// function coba(strings, ...values) {
// return values;

// let result = "";
// strings.forEach((str, i) => {
//   result += `${str}${values[i] || ""}`;
// });
// return result;

//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
// }
// const str = coba`Halo, Nama saya ${nama}, saya ${umur}tahun.`;
// console.log(str);

// * manfaat langsung untuk taggged template
const nama = " Muhammad Arif Purnama aji";
const umur = 33;
const email = "Arifnauval1530@gmail.com";

function coba(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}
const str = coba`Halo, Nama saya ${nama}, saya ${umur}tahun, dan email saya adalah : ${email}`;
console.log(str);
document.body.innerHTML = str;

// ? manfaat
// ? 1. Escaping HTML Tags => menghilangkan karakter yang tidak diingkan
// ? 2. Translation & Internationalization => Alih bahasa(translate bahasa)
// ? 3. Styled Componenets
