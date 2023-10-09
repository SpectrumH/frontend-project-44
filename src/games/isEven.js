import playGame from '../index.js';
import generateInteger from '../generate.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const even = () => {
  const question = generateInteger(1, 100);
  const result = isEven(question) ? 'yes' : 'no';

  return [question, result];
};

export default () => playGame(description, even);
