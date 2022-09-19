import { PostInterface } from '../Post/Post.interface'

import Link from 'next/link'

const PostListItem = (props: PostInterface) => {
  const { id, title, topics, body, createdBy, createdAt, votes, lastUpdated } = props

  const postLink = `/posts/${id}`

  console.log(postLink)

  return (
    <div>
      <p>
        Upvotes: {votes.up} ◻ Downvotes: {votes.down}
      </p>
      <h2>Title: {title}</h2>
      <p>
        Author: {createdBy} - Date: {createdAt}
      </p>
      <p>Last Update: {lastUpdated}</p>
      <p>{body}</p>
      <p>TOPICS{topics.map((topic) => ' | ' + topic)}</p>
      <Link href={postLink}>View Post</Link>
      <hr />
    </div>
  )
}

export default PostListItem
