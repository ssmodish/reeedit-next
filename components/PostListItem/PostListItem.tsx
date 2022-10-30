import { Post } from '@prisma/client'
import axios from 'axios'

import Link from 'next/link'
import { useRouter } from 'next/router'

const PostListItem = (props: Post) => {
  const router = useRouter()

  const { id, title, body } = props

  const postLink = `/posts/${id}`

  const handleDelete = async () => {
    console.log('Delete Post ID: ', id)

    if (window.confirm('Delete Post?')) {
      await axios.post(`http://localhost:3000/api/posts/deletePost`, {
        id: id.toString(),
      })
      router.push('/posts')
    }
  }

  return (
    <div>
      <h2>Title: {title}</h2>
      <p>{body}</p>
      <div>
        <Link href={postLink}>
          <button>View Post</button>
        </Link>
        <br />
        <button onClick={handleDelete}>Delete Post</button>
      </div>
      <hr />
    </div>
  )
}

export default PostListItem
