#!/usr/bin/env node
import run from '../src/games/gcd-index.js';
import greeting from '../src/cli.js';
import { descriptions } from '../src/games/gcd-index.js'

greeting();
descriptions();
run();