/**
 * NFE stands for Named Function Expression. 
 * It's a JavaScript function expression that has a name. 
 * While function expressions are typically anonymous (i.e., they don't have a name), 
 * NFEs give the function a name, 
 * which can be useful for debugging and self-reference within the function. 
 * Here's an explanation and some examples:
 */

// Basic one.
const add = function addNumbers(x, y) {
    return x + y;
  };
  
  console.log(add(3, 4)); // Outputs: 7
 
  

//    Recursive one
  const factorial = function findFactorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * findFactorial(n - 1);
    }
  };
  
  console.log(factorial(5)); // Outputs: 120
  
  