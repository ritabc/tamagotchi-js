import { Animal } from './../src/animal.js';

describe('Animal', function(){
  let newAnimal = new Animal("Bob", "Pig");

  beforeEach(function(){
    jasmine.clock().install();
    newAnimal.increase(newAnimal.hunger);
    newAnimal.increase(newAnimal.activityNeeds);
    newAnimal.increase(newAnimal.sleepiness);

  });

  afterEach(function() {
  jasmine.clock().uninstall();
  });

  it('should have a food level of 70 after 30 seconds', function(){
    jasmine.clock().tick(30001);
    expect(newAnimal.hunger.currentLevel).toEqual(70);
  })

  it('should have a activity needs level of 60 after 45 seconds', function(){
    jasmine.clock().tick(45001);
    expect(newAnimal.activityNeeds.currentLevel).toEqual(60);
  })

  it('should have a sleepiness level of 65 after 60 seconds', function(){
    jasmine.clock().tick(60001);
    expect(newAnimal.sleepiness.currentLevel).toEqual(65);
  })

});
