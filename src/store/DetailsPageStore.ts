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
    const myRes = await requestsAnime.getAnimeComments(id, page, limit).then((res: any) => res.data)
    //Удаление последнего коммента из-за косяка API, дублирует комментарии последние
    myRes.pop()
    this.animeComments.push(...myRes)
    return myRes.length > 0
  }

  clearCurrentAnime = () => {
    this.currentAnime = {} as IAnimeDetails
    this.animeComments = []
  }
}

export default new DetailsPageStore()
