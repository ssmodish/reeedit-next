import type { NextPage } from 'next'

import { useRouter } from 'next/router'

const Post: NextPage = () => {
  const router = useRouter()

  console.log(router.query)

  return (
    <div>
      <h1>Post:</h1>
      <h2>Shows a specific post</h2>
      PostId: {router.query.id}
    </div>
  )
}

export default Post
