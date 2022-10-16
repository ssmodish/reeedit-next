import { makeRequest } from './makeRequest'

export function getPosts() {
  return makeRequest('/posts')
}

export function getPostById(id) {
  return makeRequest(`/posts/${id}`)
}
