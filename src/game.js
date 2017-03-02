// let runGame = require("./deck.js");


let gameTime = new Date;

// let gameStats = {
//
// need to add if else for month to add 0 to single digit months
  date: (gameTime.getMonth() + 1) + "/" + gameTime.getDate() + "/" + gameTime.getFullYear(),

  //players should be in an array with 2 people
  //placeholder values for players array
  //variable names may be different than what is in deck file right now
  players: {

    playerJuan: {
      name: "Juan",
      numberOfWins: 10,
      winRatio: 0.38
    },

    playerTwo: {
      name: "Kerrigan",
      numberOfWins: 0,
      winRatio: 0,
    }
  },
  numberOfTies: 0

};
//
//
// function printAllTheThings(entity) {
//   let properties = Object.keys(entity);
//   console.log(properties, entity[properties[0]]);
//
// }
//
// printAllTheThings(gameStats);
// printAllTheThings(gameStats.players.playerJuan);
// printAllTheThings(gameStats.players.playerTwo);
