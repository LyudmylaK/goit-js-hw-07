'use strict';
const categories = document.querySelector('#categories');
console.log('Number of categories:', categories.children.length);

const item = document.querySelectorAll('.item');
item.forEach(element => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
});
