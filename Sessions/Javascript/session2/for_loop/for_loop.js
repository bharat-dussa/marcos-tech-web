
// Add your JavaScript code here
// for Loop: A standard loop that executes a block of code for a specified number of iterations.


for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  

//   2. for...of Loop: Used to iterate over iterable objects (arrays, strings, maps, etc.).

const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}


// 3. for...in Loop: Used to loop through the properties of an object. It's often used for iterating over object keys.
const person = { name: 'Alice', age: 30 };
for (const key in person) {
  console.log(key, person[key]);
}

// 4. while Loop: Executes a block of code as long as a specified condition is true.

let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// 5. do...while Loop: Similar to the while loop, but it guarantees at least one execution of the block.
// let count = 0;
// do {
//     console.log(count);
//     count++;
//   } while (count < 5);


// 6. forEach() Method: Used with arrays to iterate over their elements. It's a higher-order function, not a traditional loop.
const array = [1, 2, 3];
array.forEach((item) => {
  console.log(item);
});

// 7. map() Method: Used with arrays to create a new array by applying a function to each element.

const array = [1, 2, 3];
const doubled = array.map((item) => item * 2);
console.log(doubled);


  