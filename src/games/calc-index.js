import app from '../index.js'

const task = 'calc';

const calc = (question) => {
    const arrOfOp = question.split(' ');
    const sign = ['+', '-', '*'];
    let result;
    let temp = Number(arrOfOp[0]);
    for (let i = 1; i < arrOfOp.length; i += 1) {
        if (sign.includes(arrOfOp[i])) {
            switch (arrOfOp[i]) {
                case '+':
                    result = temp + Number(arrOfOp[i + 1]);
                    temp = result;
                    continue;
                case '-':
                    result = temp - Number(arrOfOp[i + 1]);
                    temp = result;
                    continue;
                case '*':
                    result = temp * Number(arrOfOp[i + 1]);
                    temp = result;
                    continue;
            }
        } 
    }
    return String(result);
}

export default () => app(task, calc);