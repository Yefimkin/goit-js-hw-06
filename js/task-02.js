const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListElement = document.querySelector("#ingredients");
const ingredientsItemElement = ingredients.map(ingredient => {
  const ingredientItemElement = document.createElement("li");
  ingredientItemElement.classList.add("item");
  ingredientItemElement.textContent = ingredient;
  return ingredientItemElement;
});

ingredientsListElement.append(...ingredientsItemElement);