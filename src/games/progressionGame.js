#!/usr/bin/env node

/* eslint-disable import/extensions */

import {
  cons,
} from '@hexlet/pairs';
import getRandomInt from '../generateRandomNumb.js';
import {
  gameEngine
} from '../index.js';

// progression func
const generateProgression = (startNum, step, numberOfItems) => {
  let progression = [startNum];
  for (let i = 0; i < numberOfItems; i += 1) {
    const newItem = progression[i] + step;
    progression = [...progression, newItem];
  }
  return progression;
};

const rulesOfGame = 'What number is missing in the progression?';

const roundOfGame = () => {
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
  const gameData = cons(question, answer);
  return gameData;
};

export default () => gameEngine(roundOfGame, rulesOfGame);
