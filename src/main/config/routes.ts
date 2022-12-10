import { Express, Router, Request, Response } from 'express'

export default (app: Express): void => {
  const router = Router()
  app.get('/auth', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Soon' })
  })
  app.use(router)
}
