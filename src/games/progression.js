import playGame from '../index.js';
import generateInteger from '../generate.js';

const description = 'What number is missing in the progression?';

const generateProgression = (firstElementOfProgression, step, lengthOfProgression) => {
  const progression = [];
  progression.push(firstElementOfProgression);
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(progression[i] + step);
  }

  return progression;
};

const progressions = () => {
  const firstElement = generateInteger(6, 12);
  const step = generateInteger(3, 10);
  const lengthOfProgression = generateInteger(7, 13);
  const censoredRandomIndex = generateInteger(0, lengthOfProgression);
  const progression = generateProgression(firstElement, step, lengthOfProgression);
  const result = progression[censoredRandomIndex];
  progression[censoredRandomIndex] = '..';
  const question = progression.join(' ');

  return [question, String(result)];
};

export default () => playGame(description, progressions);
