import { getRequest } from "./request";
import { IAnimeListProps } from "../interfaces/Api";

const requestsAnime: IAnimeListProps = {
  getAnimeList: (param, page = "1", limit = "15") =>
    getRequest(`animes?${page}&${limit}&${param}`),
  getCurrentAnime: (id: string) => getRequest(`animes/${id}`),
};

export default requestsAnime;
