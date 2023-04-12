import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'

const UserButtons = ({ postLink, handleDelete, mutation }) => {
  return (
    <div className="flex justify-end">
      <Link href={postLink}>
        <button className="p-2 my-1 mr-1 rounded-md bg-blue-500 text-xs">
          View Post
        </button>
      </Link>
      <br />
      <button
        onClick={handleDelete}
        disabled={mutation.isLoading}
        className="p-2 m-1 rounded-md bg-red-500 text-xs"
      >
        Delete Post
      </button>
    </div>
  )
}

const PostListItem = (props: Post) => {
  const user = useUser()
  const queryClient = useQueryClient()
  const { id, title, body, authorId } = props

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
    <div className="my-3 p-2 border rounded-md shadow-sm shadow-gray-400 bg-gray-100">
      <h2 className="font-bold text-lg">Title: {title}</h2>
      <p className="text-sm">Author: {authorId}</p>
      <p className="text-base">{body}</p>
      {user.user?.id === authorId ? (
        <UserButtons
          postLink={postLink}
          handleDelete={handleDelete}
          mutation={mutation}
        />
      ) : null}
    </div>
  )
}

export default PostListItem
