import { DataSource } from 'typeorm'
import Restaurant from './models/Restaurant.js'
import config from './config.js'
import Offer from './models/Offer.js'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: config.DB.HOST,
    port: config.DB.PORT,
    username: config.DB.USER,
    password: config.DB.PASSWORD,
    database: config.DB.DB,
    synchronize: true,
    logging: config.DB.LOGGING,
    entities: [ Restaurant, Offer ],
    subscribers: [],
    migrations: []
})