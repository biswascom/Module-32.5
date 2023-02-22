const sumOfthree = (one, two, three = 7) => one + two + three;

const sumWithDefault = sumOfthree(12, 23);
const sumWithArgument = sumOfthree(12, 23, 44);
console.log(sumWithDefault, sumWithArgument);