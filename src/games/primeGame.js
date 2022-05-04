#!/usr/bin/env node

/* eslint-disable import/extensions */

import {
  cons,
} from '@hexlet/pairs';
import getRandomInt from '../generateRandomNumb.js';
import {
  gameEngine
} from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

// minimum number is 2, because A prime number is a natural number greater than 1!
const minNumb = 2;

// maximum number, use only integer number
const maxNumb = 100;

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const roundOfGame = () => {
  const question = getRandomInt(minNumb, maxNumb);
  const answer = isPrime(question);
  const gameData = cons(question, answer);
  return gameData;
};

export default () => gameEngine(roundOfGame, rulesOfGame);
