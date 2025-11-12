import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Espaço Saúde Neuza Fernandes | Perdizes',
  description: 'Massoterapia com 40+ anos de experiência em Perdizes: Drenagem Vodder, Shiatsu, Reflexologia, Reiki e mais.',
  metadataBase: new URL('https://www.espacosaudeneuzafernandes.com.br'),
  openGraph: {
    title: 'Espaço Saúde Neuza Fernandes | Perdizes',
    description: 'Massoterapia com 40+ anos de experiência em Perdizes: Drenagem Vodder, Shiatsu, Reflexologia, Reiki e mais.',
    url: 'https://www.espacosaudeneuzafernandes.com.br',
    siteName: 'Espaço Saúde Neuza Fernandes',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/logo-neuza-tight.webp',
        width: 1200,
        height: 630,
        alt: 'Espaço Saúde Neuza Fernandes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espaço Saúde Neuza Fernandes | Perdizes',
    description: 'Massoterapia com 40+ anos de experiência em Perdizes: Drenagem Vodder, Shiatsu, Reflexologia, Reiki e mais.',
    images: ['/images/logo-neuza-tight.webp'],
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2DSSPW9GLS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2DSSPW9GLS');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
