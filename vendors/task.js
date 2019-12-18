/* eslint-env browser */

(function() {

  const CSS_CODE =
    `.task-el {
  position: fixed;
  width: 30vw;
  top: 10vh;
  right: 1vw;
  padding: 1vw;
  border-width: 0;
  border-radius: 0.4em;
  background: rgba(30, 30, 30, 0.85);
  font-size: 1.1em;
  line-height: 1.75em;
  color: rgb(255, 255, 255);
  z-index: 9999;
}

.task-hidden {
	display: none;
}`;

  var taskEl = document.querySelector("#task"),
    taskToggleButton = document.querySelector("#task-toggle");

  function init() {
    insertTaskDescrition();
    injectCSS();
    hideTaskElement();
    taskEl.classList.add("task-el");
    taskToggleButton.addEventListener("click", onTaskToggleButtonClicked);
  }

  function insertTaskDescrition() {
    fetch("./Readme.md").then(response => response.text()).then(text => taskEl.innerHTML = text); 
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