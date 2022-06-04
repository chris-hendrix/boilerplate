import * as dotenv from 'dotenv'
import { Dialect } from 'sequelize'

dotenv.config({ path: __dirname + '/.env' })

export const PORT = process.env.PORT || 3000

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
  host: 'localhost',
  port: Number(process.env.DB_PORT) || 3001,
  dialect: 'postgres'
}
