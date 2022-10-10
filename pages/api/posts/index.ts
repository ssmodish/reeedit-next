// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PostInterface } from '../../../components/Post/Post.interface'
import supabase from '../../../utils/supabase-utils'
// import { getAllPosts } from './../../../utils/api-utils'

type Data = {
  posts?: PostInterface[]
  message?: String
}

async function postListHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req

  switch (method) {
    case 'POST':
      const { created_by, title, body, topics } = req.body

      // TODO: validate fields

      // const postTopics: string[] = topics.split(',')

      const newPost: PostInterface = {
        created_by,
        title,
        body,
        topics,
      }
      res.status(200).json({ message: 'Recieved a POST request', ...newPost })
      break

    case 'GET':
      try {
        const posts = await supabase.from('posts').select('*')
        res.status(200).json({ posts: posts.data, error: posts.error })
      } catch (error) {
        res.status(500).json({ message: 'there was a problem' })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default postListHandler
