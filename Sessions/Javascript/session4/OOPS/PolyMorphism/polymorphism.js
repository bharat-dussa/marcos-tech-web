/**
 * Polymorphism allows objects of different classes to be treated as objects of a
 * common superclass. In this example, we'll demonstrate polymorphism using a
 * Controller class that can control various devices, including the AC.
 * We'll create a TV class to control a television, and
 * both the RemoteControl and TVRemote will inherit from the Controller class.
 */

class Controller {
  constructor(device) {
    this.device = device;
  }

  turnOn() {
    this.device.turnOn();
  }

  turnOff() {
    this.device.turnOff();
  }
}

class TV {
  constructor() {
    this.isOn = false;
  }

  turnOn() {
    // Method Overiding
    this.isOn = true;
    console.log("TV is now on.");
  }

  turnOff() {
    this.isOn = false;
    console.log("TV is now off.");
  }
}

class AC {
  constructor() {
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    console.log("AC is now on.");
  }

  turnOff() {
    this.isOn = false;
    console.log("AC is now off.");
  }
}

class RemoteControl extends Controller {
  constructor(device) {
    // super method calls the parent class constructor;
    super(device);
  }

  changeTemperature(newTemp) {
    if (this.device instanceof AC) {
      if (newTemp >= 18 && newTemp <= 30) {
        console.log(`Temperature set to ${newTemp}°C`);
      } else {
        console.log(
          "Invalid temperature setting. Please use a value between 18°C and 30°C."
        );
      }
    } else {
      console.log("Device does not support temperature changes.");
    }
  }
}

// Create instances
const tv = new TV();
const ac = new AC();
const remote = new RemoteControl(ac);
const tvRemote = new RemoteControl(tv);

remote.turnOn(); // AC is now on.
remote.changeTemperature(22); // Temperature set to 22°C

tvRemote.turnOn(); // TV is now on.
tvRemote.changeTemperature(24); // Device does not support temperature changes.
