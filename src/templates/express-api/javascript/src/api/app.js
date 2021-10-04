const express = require('express')
const App = require('../config/loaders/express.loader')(express())
const exampleRouter = require('./routes/example.routes')
const AppError = require('./helpers/appError')

App.use('/', exampleRouter)

/**
 * Capture unhandled Routes
 */
App.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404))
})

module.exports = App
