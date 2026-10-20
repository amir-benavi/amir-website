const nav = document.querySelector(".site-nav");
const openButton = document.querySelector(".menu-open-button");
const closeButton = document.querySelector(".menu-close-button");
const helloForm = document.querySelector(".hello-form");
const nameInput = document.querySelector("#name");

// Mobile menu: JS only switches the state class, CSS does the rest
openButton.addEventListener("click", () => {
  nav.classList.add("is-open");
  openButton.setAttribute("aria-expanded", "true");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("is-open");
  openButton.setAttribute("aria-expanded", "false");
});

// Say hello
helloForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  alert(`שלום, ${name}`);
});
