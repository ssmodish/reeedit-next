import { getAllPosts, getPost } from '../../../data/utils/api-utils'

import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PostInterface } from '../../../components/Post/Post.interface'

type Props = {
  post: PostInterface[]
}

interface IParams extends ParsedUrlQuery {
  id: string
}

const Post: NextPage<Props> = (props) => {
  const { post } = props
  if (!post) {
    return <p>Loading...</p>
  }

  const { topics, title, createdBy, createdAt, lastUpdated, body, votes } =
    post[0]

  return (
    <div>
      <em>| {topics && topics?.map((topic) => topic + ' | ')}</em>
      <h1>{title}</h1>
      <h2>Author: {createdBy}</h2>
      <p>Created: {createdAt}</p>
      <p>Updated: {lastUpdated}</p>
      <p>{body}</p>
      <p>
        {votes.up} upvotes | {votes.down} downvotes
      </p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllPosts()
  console.warn('****************************************')
  console.warn('*                                      *')
  console.warn('* posts/[id]/index.tsx::getStaticPaths *')
  console.warn('*                                      *')
  console.warn('****************************************')

  console.log(data)

  const ids: string[] = data.map((post) => post.id)

  const pathsWithParams = ids.map((id) => ({ params: { id: id } }))

  return { paths: pathsWithParams, fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams

  const retrievedPost: PostInterface[] = await getPost(id)

  if (!retrievedPost) {
    return { notFound: true }
  }

  return {
    props: {
      post: retrievedPost,
    },
  }
}

export default Post
