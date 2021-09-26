quick-strapper
===========

A Zero-config cli to help you bootstrap web projects

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/quick-strapper.svg)](https://www.npmjs.com/package/@sidwebworks/quick-strapper)
[![Downloads/week](https://img.shields.io/npm/dw/quick-strapper.svg)](https://www.npmjs.com/package/@sidwebworks/quick-strapper)
[![License](https://img.shields.io/npm/l/quick-strapper.svg)](https://github.com/sidwebworks/quick-strapper/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g quick-strapper
$ quick-strapper COMMAND
running command...
$ quick-strapper (-v|--version|version)
quick-strapper/1.0.2 linux-x64 node-v14.17.6
$ quick-strapper --help [COMMAND]
USAGE
  $ quick-strapper COMMAND
...
```
<!-- usagestop -->
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

_See code: [src/commands/create.js](https://github.com/sidwebworks/quick-strapper/blob/v1.0.2/src/commands/create.js)_

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
