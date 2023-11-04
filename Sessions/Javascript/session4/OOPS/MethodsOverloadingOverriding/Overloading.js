class MathOperations {
  add(x, y) {
    return x + y;
  }

  // Method overloading for different argument types
  add(x, y, z) {
    return x + y + z;
  }
}

const math = new MathOperations();
console.log(math.add(2, 3)); // Outputs 5
console.log(math.add(2, 3, 4)); // Outputs 9
