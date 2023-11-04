/**
 * IIFE stands for Immediately Invoked Function Expression. 
 * It's a common JavaScript design pattern that involves defining 
 * a function expression and immediately invoking it. 
 * IIFE is often used to create a private scope for variables, 
 * preventing them from polluting the global scope,
 *  and for executing code immediately. Here's an explanation and some examples:
 * 
 */


// Syntax 

(function() {
    // Code to be executed immediately
  })();

  
//   Basic 

(function() {
    console.log("Hello from IIFE!");
  })();
  // Outputs: "Hello from IIFE!"

  
// 2.Using IIFE to Create a Private Scope:

(function() {
    const privateVariable = "I'm private!";
    console.log(privateVariable);
  })();
  // Outputs: "I'm private!"
  
  console.log(typeof privateVariable); // Outputs: "undefined"


//   3. Passing Arguments:
(function(name) {
  console.log(`Hello, ${name}!`);
})("John");
// Outputs: "Hello, John!"


// 4. Returning Values:

const result = (function(x, y) {
    return x + y;
  })(3, 4);
  
  console.log(result); // Outputs: 7

  


  