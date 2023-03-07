// !! DOM Selection

// ** document.getElementById() -> mengembalikan nilai element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.textAlign = "center";
// judul.style.backgroundColor = "#cccc";
// judul.innerHTML = "ArifAji";

// ** document.getElementsByTagName() -> mengembalikan HTMLCollection (seperti array)
// const p = document.getElementsByTagName("p");
// p[1].style.backgroundColor = "blue"; //ketika mengambil nila diharuskan menggunakan array
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "aqua";
// }

// const h1 = document.getElementsByTagName("h1")[0]; // meskipun hanya ada satu nilai array diwajibkan untuk menggunakan array
// h1.style.fontSize = "50px";

// ** document.getElementsByClassName()-> HTMLcollection
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "ini diubah dengan js";

// ** document.querySelector() -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// const p = document.querySelector("p");
// p.innerHTML = "Ini diubah dengan JS"; //queryselector akan mengembalikan nilai yang mereka temukan pertama dan tidak mempengaruhi tag lain

// ** document.querySelectorAll() -> NodeList (berupa Array)
// const p = document.querySelectorAll("p");
// for (let i = 0; i < 3; i++) {
//   p[i].style.backgroundColor = "aqua";
// }

// ** merubah NodeParent
// const sectionB = document.getElementById("b");
// const p4 = sectionB.getElementsByTagName("p")[0];
// p4.style.backgroundColor = "orange";

/*
Noted: 
Semua tergantung kebutuhan, ketika tidak boleh mengubah struktur HTML maka dianjurkan menggunakan queryselector
byId & byTagName performa paling cepat

*/
