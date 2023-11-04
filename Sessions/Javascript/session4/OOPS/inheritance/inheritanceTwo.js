// Grandfather class
class Grandfather {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    gappeLadane() {
      console.log(`${this.name} gappe karega`);
    }
  }
  
  // Father class inherits from Grandfather
  class Father extends Grandfather {
    constructor(name, age, job) {
      super(name, age); // Call the constructor of the superclass
      this.job = job;
    }
  
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
  const grandpa = new Grandfather('Grandpa', 80);
  const father = new Father('Dad', 50, 'Doctor');
  const son = new Son('Junior', 20, 'University');
  
  // Use the instances
  grandpa.tellStory();
  father.tellStory();
  father.goWork();
  son.tellStory();
  son.goWork();
  son.goToSchool();
  