// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PostInterface } from '../../../components/Post/Post.interface'

import { getAllPosts } from './../../../utils/api-utils'

type Data = {
  posts?: PostInterface[]
  message?: String
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'Recieved a POST request' })
  }

  if (req.method === 'GET') {
    console.log('You hit the API!')

    try {
      const posts = await getAllPosts()
      res.status(200).json({ posts: posts })
    } catch (error) {
      res.status(500).json({ message: 'there was a problem' })
    }
  }
}

export default handler
