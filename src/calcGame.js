#!/usr/bin/env node

/* eslint-disable import/extensions */

import {
  cons,
} from '@hexlet/pairs';
import getRandomInt from './generateRandomNumb.js';
import getRandomOperation from './generateRandomOperation.js';
import calculator from './calculator.js';
import {
  gameEngine
} from './index.js';

// minimum number, use only integer number
const minNumb = 1;
// maximum number, use only integer number
const maxNumb = 100;
// number of round in the game
const numberOfRound = 3;
const rulesOfGame = 'What is the result of the expression?';

const game = () => {
  let gameData = [];
  for (let i = 0; i < numberOfRound; i += 1) {
    const randomNumb1 = getRandomInt(minNumb, maxNumb);
    const randomNumb2 = getRandomInt(minNumb, maxNumb);
    const operation = getRandomOperation();
    const question = `${randomNumb1} ${operation} ${randomNumb2}`;
    const answer = calculator(randomNumb1, randomNumb2, operation);
    const data = cons(question, answer);
    gameData = [...gameData, data];
  };
  return gameEngine(cons(gameData, rulesOfGame));
};

export {
  game
};
