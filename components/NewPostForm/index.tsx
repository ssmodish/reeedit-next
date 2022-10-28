const NewPostForm = ({ title, body, setTitle, setBody, handleSubmit }) => {
  return (
    <div>
      <br />
      <br />
      <h2>Create New Post</h2>
      <hr />
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
