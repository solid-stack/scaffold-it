#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const execSync = require('child_process').execSync;
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const program = require('commander');


program
    .arguments('<source>', '"source" is the git endpoint to clone, it will be put int ~/.scaffold-it')
    .action(action);

function action(source) {

    const templatesDir = path.join(os.homedir(), '.scaffold-it');
    mkdirp.sync(templatesDir);
    console.log(chalk.yellow(`Templates are in ${templatesDir}`));
    console.log(chalk.green(`Cloning ${source}`));
    execSync(`git clone ${source}`, { stdio:'inherit', cwd: templatesDir });
}

program.parse(process.argv);

