import readlineSync from 'readline-sync';
import { name } from './cli.js'
import randomize from './generate.js';

const descriptions = (task) => {
    let description;
    switch (task) {
        case 'calc':
            description = 'What is the result of the expression?';
            break;
        case 'even':
            description = 'Answer "yes" if the number is even, otherwise answer "no".';
            break;
        case 'gcd':
            description = 'Find the greatest common divisor of given numbers.';
            break;
        case 'progression':
            description = 'What number is missing in the progression?';
            break;
        case 'prime':
            description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
            break;
    }
    return console.log(description);
};

const generateQuestion = (task) => {
    const question = randomize(task);
    return question;
};

const takeAnswer = () => {
    const answer = readlineSync.question('You answer: ');
    return answer;
};

const isCorrect = (result, answer) => {
    if (answer === result) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
        console.log(`Let's try again, ${name}!`);
        return false;
    }
};

const app = (task, func) => {
    let cycleIsOver;
    descriptions(task);
    for (let i = 0; i < 3; i += 1) {
        let question = generateQuestion(task);
        let result = func(question);
        console.log(`Question: ${question}`);
        let answer = takeAnswer();
        cycleIsOver = isCorrect(result, answer);
        if (cycleIsOver === false) {
            break;
        }
    }
    cycleIsOver ? console.log(`Congratulations, ${name}!`) : cycleIsOver;
};

export default app;