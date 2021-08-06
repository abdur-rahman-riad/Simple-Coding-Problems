function maxNumber(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}

const findMax = maxNumber(84, 120, 63);
console.log(findMax);