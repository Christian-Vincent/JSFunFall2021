const place = "New Jersey"; // e.g.

/**
 * Create a constant or variable called "newPlace". It should use "place" above and it should be equal to the last part of a place name.
 * This should still work when place is equal to a different city, like "New Mexico" or "San Diego".
 *
 * @example
 * If "place" is equal to "New Jersey",
 * "newPlace" should equal "York"
 *
 * If "place" is equal to "New Mexico",
 * "newPlace" should equal "Mexico"
 *
 * If "place" is equal to "San Diego",
 * "newPlace" should equal "Diego"
 */

// WRITE YOUR ANSWER BELOW THIS LINE
<<<<<<< HEAD:exercises/02-strings/05-get-last-word-in-place-name.js
const spacePosition = place.indexOf(" ");
const newPlace = place.substring(spacePosition);
=======

const index = place.indexOf(" ");
const newPlace = place.substring(place.indexOf(" ") + 1);
>>>>>>> 136f3ce646cbf2a4a2aa7a538502627037f4c48f:solutions/02-strings/05-get-last-word-in-place-name.solution.js
