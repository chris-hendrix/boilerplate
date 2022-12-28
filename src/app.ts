import express, { Request } from 'express'
import cors from 'cors'
import { nodeEnv } from './config'
import pingRouter from './controllers/ping'
import addressRouter from './controllers/address'

const app = express()
app.use(cors<Request>())
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.use('/api/pings', pingRouter)
app.use('/api/addresses', addressRouter)

if (nodeEnv === 'production') app.use(express.static('client/build'))

export default app