// src/app/[locale]/layout.tsx
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing'; 
import {getMessages} from 'next-intl/server';
import '../globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { GlobalSpotlightEffect } from '../components/ui/GlobalSpotlightEffect';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  const messages = await getMessages();
 
  return (
    <html lang={locale} className='dark'>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <GlobalSpotlightEffect />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}