const fs = require("fs");
const path = require("path");
const render = require("./renderEjs");
const SKIP_FILES = ["node_modules", ".template.json"];
const createProject = (templatePath, projectName) => {
  const CURRENT_DIR = process.cwd();

  // read all files/folders (1 level) from template folder
  const filesToCreate = fs.readdirSync(templatePath);
  // loop each file/folder
  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    // skip files that should not be copied
    if (SKIP_FILES.indexOf(file) > -1) return;

    if (stats.isFile()) {
      // read file content and transform it using template engine
      let contents = fs.readFileSync(origFilePath, "utf8");
      contents = render(contents, { projectName });
      // write file to destination folder
      const writePath = path.join(CURRENT_DIR, projectName, file);

      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      // create folder in destination folder
      fs.mkdirSync(path.join(CURRENT_DIR, projectName, file));

      // copy files/folder inside current folder recursively
      createProject(
        path.join(templatePath, file),
        path.join(projectName, file)
      );
    }
  });
};

module.exports = createProject;
