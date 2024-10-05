function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', createMarkup);
function createMarkup() {
  if (inputNumber.value < 1 || inputNumber > 100) {
    return;
  }
  createBoxes(inputNumber.value);
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    boxes.append(newBox);
    boxSize += 10;
  }
}
buttonDestroy.addEventListener('click', () => {
  inputNumber.value = '';
  boxes.innerHTML = '';
});
