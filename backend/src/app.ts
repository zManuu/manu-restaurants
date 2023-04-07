import 'reflect-metadata'
import express from 'express'
import config from './config.js'
import { AppDataSource } from './data-source.js'

await AppDataSource.initialize()

export const db = AppDataSource.manager
export const app = express()

app.use(express.json())

function onReady() {
    console.log(`WebServer running on ${config.WEB_SERVER.PORT}.`)
    import('./routes/index.js')
}

app.listen(config.WEB_SERVER.PORT, config.WEB_SERVER.HOST_NAME, onReady)