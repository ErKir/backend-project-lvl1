/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import {
  car,
  cdr,
} from '@hexlet/pairs';

const gameEngine = (roundOfGame, rulesOfGame) => {
  // number of round in the game
  const maxNumberOfRound = 3;

  // Greeting
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${rulesOfGame}`);

  // game loop
  for (let numberOfRound = 1; numberOfRound <= maxNumberOfRound; numberOfRound += 1) {
    const round = roundOfGame();
    const question = car(round);
    const trueAnswer = cdr(round).toString();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(.
    Correct answer was '${trueAnswer}'. Let's try again, ${userName}!!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
