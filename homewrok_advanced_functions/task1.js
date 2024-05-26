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
