function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}
const body = document.querySelector("body");
const spanColorRef = document.querySelector(".change-color");
let color = document.querySelector(".color");

spanColorRef.addEventListener("click", changeColor);

function changeColor() {
  const newColor = getRandomHexColor()
  body.style.backgroundColor = newColor;
  color.textContent = `${newColor}`;
}