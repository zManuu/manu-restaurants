import { db } from './app.js'
import Restaurant from './models/Restaurant.js'

/**
 * @param adminKey the adminKey given by the user
 * @param restaurantId the id of the restaurant the user is trying to log into
 * @returns undefined, if the restaurant wasn't found or the adminKey doesn't match.
 */
export default async function(adminKey: string, restaurantId: number): Promise<Restaurant | undefined> {
    const restaurant = await db.findOneBy(Restaurant, { id: restaurantId })

    return restaurant && restaurant.adminKey == adminKey
        ? restaurant
        : undefined
}