import { PostInterface } from '../../components/Post/Post.interface'

export const getAllPosts = async () => {
  const response = await fetch(
    'https://next-firebase-d9c49-default-rtdb.firebaseio.com/posts.json'
  )
  const data = await response.json()

  const posts: PostInterface[] = []

  for (const key in data) {
    posts.push({
      id: key,
      ...data[key],
    })
  }
  return posts
}

export const getPost = async (postId: string) => {
  const posts = await getAllPosts()
  return posts.filter((post) => post.id === postId)
}
