class ArrayLikeObject {
  constructor(...elements) {

    // this = {}
    // {
    //   0: 1,
    //   1: 2,
    //   2: 3,
    //   3: 4
    // }
    this.length = 0;
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i]; 
      this.length++;
    }
  }

  push(element) {
    this[this.length] = element;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const lastElement = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastElement;
  }

  toString() {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }
    return result.join(",");
  }
}


Array.prototype.getName = function () {
  console.log("Hello")
}


const arrLike = new ArrayLikeObject(1, 2, 3);

console.log(arrLike.length); // Outputs 3
console.log(arrLike[0]); // Outputs 1
console.log(arrLike[1]); // Outputs 2
console.log(arrLike[2]); // Outputs 3

arrLike.push(4);
console.log("after push", arrLike.length); // Outputs 4

const popped = arrLike.pop();
console.log(popped); // Outputs 4
console.log(arrLike.length); // Outputs 3

console.log(arrLike.toString()); // Outputs "1,2,3"



console.log(arrLike.getName()); // Outputs "1,2,3"
