import { getRequest } from './Request'
import { IClubsRequests } from '../interfaces/IApi/Api'

const requestsClubs: IClubsRequests = {
  getAllClubs: (page = '1', limit = '12') => getRequest(`clubs?page=${page}&limit=${limit}`),
  getCurrentClub: (id: number) => getRequest(`clubs/${id}`),
}

export default requestsClubs
