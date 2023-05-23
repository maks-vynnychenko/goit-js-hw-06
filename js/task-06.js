const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onClick);

function onClick(event) {
  inputEl.classList.remove('valid', 'invalid');
  event.currentTarget.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
}
