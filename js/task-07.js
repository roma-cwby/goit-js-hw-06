const input = document.querySelector("#font-size-control");

input.addEventListener(
  "input",
  () => (document.querySelector("#text").style = `font-size: ${input.value}px`)
);
