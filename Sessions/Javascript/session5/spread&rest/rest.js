/**
 * Rest Operator (...):
 * The rest operator is used in function parameters to collect multiple arguments into an array.
 * It allows you to work with a variable number of arguments.
 */

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15



// Separating elements from an array:
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]



// Combining with other arguments:
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
  }
  console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
  
