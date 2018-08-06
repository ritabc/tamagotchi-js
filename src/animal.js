export function Animal(name, type){
  this.name = name;
  this.type = type;
  this.hunger = {currentLevel: 50, interval: 30000, increment: 20}
  this.activityNeeds = {currentLevel: 50, interval: 45000, increment: 10}
  this.sleepiness = {currentLevel: 50, interval: 60000, increment: 15}
}

Animal.prototype.increase = function(property){
  setInterval(() => {
    property.currentLevel += property.increment;
  }, property.interval);
}
