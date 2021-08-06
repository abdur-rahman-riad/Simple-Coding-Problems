let arrayElement = [81, 20, 18, 15, 63];
let sum = 0;
for (let i = 0; i < arrayElement.length; i++) {
    elements = arrayElement[i];
    sum = sum + elements;
}
console.log(sum);

// Summation of Array Element Using Function
function arrayTotal(myArray) {
    let sumTotal = 0;
    for (let i = 0; i < myArray.length; i++) {
        elementsValue = myArray[i];
        sumTotal = sumTotal + elementsValue;
    }

    return sumTotal;
}

let givenArray = arrayElement;
let calculateElements = arrayTotal(givenArray);
console.log(calculateElements);