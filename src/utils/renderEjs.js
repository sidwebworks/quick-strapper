const ejs = require("ejs");

module.exports = function render(content, data) {
  return ejs.render(content, data);
};
