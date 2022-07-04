import app from './app'

app.get('/ping', (req, res) => {
  console.log(req.socket.remoteAddress || req.headers['x-forwarded-for'])
  res.send('pong')
})
