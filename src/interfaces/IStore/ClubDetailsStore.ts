import { IAnimeCard } from './HomepageStore'
import requestsClubs from '../../api/Clubs'

export interface IClubsDetailsStore {
  currentClub: IClubDetails

  allClubs: IClubDetails[]

  getAllClubs: () => void

  getCurrentClub: () => void
}

export interface IClubDetails {
  animes: Array<IAnimeCard>
  characters: Array<{
    id: number
    image: { original: string; preview: string; x48: string; x96: string }
    name: string
    russian: string
    url: string
  }>
  comment_policy: string
  description: string
  description_html: string
  id: number
  images: Array<{
    can_destroy: boolean
    id: number
    main_url: string
    original_url: string
    preview_url: string
    user_id: number
  }>
  is_censored: boolean
  join_policy: string
  logo: { main: string; original: string; x96: string }
  mangas: Array<any>
  members: Array<{
    avatar: string
    id: number
    image: {
      x64: string
      x80: string
      x148: string
    }
    nickname: string
  }>
  name: string
  style_id: number
  thread_id: number
  topic_id: number
}
