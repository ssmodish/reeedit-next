import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import EditPostForm from '../../../components/EditPostForm'

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
        <h2 className="text-4xl">Loading...</h2>
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
          <title>Reeedit - {data.title}</title>
          <meta name="description" content={data.body} />
        </Head>
        <div className="m-4">
          <div className="mb-2">
            <h1 className="text-2xl mb-2">{data.title}</h1>
            <p>{data.body}</p>
            <button className="p-2 m-1 rounded-md bg-blue-300">
              Edit Post
            </button>
            <EditPostForm
              postId={id}
              editTitle={data.title}
              editBody={data.body}
            />
          </div>
          <div>
            <h3>Must query comments</h3>
            {/* {comments &&
        comments.map((comment) => <p key={comment.id}>{comment.message}</p>)} */}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Post
