/* eslint-env browser */

(function() {

  const CSS_CODE =
    `.task-el {
  position: fixed;
  width: 30vw;
  top: 8vh;
  right: 5vw;
  padding: 1vw;
  border-width: 0;
  border-radius: 0.4em;
  background: rgb(30, 30, 30);
  font-size: 1.1em;
  line-height: 1.75em;
  color: rgb(255, 255, 255);
  z-index: 9999;
}

.task-el:after {
  content: '';
  position: absolute;
  top: 0;
  left: 75%;
  width: 0;
  height: 0;
  border: 3vh solid transparent;
  border-bottom-color: rgb(30, 30, 30);
  border-top: 0;
  margin-left: -2vh;
  margin-top: -2vh;
  z-index: 9998;
}

.task-hidden {
	display: none;
}`;

  var taskEl = document.querySelector("#task"),
    taskToggleButton = document.querySelector("#task-toggle");

  function init() {
    injectCSS();
    hideTaskElement();
    taskEl.classList.add("task-el");
    taskToggleButton.addEventListener("click", onTaskToggleButtonClicked);
  }

  function injectCSS() {
    let style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = CSS_CODE;
    document.querySelector("head").appendChild(style);
  }

  function hideTaskElement() {
    taskEl.classList.add("task-hidden");
  }

  function showTaskElement() {
    taskEl.classList.remove("task-hidden");
  }

  function taskElementIsVisible() {
    return !taskEl.classList.contains("task-hidden");
  }

  function onTaskToggleButtonClicked() {
    if (taskElementIsVisible() === true) {
      hideTaskElement();
    } else {
      showTaskElement();
    }
  }

  return {
    init: init,
  };
}().init());