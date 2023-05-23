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
  originalBoxSize = 30;
  inputEl.value = 0;
}

function createBoxes() {
  const numberOfBoxes = inputEl.value;
  let boxesString = '';
  for (let i = 0; i < numberOfBoxes; i++) {
    originalBoxSize += 10;
    boxesString += `<div style="background-color: ${getRandomHexColor()}; width: ${originalBoxSize}px; height: ${originalBoxSize}px"></div>\n`;
  }
  boxesEL.insertAdjacentHTML('beforeend', boxesString);
}
