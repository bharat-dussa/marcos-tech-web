this.name = "Bhaart"

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

function greet() {
  console.log(`Hello, ${this.name}!`);
}

greet.call(); // Outputs: "Hello, Alice!"
greet.call(person2); // Outputs: "Hello, Bob!"
