import express from 'express'
import pingRouter from './controllers/ping'

const app = express()
app.use(express.json())

app.get('/ping', (req, res) => {
  console.log(req.socket.remoteAddress || req.headers['x-forwarded-for'])
  res.send('pong')
})

app.use('/api/pings', pingRouter)

export default app