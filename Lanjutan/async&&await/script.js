//? coba async await

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 8000;
    if (waktu <= 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("Kelamaan COK!!!!!!");
    }
  });
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}
cobaAsync();

// const coba = cobaPromise();
// coba.then((coba) => console.log(coba)).catch((coba) => console.log(coba));
