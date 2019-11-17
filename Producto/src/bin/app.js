import yenv from 'yenv'
import express from 'express'
import http from 'http'
import helmet from 'helmet'
import cors from 'cors'
import * as bodyParser from 'body-parser'
import { routes } from '../routes'
import { rejects } from 'assert'


const env = yenv()
const app = express()

const initServer = db => {
  return new Promise((res, rej) => {
    const httpServer = http.createServer(app)

    app.use(helmet())
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use(routes(db))

    httpServer
      .listen(env.PORT)
      .on('listening', () => res())
      .on('error', error => rejects(error))
  })
}

export { initServer }