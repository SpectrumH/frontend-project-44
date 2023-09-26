#!/usr/bin/env node
import run from '../src/games/even-index.js';
import greeting from '../src/cli.js';
import { descriptions } from '../src/games/even-index.js'

greeting();
descriptions();
run();