// Base class representing an Air Conditioner (AC)
class AirConditioner {
  constructor() {
    this.temperature = 25;
    this.isTurnedOn = false;
  }

  turnOn() {
    this.isTurnedOn = true;
  }

  turnOff() {
    this.isTurnedOn = false;
  }

  setTemperature(temp) {
    this.temperature = temp;
  }

  displayStatus() {
    console.log(
      `AC is ${this.isTurnedOn ? "on" : "off"} at ${this.temperature}°C`
    );
  }
}

// Subclass representing a Remote Control for the AC
class RemoteControl {
  constructor(ac) {
    this.ac = ac; // The remote control is associated with a specific AC
  }

  increaseTemperature() {
    this.ac.setTemperature(this.ac.temperature + 1);
  }

  decreaseTemperature() {
    this.ac.setTemperature(this.ac.temperature - 1);
  }

  togglePower() {
    if (this.ac.isTurnedOn) {
      this.ac.turnOff();
    } else {
      this.ac.turnOn();
    }
  }

  displayStatus() {
    this.ac.displayStatus();
  }
}

// Create an instance of the Air Conditioner
const myAC = new AirConditioner();

// Create a Remote Control associated with the AC
const myRemote = new RemoteControl(myAC);

// Use the Remote Control to interact with the AC
myRemote.togglePower();
myRemote.increaseTemperature();
myRemote.displayStatus();



// We have a base class AirConditioner that represents an air conditioner. 
// It has properties like temperature and isTurnedOn, and methods to turn the AC on/off, 
// set the temperature, and display its status.

// We also have a subclass RemoteControl that represents a remote control for the AC. 
// The remote control is associated with a specific AC instance passed as a parameter. 
// It has methods to increase temperature, decrease temperature, toggle the power, 
// and display the status of the AC.


// The RemoteControl class uses the AirConditioner instance 
// associated with it to perform actions on the AC. 
// This demonstrates inheritance, as RemoteControl 
// inherits the properties and methods of the AirConditioner.

// Polymorphism is demonstrated when we call myRemote.displayStatus(). 
// The displayStatus method in the RemoteControl class actually calls the displayStatus 
// method of the associated AirConditioner instance, allowing objects of different classes 
// to be treated as objects of a common superclass.