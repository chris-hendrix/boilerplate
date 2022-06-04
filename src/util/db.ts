import { LOCAL_DB } from './config'
import { Sequelize } from 'sequelize'

const { database, username, password, host, port, dialect } = LOCAL_DB
const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: dialect,
  dialectOptions: {}
})

export const connectToDatabase = async () => {
  try {
    console.log(`connecting to db: host=${host}, port=${port}`)
    await sequelize.authenticate()
    // await runMigrations()
    console.log('connected to the database')
  } catch (error) {
    console.log('failed to connect to the database')
    return process.exit(1)
  }

  return null
}



