const arrayNumbers = [10, 20, 30, 40, 50];

const sumArraynumbers = arrayNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sumArraynumbers);


