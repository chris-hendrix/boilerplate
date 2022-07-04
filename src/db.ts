import { db } from './util/config'
import { Sequelize } from 'sequelize-typescript'
import { Umzug, SequelizeStorage } from 'umzug'

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
    console.log(`connecting to db: host=${host}, port=${port}`)
    await sequelize.authenticate()
    await runMigrations()
    console.log('connected to the database')
  } catch (error) {
    console.log({ error })
    console.log('failed to connect to the database')
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
  logger: console,
}

export const runMigrations = async () => {
  const migrator = new Umzug(migrationConf)
  const migrations = await migrator.up()
  console.log('Migrations up to date', {
    files: migrations.map((mig) => mig.name),
  })
}

export const rollbackMigration = async () => {
  await sequelize.authenticate()
  const migrator = new Umzug(migrationConf)
  await migrator.down()
}



