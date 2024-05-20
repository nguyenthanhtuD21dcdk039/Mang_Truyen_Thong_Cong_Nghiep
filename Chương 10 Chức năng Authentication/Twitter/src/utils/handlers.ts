import express, {Request, Response, NextFunction} from 'express'
type Func = (req: Request, res: Response, next: NextFunction) => Promise<void>

export const wrapRequestHandler = (func: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Promise.resolve(func(req, res, next)).catch(next)
    try {
      await func(req,res,next)
    } catch (error) {
      next(error)
    }
  }
}