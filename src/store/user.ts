import { UserTypes } from '@/types/base'
import { CompanyModel, DriverModel, ShipperModel } from '@/types/models'
import { makeAutoObservable } from 'mobx'

type UserT = ShipperModel | DriverModel | CompanyModel

class User {
  role: UserTypes | null = null
  data: UserT | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setUser(user: UserT) {
    this.data = user
  }
  setRole(data: UserTypes) {
    this.role = data
  }
}

export default new User()