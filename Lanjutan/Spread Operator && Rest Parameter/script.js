//! Spread Operator
//! Memecah iterables menjadi single element

//* Menggabungkan 2 atau lebih array

// const mhs = ["Arif ", "Aji", "Naufal"];
// const dosen = ["Sepyan", "Sandhika", "Lutfi"];
// const orang = [...mhs, "AJII", ...dosen];
// console.log(orang);

//* meng-copy array
// const mhs = ["Arif ", "Aji", "Naufal"];
// const mhs1 = [...mhs];
// mhs1[0] = "Fajar";
// console.log(mhs);

//* membuat animasi untuk html
// const nama = document.querySelector(".nama");
// const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
// nama.innerHTML = huruf;

//! Rest Parameter
// function myFunc() {
// return `a=${a}, b=${b}, myArgs = ${myArgs}`;
// return myArgs;
// return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5 ));

//* Array Destructuring
const kelompok1 = ["Aji", "Arif", "Naufal", "Fadhlul", "Aziz"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);

//*filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterBy("boolean", 1, 2, "ArifAji", false, 10, true, "Doddy"));
