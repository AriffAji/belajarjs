// !! Tombol Ubah Warna

// ** Warna Single
const tUbahWarna = document.getElementById("tUbahWarna");
// const body = document.getElementById("div");
const body = document.getElementById("cc");

tUbahWarna.addEventListener("click", function () {
  // body.setAttribute("class", "biru-muda");
  body.classList.toggle("biru-muda");
});

// ** membuat tombol acak warna
const tombolWarna = document.createElement("button");
const teksTombol = document.createTextNode("Ubah Warna Random");

tombolWarna.appendChild(teksTombol);
tombolWarna.setAttribute("type", "button");
// body.appendChild(tombolWarna);
tUbahWarna.after(tombolWarna);
tombolWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// ** slider range

// ? Merah
const sMerah = document.querySelector("input[name=sMerah]");
sMerah.addEventListener("input", function () {
  const red = sMerah.value;
  const green = sHijau.value;
  const blue = sBiru.value;
  body.style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")";
});
// ? Biru
const sBiru = document.querySelector("input[name=sBiru]");
sBiru.addEventListener("input", function () {
  const red = sMerah.value;
  const green = sHijau.value;
  const blue = sBiru.value;
  body.style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")";
});
// ? Hijau
const sHijau = document.querySelector("input[name=sHijau]");
sHijau.addEventListener("input", function () {
  const red = sMerah.value;
  const green = sHijau.value;
  const blue = sBiru.value;
  body.style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")";
});

// ! Mouse ubah warna
body.addEventListener("mousemove", function (event) {
  // posisi mouse
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
