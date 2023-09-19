import React, { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ClientProviders from '@/app/providers/client-providers';
import { Locale } from '@/app/models/enums/locale';
import { NextIntlClientProvider } from 'next-intl';

import en from '../../messages/en.json';

jest.mock('query-string', () => ({
  __esModule: true,
  default: {
    parse: jest.fn(),
    stringify: jest.fn(),
  },
}));

export const AllTheProviders: React.FC<PropsWithChildren<any>> = ({ children }) => (
  <NextIntlClientProvider locale={Locale.EN} messages={en}>
    <ClientProviders>{children}</ClientProviders>
  </NextIntlClientProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
