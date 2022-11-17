import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../../../lib/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id
  const { title, body } = req.body
  try {
    const updatePost = await prisma.post.update({
      where: {
        id: postId.toString(),
      },
      data: {
        title,
        body,
      },
    })
    res.status(200).json(updatePost)
  } catch (error) {
    res.status(403).json({ error: 'Error occured while updating post' })
  }
}

export default handler
