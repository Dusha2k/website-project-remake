import { makeAutoObservable } from 'mobx'
import requestsClubs from '../api/Clubs'
import { IClubsDetailsStore, IClubDetails } from '../interfaces/IStore/ClubDetailsStore'
import requestsAnime from '../api/Anime'
import { ICommentAnime } from '../interfaces/IStore/DetailsPageStore'
import { handler } from '../helpers/decorator'

class ClubDetailsStore implements IClubsDetailsStore {
  currentClub = {} as IClubDetails

  allClubs = []

  clubComments: ICommentAnime[] = []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  @handler
  getAllClubs = async () => {
    this.allClubs = await requestsClubs.getAllClubs().then((res: any) => res.data)
  }

  @handler
  async getCurrentClub(id: number) {
    this.currentClub = await requestsClubs.getCurrentClub(id).then((res: any) => res.data)
  }

  @handler
  async getCommentsClub(id: number, page?: string, limit?: string) {
    const myRes = await requestsAnime.getAnimeComments(id, page, limit).then((res: any) => res.data)
    //Удаление последнего коммента из-за косяка API, дублирует комментарии последние
    myRes.pop()
    this.clubComments.push(...myRes)
    return myRes.length > 0
  }

  clearCommentsClub = () => (this.clubComments = [])
}

export default new ClubDetailsStore()
