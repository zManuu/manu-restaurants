import { ILoginBody } from '@shared/SharedTypes.js'
import { ReqType } from '@/types.js'
import { app } from '@/app.js'
import Auth from '@/Auth.js'

app.get('/login', async (req: ReqType<ILoginBody>, res) => {
    if (!req.body
        || !req.body.adminKey
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

    res
        .status(200)
        .send('auth successfull.')
})