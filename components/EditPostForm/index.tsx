import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

type EPost = {
  postId: string
  editTitle: string
  editBody: string
}

const EditPostForm = ({ postId, editTitle, editBody, setEditPost }: EPost) => {
  const queryClient = useQueryClient()
  const [title, setTitle] = useState(editTitle)
  const [body, setBody] = useState(editBody)

  const mutation = useMutation({
    mutationFn: (editPost) => {
      return axios.post(`/api/posts/${postId}/editPost`, editPost)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post', postId] })
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await mutation.mutate({ title: title, body: body })
    setEditPost(false)
    // close modal
  }

  return (
    <div>
      <h2 className="text-lg font-bold">Edit Post</h2>
      {mutation.isLoading ? (
        <p>Updating post...</p>
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}
        </>
      )}

      {mutation.isSuccess ? <div>Post Updated!</div> : null}

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="mb-1">
            <label htmlFor="title">Title: </label>
            <input
              autoFocus
              id="title"
              type="text"
              placeholder="Title of Post"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="body">Body: </label>
            <input
              id="body"
              type="textarea"
              placeholder="Body of post"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          aria-label="Create Post"
          className="p-2 my-1 mr-1 rounded-md bg-blue-500 text-xs"
        >
          Save Post
        </button>
      </form>
      <hr />
      <br />
    </div>
  )
}

export default EditPostForm
