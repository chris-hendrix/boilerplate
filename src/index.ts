import app from './app'
import { port, serverInfo } from './config'
import { connectToDatabase } from './db'
import logger from './utils/logger'

export const start = async () => {
  try {
    await connectToDatabase()
    app.listen(port, () => {
      logger.info(`Server running: ${serverInfo}`)
    })
  } catch (error) {
    logger.error(error)
  }
}

start().catch(error => logger.error(error))