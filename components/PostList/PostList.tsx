import { useQuery } from '@tanstack/react-query'
import { Post } from '@prisma/client'
import axios from 'axios'
import PostListItem from '../PostListItem/PostListItem'

const fetchPosts = async () => {
  try {
    const res = await axios.get('/api/posts')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const PostList = () => {
  const query = useQuery({ queryKey: ['posts'], queryFn: fetchPosts })

  return (
    <div className="container mx-auto">
      <ul>
        {query.data &&
          query.data?.map((post: Post) => (
            <PostListItem key={post.id} {...post} />
          ))}
      </ul>
    </div>
  )
}

export default PostList
