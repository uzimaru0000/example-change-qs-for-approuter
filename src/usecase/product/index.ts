import { sleep } from "@/lib/timer"

export const BASE = 'https://api.escuelajs.co'

export type Product = {
    "id": number
    "title": string
    "price": number
    "description": string,
    "images": string[],
    "creationAt": string
    "updatedAt": string
    "category": {
        "id": number,
        "name": string,
        "image": string
        "creationAt": string,
        "updatedAt": string
    }
}

export type Filter = {
    price_max?: string 
    title?: string
    categoryId?: string
}

export const filterToQuery = (searchParams: URLSearchParams, filter: Filter) => {
    const filterEntries = Object.entries(filter).filter(([, value]) => value !== undefined).map(([key, value]) => {
        return [key, value.toString()]
    })
    for (const [key, value] of filterEntries) {
        searchParams.append(key, value)
    }

    return searchParams
}

export const fetchSearchProducts = async (filter: Filter) => {
    const url = new URL('/api/v1/products', BASE)
    filterToQuery(url.searchParams, filter)
    url.searchParams.append('price_min', '1')

    /**
     * なにか重い処理があると仮定して、1秒待つ
     */
    await sleep(1000)

    const response = await fetch(url.toString())
    const data = await response.json()
    return data as Product[]
}
