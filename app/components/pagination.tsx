'use client';

import type { FC } from 'react';
import React from 'react';
import { useTranslations } from 'use-intl';

export const Pagination: FC = (props) => {
  const textLabel = useTranslations('Label');

  return (
    <div className="grid grid-cols-2 gap-1">
      <button className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 border border-pink-700 rounded disabled:bg-gray-300 disabled:border-0">
        <p className="text-sm">{textLabel('Previous')}</p>
      </button>
      <button className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 border border-pink-700 rounded disabled:bg-gray-300 disabled:border-0">
        <p className="text-sm">{textLabel('Next')}</p>
      </button>
    </div>
  );
};
