// const cross = "cross";
// const circle = "circle";

// const boxElements = document.querySelectorAll(".box");
// const resetButton = document.getElementById("reset");

// let turn = cross;

// resetButton.onclick = startGame;

// function placeMark(box, currentClass) {
//   box.classList.add(currentClass);
// }

// function handleClick(e) {
//   const boxTarget = e.target;

//   placeMark(boxTarget, turn);
// }

// function startGame() {
//   boxElements.forEach((box) => {
//     box.addEventListener("click", handleClick, { once: true });
//   });
// }

// startGame();
let box = document.querySelectorAll(".box");
box = Array.from(box);

let currentPlayer = "X";

// let winningCombinations = [
// [0,1,2],
// [3,4,5],
// [6,7,8],
// [0,3,6],
// [1,4,7],
// [2,5,8],
// [0,4,8],
// [2,4,6]
// ]

// function checkForWinner(){
//   winningCombinations.forEach(function(combination){
//     let check = combination.every(idx => box [idx]innerText.trim() == currentPlayer)

//   if(check){
//     alert(currentPlayer + " Has Won")
//   }
//   })

// }

box.forEach(function (box) {
  box.addEventListener("click", function () {
    if (box.innerText.trim() != "") return;
    box.innerText = currentPlayer;
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  });
});
