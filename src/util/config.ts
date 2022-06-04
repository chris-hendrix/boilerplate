import * as dotenv from 'dotenv'
import { Dialect } from 'sequelize'

dotenv.config({ path: __dirname + '/.env' })

export const PORT = process.env.PORT || 3001

export const DB_ENABLE_SSL = process.env.DB_PORT

export const LOCAL_DB: {
  database: string,
  username: string,
  password: string,
  host: string,
  port: number,
  dialect: Dialect
} = {
  database: 'postgres',
  username: 'postgres',
  password: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  dialect: 'postgres'
}
