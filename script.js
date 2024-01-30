// --------------------------
//#region Section 1
// --------------------------
/**
 * @param {number} num1
 * @param {number} num2
 * @returns the sum of the two given numbers
 */
function add(num1, num2) {
  return num1 + num2;
}

/**
 * @param {number} num1
 * @param {number} num2
 * @returns the difference between the two given numbers
 */
function subtract(num1, num2) {
  return num1 - num2;
}

/**
 * @param {string} name
 * @returns a string that greets the given name.
 * If a name is not provided,
 * then a generic greeting will be returned.
 */
function greet(name) {
  if (typeof name === "undefined") {
    return "Hello!";
  } else {
    return `Hello, ${name}!`;
  }
}

/**
 * @param {int[]} nums
 * @returns the sum of the numbers in the given array of numbers
 */
function sum(nums) {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}

//#endregion Section 1

// --------------------------
//#region Section 2
// --------------------------
// Write your code here!
function isPositive(number) {
  const positive = Boolean();
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
function getFirst(array) {
  return array[0];
}
function getLast(array) {
  if ((array, length === 0)) {
    return null;
  }
  return array[array.length - 1];
}
function findLeast(...array) {
  return Math.min(...array);
}

function shareFirstLetter(a1, a2) {
  if (a1 === " " || a2 === " ") {
    return false;
  }
  return a1[0] === a2[0];
}

function getFirstLast(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];
  return [firstElement, lastElement];
}
function shareLastDigit(num1, num2) {
  let lastDigit1 = num1 % 10;
  let lastDigit2 = num2 % 10;
  return lastDigit1 === lastDigit2;
}

//#endregion Section 2

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  add,
  subtract,
  greet,
  sum,
  isPositive,
  getFirst,
  getLast,
  findLeast,
  shareFirstLetter,
  getFirstLast,
  shareLastDigit,
};
