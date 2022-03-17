
// COUNTER APP -------------------------------------

// let countEl = document.getElementById("count-el")

// let passengers = 0 

// function increment() {
  
//  passengers += 1

//  countEl.textContent = passengers

//  console.log(passengers)

// }

// let saveEl = document.getElementById("save-el")

// function save() {

// let count = " " + passengers + " - "

//  saveEl.textContent += count

//  countEl.textContent = 0

//  passengers = 0
 

// }


// "Linda" CHALLENGE ---------------------------------


// let name = "Linda"

// let greeting = "Hi there"



// function hiThere() {

//  let fullGreet = greeting + ", " + name + "!"

//  console.log(fullGreet)

// }


// hiThere();


// "Points" CHALLENGE -------------------------------


// let myPoints = 3

// function add3Points() {
 
//  myPoints += 3
 
//  console.log(myPoints)

// }

// function remove1Point() {
 
//  myPoints -= 1
 
//  console.log(myPoints)

// }

// remove1Point()
// add3Points()
// add3Points()
// add3Points()
// remove1Point()


// "Error" CHALLENGE ------------------------------




// let errorEl = document.getElementById("error")

// function error() {
  
//  errorEl.textContent = "Something went wrong! Please try again later"

//  console.log(passengers)

// }


// "Calculator" CHALLENGE -------------------------

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1

document.getElementById("num2-el").textContent = num2 


let sumEl = document.getElementById("sum-el")

function add() {

 let result = num1 + num2

 sumEl.textContent = "Sum: " + result
 
}
 
function subtract() {

 let result = num1 - num2

 sumEl.textContent = "Sum: " + result
 
}



function multiply() {

 let result = num1 * num2

 sumEl.textContent = "Sum: " + result
 
}

function divide() {

 let result = num1 / num2

 sumEl.textContent = "Sum: " + result
 
}