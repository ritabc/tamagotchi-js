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

// Animal.prototype.needsIncrease = function(incrementBoost) {
//   let that = this
//   return function(property){
//     setInterval(function() {
//       property.currentLevel += property.increment + incrementBoost;
//       if (that.checkForDead(property)) {
//         console.log("reached if");
//         that.dead = true;
//       }
//     }, property.interval);
//   }
// }

Animal.prototype.needsIncrease = function(incrementBoost) {
  // console.log(this);
  return (property) => {
    setInterval(() =>{
      property.currentLevel += property.increment + incrementBoost;
      if (this.checkForDead(property)) {
        console.log("reached if");
        this.dead = true;
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
  console.log("reached");
  console.log(property.currentLevel);
  if (property.currentLevel > 100 || property.currentLevel < 0) {
    return true;
  } else {
    return false;
  }
}
