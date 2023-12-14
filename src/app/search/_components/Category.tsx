import { str2hsl } from "@/lib/color";
import { Category as CategoryType } from "@/usecase/category";

export type Props = {
  category: CategoryType;
};
export const Category: React.FC<Props> = ({ category }) => {
  return (
    <span
      className="p-1 rounded-full text-sm"
      style={{
        backgroundColor: str2hsl(category.name),
      }}
    >
      {category.name}
    </span>
  );
};
