import app from '../index.js'

const task = 'gcd';

const gcd = (arrOfNum) => {
    const temp = arrOfNum.split(' ');
    let first = Number(temp[0]);
    for (let i = 1; i < temp.length; i += 1) {
        let second = Number(temp[i]);
        while (first && second) {
            first > second ? first %= second : second %= first;
        }
        first += second;
    }
    return String(first);
};

export default () => app(task, gcd);