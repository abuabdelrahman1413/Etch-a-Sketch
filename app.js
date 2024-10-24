
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
}


let container = document.getElementById("container");
let size = 16;
const reset = document.getElementById("reset");
reset.addEventListener("click", (e) => {
  container.innerHTML = "";
  do {
    size = prompt("Enter the size of the grid less than or equal to 100");
    // if user cancels the prompt
    if (size === null || size === "" || size === undefined || size <= 0) {
      size = 16;
      break;
    }
  } while (size > 100);
  makeGrid(size);
});

for (let i = 0; i < size; i++) {
  const squareSize = 960 / size;
  let divItems = document.createElement("div");
  divItems.classList.add("grid-items");
  container.appendChild(divItems);
  for (let j = 0; j < size; j++) {
    let div = document.createElement("div");
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    div.style.border = `1px solid grey`;
    div.style.backgroundColor = `white`
    divItems.appendChild(div);
    div.addEventListener("mouseover", (e) => {
      div.style.backgroundColor = randomColor();
    });
    // div.addEventListener("mouseleave", (e) => {
    //   div.classList.remove("grid-item-hover");
    // });
  }
}

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    const squareSize = 960 / size;
    let divItems = document.createElement("div");
    divItems.classList.add("grid-items");
    container.appendChild(divItems);
    for (let j = 0; j < size; j++) {
      let div = document.createElement("div");
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;
      div.style.border = `1px solid grey`;
      div.style.backgroundColor = `white`
      divItems.appendChild(div);
      div.addEventListener("mouseover", (e) => {
        div.style.backgroundColor = randomColor();
      });
      // div.addEventListener("mouseleave", (e) => {
      //   div.classList.remove("grid-item-hover");
      // });
    }
  }
}
