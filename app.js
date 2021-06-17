const resetBtn = document.querySelector("#reset");
const blackInk = document.querySelector("#black");
const eraser = document.querySelector("#eraser");
const etchMode = document.querySelector("#etch");
const clickMode = document.querySelector("#click");

resetBtn.addEventListener("click", createPixels);

//creates a grid of 'pixels' num tall by num wide
function createPixels(num) {
  const canvas = document.querySelector("#canvas");
  num *= num;
  for (let i = 0; i < num; i++) {
    const pixel = document.createElement("div");
    const sides = 720 / Math.sqrt(num) - 2;
    pixel.style.border = "solid lightgrey 1px";
    pixel.style.width = sides + "px";
    pixel.style.height = sides + "px";

    pixel.onmouseover = function () {
      eraser.checked
        ? (pixel.style.backgroundColor = "white")
        : (pixel.style.backgroundColor = "black");
    };
    pixel.className = "pixel";
    canvas.appendChild(pixel);
  }
}

// TODO: try to implement a selector --> between 'etch-a-sketch' mode and 'click' mode
// if (etchMode.checked){
//   pixel.onmouseover = function () {
//     eraser.checked ? pixel.style.backgroundColor = "white" :
//     pixel.style.backgroundColor = "black";
//   }} else {
//     pixel.onclick = function () {
//       eraser.checked ? pixel.style.backgroundColor = "white" :
//       pixel.style.backgroundColor = "black";
//     }
//   }

function getUserNumber() {
  let input = prompt("Choose a height/width between 1 and 100:");
  while (!/^[0-9]+$/.test(input) || input < 1 || input > 100) {
    alert(`You need to learn to follow directions.`);
    input = prompt("Enter a number: ");
  }
  return input;
}

function changeColor() {}

createPixels(getUserNumber()); //invoke the pixel-creating function

//TODO:
//1. add ability to change pixel height/width --> done
//2. let mouse drag over pixels instead of clicking each --> done
//3. ability to change colors --> working on it
