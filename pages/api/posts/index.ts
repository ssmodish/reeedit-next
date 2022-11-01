import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = await prisma.post.findMany()
  res.status(200).json(posts)
}

export default handler
