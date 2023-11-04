// Base class: Air Conditioner (AC)
class AC {
  constructor() {
    this.temperature = 25;
    this.isOn = false;
  }

  increaseTemp() {
    if (this.isOn) {
      this.temperature++;
    } else {
      console.log("AC is off! Please switch it on.");
    }
  }

  decreaseTemp() {
    if (this.isOn) {
      this.temperature--;
    } else {
      console.log("AC is off! Please switch it on.");
    }
  }

  switchOnOff(isOn) {
    this.isOn = isOn;
    if (isOn) {
      console.log("AC is now on.");
    } else {
      console.log("AC is now off.");
    }
  }
}

// Subclass: Remote Control
class RemoteControl extends AC {
  constructor() {
    super(); // Call the parent constructor to inherit properties
  }

  changeTemperature(newTemp) {
    if (newTemp >= 18 && newTemp <= 30) {
      this.temperature = newTemp;
      console.log(`Temperature set to ${newTemp}°C`);
    } else {
      console.log(
        "Invalid temperature setting. Please use a value between 18°C and 30°C."
      );
    }
  }
}

// Create instances
const ac = new AC();
const remote = new RemoteControl();

console.log(ac.temperature); // 25
console.log(ac.isOn); // false

remote.switchOnOff(true);
console.log(ac.isOn); // true

remote.changeTemperature(22); // Temperature set to 22°C
console.log(ac.temperature); // 22

remote.increaseTemp(); // Increases temperature
console.log(ac.temperature); // 23

remote.switchOnOff(false); // AC is now off.
remote.decreaseTemp(); // AC is off! Please switch it on.
