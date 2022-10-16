import { useState } from 'react'

const NewPostForm = () => {
  const title = useState(null)
  const body = useState(null)

  const formHandler = () => {
    console.log('Form Submitted!')
  }

  return (
    <div>
      <br />
      <br />
      <h2>Create New Post</h2>
      <hr />
      <form onSubmit={formHandler}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title of Post"
          value={title}
          required
        />
        <br />
        <input
          type="textarea"
          name="body"
          id="body"
          placeholder="Body of post"
          value={body}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <br />
    </div>
  )
}

export default NewPostForm
