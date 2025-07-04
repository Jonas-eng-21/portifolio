import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getTranslations } from '../../../public/lib/i18n';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jonas Soares - Desenvolvedor FullStack',
  description: 'Portfólio de Jonas Soares',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const t = await getTranslations(params.locale);

  return (
    <html lang={params.locale} className="dark">
      <body className={inter.className}>
        <Header /> 
        {children}
        <Footer  t={t} />
      </body>
    </html>
  );
}