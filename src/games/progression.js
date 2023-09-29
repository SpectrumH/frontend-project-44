import readlineSync from 'readline-sync';
import app from '../index.js';
import randomize from '../generate.js';

const task = 'progression';
const description = 'What number is missing in the progression?';

const calculateAtEnd = (num1, num2) => {
  const progressionDifference = num1 - num2;
  const result = num1 + progressionDifference;
  return result;
};

const calculateAtStart = (num1, num2) => {
  const progressionDifference = num1 - num2;
  const result = num2 - progressionDifference;
  return result;
};

const progression = () => {
  const question = randomize(task);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('You answer: ');
  const progressions = question.split(' ');
  const halfLengthOfProgression = progressions.length / 2;
  let result;
  for (let i = 0; i < progressions.length; i += 1) {
    if (progressions[i] === '..') {
      if (i < halfLengthOfProgression) {
        result = calculateAtStart(Number(progressions[i + 2]), Number(progressions[i + 1]));
      } else {
        result = calculateAtEnd(Number(progressions[i - 1]), Number(progressions[i - 2]));
      }
    }
  }
  return [answer, String(result)];
};

export default () => app(description, progression);
