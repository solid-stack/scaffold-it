# scaffold-it

Generate projects from scaffolds. 

## Usage:

```bash
npm install -g scaffold-it
scaffold-it install git@github.com:example/scaffold-example.git
scaffold-it template scaffold-example ./my-new-project
```

## Subcommands

### install

`scaffold-it install <source>`

`source` is a git repo. It will be cloned into `~/.scaffold-it` and can be subsequently used in `scaffold-it template`.

### list

`scaffold-it list`

Will show all installed templates.

### template

`scaffold-it template [options] <template-name> <destination>`

This is also the default command, so `template` can be left out:

`scaffold-it [options] <template-name> <destination>`

The `destination` is where your scaffolding will be templated to. It can be a relative or absolute path.

#### Options

* `-o, --override` - Override any existing files.
* `-p, --open` - Open template characters, Defaults to `{{{%`
* `-c, --close` - Close template characters. Defaults to `%}}}`

### update

`scaffold-it update <template-name>`

Update the named template with a git pull from origin.


#### Template Directory Structure
```
project
|  README.md
|  package.json
|__template
   | template-variables.json
   | <other template files>
|__hooks
   | pre.hook
   | post.hook
```

README.md, package.json, and hooks directory are not required for the template to run successfully.

#### Templating

The prompts for generating the questions required for the scaffolding will be created from `template-variables.json`.

The delimiters are `{{{%` and `%}}}`.

A sample `template-variables.json`:

```json
{
    "project_name" : "{{{%= project_name %}}}"
}
```

Template variables can be used within files or in file names.

After running the command and filling out the prompts, your new project will be at `destination`. `template-variables.json`
will be at the root of your project, and you can use that file to double check the variables that were used to create
your project.

#### Hooks
Your template can contain hook files that can run arbitraty commands both before and 
after the scaffold. There are two types of hooks:

Pre: 
- Runs: right before the scaffold process
- File Name: pre.hook

Post: 
- Runs: Right after the scaffold process.
- File Name: post.hook

Both hooks should be located in the hooks directory and receive the a 
JSON.stringified version of the template variables and their values as the first
argument.
 
### Tests

`npm test` will prompt and then generate to `./test/output`.
