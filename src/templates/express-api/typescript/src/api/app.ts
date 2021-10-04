import express, { RequestHandler } from 'express'
import Init from '../config/loaders/express.loader'
import exampleRouter from './routes/example.routes'
import AppError from './helpers/appError'

const App = Init(express())

App.use('/', exampleRouter)

/**
 * Capture unhandled Routes
 */
App.all<RequestHandler>('*', (req, _, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404))
})

export default App
