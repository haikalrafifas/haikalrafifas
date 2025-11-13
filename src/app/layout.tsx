import type { Metadata } from 'next';
import './globals.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

export const metadata: Metadata = {
  title: 'Haikal Rafif Website',
  description: 'Haikal Rafif\'s Personal Website',
  keywords: ['gokal', 'Haikal Rafif', 'haikalrafifas'],
  openGraph: {
    title: 'Haikal Rafif Website',
    description: 'Haikal Rafif\'s Personal Website',
    url: 'https://gokal.my.id',
    siteName: 'Haikal Rafif Website',
    images: [
      {
        url: 'https://gokal.my.id/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Haikal Rafif Website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body style={{ fontFamily: 'Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
