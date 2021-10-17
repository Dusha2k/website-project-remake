export interface IAnimeListProps {
  getAnimeList: (param: string, page?: string, limit?: string) => Promise<any>
  getCurrentAnime: (id: string) => Promise<any>
  getAnimeComments: (com_id: number, page?: string, limit?: string) => Promise<any>
}
