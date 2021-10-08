import { IHomepageStore } from '../interfaces/HomepageStore'
import { makeAutoObservable } from 'mobx'
import requestsAnime from '../api/anime'

class HomepageStore implements IHomepageStore {
  popularAnime = []

  thisSeasonAnime = []

  ongoingAnime = []

  byRatingAnime = []

  constructor() {
    makeAutoObservable(this)
  }

  getAllAnime = async () => {
    this.popularAnime = await requestsAnime.getAnimeList('order=popularity').then((response: any) => response.data)
    this.thisSeasonAnime = await requestsAnime
      .getAnimeList(`order=popularity&season=${new Date().getFullYear()}`)
      .then((response: any) => response.data)
    this.ongoingAnime = await requestsAnime
      .getAnimeList('order=popularity&status=ongoing')
      .then((response: any) => response.data)
    this.byRatingAnime = await requestsAnime.getAnimeList('order=ranked').then((response: any) => response.data)
  }
}

export default new HomepageStore()
