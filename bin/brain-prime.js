#!/usr/bin/env node
import run from '../src/games/prime-index.js';
import greeting from '../src/cli.js';

greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
run();