// *** *** *** DECLARATIONS *** *** *** //

//buttons
const resetBtn = document.querySelector("#reset");
const etchBtn = document.querySelector("#etch");
const clickBtn = document.querySelector("#click");

//radios
const blackInk = document.querySelector("#black");
const eraser = document.querySelector("#eraser");
//canvas
const canvas = document.querySelector("#canvas");
//'pixels'
const px = document.getElementsByClassName("pixels");

// *** DEFAULT CANVAS CREATION *** //

let pixelWidth = 12;
createPixels(pixelWidth);
for (let i = 0; i < px.length; i++) {
  px[i].onmouseover = function () {
    console.log(px[i]);
    eraser.checked
      ? (px[i].style.backgroundColor = "white")
      : blackInk.checked
      ? (px[i].style.backgroundColor = "black")
      : (px[i].style.backgroundColor = `hsl(${
          Math.random() * 360
        }, 100%, 50%)`);
  };
}

// *** *** *** FUNCTIONS *** *** *** //

/* createPixels(num)
 1. removes existing 'pixels'
 1. creates a grid of 'pixels' num tall by num wide
 2. styles pixels and gives them class of '.pixels'
 3. attaches 'pixels' to the predefined 620x620 px grid
*/

function createPixels(num) {
  for (let p of px) {
    p.remove();
  }
  num *= num;
  for (let i = 0; i < num; i++) {
    const pixel = document.createElement("div");
    const sides = 620 / Math.sqrt(num) - 2;
    pixel.style.border = "solid lightgrey 1px";
    pixel.style.width = sides + "px";
    pixel.style.height = sides + "px";
    pixel.className = "pixels";
    canvas.appendChild(pixel);
  }
}

/* getUserNumber() 
1. prompts user to input number for height/width
2. if it's not a number or too low or high, alert 
3. returns input 
*/
function getUserNumber() {
  let input = prompt("Choose a height/width between 1 and 100:");
  while (!/^[0-9]+$/.test(input) || input < 1 || input > 100) {
    alert(`You need to learn to follow directions.`);
    input = prompt("Enter a number: ");
  }
  pixelWidth = input;
  clearGrid();
  for (let i = 0; i < px.length; i++) {
    px[i].onmouseover = function () {
      console.log(px[i]);
      eraser.checked
        ? (px[i].style.backgroundColor = "white")
        : blackInk.checked
        ? (px[i].style.backgroundColor = "black")
        : (px[i].style.backgroundColor = `hsl(${
            Math.random() * 360
          }, 100%, 50%)`);
    };
  }
}

/* clearGrid()
1. clears previous grid
*/
function clearGrid() {
  // getUserNumber()
  const gridArray = Array.from(canvas.childNodes);
  gridArray.forEach((p) => {
    canvas.removeChild(p);
  });
  createPixels(pixelWidth);
}

/*
 *** *** *** GAME MODES *** *** ***
 */
function etchMode() {
  clearGrid();
  for (let i = 0; i < px.length; i++) {
    px[i].onmouseover = function () {
      console.log(px[i]);
      eraser.checked
        ? (px[i].style.backgroundColor = "white")
        : blackInk.checked
        ? (px[i].style.backgroundColor = "black")
        : (px[i].style.backgroundColor = `hsl(${
            Math.random() * 360
          }, 100%, 50%)`);
    };
  }
}

function clickMode() {
  clearGrid();
  for (let i = 0; i < px.length; i++) {
    px[i].onclick = function () {
      console.log(px[i]);
      eraser.checked
        ? (px[i].style.backgroundColor = "white")
        : blackInk.checked
        ? (px[i].style.backgroundColor = "black")
        : (px[i].style.backgroundColor = `hsl(${
            Math.random() * 360
          }, 100%, 50%)`);
    };
  }
}

// *** *** *** BUTTON EVENTS *** *** *** //

console.log(px);
resetBtn.addEventListener("click", getUserNumber);
etchBtn.addEventListener("click", etchMode);
clickBtn.addEventListener("click", clickMode);

//TODO:
//1. add ability to change pixel height/width --> done
//2. let mouse drag over pixels instead of clicking each --> done
//3. ability to change colors --> done
//4. add ability to remove pixel grid-lines
//5. color picker?
