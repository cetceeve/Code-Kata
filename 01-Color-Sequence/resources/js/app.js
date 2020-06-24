/* eslint-env browser */

const NUMBER_OF_BOXES = 20,
  NUMBER_OF_CLICKS = 10;

var boxArray = [];

function init() {
  initBoard();
  setBoxClickListener();
}

function setBoxClickListener() {
  let boardEl = document.querySelector("#board");
  boardEl.addEventListener("click", (event) => {
    if (event.target.classList.contains("box")) {
      handleBoxClick(event.target);
    }
  });
}

function handleBoxClick(boxEl) {
  boxArray.push(boxEl);
  if (boxArray.length === NUMBER_OF_CLICKS) {
    replaySequence();
  }
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

function replaySequence() {
  let boxNum = 11 - boxArray.length;
  console.log("highlighting box " + boxNum);

  boxArray[0].classList.add("active");
  setTimeout(function() {
    boxArray[0].classList.remove("active");
    boxArray.shift();

    if (boxArray.length === 0) {
      console.log("sequence_finished");
      return;
    }

    replaySequence();
  }, 1000);
}

init();