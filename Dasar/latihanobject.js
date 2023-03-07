// !! Latihan dengan object

function Angkot(sopir, rute, penumpang, kas) {
  this.sopir = sopir;
  this.rute = rute;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Angkot Masih Kosong!!");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      } else if (bayar === 0) {
        console.log("BAYAR woy!!!");
        return true;
      }
    }
  };
}
var angkot1 = new Angkot("Arif", ["BwiKota", "Ketapang"], [], 0);
