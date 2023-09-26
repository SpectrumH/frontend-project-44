#!/usr/bin/env node
import run from '../src/games/prime-index.js';
import greeting from '../src/cli.js';
import { descriptions } from '../src/games/prime-index.js'

greeting();
descriptions();
run();