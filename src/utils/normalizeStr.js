module.exports = (dirName) => {
  return dirName.trim().replace(/ /g, "-").toLowerCase();
};
