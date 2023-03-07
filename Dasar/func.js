// cara yang tidak efektif tidak menggunakan function

// var a = 10;
// var b = 5;

// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;
// total = volumeA + volumeB;

// console.log(total);
// console.log(volumeA);
// console.log(volumeB);

// menggunakan function

function jumlahDuaVolume(a, b) {
  var total, volumeA, volumeB;
  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;
  return total;
}

// console.log(jumlahDuaVolume(10, 9));
alert(jumlahDuaVolume(10, 9));
alert(jumlahDuaVolume(15, 10));
alert(jumlahDuaVolume(20, 15));
