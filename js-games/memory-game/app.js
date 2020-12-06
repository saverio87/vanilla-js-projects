document.addEventListener('DOMContentLoaded', () => {

  // card options
  const cardArray = [
    {
      name:'fries',
      img:'images/fries.png'
    },
    {
      name:'fries',
      img:'images/fries.png'
    },
    {
      name:'cheeseburger',
      img:'images/cheeseburger.png'
    },
    {
      name:'cheeseburger',
      img:'images/cheeseburger.png'
    },
    {
      name:'hotdog',
      img:'images/hotdog.png'
    },
    {
      name:'hotdog',
      img:'images/hotdog.png'
    },
    {
      name:'ice-cream',
      img:'images/ice-cream.png'
    },
    {
      name:'ice-cream',
      img:'images/ice-cream.png'
    },
    {
      name:'milkshake',
      img:'images/milkshake.png'
    },
    {
      name:'milkshake',
      img:'images/milkshake.png'
    },
    {
      name:'pizza',
      img:'images/pizza.png'
    },
    {
      name:'pizza',
      img:'images/pizza.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];


  // creating the board

  function createBoard(){
    for(let i=0;i<cardArray.length;i++){
      // populating the grid with an image element for each item of the array
      var card = document.createElement('img');
      card.setAttribute('src','images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click',flipCard);
      // add the card(s) to the grid
      grid.appendChild(card);
    }
  }

  // check for matches

  function checkforMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId === optionTwoId) {
      cards[optionOneId].setAttribute('src','images/blank.png');
      cards[optionTwoId].setAttribute('src','images/blank.png');
      alert('You have clicked on the same card!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!');
      cards[optionOneId].setAttribute('src','images/white.png');
      cards[optionTwoId].setAttribute('src','images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
      // Every pair in cardsChosen is pushed into cardsWon as an array of two items, ex. ["milkshake", "milkshake"]
      console.log(cardsWon);
    } else {
      cards[optionOneId].setAttribute('src','images/blank.png');
      cards[optionTwoId].setAttribute('src','images/blank.png');
      alert('Sorry, try again');
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations!'
    }
  }

  // flip your card

  function flipCard(){
    // 'this' in this case is an image element
    var cardId = this.getAttribute('data-id');
    console.log(cardId);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    // the actual flipping of the card - we change the picture from blank.jpg to the card img
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkforMatch, 300);
    }
  }


  createBoard();








})