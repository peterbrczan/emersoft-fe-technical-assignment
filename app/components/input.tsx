'use client';

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'use-intl';
import { useDebounce } from 'use-debounce';

export type InputProps = {
  handleSearchValue: (value: string) => void;
};

export const Input: FC<InputProps> = (props) => {
  const [value, setValue] = useState('');
  const [searchValue] = useDebounce(value, 500);

  useEffect(() => {
    props.handleSearchValue(searchValue);
  }, [searchValue]);

  const textCommon = useTranslations('Common');

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        className="block w-full p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-[4px] bg-gray-100 "
        placeholder={textCommon('Search by a title')}
        onChange={({ currentTarget: { value } }) => setValue(value)}
        data-testid="search-input"
      />
    </div>
  );
};
