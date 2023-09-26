import app from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const task = 'prime';

export const descriptions = () => console.log(description);

const isPrime = (num) => {
    let result = 'no';
    if (num < 2) {
        return result;
    }

    let devider = 2;

    while (devider <= num / 2) {
        if (num % devider === 0){
            return result;
        }
        devider += 1;
    }
    
    return result = 'yes';
    
};

export default () => app(task, isPrime);