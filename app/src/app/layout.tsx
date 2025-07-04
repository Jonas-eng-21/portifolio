import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { getTranslations } from '../../public/lib/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jonas Soares - Desenvolvedor FullStack',
  description: 'Portfólio de Jonas Soares',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const t = await getTranslations('pt');

  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <Header /> 
        {children}
        <Footer t={t} />
      </body>
    </html>
  );
}