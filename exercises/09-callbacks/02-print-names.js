/**
 * This is a question with two parts.
 *
 * PART 1
 * Create a function called "printer".
 * Given a student name, it should format and prints out the value in a visually appealing way
 * (e.g. with hyphens or asterisks before each value) with `console.log`
 * slide
 * @example
 *  - Jamal
 *  - Matina
 * @param {string} name instructor name
 */
const printer = (name) => {
  console.log("* " + name);
};
// WRITE PART 1 OF YOUR ANSWER HERE

/**
 * PART 2
 * NOTE that the test will use the "printer" function that you completed in the problem above.
 * Loop through the array of strings.
 * For each name, calls upon the function "printer" to print out the name
 * @param {array}
 * @param {function} callback printer function
 *
 * @example
 * printNames(["Jamal", "Matina"], printer);
 * // - Jamal
 * // - Matina
 */
const printNames = (array, callback) => {
  for(let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// IGNORE THIS BELOW. It is for the tests.

const myExports = {
  printer: undefined,
  printNames,
};
try {
  //eslint-disable-next-line no-undef
  if (printer) myExports.printer = printer;
  // eslint-disable-next-line no-undef
} catch (e) {}

export default myExports;
