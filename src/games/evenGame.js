/* eslint-disable import/extensions */

import {
  cons,
} from '@hexlet/pairs';
import gameEngine from '../index.js';
import getRandomInt from '../generateRandomNumb.js';

const isEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};
// minimum number, use only integer number
const minNumb = 1;
// maximum number, use only integer number
const maxNumb = 100;

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const roundOfGame = () => {
  const question = getRandomInt(minNumb, maxNumb);
  const answer = isEven(question);
  const gameData = cons(question, answer);
  return gameData;
};

const game = () => gameEngine(roundOfGame, rulesOfGame);

export default game;
