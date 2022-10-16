import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL + '/api',
  withCredentials: true,
})

export function makeRequest(url, options) {
  return api(url, options)
    .then((res) => res.data)
    .catch((error) => Promise.reject(error?.response?.data?.message ?? 'Error'))
}
