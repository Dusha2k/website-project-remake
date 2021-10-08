import { getRequest } from './request'
import { IAnimeListProps } from '../interfaces/Api'

const requestsAnime: IAnimeListProps = {
  getAnimeList: (param, page = '1', limit = '12') => getRequest(`animes?page=${page}&limit=${limit}&${param}`),
  getCurrentAnime: (id: string) => getRequest(`animes/${id}`),
}

export default requestsAnime
