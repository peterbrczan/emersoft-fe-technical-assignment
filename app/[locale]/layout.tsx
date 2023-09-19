import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {Locale} from "@/app/models/enums/locale";
import {PropsWithChildren} from "react";
import { Comfortaa } from 'next/font/google'
import {Metadata} from "next";

const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emersoft Frontend Technical Assignment',
}

export function generateStaticParams() {
  return [{locale: Locale.EN}, {locale: Locale.HU}];
}

export default async function LocaleLayout({children, params: {locale}}: PropsWithChildren & {params: {locale: Locale}}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
    <body className={comfortaa.className}>
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
