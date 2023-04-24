import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useUser } from '@clerk/nextjs'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import EditPostForm from '../../../components/EditPostForm'

const getPostById = async (postId: string) => {
  const res = await axios.get(`/api/posts/${postId}`)
  return res.data
}

const Post = () => {
  const user = useUser()
  const [editPost, setEditPost] = useState(false)
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
        <div className="container mx-auto">
          <div className="mb-2">
            <h1 className="text-2xl mb-2 font-semibold">{data.title}</h1>
            <p>{data.body}</p>
            {user.user?.id === data.userId ? (
              <>
                <button
                  className="p-2 m-1 rounded-md bg-blue-300"
                  onClick={() => setEditPost(!editPost)}
                >
                  Edit Post
                </button>
              </>
            ) : null}
            {editPost && (
              <EditPostForm
                postId={id}
                editTitle={data.title}
                editBody={data.body}
                setEditPost={setEditPost}
              />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-lg">Comments</h3>
            {/* {comments &&
        comments.map((comment) => <p key={comment.id}>{comment.message}</p>)} */}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Post
