// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    default:
      const post = await prisma.post.findUnique({
        where: { id: req.query.id },
        select: {
          body: true,
          title: true,
          comments: {
            orderBy: {
              createdAt: 'desc',
            },
            select: {
              id: true,
              message: true,
              parentId: true,
              createdAt: true,
              user: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      })
      res.send(post)
  }
}

export default handler
