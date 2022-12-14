import { useState } from 'react'
// import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

type EPost = {
  postId: string
  editTitle: string
  editBody: string
}

const EditPostForm = ({ postId, editTitle, editBody }: EPost) => {
  const queryClient = useQueryClient()
  const [title, setTitle] = useState(editTitle)
  const [body, setBody] = useState(editBody)

  const mutation = useMutation({
    mutationFn: (editPost) => {
      return axios.post(
        `http://localhost:3000/api/posts/${postId}/editPost`,
        editPost
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post', postId] })
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await mutation.mutate({ title: title, body: body })

    // close modal
  }

  return (
    <div>
      <h2 className="text-lg">Edit Post</h2>
      {mutation.isLoading ? (
        'Adding post...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}
        </>
      )}

      {mutation.isSuccess ? <div>Post Edited!</div> : null}

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
          Save Post
        </button>
      </form>
      <hr />
      <br />
    </div>
  )
}

export default EditPostForm
