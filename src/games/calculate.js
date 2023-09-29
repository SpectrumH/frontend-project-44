import readlineSync from 'readline-sync';
import app from '../index.js';
import randomize from '../generate.js';

const task = 'calc';
const description = 'What is the result of the expression?';

const calc = () => {
  const question = randomize(task);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('You answer: ');
  const arrOfOp = question.split(' ');
  const sign = ['+', '-', '*'];
  let result;
  let temp = Number(arrOfOp[0]);
  for (let i = 1; i < arrOfOp.length; i += 1) {
    if (sign.includes(arrOfOp[i])) {
      if (arrOfOp[i] === '+') {
        result = temp + Number(arrOfOp[i + 1]);
        temp = result;
      } else if (arrOfOp[i] === '-') {
        result = temp - Number(arrOfOp[i + 1]);
        temp = result;
      } else {
        result = temp * Number(arrOfOp[i + 1]);
        temp = result;
      }
    }
  }
  return [answer, String(result)];
};

export default () => app(description, calc);
