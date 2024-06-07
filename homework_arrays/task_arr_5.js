//The first variant is using the concat method
const firstArray = [1, true, 'test', 30];
const secondArray = [{ isPerson: true, userName: 'Kate' }, 5, '40'];
const mergedArray = firstArray.concat(secondArray);

console.log(mergedArray);

//The second variant is using the spread operator
const mergedArray2 = [...firstArray, ...secondArray];
console.log(mergedArray2);