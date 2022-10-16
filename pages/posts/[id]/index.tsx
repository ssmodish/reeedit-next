import { Fragment } from 'react'
import { GetStaticProps, NextPage } from 'next'

import Head from 'next/head'

import { Post } from '@prisma/client'
import { getPostById, getPosts } from '../../../services/posts'

type Props = {
  post: Post
}

const Post: NextPage<Props> = (props) => {
  const { post } = props
  if (!post) {
    return <p>Loading...</p>
  }

  const { title, body, comments } = post

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
      {comments.map((comment) => (
        <p key={comment.id}>{comment.message}</p>
      ))}
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!

  const post = await getPostById(id)

  return {
    props: {
      post: post,
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  const pathParams = posts.map((post) => ({
    params: {
      id: post.id,
    },
  }))

  console.log(pathParams)

  return {
    paths: pathParams,
    fallback: false,
  }
}

export default Post
