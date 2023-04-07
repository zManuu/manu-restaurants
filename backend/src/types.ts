import { Request } from 'express'

export type ReqType<T> = Request<{}, any, T, any, Record<string, any>>