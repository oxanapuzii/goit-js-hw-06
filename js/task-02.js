const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((item) => {
  
const newElementList = document.createElement("li")
newElementList.textContent = item
newElementList.classList.add("item")
console.log(newElementList);
const itemLi = document.querySelector("#ingredients")
itemLi.append(newElementList)
});
