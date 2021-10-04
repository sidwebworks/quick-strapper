const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const loader = (app) => {
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });
  app.enable("trust proxy");

  app.use(cors());

  if (process.NODE_ENV !== "production") {
    app.use(morgan("dev"));
  }

  app.use(express.json());

  app.use(express.urlencoded({ extended: false }));

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
  });

  // ...More middlewares

  // Return the express app
  return app;
};

module.exports = loader;
