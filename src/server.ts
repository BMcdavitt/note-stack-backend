import express, { Request, Response } from 'express'
import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port: number = 3001

const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((error: Error) => {
    console.error('Unable to connect to the database:', error)
  })

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Node.js + Express!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
