// $.ajax({
//   url: "https://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: (movies) => console.log(movies),
// });

//! menggunakan fetch
// const movies = fetch("https://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

//! Promise
//? object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchronus di masa yang akan datang
//* janji (terpenuhi/ingkar)
//* keadaan (fullfilled / rejected / pending)
//* callback ( resolve / rejected /finally)
//*  aksi (then/catch)

//* contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve(`Janji telah ditepati!`);
//   } else {
//     reject(`Janji telah diingkari`);
//   }
// });

// janji1.then((response) => console.log(`OK!` + response)).catch((response) => console.log(`NOT OK!` + response));

//* Contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve(`Ditepati setelah beberapa waktu!`);
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject(`tidak tepati !`);
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2))); //melihat pending
// janji2
//   .finally(() => console.log(`Selesai Menunggu!`))
//   .then((response) => console.log(`OK!` + response))
//   .catch((response) => console.log(`NOT OK!` + response));
// console.log("selesai");

//* Contoh 3 (Promise.all)
let ditepati = false;
const film = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        judul: `Avengers`,
        sutradara: "ArifAji",
        pameran: "JasonStatam",
      },
    ]);
  }, 3000);
});

const cuaca = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        kota: `Banyuwangi`,
        tempratur: 23,
        Kondisi: "Cerah Berawam",
      },
    ]);
  }, 500);
});

Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
