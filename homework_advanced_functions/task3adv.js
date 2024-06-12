const divideTwoNumbers = (numerator, denominator) => {
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error(`The numerator or denominator is not a number`);
	}

	if (denominator === 0) {
		throw new Error(`The denominator cannot be 0`);
	}

	return (result = numerator / denominator);
};

const testCases = [
	{ numerator: 10, denominator: 5 },
	{ numerator: 10, denominator: 0 },
	{ numerator: 'a', denominator: 5 },
];

testCases.forEach((testCase) => {
	try {
		const resultOfDividing = divideTwoNumbers(testCase.numerator, testCase.denominator);
		console.log(`Result of dividing ${testCase.numerator} by ${testCase.denominator} is: ${resultOfDividing}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
	} finally {
		console.log(`Work is done`);
	}
});
