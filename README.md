# Quick-strapper

A Zero-config cli to help you bootstrap web projects with best templates.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/quick-strapper.svg)](https://www.npmjs.com/package/quick-strapper)
[![Downloads/week](https://img.shields.io/npm/dw/quick-strapper.svg)](https://www.npmjs.com/package/quick-strapper)
[![License](https://img.shields.io/npm/l/quick-strapper.svg)](https://github.com/sidwebworks/quick-strapper/blob/master/package.json)
[![Contributors](https://img.shields.io/github/contributors/sidwebworks/quick-strapper)](https://github.com/sidwebworks/quick-strapper/blob/master/package.json)
[![Github Stars](https://img.shields.io/github/stars/sidwebworks/quick-strapper?style=social)](https://github.com/sidwebworks/quick-strapper/blob/master/package.json)
[![Github Forks](https://img.shields.io/github/forks/sidwebworks/quick-strapper?style=social)](https://github.com/sidwebworks/quick-strapper/blob/master/package.json)


<!-- toc -->
* [Quick-strapper](#quick-strapper)
* [Usage](#usage)
* [Templates](#templates)
* [Commands](#commands)
<!-- tocstop -->

# Usage

You can start using the CLI with `npx` just by this in your terminal:

```shell
npx quick-strapper create
```

# Templates

The CLI comes with some default templates, which are already used and tested and might be a perfect start for your project.

- [React + Tailwindcss](https://github.com/sidwebworks/quick-strapper/tree/master/src/templates/react-tailwind)

- [Node + Express API](https://github.com/sidwebworks/quick-strapper/tree/master/src/templates/express-api)

#### If you have any templates or suggestions to improve these templates feel free to do a PR.

# Commands

<!-- commands -->
* [`quick-strapper create [NAME]`](#quick-strapper-create-name)
* [`quick-strapper help [COMMAND]`](#quick-strapper-help-command)

## `quick-strapper create [NAME]`

Start `quick-strapper` CLI

```
USAGE
  $ quick-strapper create [NAME]

OPTIONS
  -g, --git         Initialize a git repository
  -h, --help        show CLI help
  -i, --install     Install dependencies
  -t, --typescript  Setup Typescript

EXAMPLE
  $ quick-strapper create <project name>
```

_See code: [src/commands/create.js](https://github.com/sidwebworks/quick-strapper/blob/v1.0.5/src/commands/create.js)_

## `quick-strapper help [COMMAND]`

display help for quick-strapper

```
USAGE
  $ quick-strapper help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
