var lagi = true;
while (lagi) {
  alert("Tebak angka dari 1 - 10!\nKamu punya 2 kesempatan.");
  var computer = Math.round(Math.random() * 10);
  var hasil = "";
  for (var i = 2; i > 0; i--) {
    var p = prompt("Masukkan Angka tebakan!");
    kesempatan = i - 1;
    if (p == "") {
      alert("Yang anda masukkan bukan angka");
      i = 0;
    } else if (p == null) {
      i = 0;
    } else {
      if (p == computer) {
        alert("Anda BENAR!\nAngka yang dicari adalah " + computer);
        i = 0;
      } else if (p < computer) {
        if (kesempatan == 0) {
          alert("Anda GAGAL!\nAngka yang dicari adalah " + computer);
        } else {
          alert("Terlalu RENDAH!\nAyo masih ada " + kesempatan + " kesempatan");
        }
      } else if (p > computer) {
        if (kesempatan == 0) {
          alert("Anda GAGAL!\nAngka yang dicari adalah " + computer);
        } else {
          alert("Terlalu TINGGI!\nAyo masih ada " + kesempatan + " kesempatan");
        }
      } else {
        alert("Yang anda masukkan bukan angka");
        i = 0;
      }
    }
  }
  lagi = confirm("Main lagi?");
}
alert("Terima kasih.");
