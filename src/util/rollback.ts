import { rollbackMigration } from './db'

rollbackMigration().catch(err => console.log(err))