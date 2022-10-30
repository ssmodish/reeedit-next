// pages/index.tsx
import prisma from '../lib/prisma'

import type { NextPage, GetStaticProps } from 'next'

import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reedit</title>
        <meta name="description" content="A forum sortable by topics" />
      </Head>
      <h2>Possibly a splash screen before redirect to posts/login</h2>
      <Link href="/posts">Posts</Link>
    </div>
  )
}

// index.tsx
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({})
  return {
    props: { feed },
    revalidate: 10,
  }
}

export default Home
