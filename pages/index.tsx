import type { NextPage } from 'next'

import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h2>Possibly a splash screen before redirect to posts/login</h2>
      <Link href="/posts">Posts</Link>
    </div>
  )
}

export default Home
