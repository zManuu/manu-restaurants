import { app, db } from 'backend/app.js'
import Offer from 'models/Offer.js'
import { ReqType } from 'backend/types.js'
import { IGetOffersBody } from 'shared/SharedTypes.js'

app.get('/offers', async (req: ReqType<IGetOffersBody>, res) => {
    const offers = req.body && req.body.restaurantId
        ? await db.find(Offer, { where: { id: req.body.restaurantId }, relations: ['restaurant'] })
        : await db.find(Offer, { relations: ['restaurant'] })

    res
        .status(200)
        .send(offers)
})