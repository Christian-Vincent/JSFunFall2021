let monthNum = "10"; // e.g.

/**
 * You are going to convert a month in its number form (e.g. 1 or "01")
 * into the month as text.
 * "monthNum" represents the given month as a number.
 * Create a variable called "monthText".
 * It should convert "monthNum" into the month as text.
 * If you cannot convert "monthNum" into text, than "monthNum" should be null.
 *
 * @example
 * If "monthNum" is "03", then "monthText" should be "March".
 * If "monthNum" is "12", then "monthText" should be "December".
 * If "monthNum" equals anything else, then "monthText" should be null.
 *
 * You must use a switch statement to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let monthText = 0;
switch (monthNum) {
  case "1":
    console.log("January");
    break;
  case "2":
    console.log("February");
    break;
  case "3":
    console.log("March");
    break;
  case "4":
    console.log("April");
    break;
  case "5":
    console.log("May");
    break;
  case "6":
    console.log("June");
    break;
  case "7":
    console.log("July");
    break;
  case "8":
    console.log("August");
    break;
  case "9":
    console.log("September");
    break;
  case "10":
    console.log("October");
    break;
  case "11":
    console.log("November");
    break;
  case "12":
    console.log("December");
    break;
  default:
    monthText = null;
}