import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = await prisma.post.findMany()
  if (posts.length > 0) {
    res.status(200).json(posts)
  } else {
    res.status(400).json({ posts: [] })
  }
}

export default handler
