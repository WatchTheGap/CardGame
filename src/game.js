// let runGame = require("./deck.js");

let deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];




let gameTime = new Date;

// let gameStats = {
  date: (gameTime.getMonth() + 1) + "/" + gameTime.getDate() + "/" + gameTime.getFullYear(),
  //players should be in an array with 2 people
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
