import { makeAutoObservable } from 'mobx'

class Notificatons {
  showProfileFillNotice = true

  constructor() {
    makeAutoObservable(this)
  }

  hideProfileFillNotice() {
    this.showProfileFillNotice = false
  }
}

export default new Notificatons()