import { PostInterface } from '../Post/Post.interface'
import PostListItem from '../PostListItem/PostListItem'

type Props = {
  posts: PostInterface[]
}

const PostList = (props: Props) => {
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
