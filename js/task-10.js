function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);

createBtn.addEventListener("click", () => createBoxes(Number(input.value)));
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = "";

  const result = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style = `width: ${size}px; height: ${size}px; border-radius: 5px`;
    box.style.backgroundColor = getRandomHexColor();
    result.push(box);
    size += 10;
  }
  return boxes.append(...result);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
