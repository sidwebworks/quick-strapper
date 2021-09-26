const chalk = require("chalk");
const execa = require("execa");

module.exports = async (targetPath) => {
  const result = await execa("git", ["init"], { cwd: targetPath });
  if (result.failed) {
    console.log(chalk.redBright.bold("Failed to initialize a git repository."));
  }
};
