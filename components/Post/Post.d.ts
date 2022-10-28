export interface IPost {
  id: string
  title: string
  body: string
  created_at: number
  last_updated: number
  created_by: string
  topics: string[]
  votes: { up: number; down: number }
}
