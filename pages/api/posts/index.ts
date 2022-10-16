// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Post, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const newPost: Prisma.PostCreateInput = JSON.parse(req.body)
      const savedPost = await prisma.post.create({
        data: newPost,
      })
      res.json(savedPost)
      break

    default:
      const posts = await prisma.post.findMany()
      res.send(posts)
  }
}

export default handler
