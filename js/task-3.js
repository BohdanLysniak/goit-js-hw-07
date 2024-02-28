const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output")

inputName.addEventListener("input", greeting)

function greeting(event) {
  const inputValue = event.currentTarget.value.trim();
  spanName.textContent = inputValue;
  if (inputValue === "") { spanName.textContent = "Anonymous" };
};