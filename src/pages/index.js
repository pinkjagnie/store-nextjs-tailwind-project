import Head from 'next/head'
import { Inter } from '@next/font/google'

import Search from '@/components/Search';
import Products from '@/components/Products';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Store Next App</title>
        <meta name="description" content="Store by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
      <Products />
    </>
  )
}
