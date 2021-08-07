let numbers = [12, 45, 3, 9, 2, 17];
/* let elements, lowest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    elements = numbers[i];
    if (elements < lowest) {
        lowest = elements;
    }
}
console.log(lowest); */

function getLowestElement(number) {
    let elements, lowest = number[0];
    for (let i = 0; i < number.length; i++) {
        elements = number[i];
        if (elements < lowest) {
            lowest = elements;
        }
    }
    return lowest;
}

let getLowest = getLowestElement(numbers);
console.log(getLowest);
