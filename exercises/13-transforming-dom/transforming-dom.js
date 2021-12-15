/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  const image = document.querySelector("img");
  image.src = "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";
  const newLink = document.querySelector(".myLink");
  newLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
  const text = document.querySelector(".alert-success");
  text.textContent = "I am victorious!";
  const newBackgroundColor = document.querySelector(".alert-info");
  newBackgroundColor.style.backgroundColor = "black";
  const newTextColor = document.querySelector(".alert-text");
  newTextColor.classList.add('text-white');
  const newHide = document.querySelector(".alert-warning");
  newHide.style.display = "none";
  const newDisplay = document.querySelector("#show");
  newDisplay.classList.remove('#hidden');
  const checkText = document.querySelector(".text-dark");
  if (document.querySelector("button").contains("btn-primary")) {
    console.log("check blue");
  }
})();
