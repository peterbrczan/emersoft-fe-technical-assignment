import type { FC } from 'react';
import React, { useState } from 'react';
import { Input } from '@/app/components/input';
import { useGetBlog } from '@/app/hooks/use-get-blog';
import { Pagination } from '@/app/components/pagination';

export const Controls: FC = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const getBlog = useGetBlog({ searchValue });

  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 items-center justify-between">
      <Input handleSearchValue={setSearchValue} isLoading={getBlog.isLoading} />
      <Pagination />
    </div>
  );
};
