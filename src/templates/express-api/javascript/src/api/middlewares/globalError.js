/**
 * Show full errors during development using
 * ?`handleDevError` function
 */
const handleDevError = (err, res) => {
  console.error("Error: ", err.message);

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    trace: err.stack,
  });
};

/**
 *  Hide error details during production using
 * ?`handleProdError` function
 */
const handleProdError = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  res.status(500).json({
    status: "error",
    message: "Ahh something went very wrong!",
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    handleDevError(err, res);
  } else if (process.env.NODE_ENV === "production") {
    const error = { message: err.message, ...err };

    handleProdError(error, res);
  }
};
