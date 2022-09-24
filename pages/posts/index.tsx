import path from 'path'
import * as fs from 'node:fs/promises'

import PostList from '../../components/PostList/PostList'

import { PostInterface } from '../../components/Post/Post.interface'

type Props = {
  posts: PostInterface[]
}

const Posts = (props: Props) => {
  const { posts } = props

  return (
    <div>
      <h1>Posts:</h1>
      <PostList posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json')
  const jsonData = await fs.readFile(filePath, 'utf8')
  const data = JSON.parse(jsonData)

  return {
    props: {
      ...data,
    },
    revalidate: 10,
    // notFound: Boolean
    // redirect: { destination: 'new_route' }
  }
}

export default Posts
