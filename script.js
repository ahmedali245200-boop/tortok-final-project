const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".header-middle");
const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    hamburger.style.display = "none";
    cross.style.display = "block";
  } else {
    hamburger.style.display = "block";
    cross.style.display = "none";
  }
});
