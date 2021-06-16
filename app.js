// const clearBtn = document.querySelector('button')

// function getUserNum (){
//   let userNum = prompt('Please enter a height/width between 2 and 64')
//   return parseInt(userNum) 
// }



function createPixels(num) { //creates a grid of 'pixels' num tall by num wide
  const canvas = document.querySelector("#canvas");
  num*=num
  
  for (let i = 0; i < num; i++) {
    const pixel = document.createElement("div");
    const sides = (720/Math.sqrt(num))-2
    pixel.style.border = 'solid lightgrey 1px'
    pixel.style.width = sides+'px'
    pixel.style.height = sides+'px'
    pixel.onclick = function () {pixel.style.backgroundColor='black'}
    pixel.className = 'pixel'
    canvas.appendChild(pixel);
    // console.log(i)
  }
}

function changeColor(){

}

createPixels(16) //invoke the pixel-creating function with for a 16x16 grid

const pixelsArr = document.getElementsByClassName('pixel') //assigning variable for pixels

for(pix of pixelsArr){
  
}


