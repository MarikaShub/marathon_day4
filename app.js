const board = document.querySelector("#board");
const colors = [
  "rgb(237, 90, 90)",
  "rgb(209, 73, 202)",
  "rgb(35, 180, 209)",
  "rgb(121, 114, 219)",
  "rgb(234, 222, 91)",
  "rgb(234, 89, 49)",
  "rgb(124, 6, 160)",
  "rgb(59, 5, 76)",
];
const SQUARE_NUMBER = 500;

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
