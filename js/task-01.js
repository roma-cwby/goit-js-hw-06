const categoriesElArray = document.querySelector("#categories").children;

console.log(`Number of categories: ${categoriesElArray.length}`);

for (let i = 0; i < categoriesElArray.length; i++) {
  console.log(
    `Category: ${categoriesElArray[i].firstElementChild.textContent}`
  );
  console.log(
    `Elements: ${categoriesElArray[i].lastElementChild.children.length}`
  );
}
