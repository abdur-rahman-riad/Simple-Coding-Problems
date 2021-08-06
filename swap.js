// Swap Using Temp Variable
let fristNumber = 5;
let secondNumber = 10;
console.log(fristNumber, secondNumber);
let temp = fristNumber;
fristNumber = secondNumber;
secondNumber = temp;
console.log(fristNumber, secondNumber);

// Swap using destructing
let first = 15;
let second = 25;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);