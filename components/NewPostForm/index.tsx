import { FormEvent, useRef } from 'react'

const NewPostForm = () => {
  const titleInputRef = useRef<HTMLInputElement>(null)

  function newFormHandler(event: FormEvent) {
    event.preventDefault()

    if (null !== titleInputRef.current) {
      const enteredPostTitle = titleInputRef.current.value
      fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title: enteredPostTitle }),
        headers: { 'Content-Type': 'application/json' },
      })
      titleInputRef.current.value = null
    }
  }

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={newFormHandler}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title of Post"
          ref={titleInputRef}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewPostForm
