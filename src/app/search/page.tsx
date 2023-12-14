import { getSearchProducts } from "@/usecase/product/server";
import { Product } from "./_components/Product";
import { Filter } from "@/usecase/product";

type Props = {
    searchParams: Filter
}

const Page: React.FC<Props> = async ({ searchParams }) => {
  const result = await getSearchProducts(searchParams);
  console.log(result);

  return (
    <div className="grid grid-cols-5 gap-4">
      {result.map((x) => {
        return <Product key={x.id} product={x} />;
      })}
    </div>
  );
};

export default Page;
