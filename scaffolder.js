#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const program = require('commander');
const version = require('./package.json').version;

program
    .version(version)
    .command('install', 'Install a template from a git endpoint')
    .command('template', 'Run the templating program', {isDefault: true});

program.on('--help', function(){
    console.log(chalk.blue('  Notes:'));
    console.log('');
    console.log(chalk.blue('Requires node 6+'));
    console.log('');
});

program.parse(process.argv);

