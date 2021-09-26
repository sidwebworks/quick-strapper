const fs = require("fs");

module.exports = isEmpty = (dirName) => {
  if (fs.readdirSync(dirName).length === 0) {
    return false;
  }
  return true;
};
