
module.exports = function buildDeck(a) {
  let deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  let shuffleDeck = [];
  function random(maximum) {
    return Math.ceil(Math.random() * maximum);
  };

  shuffleDeck.push(deckOfCards[random(deckOfCards.length)]);
  console.log(shuffleDeck);
};


//
//
//   for (let i = 1; i <= x; i++) {
//     if (i >= 1) {
//       console.log(i);
//       console.log(deckOfCards[i]);
//     }
//   }
// };

// function random(maximum) {
//   return Math.floor(Math.random() * deckOfCards.length);
// };
//
//
// shuffle(deckOfCards[random(deckOfCards.length)]);
