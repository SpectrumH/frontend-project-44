import playGame from '../index.js';
import generateInteger from '../generate.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number, devider) => (number % devider === 0);

const calculate = (number) => {
  let devider = 2;
  if (number < devider) {
    return 'no';
  }
  while (devider <= number / 2) {
    if (isPrime(number, devider)) {
      return 'no';
    }
    devider += 1;
  }

  return 'yes';
};

const prime = () => {
  const min = 1;
  const max = 30;
  const question = generateInteger(min, max);

  return [String(question), calculate(question)];
};

export default () => playGame(description, prime);
