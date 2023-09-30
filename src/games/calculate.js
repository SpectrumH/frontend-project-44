import playGame from '../index.js';
import generate from '../generate.js';

const description = 'What is the result of the expression?';

const chooseOperation = () => {
  let question;
  const arrOfSign = ['+', '-', '*'];
  const sign = Math.floor(Math.random() * arrOfSign.length);
  const operation = arrOfSign[sign];
  const operatorInRange = 10;
  switch (operation) {
    case '-':
      question = `${generate(operatorInRange)} ${operation} ${generate(operatorInRange)}`;
      break;
    case '+':
      question = `${generate(operatorInRange)} ${operation} ${generate(operatorInRange)}`;
      break;
    default:
      question = `${generate(operatorInRange)} ${operation} ${generate(operatorInRange)}`;
      break;
  }
  return [question, question.split(' ')];
};

const calc = () => {
  const [question, arrOfOp] = chooseOperation();
  const sign = ['+', '-', '*'];
  let result = Number(arrOfOp[0]);
  for (let i = 1; i < arrOfOp.length; i += 1) {
    if (sign.includes(arrOfOp[i])) {
      if (arrOfOp[i] === '+') {
        result += Number(arrOfOp[i + 1]);
      } else if (arrOfOp[i] === '-') {
        result -= Number(arrOfOp[i + 1]);
      } else {
        result *= Number(arrOfOp[i + 1]);
      }
    }
  }
  return [question, String(result)];
};

export default () => playGame(description, calc);
