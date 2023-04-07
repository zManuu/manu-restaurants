interface ICreateRestaurantBody {
    name: string
    description?: string
    logoUrl?: string
}

interface IGetOffersBody {
    restaurantId?: number
}

interface ICreateOfferBody {
    name: string
    description: string
    restaurantId: number
    previewUrls: string[]
    adminKey: string
}

interface ILoginBody {
    adminKey: string
    restaurantId: number
}

export {
    ICreateRestaurantBody,
    IGetOffersBody,
    ICreateOfferBody,
    ILoginBody,
}