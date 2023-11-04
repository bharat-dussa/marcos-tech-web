function greet(greeting, name) {
    console.log(`${greeting}, ${name}`);
  }
  
  const greetHello = greet.bind(null, 'Hello');
  greetHello('Alice'); // Outputs: "Hello, Alice"
  greetHello('Bob');   // Outputs: "Hello, Bob"
  