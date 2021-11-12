export interface IAnimeListRequests {
  getAnimeList: (param: string, page?: string, limit?: string) => Promise<any>
  getCurrentAnime: (id: string) => Promise<any>
  getAnimeComments: (com_id: number, page?: string, limit?: string) => Promise<any>
}

export interface IProfileRequests {
  getCurrentProfile: (id: number) => Promise<any>
  getFriendsProfile: (id: number) => Promise<any>
  getClubsProfile: (id: number) => Promise<any>
  getFavouritesProfile: (id: number) => Promise<any>
}

export interface IClubsRequests {
  getAllClubs: () => Promise<any>
  getCurrentClub: (id: number) => Promise<any>
}
