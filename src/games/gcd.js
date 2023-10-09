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
  const first = generateInteger(1, 100);
  const second = generateInteger(1, 100);
  const question = `${first} ${second}`;
  const result = findGcd(first, second);

  return [question, String(result)];
};

export default () => playGame(description, gcd);
