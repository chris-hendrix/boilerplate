import * as dotenv from 'dotenv'
import { Dialect } from 'sequelize'

dotenv.config({ path: __dirname + '/.env' })

const NODE_ENV = process.env.NODE_ENV
const PORT = Number(process.env.PORT || 3001)
const DB_PORT = Number(process.env.DB_PORT || 5432)
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_ENABLE_SSL = Boolean(process.env.DB_ENABLE_SSL)

type PostgresDb = {
  database: string,
  username: string,
  password: string,
  host: string,
  port: number,
  dialect: Dialect,
  enableSsl: boolean
}

export const port = PORT

export const nodeEnv = NODE_ENV

export const db: PostgresDb = {
  database: 'postgres',
  username: 'postgres',
  password: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  enableSsl: DB_ENABLE_SSL
}

export const dbInfo = `nodeEnv=${nodeEnv}, dbPort=${db.port}, dbHost=${db.host}`
export const serverInfo = `nodeEnv=${nodeEnv}, port=${port}`

