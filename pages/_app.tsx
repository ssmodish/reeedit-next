import { FC } from 'react'
import type { AppProps } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.css'

const queryClient = new QueryClient()

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ClerkProvider>
  )
}

export default MyApp
