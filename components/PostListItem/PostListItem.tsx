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
    <div className="m-3 p-2 border rounded-md shadow-sm shadow-gray-300 bg-gray-100">
      <h2>Title: {title}</h2>
      <p>{body}</p>
      <div className="flex">
        <Link href={postLink}>
          <button className="p-2 my-1 mr-1 rounded-md bg-blue-500">
            View Post
          </button>
        </Link>
        <br />
        <button
          onClick={handleDelete}
          disabled={mutation.isLoading}
          className="p-2 m-1 rounded-md bg-red-500"
        >
          Delete Post
        </button>
      </div>
      <hr />
    </div>
  )
}

export default PostListItem
