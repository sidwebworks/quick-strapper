const fs = require("fs");

module.exports = alreadyExists = (dirName) => {
  if (fs.existsSync(dirName)) {
    return true;
  }
  return false;
};
