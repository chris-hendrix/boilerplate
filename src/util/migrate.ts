import { runMigrations } from './db'

runMigrations().catch(err => console.log(err))