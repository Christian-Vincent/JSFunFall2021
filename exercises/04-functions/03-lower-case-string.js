/**
 * Create a function called "lowerCaseString".
 * If given a string, it should return the string lower cased.
 * @example lowerCaseString("HELLO WORLD"); // hello world
 *
 * If given a value that is not a string, this function should not throw an error. HINT: you will need to exit out of the function early.
 * @example lowerCaseString(); // undefined (should not throw an error)
 * @example lowerCaseString(null); // undefined (should not throw an error)
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
const lowerCaseString = (str1) => {
  if (str1) {
    return str1.toLowerCase();
  } else {
    return undefined;
  }
};