#!/usr/bin/env node
import run from '../src/games/calc-index.js';
import greeting from '../src/cli.js';
import { descriptions } from '../src/games/calc-index.js'

greeting();
descriptions();
run();