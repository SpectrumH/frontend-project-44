import playGame from '../index.js';
import generate from '../generate.js';

const description = 'What number is missing in the progression?';

const generateInRange = () => {
  const min = 6;
  const max = 12;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateArrayOptionOfProgression = () => {
  const operatorInRange = 20;
  const progressionOption = generate(operatorInRange);
  const amountOfElements = generateInRange();
  let i = 0;
  const arrOfProgressions = [];
  while (i < amountOfElements) {
    arrOfProgressions.push(generate(progressionOption));
    i += 1;
  }
  return arrOfProgressions;
};

const censoredIndex = (coll) => {
  const arr = coll;
  const censoredRandomIndex = Math.floor(Math.random() * coll.length);
  arr[censoredRandomIndex] = '..';
  return arr;
};

const generateProgression = () => {
  const arrOfProgression = generateArrayOptionOfProgression();
  const randomIndexOfProgression = Math.floor(Math.random() * arrOfProgression.length);
  const randomProgression = arrOfProgression[randomIndexOfProgression];
  const prog = [];
  prog.push(randomProgression);
  for (let i = 0; i < generateInRange(); i += 1) {
    prog.push(prog[i] + randomProgression);
  }
  return censoredIndex(prog);
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

const progression = () => {
  const progressions = generateProgression();
  const question = progressions.join(' ');
  const halfLengthOfProgression = progressions.length / 2;
  let result;
  for (let i = 0; i < progressions.length; i += 1) {
    if ((progressions[i] === '..') && (i < halfLengthOfProgression)) {
      result = calculateAtStart(progressions[i + 2], progressions[i + 1]);
    } else if (progressions[i] === '..') {
      result = calculateAtEnd(progressions[i - 1], progressions[i - 2]);
    }
  }
  console.log(result);
  return [question, String(result)];
};

export default () => playGame(description, progression);
