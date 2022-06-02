const cross = "cross";
const circle = "circle";

const boxElements = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");

let turn = cross;

resetButton.onclick = startGame;

function placeMark(box, currentClass) {
  box.classList.add(currentClass);
}

function handleClick(e) {
  const boxTarget = e.target;

  placeMark(boxTarget, turn);
}

function startGame() {
  boxElements.forEach((box) => {
    box.addEventListener("click", handleClick, { once: true });
  });
}

startGame();
