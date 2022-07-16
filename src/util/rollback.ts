import { rollbackMigration } from '../db'
import logger from './logger'

rollbackMigration().catch(error => logger.error(error))