const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
 item.onclick = () => {
  if (item.id == 'clear' ) {
   display.innerText = '';
  } else if (item.id == 'backspace' ) {
   let string = display.innerText.toString();
   display.innerText = string.substr(0, string.length - 1);
  } else if (display.innerText != '' && item.id == 'equal' ) {
   let obtResult = display.innerText;
   let operation = eval(obtResult.toString());
    if (Number.isSafeInteger(operation)) {
     display.innerText = operation.toLocaleString();    
    } else {
     display.innerText = operation.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
    }   
  } else if (display.innerText == '' && item.id == 'equal') {
   display.innerText = ' Math is hard';
   setTimeout(() => (display.innerText = '' ), 2000 );
  } else {
   display.innerText += item.id;
  
  }
 }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true; 
themeToggleBtn.onclick = () => {
 calculator.classList.toggle('dark');
 themeToggleBtn.classList.toggle('active');
 isDark = !isDark ;
}