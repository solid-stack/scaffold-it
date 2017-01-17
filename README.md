# scaffold-it

Usage:

```bash
npm install -g scaffold-it
# scaffold-it <source> <destionation>
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

## Tests

`npm test` will prompt and then generate to `./test/output`.
