import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { Input } from '@/app/components/input';
import { useGetBlog } from '@/app/hooks/use-get-blog';
import { Pagination } from '@/app/components/pagination';
import { CategoryCheckboxes } from '@/app/components/category-checkboxes';
import { Category } from '@/app/models/types/category';

export const Controls: FC = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [categorySlugs, setCategorySlugs] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const getBlog = useGetBlog({ searchValue, pageNumber, categorySlugs });

  useEffect(() => {
    if (getBlog.isFetched) {
      setCategories(getBlog.data?.blog.categories ?? []);
    }
  }, [getBlog.data, getBlog.isFetched]);

  function handleSearchValue(searchValue: string) {
    // Resetting the page number
    setPageNumber(1);
    setSearchValue(searchValue);
  }

  function handleCategorySlugs(categorySlugs: string[]) {
    // Resetting the page number
    setPageNumber(1);
    setCategorySlugs(categorySlugs);
  }

  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 items-center justify-between">
      <Input handleSearchValue={handleSearchValue} />
      <Pagination
        pageNumber={pageNumber}
        numberOfTotalPages={getBlog.data?.numberOfTotalPages ?? 0}
        handlePageNumber={setPageNumber}
      />
      <CategoryCheckboxes categories={categories} handleCategorySlugs={handleCategorySlugs} />
    </div>
  );
};
