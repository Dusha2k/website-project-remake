import { IProfileRequests } from '../interfaces/Api'
import { getRequest } from './request'

const requestsProfile: IProfileRequests = {
  getCurrentProfile: (id: number) => getRequest(`users/${id}`),
  getFriendsProfile: (id: number) => getRequest(`users/${id}/friends`),
  getClubsProfile: (id: number) => getRequest(`users/${id}/clubs`),
  getFavouritesProfile: (id: number) => getRequest(`users/${id}/favourites`),
}

export default requestsProfile
