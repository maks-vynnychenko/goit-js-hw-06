function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButtonEl = document.querySelector('button[data-create]');
const destroyButtonEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input[type="number"]');
const boxesEL = document.querySelector('div#boxes');

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);

let originalBoxSize = 30;

function destroyBoxes() {
  boxesEL.innerHTML = '';
}

function createBoxes() {
  const numberOfBoxes = inputEl.value;
  let boxesString = '';
  for (let size = 30, i = 0; i < numberOfBoxes; i++, size += 10) {
    boxesString += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>\n`;
  }
  boxesEL.insertAdjacentHTML('beforeend', boxesString);
  inputEl.value = 0;
}
