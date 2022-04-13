// minimum number, use only integer number
const minNumb = 1;
// maximum number, use only integer number
const maxNumb = 100;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

getRandomInt(minNumb, maxNumb);

export default getRandomInt;
