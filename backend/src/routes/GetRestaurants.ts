import { app, db } from '@/app.js'
import Restaurant from '@/models/Restaurant.js'

app.get('/restaurants', async (req, res) => {
    const restaurants = await db.find(Restaurant)
    res
        .status(200)
        .send({ restaurants })
})