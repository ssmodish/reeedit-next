import { Fragment } from 'react'
// import { getAllPosts, getPost } from '../../../utils/api-utils'
import supabase from '../../../utils/supabase-utils'

import { GetStaticProps, NextPage } from 'next'
// import { ParsedUrlQuery } from 'querystring'

import Head from 'next/head'

import { PostInterface } from '../../../components/Post/Post.interface'

type Props = {
  post: PostInterface[]
}

// interface Params extends ParsedUrlQuery {
//   id: number
// }

const Post: NextPage<Props> = (props) => {
  const { post } = props
  if (!post) {
    return <p>Loading...</p>
  }

  const { topics, title, created_by, created_at, last_updated, body, votes } =
    post.body

  console.log('POST: ' + post)

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

  const retrievedPost = await supabase
    .from<PostInterface>('posts')
    .select('*')
    .eq('id', Number(id))
    .single()

  return {
    props: {
      post: retrievedPost,
    },
    revalidate: 30,
  }
}

export const getStaticPaths = async () => {
  const { data: posts } = await supabase
    .from<PostInterface>('posts')
    .select('*')

  const pathsWithParams = posts?.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths: pathsWithParams, fallback: true }
}

export default Post
