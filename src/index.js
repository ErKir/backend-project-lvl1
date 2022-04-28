#!/usr/bin/env node

/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import {
  car,
  cdr
} from '@hexlet/pairs';

// const randomNumb = getRandomInt(minNumb, maxNumb);
let userName = '';

const askName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${  userName  }!`);
};

console.log("Welcome to the Brain Games!");
askName();


const gameEngine = (game) => {
  const gameData = car(game);
  const rulesOfGame = cdr(game);
  console.log(`${ rulesOfGame }`);
  for (let i = 0; i <= gameData.length - 1; i += 1) {
    const data = gameData[i];
    const question = car(data);
    const trueAnswer = cdr(data).toString();
    console.log(`Question: ${ question }`);
    const userAnswer = readlineSync.question(`Your answer: `);
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(.
    Correct answer was '${trueAnswer}'. Let 's try again, ${userName}!!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  gameEngine
};
