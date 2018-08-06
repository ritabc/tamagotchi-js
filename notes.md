every time Document loads, create new Farm
Within Farm class, {
  animals = []
  createAnimal method which will take name, type from user
    and spit out new animal object
    push to animalsArray
}


UI:
every animal has 9 buttons generated, each with 2 classes = characteristic (hunger, etc) and (intensity) of decrease. The buttons also have a value equal to which animal (the index of animalsArray)

Front end logic:
3 click events, one for each level of intensity
  each event will take the value of the button as index variable
  with that, find the animal in animalsArray
  get all the classes as an array [perhaps with: $(element).attr("class").split(' ');]
  define property (characteristic) as 0th element of that array
  animal.fastDecrease(animal[property])




    append ("<button value=" + i + "." + j + ">")
    ie <button id="i.j"> would mean animal at index i and button type j
