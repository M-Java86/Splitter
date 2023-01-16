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
