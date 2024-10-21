let container = document.getElementById("container");
let size = 16;
const reset = document.getElementById("reset");
reset.addEventListener("click", (e) => {
  container.innerHTML = "";
  do {
    size = prompt("Enter the size of the grid less than or equal to 100");
    // if user cancels the prompt
    if (size === null || size === "") {
      size = 16;
      break;
    }
  } while (size > 100);
  makeGrid(size);
});

for (let i = 0; i < size; i++) {
  let divItems = document.createElement("div");
  divItems.classList.add("grid-items");
  container.appendChild(divItems);
  for (let j = 0; j < size; j++) {
    let div = document.createElement("div");
    div.classList.add("grid-item");
    divItems.appendChild(div);
    div.addEventListener("mouseover", (e) => {
      div.classList.toggle("grid-item-hover");
    });
    // div.addEventListener("mouseleave", (e) => {
    //   div.classList.remove("grid-item-hover");
    // });
  }
}

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    let divItems = document.createElement("div");
    divItems.classList.add("grid-items");
    container.appendChild(divItems);
    for (let j = 0; j < size; j++) {
      let div = document.createElement("div");
      div.classList.add("grid-item");
      divItems.appendChild(div);
      div.addEventListener("mouseover", (e) => {
        div.classList.toggle("grid-item-hover");
      });
      // div.addEventListener("mouseleave", (e) => {
      //   div.classList.remove("grid-item-hover");
      // });
    }
  }
}
