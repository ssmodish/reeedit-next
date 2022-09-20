import type { NextPage } from 'next'

import { useRouter } from 'next/router'
import { getPostById } from '../../../dummy-data'

const Post: NextPage = () => {
  const router = useRouter()

  const [post] = getPostById(router.query.id)

  return (
    <div>
      <em>| {post.topics.map((topic) => topic + ' | ')}</em>
      <h1>{post.title}</h1>
      <h2>Author: {post.createdBy}</h2>
      <p>Created: {post.createdAt}</p>
      <p>Updated: {post.lastUpdated}</p>
      <p>{post.body}</p>
      <p>
        {post.votes.up} upvotes | {post.votes.down} downvotes
      </p>
    </div>
  )
}

export default Post
