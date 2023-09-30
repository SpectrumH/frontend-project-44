import playGame from '../index.js';
import generate from '../generate.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = () => {
  const operatorInRange = 30;
  const question = generate(operatorInRange);
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
  return [String(question), result];
};

export default () => playGame(description, isPrime);
