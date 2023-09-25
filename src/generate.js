

const generate = (range) => Math.floor(Math.random() * range) + 1;

const generateInRange = () => {
    const min = 6;
    const max = 12;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateArrayOptionOfProgression = () => {
    const operatorInRange = 20;
    const progressionOption = generate(operatorInRange);
    const amountOfElements = generateInRange();
    let i = 0;
    const arrOfProgressions = [];
    while (i < amountOfElements) {
        arrOfProgressions.push(generate(progressionOption))
        i += 1;
    }
    return arrOfProgressions;
}

const censoredRandomIndex = (coll) => {
    let censoredRandomIndex = Math.floor(Math.random() * coll.length);
    coll[censoredRandomIndex] = '..';
    return coll;
}

const generateProgression = () => {
    const arrOfProgression = generateArrayOptionOfProgression();
    let randomIndexOfProgression = Math.floor(Math.random() * arrOfProgression.length);
    const randomProgression = arrOfProgression[randomIndexOfProgression];
    const prog = [];
    let progression;
    prog.push(randomProgression);
    for (let i = 0; i < generateInRange(); i += 1) {
        prog.push(prog[i] + randomProgression);
    }
    progression = censoredRandomIndex(prog);
    return progression;
};

const chooseOperation = () => {
    let question;
    const arrOfSign = ['+', '-', '*'];
    const sign = Math.floor(Math.random() * arrOfSign.length);
    const operatorInRange = 10;
    switch (arrOfSign[sign]) {
        case '-':
            question = `${generate(operatorInRange)} - ${generate(operatorInRange)}`;
            break;
        case '+':
            question = `${generate(operatorInRange)} + ${generate(operatorInRange)}`;
            break;
        case '*':
            question = `${generate(operatorInRange)} * ${generate(operatorInRange)}`;
            break;
    }
    return question;
};

const randomize = (task) => {
    let operatorInRange;
    let question;
    switch (task) {
        case 'even':
            operatorInRange = 100;
            question = generate(operatorInRange);
            break;
        case 'calc': 
            question = chooseOperation();
            break;
        case 'gcd':
            operatorInRange = 100;
            question = `${String(generate(operatorInRange))} ${String(generate(operatorInRange))}`;
            break;
        case 'progression': 
            question = generateProgression().join(' ');
            break;
        case 'prime': 
            operatorInRange = 30;
            question = generate(operatorInRange);
            break;
    }
    return question;
};

export default randomize;