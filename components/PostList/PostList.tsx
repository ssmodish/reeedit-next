import { PostInterface } from '../Post/Post.interface'
import PostListItem from '../PostListItem/PostListItem'

const PostList = (props: { posts: PostInterface[] }) => {
  const posts = props.posts

  if (!posts) return <h2>No Posts Found</h2>

  return (
    <ul>
      {posts.map((post) => (
        <PostListItem key={post.id} {...post} />
      ))}
    </ul>
  )
}

export default PostList
