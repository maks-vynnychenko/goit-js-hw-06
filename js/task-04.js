const buttonDecrement = document.querySelector('button[data-action=decrement');
const buttonIncrement = document.querySelector('button[data-action=increment');
const valueEl = document.querySelector('#value');

let counterValue = 0;

buttonDecrement.addEventListener('click', onButtonDecrement);
buttonIncrement.addEventListener('click', onButtonIncrement);

function onButtonDecrement() {
  valueEl.textContent = --counterValue;
}

function onButtonIncrement() {
  valueEl.textContent = ++counterValue;
}
