#!/usr/bin/env node
import run from '../src/games/progression-index.js';
import greeting from '../src/cli.js';

greeting();
console.log('What number is missing in the progression?');
run();