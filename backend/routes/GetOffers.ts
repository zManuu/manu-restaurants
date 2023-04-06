import Offer from '../models/Offer.js'
import { app, db } from '../app.js'
import { ReqType } from '../types.js'
import { IGetOffersBody } from '@mr/SharedTypes.js'

app.get('/offers', async (req: ReqType<IGetOffersBody>, res) => {
    const offers = req.body && req.body.restaurantId
        ? await db.find(Offer, { where: { id: req.body.restaurantId }, relations: ['restaurant'] })
        : await db.find(Offer, { relations: ['restaurant'] })

    res
        .status(200)
        .send(offers)
})