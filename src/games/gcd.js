import playGame from '../index.js';
import generate from '../generate.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const operatorInRange = 100;
  const question = `${generate(operatorInRange)} ${generate(operatorInRange)}`;
  let [first, second] = question.split(' ');
  while (first && second) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }
  first += second;
  return [question, String(first)];
};

export default () => playGame(description, gcd);
