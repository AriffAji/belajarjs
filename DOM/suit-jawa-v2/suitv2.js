function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "Seri";
  if (player == "gajah") return comp == "orang" ? "Menang" : "Kalah!";
  if (player == "orang") return comp == "gajah" ? "Menang" : "Kalah!";
  if (player == "semut") return comp == "orang" ? "Menang" : "Kalah!";
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer;
    const pilahanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilahanPlayer);

    const imgComputer = document.querySelector(".img-computer");
    imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

    const info = document.querySelector(".info");
    info.innerHTML = hasil;
  });
});
