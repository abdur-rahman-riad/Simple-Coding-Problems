let ages = [17, 201, 212, 2, 40];
/* let largest = ages[0];
let elements;
for (let i = 0; i < ages.length; i++) {
    elements = ages[i];
    if (elements > largest) {
        largest = elements;
    }
}
console.log(largest); */

function getLargestElement(number) {
    let elements, largest = number[0];
    for (let i = 0; i < number.length; i++) {
        elements = number[i];
        if (elements > largest) {
            largest = elements;
        }
    }
    return largest;
}

let largestElement = getLargestElement(ages);
console.log(largestElement);
