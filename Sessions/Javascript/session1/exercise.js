/**
 * Write a program to convert to degree(C) to Fahrenheit(K).
 */

const celsius = 32;

if (!isNaN(celsius)) {
  const kelvin = celsius + 273.15;
  console.log(kelvin);
} else {
  console.log("Invalid input");
}

function greet(name) {
  return `Hello, ${name}!`;
}

// Calling the function and storing the result
const greeting = greet("Alice");
console.log(greeting); // Output: "Hello, Alice!"



