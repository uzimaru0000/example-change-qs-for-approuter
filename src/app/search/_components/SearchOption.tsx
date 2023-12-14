"use client";

import { Category as CategoryType } from "@/usecase/category";
import Link from "next/link";
import { Category } from "./Category";
import { Filter, filterToQuery } from "@/usecase/product";
import { useMemo } from "react";
import debounce from "lodash-es/debounce";
import { useRouter } from "next/navigation";

export type Props = {
  filter: Filter;
  categories: CategoryType[];
};

export const SearchOption: React.FC<Props> = ({ filter, categories }) => {
  const route = useRouter();
  const handleChangeTitle = useMemo(() => {
    return debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const title = e.target.value;
      route.push(
        `/search?${filterToQuery(new URLSearchParams(), { ...filter, title })}`
      );
    }, 500);
  }, [filter, route]);
  const handleChangePrice = useMemo(() => {
    return debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const price_max = e.target.value;
      route.push(
        `/search?${filterToQuery(new URLSearchParams(), {
          ...filter,
          price_max,
        })}`
      );
    }, 500);
  }, [filter, route]);

  return (
    <div className="flex flex-col space-y-2">
      <label className="flex flex-row space-x-1">
        <span>Title: </span>
        <input
          className="border rounded-md"
          defaultValue={filter.title}
          onChange={handleChangeTitle}
        />
      </label>
      <label className="flex flex-row space-x-1">
        <span>Max Price: </span>
        <input
          type="range"
          min="0"
          max="10000"
          defaultValue={filter.price_max ?? 0}
          onChange={handleChangePrice}
        />
      </label>
      <ul className="flex flex-row space-x-1">
        {categories.map((x) => {
          const isCheck = filter.categoryId === x.id.toString();

          return (
            <li key={x.id}>
              <Link
                href={
                  !isCheck
                    ? `/search?${filterToQuery(new URLSearchParams(), {
                        ...filter,
                        categoryId: x.id.toString(),
                      })}`
                    : `/search?${filterToQuery(new URLSearchParams(), {
                        ...filter,
                        categoryId: undefined,
                      })}`
                }
              >
                {isCheck ? (
                  <Category category={x} />
                ) : (
                  <span className="p-1 rounded-full text-sm border">
                    {x.name}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
