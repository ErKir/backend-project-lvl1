#!/usr/bin/env node

/* eslint-disable import/extensions */

import {
  cons,
} from '@hexlet/pairs';
import getRandomInt from './generateRandomNumb.js';
import generateProgression from './progression.js';
import {
  gameEngine
} from './index.js';

// number of round in the game
const numberOfRound = 3;

const rulesOfGame = 'What number is missing in the progression?';

const game = () => {
  let gameData = [];
  for (let i = 0; i < numberOfRound; i += 1) {
    // make number that start progression
    const startNumb = getRandomInt(1, 100);

    // make step for progression
    const step = getRandomInt(1, 100);

    // make number of items in progression (for 5 to 10)
    const numbOfItems = getRandomInt(5, 10);

    const progression = generateProgression(startNumb, step, numbOfItems);

    // cut & change random item from progression
    const randomItem = getRandomInt(0, numbOfItems);
    const answer = progression[randomItem];
    progression[randomItem] = '..';

    const question = `${progression.toString()}`;
    const data = cons(question, answer);
    gameData = [...gameData, data];
  };
  return gameEngine(cons(gameData, rulesOfGame));
};

export {
  game
};
