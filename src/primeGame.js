#!/usr/bin/env node

/* eslint-disable import/extensions */

import {
  cons,
} from '@hexlet/pairs';
import getRandomInt from './generateRandomNumb.js';
import isPrime from './isPrime.js';
import {
  gameEngine
} from './index.js';

// minimum number is 2, because A prime number is a natural number greater than 1!
const minNumb = 2;

// maximum number, use only integer number
const maxNumb = 100;

// number of round in the game
const numberOfRound = 3;

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  let gameData = [];
  for (let i = 0; i < numberOfRound; i += 1) {
    const question = getRandomInt(minNumb, maxNumb);
    const answer = isPrime(question);
    const data = cons(question, answer);
    gameData = [...gameData, data];
  };
  return gameEngine(cons(gameData, rulesOfGame));
};

export {
  game
};
