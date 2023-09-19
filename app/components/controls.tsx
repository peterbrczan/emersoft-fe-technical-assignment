import type { FC } from 'react';
import React, { useState } from 'react';
import { Input } from '@/app/components/input';
import { useGetBlog } from '@/app/hooks/use-get-blog';

export const Controls: FC = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const getBlog = useGetBlog({ searchValue });

  return (
    <div>
      <Input handleSearchValue={setSearchValue} isLoading={getBlog.isLoading} />
    </div>
  );
};
