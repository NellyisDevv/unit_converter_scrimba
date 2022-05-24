// CREATING A DARK THEME FOR WEBSITE
let icon = document.getElementById('icon');

// WHEN ICON CLICKED TOGGLE CLASS AND CHANGE ICON
icon.onclick = () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = '../src/img/moon.png';
  } else {
    icon.src = '../src/img/sun.png';
  }
};

// PROMPT USER TO ENTER A NUMBER FOR CONVERSION
let countEl = document.getElementById('count-el');
// EXECUTION OF METERS TO FEET
let firstP = document.getElementById('first-p');
// PLACEHOLDER NUMBERS
let secondNumber = 2.222;
let thirdNumber = 30;
forthNumber = 3.333;
// ONCLICK INPUT PROMPTS USER FOR NUMBER AND DISPLAYS
function input() {
  let number = prompt('Enter a number');
  countEl.textContent = number;
  let meterNumber = number;
  let meterConversion = 3.28084;
  meterNumber *= meterConversion;
  let feetNumber = number;
  let feetConversion = 0.3048;
  feetNumber *= feetConversion;
  firstP.textContent =
    number +
    ' meters = ' +
    meterNumber.toFixed(3) +
    ' feet | ' +
    feetNumber +
    ' feet = ' +
    feetConversion.toFixed(3) +
    ' meters';
}

// .toFixed(3) tells javascript to stop at the 3rd decimal point
