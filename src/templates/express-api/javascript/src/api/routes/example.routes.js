const { Router } = require("express");
const ExampleController = require("../controllers/example.controller");

const exampleRouter = Router();

exampleRouter.post("/", (req, res) => {
  const greeting = ExampleController.sayHello(req.name || "Developer");
  res.status(200).json({ greeting });
});

module.exports = exampleRouter;
