import { runMigrations } from '../db'
import logger from './logger'

runMigrations().catch(error => logger.error(error))