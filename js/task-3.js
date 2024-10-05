'use strict';
const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  output.textContent = event.currentTarget.value.trim();

  if (!output.textContent) {
    output.textContent = 'Anonymous';
  }
});
// textInput.addEventListener('input', handleInput);

// function handleInput(event) {
//   output.textContent = event.target.value.trim();
//   if (!output.textContent) {
//     output.textContent = 'Anonymous';
//   }
// }
