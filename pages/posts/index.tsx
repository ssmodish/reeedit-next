import React, { Suspense } from 'react'
import { useUser } from '@clerk/nextjs'

import PostList from '../../components/PostList/PostList'
import NewPostForm from '../../components/NewPostForm'

import Head from 'next/head'

const Posts = () => {
  const user = useUser()

  return (
    <div className="mx-3 container mx-auto">
      <Head>
        <title>Recent Posts</title>
        <meta name="description" content="The most recent posts" />
      </Head>
      {user.isSignedIn && <NewPostForm />}
      <h1>Posts:</h1>
      <Suspense fallback={<p>Loading posts...</p>}>
        <PostList />
      </Suspense>
    </div>
  )
}

export default Posts
