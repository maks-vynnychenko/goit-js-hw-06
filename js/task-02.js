const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listsOfIngredientsEl = document.querySelector('#ingredients');

const nameOfIngredients = ingredients.map(item => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = item;

  return liEl;
});

listsOfIngredientsEl.append(...nameOfIngredients);

