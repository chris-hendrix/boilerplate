import express from 'express'
import { getPort } from './util/config'
import { connectToDatabase } from './db'
import pingRouter from './controllers/ping'

const app = express()
app.use(express.json())

app.use('/pings', pingRouter)

export const start = async () => {
  try {
    await connectToDatabase()
    app.listen(getPort(), () => {
      console.log(`Server running on port ${getPort()}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start().catch(err => console.log(err))

export default app