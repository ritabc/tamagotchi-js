import { Animal } from './../src/animal.js';

describe('Animal', function(){
  let newAnimal = new Animal("Bob", "Pig", 0);

  beforeEach(function(){
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    newAnimal.hunger.currentLevel = 50
    newAnimal.activity.currentLevel = 50
    newAnimal.sleepiness.currentLevel = 50
  });

  it('should have a food level of 70 after a regularIncrease and 30 seconds', function(){
    newAnimal.regularIncrease(newAnimal.hunger);
    jasmine.clock().tick(30001);
    expect(newAnimal.hunger.currentLevel).toEqual(70);
  });

  it('should have a food level of 70 after a fastIncrease and 30 seconds', function(){
    newAnimal.fastIncrease(newAnimal.hunger);
    jasmine.clock().tick(30001);
    expect(newAnimal.hunger.currentLevel).toEqual(80);
  });

  it('should have a food level of 70 after a slowIncrease and 30 seconds', function(){
    newAnimal.slowIncrease(newAnimal.hunger);
    jasmine.clock().tick(30001);
    expect(newAnimal.hunger.currentLevel).toEqual(60);
  });

  it('should have a activity level of 75 after a regularIncrease and 45 seconds', function(){
    newAnimal.regularIncrease(newAnimal.activity);
    jasmine.clock().tick(45001);
    expect(newAnimal.activity.currentLevel).toEqual(75);
  });

  it('should have a sleepiness level of 65 after a regularIncrease and 60 seconds', function(){
    newAnimal.regularIncrease(newAnimal.sleepiness);
    jasmine.clock().tick(60001);
    expect(newAnimal.sleepiness.currentLevel).toEqual(65);
  });

  it('should decrease the current level of hunger by its increment value of 20, resulting in current level of 30', function(){
    newAnimal.regularDecrease(newAnimal.hunger);
    expect(newAnimal.hunger.currentLevel).toEqual(30);
  })

  it('should decrease the current level of hunger by its increment value of 20 + 10, resulting in current level of 20', function(){
    newAnimal.fastDecrease(newAnimal.hunger);
    expect(newAnimal.hunger.currentLevel).toEqual(20);
  })

  it('should decrease the current level of hunger by its increment value of 20 - 10, resulting in current level of 40', function(){
    newAnimal.slowDecrease(newAnimal.hunger);
    expect(newAnimal.hunger.currentLevel).toEqual(40);
  })

  it('should check for dead after the animals hunger level goes above 100', function() {
    newAnimal.hunger.currentLevel = 95;
    newAnimal.regularIncrease(newAnimal.hunger)
    jasmine.clock().tick(30001);
    expect(newAnimal.dead).toEqual(true);
  })

});
