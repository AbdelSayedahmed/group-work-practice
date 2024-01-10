/**
 * Calculates the total area of rectangles given an array of rectangle dimensions.
 *
 * @param {number[][]} rectangles - An array of rectangles, where each rectangle is represented by [length, width].
 * @returns {number} - The total area of all rectangles.
 */
function calculateTotalArea(rectangles) {

  return rectangles.reduce ((totalArea, [length, width]) => totalArea + length * width, 0);
  // Implementation is intentionally omitted in this file.
}
const rectangles = [[1, 2],[3, 4], [8, 10]]

console.log("total area of rectangles", calculateTotalArea(rectangles));

function add(a, b) {
  return a + b
}

console.log(add (1, 2));

function one(number) {
  return number * number 
}
console.log(one (2))

function element(one, two, three) {
  return one * two * three
}

console.log(element (2, 5, 6))
/**
 * Finds and returns the largest element in an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers.
 * @returns {number|null} - The largest element or null if the array is empty.
 */
function findLargestElement(numbers) {
  numbers = numbers.sort((a, b) => b - a);

  return numbers.length ? numbers[0] : null;
}

/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} inputString - The input string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(inputString) {
  if(inputString===inputString.split(``).reverse().join(``)){

    return true
  }
  else return false

  // Implementation is intentionally omitted in this file.
}






/**
 * Counts the occurrences of a specific element in an array.
 *
 * @param {Array} array - The array of elements.
 * @param {*} targetElement - The element to count occurrences of.
 * @returns {number} - The number of occurrences of the target element.
 */
function countOccurrences(array, targetElement) {
   let count = 0;
   for (let ele of array){
    if (ele === targetElement){
      count++
    }
   }
   return count
}

/**
 * Merges two sorted arrays into a new sorted array.
 *
 * @param {number[]} arr1 - The first sorted array.
 * @param {number[]} arr2 - The second sorted array.
 * @returns {number[]} - The merged and sorted array.
 */
const mergeSortedArrays = (arr1, arr2) => {
  const newArr = [];
  
  return newArr.concat(arr1, arr2).sort((a, b) => a - b);
}

/**
 * Calculates the factorial of a non-negative integer.
 *
 * @param {number} n - The non-negative integer.
 * @returns {number} - The factorial of the given number.
 */
function calculateFactorial(n) {
  if (n < 0) return undefined
  let result = 1; 
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
  // Implementation is intentionally omitted in this file.
}
console.log("factorial of 5", calculateFactorial(5));