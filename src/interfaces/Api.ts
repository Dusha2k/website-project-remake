export interface IAnimeListProps {
  getAnimeList: (param: string, page: string, limit: string) => void;
  getCurrentAnime: (id: string) => void;
}
