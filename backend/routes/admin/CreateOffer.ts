import Offer from '../../models/Offer.js'
import { app, db } from '../../app.js'
import { ReqType } from '../../types.js'
import { ICreateOfferBody } from '@mr/SharedTypes.js'
import Restaurant from '../../models/Restaurant.js'

app.post('/offer', async (req: ReqType<ICreateOfferBody>, res) => {
    if (!req.body
        || !req.body.name
        || !req.body.description
        || !req.body.restaurantId) {
        res
            .status(400)
            .send('Missing Params.')
        return
    }

    const restaurant = await db.findOneBy(Restaurant, { id: req.body.restaurantId })

    if (!restaurant
        || restaurant.adminKey != req.body.adminKey) {
        res
            .status(401)
            .send('Restaurant not found or wrong adminkey.')
        return
    }

    const offer = new Offer()

    offer.name = req.body.name
    offer.description = req.body.description
    offer.previewUrls = req.body.previewUrls
    offer.restaurant = restaurant

    await db.insert(Offer, offer)

    res
        .status(200)
        .send(offer)
})