import { UserKeycloakModel } from "./user-keycloak.model"
import { UserModel } from "./user.model"

class TotalModel {
  public user?: number
  public admin?: number
  public operator?: number
  public super_user?: number
  public news?: number
  public activity?: number
  constructor(params: TotalModel){
    Object.assign(this, params)
  }
}

class TotalStatusModel {
  public active?: number
  public banned?: number
  constructor(params: TotalModel){
    Object.assign(this, params)
  }
}


class RecentType {
  public user?: Object
  public admin?: Object
  public operator?: Object
  public super_user?: Object
  public news?: Object
  public activity?: Object
  constructor(params: RecentType){
    Object.assign(this, params)
  }
}

class RecentModel {
  public users?: UserKeycloakModel[]
  public weekly?: RecentType
  public monthly?: RecentType
  public last_year?: RecentType
  constructor(params: RecentModel){
    Object.assign(this, params)
  }
}


export class DashboardModel {
  public total?: TotalModel
  public recent?: RecentModel
  public status?: TotalStatusModel

  constructor(params: DashboardModel){
    Object.assign(this, params)
  }
}
