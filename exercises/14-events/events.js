(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Challenge 1: Alert Me
   * When the clicks on the button that says "Alert Me!", it should display an alert.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
   */
  const newAlert = document.querySelector('.text-center');

  const alertFunc = () => {
    alert("Alert Me!");
  };

  newAlert.addEventListener("click", alertFunc);
  /**
   * Challenge 2: Disable a button that will charge a credit card.
   *
   * To prevent users from charging the credit card more than once:
   * 1. Disable the button when it is clicked.
   * 2. Change the text to say e.g. "Loading ..." once it is clicked.
   */
  const button = document.querySelector('.btn-warning');

  const disButton = () => {
    button.disabled = 'disabled';
    button.textContent = 'Loading ...';
  };

  button.addEventListener("click", disButton);
  /**
   * Challenge 3: Show comments for the news story.
   *
   * When the user clicks on the "View Comments" button, the comment section should appear.
   * Right now, the comments are hidden because they have the class ".hidden",
   * but you can switch up the HTML so that it uses inline styles if you like.
   *
   * BONUS: Clicking on the button should toggle instead of just show the comments.
   * If the comments are open, change the button text from "View Comments" to "Hide Comments".
   */
  const showCommentsButton = document.querySelector('#showComments');
  const comments = document.querySelector('#comments');

  showCommentsButton.addEventListener('click', () => {
    comments.classList.remove('hidden');
  });
  /**
   * Challenge 4: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */
  const capture1 = document.querySelector('#input');
  const capture2 = document.querySelector('#display');

  const displayEvent = () => {
    capture2.target.value;
  };

  capture1.addEventListener('input', displayEvent);
  /**
   * Challenge 5: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  const form = document.querySelector('#myForm');
  const theDisplay = document.querySelector('#myFormDisplay');

  const formDisplay = () => {
    theDisplay.target.value;
  };

  form.addEventListener('click', formDisplay);
  /**
   * Challenge 6: Add pagination to the student table.
   *
   * First, when the page initially loads, only the first 10 students should be visible.
   * (That is, every student row that has class="page1"). You can just use CSS / HTML to do this.
   *
   * Second, clicking on the pagination below should show and hide different students in the table:
   * - Clicking on the "«" and "1" buttons should show everything in class="page1" and hide everything in class="page2".
   * - Clicking on the "2" and "»" buttons should show everything in class="page2" and hide everything in class="page1".
   */
  const page1 = document.querySelector(".page1");

  const displayPage = () => {
    page1.target.value;
  };

  page1.addEventListener("click", displayPage);
  /**
   * Challenge 7: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here
})();
