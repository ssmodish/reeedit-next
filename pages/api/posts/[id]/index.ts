import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const post = await prisma.posts.findUnique({
    where: {
      id: req.body.id.toString(),
    },
  })
  res.status(200).json(post)
}

export default handler
