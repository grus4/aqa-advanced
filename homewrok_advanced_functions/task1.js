//The First version of the callback is using arrow functions
const handleEvenNumber = () => {
  console.log(`Number is even`);
};

const handleOddNumber = () => {
  console.log(`Number is odd`);
};

const handleNumbers = (number, handleEvenCallBack, handleOddCallBack) => {
  if (number % 2 === 0) {
    handleEvenCallBack();
  } else {
    handleOddCallBack();
  }
};

const numberToCheck = 8;

handleNumbers(numberToCheck, handleEvenNumber, handleOddNumber);

/* The second version of the callback function
is usdng a functional expression
but the message hows the exact number(which was passed to the handleNum (HOF) function)
 in the console
*/

const handleEven = function () {
  console.log(`Number: ${this.number} is even`);
};

const handleOdd = function () {
  console.log(`Number: ${this.number} is odd`);
};

const handleNum = function (number, handleEvenCallBack, handleOddCallBack) {
  this.number = number;

  if (number % 2 === 0) {
    handleEvenCallBack();
  } else {
    handleOddCallBack();
  }
};

const anyNumberToCheck = 7;

handleNum(anyNumberToCheck, handleEven, handleOdd);
