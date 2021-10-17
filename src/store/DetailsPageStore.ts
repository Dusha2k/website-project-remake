import { IAnimeDetails, IDetailsPageStore, ICommentAnime } from '../interfaces/DetailsPageStore'
import { makeAutoObservable } from 'mobx'
import requestsAnime from '../api/anime'

class DetailsPageStore implements IDetailsPageStore {
  currentAnime: IAnimeDetails = {} as IAnimeDetails

  animeComments: ICommentAnime[] = []

  constructor() {
    makeAutoObservable(this)
  }

  getCurrentAnime = async (id: string) => {
    this.currentAnime = await requestsAnime.getCurrentAnime(id).then((res: any) => res.data)
  }

  getComments = async (id: number, page?: string, limit?: string) => {
    this.animeComments = await requestsAnime.getAnimeComments(id, page, limit).then((res: any) => res.data)
  }
}

export default new DetailsPageStore()
