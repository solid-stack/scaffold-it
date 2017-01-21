# scaffold-it

Usage:

```bash
npm install -g scaffold-it
# scaffold-it <source> <destination>
scaffold-it /Users/me/my-scaffold/template /Users/me/my-new-git-repo
```

Paths are required to be absolute paths. You can use `$(pwd)` to build them:

```bash
scaffold-it $(pwd)/template $(pwd)/../output
```

The `source` should be a directory with you scaffolding. It must contain a `template-variables.json` file at its root.
The prompts for generating the questions required for the scaffolding will be created from `template-variables.json`.

The `destination` is where your scaffolding will be templated to.

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

## Options

`scaffold-it -h` will show all these options.

* `-o, --override` - Override any existing files.
* `-p, --open` - Open template characters, Defaults to `{{{%`
* `-c, --close` - Close template characters. Defaults to `%}}}`

## Hooks
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
 
## Directory Structure
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

README.md, package.json, and hooks directory are not required for the template to 
run successfully.


## Tests

`npm test` will prompt and then generate to `./test/output`.
