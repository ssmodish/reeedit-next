import { useState } from 'react'
// import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const NewPostForm = () => {
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
    await mutation.mutate({ title: title, body: body })

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
        <br />
        <label htmlFor="body">Body: </label>
        <input
          id="body"
          type="textarea"
          placeholder="Body of post"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit" aria-label="Create Post">
          Create Post
        </button>
      </form>
      <hr />
      <br />
    </div>
  )
}

export default NewPostForm
