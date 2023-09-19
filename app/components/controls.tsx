import type { FC } from 'react';
import React, { useState } from 'react';
import { Input } from '@/app/components/input';

export const Controls: FC = (props) => {
  const [searchValue, setSearchValue] = useState('');

  console.log('%c [controls.tsx:8] searchValue ', 'background: #011c22; color: #62ffc5', searchValue);

  return (
    <div>
      <Input handleSearchValue={setSearchValue} />
    </div>
  );
};
