import app from '../index.js';

const task = 'even';

const isEven = (question) => {
  let result = 'yes';
  if (question % 2 !== 0) {
    result = 'no';
  }
  return result;
};

export default () => app(task, isEven);
