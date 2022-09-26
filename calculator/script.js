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
    const currentActive = calculator.querySelector(' [data-state="selected"] ')
    if (currentActive) {
      currentActive.dataset.state=''
    }
      key.dataset.state = "selected"
  }

  if ( type == 'btn-equal') {
    console.log('Operator')    
  }
  
  calculator.dataset.previousKeyType = type
} )



// buttons.forEach((item) => {
//  item.onclick = () => {
//   if (item.id == 'clear' ) {
//    display.innerText = '';
//   } else if (item.id == 'backspace' ) {
//    let string = display.innerText.toString();
//    display.innerText = string.substr(0, string.length - 1);
//   } else if (display.innerText != '' && item.id == 'equal' ) {
//    let obtResult = display.innerText;
//    let operation = eval(obtResult.toString());
//     if (Number.isSafeInteger(operation)) {
//      display.innerText = operation.toLocaleString();    
//     } else {
//      display.innerText = operation.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
//     }   
//   } else if (display.innerText == '' && item.id == 'equal') {
//    display.innerText = ' Math is hard';
//    setTimeout(() => (display.innerText = '' ), 2000 );
//   } else {
//    display.innerText += item.id;
  
//   }
//  }
// })





const themeToggleBtn = document.querySelector('.theme-toggler');

const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true; 
themeToggleBtn.onclick = () => {
 calculator.classList.toggle('dark');
 themeToggleBtn.classList.toggle('active');
 isDark = !isDark ;
}