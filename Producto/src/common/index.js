import yenv from 'yenv'
import mongodb from 'mongodb'

const env = yenv()

const initDb = () => {
  return new Promise((res, rej) => {
    const MongoClient = mongodb.MongoClient
    const uri = `mongodb://${env.DB.USER}:${env.DB.PWD}@${env.DB.HOST}:${env.DB.PORT}/admin?retryWrites=true&w=majority`

    const cliente = new MongoClient(uri, {
      useNewUlrParser: true,
      useUnifiedTopology: true,
    })

    cliente.connect(err => {
      if (err) rej(err)
      else {
        const db = cliente.db(env.DB.NAME)

        res(db)
      }
    })
  })
}

export { initDb }