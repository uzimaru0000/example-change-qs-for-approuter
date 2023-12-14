import { getSearchProducts } from "@/usecase/product/server";
import { Product } from "./_components/Product";
import { Filter } from "@/usecase/product";
import { Suspense } from "react";
import Loading from "./loading";

type Props = {
  searchParams: Filter;
};

const Page: React.FC<Props> = async ({ searchParams }) => {
  return (
    <Suspense key={JSON.stringify(searchParams)} fallback={<Loading />}>
      <Wrapper searchParams={searchParams} />
    </Suspense>
  );
};

const Wrapper: React.FC<Props> = async ({ searchParams }) => {
  const result = await getSearchProducts(searchParams);

  return (
    <div className="grid grid-cols-5 gap-4">
      {result.map((x) => {
        return <Product key={x.id} product={x} />;
      })}
    </div>
  );
};

export default Page;
