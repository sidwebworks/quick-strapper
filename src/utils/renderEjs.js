const ejs = require("ejs");

export function render(content, data) {
  return ejs.render(content, data);
}
