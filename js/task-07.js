const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', () => {
  let size = inputEl.value;
  // this sets the body's font size property, but you can set whatever you need to
  textEl.style.fontSize = size + 'px';
});
