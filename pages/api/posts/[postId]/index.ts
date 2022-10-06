// import { getPost } from '../../../../utils/api-utils'
import supabase from '../../../../utils/supabase-utils'

import type { NextApiRequest, NextApiResponse } from 'next'

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  const postId = Array.isArray(req.query.postId)
    ? req.query.postId[0]
    : req.query.postId

  switch (method) {
    case 'GET':
      if (postId) {
        const post = await supabase
          .from('posts')
          .select('*')
          .eq('id', postId)
          .single()
        res.status(200).json({ post })
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default postHandler
