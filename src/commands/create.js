const { Command, flags } = require("@oclif/command");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const createProject = require("../utils/createProject");
const isEmpty  = require("../utils/isEmpty");
const normalizeStr = require("../utils/normalizeStr");
const Listr = require("listr");
const intializeGit = require("../utils/intializeGit");
const { projectInstall } = require("pkg-install");
const figlet = require("figlet");
const chalk = require("chalk");

class CreateCommand extends Command {
  static description = "Start `quick-strapper` CLI";

  static examples = [`$ quick-strapper create <project name>`];

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    git: flags.boolean({
      char: "g",
      description: "Initialize a git repository",
    }),
    typescript: flags.boolean({
      char: "t",
      description: "Setup Typescript",
    }),
    install: flags.boolean({
      char: "i",
      description: "Install dependencies",
    }),
  };

  static args = [{ name: "name" }];

  async run() {
    this.log(
      chalk.cyan(
        figlet.textSync("QUICK STRAPPER", { horizontalLayout: "full" })
      )
    );

    const { flags, args } = this.parse(CreateCommand);

    const userFlags = Object.keys(flags).filter((el) => flags[el] === true);

    const TEMPLATES = fs.readdirSync(path.join(__dirname, "../", "templates"));

    let baseQuestions = [
      {
        name: "template",
        type: "list",
        message: "What project template would you like to use?",
        choices: TEMPLATES,
      },
      {
        name: "typescript",
        type: "confirm",
        message: "Do you want to setup typescript?",
        default: "n",
      },
      {
        name: "git",
        type: "confirm",
        message: "Do you want to intialize a Git repository?",
        default: "yes",
      },
      {
        name: "install",
        type: "confirm",
        message: "Do you want me to pre-install dependencies?",
        default: "yes",
      },
      {
        name: "pkg",
        type: "list",
        message: "Which package manager you would like to use?",
        choices: ["npm", "yarn"],
        default: "npm",
        when: (prev) => {
          return prev.install === true;
        },
      },
    ];

    let projectName = args.name ? normalizeStr(args.name) : args.name;

    if (projectName && /.|.\/|..\//g.test(projectName)) {
      const targetPath = path.join(process.cwd(), projectName);

      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath);
      }

      if (isEmpty(targetPath)) {
        this.error(
          `${chalk.bold.redBright(
            `Given target directory is not empty.`
          )}\nPlease delete ${chalk.bold.cyanBright(
            `"${path.basename(targetPath)}"`
          )} or create a new directory.`
        );
      }
    } else if (!projectName) {
      const { name } = await inquirer.prompt({
        name: "name",
        type: "input",
        message: "Project name?",
        validate: (inp) =>
          inp.trim().length > 0 ? true : "Please give a project name",
      });

      projectName = normalizeStr(name);

      const targetPath = path.join(process.cwd(), projectName);

      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath);
      }
    }

    const targetPath = path.join(process.cwd(), projectName);

    const questions = baseQuestions.filter(
      (el) => !userFlags.includes(el.name)
    );

    try {
      const answers = await inquirer.prompt(questions);

      const addTypescript = flags.typescript ? true : answers.typescript;
      const addGit = flags.git ? true : answers.git;

      const templatePath = path.resolve(
        __dirname,
        "../templates",
        answers.template,
        addTypescript ? "typescript" : "javascript"
      );

      const tasks = new Listr([
        {
          title: "Generating template files...",
          task: () => createProject(templatePath, projectName),
        },
        {
          title: "Intializing Git",
          task: () => intializeGit(targetPath),
          enabled: () => addGit,
        },
        {
          title: "Installing dependencies",
          task: () =>
            projectInstall({
              cwd: targetPath,
              prefer: answers.pkg,
            }),
          enabled: () => answers.install,
        },
      ]);

      await tasks.run();

      this.log(
        chalk.greenBright.bold(
          `\nTo start, cd into \`${chalk.cyanBright.bold(projectName)}\` `
        )
      );

      this.log(
        chalk.cyan(figlet.textSync("Thank you!", { horizontalLayout: "full" }))
      );
    } catch (err) {
      this.log(
        chalk.red(figlet.textSync("Error ", { horizontalLayout: "full" }))
      );
      this.error(err.message);
    }
  }
}

module.exports = CreateCommand;
