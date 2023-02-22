const division = number => number / 5;

const result = division(15);
console.log(result);

const multiply = (numberOne, numberTwo) => {
    const one = numberOne + 2;
    const two = numberTwo + 2;
    const multiplication = one * two;
    return multiplication;
};

const multiplication = multiply(10, 20);
console.log(multiplication);

const threeMultiply = (one, two, three) => {
    return one * two * three
};
console.log(threeMultiply(10, 20, 30));