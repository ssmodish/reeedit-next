import React from 'react'

import PostList from '../../components/PostList/PostList'
import NewPostForm from '../../components/NewPostForm'

import Head from 'next/head'

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Recent Posts</title>
        <meta name="description" content="The most recent posts" />
      </Head>
      <NewPostForm />
      <h1>Posts:</h1>
      <PostList />
    </div>
  )
}

export default Posts
