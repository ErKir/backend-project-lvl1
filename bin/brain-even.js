#!/usr/bin/env node

/* eslint-disable import/extensions */


import readlineSync from 'readline-sync';
import isEven from '../src/isEven.js';
import getRandomInt from '../src/generateRandomNumb.js';

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
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const gameEngine = (answerCount) => {
  const randomNumb = getRandomInt(minNumb, maxNumb);
  if (answerCount === 0) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  let counter = answerCount;
  console.log(`randomNumb = = = ${randomNumb}`);
  const answer = readlineSync.question(`Question: ${ randomNumb }`);
  console.log(`Your answer: ${ answer }!`);
  if (isEven(randomNumb) === 'yes' && answer === 'yes') {
    counter -= 1;
    console.log('Correct!');
    return gameEngine(counter);
  }
  if (isEven(randomNumb) === 'no' && answer === 'no') {
    counter -= 1;
    console.log('Correct!');
    return gameEngine(counter);
  }
  console.log(`is wrong answer;(.
    Correct answer was ${isEven(randomNumb)}. Let 's try again, ${userName}!!`);
  return true;
};

gameEngine(maximumTrueAnswers);
