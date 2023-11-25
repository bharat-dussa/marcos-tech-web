// Grandfather class
class Grandfather {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    gappeLadane() {
      console.log(`${this.name} gappe lada raha hai`);
    }
  }
  
  // Father class inherits from Grandfather
  class Father extends Grandfather {
    constructor(name, age, job) {
      super(name, age); // Call the constructor of the superclass
      this.job = job;

      // this.name = name;
      // this.age = age;
    }
  
    // gappeLadane() {
    //   console.log(`${this.name} gappe lada raha hai`);
    // }

    goWork() {
      console.log(`${this.name} goes to work as a ${this.job}.`);
    }
  }
  
  // Son class inherits from Father
  class Son extends Father {
    constructor(name, age, school) {
      super(name, age, 'Engineer'); // Call the constructor of the superclass
      this.school = school;
    }
  
    goToSchool() {
      console.log(`${this.name} goes to ${this.school} for classes.`);
    }
  }
  
  // Create instances of the classes
  const grandpa = new Grandfather('Balram', 80);
  const father = new Father('Vamshi', 50, 'Doctor');
  const son = new Son('Laxmi', 20, 'University');
  
  // Use the instances
  // grandpa.gappeLadane();
  father.gappeLadane();
  // father.goWork();
  son.gappeLadane();
  // son.goWork();
  // son.goToSchool();
  