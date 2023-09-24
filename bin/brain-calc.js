#!/usr/bin/env node
import run from '../src/games/calc-index.js';
import greeting from '../src/cli.js';

greeting();
console.log('What is the result of the expression?');
run();