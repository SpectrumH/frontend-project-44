import playGame from '../index.js';
import generateInteger from '../generate.js';

const description = 'What is the result of the expression?';

const generateExpression = () => {
  const min = 1;
  const max = 10;
  const arrOfSign = ['+', '-', '*'];
  const sign = arrOfSign[Math.floor(Math.random() * arrOfSign.length)];
  const expression = `${generateInteger(min, max)} ${sign} ${generateInteger(min, max)}`;

  return expression;
};

const resultOfExpression = (expression) => {
  let result = Number(expression[0]);
  for (let i = 1; i < expression.length; i += 1) {
    if (expression[i] === '+') {
      result += Number(expression[i + 1]);
    } else if (expression[i] === '-') {
      result -= Number(expression[i + 1]);
    } else if (expression[i] === '*') {
      result *= Number(expression[i + 1]);
    }
  }

  return result;
};

const calc = () => {
  const question = generateExpression();
  const result = resultOfExpression(question.split(' '));

  return [question, String(result)];
};

export default () => playGame(description, calc);
