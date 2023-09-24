#!/usr/bin/env node
import run from '../src/games/even-index.js';
import greeting from '../src/cli.js';

greeting();
console.log('Answer "yes" if the number is even, otherwise anser "no".');
run();