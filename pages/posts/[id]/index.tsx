import { Fragment } from 'react'
// import { getAllPosts, getPost } from '../../../utils/api-utils'
// import supabase from '../../../utils/supabase-utils'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
// import { ParsedUrlQuery } from 'querystring'

import Head from 'next/head'

import { PostInterface } from '../../../components/Post/Post.interface'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

type Props = {
  post: PostInterface
}

const Post: NextPage<Props> = (props) => {
  const { post } = props
  if (!post) {
    return <p>Loading...</p>
  }

  const { topics, title, created_by, created_at, last_updated, body, votes } =
    post

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={body} />
      </Head>
      <div>
        <em>| {topics && topics?.map((topic) => topic + ' | ')}</em>
        <h1>{title}</h1>
        <h2>Author: {created_by}</h2>
        <p>Created: {created_at}</p>
        <p>Updated: {last_updated}</p>
        <p>{body}</p>
        <p>
          {votes.up} upvotes | {votes.down} downvotes
        </p>
      </div>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!

  const response = await fetch(`http://localhost:3000/api/posts/${id}`)
  const data = await response.json()
  // const retrievedPost = data

  console.log(data)

  return {
    props: {
      post: data,
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/posts')
  const data = await response.json()
  const { posts } = data

  console.log(posts)

  const pathParams = posts.map((post: PostInterface) => ({
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
