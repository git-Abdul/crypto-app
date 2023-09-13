import './globals.css';
import './fonts.css';
import { Inter } from 'next/font/google';
import { Footer } from './components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CryptoCoin • Dev',
  description: 'A Next.js web-application.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  )
}
