import * as dotenv from 'dotenv'
import { Dialect } from 'sequelize'

dotenv.config({ path: __dirname + '/.env' })

export const NODE_ENV = process.env.NODE_ENV

export const PORT = Number(process.env.PORT || 3001)

export const DB_ENABLE_SSL = Boolean(process.env.DB_ENABLE_SSL)

type PostgresDb = {
  database: string,
  username: string,
  password: string,
  host: string,
  port: number,
  dialect: Dialect
}

const LOCAL_DB: PostgresDb = {
  database: 'postgres',
  username: 'postgres',
  password: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  dialect: 'postgres'
}

const TEST_DB: PostgresDb = {
  database: 'testgres',
  username: 'testgres',
  password: 'testgres',
  host: process.env.DB_HOST || 'localhost',
  port: 5431,
  dialect: 'postgres'
}

export const getDb = (): PostgresDb => {
  if (NODE_ENV === 'test') return TEST_DB
  return LOCAL_DB
}

export const getPort = () => {
  if (NODE_ENV === 'test') return PORT - 1
  return PORT
}
