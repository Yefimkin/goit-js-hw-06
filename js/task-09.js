const spanColor = document.querySelector('.color')
const btnChangeColor = document.querySelector('.change-color')

btnChangeColor.addEventListener('click', changeColorBtnClick)




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColorBtnClick() {
  spanColor.textContent = getRandomHexColor()
  document.body.style.backgroundColor = getRandomHexColor()
}