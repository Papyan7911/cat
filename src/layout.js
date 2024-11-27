import { Mulish } from 'next/font/google';
import Head from 'next/head';

const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Mulish-VariableFont_wght.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={` ${mulish.variable}`}>
        {children}
      </body>
    </html>
  );
}
