function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', handleClick);

function handleClick() {
  const randomColor = getRandomHexColor();
  spanEl.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}
