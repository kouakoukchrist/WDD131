// menu.js
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".topbar");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.classList.toggle("active"); // <-- this makes the X work
});
