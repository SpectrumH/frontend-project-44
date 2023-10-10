import playGame from '../index.js';
import generateInteger from '../generate.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (first, second) => {
  if (second === 0) {
    return first;
  }

  return findGcd(second, first % second);
};

const gcd = () => {
  const first = generateInteger(1, 100);
  const second = generateInteger(1, 100);
  const question = `${first} ${second}`;
  const result = findGcd(first, second);

  return [question, String(result)];
};

export default () => playGame(description, gcd);
