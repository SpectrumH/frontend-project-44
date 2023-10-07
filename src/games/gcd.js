import playGame from '../index.js';
import generateInteger from '../generate.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (first, second) => {
  let firstInt = first;
  let secondInt = second;
  while (firstInt && secondInt) {
    if (firstInt > secondInt) {
      firstInt %= secondInt;
    } else {
      secondInt %= firstInt;
    }
  }
  firstInt += secondInt;

  return firstInt;
};

const gcd = () => {
  const min = 1;
  const max = 100;
  const first = generateInteger(min, max);
  const second = generateInteger(min, max);
  const question = `${first} ${second}`;

  return [question, String(findGcd(first, second))];
};

export default () => playGame(description, gcd);
