import express from 'express'
import { port } from './util/config'
import { connectToDatabase } from './db'
import pingRouter from './controllers/ping'

const app = express()
app.use(express.json())

app.use('/api/pings', pingRouter)

export const start = async () => {
  try {
    await connectToDatabase()
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start().catch(err => console.log(err))

export default app