import playGame from '../index.js';
import generateInteger from '../generate.js';

const description = 'What is the result of the expression?';

const resultOfExpression = (first, second, sign) => {
  switch (sign) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    default:
      return first * second;
  }
};

const calc = () => {
  const arrOfSign = ['+', '-', '*'];
  const sign = arrOfSign[generateInteger(0, 2)];
  const firstNum = generateInteger(1, 10);
  const secondNum = generateInteger(1, 10);
  const question = `${firstNum} ${sign} ${secondNum}`;
  const result = resultOfExpression(firstNum, secondNum, sign);

  return [question, String(result)];
};

export default () => playGame(description, calc);
