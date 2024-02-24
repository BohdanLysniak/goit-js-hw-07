const form = document.querySelector(".login-form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const usersInfo = {
  email,
  password
}
console.log(usersInfo);
  if (email === "" || password === "") {
    alert("All form fields must be filled in")
  };
  event.currentTarget.reset();
}


