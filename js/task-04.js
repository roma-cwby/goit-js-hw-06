let counterValue = 0;
document.querySelector("#value").textContent = counterValue;

document
  .querySelector("[data-action=decrement]")
  .addEventListener("click", () => {
    document.querySelector("#value").textContent = counterValue -= 1;
  });

document
  .querySelector("[data-action=increment]")
  .addEventListener("click", () => {
    document.querySelector("#value").textContent = counterValue += 1;
  });
