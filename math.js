// Negative to Positive
const negativeNumber = -10;
const positiveNumber = Math.abs(negativeNumber);
console.log("Positive of " + negativeNumber + " is " + positiveNumber);

// Ceiling, Floor and Round Value
let myNumber = 3.5;
ceilingValue = Math.ceil(myNumber);
floorValue = Math.floor(myNumber);
roundValue = Math.round(myNumber);
console.log("Ceiling Value of " + myNumber + " is " + ceilingValue);
console.log("Floor Value of " + myNumber + " is " + floorValue);
console.log("Round Value of " + myNumber + " is " + roundValue);

// Random Number
for (let i = 0; i <= 10; i++) {
    let randomNumber = Math.random() * 10;
    const rounded = Math.round(randomNumber);
    console.log(rounded);
}