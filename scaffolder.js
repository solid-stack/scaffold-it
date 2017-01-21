#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const execSync = require('child_process').execSync;
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const program = require('commander');
const scaffold = require('scaffold-generator');
const version = require('./package.json').version;

program
    .version(version)
    .command('install', 'Install a template from a git endpoint')
    .command('template', 'Run the templating program', {isDefault: true});

program.on('--help', function(){
    console.log(chalk.blue('  Notes:'));
    console.log('');
    console.log(chalk.blue('Requires node 6+'));
    console.log(chalk.blue('The default template delimiters are {{{% and %}}}'));
    console.log('');
});

program.parse(process.argv);

