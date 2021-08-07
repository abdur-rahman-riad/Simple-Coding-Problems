/* const fibonacci = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci); */

function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'Please Give a Number';
    }
    if (num < 1) {
        return 'Please give a Positive Number Gretter then 1';
    }
    const fibonacci = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}

let fiboSeries = fibonacciSeries(5);
console.log(fiboSeries);