/**
 * 1. Encapsulation: The class encapsulates the properties and methods 
    *   related to the air conditioner remote. 
    *   The temp, plus, minus, isOn properties, and increaseTemp, decreaseTemp, switchAcOnOff 
    *   methods are encapsulated within the class.
    * Abstraction: The class abstracts the functionality of an air conditioner remote. 
    *   It provides methods like increaseTemp, decreaseTemp, and switchAcOnOff 
    *   to interact with the AC. 
    *   Users of this class don't need to know the internal 
    *   details of how the temperature is adjusted; they only need to call the appropriate methods.
 * 
 */

class AcRemote {
  constructor(plus, minus) {
    this.temp = 18;
    this.plus = plus;
    this.minus = minus;
    this.isOn = false;
    
  }

  increaseTemp() {
    if (this.isOn) {
      return (this.temp = this.temp + this.plus);
    } else {
      console.log("Ac is off! please switch on it");
    }
  }
  decreaseTemp() {
    if(this.isOn) {
      return(this.temp= this.temp - this.minus);
    }else{
      console.log("Ac is off! please switch on it");
    }
  }


  switchAcOnOff(isAcOn) {
    this.isOn = isAcOn
  }


}
