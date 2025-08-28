// ...

let cats = ["Biscuit", "Jungle"];

let dogs = ["Stella", "Camper"];

let animals = ["Smoky", "Miro", "Swimmy", cats, dogs];

console.log(animals); // logs cats and dogs arrays as nested arrays

let animals2 = ["Smoky", "Miro", "Swimmy", ...cats, ...dogs];

console.log(animals2); // adds cats and dogs items to the animals array separately
