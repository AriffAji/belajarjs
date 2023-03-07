// !! DOM Manipulation

// ?? Manipulasi Element
// ** Inner HTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "ArifAji";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<h1>Hello World</h1>";

// ** style.<propertiCSS>

// ** Set.Attribute
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "aji"); // menambahkan atribut

// getAttribute = untuk menampilkan atribute
// removeAttribute = untuk menghilangkan atribute

// ** ClassList
/* 
element.classList.add
element.classList.remove
element.classList.toggle => kalo ada hapus class, kalo tidak tambahkan class 
element.classList.item => mencari class untuk ditammpilkan dengan hitangan seperti array
element.classList.contains => menanyakan ada atau tidaknya class
element.classList.replace 
*/

// ?? Manipulasi Node

// ** document.createElement && document.createTextNode
// TODO : Buat element -> Buat Isi Element -> Tambahkan isi element keedalam element -> panggil tempat peletakan element -> tambahkan element baru di tempat element yang telah di panggil
// note:Appendchild menambhkan element di akhir element lama
const pBaru = document.createElement("p"); // masih tersimpan di memori dan sudah terbuat
const teksPBaru = document.createTextNode("Paragraf baru");
// -> Merangkai pBaru dan teksPBaru
pBaru.appendChild(teksPBaru); // appendChild digunakan untuk menambahkan teksPBAru kedalam PBaru
// -> masukkan kedalam section yang diinginkan
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// ** insertBefore
// TODO : Buat element -> Buat Isi Element -> Tambahkan isi element keedalam element -> panggil tempat peletakan element -> panggil element setelah penempatan element baru -> tambahkan element baru
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Coba LI dari JS");
//
liBaru.appendChild(teksLiBaru);
//
const ulB = document.querySelector("section#b ul");
// const li2 = document.querySelector("section#b ul li:nth-child(2)");
const li2 = ulB.querySelector("li:nth-child(3)");
//
ulB.insertBefore(liBaru, li2);
// panggil element parent(ulB) lalu insert before masukkan element baru(liBaru) lalu masukkan element setelahnya(li2)

// ** removeChild
const link = sectionA.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// ** replaceChild
// TODO : Panggil NodeParent dan element yang akan di replace -> Buat element -> Buat Isi Element -> Tambahkan isi element keedalam element -> lalu Panggil NodeParent replaceChild dengan yang baru dan panggil element sebelumnya
const sectionB = document.getElementById("b");
const P4 = sectionB.querySelector("p");

const h1Baru = document.createElement("h1");
const teksH1 = document.createTextNode("Buat di JS!");

h1Baru.appendChild(teksH1);
// ------------------element baru, element lama
sectionB.replaceChild(h1Baru, P4);

// ** Modifikasi Via JS
pBaru.style.backgroundColor = "aqua";
h1Baru.style.backgroundColor = "aqua";
liBaru.style.backgroundColor = "aqua";
