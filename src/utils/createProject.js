const fs = require("fs-extra");
const path = require("path");
const render = require("./renderEjs");
const SKIP_FILES = ["node_modules", "git-template"];

const createProject = (templatePath, projectName) => {
  const CURRENT_DIR = process.cwd();

  // read all files/folders (1 level) from template folder
  const filesToCreate = fs.readdirSync(templatePath);
  // loop each file/folder

  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file);

    // skip files that should not be copied
    // Create a .gitignore file from template
    if (file.includes("git-template")) {
      const ignorefile = fs.readFileSync(origFilePath, "utf-8");

      return fs.writeFileSync(
        path.join(CURRENT_DIR, projectName, ".gitignore"),
        ignorefile,
        "utf-8"
      );

    } else if (SKIP_FILES.indexOf(file) > -1) {
      return;
    }

    const writePath = path.join(CURRENT_DIR, projectName, file);
    if (origFilePath.includes("package.json")) {
      console.log("origFilePath: ", origFilePath);

      let contents = fs.readFileSync(origFilePath, "utf8");

      contents = render(contents, { projectName });

      fs.writeFileSync(writePath, contents, "utf8");
    } else {
      fs.copy(origFilePath, writePath, (err) => {
        if (err) return;
      }); // copies directory, even if it has subdirectories or files
    }
  });
};

module.exports = createProject;
