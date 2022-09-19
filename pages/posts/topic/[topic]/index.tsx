import type { NextPage } from 'next'

import { useRouter } from 'next/router'

const Topic: NextPage = () => {
  const router = useRouter()

  console.log(router.query)

  return (
    <div>
      <h1>Topic:</h1>
      <h2>Shows a list of most recent posts in a topic</h2>
      Topic: {router.query.topic}
    </div>
  )
}

export default Topic
