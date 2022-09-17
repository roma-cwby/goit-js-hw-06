const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createEl(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const el = document.createElement("li");
    el.classList.add("item");
    el.textContent = arr[i];
    result.push(el);
  }
  return result;
}

document.querySelector("#ingredients").append(...createEl(ingredients));
