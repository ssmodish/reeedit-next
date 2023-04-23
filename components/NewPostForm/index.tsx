import { useState } from 'react'
import { useUser } from '@clerk/nextjs'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const NewPostForm = () => {
  const { user } = useUser()
  const queryClient = useQueryClient()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return axios.post('http://localhost:3000/api/posts/addPost', newPost)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userId = user?.id || 'anonymous'
    await mutation.mutate({ title: title, body: body, userId: userId })

    setTitle('')
    setBody('')
  }

  return (
    <div>
      <h2 className="text-lg">Create New Post</h2>
      {mutation.isLoading ? (
        'Adding post...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}
        </>
      )}

      {mutation.isSuccess ? <div>Post added!</div> : null}

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
          Create Post
        </button>
      </form>
      <hr />
      <br />
    </div>
  )
}

export default NewPostForm
