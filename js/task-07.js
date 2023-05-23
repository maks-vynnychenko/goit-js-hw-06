const inputEL = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEL.addEventListener('input', textChange);

textEl.style.fontSize = inputEL.value + 'px';

function textChange(event) {
  const fontSize = event.currentTarget.value;
  textEl.style.fontSize = `${fontSize}px`;
}
