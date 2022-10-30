import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../../lib/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id,
      },
    })
    res.status(200).json(deletedPost)
  } catch (error) {
    res.status(403).json({ error: 'Error occured while deleting post' })
  }
}

export default handler
