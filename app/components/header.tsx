'use client';

import type { FC } from 'react';
import React from 'react';
import { useTranslations } from 'use-intl';
import { LanguageSelector } from '@/app/components/language-selector';

export const Header: FC = () => {
  const textCommon = useTranslations('Common');

  return (
    <div className="border-b-2 border-gray-100 min-h-[80px] grid grid-cols-[1fr_auto] justify-between p-4 gap-[4px]">
      <div className="self-center flex flex-wrap gap-2 items-center">
        <h1 className="text-2xl font-extrabold">Emersoft</h1>
        <div className="w-[8px] h-[8px] rounded-full bg-pink-700"></div>
        <p>{textCommon('Frontend Technical Assignment')}</p>
      </div>
      <div className="justify-self-end self-center">
        <LanguageSelector />
      </div>
    </div>
  );
};
