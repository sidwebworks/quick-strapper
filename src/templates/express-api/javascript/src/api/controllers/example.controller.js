const AppError = require('../helpers/appError')
const catchAsync = require('../helpers/catchAsync')
const ExampleService = require('../services/example.service')

const helloController = catchAsync(async (req, res, next) => {
    const { name } = req.body

    if (!name) {
        return next(new AppError('Please Provide a name in POST request', 401))
    }

    const greeting = await ExampleService.sayHello(name || 'Developer')

    return res.status(200).json(greeting)
})

module.exports = helloController
