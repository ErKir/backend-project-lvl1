const operations = ['+', '-', '*'];

const minimum = 0;
const maximum = operations.length - 1;

const getRandomIntInclusive = (min, max) => {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);
  return Math.floor(Math.random() * (roundMax - roundMin + 1)) + roundMin;
};

const getRandomOperation = () => {
  const index = getRandomIntInclusive(minimum, maximum);
  const operation = operations[index];
  return operation;
};

export default getRandomOperation;
