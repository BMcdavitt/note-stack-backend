import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { routes } from './routes'

dotenv.config()

const app = express()
const port: number = 3001

app.use(express.json())

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Node.js + Express!')
})

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
