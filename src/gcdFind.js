export default (num1, num2) => {
  let currentNumber = num1 > num2 ? num1 : num2;
  for (currentNumber; currentNumber > 0; currentNumber -= 1) {
    if ((num1 % currentNumber === 0) && (num2 % currentNumber === 0)) {
      return currentNumber;
    }
  }
  return null;
};
