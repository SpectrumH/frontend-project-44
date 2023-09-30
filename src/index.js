import readlineSync from 'readline-sync';

const maximumRound = 3;

const playGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < maximumRound; i += 1) {
    const [question, result] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('You answer: ');
    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
