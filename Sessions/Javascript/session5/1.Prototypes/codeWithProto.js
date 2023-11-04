// /**
//  * All JavaScript objects inherit properties and methods from a prototype:
//  * Date objects inherit from Date.prototype
//  * Array objects inherit from Array.prototype
//  * Person objects inherit from Person.prototype
//  */

function Person(first, last, age, eye) {
    this.firstName = first;
    console.log('this after firstName:', this);
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

  }

  
 
  Person.prototype.middleName = "R"

  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myFather1 = new Person("John", "Doe", 50, "blue");
  
  console.log(myFather.middleName);

  



