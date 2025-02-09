/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  document.querySelector("li");
  document.querySelector("#myId");
  document.querySelectorAll(".bg-warning");
  document.querySelector(".btn-primary");
  document.querySelectorAll(".link");
  const cells = document.querySelectorAll("#myRow");
  cells.forEach((cell) => {
    console.log(cell);
  });
})();
