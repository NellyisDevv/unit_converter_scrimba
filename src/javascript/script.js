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
// EXECUTION OF LITERS TO GALLON
let secondP = document.getElementById('second-p');
// EXECUTION OF KILOGRAMS TO POUNDS
let thirdP = document.getElementById('third-p');
// PLACEHOLDER NUMBERS
let secondNumber = 2.222;
let thirdNumber = 30;
forthNumber = 3.333;
// ONCLICK INPUT PROMPTS USER FOR NUMBER AND DISPLAYS
countEl.input = () => {
  let number = prompt('Enter a number');
  countEl.textContent = number;
  let meterNumber = number;
  let literNumber = number;
  let kiloNumber = number;
  let meterConversion = 3.28084;
  let literConversion = 3.785;
  let kiloConversion = 2.205;
  meterNumber *= meterConversion;
  literNumber /= literConversion;
  kiloNumber *= kiloConversion;
  let feetNumber = meterNumber;
  let gallonNumber = literNumber;
  let poundNumber = kiloNumber;
  let feetConversion = meterNumber / 3.281;
  let gallonConversion = literNumber * 3.8;
  let poundConversion = kiloNumber / 2.205;
  feetNumber *= feetConversion;
  // FIRST STRING CONTENT
  firstP.textContent =
    number +
    ' meters = ' +
    meterNumber.toFixed(3) +
    ' feet | ' +
    meterNumber.toFixed(3) +
    ' feet = ' +
    feetConversion.toFixed(0) +
    ' meters';
  // SECOND STRING CONTENT
  secondP.textContent =
    number +
    ' liters = ' +
    literNumber.toFixed(3) +
    ' gallons | ' +
    gallonNumber.toFixed(3) +
    ' gallons = ' +
    gallonConversion.toFixed(0) +
    ' liters';
  // THIRD STRING CONTENT
  thirdP.textContent =
    number +
    ' kilos = ' +
    kiloNumber.toFixed(3) +
    ' pounds | ' +
    poundNumber.toFixed(3) +
    ' pounds = ' +
    poundConversion.toFixed(0) +
    ' kilos';
};

// TESTING
let first = document.getElementById('first-h3');

firstH3.textContent = 'Length (Meter/Feet)';

firstH3.first = () => {
  let text = prompt('Replace Content');
  firstH3.textContent = text;
};

// .toFixed(3) tells javascript to stop at the 3rd decimal point
