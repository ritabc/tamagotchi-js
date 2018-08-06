import { Characteristic } from './../src/characteristic.js';

export function Animal(name, type){
  this.name = name;
  this.type = type;
  this.hunger = new Characteristic('hunger', 50, 30000, 20)
  this.activity = new Characteristic('activity', 50, 45000, 25)
  this.sleepiness = new Characteristic('sleepiness', 50, 60000, 15)
  this.fastIncrease = this.needsIncrease(10);
  this.regularIncrease = this.needsIncrease(0);
  this.slowIncrease = this.needsIncrease(-10)
  this.fastDecrease = this.needsSatisfied(10);
  this.regularDecrease = this.needsSatisfied(0);
  this.slowDecrease = this.needsSatisfied(-10);
}

Animal.prototype.needsIncrease = function(incrementBoost) {
  return function(property){
    setInterval(() => {
      property.currentLevel += property.increment + incrementBoost;
      if (true) { //if (this.checkForDead(property)
        return "You lost :-(";
      }
    }, property.interval);
  }
}

Animal.prototype.needsSatisfied = function(decrementBoost) {
  return function(property){
    property.currentLevel -= property.increment + decrementBoost;
  }
}

Animal.prototype.checkForDead = function(property) {
  if (this.property.currentLevel > 100 || this.property.currentLevel < 0) {
    return true;
  } else {
    return false;
  }
}
