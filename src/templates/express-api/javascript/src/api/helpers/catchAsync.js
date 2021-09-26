/**
 * A middleware to handle async errors
 */
module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};
