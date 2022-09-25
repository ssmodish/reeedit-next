import { getAllPosts } from '../../data/utils/api-utils'

import PostList from '../../components/PostList/PostList'

import { PostInterface } from '../../components/Post/Post.interface'

type Props = {
  posts: PostInterface[]
}

const Posts = (props: Props) => {
  const { posts } = props

  return (
    <div>
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
    revalidate: 10,
    // notFound: Boolean
    // redirect: { destination: 'new_route' }
  }
}

export default Posts
