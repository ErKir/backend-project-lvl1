const getRandomInt = (min, max) => {
  console.log(`min === ${min}, max === ${max}`);
  console.log(`Math.floor = ${Math.floor(Math.random() * (max - min)) + min}`);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRandomInt;
