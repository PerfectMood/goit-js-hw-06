let counterValue = 0;

console.log(counterValue);

const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

buttonMinus.addEventListener('click', () => {
  counterValue -= 1;
  document.getElementById('value').innerHTML = counterValue;
});

buttonPlus.addEventListener('click', () => {
  counterValue += 1;
  document.getElementById('value').innerHTML = counterValue;
});
