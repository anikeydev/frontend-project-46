#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command()

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .version('0.0.1')

program
    .option('-f, --format <type>', 'output format')

program.parse()