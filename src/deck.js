
  let deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  let shuffleDeck = [];

  function random(maximum) {
    return Math.floor(Math.random() * maximum);
  };

  module.exports = function buildDeck(a) {
    return deckOfCards;
  // shuffleDeck.push(deckOfCards[random(deckOfCards.length)]);
};



let handA = [];
let handB = [];

deckOfCards.forEach(function deal(newCard) {
  handA.push(newCard);
  handB.push(newCard);

  if (handA > handB) {
    console.log("A wins");
  }
  else if (handB < handA) {
    console.log("B wins");
  }
  else {
    console.log("tie");
  }
  return console.log(handA, handB);

});




  for (let i = 1; i <= deckOfCards.length; i++) {
    if (i >= 1) {
      console.log(i);
      console.log(deckOfCards[i]);
    };
  };
