import app from '../index.js'

const task = 'progression';

const progression = (prog) => {
    const coll = prog.split(' ');
    let progressionDifference;
    let result;
    for (let i = 0; i < coll.length; i += 1) {
        if (coll[i] === '..') {
            if ((i === coll.length - 1) || (i === coll.length - 2)){
                progressionDifference = Number(coll[i - 1]) - Number(coll[i - 2]);
                result = Number(coll[i - 1]) + progressionDifference;
            } else {
                let progressionDifference = Number(coll[i + 2]) - Number(coll[i + 1]);
                result = Number(coll[i + 1]) - progressionDifference;
            }
        }
    }
    return String(result);
}

export default () => app(task, progression);