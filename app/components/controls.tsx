import type { FC } from 'react';
import React, { useState } from 'react';
import { Input } from '@/app/components/input';
import { useGetBlog } from '@/app/hooks/use-get-blog';
import { Pagination } from '@/app/components/pagination';

export const Controls: FC = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const getBlog = useGetBlog({ searchValue, pageNumber });

  function handleSearchValue(searchValue: string) {
    // Resetting the page number
    setPageNumber(1);
    setSearchValue(searchValue);
  }

  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 items-center justify-between">
      <Input handleSearchValue={handleSearchValue} isLoading={getBlog.isLoading} />
      <Pagination
        pageNumber={pageNumber}
        numberOfTotalPages={getBlog.data?.numberOfTotalPages ?? 0}
        handlePageNumber={setPageNumber}
      />
    </div>
  );
};
