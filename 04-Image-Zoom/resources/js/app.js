/* eslint-env browser */

var sourceEl, targetEl;

function init() {
  sourceEl = document.querySelector(".original");
  targetEl = document.querySelector(".zoom");
  sourceEl.addEventListener("mousemove", onMouseMove);
}

function onMouseMove(event) {
  console.log(event);
}

init();