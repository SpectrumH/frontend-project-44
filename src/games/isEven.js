import playGame from '../index.js';
import generateInteger from '../generate.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const even = () => {
  const min = 1;
  const max = 100;
  const question = generateInteger(min, max);
  const result = isEven(question) ? 'yes' : 'no';

  return [question, result];
};

export default () => playGame(description, even);
