import type { NextPage } from 'next'

import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reedit</title>
        <meta name="description" content="A forum sortable by topics" />
      </Head>
      <h2>Possibly a splash screen before redirect to posts/login</h2>
    </div>
  )
}

export default Home
