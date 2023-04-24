import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  })
  if (post) {
    res.status(200).json(post)
  } else {
    res.status(404).json({ post: [] })
  }
}

export default handler
