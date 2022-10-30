import { Fragment } from 'react'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import prisma from '../../../lib/prisma'
import { makeSerializable } from '../../../lib/util'
import { Post, Comment } from '@prisma/client'

type Props = {
  post: Post
  comments: Comment[]
}

const Post: NextPage<Props> = (props) => {
  const { post, comments } = props
  if (!post) {
    return <p>Loading...</p>
  }

  const { title, body } = post

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

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!

  const post = await prisma.post.findUnique({
    where: {
      id: id?.toString(),
    },
  })
  const postComments = await prisma.post
    .findUnique({
      where: {
        id: id?.toString(),
      },
    })
    .comments()

  return {
    props: {
      post: post,
      comments: makeSerializable(postComments),
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  const posts = await prisma.post.findMany()

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
