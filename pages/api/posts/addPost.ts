import prisma from '../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, body } = req.body

  const savedPost = await prisma.post.create({
    data: {
      title: title,
      body: body,
    },
  })
  res.status(201).json(savedPost)
}

export default handler
