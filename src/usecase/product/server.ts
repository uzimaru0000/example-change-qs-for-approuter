import { Filter, fetchSearchProducts } from "."

export const getSearchProducts = async (filter: Filter) => {
    return fetchSearchProducts(filter)
}
