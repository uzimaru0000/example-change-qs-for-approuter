import { str2hsl } from "@/lib/color";
import { Product as ProductType } from "@/usecase/product";
import { Category } from "./Category";

type Props = {
  product: ProductType;
};

export const Product: React.FC<Props> = ({ product }) => {
  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-2xl">{product.title}</h2>
      <div className="text-xl text-slate-500 text-ellipsis line-clamp-1">
        {product.description}
      </div>
      <p className="text-lg">${product.price.toLocaleString()}</p>
      <Category category={product.category} />
    </div>
  );
};
