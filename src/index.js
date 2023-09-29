import greeting, { name } from './cli.js';

const app = (description, generateRound) => {
  greeting();
  let cycleIsOver;
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [answer, result] = generateRound();
    if (answer === result) {
      console.log('Correct!');
      cycleIsOver = true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${name}!`);
      cycleIsOver = false;
      break;
    }
  }
  if (cycleIsOver) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default app;
