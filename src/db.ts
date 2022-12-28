import { db, dbInfo } from './config'
import { Sequelize } from 'sequelize-typescript'
import { Umzug, SequelizeStorage } from 'umzug'
import logger from './utils/logger'

const { database, username, password, host, port, dialect, enableSsl } = db
export const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  ssl: false,
  dialectOptions: {
    ssl: enableSsl && { require: false, rejectUnauthorized: false }
  },
  models: [__dirname + '/models']
})

export const connectToDatabase = async () => {
  try {
    logger.info(`connecting to db: ${dbInfo}`)
    await sequelize.authenticate()
    await runMigrations()
    logger.info(`successfully connected to db: ${dbInfo}`)
  } catch (error) {
    logger.error(`failed to connect to the database ${dbInfo}`)
    logger.error(error)
    return process.exit(1)
  }
  return null
}

const migrationConf = {
  migrations: {
    glob: 'src/migrations/*.ts',
  },
  storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
  context: sequelize.getQueryInterface(),
  logger,
}

export const runMigrations = async () => {
  const migrator = new Umzug(migrationConf)
  const migrations = await migrator.up()
  logger.info('Migrations up to date', {
    files: migrations.map((mig) => mig.name),
  })
}

export const rollbackMigration = async () => {
  await sequelize.authenticate()
  const migrator = new Umzug(migrationConf)
  await migrator.down()
}



