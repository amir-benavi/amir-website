const nav = document.querySelector(".site-nav");
const openButton = document.querySelector(".menu-open-button");
const closeButton = document.querySelector(".menu-close-button");

// Mobile menu: JS only switches the state class, CSS does the rest
openButton.addEventListener("click", () => {
  nav.classList.add("is-open");
  openButton.setAttribute("aria-expanded", "true");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("is-open");
  openButton.setAttribute("aria-expanded", "false");
});
