const opened = document.querySelector("#menu");

const enable = document.querySelector("#cross");

const header = document.querySelector("header");

const ul = document.querySelector("ul");

opened.addEventListener("click", () => {
  opened.classList.remove("active");
  enable.classList.remove("disabled");
  enable.classList.add("active");
  opened.classList.add("disabled");
  header.classList.add("opened");
  ul.classList.add("listed");
  ul.classList.remove("disabled");
});

enable.addEventListener("click", () => {
  opened.classList.add("active");
  enable.classList.add("disabled");
  enable.classList.remove("active");
  opened.classList.remove("disabled");
  header.classList.remove("opened");
  ul.classList.remove("listed");
  ul.classList.add("disabled");
});