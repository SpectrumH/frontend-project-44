import readlineSync from 'readline-sync';
import { name } from './cli.js';

const isEven = () => {
    let flag;
    let cycleIsOver = true;
    console.log('Answer "yes" if the number is even, otherwise anser "no".');
    for (let i = 0; i < 3; i += 1) {
        let question = Math.floor(Math.random() * 101);
        question % 2 === 0 ? flag = 'yes' : flag = 'no';
        console.log(`Question: ${question}`);
        let answer = readlineSync.question('You answer: ');
        if (answer === flag) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${flag}'`);
            console.log(`Let's try again, ${name}`);
            cycleIsOver = false;
            break;
        }
    }
    cycleIsOver ? console.log(`Congratulation, ${name}!`) : cycleIsOver;
};

export default isEven;