import Auth from '@/Auth.js'
import { app, db } from '@/app.js'
import Offer from '@/models/Offer.js'
import { ReqType } from '@/types.js'
import { ICreateOfferBody } from '@shared/SharedTypes.js'

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

    const restaurant = await Auth(req.body.adminKey, req.body.restaurantId)

    if (!restaurant) {
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