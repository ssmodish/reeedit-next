import { Fragment } from 'react'
import Head from 'next/head'

const Post = () => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={body} />
      </Head>
      <br />
      <br />
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <hr />
      {comments &&
        comments.map((comment) => <p key={comment.id}>{comment.message}</p>)}
    </Fragment>
  )
}

export default Post
