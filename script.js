// INITIALIZE AOS on scroll animation
AOS.init();

// STICKY NAVBAR
const navbar = document.querySelector("header");

let addStickyToNavbar = () => {
  navbar.classList.add("sticky");
};
addStickyToNavbar();
