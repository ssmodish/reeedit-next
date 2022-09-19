import type { NextPage } from 'next'

import { useRouter } from 'next/router'

const TopicalPost: NextPage = () => {
  const router = useRouter()

  console.log(router.query)

  return (
    <div>
      <h1>TopicalPost:</h1>
      <h2>Shows a specific post after a topic has been selected</h2>
      Topic: {router.query.topic}
      <br />
      PostId: {router.query.id}
    </div>
  )
}

export default TopicalPost
