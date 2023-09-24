import app from '../index.js'

const task = 'calc';

const calc = (question) => {
    
    const arrOfOp = question.split(' ');
    const sign = ['+', '-', '*'];
    let result;
    let temp;

    for (let i = 0; i < arrOfOp.length; i += 1) {
        if (sign.includes(arrOfOp[i])) {
            switch (arrOfOp[i]) {
                case '+':
                    result = temp + Number(arrOfOp[i + 1]);
                    continue;
                case '-':
                    result = temp - Number(arrOfOp[i + 1]);
                    continue;
                case '*':
                    result = temp * Number(arrOfOp[i + 1]);
                    continue;
            }
        } else {
            temp = Number(arrOfOp[i]);
        }
    }
    return String(result);
}

export default () => app(task, calc);