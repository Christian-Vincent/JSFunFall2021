let fullName = "Joe Fernandes"; // e.g.
let newLastName = "Washington"; // e.g.

/**
 * A person just got married and they need their last name replaced. You will change the value of "fullName" below. Replace the last name in "fullName" with "newLastName".
 *
 * @example
 * let fullName = "Emily Rose";
 * let newLastName = "Smith";
 * The new value for "fullName" should result in "Emily Smith".
 *
 * @example
 * let fullName = "Joe Fernandes";
 * let newLastName = "Washington";
 * The new value for "fullName" should result in "Joe Washington".
 */

// WRITE YOUR ANSWER BELOW THIS LINE
<<<<<<< HEAD
<<<<<<< HEAD:exercises/02-strings/06-replace-last-name.js
let space = fullName.indexOf(" ");
let firstName = fullName.substring(0, space);
fullName = firstName + " " + newLastName;
=======
=======
>>>>>>> 16fccf9fd01db47828d2837c3338fc4b4f92133a

const index = fullName.indexOf(" ");
const firstName = fullName.substring(0, index);
fullName = firstName + " " + newLastName;
<<<<<<< HEAD
>>>>>>> 136f3ce646cbf2a4a2aa7a538502627037f4c48f:solutions/02-strings/06-replace-last-name.solution.js
=======
>>>>>>> 16fccf9fd01db47828d2837c3338fc4b4f92133a
