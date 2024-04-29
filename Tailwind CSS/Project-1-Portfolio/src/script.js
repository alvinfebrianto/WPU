window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  // const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    // toTop.classList.remove("hidden");
    // toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    // toTop.classList.remove("flex");
    // toTop.classList.add("hidden");
  }
};

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

// Event listener untuk mengaktifkan atau menonaktifkan hamburger
hamburger.addEventListener("click", function (e) {
  e.stopPropagation();
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Event listener untuk menutup hamburger saat mengklik di luar hamburger atau menu navigasi
window.addEventListener("click", function (e) {
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
