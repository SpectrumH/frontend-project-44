import readlineSync from 'readline-sync';
import app from '../index.js';
import randomize from '../generate.js';

const task = 'prime';
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = () => {
  const question = randomize(task);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('You answer: ');
  let result = 'yes';
  if (question < 2) {
    result = 'no';
  }

  let devider = 2;

  while (devider <= question / 2) {
    if (question % devider === 0) {
      result = 'no';
    }
    devider += 1;
  }
  return [answer, result];
};

export default () => app(description, isPrime);
