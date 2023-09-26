import app from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise anser "no".'; 
const task = 'even';

export const descriptions = () => console.log(description);

const isEven = (question) => {
    let result = 'yes';
    question % 2 === 0 ? result : result = 'no';
    return result;
};


export default () => app(task, isEven);