//toggle class active
const navNavbar = document.querySelector(".nav-navbar");

//hamburgermenu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navNavbar.classList.toggle("active");
};

//klik di luar side bar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navNavbar.contains(e.target)) {
    navNavbar.classList.remove("active");
  }
});
