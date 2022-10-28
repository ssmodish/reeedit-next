import { createContext } from 'react'

const PostsContext = createContext({
  posts: null,
})

export const PostsContextProvider = (props) => {
  return <PostsContext.Provider>{props.children}</PostsContext.Provider>
}

export default PostsContext
