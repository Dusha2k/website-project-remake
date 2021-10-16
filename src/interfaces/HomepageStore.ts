export interface IHomepageStore {
  popularAnime: IAnimeCard[]

  thisSeasonAnime: IAnimeCard[]

  ongoingAnime: IAnimeCard[]

  byRatingAnime: IAnimeCard[]
}

export interface IAnimeCard {
  aired_on: string
  episodes: number
  episodes_aired: number
  id: number
  image: {
    original: string
  }
  kind: string
  name: string
  released_on: string
  russian: string
  score: string
  status: string
  url: string
}
