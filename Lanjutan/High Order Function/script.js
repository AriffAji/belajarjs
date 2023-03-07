// ! High Order Function 4.1

// function kerjakanTugas(matakuliah, selesai) {
//   console.log(`Mulai mengerjakan tugas ${matakuliah}`);
//   selesai();
// }

// function selesai() {
//   setTimeout(function () {
//     alert("Selesai mengerjakan");
//   }, 1000);
// }

// kerjakanTugas("Kalkulus", selesai);

// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// }
// repeat(10, console.log);

// ! High Order Function 4.2

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// * menggunakan filter dan arrow function
// const newAngka = angka.filter((a) => a >= 3);

// * menggunakan Map
// const newAngka2 = newAngka.map((a) => a * 2);

// * menggunakan reduce
// const newAngka3 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);

// * metode chaining
// const newAngka3 = angka
//   .filter((a) => a >= 4)
//   .map((a) => a * 3)
//   .map((a) => a / 2)
//   .map((a) => a / 2)
//   .reduce((acc, curr) => acc + curr);

// console.table(newAngka3);

// ! High Order Function 4.3
// !! Latiham High Order

// * ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// * pilih yang hanya 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi int, ubah menit menjadi detik
  .map((waktu) => {
    // 10:30 =>[10,30] di split
    const parts = waktu.split(":").map((part) => parseInt(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah format menjadi jam menit detik

const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;

const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

// ? Jumlah video
const jmlhVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;

const pJmlhVideo = document.querySelector(".jumlah-video");
pJmlhVideo.textContent = `${jmlhVideo} Video.`;
