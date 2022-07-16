import express from 'express'
import pingRouter from './controllers/ping'

const app = express()
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.use('/api/pings', pingRouter)

export default app