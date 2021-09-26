quick-strap
===========

A Zero-config cli to help you bootstrap web projects

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/quick-strap.svg)](https://npmjs.org/package/quick-strap)
[![Downloads/week](https://img.shields.io/npm/dw/quick-strap.svg)](https://npmjs.org/package/quick-strap)
[![License](https://img.shields.io/npm/l/quick-strap.svg)](https://github.com/Documents/quick-strap/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @sidwebworks/quick-strap
$ quick-strap COMMAND
running command...
$ quick-strap (-v|--version|version)
@sidwebworks/quick-strap/0.0.4 linux-x64 node-v14.17.6
$ quick-strap --help [COMMAND]
USAGE
  $ quick-strap COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`quick-strap create [NAME]`](#quick-strap-create-name)
* [`quick-strap help [COMMAND]`](#quick-strap-help-command)

## `quick-strap create [NAME]`

Start `quick-strap` CLI

```
USAGE
  $ quick-strap create [NAME]

OPTIONS
  -g, --git         Initialize a git repository
  -h, --help        show CLI help
  -i, --install     Install dependencies
  -t, --typescript  Setup Typescript

EXAMPLE
  $ quick-strap create <project name>
```

_See code: [src/commands/create.js](https://github.com/Documents/quick-strap/blob/v0.0.4/src/commands/create.js)_

## `quick-strap help [COMMAND]`

display help for quick-strap

```
USAGE
  $ quick-strap help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
