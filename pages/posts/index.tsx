import Head from 'next/head'

import { getAllPosts } from '../../utils/api-utils'

import PostList from '../../components/PostList/PostList'

import { PostInterface } from '../../components/Post/Post.interface'

type Props = {
  posts: PostInterface[]
}

const Posts = (props: Props) => {
  const { posts } = props

  return (
    <div>
      <Head>
        <title>Recent Posts</title>
        <meta name="description" content="The most recent posts" />
      </Head>
      <h1>Posts:</h1>
      <PostList posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

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
