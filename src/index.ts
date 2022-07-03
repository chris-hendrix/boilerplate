import express from 'express'
import { PORT } from './util/config'
import { connectToDatabase } from './db'

import pingRouter from './controllers/ping'

const app = express()
app.use(express.json())


app.get('/ping', (req, res) => {
  console.log(req.socket.remoteAddress || req.headers['x-forwarded-for'])
  res.send('pong')
})

app.use('/pings', pingRouter)

const start = async () => {
  try {
    await connectToDatabase()
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }

}

start().catch(err => console.log(err))

