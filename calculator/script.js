const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.buttons')


keys.addEventListener('click', event => {
  if (!event.target.closest('button')) return
  const key = event.target
  const keyValue = key.textContent
  const displayValue = display.textContent
  const { type } = key.dataset
  const { previousKeyType } = calculator.dataset
  const { operator } = key.dataset
  
  
  if ( type == 'btn-number'){
    if ( displayValue == 0) {
      display.textContent = keyValue
    } else if (previousKeyType == 'btn-operator') {
      display.textContent = keyValue
    }
      else {
      display.textContent = displayValue + keyValue
    }

  }

  if ( type == 'btn-operator') {      
    // const currentActive = calculator.querySelector(' [data-state="selected"] ')
    // if (currentActive) {
    //   currentActive.dataset.state=''
    // } else {
    //   key.dataset.state = "selected"
    // }
    calculator.dataset.firstNumber = displayValue
    calculator.dataset.operator = operator
  }

  if (type == 'btn-sign' ) {
    let value = parseFloat(display.textContent) 
    if (Math.sign(value) === 1 ){
      display.textContent = -Math.abs(value)
    } else if (Math.sign(value) === -1){
      display.textContent = Math.abs(value)
    }
  }

  if (type == 'btn-backspace' ) {
    let reduce = parseFloat(display.textContent)
    console.log(Math.floor(reduce))
    display.textContent = Math.floor( reduce / 10 )
  }

  if (type =='btn-clear' ) {
    display.textContent = ''
  }



  if ( type == 'btn-equal') {
    const firstNumber = parseFloat(calculator.dataset.firstNumber)
    const operator = calculator.dataset.operator
    const secondNumber = parseFloat(displayValue) 
    console.log (firstNumber, operator, secondNumber )
    let result = ''
    if (operator == 'plus' ) result = firstNumber + secondNumber
    if (operator == 'minus' ) result = firstNumber - secondNumber
    if (operator == 'times' ) result = firstNumber * secondNumber
    if (operator == 'divide' ) result = firstNumber / secondNumber
    console.log(result)
    if (Number.isSafeInteger(result)) {
      display.textContent = result
    } else {
      display.textContent = result.toFixed(2)
    }
    
  }
  
  calculator.dataset.previousKeyType = type
} )

const themeToggleBtn = document.querySelector('.theme-toggler');

const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true; 
themeToggleBtn.onclick = () => {
 calculator.classList.toggle('dark');
 themeToggleBtn.classList.toggle('active');
 isDark = !isDark ;
}