export interface PostInterface {
  id: string
  title: string
  body: string
  createdAt: number
  lastUpdated: number
  createdBy: string
  topics: string[]
  votes: { up: number; down: number }
}
