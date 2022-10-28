import { useState } from 'react'
import Head from 'next/head'
import { Post } from '@prisma/client'
import { PostsContextProvider } from '../../context/posts-context'

import PostList from '../../components/PostList/PostList'
import { getPosts } from '../../services/posts'
import NewPostForm from '../../components/NewPostForm'

type Props = {
  posts: Post[]
}

const Posts = (props: Props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { posts } = props

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('submitted')
    console.log(title, body)
  }

  return (
    <PostsContextProvider>
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
    </PostsContextProvider>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()

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
