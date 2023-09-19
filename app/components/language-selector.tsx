'use client';

import type { FC } from 'react';
import React, { useMemo } from 'react';
import { useLocale } from 'use-intl';
import { Locale } from '@/app/models/enums/locale';
import Link from 'next/link';

export const LanguageSelector: FC = () => {
  const locale = useLocale() as Locale;

  const flag = useMemo(() => {
    switch (locale) {
      case Locale.HU: {
        return { src: 'https://flagcdn.com/w40/hu.png', alt: 'Hungarian Flag' };
      }
      case Locale.EN:
      default: {
        return {
          src: 'https://flagcdn.com/w40/gb.png',
          alt: 'Great Britain flag',
        };
      }
    }
  }, [locale]);

  function getNextHref(locale: Locale) {
    return locale === Locale.HU ? `/${Locale.EN}` : `/${Locale.HU}`;
  }

  return (
    <Link href={getNextHref(locale)} className="w-[20px] h-[20px] rounded-full">
      <img className="w-[20px] h-[20px] rounded-full" src={flag.src} alt={flag.alt} />
    </Link>
  );
};
