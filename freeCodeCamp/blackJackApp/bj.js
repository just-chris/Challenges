
// "Cards" CHALLENGE -------------------------------

 let firstCard = 0

let secondCard = 0 
 
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard
 
let hasBlackJack = false

let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function start() {
  renderGame()
}


function renderGame() {
  if (sum <= 20) {
    message = "Do yu want to draw a new card?"
    console.log(message)
   } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    console.log(message)
    hasBlackJack = true
   } else  {
    message = "You're out of the game :("
    console.log(message)
    isAlive = false
  }

  messageEl.textContent = message
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: " + firstCard + " / " + secondCard

}
 
function getCard() {
  let card = 1 
  sum += card

  renderGame()
  console.log(sum)
}



// "Club" CHALLENGE --------------------------------

// let age = 19


// if (age <= 20) {
//  console.log("You cannot enter the club!")
// }
// else {
//  console.log("Welcome!")
// }


// "King" CHALLENGE -------------------------------


// let age = 101

// if (age < 100) {
//  console.log("Not elegible")
// }

// else if (age === 100) {
//  console.log("Here is your birthday card from the King!")
// }

// else {
//  console.log("Not elegible, you have already gotten one :(")
// }
 
