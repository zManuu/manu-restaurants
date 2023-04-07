import { app, db } from 'backend/app.js'
import Restaurant from 'models/Restaurant.js'
import { ReqType } from 'backend/types.js'
import { ICreateRestaurantBody } from 'shared/SharedTypes.js'
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