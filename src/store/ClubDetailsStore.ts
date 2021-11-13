import { makeAutoObservable } from 'mobx'
import requestsClubs from '../api/Clubs'
import { IClubsDetailsStore, IClubDetails } from '../interfaces/IStore/ClubDetailsStore'

class ClubDetailsStore implements IClubsDetailsStore {
  currentClub = {} as IClubDetails

  allClubs = []

  constructor() {
    makeAutoObservable(this)
  }

  getAllClubs = async () => {
    this.allClubs = await requestsClubs.getAllClubs().then((res: any) => res.data)
  }

  getCurrentClub = async (id: number) => {
    this.currentClub = await requestsClubs.getCurrentClub(id).then((res: any) => res.data)
  }
}

export default new ClubDetailsStore()
