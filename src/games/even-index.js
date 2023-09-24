import app from '../index.js'

const task = 'even';

const isEven = (question) => {
    let result = 'yes';
    question % 2 === 0 ? result : result = 'no';
    return result;
};


export default () => app(task, isEven);