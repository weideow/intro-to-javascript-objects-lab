const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  console.log(pokemon[58].name);
  // console.log(game);
  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
// const mode = {
//     difficulty: [ 
//        { selection: "Easy"},
//        { selection: "Medium"},
//        { selection: "Hard"},
//     ]
// }

// Object.assign(game, mode);
// console.log(game);


/*
Exercise 4
1. Select a starter PokÃ©mon from the `pokemon` array. Remember, a starter PokÃ©mon's `starter` property is true.
2. Add this PokÃ©mon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

const startpokemon = [];
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    startpokemon.push(pokemon[i]);
  }
}
console.log(startpokemon);

game.party.push(startpokemon[3]);
console.log(game);

/*
Exercise 5
1. Choose three more PokÃ©mon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
const firepokemon = [];
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].type === "fire") {
    firepokemon.push(pokemon[i]);
  }
}
// console.log(firepokemon);
game.party.push(firepokemon[11]);
// console.log(game);

const waterpokemon = [];
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].type === "water") {
    waterpokemon.push(pokemon[i]);
  }
}
// console.log(waterpokemon);
game.party.push(waterpokemon[waterpokemon.length-2]);
console.log(game);

const dragonpokemon = [];
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].type === "dragon") {
    dragonpokemon.push(pokemon[i]);
  }
}
// console.log(dragonpokemon);
game.party.push(dragonpokemon[2]);
// console.log(game);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

// console.log(game.gyms);
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}
// console.log(game);

/*
Exercise 7
1. Evolve the starter PokÃ©mon you added to your party earlier. Each starter PokÃ©mon evolves into a specific one.
2. How would you replace the current starter PokÃ©mon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
game.party.splice(0,1,pokemon[25]);
console.log(game);

/*
Exercise 8
1. Print the name of each PokÃ©mon in your party.
2. Consider using a loop or an array method to access each PokÃ©mon's name.

Solve Exercise 8 here:
*/


for (let i = 0; i < game.party.length; i++) {
    console.log(game.party[i].name);
  } 
  
/*
Exercise 9
1. Can you print out all the starter PokÃ©mon from the `pokemon` array?
2. Think about how you can identify a starter PokÃ©mon and then log their names.


Solve Exercise 9 here:
*/

const starter = [];
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    starter.push(pokemon[i]);
  }
}
// console.log(starter)
for (let i = 0; i < starter.length; i++) {
  console.log(starter[i].name);
}

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
// console.log(game);
// game.catchPokemon = function () {
//   if (pokemonObj )
// }

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a PokÃ©mon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
}

console.log(game);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/


game.gymStatus = function () {
  const gymTally = {completed: 0, incomplete: 0};

  for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].completed === true) {
      gymTally.completed += 1;
    }
    else {
      gymTally.incomplete += 1;
    }
    return gymTally;
  }
}
game.gymStatus();
console.log(game);