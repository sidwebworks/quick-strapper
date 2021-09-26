import cors from 'cors'
import express, { Application } from 'express'
import morgan from 'morgan'

const loader = (app: Application) => {
    app.get('/status', (_, res) => {
        res.status(200).end()
    })
    app.head('/status', (_, res) => {
        res.status(200).end()
    })
    app.enable('trust proxy')

    app.use(cors())

    if (process.env['NODE_ENV'] !== 'production') {
        app.use(morgan('dev'))
    }

    app.use(express.json())

    app.use(express.urlencoded({ extended: false }))

    app.use((_, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        )
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, PATCH, DELETE'
        )
        next()
    })

    // ...More middlewares

    // Return the express app
    return app
}

export default loader
