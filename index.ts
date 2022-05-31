import express from 'express'
const app = express()
app.use(express.json())

import 'dotenv/config'

const PORT = process.env.PORT

app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})