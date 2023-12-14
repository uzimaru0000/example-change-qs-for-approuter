import { getCategories } from "@/usecase/category/server"
import { SearchOption } from "../_components/SearchOption"
import { Filter } from "@/usecase/product"

type Props = {
    searchParams: Filter
}

const Page: React.FC<Props> = async ({ searchParams }) => {
    const categories = await getCategories()

    return <SearchOption categories={categories} filter={searchParams} />
}

export default Page
