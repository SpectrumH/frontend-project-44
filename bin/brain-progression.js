#!/usr/bin/env node
import run from '../src/games/progression-index.js';
import greeting from '../src/cli.js';
import { descriptions } from '../src/games/progression-index.js'

greeting();
descriptions();
run();