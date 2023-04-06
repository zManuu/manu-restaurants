import { ReqType } from '../types.js'
import { app, db } from '../app.js'
import { ICreateRestaurantBody } from '@mr/SharedTypes.js'
import Restaurant from '../models/Restaurant.js'
import { v4 } from 'uuid'

app.post('/restaurant', async (req: ReqType<ICreateRestaurantBody>, res) => {   
    if (!req.body
        || !req.body.name) {
        res
            .status(400)
            .send('No name specified.')
        return
    }
        
    const restaurant = new Restaurant()
    restaurant.name = req.body.name
    restaurant.description = req.body.description
    restaurant.logoUrl = req.body.logoUrl
    restaurant.offers = []
    restaurant.adminKey = v4()
    
    await db.insert(Restaurant, restaurant)

    res
        .status(201)
        .send(restaurant)
})