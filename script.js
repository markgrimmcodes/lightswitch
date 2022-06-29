const button = document.querySelector("button");
const title = document.querySelector("title");
const body = document.querySelector("body");

button.addEventListener("click", buttonClick);

function buttonClick() {
  title.innerHTML = "Good Night";
  button.style.color = "snow";
  button.style.borderColor = "snow";
  button.style.backgroundColor = "rgb(78, 78, 78)";
  body.style.backgroundColor = "rgb(78, 78, 78)";
}
