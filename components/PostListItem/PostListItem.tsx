import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'

const PostListItem = (props: Post) => {
  const queryClient = useQueryClient()
  const { id, title, body } = props

  const postLink = `/posts/${id}`

  const mutation = useMutation({
    mutationFn: (postId) => {
      return axios.post('http://localhost:3000/api/posts/deletePost', postId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  const handleDelete = () => {
    console.log('Delete Post ID: ', id)

    if (window.confirm('Delete Post?')) {
      mutation.mutate({ id: id })
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
        <button onClick={handleDelete} disabled={mutation.isLoading}>
          Delete Post
        </button>
      </div>
      <hr />
    </div>
  )
}

export default PostListItem
