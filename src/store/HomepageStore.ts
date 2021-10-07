import { IHomepageStore } from "../interfaces/HomepageStore";
import { makeAutoObservable } from "mobx";
import requestsAnime from "../api/anime";

class HomepageStore implements IHomepageStore {
  popularAnime = [];
  thisSeasonAnime = [];
  ongoingAnime = [];
  byRatingAnime = [];

  constructor() {
    makeAutoObservable(this);
  }

  getAllAnime = async () => {
    const response = await requestsAnime.getAnimeList();
  };
}

export default new HomepageStore();
