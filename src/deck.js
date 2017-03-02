
  let deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  function random(maximum) {
    return Math.floor(Math.random() * maximum);
  };

  module.exports = function buildDeck(a) {
    return deckOfCards;
};



let handA = [];
let handB = [];
let playerOne = 0;
let playerTwo = 0;
let ties = 0;

deckOfCards.forEach(function deal(newCard) {
  handA.push(newCard * random(deckOfCards.length));
  handB.push(newCard * random(deckOfCards.length));

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
});

let winRatioOne = playerOne/52;
let winRatioTwo = playerTwo/52;

console.log(winRatioOne, winRatioTwo);
