import app from '../index.js';

const task = 'progression';

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

const progression = (prog) => {
  const progressions = prog.split(' ');
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
  return String(result);
};

export default () => app(task, progression);
