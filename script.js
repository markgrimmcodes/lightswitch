const button = document.querySelector("button");
const title = document.querySelector("title");
const body = document.querySelector("body");

button.addEventListener("click", buttonClick);

function buttonClick() {
  if ((title.innerText = "Good Morning!")) {
    title.innerText = "Good Night!";
  } else if ((title.innerText = "Good Night!")) {
    title.innerText = "Good Morning!";
  }
  button.classList.toggle("button-dark");
  body.classList.toggle("body-dark");
}
