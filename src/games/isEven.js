import readlineSync from 'readline-sync';
import app from '../index.js';
import randomize from '../generate.js';

const task = 'even';
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => {
  const question = randomize(task);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('You answer: ');
  let result = 'yes';
  if (question % 2 !== 0) {
    result = 'no';
  }
  return [answer, result];
};

export default () => app(description, isEven);
