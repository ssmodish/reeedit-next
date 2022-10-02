import { Fragment } from 'react'
import { getAllPosts, getPost } from '../../../utils/api-utils'

import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import Head from 'next/head'

import { PostInterface } from '../../../components/Post/Post.interface'

type Props = {
  post: PostInterface[]
}

interface Params extends ParsedUrlQuery {
  id: string
}

const Post: NextPage<Props> = (props) => {
  const { post } = props
  if (!post) {
    return <p>Loading...</p>
  }

  console.log(post)

  const { topics, title, createdBy, createdAt, lastUpdated, body, votes } =
    post[0]

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={body} />
      </Head>
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
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { id } = context.params!

  const retrievedPost = await getPost(id)

  return {
    props: {
      post: retrievedPost,
    },
    revalidate: 30,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllPosts()

  const pathsWithParams = data.map((post) => ({ params: { id: post.id } }))

  return { paths: pathsWithParams, fallback: true }
}

export default Post
