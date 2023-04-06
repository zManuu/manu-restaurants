import { Request } from 'express'

type ReqType<T> = Request<{}, any, T, any, Record<string, any>>

export {
    ReqType
}