import { Router, RequestHandler } from 'express'
import { IGreeting } from 'src/types/greeting.interface'
import { sayHello } from '../controllers/example.controller'

const exampleRouter = Router()

exampleRouter.all<RequestHandler>('/', (req, res) => {
    const { name }: IGreeting = req.body

    const greeting = sayHello(name || 'Developer')
    res.status(200).json({ greeting })
})

export default exampleRouter
