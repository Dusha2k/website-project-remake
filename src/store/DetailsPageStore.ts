import { IAnimeDetails, IDetailsPageStore, ICommentAnime } from '../interfaces/IStore/DetailsPageStore'
import { makeAutoObservable } from 'mobx'
import requestsAnime from '../api/Anime'
import { handler } from '../helpers/decorator'

class DetailsPageStore implements IDetailsPageStore {
  currentAnime: IAnimeDetails = {} as IAnimeDetails

  animeComments: ICommentAnime[] = []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  @handler
  async getCurrentAnime(id: string) {
    this.currentAnime = await requestsAnime.getCurrentAnime(id).then((res: any) => res.data)
  }

  @handler
  async getComments(id: number, page?: string, limit?: string) {
    const myRes = await requestsAnime.getAnimeComments(id, page, limit).then((res: any) => res.data)
    //Удаление последнего коммента из-за косяка API, дублирует комментарии последние
    myRes.pop()
    this.animeComments.push(...myRes)
    return myRes.length > 0
  }

  clearCommentsAnime = () => (this.animeComments = [])
}

export default new DetailsPageStore()
