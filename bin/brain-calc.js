#!/usr/bin/env node

/* eslint-disable import/extensions */


import readlineSync from 'readline-sync';
import getRandomInt from '../src/generateRandomNumb.js';
import getRandomOperation from '../src/generateRandomOperation.js';

// minimum number, use only integer number
const minNumb = 1;
// maximum number, use only integer number
const maxNumb = 100;

// const randomNumb = getRandomInt(minNumb, maxNumb);
let userName = '';
const maximumTrueAnswers = 3;

const askName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${  userName  }!`);
};

console.log("Welcome to the Brain Games!");
askName();
console.log('What is the result of the expression?');

const gameEngine = (answerCount) => {
  const randomNumb1 = getRandomInt(minNumb, maxNumb);
  const randomNumb2 = getRandomInt(minNumb, maxNumb);
  const operation = getRandomOperation();
  if (answerCount === 0) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  let counter = answerCount;
  console.log(`Question: ${randomNumb1} ${operation} ${randomNumb2}`);
  const answer = readlineSync.question(`Your answer: `);
  let trueAnswer;
  switch (operation) {
    case '+':
      trueAnswer = randomNumb1 + randomNumb2;
      break;
    case '-':
      trueAnswer = randomNumb1 - randomNumb2;
      break;
    case '*':
      trueAnswer = randomNumb1 * randomNumb2;
      break;
    default:
      console.log('case Error');
  }
  if (parseInt(answer, 10) === trueAnswer) {
    counter -= 1;
    console.log('Correct!');
    return gameEngine(counter);
  }
  console.log(`Uh, no! Is wrong answer;(.
    Correct answer was ${trueAnswer}. Let 's try again, ${userName}!!`);
  return true;
};

gameEngine(maximumTrueAnswers);
