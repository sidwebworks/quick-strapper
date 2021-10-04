import AppError from '../helpers/appError'
import catchAsync from '../helpers/catchAsync'
import ExampleService from '../services/example.service'
import { NextFunction, Request, Response } from 'express'

const helloController = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { name } = req.body

        if (!name) {
            return next(
                new AppError('Please Provide a name in POST request', 401)
            )
        }

        const greeting = await ExampleService.sayHello(name || 'Developer')

        res.status(200).json(greeting)
    }
)

export default helloController
