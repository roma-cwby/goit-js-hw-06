const logForm = document.querySelector(".login-form");

logForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    logForm.elements.password.value === "" ||
    logForm.elements.email.value === ""
  )
    return alert("Enter all");

  const user = {};
  user.email = logForm.elements.email.value;
  user.password = logForm.elements.password.value;
  console.log(user);
  logForm.reset();
});
