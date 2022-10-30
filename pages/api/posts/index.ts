import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const { title, body } = req.body

      const savedPost = await prisma.post.create({
        data: {
          title: title,
          body: body,
        },
      })
      res.status(201).json(savedPost)
      break
    case 'GET':
      const posts = await prisma.post.findMany()
      res.status(200).json(posts)
      break

    default:
      res.status(405).json({ message: 'Method not allowed' })
  }
}

export default handler
