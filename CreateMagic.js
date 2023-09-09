
let number;

do { 
  number = prompt("Pick a number 1-9:");
} while (isNaN(number));

console.log("You Picked Number: " + number);
