const inputEL = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEL.addEventListener('input', onInputChange);

function onInputChange(event) {
  inputEL.value.trim() !== ''
    ? (spanEl.textContent = event.currentTarget.value)
    : (spanEl.textContent = 'Anonymous');
}
