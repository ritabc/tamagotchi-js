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
  this.dead = false;
}

Animal.prototype.needsIncrease = function(incrementBoost) {
  return (property) => {
    setInterval(() =>{
      property.currentLevel += property.increment + incrementBoost;
      if (this.checkForDead(property)) {
        this.dead = true;
      }
    }, property.interval);
  }
}

Animal.prototype.needsSatisfied = function(decrementBoost) {
  return (property)=> {
    property.currentLevel -= property.increment + decrementBoost;
    if (this.checkForDead(property)) {
      this.dead = true;
    }
  }
}

Animal.prototype.checkForDead = function(property) {
  if (property.currentLevel > 100 || property.currentLevel < 0) {
    return true;
  } else {
    return false;
  }
}
