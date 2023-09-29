import readlineSync from 'readline-sync';
import app from '../index.js';
import randomize from '../generate.js';

const task = 'gcd';
const description = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const question = randomize(task);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('You answer: ');
  const temp = question.split(' ');
  let first = Number(temp[0]);
  for (let i = 1; i < temp.length; i += 1) {
    let second = Number(temp[i]);
    while (first && second) {
      if (first > second) {
        first %= second;
      } else {
        second %= first;
      }
    }
    first += second;
  }
  return [answer, String(first)];
};

export default () => app(description, gcd);
