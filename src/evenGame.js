#!/usr/bin/env node

/* eslint-disable import/extensions */

import {
  cons,
  toString,
} from '@hexlet/pairs';
import isEven from './isEven.js';
import getRandomInt from './generateRandomNumb.js';
import {
  gameEngine
} from './index.js';

// minimum number, use only integer number
const minNumb = 1;
// maximum number, use only integer number
const maxNumb = 100;
// number of round in the game
const numberOfRound = 3;
const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  let gameData = [];
  for (let i = 0; i < numberOfRound; i += 1) {
    const question = getRandomInt(minNumb, maxNumb);
    const answer = isEven(question);
    const data = cons(question, answer);
    gameData = [...gameData, data];
  };
  return gameEngine(cons(gameData, rulesOfGame));
};

export {
  game
};
