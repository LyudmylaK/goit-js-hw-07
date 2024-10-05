'use strict';
const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  if (!elements.email.value || !elements.password.value) {
    alert('All form fields must be filled in');
    return;
  }
  const keyEmail = elements.email.name;
  const keyPassword = elements.password.name;

  const info = {
    [keyEmail]: elements.email.value.trim(),
    [keyPassword]: elements.password.value.trim(),
  };

  console.log(info);

  event.currentTarget.reset();
}
