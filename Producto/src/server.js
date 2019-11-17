import yenv from 'yenv'
import { initDb } from './common'
import { initServer } from './bin/app'

const env = yenv()
let db

const begin = async () => {
  db = await initDb()

  if (db) {
    await initServer(db)
    console.log(`Server running on port: ${env.PORT}`)
  }
}