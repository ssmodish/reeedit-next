import { Post } from '@prisma/client'
import PostListItem from '../PostListItem/PostListItem'

type Props = {
  posts: Post[]
}

const PostList = (props: Props) => {
  const posts = props.posts

  if (!posts) return <h2>No Posts Found</h2>

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <PostListItem key={post.id} {...post} />
        ))}
      </ul>
    </div>
  )
}

export default PostList
