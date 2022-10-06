// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method } = req

  switch (method) {
    case 'POST':
      console.log('Thank you for logging in')

    default:
      res.status(200).json({ message: 'Thank you for logging in' })
  }
}

export default handler
