import { ReactFragment } from 'react'
import { PostInterface } from '../Post/Post.interface'
import PostListItem from '../PostListItem/PostListItem'

const PostList = (props: { posts: PostInterface[] }) => {
  const { posts } = props

  return (
    <ul>
      {posts.map((post) => (
        <PostListItem key={post.id} {...post} />
      ))}
    </ul>
  )
}

export default PostList
