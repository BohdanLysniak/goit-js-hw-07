const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output")

inputName.addEventListener("input", greeting)

function greeting(event) {
  event.preventDefault();
  spanName.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === "") { return spanName.textContent = "Anonymous" };
}