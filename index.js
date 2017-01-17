#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const inquirer = require('inquirer');
const path = require('path');
const program = require('commander');
const scaffold = require('scaffold-generator');
const version = require('./package.json').version;

program
    .version(version)
    .option('-o, --override', 'Override any existing files')
    .arguments('<source> <destination>', '"source" is the path to a git repo, "destination" is the path to a "template" dir' )
    .action(action);

function action(source, destination) {
    const variables = require(path.join(source, 'template-variables.json'));
    let questions = [];
    for (let key of Object.keys(variables)) {
        questions.push({
            type : 'input',
            name : key,
            message: key
        })
    }

    inquirer
        .prompt(questions)
        .then(answers => {

            console.log(chalk.yellow(`This ${program.override ? 'will' : 'will not'} override existing files`));

            console.log(chalk.green('Data used for templating:'));
            console.log(chalk.cyan(JSON.stringify(answers, null, 4)));

            scaffold({
                    data: answers,
                    open: '{{{%',
                    close: '%}}}',
                    override: program.override
                })
                .copy(source, destination, err => {
                    if (err) {
                        console.log(chalk.red('ERROR:'));
                        console.log(err);
                    } else {
                        console.log(chalk.green('Scaffolding complete.'));
                        console.log(chalk.green(`New project is at: ${destination}`));
                    }
                });
        });

}


program.on('--help', function(){
    console.log(chalk.blue('  Notes:'));
    console.log('');
    console.log(chalk.blue('Requires node 6+'));
    console.log(chalk.blue('The template delimiters are {{{% and %}}}'));
    console.log('');
});

program.parse(process.argv);

