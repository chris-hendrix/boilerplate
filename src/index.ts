import express from 'express'
import { PORT } from './util/config'
import { connectToDatabase } from './util/db'

const app = express()
app.use(express.json())


app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
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

// eslint-disable-next-line @typescript-eslint/no-floating-promises
start()

