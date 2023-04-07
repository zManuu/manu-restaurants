import { store } from './main'

declare module 'vue' {
    interface ComponentCustomProperties {
        fetch<T>(httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, body?: unknown): Promise<T>
    }
}

export default {
    async fetch<T>(httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, body: unknown = undefined): Promise<T> {
        store.commit('setFetching', true)
        const res = await fetch(url, {
            method: httpMethod,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        store.commit('setFetching', false)
        return res.json() as unknown as T
    },
}