const { Router } = require('express')
const helloController = require('../controllers/example.controller')

const exampleRouter = Router()

exampleRouter.all('/', helloController)

module.exports = exampleRouter
