import { NextFunction, Response } from 'express'

/**
 * A middleware to handle async errors
 */
const catchAsync =
    (fn: any) => (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(next)
    }

export default catchAsync
