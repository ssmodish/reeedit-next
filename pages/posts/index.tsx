import type { NextPage } from 'next'

import { getAllPosts } from '../../dummy-data'

import PostList from '../../components/PostList/PostList'

const Posts: NextPage = () => {
  const posts = getAllPosts()

  return (
    <div>
      <h1>Posts:</h1>
      <PostList posts={posts} />
    </div>
  )
}

export default Posts
