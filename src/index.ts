import app from './app'
import { nodeEnv, port, serverInfo } from './config'
import { connectToDatabase } from './db'
import logger from './util/logger'

export const start = async () => {
  try {
    await connectToDatabase()
    nodeEnv !== 'test' && app.listen(port, () => {
      logger.info(`Server running: ${serverInfo}`)
    })
  } catch (error) {
    logger.error(error)
  }
}

start().catch(error => logger.error(error))