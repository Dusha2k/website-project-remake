export interface IProfile {
  currentProfile: IProfileInfo
  getCurrentProfile: (id: number) => void
  currentProfileFriends: IProfileFriends[]
  currentProfileClubs: IProfileClubs[]
  currentProfileFavourites: IProfileFavourites
}

export interface IProfileInfo {
  about: string
  about_html: string
  banned: boolean
  common_info: Array<string>
  full_years: number
  id: number
  image: {
    x160: string
    x80: string
  }
  last_online: string
  location: string
  name: string
  nickname: string
  sex: string
  stats: {
    activity: Array<{ name: Array<string>; value: number }>
    statuses: {
      anime: Array<IProfileStatus>
      manga: Array<IProfileStatus>
    }
  }
  types: {
    anime: Array<{ name: string; value: number }>
    manga: Array<{ name: string; value: number }>
  }
  style_id: number
  url: string
}

export interface IProfileFavourites {
  animes: IFavouritesInfo[]
  mangas: IFavouritesInfo[]
  characters: IFavouritesInfo[]
  people: IFavouritesInfo[]
  mangakas: IFavouritesInfo[]
  seyu: IFavouritesInfo[]
  producers: IFavouritesInfo[]
}

export interface IFavouritesInfo {
  id: number
  image: string
  name: string
  russian: string
  url: null | string
}

export interface IProfileFriends {
  id: number
  nickname: string
  avatar: string
  image: {
    x160: string
    x148: string
    x80: string
    x64: string
    x48: string
  }
  last_online_at: string
}

export interface IProfileClubs {
  id: number
  name: string
  logo: {
    x96: string
    x73: string
    x48: string
  }
  is_censored: boolean
  join_policy: string
  comment_policy: string
}

export interface IProfileStatus {
  grouped_id: string
  id: number
  name: string
  size: number
  type: string
}
