import { RequestHandler } from 'express'
import { Router } from 'express'
import helloController from '../controllers/example.controller'

const exampleRouter = Router()

exampleRouter.all('/', helloController)

export default exampleRouter
