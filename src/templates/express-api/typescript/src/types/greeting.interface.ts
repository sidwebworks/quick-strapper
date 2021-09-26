import { Request } from 'express'

export interface IGreeting extends Request {
    name: string
}
