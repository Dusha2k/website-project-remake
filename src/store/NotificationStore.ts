import { makeAutoObservable } from 'mobx'

class NotificationStore {
  loading: { [key: string]: boolean } = {}

  constructor() {
    makeAutoObservable(this)
  }

  toggleLoading = (field: string) => {
    this.loading[field] = !this.loading[field]
  }
}

export default new NotificationStore()
