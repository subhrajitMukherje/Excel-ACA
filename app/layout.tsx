import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ExcelAcademy - Premier Coaching Institute for JEE, NEET, UPSC & More',
  description: 'Top coaching institute in India for JEE, NEET, CUET, UPSC, GATE, NET, SSC, Banking exams. Expert faculty, proven results, and comprehensive study materials.',
  keywords: 'JEE coaching, NEET coaching, UPSC coaching, GATE coaching, competitive exams, coaching institute India, online coaching, test preparation',
  authors: [{ name: 'ExcelAcademy' }],
  creator: 'ExcelAcademy',
  publisher: 'ExcelAcademy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://excelacademy.com',
    title: 'ExcelAcademy - Premier Coaching Institute for Competitive Exams',
    description: 'Top coaching institute in India for JEE, NEET, CUET, UPSC, GATE, NET, SSC, Banking exams. Expert faculty, proven results.',
    siteName: 'ExcelAcademy',
    images: [
      {
        url: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2',
        width: 1200,
        height: 630,
        alt: 'ExcelAcademy Coaching Institute',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExcelAcademy - Premier Coaching Institute',
    description: 'Top coaching institute in India for JEE, NEET, CUET, UPSC, GATE, NET, SSC, Banking exams.',
    images: ['https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2'],
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://excelacademy.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}