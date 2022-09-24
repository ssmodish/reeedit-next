import path from 'path'
import * as fs from 'node:fs/promises'

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

  console.log({ lable: 'Post in component', ...post })

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

const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json')
  const jsonData = await fs.readFile(filePath, 'utf8')
  const data: { posts: PostInterface[] } = JSON.parse(jsonData)

  return data
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData()

  const ids: string[] = data.posts.map((post) => post.id)

  const pathsWithParams = ids.map((id) => ({ params: { id: id } }))

  return { paths: pathsWithParams, fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams

  const data = await getData()

  const retrievedPost = data.posts.filter(
    (post: PostInterface) => post.id === id
  )

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
