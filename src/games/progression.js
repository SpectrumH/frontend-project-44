import playGame from '../index.js';
import generateInteger from '../generate.js';

const description = 'What number is missing in the progression?';

const generateFirst = () => {
  const min = 6;
  const max = 12;

  return generateInteger(min, max);
};

const generateStep = () => {
  const min = 3;
  const max = 10;

  return generateInteger(min, max);
};

const generateLength = () => {
  const min = 7;
  const max = 13;

  return generateInteger(min, max);
};
const censoredIndex = (coll) => {
  const arr = coll;
  const censoredRandomIndex = Math.floor(Math.random() * arr.length);
  arr[censoredRandomIndex] = '..';

  return arr;
};

const generateProgression = (firstElementOfProgression, stepOfProgression, lengthOfProgression) => {
  const progression = [];
  progression.push(firstElementOfProgression);
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(progression[i] + stepOfProgression);
  }

  return censoredIndex(progression);
};

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

const findElement = (progression) => {
  const halfLengthOfProgression = progression.length / 2;
  let result;
  for (let i = 0; i < progression.length; i += 1) {
    if ((progression[i] === '..') && (i < halfLengthOfProgression)) {
      result = calculateAtStart(progression[i + 2], progression[i + 1]);
    } else if (progression[i] === '..') {
      result = calculateAtEnd(progression[i - 1], progression[i - 2]);
    }
  }
  return result;
};

const progressions = () => {
  const progression = generateProgression(generateFirst(), generateStep(), generateLength());
  const question = progression.join(' ');
  const result = findElement(progression);

  return [question, String(result)];
};

export default () => playGame(description, progressions);
