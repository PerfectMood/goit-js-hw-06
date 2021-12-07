let textInput = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  nameOutput.textContent = event.currentTarget.value;
});
