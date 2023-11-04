/**
 * Spread Operator (...): 
 * The spread operator is used to split the contents of an array or object into individual elements. 
 * It's often used to create a shallow copy of an array or combine arrays.
 */


/** 
 * Creating a shallow copy of an array:
*/

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]

// Combining Arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]


// Copying

const orgArray = [1, 2, 3];
const newArray = [...orgArray, 4, 5];
console.log(newArray); // [1, 2, 3, 4, 5]


