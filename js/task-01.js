console.log('Task 1');

const itemOFCategoriesEl = document.querySelectorAll('.item');
console.log('Number of categories', itemOFCategoriesEl.length);

itemOFCategoriesEl.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
