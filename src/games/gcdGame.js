/* eslint-disable import/extensions */

import {
  cons,
} from '@hexlet/pairs';
import getRandomInt from '../generateRandomNumb.js';
import gameEngine from '../index.js';

const gcdFind = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcdFind(num2, num1 % num2);
};

// minimum number, use only integer number
const minNumb = 1;
// maximum number, use only integer number
const maxNumb = 100;

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const roundOfGame = () => {
  const randomNumb1 = getRandomInt(minNumb, maxNumb);
  const randomNumb2 = getRandomInt(minNumb, maxNumb);
  const question = `${randomNumb1} ${randomNumb2}`;
  const answer = gcdFind(randomNumb1, randomNumb2);
  const gameData = cons(question, answer);
  return gameData;
};

const game = () => gameEngine(roundOfGame, rulesOfGame);

export default game;
