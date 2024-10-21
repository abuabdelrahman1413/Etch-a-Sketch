const container = document.getElementById("container");
const size = 16;

for (let i = 0; i < size; i++) {
  const divItems = document.createElement("div");
  divItems.classList.add("grid-items");
  container.appendChild(divItems);
  for (let j = 0; j < size; j++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    divItems.appendChild(div);
    div.addEventListener("mouseover", (e) => {
      div.classList.toggle("grid-item-hover");
    });
  }
}
