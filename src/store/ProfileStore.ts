import { IProfile, IProfileInfo, IProfileFavourites } from '../interfaces/IStore/ProfileStore'
import { makeAutoObservable } from 'mobx'
import requestsProfile from '../api/Profile'

class ProfileStore implements IProfile {
  currentProfile = {} as IProfileInfo

  currentProfileFriends = []

  currentProfileClubs = []

  currentProfileFavourites = {} as IProfileFavourites

  constructor() {
    makeAutoObservable(this)
  }

  getCurrentProfile = async (id: number) => {
    this.currentProfile = await requestsProfile.getCurrentProfile(id).then((res: any) => res.data)

    this.currentProfileFriends = await requestsProfile.getFriendsProfile(id).then((res: any) => res.data)

    this.currentProfileClubs = await requestsProfile.getClubsProfile(id).then((res: any) => res.data)

    this.currentProfileFavourites = await requestsProfile.getFavouritesProfile(id).then((res: any) => res.data)
  }
}

export default new ProfileStore()
