import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getPostById = async (postId: string) => {
  const res = await axios.get(`http://localhost:3000/api/posts/${postId}`)
  return res.data
}

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const { status, data, error } = useQuery({
    queryKey: ['post', id],
    queryFn: ({ queryKey }) => getPostById(queryKey[1]),
  })

  if (status === 'loading') {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  if (status === 'error') {
    console.log(error)

    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>{error.message}</p>
      </div>
    )
  }

  if (data) {
    return (
      <Fragment>
        <Head>
          <title>{data.title}</title>
          <meta name="description" content={data.body} />
        </Head>
        <br />
        <br />
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
        <hr />
        <h3>Must query comments</h3>
        {/* {comments &&
        comments.map((comment) => <p key={comment.id}>{comment.message}</p>)} */}
      </Fragment>
    )
  }
}

export default Post
