// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const { title, body } = JSON.parse(req.body)

      const savedPost = await prisma.post.create({
        data: {
          title,
          body,
        },
      })
      res.json(savedPost)
      break
    case 'GET':
      const posts = await prisma.post.findMany()
      res.send(posts)
      break

    default:
      res.status(405).json({ message: 'Method not allowed' })
  }
}

export default handler
