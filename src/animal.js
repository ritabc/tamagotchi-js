import { Characteristic } from './../src/characteristic.js';

export function Animal(name, type){
  this.name = name;
  this.type = type;
  // instantiate new instance of Characteristic called hunger
  this.hunger = new Characteristic('hunger', 50, 30000, 20)


  // this.hunger = {currentLevel: 50, interval: 30000, increment: 20}
  this.activityNeeds = {currentLevel: 50, interval: 45000, increment: 10}
  this.sleepiness = {currentLevel: 50, interval: 60000, increment: 15}
  this.fastIncrease = this.increase(10);
  this.regularIncrease = this.increase(0);
  this.slowIncrease = this.increase(-10)
}

Animal.prototype.increase = function(incrementBoost) {
  return function(property){
    setInterval(() => {
      property.currentLevel += property.increment + incrementBoost;
    }, property.interval);
  }
}
