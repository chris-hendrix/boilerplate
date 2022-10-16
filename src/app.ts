import express from 'express'
import pingRouter from './controllers/ping'
import addressRouter from './controllers/address'

const app = express()
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.use('/api/pings', pingRouter)
app.use('/api/addresses', addressRouter)

export default app