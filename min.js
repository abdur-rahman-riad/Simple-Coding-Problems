function minNumber(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}

const findMin = minNumber(17, 10, 3);
console.log(findMin);