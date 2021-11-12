export interface IDetailsPageStore {
  currentAnime: IAnimeDetails
  animeComments: Array<ICommentAnime>
  getCurrentAnime: (id: string) => void
  getComments: (id: number, page?: string, limit?: string) => void
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

export interface ICommentAnime {
  body: string
  can_be_edited: boolean
  commentable_id: number
  commentable_type: string
  created_at: string
  html_body: string
  id: number
  is_offtopic: boolean
  is_summary: boolean
  updated_at: string
  user: IUserComment
  user_id: number
}

export interface IUserComment {
  avatar: string
  id: number
  image: {
    x48: string
    x64: string
    x80: string
    x148: string
    x160: string
  }
  last_online_at: string
  nickname: string
  url: string
}
