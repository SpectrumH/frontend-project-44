import playGame from '../index.js';
import generateInteger from '../generate.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number, devider) => (number % devider === 0);

const calculate = (number) => {
  let devider = 2;
  if (number < devider) {
    return false;
  }
  while (devider <= number / 2) {
    if (isPrime(number, devider)) {
      return false;
    }
    devider += 1;
  }

  return true;
};

const prime = () => {
  const question = generateInteger(1, 30);
  const result = calculate(question) ? 'yes' : 'no';
  return [String(question), result];
};

export default () => playGame(description, prime);
