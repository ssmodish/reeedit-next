import { useQuery } from '@tanstack/react-query'
import PostListItem from '../PostListItem/PostListItem'

const fetchPosts = async () => {
  const res = await fetch('http://localhost:3000/api/posts')
  return res.json()
}

const PostList = () => {
  const query = useQuery({ queryKey: ['posts'], queryFn: fetchPosts })

  return (
    <div>
      <ul>
        {query.data?.map((post) => (
          <PostListItem key={post.id} {...post} />
        ))}
      </ul>
    </div>
  )
}

export default PostList
