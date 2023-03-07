var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("silahkan pilih  : gajah, semut, orang");

  // menangkap pilihan computer

  // membangkitkan bilangan random
  var computer = Math.random();

  if (computer < 0.34) {
    computer = "gajah";
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = "orang";
  } else {
    computer = "semut";
  }
  console.log(computer);

  var hasil = "";
  // menentukan rules
  if (p == computer) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    hasil = computer == "orang" ? "MENANG" : "KALAH!";
  } else if (p == "orang") {
    hasil = computer == "gajah" ? "KALAH!" : "KALAH!";
  } else if (p == "semut") {
    hasil = computer == "orang" ? "KALAH!" : "KALAH!";
  } else {
    hasil = "Masukkan Pilihan yang salah!";
  }

  // tampilkan hasilnya

  alert("Kamu memilih : " + p + " dan Komputer memilih : " + computer + " \nMaka hasilnya : Kamu " + hasil);

  tanya = confirm("lagi?");
}

alert("terimakasih!");
