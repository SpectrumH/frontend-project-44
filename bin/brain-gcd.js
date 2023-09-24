#!/usr/bin/env node
import run from '../src/games/gcd-index.js';
import greeting from '../src/cli.js';

greeting();
console.log('Find the greatest common divisor of given numbers.');
run();