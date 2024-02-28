function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);


function createBoxes(amount) {
  boxes.innerHTML = "";
  amount = input.value;
  let boxsize = 30;
  if (amount >= 1 && amount <= 100) {
    for (let i = 1; i <= amount; i += 1) {
      const newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
      boxes.insertAdjacentHTML("beforeend", newDiv);
      boxsize += 10;
    }
    input.value = "";
  }
}

function destroyBoxes (){
  boxes.innerHTML = "";
};
