const controlsRef = document.querySelector('#controls').firstElementChild
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesId = document.querySelector('#boxes')

createBtnRef.addEventListener('click', getRender);
destroyBtnRef.addEventListener('click', getDestroy);

function getRender() {
  const amount = createBtnRef.value
  amount ? createBoxes(amount) : alert("Нема числа")
  createBtnRef.value = '';
}
function getDestroy() {
  boxesId.innerHTML = '';
  destroyBtnRef.value = '';
}

function createBoxes(amount) {
  const basicSize = 30
  const array = [];
  for (let i = 0; i <= amount; i += 1) {
    const color = getRandomHexColor();
    array.push(
      `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
    );
    basicSize += 10
  }
  boxesId.insertAdjacentHTML('beforeend', array.join(''))
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
