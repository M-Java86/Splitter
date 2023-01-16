//Document Object Model (DOM) to select and manipulate elements in an HTML document.

//selecting the element with the ID of "bill" and storing it in a constant variable named bill. This element is an input field where the user enters the total amount of the bill.
const bill = document.getElementById('bill');
//is selecting all elements with the class of "tip-percentage" and storing them in a constant variable named tipPercentages.
const tipPercentages = document.getElementsByClassName('tip-percentage');
//s selecting the element with the ID of "custom" and storing it in a constant variable named customTip. I
const customTip = document.getElementById('custom');
//is declaring a variable named percentage without assigning it a value.
//This variable will be used to store the chosen tip percentage.
let percentage;
//is selecting the element with the ID of "people" and storing it in a constant variable named people. This element is an input field where the user can enter the number of people the bill should be SPLIT among.
const people = document.getElementById('people');
//is selecting the element with the ID of "result-tip" and storing it in a constant variable named tip. This element is a div where the calculated tip amount will be displayed.
const tip = document.getElementById('result-tip');
//is selecting the element with the ID of "result-total" and storing it in a constant variable named total. This element is a div where the total amount of the bill with tip will be displayed.
const total = document.getElementById('result-total');
// is selecting the element with the ID of "reset" and storing it in a constant variable named resetBtn. This element is a button that, when clicked, resets the input fields and results to their default values.
const resetBtn = document.getElementById('reset');

//enter bill amount
//this code is listening for a change event on the bill element, if the bill amount is greater than 0, it removes the class CanNotBeZero, removes any error messages and calls the calculate function, otherwise, it calls the noResult function, display an error message and adds the class CanNotBeZero to the bill element.
bill.addEventListener('change', () => {
  amount = parseInt(bill.value);
  if (amount > 0) {
    bill.classList.remove('CanNotBeZero');
    removeError('bill');
    calculate();
  } else {
    noResult();
    displayError('bill');
    bill.classList.add('CanNotBeZero');
  }
});

//select tip %
//This code is a for-of loop that iterates through an array of elements called "tipPercentages". For each element in the array, it adds an event listener that listens for a "click" event. When a "click" event is detected on an element, the event listener runs an anonymous function(a function that has no name and is not accessible after it's initial  creation.)
for (btn of tipPercentages) {
  btn.addEventListener('click', (e) => {
    removeSelection();
    percentage = parseInt(e.target.id) / 100;
    choice = e.target;
    choice.classList.add('clicked');
    customTip.value = '';
    customTip.classList.remove('CanNotBeZero');
    customTip.classList.remove('customtip');
    removeError('tip');
    calculate();
  });
}
//select custom tip
customTip.addEventListener('change', () => {
  percentage = parseInt(customTip.value) / 100;
  if (percentage > 0) {
    customTip.classList.remove('CanNotBeZero');
    customTip.classList.add('customtip');
    removeError('tip');
    calculate();
    removeSelection();
  } else {
    noResult();
    displayError('tip');
    customTip.classList.add('CanNotBeZero');
    customTip.classList.remove('customtip');
  }
});

//remove tips selection
function removeSelection() {
  for (btn of tipPercentages) {
    btn.classList.remove('clicked');
  }
}

//enter people amount
people.addEventListener('change', () => {
  amount = parseInt(people.value);
  if (amount > 0) {
    people.classList.remove('CanNotBeZero');
    removeError('people');
    calculate();
  } else {
    noResult();
    displayError('people');
    people.classList.add('CanNotBeZero');
  }
});

//calculate
function calculate() {
  if (bill.value && percentage && people.value) {
    let resultTip = calculateTip();
    calculateTotal(resultTip);
  }
}

//calculate tip
function calculateTip() {
  tip.textContent = '';
  let resultTip = (
    (parseInt(bill.value) * percentage) /
    parseInt(people.value)
  ).toFixed(2);
  if (resultTip > 0) {
    tip.textContent = '$' + resultTip;
    return resultTip;
  } else {
    noResult();
  }
}

//calculate total
function calculateTotal(resultTip) {
  total.textContent = '';
  let resultTotal = (
    parseInt(bill.value) / parseInt(people.value) +
    parseInt(resultTip)
  ).toFixed(2);
  if (resultTotal > 0) {
    total.textContent = '$' + resultTotal;
  } else {
    noResult();
  }
}

// reset
resetBtn.addEventListener('click', () => {
  reset();
});

function reset() {
  bill.value = '';
  people.value = '';
  customTip.value = '';
  tip.textContent = '$0.00';
  total.textContent = '$0.00';
  removeSelection();
}
//This function, "noResult()", is setting the text content of two elements, "tip" and "total", to "$0.00". This is used to clear the display of tip and total amount when there is no result.
function noResult() {
  tip.textContent = '$0.00';
  total.textContent = '$0.00';
}
//This function, "displayError(id)", takes one argument, "id", and uses it to display an error message on an element on the page. It does this by using the argument to construct a string that can be used to select an element by ID, it then sets the text content of that element to the string "Can't be less or equal to 0".
function displayError(id) {
  //displaying error to user
  let error = document.getElementById(`${id}-error`);
  error.textContent = "Can't be less or equal to 0";
}
//This function, "removeError(id)",  is removing the error message by setting the text content of the element to an empty string.
function removeError(id) {
  let error = document.getElementById(`${id}-error`);
  error.textContent = '';
}
