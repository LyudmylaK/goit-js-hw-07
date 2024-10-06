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
  const amount = inputNumber.value;
  if (amount < 1 || amount > 100) {
    console.log('error');
    return;
  }
  createBoxes(amount);
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  const boxesItems = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    boxesItems.push(newBox);
    boxSize += 10;
    inputNumber.value = '';
  }
  boxes.append(...boxesItems);
}

buttonDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = '';
  inputNumber.value = '';
}
