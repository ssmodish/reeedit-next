import axios from 'axios'
import React, { useState } from 'react'
import { Post } from '@prisma/client'
import prisma from '../../lib/prisma'

import PostList from '../../components/PostList/PostList'
import NewPostForm from '../../components/NewPostForm'

import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  posts: Post[]
}

const Posts = (props: Props) => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { posts } = props

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const newPost = { title, body }
      console.log(newPost)

      await axios.post('http://localhost:3000/api/posts/addPost', newPost)
      router.push('/posts')
      setTitle('')
      setBody('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Head>
        <title>Recent Posts</title>
        <meta name="description" content="The most recent posts" />
      </Head>{' '}
      <NewPostForm
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        handleSubmit={handleSubmit}
      />
      <h1>Posts:</h1>
      <PostList posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await prisma.post.findMany()

  return {
    props: {
      posts: posts,
    },
    revalidate: 30,
    // notFound: Boolean
    // redirect: { destination: 'new_route' }
  }
}

export default Posts
