import { getRequest } from './request'
import { IAnimeListRequests } from '../interfaces/Api'

const requestsAnime: IAnimeListRequests = {
  getAnimeList: (param, page = '1', limit = '12') => getRequest(`animes?page=${page}&limit=${limit}&${param}`),
  getCurrentAnime: (id: string) => getRequest(`animes/${id}`),
  getAnimeComments: (com_id: number, page = '1', limit = '10') =>
    getRequest(`comments?commentable_id=${com_id}&commentable_type=Topic&page=${page}&limit=${limit}`),
}

export default requestsAnime
