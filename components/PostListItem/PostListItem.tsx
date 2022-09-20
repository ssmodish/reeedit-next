import { PostInterface } from '../Post/Post.interface'

import Link from 'next/link'

const PostListItem = (props: PostInterface) => {
  const { id, title, topics, body, createdBy, createdAt, votes, lastUpdated } = props

  const postLink = `/posts/${id}`

  return (
    <div>
      <p>
        <em>| {topics.map((topic) => topic + ' | ')}</em>
      </p>
      <h2>Title: {title}</h2>
      <p>
        Author: {createdBy} - Date: {createdAt}
      </p>
      <p>Last Update: {lastUpdated}</p>
      <p>{body}</p>
      <p>
        {votes.up} upvotes | {votes.down} downvotes
      </p>
      <Link href={postLink}>
        <button>View Post</button>
      </Link>
      <hr />
    </div>
  )
}

export default PostListItem
