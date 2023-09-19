'use client';

import type { FC } from 'react';
import React, { useMemo } from 'react';
import { useLocale } from 'use-intl';
import { Locale } from '@/app/models/enums/locale';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const LanguageSelector: FC = () => {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

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

  function getNextHref() {
    const nextUrl = pathname;
    if (nextUrl.startsWith(`/${Locale.HU}`)) {
      return nextUrl.replace(`/${Locale.HU}`, `/${Locale.EN}`);
    } else if (nextUrl.startsWith(`/${Locale.EN}`)) {
      return nextUrl.replace(`/${Locale.EN}`, `/${Locale.HU}`);
    } else {
      return `${Locale.HU}${nextUrl}`;
    }
  }

  return (
    <Link href={getNextHref()} className="w-[20px] h-[20px] rounded-full">
      <img className="w-[20px] h-[20px] rounded-full" src={flag.src} alt={flag.alt} />
    </Link>
  );
};
