const form = document.querySelector(".login-form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();

  const usersInfo = {
  email,
  password
}
  if (email === "" || password === "") {
    alert("All form fields must be filled in")
  } else {
  console.log(usersInfo);
  event.currentTarget.reset();
  };
};


