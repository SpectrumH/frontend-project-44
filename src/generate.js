
const generate = (range) => Math.floor(Math.random() * range) + 1;

const generateInRange = () => {
    const min = 6;
    const max = 12;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateArrayOptionOfProgression = () => {
    const operatorInRange = generateInRange();
    let i = 0;
    const arrOfProgression = [];
    while (i < generateInRange()) {
        arrOfProgression.push(generate(operatorInRange))
        i += 1;
    }
    return arrOfProgression;
}

const generateProgression = () => {
    const arrOfProgression = generateArrayOptionOfProgression();
    let randomIndexOfProgression = Math.floor(Math.random() * arrOfProgression.length);
    const randomProgression = arrOfProgression[randomIndexOfProgression];
    const prog = [];
    prog.push(randomProgression);
    for (let i = 0; i < generateInRange(); i += 1) {
        prog.push(prog[i] + randomProgression);
    }
    return prog;
};

const randomize = (task) => {
    
    switch (task) {
        case 'even': {
            const operatorInRange = 100;
            let questionEven = generate(operatorInRange);
            return questionEven;
        }
        case 'calc': {
            const arrOfSign = ['+', '-', '*'];
            const operatorInRange = 10;
            let questionCalc;
            const sign = Math.floor(Math.random() * arrOfSign.length);
            const firstOperator = generate(operatorInRange);
            const secondOperator = generate(operatorInRange);
            switch (arrOfSign[sign]) {
                case '-':
                    questionCalc = `${firstOperator} - ${secondOperator}`;
                    return questionCalc;
                case '+':
                    questionCalc = `${firstOperator} + ${secondOperator}`;
                    return questionCalc;
                case '*':
                    questionCalc = `${firstOperator} * ${secondOperator}`;
                    return questionCalc;
            }
        }
        case 'gcd': {
            const operatorInRange = 100;
            let searchGcd = `${String(generate(operatorInRange))} ${String(generate(operatorInRange))}`;
            return searchGcd;
            }
        case 'progression': {
            const prog = generateProgression();
            let censoredRandomIndex = Math.floor(Math.random() * prog.length);
            prog[censoredRandomIndex] = '..';
            return prog.join(' ');
            }
        case 'prime': 
            const operatorInRange = 30;
            let prime = generate(operatorInRange);
            return prime;
    }
};

export default randomize;