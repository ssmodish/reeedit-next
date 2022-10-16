import { Post } from '@prisma/client'

import Link from 'next/link'

const PostListItem = (props: Post) => {
  const { id, title, body } = props

  const postLink = `/posts/${id}`

  return (
    <div>
      <h2>Title: {title}</h2>
      <p>{body}</p>
      <Link href={postLink}>
        <button>View Post</button>
      </Link>
      <hr />
    </div>
  )
}

export default PostListItem
