import { IAnimeDetails, IDetailsPageStore } from '../interfaces/DetailsPageStore'
import { makeAutoObservable } from 'mobx'
import requestsAnime from '../api/anime'

class DetailsPageStore implements IDetailsPageStore {
  currentAnime = {} as IAnimeDetails

  constructor() {
    makeAutoObservable(this)
  }

  getCurrentAnime = async (id: string) => {
    this.currentAnime = await requestsAnime.getCurrentAnime(id).then((res: any) => res.data)
  }
}

export default new DetailsPageStore()
