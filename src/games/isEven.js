import playGame from '../index.js';
import generate from '../generate.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => {
  const operatorInRange = 100;
  const question = generate(operatorInRange);
  let result = 'yes';
  if (question % 2 !== 0) {
    result = 'no';
  }
  return [question, result];
};

export default () => playGame(description, isEven);
