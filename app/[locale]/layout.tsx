import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Locale } from '@/app/models/enums/locale';
import { PropsWithChildren } from 'react';
import { Comfortaa } from 'next/font/google';
import { Metadata } from 'next';
import '../globals.css';
import { LanguageSelector } from '@/app/components/language-selector';
import ClientProviders from '@/app/providers/client-providers';
import { Header } from '@/app/components/header';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emersoft Frontend Technical Assignment',
};

export function generateStaticParams() {
  return [{ locale: Locale.EN }, { locale: Locale.HU }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: PropsWithChildren & { params: { locale: Locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="bg-gray-100 min-h-screen">
      <body className={`${comfortaa.className} min-h-screen`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientProviders>
            <div className="w-[100%] md:w-[600px] lg:w-[1000px] min-h-screen mx-auto bg-white">
              <Header />
              <div className="p-4">{children}</div>
            </div>
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
