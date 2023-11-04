/**
 * Arrow functions are a concise way to write functions in JavaScript. 
 * The main difference between normal (function declaration or expression) 
 * and arrow functions is how they handle the this keyword and their syntax.
 */

function greet(name) {
    return "Hello, " + name + "!";
  }
  
  const result = greet("Alice");
  console.log(result);

  

  const greet = (name) => "Hello, " + name + "!";

const result = greet("Bob");
console.log(result);



function Person(name) {
    this.name = name;
    this.greet = () => {
      console.log("Hello, " + this.name);
    };
  }
  
  const alice = new Person("Alice");
  const greet = alice.greet;
  greet(); // This will work as expected because 'this' is lexically scoped.

  

  function Person(name) {
    this.name = name;
    this.greet = function () {
      console.log("Hello, " + this.name);
    };
  }
  
  const alice = new Person("Alice");
  const greet = alice.greet;
  greet(); // This will throw an error because 'this' is undefined.

  