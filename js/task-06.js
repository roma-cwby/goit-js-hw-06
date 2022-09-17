const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  input.classList.remove("valid");
  input.classList.remove("invalid");

  input.value.length >= Number(input.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid");
});
