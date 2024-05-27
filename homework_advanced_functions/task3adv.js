let divideTwoNumbers = (numerator, denominator) => {

  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error(`The numerator or denominator is not a number`);
    }
    
  if (denominator === 0) {
    throw new Error(`The denominator cannot be 0`);
  }

  const result = numerator / denominator;
  return console.log(
    `Result of dividing ${numerator} by ${denominator} is: ${result}`
  );
};

try {
  divideTwoNumbers(10, 5);
} catch (error) {
  console.error(`Error: ${error.message}`);
} finally {
  console.log(`Work is done`);
}

try {
  divideTwoNumbers(10, 0);
} catch (error) {
  console.error(`Error: ${error.message}`);
} finally {
  console.log(`Work is done`);
}

try {
  divideTwoNumbers(10, "q");
} catch (error) {
  console.error(`Error: ${error.message}`);
} finally {
  console.log(`Work is done`);
}
