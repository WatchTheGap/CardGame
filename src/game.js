// let runGame = require("./deck.js");


let gameTime = new Date();

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

function playGame() {
  let handA = [];
  let handB = [];
  let playerOne = 0;
  let playerTwo = 0;
  let ties = 0;

  deckOfCards.forEach(function deal(newCard) {
    handA.push(newCard * random(deckOfCards.length));
    handB.push(newCard * random(deckOfCards.length));


  });





if (handA[handA.length - 1] === handB[handB.length - 1]) {
  ties = ties + 1;
  console.log("tie");
}
  else if (handA[handA.length - 1] > handB[handB.length-1]) {
    playerTwo = playerTwo + 1;
    console.log(playerTwo);
    console.log("A wins");
  }
  else {
    playerOne = playerOne + 1;
    console.log(playerOne);
    console.log("B wins");
  }
  }

  let winRatioOne = playerOne/52;
  let winRatioTwo = playerTwo/52;

  console.log(winRatioOne, winRatioTwo);
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
