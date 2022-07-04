import app from './app'
import { port, nodeEnv } from './config'
import { connectToDatabase } from './db'

export const start = async () => {
  try {
    await connectToDatabase()
    app.listen(port, () => {
      console.log(`${nodeEnv} server running on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start().catch(error => console.log(error))