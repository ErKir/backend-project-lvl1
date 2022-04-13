import readlineSync from 'readline-sync';
import isEven from '../src/isEven.js';
import getRandomInt from '../src/generateRandomNumb.js'

console.log('Answer "yes" if the number is even, otherwise answer "no".');
// console.log(`Question: ${ getRandomInt() }`);
const randomNumb = getRandomInt();
const getAnswer = () => {
  const answer = readlineSync.question(`Question: ${ randomNumb }`);
  console.log(`Your answer: ${ answer }!`);
  if (isEven(randomNumb) === true && answer === 'yes') {
    console.log('Correct!');
  } else if (isEven(randomNumb) === false && answer === 'no') {
    console.log('Correct!');
  } else {
    console.log(`is wrong answer;(.`\
      n `Correct answer was "no". Let \'s try again, ${}!!`);
  }
}


// const askName = () => {
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello ${  userName  }!`);
// };
// Answer "yes" if the number is even, otherwise answer "no".
// Question: 15
// Your answer: no
// Correct!
//   Question: 6
// Your answer: yes
// Correct!
//   Question: 7
// Your answer: no
// Correct!
//   Congratulations, Sam!

// 'yes'
// is wrong answer;(.
// Correct answer was 'no'.Let 's try again, Bill!
