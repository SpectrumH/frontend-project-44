import playGame from '../index.js';
import generate from '../generate.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const operatorInRange = 100;
  const question = `${generate(operatorInRange)} ${generate(operatorInRange)}`;
  const temp = question.split(' ');
  let first = Number(temp[0]);
  for (let i = 1; i < temp.length; i += 1) {
    let second = Number(temp[i]);
    while (first && second) {
      if (first > second) {
        first %= second;
      } else {
        second %= first;
      }
    }
    first += second;
  }
  return [question, String(first)];
};

export default () => playGame(description, gcd);
