// variables
const suits = ['♠', '♣', '♥', '♦'];
const weights = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

// classes
class Card {
  constructor(suit, weight) {
    this.suit = suit;
    this.weight = weight;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    createDeck(this.cards);
    shuffle(this.cards);
  }
}

class Hand {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
}

class GameState {
  constructor() {
    this.player = new Hand('player');
    this.dealer = new Hand('dealer');
    this.deck = new Deck();
  }
  deal() {
    const { player, dealer, deck } = this;
    player.hand.push(deck.cards.pop());
    dealer.hand.push(deck.cards.pop());
    player.hand.push(deck.cards.pop());
    dealer.hand.push(deck.cards.pop());
    console.log(`Player: ${player.hand[0].weight} ${player.hand[0].suit} --- ${player.hand[1].weight} ${player.hand[1].suit}`);
    console.log(`Dealer: ${dealer.hand[0].weight} ${dealer.hand[0].suit} --- ${dealer.hand[1].weight} ${dealer.hand[1].suit}`);
  }

  getTotal() {
    const { player, dealer } = this;
    const playerTotal = player.hand.reduce((acc, curr) => acc + curr.weight, 0);
    const dealerTotal = dealer.hand.reduce((acc, curr) => acc + curr.weight, 0);
    console.log(`Player: ${playerTotal}`);
    console.log(`Dealer: ${dealerTotal}`);
    getWinner(playerTotal, dealerTotal);
  }
}

// helper functions
function createDeck(cards) {
  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      cards.push(new Card(suits[j], weights[i]));
    } 
  }
}

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function getWinner(player, dealer) {
  if (player === dealer) return console.log('TIE!');
  return (dealer > player) ? console.log('Dealer Wins!') : console.log('Player Wins!');
}


function test() {
  const x = new GameState();
  x.deal();
  x.getTotal();
}

test();