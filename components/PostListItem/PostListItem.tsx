import axios from 'axios'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Post } from '@prisma/client'

const PostListItem = ({ id, title, body, userId }: Post) => {
  const user = useUser()
  const queryClient = useQueryClient()

  const postLink = `/posts/${id}`

  const mutation = useMutation({
    mutationFn: (postId) => {
      return axios.post('/api/posts/deletePost', postId)
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
      <p>PostId: {id}</p>
      <p className="text-sm">Author: {userId}</p>
      <p className="text-base">{body}</p>
      <div className="flex justify-end">
        <Link href={postLink}>
          <button className="p-2 my-1 mr-1 rounded-md bg-blue-500 text-xs">
            View Post
          </button>
        </Link>
        {user.user?.id === userId ? (
          // <DeleteButton handleDelete={handleDelete} mutation={mutation} />
          <>
            <br />
            <button
              onClick={() => handleDelete}
              disabled={mutation.isLoading}
              className="p-2 m-1 rounded-md bg-red-500 text-xs"
            >
              Delete Post
            </button>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default PostListItem
