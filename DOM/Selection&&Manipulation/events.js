// !! Events

// ** Event Handler menggunakan Inline HTML Attribute
// const p3 = document.querySelector(".p3");
// function ubahWarna() {
//   p3.style.backgroundColor = "aqua";
// }

// ** Event Handler menggunakan Element Method
const p2 = document.querySelector(".p2");
function ubahWarnaP2() {
  p2.style.backgroundColor = "green";
}
p2.onclick = ubahWarnaP2;

// **  addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  // alert("OK");
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("Buat li baru dengan JS!");

  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});

// ?? Noted :
// ?? 1. EventHandler adalah cara lama
// ?? 2. Ketika menggunakan banyak perubahan, event handler akan menimpa perubahan sebelumnya sedangkan addEvenListener akan menambah perubahan
// ??

const p3 = document.querySelector(".p3");
// p3.onclick = function () {
//   p3.style.backgroundColor = "aqua";
// };
// p3.onclick = function () {
//   p3.style.color = "red";
// };

p3.addEventListener("mouseenter", function () {
  p3.style.backgroundColor = "aqua";
});
p3.addEventListener("mouseleave", function () {
  // p3.style.color = "red";
  p3.style.backgroundColor = "red";
});
