/* eslint-env browser */

const NUMBER_OF_BOXES = 20;

function init() {
  initBoard();
}

function initBoard() {
  let boardEl = document.querySelector("#board");
  for (let i = 0; i < NUMBER_OF_BOXES; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style["background-color"] = getRandomColor();
    boardEl.append(box);
  }
}

function getRandomColor() {
  let colors = [],
    colorString = "rgb({{COLOR}})";
  colors.push(((Math.random() * 255) + 255) / 2);
  colors.push(((Math.random() * 255) + 255) / 2);
  colors.push(((Math.random() * 255) + 255) / 2);
  colorString = colorString.replace("{{COLOR}}", colors.join(","));
  return colorString;
}

init();