const formEl = document.querySelector('.login-form');
let message = '';

formEl.addEventListener('submit', onFormSubmit);
const testEl = document.querySelector('input');

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };
  if (email === '' || password === '') {
    message = alert('All fields must be completed!');
  } else {
    console.log(formData);
  }
}
