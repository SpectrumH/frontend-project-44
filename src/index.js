import readlineSync from 'readline-sync';
import { name } from './cli.js'

const randomize = (task) => {
    switch (task) {
        case 'even':
            let questionEven = Math.floor(Math.random() * 101);
            return questionEven;
        case 'calc': {
            const arrOfSign = ['+', '-', '*'];
            let questionCalc;
            const sign = Math.floor(Math.random() * arrOfSign.length);
            const firstOperator = Math.floor(Math.random() * 101);
            const secondOperator = Math.floor(Math.random() * 101);
            switch (arrOfSign[sign]) {
                case '-':
                    questionCalc = `${firstOperator} - ${secondOperator}`
                    return questionCalc;
                case '+':
                    questionCalc = `${firstOperator} + ${secondOperator}`
                    return questionCalc;
                case '*':
                    questionCalc = `${firstOperator} * ${secondOperator}`
                    return questionCalc;
            }
        }

    }
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
        console.log(`Let's try again, ${name}`);
        return false;
    }
};

const app = (task, func) => {
    let cycleIsOver;
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
    cycleIsOver ? console.log(`Congratulation, ${name}!`) : cycleIsOver;
};

export default app;