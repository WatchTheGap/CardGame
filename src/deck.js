let deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];



function shuffle(x) {
  let deckA = [];
  let cardA;
  for (let i = 1; i <= x; i++) {
    if (i >= 1) {
      console.log(i);
    }
    else {
      console.log("cats");
    }
  }

  // push.deckA(cardA);

};


function random(maximum) {
  return Math.ceil(Math.random() * maximum);
};

// console.log(random(52));

shuffle(deckOfCards[random(14)]);
