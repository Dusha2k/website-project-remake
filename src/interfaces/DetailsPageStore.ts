export interface IDetailsPageStore {
  currentAnime: IAnimeDetails
  getCurrentAnime: (id: string) => void
}

export interface IAnimeDetails {
  id: number
  name: string
  russian: string
  image: {
    original: string
  }
  kind: string
  score: string
  status: string
  episodes: number
  episodes_aired: number
  aired_on: string
  released_on: string
  rating: string
  description: string
  ongoing: boolean
  thread_id: number
  topic_id: number
  rates_scores_stats: Array<{ name: string; value: number }>
  rates_statuses_stats: Array<{ name: string; value: number }>
  next_episode_at: string
  genres: Array<{ id: string; russian: number }>
  videos: Array<{ hosting: string; player_url: string }>
  screenshots: []
  duration: string
}
