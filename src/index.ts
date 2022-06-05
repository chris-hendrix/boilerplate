import express from 'express'
import { PORT } from './util/config'
import { connectToDatabase } from './util/db'

const app = express()
app.use(express.json())


app.get('/ping', (req, res) => {
  console.log(req.socket.remoteAddress || req.headers['x-forwarded-for'])
  res.send('pong')
})

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

