#!/usr/bin/env node

/* eslint-disable import/extensions */

import {
  cons,
} from '@hexlet/pairs';
import getRandomInt from '../generateRandomNumb.js';
import {
  gameEngine
} from '../index.js';

const calculator = (num1, num2, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      console.log('calculate Error');
  }
  return result;
};

// get random operation
const operations = ['+', '-', '*'];

const firstIndexOfOperations = 0;
const lastIndexOfOperations = operations.length - 1;

const getRandomIntInclusive = (min, max) => {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);
  return Math.floor(Math.random() * (roundMax - roundMin + 1)) + roundMin;
};

const getRandomOperation = () => {
  const randomIndex = getRandomIntInclusive(firstIndexOfOperations, lastIndexOfOperations);
  const operation = operations[randomIndex];
  return operation;
};


// minimum number, use only integer number
const minNumb = 1;
// maximum number, use only integer number
const maxNumb = 100;

const rulesOfGame = 'What is the result of the expression?';

const roundOfGame = () => {
  const randomNumb1 = getRandomInt(minNumb, maxNumb);
  const randomNumb2 = getRandomInt(minNumb, maxNumb);
  const operation = getRandomOperation();
  const question = `${randomNumb1} ${operation} ${randomNumb2}`;
  const answer = calculator(randomNumb1, randomNumb2, operation);
  const gameData = cons(question, answer);
  return gameData;
};

export const game = () => gameEngine(roundOfGame, rulesOfGame);
