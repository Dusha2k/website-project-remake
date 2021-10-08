export interface IAnimeListProps {
  getAnimeList: (param: string, page?: string, limit?: string) => any
  getCurrentAnime: (id: string) => any
}
