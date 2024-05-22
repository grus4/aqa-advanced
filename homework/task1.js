function calculateRectangleArea(width, height) {
  let rectanleArea = width * height;
  return rectanleArea;
}

console.log(calculateRectangleArea(5, 10));

let calculateRectangleArea2 = function (width, height) {
  let rectanleArea = width * height;
  return rectanleArea;
};

console.log(calculateRectangleArea2(8, 10));

let calculateRectangleArea3 = (width, height) => width * height;

console.log(calculateRectangleArea3(9, 10));
